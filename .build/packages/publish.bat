@ECHO OFF

SET /p proceed=Are you sure? [y] or [n]
SET /p apikey=NuGet API Key?
SET /p version=Release version number?

IF "%proceed%"=="y" (
	:: This process may take a long time to run
	..\..\.nuget\NuGet.exe push Bridge.%version%.nupkg  %apikey%

	ECHO Bridge has been published

	..\..\.nuget\NuGet.exe push Bridge.Core.%version%.nupkg  %apikey%
	
	ECHO Bridge.Core has been published

	..\..\.nuget\NuGet.exe push Bridge.Min.%version%.nupkg  %apikey%
	
	ECHO Bridge.Min has been published

	ECHO SUCCESS!
)

PAUSE