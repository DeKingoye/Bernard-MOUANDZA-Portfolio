#!/bin/bash

LOG_FILE="/var/log/portfolio-startup.log"
IMAGE="europe-west3-docker.pkg.dev/portfolio-projet-yann/portfolio-repo/portfolio-mouandza:latest"
CONTAINER_NAME="portfolio"

echo "===== STARTUP SCRIPT BEGIN =====" | tee -a "$LOG_FILE"
date | tee -a "$LOG_FILE"

#############################################
### 1. Update system with retry logic
#############################################
retry() {
  local n=0
  local try=$1
  local cmd="${@:2}"
  until [ $n -ge $try ]
  do
    echo "Attempt $((n+1))/$try: $cmd" | tee -a "$LOG_FILE"
    $cmd && break
    n=$((n+1))
    echo "Command failed. Retrying in 5 seconds..." | tee -a "$LOG_FILE"
    sleep 5
  done

  if [ $n -eq $try ]; then
    echo "ERROR: Command failed after $try attempts: $cmd" | tee -a "$LOG_FILE"
  fi
}

echo "Updating packages..." | tee -a "$LOG_FILE"
retry 5 apt-get update -y
retry 5 apt-get upgrade -y

#############################################
### 2. Install Docker robustly
#############################################

echo "Checking if Docker is installed..." | tee -a "$LOG_FILE"
if ! command -v docker >/dev/null 2>&1; then
  echo "Docker not found. Installing Docker..." | tee -a "$LOG_FILE"

  retry 5 apt-get install -y ca-certificates curl gnupg lsb-release

  mkdir -p /etc/apt/keyrings
  retry 5 curl -fsSL https://download.docker.com/linux/debian/gpg -o /etc/apt/keyrings/docker.gpg
  chmod a+r /etc/apt/keyrings/docker.gpg

  echo \
    "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] \
     https://download.docker.com/linux/debian \
     $(lsb_release -cs) stable" \
     | tee /etc/apt/sources.list.d/docker.list >/dev/null

  retry 5 apt-get update -y
  retry 5 apt-get install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
else
  echo "Docker is already installed." | tee -a "$LOG_FILE"
fi

echo "Waiting for Docker service..." | tee -a "$LOG_FILE"
retry 10 systemctl start docker
retry 10 systemctl enable docker
retry 10 systemctl status docker

#############################################
### 3. Authenticate Docker to Artifact Registry
#############################################
echo "Configuring Docker authentication..." | tee -a "$LOG_FILE"
retry 5 gcloud auth configure-docker europe-west3-docker.pkg.dev -q

#############################################
### 4. Pull the image with retries
#############################################
echo "Pulling Docker image: $IMAGE" | tee -a "$LOG_FILE"
retry 10 docker pull $IMAGE

#############################################
### 5. Stop old container safely
#############################################
echo "Stopping any existing container..." | tee -a "$LOG_FILE"
docker stop $CONTAINER_NAME 2>/dev/null || true
docker rm $CONTAINER_NAME 2>/dev/null || true

#############################################
### 6. Start container with auto-restart
#############################################
echo "Starting new container..." | tee -a "$LOG_FILE"
retry 5 docker run -d \
  --name $CONTAINER_NAME \
  -p 80:80 \
  --restart always \
  $IMAGE

#############################################
### 7. Final checks
#############################################
echo "Checking running containers..." | tee -a "$LOG_FILE"
docker ps | tee -a "$LOG_FILE"

echo "===== STARTUP SCRIPT END =====" | tee -a "$LOG_FILE"
date | tee -a "$LOG_FILE"
