// @flow

/* eslint consistent-this: ["error", "view"] */

import type {ComponentType, Node} from 'react';
import React, {Component} from 'react';
import {connect} from 'react-redux';

import type {GlobalStateType} from '../../redux-store-provider/reducer';

import type {LocaleType} from './reducer';
import type {LangKeyType} from './translation/type';
import {getLocalizedString} from './locale-helper';

type StateType = null;

export type ValueMapType = {
    [key: string]: string | number,
};

type ReduxActionType = {};

type ReduxPropsType = {|
    +locale: LocaleType,
|};

type PassedPropsType = {|
    +stringKey: LangKeyType,
    +valueMap?: ValueMapType,
|};

type PropsType = {...ReduxPropsType, ...PassedPropsType};

class Locale extends Component<ReduxPropsType, PassedPropsType, StateType> {
    state: StateType;
    props: PropsType;

    render(): string {
        const view = this;
        const {props} = view;
        const {stringKey, locale, valueMap} = props;

        return getLocalizedString(stringKey, locale.name, valueMap);
    }
}

const ConnectedComponent = connect<ComponentType<Locale>, PassedPropsType, ReduxPropsType, ReduxActionType>(
    (state: GlobalStateType): ReduxPropsType => ({
        locale: state.locale,
    }),
    {
        // setUser
    }
)(Locale);

export {ConnectedComponent as Locale};
