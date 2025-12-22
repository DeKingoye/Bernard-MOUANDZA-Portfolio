#!/bin/bash
set -e

LOG_FILE="/var/log/portfolio-startup.log"

# 🔒 IMAGE VERSIONNÉE (CRITIQUE)
IMAGE="europe-west1-docker.pkg.dev/portfolio-projet-yann-475905/portfolio-repo/portfolio-mouandza:v2"
CONTAINER_NAME="portfolio"

exec > >(tee -a "$LOG_FILE") 2>&1

echo "=================================================="
echo "🚀 STARTUP SCRIPT V9 — PORTFOLIO (STABLE PROD)"
date
echo "=================================================="

#############################################
# Retry function (bulletproof)
#############################################
retry() {
  local attempts=$1
  shift
  local cmd="$@"
  local count=0

  until [ $count -ge $attempts ]; do
    echo "🔁 Attempt $((count+1))/$attempts → $cmd"
    if eval "$cmd"; then
      return 0
    fi
    count=$((count+1))
    echo "❌ Failed — retry in 5s"
    sleep 5
  done

  echo "🔥 FATAL: command failed after $attempts attempts → $cmd"
  exit 1
}

#############################################
# 1️⃣ System preparation
#############################################
echo "🔧 Updating system packages"
retry 5 apt-get update -y
retry 5 apt-get upgrade -y

#############################################
# 2️⃣ Docker installation (Debian 12 safe)
#############################################
if ! command -v docker >/dev/null 2>&1; then
  echo "🐳 Installing Docker"

  retry 5 apt-get install -y ca-certificates curl gnupg

  install -m 0755 -d /etc/apt/keyrings
  curl -fsSL https://download.docker.com/linux/debian/gpg \
    -o /etc/apt/keyrings/docker.asc
  chmod a+r /etc/apt/keyrings/docker.asc

  echo \
    "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] \
    https://download.docker.com/linux/debian \
    $(. /etc/os-release && echo "$VERSION_CODENAME") stable" \
    | tee /etc/apt/sources.list.d/docker.list > /dev/null

  retry 5 apt-get update -y
  retry 5 apt-get install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
else
  echo "✅ Docker already installed"
fi

#############################################
# 3️⃣ Docker service
#############################################
echo "🚀 Starting Docker"
retry 5 systemctl enable docker
retry 5 systemctl restart docker

#############################################
# 4️⃣ Artifact Registry authentication
#############################################
echo "🔐 Authenticating Docker to Artifact Registry"
retry 5 gcloud auth configure-docker europe-west1-docker.pkg.dev -q

#############################################
# 5️⃣ Pull image (version figée)
#############################################
echo "📦 Pulling image: $IMAGE"
retry 10 docker pull "$IMAGE"

#############################################
# 6️⃣ Stop previous container
#############################################
echo "🧹 Cleaning previous container"
docker stop "$CONTAINER_NAME" || true
docker rm "$CONTAINER_NAME" || true

#############################################
# 7️⃣ Run container (WATCHDOG ENABLED)
#############################################
echo "🚀 Running container (memory + cpu limits)"

retry 5 docker run -d \
  --name "$CONTAINER_NAME" \
  --restart always \
  --memory=512m \
  --cpus=1 \
  -p 80:80 \
  -e PORT=80 \
  "$IMAGE"

#############################################
# 8️⃣ Final checks
#############################################
echo "🔎 Docker status"
docker ps

echo "=================================================="
echo "✅ STARTUP SCRIPT V9 COMPLETED SUCCESSFULLY"
date
echo "=================================================="
