import styled from 'styled-components';

const GoalInputDiv = styled.div`
    background-color: red;
`

const submitForm = () => {
    console.log('form submitted')
}

const GoalInput = () => {
    return (
        <GoalInputDiv>
            <div>
                <form onSubmit={submitForm()}>
                    <input type="text" />
                    <input type="button" />
                </form>
            </div>
        </GoalInputDiv>
    )
}

export default GoalInput;