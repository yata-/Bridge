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

# Add a new PropertyGroup with NoStdLib node.
# See Issue #419 for more information on why.
# https://github.com/bridgedotnet/Bridge/issues/419
# Once Visual Studio or NuGet defect is fixed, lines 19-22 can be removed.

$projectMSBuild = [Microsoft.Build.Construction.ProjectRootElement]::Open($project.FullName)
$propertyGroup = $projectMSBuild.AddPropertyGroup()
$propEnableNuGetImport = $propertyGroup.AddProperty('NoStdLib', 'true');
$projectMSBuild.Save()

Write-Host ("Bridge.NET installation was successful")