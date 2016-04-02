#First some common params, delivered by the nuget package installer
param($installPath, $toolsPath, $package, $project)

Write-Host ("Removing Bridge.NET specific settings on '" + $project.ProjectName)

# Sets the NoStdLib setting back to default for every project configuration.
# See Issue #419 for more information on why.
# https://github.com/bridgedotnet/Bridge/issues/419
# Once Visual Studio or NuGet defect is fixed, lines 6-16 can be removed.
$project.ConfigurationManager | ForEach-Object {
    $nostdlib_setting = $_.Properties.Item("NoStdLib")

    if ($nostdlib_setting.Value) {
        $nostdlib_setting.Value = $null
    }
}

Write-Host ("Bridge.NET uninstallation was successful")