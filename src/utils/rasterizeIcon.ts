async function loadSvgAsImage(svg: string): Promise<HTMLImageElement> {
  const blob = new Blob([svg], { type: "image/svg+xml" });
  const url = URL.createObjectURL(blob);

  const img = new Image();
  await new Promise((resolve, reject) => {
    img.onload = resolve;
    img.onerror = reject;
    img.src = url;
  });
  URL.revokeObjectURL(url);

  return img;
}

export async function rasterizeSvgToImageData(
  svg: string,
  size: number,
): Promise<ImageData> {
  const img = await loadSvgAsImage(svg);

  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d");
  if (!ctx) {
    throw new Error("2D canvas context unavailable");
  }

  ctx.drawImage(img, 0, 0, size, size);

  return ctx.getImageData(0, 0, size, size);
}

const DEFAULT_ALPHA_THRESHOLD = 128;

export function packAlphaTo1Bit(
  imageData: ImageData,
  threshold: number = DEFAULT_ALPHA_THRESHOLD,
): Uint8Array {
  const { width, height, data } = imageData;
  const bytesPerRow = Math.ceil(width / 8);
  const packed = new Uint8Array(bytesPerRow * height);

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const pixelIndex = y * width + x;
      const alpha = data[pixelIndex * 4 + 3];

      if (alpha >= threshold) {
        const byteIndex = y * bytesPerRow + (x >> 3);
        const bitIndex = 7 - (x % 8);
        packed[byteIndex] |= 1 << bitIndex;
      }
    }
  }

  return packed;
}

export function bytesToBase64(bytes: Uint8Array): string {
  let binary = "";
  for (let i = 0; i < bytes.length; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}
