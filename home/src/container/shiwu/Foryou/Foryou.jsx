import React from 'react';
import './index.css'
import Big from './Big/Big'
import Small from './Small/Small'
export default class Foryou extends React.Component {
    render() {
        let obj = this.props.data.data.recommendOne;
        let obj2 = this.props.data.data.recommendTwo;
        let obj3 = this.props.data.data.recommendThree;
        return <div className="foryou">
            <div className="container">
                <div className="foryou-title">为你推荐</div>
                <Big obj={obj}/>
                <Small obj={obj2}/>
                <Small obj={obj3}/>
                <Big obj={obj}/>
                <Small obj={obj2}/>
                <Small obj={obj3}/>
            </div>
        </div>
    }
}