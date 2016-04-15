#First some common params, delivered by the nuget package installer
param($installPath, $toolsPath, $package, $project)

Write-Host ("Removing Bridge.NET specific settings on '" + $project.ProjectName)

# Sets the NoStdLib setting back to default for every project configuration.
# See Issue #419 for more information on why.
# https://github.com/bridgedotnet/Bridge/issues/419
# Once Visual Studio or NuGet defect is fixed, lines 4-27 can be removed.

$projectMSBuild = [Microsoft.Build.Construction.ProjectRootElement]::Open($project.FullName)

# Clean NoStdLib, AddAdditionalExplicitAssemblyReferences and AdditionalExplicitAssemblyReferences
ForEach ($item in $projectMSBuild.Properties)
{
    #Write-Host ($item.Name + ":" + $item.Value)
    if ($item.Name -ieq "NoStdLib" -or $item.Name -ieq "AddAdditionalExplicitAssemblyReferences" -or $item.Name -ieq "AdditionalExplicitAssemblyReferences"){
        $name = $item.Name
        Try {
            $item.Parent.RemoveChild($item);
            Write-Host ("Removed Property " + $name)
        }
        Catch {
            Write-Host ("Failed to remove Property " + $name + "Error: " +  $_.Exception.Message)
        }
    }
}

Write-Host ("Bridge.NET uninstallation was successful")