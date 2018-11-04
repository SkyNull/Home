import React from 'react';
import './shiwu.css';
import { connect } from "react-redux";
import Logobar from '../../component/LogoBar/LogoBar';
import Topswiper from './Topswiper/Topswiper'
import Middleswiper from './Middleswiper/Middleswiper'
import Foryou from './Foryou/Foryou'
import Tenpoint from './Tenpoint/Tenpoint'
class Shiwu extends React.Component {
    componentWillMount() {
        this.props.dispatch({
            type:'shiwu/getNewData',

        })
    }
    render() {
        console.log(this.props.data)
        return <div className="shiwu">
            <Logobar />
            <Topswiper data={this.props.data} />
            <Middleswiper data={this.props.data} />
            <Foryou data={this.props.data} />
            <Tenpoint data={this.props.data} />
        </div>
    }
}

export default connect(state => ({ ...state.shiwu }))(Shiwu)