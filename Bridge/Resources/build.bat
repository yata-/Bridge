@echo off
rem this script concatenates all files specified in <include name=<what> />
rem tags on Bridge.jsb file into a single bridge.js file.

cd %~dp0

type dostools\utfbom.txt > newbridge.js

set "sep=include name"
setlocal EnableDelayedExpansion
for /F "usebackq delims=" %%l in (`findstr /c:"include name=" Bridge.jsb`) do (
 set "line=%%l"
 set "value=!line:*%sep%=!"
 set "value=!value:~2!
 set "value=!value:/=\!"
 echo Merging !value!
 type !value! >> newbridge.js
 type dostools\unixnl.txt >> newbridge.js
)

..\..\packages\BOMStrip.1.0.0\tools\BOMStrip.exe newbridge.js

ren newbridge.js bridge.js
