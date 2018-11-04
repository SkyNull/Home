
import dva from "dva"
import React from 'react';
import homemodul from "./dva/model/home"
import { routerRedux, Route, Switch } from 'dva/router';
import Home from "./container/home"
import App from "./container/app"
import "./base/reset.css"

import Profile from "./container/Profile/Profile";
import LoginPhone from "./container/LoginPhone/LoginPhone";
import LoginEmail from './container/LoginEmail/LoginEmail';
import RegPhone from './container/RegPhone/RegPhone';
import Logined from './container/Logined/Logined';
import Shiwu from './container/shiwu/shiwu'
import shi from './model/shiwu'

const { ConnectedRouter } = routerRedux
const app = dva()
window.app = app
app.model(homemodul)
app.model(shi);
app.router(( { history } )=>{
    return <ConnectedRouter history = {history}>
        <App>
            <Switch>
                <Route path = "/" exact component = {Home}></Route>
                <Route path="/profile" component={Profile}/>
                <Route path="/shiwu"  component={Shiwu}/>
                <Route path="/loginphone" component={LoginPhone}/>
                <Route path="/loginemail" component={LoginEmail}/>
                <Route path="/regphone" component={RegPhone}/>
                <Route path="/logined" component={Logined}/>
            </Switch>
        </App>
    </ConnectedRouter>
})
app.start("#root")



