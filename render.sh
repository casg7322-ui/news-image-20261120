#!/bin/sh
# Render this page to a 1024x1024 PNG with headless Chromium.
# Usage: ./render.sh [output.png]   (default: entry.png in this directory)
set -eu
HERE="$(cd "$(dirname "$0")" && pwd)"
OUT="${1:-$HERE/entry.png}"
CHROME="$HOME/.cache/ms-playwright/chromium-1255/chrome-linux64/chrome"
"$CHROME" --headless --disable-gpu --no-sandbox --hide-scrollbars \
  --force-device-scale-factor=1 --window-size=1024,1024 \
  --virtual-time-budget=10000 \
  --screenshot="$OUT" "file://$HERE/page.html"
echo "wrote $OUT"
