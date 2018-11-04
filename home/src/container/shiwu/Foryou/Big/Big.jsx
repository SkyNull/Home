import React from 'react';
export default class Big extends React.Component {
    render() {
        let obj = this.props.obj
        return <a href={obj.schemeUrl} className="foryou-first">
            <div style={{ backgroundImage: 'url(' + obj.picUrl + ')' }} className="pic-box">
                <div className="topic">
                    <div className="topic-text">{obj.typeName}</div>
                </div>
            </div>
            <div className="text-box">
                <div className="text-title">
                    <div className="title">{obj.subTitle}</div>
                    <div className="price">
                        <span className="num">{obj.priceInfo}</span>
                        <span className="yuan">元起</span>
                    </div>
                </div>
                <div className="text2">{obj.title}</div>
            </div>
        </a>
    }
}