import React from 'react';
import Nav from '../component/Nav/nav'
export default class App extends React.Component{
    render(){
        return <div>
            {this.props.children}
            {!/#\/(shoppingcar|profile|loginphone|loginemail|reg|search)$/.test(window.location.hash)?<Nav></Nav>:null}
        </div>
    }
}