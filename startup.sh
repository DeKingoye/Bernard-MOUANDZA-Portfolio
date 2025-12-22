#!/bin/bash

LOG_FILE="/var/log/portfolio-startup.log"
IMAGE="europe-west1-docker.pkg.dev/portfolio-projet-yann-475905/portfolio-repo/portfolio-mouandza:v3"
CONTAINER_NAME="portfolio"

exec > >(tee -a "$LOG_FILE") 2>&1

echo "=================================================="
echo "🚀 STARTUP SCRIPT V9 — STABLE PRODUCTION"
date
echo "=================================================="

#############################################
# Retry helper (NO EXIT)
#############################################
retry() {
  local attempts=$1
  shift
  local cmd="$@"
  local i=1

  while [ $i -le $attempts ]; do
    echo "🔁 Attempt $i/$attempts → $cmd"
    if eval "$cmd"; then
      return 0
    fi
    echo "⚠️ Failed — retry in 5s"
    sleep 5
    i=$((i+1))
  done

  echo "❌ Command failed after $attempts attempts → $cmd"
  return 1
}

#############################################
# 1️⃣ System prep (NO upgrade)
#############################################
echo "🔧 Updating package list"
retry 5 apt-get update -y

#############################################
# 2️⃣ Docker install (safe)
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
    > /etc/apt/sources.list.d/docker.list

  retry 5 apt-get update -y
  retry 5 apt-get install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
else
  echo "✅ Docker already installed"
fi

#############################################
# 3️⃣ Docker service
#############################################
systemctl enable docker
systemctl restart docker

#############################################
# 4️⃣ Artifact Registry auth
#############################################
retry 5 gcloud auth configure-docker europe-west1-docker.pkg.dev -q

#############################################
# 5️⃣ Pull image
#############################################
retry 10 docker pull "$IMAGE"

#############################################
# 6️⃣ Run container
#############################################
docker stop "$CONTAINER_NAME" || true
docker rm "$CONTAINER_NAME" || true

docker run -d \
  --name "$CONTAINER_NAME" \
  --restart always \
  -p 80:80 \
  -e PORT=80 \
  "$IMAGE"

#############################################
# 7️⃣ Readiness check (CRITICAL)
#############################################
echo "⏳ Waiting for app on port 80..."
for i in {1..40}; do
  if curl -sf http://localhost:80 >/dev/null; then
    echo "✅ App is UP"
    break
  fi
  echo "⌛ Not ready yet ($i/40)"
  sleep 2
done

#############################################
# 8️⃣ Final state
#############################################
docker ps
echo "✅ STARTUP SCRIPT COMPLETED"
date
