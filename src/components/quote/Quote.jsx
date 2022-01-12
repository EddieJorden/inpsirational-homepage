import styled from "styled-components";

const QuoteDiv = styled.div`
    background-color: #E63C00;
    min-height: 61vh;
    max-width: 38vw;
    display: flex;
    align-items: center;
    justify-content: center
`

const Quote = () => {
    return (
        <QuoteDiv>
            <div>
                Some Awesome Quote Here!
            </div>
        </QuoteDiv>
    )
}

export default Quote;