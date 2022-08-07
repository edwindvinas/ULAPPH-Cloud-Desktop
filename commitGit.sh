#!/bin/bash

rm *.exe~
rm *.exe
rm main.go.deployed
rm my.db
rm my.db.lock
git add --all
git commit -m $1 
git push origin master
