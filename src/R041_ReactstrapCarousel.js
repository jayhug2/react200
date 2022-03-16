import React, { Component } from "react";
import { UncontrolledCarousel } from "reactstrap";

const item = [
    {
        src: "https://search.pstatic.net/sunny/?src=https%3A%2F%2Fdata.whicdn.com%2Fimages%2F340976878%2Foriginal.jpg&type=sc960_832",
        altText : " 슬라이드1 이미지 대체 문구",
        caption : " 슬라이드1 설명",
        header: " 슬라이드1 제목"
    },
    {
        src: "https://search.pstatic.net/sunny/?src=https%3A%2F%2Fdata.whicdn.com%2Fimages%2F340976878%2Foriginal.jpg&type=sc960_832",
        altText : " 슬라이드2 이미지 대체 문구",
        caption : " 슬라이드2 설명",
        header: " 슬라이드2 제목"
    },
    {
        src: "https://search.pstatic.net/sunny/?src=https%3A%2F%2Fdata.whicdn.com%2Fimages%2F340976878%2Foriginal.jpg&type=sc960_832",
        altText : " 슬라이드3 이미지 대체 문구",
        caption : " 슬라이드3 설명",
        header: " 슬라이드3 제목"
    }
];

class R041_ReactstrapCarousel extends Component {
    render(){
        return (
            <UncontrolledCarousel items={item} />
        )
    }
}

export default R041_ReactstrapCarousel;