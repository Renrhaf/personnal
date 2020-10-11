import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Homepage from './dark/PortfolioLanding';
import Contact from "./elements/Contact";
import PortfolioDetails from "./elements/PortfolioDetails";
import error404 from "./elements/error404";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import WebsiteDevelopment from "./elements/service/details/WebsiteDevelopment";
import AppDevelopment from "./elements/service/details/AppDevelopment";
import Hosting from "./elements/service/details/Hosting";
import TechnicalAudit from "./elements/service/details/TechnicalAudit";
import SearchEngineOptimization from "./elements/service/details/SearchEngineOptimization";
import Training from "./elements/service/details/Training";

class Root extends Component {
    render() {
        return (
            <BrowserRouter basename={'/'}>
                <Switch>
                    <Route exact path={`${process.env.PUBLIC_URL}/`} component={Homepage} />
                    <Route exact path={`${process.env.PUBLIC_URL}/service/creation-site-web`} component={WebsiteDevelopment} />
                    <Route exact path={`${process.env.PUBLIC_URL}/service/developpement-applicatif`} component={AppDevelopment} />
                    <Route exact path={`${process.env.PUBLIC_URL}/service/hebergement`} component={Hosting} />
                    <Route exact path={`${process.env.PUBLIC_URL}/service/audit-technique`} component={TechnicalAudit} />
                    <Route exact path={`${process.env.PUBLIC_URL}/service/referencement`} component={SearchEngineOptimization} />
                    <Route exact path={`${process.env.PUBLIC_URL}/service/formation-mentorat`} component={Training} />
                    <Route exact path={`${process.env.PUBLIC_URL}/contact`} component={Contact}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/portfolio-details`} component={PortfolioDetails}/>
                    <Route path={`${process.env.PUBLIC_URL}/404`} component={error404}/>
                    <Route component={error404}/>
                </Switch>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<Root/>, document.getElementById('root'));
serviceWorker.register();
