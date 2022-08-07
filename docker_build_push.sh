#!/bin/bash
echo "Docker build..."
sudo docker build -t ulapph-cloud-desktop:v1 .

echo "Docker tag..."
sudo docker tag ulapph-cloud-desktop:v1 edwindvinas/ulapph-cloud-desktop:v1

echo "Docker push..."
sudo docker push edwindvinas/ulapph-cloud-desktop:v1


