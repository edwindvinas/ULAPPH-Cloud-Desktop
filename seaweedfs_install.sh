#!/bin/bash
echo "Installing seaweedfs...please wait..."
HOME=/data/data/com.termux/files/home/go/src/github.com/edwindvinas
SWFS_HOME=/data/data/com.termux/files/home/storage/ulapph
GOBIN=/data/data/com.termux/files/home/go/bin/

cd $HOME
echo "Downloading SeaweedFS..."
INSTALLER=https://github.com/chrislusf/seaweedfs/releases/download/3.13/linux_arm64.tar.gz
echo "wget " $INSTALLER
wget $INSTALLER

echo "Extracting weed..."
INSFILE=linux_arm64.tar.gz
echo "tar -zxvf " $INSFILE
tar -zxvf $INSFILE

echo "Copying to Go bin folder..."
echo "mv weed " $GOBIN
mv weed $GOBIN

echo "Creating a data folder..."
mkdir $SWFS_HOME/swfs


