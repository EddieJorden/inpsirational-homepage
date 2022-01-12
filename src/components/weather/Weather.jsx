import styled from 'styled-components';

const WeatherDiv = styled.div`
    background-color: white;
    height: 180px;
    width: 180px;
`

const Weather = () => {
    return (
        <WeatherDiv>
            <div>
                weather from api here
            </div>
        </WeatherDiv>
    )
}

export default Weather;