export default function generateDefaultI18nConfig(loadPath: string) {
    return {
        lng: 'fa',
        fallbackLng: 'fa',
        // debug: process.env.NODE_ENV === 'development',
        backend: {
            loadPath,
            // request: async (_op: any, url: string, _payload: any, cb: any) => {
            //   let localLocale, serverLocale;
            //   try {
            //     localLocale = await (await fetch(url)).json();
            //     serverLocale = await (
            //       await fetch('/portal/rest/guest/messages/ApplicationResources')
            //     ).json();
            //   } catch (err) {}

            //   cb(null, {
            //     status: 200,
            //     data: Object.assign(serverLocale, localLocale),
            //   });
            // },
        },

        detection: {
            caches: ['localStorage', 'cookie'],
            lookupLocalStorage: 'lng',
            lookupCookie: 'lng',
            cookieMinutes: 1000,
            order: ['localStorage', 'cookie'],
        },

        react: {
            wait: true,
            bindI18n: 'languageChanged loaded',
            nsMode: 'default',
            useSuspense: false,
        },
        interpolation: {
            escapeValue: false,
        },
    }
}
