mkdir assets -Force
Copy-Item "public\ashervisionlogo.png" "assets\logo.png" -Force
Copy-Item "public\ashervisionlogo.png" "assets\splash.png" -Force
Copy-Item "public\ashervisionlogo.png" "assets\icon-only.png" -Force
Copy-Item "public\ashervisionlogo.png" "assets\icon-foreground.png" -Force
Copy-Item "public\ashervisionlogo.png" "assets\icon-background.png" -Force

npm install -D @capacitor/assets
npx @capacitor/assets generate --android

$files = Get-ChildItem -Path "src" -Filter "*.jsx" -Recurse
foreach ($f in $files) {
    $content = Get-Content $f.FullName -Raw
    if ($content -match "<video" -and $content -notmatch "webkit-playsinline") {
        $content = $content -replace "<video\b", "<video webkit-playsinline='true' preload='auto'"
        Set-Content -Path $f.FullName -Value $content -Encoding UTF8
    }
}

$css = Get-Content "src\index.css" -Raw
if ($css -notmatch "safe-area-inset") {
    $css = ":root { --sat: env(safe-area-inset-top, 0px); --sab: env(safe-area-inset-bottom, 0px); } body { padding-top: var(--sat); padding-bottom: var(--sab); } " + $css
    Set-Content -Path "src\index.css" -Value $css -Encoding UTF8
}
