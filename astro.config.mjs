// @ts-check
import { defineConfig } from 'astro/config';

// GitHub Pages:
// - Repo named "<username>.github.io" (or a custom domain): keep base as '/'.
// - Any other repo name (e.g. "GameIndustryWebsite"): set base to '/<repo-name>'.
export default defineConfig({
  site: 'https://dinisbernardo.github.io',
  base: '/',
});
