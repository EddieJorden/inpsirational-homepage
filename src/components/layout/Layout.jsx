import Quote from "../quote/Quote"
import styled from "styled-components";
import Goals from "../goals/Goals";
import ImageSlider from "../imageSlider/ImageSlider";
import Weather from "../weather/Weather";

const LayoutDiv = styled.div`
    min-height: 100vh;
    min-width: 100%;
    background-color: #FFF7F8;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

`

const Layout = () => {
    return (
        <LayoutDiv>
            <Quote />
            <Goals />
            <ImageSlider />
            <Weather />
        </LayoutDiv>
    )
}

export default Layout;