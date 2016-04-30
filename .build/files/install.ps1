#First some common params, delivered by the nuget package installer
param($installPath, $toolsPath, $package, $project)

Write-Host ("Bridge.NET is configuring " + $project.ProjectName)

# Remove all references of object
ForEach ($item in $project.Object.References)
{
    if ($item.Identity.ToLower().StartsWith("system") -or $item.Identity.ToLower().StartsWith("microsoft"))
    {
        $name = $item.Identity
        Try
        {
            $item.Remove()
            Write-Host ("Removed Reference to " + $name)
        }
        Catch
        {
            Write-Host ("Failed to remove Reference to " + $name)
        }
    }
}

# Sets the NoStdLib setting to True for every project configuration.
# See Issue #419 for more information on why.
# https://github.com/bridgedotnet/Bridge/issues/419
# Once Visual Studio or NuGet defect is fixed, lines 24-85 can be removed.

$projectMSBuild = [Microsoft.Build.Construction.ProjectRootElement]::Open($project.FullName)

if ($projectMSBuild)
{
    # Clean all NoStdLib, AddAdditionalExplicitAssemblyReferences and AdditionalExplicitAssemblyReferences to avoid duplicates
    # Check if the project already has all the required properties - it means no Save&Reload dialog required
    $std = $false
    $aaear = $false
    $aear = $false
    
    ForEach ($item in $projectMSBuild.Properties)
    {
        $name = $item.Name
        if ($name -ieq "NoStdLib" -or $name -ieq "AddAdditionalExplicitAssemblyReferences" -or $name -ieq "AdditionalExplicitAssemblyReferences")
        {
            #Write-Host ($item.Name + ":" + $item.Value + " Condition:" + $item.Condition  + " Parent Condition:" + $item.Parent.Condition)
    
            # Consider only properties with no conditions
            $condition = !($item.Condition) -and !($item.Parent.Condition)
    
            # The required property does not have condition i.e. applied everytime
            # Then check if the property has required value
            # The last one (as there may be several similar properties) matters
            switch ($name)
            {
                "NoStdLib" { $std = $condition -and ($item.Value -ieq "true") } 
                "AddAdditionalExplicitAssemblyReferences" { $aaear = $condition -and ($item.Value -ieq "false") } 
                "AdditionalExplicitAssemblyReferences" { $aear = $condition -and (($item.Value -eq $null) -or ($item.Value -eq "")) } 
            }
    
            Try
            {
                $item.Parent.RemoveChild($item);
                Write-Host ("Removed Property " + $name)
            }
            Catch
            {
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
    
    if ($std -and $aaear -and $aear)
    {
        Write-Host ("Reloading the project is not required")
    }
    else
    {
        # Save the project to force reloading to fix possible IntelliSense errors
        $projectMSBuild.Save();
        Write-Host ("Saved the project to force reloading. Press Reload or Reload All")
    }
}

Write-Host ("Bridge.NET installation was successful")
