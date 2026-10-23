/** Recursos locais respeitam tanto a raiz local quanto a subpasta do GitHub Pages. */
export function publicAsset(path: string): string {
  return import.meta.env.BASE_URL + path.replace(/^\/+/, '');
}
