#! /bin/bash

../../Resources/JSBuilder/JSBuildConsole.exe /path="../../Resources/Bridge.jsb"

cp -f ../../Resources/bridge.js ../../Resources/bridge.min.js || true
cp -f ../../Resources/bridge-debug.js ../../Resources/bridge.js || true
