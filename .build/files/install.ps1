#First some common params, delivered by the nuget package installer
param($installPath, $toolsPath, $package, $project)

Write-Host ("Bridge.NET is configuring " + $project.ProjectName)

# Remove all references of object
$project.Object.References | foreach-object {
    if ($_.Identity.ToLower().StartsWith("system") -or $_.Identity.ToLower().StartsWith("microsoft")) {
        Write-Host ("Removing Reference to " + $_.Identity)
        $_.Remove()
    }
}

# Sets the NoStdLib setting to True for every project configuration.
# See Issue #419 for more information on why.
# https://github.com/bridgedotnet/Bridge/issues/419
# Once Visual Studio or NuGet defect is fixed, lines 14-25 can be removed.

$project.ConfigurationManager | ForEach-Object {
    $nostdlib_setting = $_.Properties.Item("NoStdLib")

    if (-not $nostdlib_setting.Value) {
        $nostdlib_setting.Value = $true
    }
}

Write-Host ("Bridge.NET installation was successful")
