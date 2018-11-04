import React from 'react';
import './index.css'
export default class Small extends React.Component {
    render() {
        let obj = this.props.obj
        return <a href={obj.schemeUrl} className="s-box">
            <div className="s-left">
                <div className="author-container">
                    <div className="author">
                        <div className="author-pic">
                            <img src={obj.avatar} alt="" />
                        </div>
                        <div className="author-name">{obj.nickname}</div>
                    </div>
                </div>
                <div className="line1">
                    <div className="title">{obj.title}</div>
                </div>
                <div className="line2">
                    <div className="sub-title">{obj.subTitle}</div>
                </div>
            </div>
            <div className="s-right">
                <div className='pic-box' style={{ backgroundImage: 'url(' + obj.picUrl + ')' }}>
                    <div className="topic">
                        <div className="topic-text">{obj.typeName}</div>
                    </div>
                </div>
            </div>
        </a>
    }
}