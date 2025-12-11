#!/bin/bash
echo "=== Startup Script: Installing Docker & Running Portfolio ==="

# Update system
apt-get update -y

# Install required packages
apt-get install -y ca-certificates curl gnupg

# Install Docker (official repo)
install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/debian/gpg | gpg --dearmor -o /etc/apt/keyrings/docker.gpg

echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] \
  https://download.docker.com/linux/debian \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" \
  > /etc/apt/sources.list.d/docker.list

apt-get update -y
apt-get install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin

echo "=== Docker installed successfully ==="

# Authenticate Docker to Artifact Registry
gcloud auth configure-docker europe-west3-docker.pkg.dev -q

# Pull image
echo "Pulling image..."
docker pull europe-west3-docker.pkg.dev/portfolio-projet-yann/portfolio-repo/portfolio-mouandza:latest

# Stop old container
docker stop portfolio || true
docker rm portfolio || true

# Run new container
docker run -d \
  --name portfolio \
  -p 80:80 \
  europe-west3-docker.pkg.dev/portfolio-projet-yann/portfolio-repo/portfolio-mouandza:latest

echo "=== Portfolio container started successfully ==="
