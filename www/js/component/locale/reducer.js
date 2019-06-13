// @flow

/* global localStorage, navigator */

import {combineReducers} from 'redux';

import type {ActionDataType} from '../../redux-store-provider/type';

import type {LocaleNameType} from './const';
import {localeConst, localeNameList} from './const';

function getLocaleName(): LocaleNameType {
    const savedLocaleName = localStorage.getItem(localeConst.key.localStorage.localeName);

    let localeName: LocaleNameType = localeConst.defaults.localeName;

    const hasGotFromStorage = localeNameList.some((localeNameInList: LocaleNameType): boolean => {
        if (localeNameInList === savedLocaleName) {
            localeName = localeNameInList;
            return true;
        }

        return false;
    });

    if (hasGotFromStorage) {
        return localeName;
    }

    const navigatorLanguages = navigator.languages;

    if (!Array.isArray(navigatorLanguages)) {
        return localeName;
    }

    navigatorLanguages.some((deviceLocaleName: mixed): boolean => {
        return localeNameList.some((localeNameInList: LocaleNameType): boolean => {
            if (localeNameInList === deviceLocaleName) {
                localeName = localeNameInList;
                return true;
            }
            return false;
        });
    });

    return localeName;
}

const initialLocaleName = getLocaleName();

localStorage.setItem(localeConst.key.localStorage.localeName, initialLocaleName);

export type LocaleType = {|
    +name: LocaleNameType,
|};

type ReduceMapType = {|
    +name: (localeName: LocaleNameType, actionData: ActionDataType) => LocaleNameType,
|};

export const locale = combineReducers<ReduceMapType, LocaleType>({
    name: (localeName: LocaleNameType = initialLocaleName, actionData: ActionDataType): LocaleNameType => {
        if (actionData.type !== localeConst.action.type.setLocale) {
            return localeName;
        }

        if (typeof actionData.payload === 'undefined') {
            return localeName;
        }

        return actionData.payload.localeName;
    },
});
