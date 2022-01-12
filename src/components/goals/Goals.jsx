import styled from 'styled-components';
import GoalInput from '../goalInput/GoalInput';

const GoalsDiv = styled.div`
    background-color: #09D974
`

const Goals = () => {
    return (
        <GoalsDiv>
            <div>
                Goal Text here
            </div>
            <div>
                <GoalInput />
            </div>
        </GoalsDiv>
    )
}

export default Goals;