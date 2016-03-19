#First some common params, delivered by the nuget package installer
param($installPath, $toolsPath, $package, $project)

write-output ("Removing Bridge.NET specific settings on '" + $project.ProjectName + "'.")

# Sets the NoStdLib setting back to default for every project configuration.
$project.ConfigurationManager | ForEach-Object {
 $nostdlib_setting = $_.Properties.Item("NoStdLib")

 if ($nostdlib_setting.Value) {
  $nostdlib_setting.Value = $null
 }
}

write-output "All done."