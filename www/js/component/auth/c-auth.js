// @flow

/* global window, setTimeout */

/* eslint consistent-this: ["error", "view"] */

import type {ComponentType, Node} from 'react';
import React, {Component} from 'react';
import {connect} from 'react-redux';

import type {GlobalStateType} from '../../redux-store-provider/reducer';

import type {SetUserType} from './action';
import {setUser} from './action';
import type {AuthType, UserType} from './reducer';

type ReduxPropsType = {|
    +auth: AuthType,
|};

type ReduxActionType = {|
    +setUser: (userState: UserType) => SetUserType,
|};

const reduxAction: ReduxActionType = {
    setUser,
};

type PassedPropsType = {||};

type PropsType = {...PassedPropsType, ...ReduxPropsType, ...ReduxActionType};

type StateType = null;

class Auth extends Component<ReduxPropsType, PassedPropsType, StateType> {
    state: StateType;

    componentDidMount() {
        const view = this;
        const {props} = view;

        setTimeout(() => {
            props.setUser({id: 'default-user-id'});
        }, 3e3);
    }

    props: PropsType;

    render(): Node {
        return null;
    }
}

const ConnectedComponent = connect<ComponentType<Auth>, PassedPropsType, ReduxPropsType, ReduxActionType>(
    (state: GlobalStateType): ReduxPropsType => ({
        auth: state.auth,
    }),
    reduxAction
)(Auth);

export {ConnectedComponent as Auth};
