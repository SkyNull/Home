import React from "react";
import "./index.css";

export default class SuperList extends React.Component{
    render(){
        return <div className="u-middle">
                <a href="" className="super">
                  <i className={this.props.pic}></i>
                  <span>{this.props.title}</span>
                </a>
        </div>
    }
}