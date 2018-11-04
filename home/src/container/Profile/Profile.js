import React from "react";
import "./index.css";
import HasLogin from "../HasLogin/HasLogin";
import WillLogin from "../WillLogin/WillLogin";

export default class Profile extends React.Component{
    render(){
        return <div className="m-clear">
              {/* <HasLogin/>       */}
              <WillLogin/>
        </div>
    }
}