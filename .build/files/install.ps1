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
$project.ConfigurationManager | ForEach-Object {

  # Check for <NoStdLib>
  $nostdlib_setting = $_.Properties.Item("NoStdLib")

  if (-not $nostdlib_setting.Value) 
  {
    $nostdlib_setting.Value = $true
  }


  # Check for <AddAdditionalExplicitAssemblyReferences>
  #$addadditionalexplicitassemblyreferences_setting = $_.Properties.Item("AddAdditionalExplicitAssemblyReferences")

  #if (-not $addadditionalexplicitassemblyreferences_setting.Value) 
  #{
  #  $addadditionalexplicitassemblyreferences_setting.Value = $false
  #}


  # Check for <AdditionalExplicitAssemblyReferences>
  #$additionalexplicitassemblyreferences_setting = $_.Properties.Item("AdditionalExplicitAssemblyReferences")

  #if (-not $additionalexplicitassemblyreferences_setting.Value) 
  #{
  #  Write-Host ("AdditionalExplicitAssemblyReferences")
  #  # $additionalexplicitassemblyreferences_setting.Value = $true
  #}

}

Write-Host ("Bridge.NET installation was successful")