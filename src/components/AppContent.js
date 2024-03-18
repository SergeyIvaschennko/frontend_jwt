import * as React from 'react';

import { request } from '../axios_helper';
import WelcomeContent from "./WelcomeContent";
import AuthContent from "./AuthContent";

export default class AppContent extends React.Component {

    render() {
        return (
            <div>
                <WelcomeContent/>
                <AuthContent/>
            </div>
        );
    };
}