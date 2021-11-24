/** 
 * i18next: learn once - translate everywhere 
 * https://www.npmjs.com/package/i18next
 */
const i18next = require('i18next');
const i18nextBackend = require('i18next-fs-backend');
const i18nextMiddleware = require('i18next-http-middleware');
const { join } = require('path');

/** Initialize i18next config */
i18next
    .use(i18nextBackend)
    .use(i18nextMiddleware.LanguageDetector)
    .init({
        debug: process.env.DEBUG,
        fallbackLng: 'tr',
        backend: {
            /** path where resources get loaded from */
            loadPath: join(__dirname, '../locales/{{lng}}/translation.json')
        }
    });

/** Exports */
module.exports = {
    i18next,
    i18nextMiddleware
};