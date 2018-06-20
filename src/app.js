import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import IndecisionApp from './components/indecision-components/IndecisionApp';
import GsyncApp from './components/GsyncApp';
import DrivePage from './components/DrivePage';
import GmailPage from './components/GmailPage';
import FormPage from './components/FormPage';
import CalendarPage from './components/CalendarPage';
import Header from './components/Header';
import Footer from './components/Footer';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const indecisionAppRoute = () => (
    <div>
        <IndecisionApp />
    </div>
);

const googleLoginPage = () => (
    <div>
        < GsyncApp />
    </div>
);

const gmailPage = () => (
    <div>
        < GmailPage />
    </div>
);

const calenderPage = () => (
    <div>
        < CalendarPage />
    </div>
);

const formsPage = () => (
    <div>
        < FormPage />
    </div>
);

const drivePage = () => (
    <div>
        < DrivePage />
    </div>
);

const pageNotFound = () => (
    <div>
        Page not found : 
        <Link to="/">Go Home</Link>
    </div>
);

const routes = (
    <BrowserRouter>
        <div>
            <Header />
            <div className="container-fullwidth">
            <Switch>
                <Route path="/indecisionApp" component={indecisionAppRoute} exact={true}/>
                <Route path="/" component={googleLoginPage} exact={true}/>
                <Route path="/login" component={googleLoginPage} exact={true} />
                <Route path="/gmail" component={gmailPage} exact={true} />
                <Route path="/calender" component={calenderPage} exact={true} />
                <Route path="/forms" component={formsPage} exact={true} />
                <Route path="/drive" component={drivePage} exact={true} />
                <Route component={pageNotFound} />
            </Switch>
            </div>
            
            <Footer />
        </div>
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));