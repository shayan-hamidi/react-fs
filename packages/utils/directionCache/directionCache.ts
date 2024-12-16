import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import rtlPlugin from 'stylis-plugin-rtl';

// Cache for LTR
export const cacheLtr = createCache({
  key: 'mui-ltr',
  prepend: true,
});
// Cache for RTL
export const cacheRtl = createCache({
  key: 'mui-rtl',
  stylisPlugins: [prefixer, rtlPlugin],
  prepend: true,
});
