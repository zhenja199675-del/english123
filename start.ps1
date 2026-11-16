# Запуск приложения локально.
# Двойной клик по этому файлу (или правой кнопкой -> Выполнить с помощью PowerShell).
$ErrorActionPreference = "Stop"
Set-Location $PSScriptRoot

$port = 8080

$ip = $null
try {
    $ip = (Get-NetIPAddress -AddressFamily IPv4 |
        Where-Object { $_.IPAddress -notlike "127.*" -and $_.InterfaceAlias -match "Wi-Fi|Wireless|Ethernet" } |
        Select-Object -First 1).IPAddress
} catch { }

Write-Host ""
Write-Host "Английский: приложение запущено." -ForegroundColor Green
Write-Host "На этом компьютере:  http://127.0.0.1:$port/"
if ($ip) { Write-Host "С телефона (та же Wi-Fi):  http://${ip}:$port/" -ForegroundColor Cyan }
Write-Host ""
Write-Host "Закрыть - Ctrl+C или закрыть это окно."
Write-Host ""

Start-Process "http://127.0.0.1:$port/"
python -m http.server $port --bind 0.0.0.0
