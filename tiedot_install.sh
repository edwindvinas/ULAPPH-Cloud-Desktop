#!/bin/bash
echo "Installing Tiedot DB...please wait..."
HOME=/data/data/com.termux/files/home/storage/ulapph/

cd $HOME

echo "Creating NoSQL DB folder..."
mkdir $HOME/tiedot && cd tiedot
#export GOPATH=`pwd`  # backticks surround pwd

echo "Installing tiedot via go get..."
echo "go get github.com/HouzuoGuo/tiedot"
export GO111MODULE=off
go get github.com/HouzuoGuo/tiedot
#./bin/tiedot -mode=httpd -dir=/tmp/MyDatabase -port=8080

