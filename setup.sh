#!/bin/bash
set -e # Exit if a command exits with a non-zero status

while IFS= read -r package; do
  npm install $package
done < requirements.txt

echo "Installation complete"