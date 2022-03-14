import React, { Component } from "react";
import datatype from "prop-types";

class R021_PropsRequired extends Component{
    render() {
        let {
            ReactString,
            ReactNumber
        } = this.props;
        return(
            <div style={{padding:"0px"}}>
                {ReactString}{ReactNumber}
            </div>
        )
    }
}

R021_PropsRequired.propTypes = {
    ReactString : datatype.isRequired,//ReactString이 필수값으로 지정되었으나 상위컴포넌트에서 전달하지 않기때문에 오류가 발생
}

export default R021_PropsRequired;