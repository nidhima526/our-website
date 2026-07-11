Add-Type -AssemblyName System.Drawing
$file = 'c:\Users\nidhi\OneDrive\Desktop\our website\public\consumer_law_card.png'
$bmp = [System.Drawing.Bitmap]::FromFile($file)
$newBmp = New-Object System.Drawing.Bitmap($bmp)
$bmp.Dispose()
$graphics = [System.Drawing.Graphics]::FromImage($newBmp)
$color = $newBmp.GetPixel(40, 800)
$brush = New-Object System.Drawing.SolidBrush($color)
$rect = New-Object System.Drawing.Rectangle(40, 810, 380, 70)
$graphics.FillRectangle($brush, $rect)
$graphics.Dispose()
$brush.Dispose()
$newBmp.Save($file, [System.Drawing.Imaging.ImageFormat]::Png)
$newBmp.Dispose()
