#!/bin/bash

LOG_FILE="/var/log/portfolio-startup.log"
IMAGE="europe-west3-docker.pkg.dev/portfolio-projet-yann/portfolio-repo/portfolio-mouandza:latest"
CONTAINER_NAME="portfolio"

echo "===== STARTUP SCRIPT V8 — BEGIN =====" | tee -a "$LOG_FILE"
date | tee -a "$LOG_FILE"

#############################################
### Retry Function (Indestructible)
#############################################
retry() {
  local n=0
  local try=$1
  local cmd="${@:2}"

  until [ $n -ge $try ]; do
    echo "[Retry $((n+1))/$try] Executing: $cmd" | tee -a "$LOG_FILE"
    $cmd && return 0
    n=$((n+1))
    echo "❌ Failed. Retrying in 5s..." | tee -a "$LOG_FILE"
    sleep 5
  done

  echo "🔥 ERROR: Command failed after $try attempts → $cmd" | tee -a "$LOG_FILE"
  return 1
}

#############################################
### 1. System Update (Safe)
#############################################
echo "🔧 Updating system..." | tee -a "$LOG_FILE"
retry 5 apt-get update -y
retry 5 apt-get upgrade -y

#############################################
### 2. Install Docker (Debian 12 FIX)
#############################################
echo "🐳 Checking Docker installation..." | tee -a "$LOG_FILE"

if ! command -v docker >/dev/null 2>&1; then
  echo "➡️ Docker not found. Installing..." | tee -a "$LOG_FILE"

  retry 5 install -m 0755 -d /etc/apt/keyrings
  retry 5 apt-get install -y ca-certificates curl gnupg

  retry 5 curl -fsSL https://download.docker.com/linux/debian/gpg \
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
  echo "✅ Docker already installed." | tee -a "$LOG_FILE"
fi

echo "🚀 Ensuring Docker service is running..." | tee -a "$LOG_FILE"
retry 5 systemctl enable docker
retry 5 systemctl restart docker
retry 5 systemctl status docker

#############################################
### 3. Authenticate to Artifact Registry
#############################################
echo "🔐 Configuring Docker auth for Artifact Registry..." | tee -a "$LOG_FILE"
retry 5 gcloud auth configure-docker europe-west3-docker.pkg.dev -q

#############################################
### 4. Pull the Docker image
#############################################
echo "📦 Pulling image: $IMAGE" | tee -a "$LOG_FILE"
retry 10 docker pull $IMAGE

#############################################
### 5. Stop previous container safely
#############################################
echo "🧹 Stopping old container if exists..." | tee -a "$LOG_FILE"
docker stop $CONTAINER_NAME 2>/dev/null || true
docker rm $CONTAINER_NAME 2>/dev/null || true

#############################################
### 6. Run container (auto-restart)
#############################################
echo "🚀 Launching new container..." | tee -a "$LOG_FILE"
retry 5 docker run -d \
  --name $CONTAINER_NAME \
  -p 80:80 \
  --restart always \
  $IMAGE

#############################################
### 7. Final Checks
#############################################
echo "🔎 Checking running containers..." | tee -a "$LOG_FILE"
docker ps | tee -a "$LOG_FILE"

echo "===== STARTUP SCRIPT V8 — END =====" | tee -a "$LOG_FILE"
date | tee -a "$LOG_FILE"
