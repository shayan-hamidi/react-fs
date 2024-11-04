import createCache from '@emotion/cache';
// Cache for LTR
export const cacheLtr = createCache({
  key: 'muiltr',
  prepend: true,
});
// Cache for RTL
export const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [],
  prepend: true,
});
