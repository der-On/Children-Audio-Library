#!/bin/bash

cd "$(dirname "$0")"
cd ..

git pull
rm -rf ~/.cache/chromium/Default
./setup.sh
