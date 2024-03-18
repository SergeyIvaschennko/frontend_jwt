import * as React from 'react';

import { request } from '../axios_helper';
import WelcomeContent from "./WelcomeContent";

export default class AppContent extends React.Component {

    render() {
        return (
            <div>
                <WelcomeContent/>
            </div>
        );
    };
}