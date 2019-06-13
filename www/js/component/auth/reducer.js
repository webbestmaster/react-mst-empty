// @flow

import {combineReducers} from 'redux';

import type {ActionDataType} from '../../redux-store-provider/type';

import type {PopupStateType} from './action';
import {authConst} from './const';

export type UserType = {|
    +id: string,
|} | null;

const defaultUserState: UserType = null;

export type PopupNameType = 'login';

export type PopupMapStateType = {|
    +login: PopupStateType,
|};

const defaultPopupMapState: PopupMapStateType = {
    [authConst.popupName.login]: {
        isOpen: false,
    },
};

export type AuthType = {|
    +user: UserType,
    +popup: PopupMapStateType,
|};

type ReduceMapType = {|
    +user: (userState: UserType, actionData: ActionDataType) => UserType,
    +popup: (popupMapState: PopupMapStateType, actionData: ActionDataType) => PopupMapStateType,
|};

export const auth = combineReducers<ReduceMapType, AuthType>({
    user: (userState: UserType = defaultUserState, actionData: ActionDataType): UserType => {
        if (actionData.type !== authConst.action.type.setUserState) {
            return userState;
        }

        if (typeof actionData.payload === 'undefined') {
            return userState;
        }

        return actionData.payload;
    },
    popup: (popupMapState: PopupMapStateType = defaultPopupMapState, actionData: ActionDataType): PopupMapStateType => {
        if (actionData.type !== authConst.action.type.setPopupState) {
            return popupMapState;
        }

        if (typeof actionData.payload === 'undefined') {
            return popupMapState;
        }

        const {popupName, state} = actionData.payload;

        const newState = {...popupMapState[popupName], ...state};

        return {...popupMapState, [popupName]: newState};
    },
});
