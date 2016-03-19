#First some common params, delivered by the nuget package installer
param($installPath, $toolsPath, $package, $project)

write-output ("Setting up '" + $project.ProjectName + "'.")

# Remove all references of object
$project.Object.References | foreach-object {
 if ($_.Identity.ToLower().StartsWith("system") -or $_.Identity.ToLower().StartsWith("microsoft")) {
  write-output ("Removing reference to '" + $_.Identity + "'.")
  $_.Remove()
 }
}

# Sets the NoStdLib setting to True for every project configuration.
$project.ConfigurationManager | ForEach-Object {
 $nostdlib_setting = $_.Properties.Item("NoStdLib")

 if (-not $nostdlib_setting.Value) {
  $nostdlib_setting.Value = $true
 }
}

write-output "All done."