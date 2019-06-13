// @flow

/* eslint consistent-this: ["error", "view"] */

import type {Node} from 'react';
import React, {Component} from 'react';

import type {ContextRouterType} from '../../type/react-router-dom-v4';

type PropsType = ContextRouterType;

// eslint-disable-next-line react/prefer-stateless-function
export class PageNotFound extends Component<void, null> {
    state: null;
    props: PropsType;

    render(): Node {
        return <h1>PageNotFound</h1>;
    }
}
