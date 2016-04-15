#First some common params, delivered by the nuget package installer
param($installPath, $toolsPath, $package, $project)

Write-Host ("Bridge.NET is configuring " + $project.ProjectName)

# Remove all references of object
$project.Object.References | foreach-object {
    if ($_.Identity.ToLower().StartsWith("system") -or $_.Identity.ToLower().StartsWith("microsoft")) {
        $name = $_.Identity
        Try {
            $_.Remove()
            Write-Host ("Removed Reference to " + $name)
        }
        Catch {
            Write-Host ("Failed to remove Reference to " + $name)
        }
    }
}

# Sets the NoStdLib setting to True for every project configuration.
# See Issue #419 for more information on why.
# https://github.com/bridgedotnet/Bridge/issues/419
# Once Visual Studio or NuGet defect is fixed, lines 20-52 can be removed.

$projectMSBuild = [Microsoft.Build.Construction.ProjectRootElement]::Open($project.FullName)
 
# Clean all NoStdLib, AddAdditionalExplicitAssemblyReferences and AdditionalExplicitAssemblyReferences to avoid duplicates
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
 
$propEnableNuGetImport = $projectMSBuild.AddProperty('NoStdLib', 'true');
Write-Host ("Added Property NoStdLib")
$propEnableNuGetImport = $projectMSBuild.AddProperty('AddAdditionalExplicitAssemblyReferences', 'false');
Write-Host ("Added Property AddAdditionalExplicitAssemblyReferences")
$propEnableNuGetImport = $projectMSBuild.AddProperty('AdditionalExplicitAssemblyReferences', $null);
Write-Host ("Added Property AdditionalExplicitAssemblyReferences")

# Save the project to force reloading to fix possible IntelliSense errors
$projectMSBuild.Save();
Write-Host ("Saved the project")

Write-Host ("Bridge.NET installation was successful")
