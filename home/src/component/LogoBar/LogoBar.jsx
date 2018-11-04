import React from 'react';
import './index.css'
export default class Logobar extends React.Component {
    render() {
        return <div className="logo-bar">
            <div className="bar-main">
                <i className="iconfont icon-home lt"></i>
                <span className="lt">网易严选</span>
                <i className="iconfont icon-gouwuche rt">
                    <span className="cartNum">1</span>
                </i>
                <i className="iconfont icon-sousuo rt"></i>
            </div>
        </div>
    }
}