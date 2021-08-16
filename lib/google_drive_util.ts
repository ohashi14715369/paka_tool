export function getDirectDownloadLink(shareUrl: string) {
  const pattern = /https:\/\/drive\.google\.com\/file\/d\/(?<fileId>.*?)\/.*/;
  const match = pattern.exec(shareUrl);
  if (!match || !match.groups) {
    throw new Error(`Not support format: ${shareUrl}`);
  }
  const { fileId } = match.groups;
  return `https://drive.google.com/uc?export=download&id=${fileId}`;
}
