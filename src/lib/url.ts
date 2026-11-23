// Builds links that keep working when the site is served from a sub-path
// (e.g. https://username.github.io/GameIndustryWebsite/).
const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export function url(path = ''): string {
  return `${base}/${path.replace(/^\//, '')}`;
}
