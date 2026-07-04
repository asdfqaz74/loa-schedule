const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export function getImageUrl(imageUrl: string | null) {
  if (!imageUrl) return undefined;

  if (imageUrl.startsWith("http")) {
    return imageUrl;
  }

  return `${API_BASE_URL}${imageUrl}`;
}
