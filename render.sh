#!/bin/sh
# render.sh — render page.html to entry.png with headless Playwright Chromium.
# Usage: ./render.sh [output.png]  (default: entry.png)
# Deterministic: same input bytes -> same PNG bytes (verified 2x byte-identical).
set -e
DIR=$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)
OUT="${1:-$DIR/entry.png}"
CHROME="$HOME/.cache/ms-playwright/chromium-1255/chrome-linux64/chrome"
if [ ! -x "$CHROME" ]; then
  echo "Chromium not found at $CHROME" >&2
  exit 1
fi
"$CHROME" --headless --disable-gpu --no-sandbox --hide-scrollbars \
  --force-device-scale-factor=1 --window-size=1024,1024 \
  --virtual-time-budget=10000 \
  --screenshot="$OUT" "file://$DIR/page.html"
ls -la "$OUT"
sha256sum "$OUT"
