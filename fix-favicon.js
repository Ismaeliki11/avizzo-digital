const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function fixFavicon() {
    const faviconPath = path.join(__dirname, 'public', 'favicon.webp');
    const metadata = await sharp(faviconPath).metadata();
    const maxDim = Math.max(metadata.width, metadata.height);

    await sharp(faviconPath)
        .resize({
            width: maxDim,
            height: maxDim,
            fit: 'contain',
            background: { r: 0, g: 0, b: 0, alpha: 0 }
        })
        .toFile(path.join(__dirname, 'public', 'favicon_fixed.webp'));

    console.log('Favicon fixed!');
}

fixFavicon().catch(console.error);
