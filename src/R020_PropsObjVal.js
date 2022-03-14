import React, { Component } from "react";
import datatype from "prop-types";

class R020_PropsObjVal extends Component {
    render() {
        let {
            Object_Json
        } = this.props;
        return (
            <div stype={{padding:"0px"}}>
                {JSON.stringify(Object_Json)}
            </div>
        )
    }
}

R020_PropsObjVal.propTypes = {
    Object_Json: datatype.shape({//props가 객체형으로 전달됐을땐 shape를 이용해 데이터타입을 지정해줄수있다.
        react: datatype.string,
        twohundred: datatype.number//자료형이 string으로 전달됐으나 데이터타입이 number로 되어있기 때문에 오류발생.
    })
}

export default R020_PropsObjVal;