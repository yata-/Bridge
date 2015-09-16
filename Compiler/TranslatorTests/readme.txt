These tests are to check transpilation process from end to end and can be considered as integration tests as well:
 - Test project located in Builder repo https://github.com/bridgedotnet/Builder/blob/master/TranslatorTests/Bridge.Translator.Tests.csproj
 - There is a folder with test projects https://github.com/bridgedotnet/Builder/tree/master/TranslatorTests/TestProjects
    A test project is a Bridge project with bridge.json etc.

To  create a new test project:
 - Copy one of the folders in https://github.com/bridgedotnet/Builder/tree/master/TranslatorTests/TestProjects
 - Give it a numeric incremental name, let's say `37`
 - Add `[TestCase]` attribute to method Test in class https://github.com/bridgedotnet/Builder/blob/master/TranslatorTests/OutputTest.cs
   For example,  `[TestCase("37", true, true, TestName = "OutputTest for project 37- description of what being tested")]`
  - Open the new test project in folder `37`in VisualStudio and add all required CS classes
  - Rebuild the project
  - Locate the Bridge output folder `..\TranslatorTests\TestProjects\37\Bridge\output`
  - Copy all generated files into `..\Builder\TranslatorTests\TestProjects\07\Bridge\reference`
    These reference files will be compared to actual output during test execution.
    Please note the files 'bridge.js' and 'bridge.min.js'. is checked in test 01 -you don't have to copy content into reference folder - empty files with the names is Ok.
  - Run all tests locally in Visual Studio using NUnit Test Adapter https://visualstudiogallery.msdn.microsoft.com/6ab922d0-21c0-4f06-ab5f-4ecd1fe7175d
    It allows debugging as well.
  - Push the changes and the Builder build will run the tests.

Troubleshooting on server-side:
1) Test results are on the build TESTS page. For example, https://ci.appveyor.com/project/ObjectDotNet/builder/build/tests
   It contains both js client tests and cs server tests
2) There are logs accessible on the build ARTIFACTS page (three msbuild log files and one test log file `Bridge.Translator.Tests.run.log`)
   For example, https://ci.appveyor.com/project/ObjectDotNet/builder/build/artifacts