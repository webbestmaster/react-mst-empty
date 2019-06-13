// @flow

/* global window, location, BUILD_DATE, BRANCH_NAME, IS_PRODUCTION, PROJECT_ID, BUILD_DATE_H */

const {hostname, origin} = location;

export const appConst = {
    api: {
        // eslint-disable-next-line id-match
        url: IS_PRODUCTION ? origin : 'http://my-best-site.com',
    },
};

window.appData = {
    // eslint-disable-next-line id-match
    BUILD_DATE,
    // eslint-disable-next-line id-match
    BUILD_DATE_H,
    // eslint-disable-next-line id-match
    BRANCH_NAME,
    // eslint-disable-next-line id-match
    IS_PRODUCTION,
    // eslint-disable-next-line id-match
    PROJECT_ID,
};

export const selector = {
    appWrapper: '.js-app-wrapper',
};
