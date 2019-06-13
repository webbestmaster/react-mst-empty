// @flow

/* global IS_PRODUCTION */

import type {LocaleNameType} from './const';
import {allLocales, localeConst} from './const';
import type {LangKeyType} from './translation/type';
import type {ValueMapType} from './c-locale';

function replacePlaceholderMap(rawString: string, valueMap: ValueMapType): string {
    let resultString = rawString;

    Object.keys(valueMap).forEach((valueKey: string) => {
        resultString = resultString.replace(`{${valueKey}}`, String(valueMap[valueKey]));
    });

    return resultString;
}

export function getLocalizedString(
    stringKey: LangKeyType,
    localeName: LocaleNameType,
    valueMap?: ValueMapType
): string {
    // eslint-disable-next-line id-match
    if (!IS_PRODUCTION) {
        if (!stringKey) {
            console.error('stringKey is not define', stringKey);
            return 'TEXT';
        }

        if (!allLocales[localeConst.defaults.localeName].hasOwnProperty(stringKey)) {
            console.error('has no key stringKey', stringKey);
            return stringKey;
        }
    }

    const resultString = allLocales[localeName][stringKey];

    return valueMap ? replacePlaceholderMap(resultString, valueMap) : resultString;
}
