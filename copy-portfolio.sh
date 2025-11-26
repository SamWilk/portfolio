#!/bin/bash

# Portfolio Copy Script
# Usage: ./copy-portfolio.sh /path/to/destination

# Check if destination path is provided
if [ -z "$1" ]; then
    echo "Error: Please provide a destination path"
    echo "Usage: ./copy-portfolio.sh /path/to/destination"
    exit 1
fi

DESTINATION="$1"
SOURCE="$(pwd)"

echo "Copying portfolio from:"
echo "  Source: $SOURCE"
echo "  Destination: $DESTINATION"
echo ""

# Create destination directory if it doesn't exist
mkdir -p "$DESTINATION"

# Copy all files except node_modules and build artifacts
rsync -av --progress \
    --exclude 'node_modules' \
    --exclude 'dist' \
    --exclude '.git' \
    --exclude '.DS_Store' \
    --exclude '*.log' \
    --exclude '.vite' \
    "$SOURCE/" "$DESTINATION/"

echo ""
echo "✓ Portfolio copied successfully!"
echo ""
echo "Next steps:"
echo "  1. cd $DESTINATION"
echo "  2. npm install"
echo "  3. npm run dev"
