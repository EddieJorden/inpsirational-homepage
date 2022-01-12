import styled from 'styled-components';

const ImageButtonDiv = styled.div`

`


const ImageButton = ({text}) => {
    return(
        <ImageButtonDiv>
            <div>
                <button>
                    {text}
                </button>
            </div>
        </ImageButtonDiv>
    )
}

export default ImageButton;