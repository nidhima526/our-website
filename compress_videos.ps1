$publicDir = "c:\Users\nidhi\OneDrive\Desktop\our website\public"
$files = Get-ChildItem -Path $publicDir -Filter "*.mp4" | Where-Object { $_.Length -gt 10MB }

foreach ($f in $files) {
    Write-Output "Compressing $($f.Name)..."
    $tempFile = "$($f.DirectoryName)\temp_$($f.Name)"
    ffmpeg -i "$($f.FullName)" -vcodec libx264 -crf 30 -preset veryfast -acodec aac -b:a 128k -y "$tempFile"
    if ($LASTEXITCODE -eq 0) {
        Remove-Item "$($f.FullName)" -Force
        Rename-Item "$tempFile" "$($f.Name)"
        Write-Output "Successfully compressed $($f.Name)."
    } else {
        Write-Output "Failed to compress $($f.Name)."
    }
}
