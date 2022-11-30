import { useState } from 'react'
import './Buttons.css'
import styled from "styled-components";

const ButtonComponent = styled.button`
    transition: .2s all ease-in-out;
    font-size: 1rem;
    &:hover {
        color: black;
    }
    &:active {
        transform: scale(.9)
    }
`;

function Buttons({ dateValue, setDateValue }) {
    const [buttons] = useState([1, 5, 30, 90, 180, 365, 1201])

    const ButtonToggle = styled(ButtonComponent)`
    color: grey;
    ${({ active }) => active && `color: black`}
    `

    const ToggleButtonDates = () => {
        return (
            <>
                {buttons.map((button) => (
                    <ButtonToggle
                        active={dateValue === button}
                        onClick={() => setDateValue(button)}>
                        {button > 1200 ? 'MAX' : button > 364 ? Math.floor(button / 365) + 'Y' : button > 29 ? Math.floor(button / 30) + 'M' : button + 'D'}
                    </ButtonToggle>
                ))}
            </>
        )
    }

    return (
        <div className="Buttons">
            <ToggleButtonDates />
        </div>
    )
}

export default Buttons