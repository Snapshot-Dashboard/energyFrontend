import { useState } from 'react'
import './Buttons.css'
import styled from "styled-components";

const ButtonComponent = styled.button`
    transition: .2s all ease-in-out;
    font-size: 1rem;
    &:hover {
        color: rgb(30, 115, 189);
    }
    &:active {
        transform: scale(.9)
    }
`;

function Buttons({ dateValue, setDateValue }) {
    // ! Roughly 5 data points equal 1 month
    const [buttons] = useState([1, 5, 30, 90, 180, 365, 1201]) // TODO Need to align with data on chart

    const ButtonToggle = styled(ButtonComponent)`
    color: grey;
    font-weight: bold;
    ${({ active }) => active && `color: rgb(30, 115, 189)`}
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