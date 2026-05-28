# Genera las 8 OG cards a partir del template _template.html y _cards.json.
# Lee y escribe TODO en UTF-8 explícito para evitar problemas de PowerShell 5.1
# con caracteres acentuados.

$ErrorActionPreference = 'Continue'
$here = Split-Path -Parent $MyInvocation.MyCommand.Path
$publica = Resolve-Path (Join-Path $here '..\..')
$edge = 'C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe'
if (-not (Test-Path $edge)) { $edge = 'C:\Program Files\Microsoft\Edge\Application\msedge.exe' }

$utf8 = [System.Text.UTF8Encoding]::new($false)

# Template + datos cargados como UTF-8 explícito
$template = [System.IO.File]::ReadAllText((Join-Path $here '_template.html'), $utf8)
$jsonRaw  = [System.IO.File]::ReadAllText((Join-Path $here '_cards.json'),    $utf8)
$cards    = $jsonRaw | ConvertFrom-Json

foreach ($c in $cards) {
  $html = $template
  $html = $html.Replace('{{EYEBROW}}', $c.eyebrow)
  $html = $html.Replace('{{TITLE}}',   $c.titulo)
  $html = $html.Replace('{{BAJADA}}',  $c.bajada)
  if ($c.titleClass -eq 'small') {
    $html = $html.Replace('<h1 class="title">', '<h1 class="title small">')
  } elseif ($c.titleClass -eq 'smaller') {
    $html = $html.Replace('<h1 class="title">', '<h1 class="title smaller">')
  }

  $htmlPath = Join-Path $here ($c.slug + '.html')
  [System.IO.File]::WriteAllText($htmlPath, $html, $utf8)

  $outPng = Join-Path $publica.Path ('og-' + $c.slug + '.png')
  & $edge --headless=new --disable-gpu --hide-scrollbars --window-size=1200,630 --screenshot="$outPng" "file:///$htmlPath" 2>$null | Out-Null
  Start-Sleep -Milliseconds 800

  if (Test-Path $outPng) {
    $size = (Get-Item $outPng).Length
    Write-Host ("OK og-" + $c.slug + ".png (" + [math]::Round($size/1024,1) + " KB)")
  } else {
    Write-Host ("ERROR generando og-" + $c.slug + ".png")
  }
}
