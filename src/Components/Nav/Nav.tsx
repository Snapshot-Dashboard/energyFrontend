import './Nav.css'
import { AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom'

interface Props {
    isActive: boolean
    setIsActive: React.Dispatch<React.SetStateAction<boolean>>
}

const Nav: React.FC<Props> = ({ isActive, setIsActive }) => {
    const menuSelect = () => setIsActive(!isActive)

    return (
        <>
            {renderNav()}
            {renderMenu()}
        </>
    )

    // ! Handle Methods
    function renderNav() {
        return (
            <>
                <div className="NavBar">
                    <div className="LeftSideNavBar">
                        {renderTitle()}
                        <div className="RightSideNavBar">
                            {renderSlider()}
                        </div>
                    </div>
                </div>
            </>
        )
    }

    function renderTitle() {
        return (
            <>
                <div className="Title">
                    Oil & Gas Snapshot
                    <div className="SubTitle">Powered by Energy News Beat</div>
                </div>
            </>
        )
    }

    function renderSlider() {
        return (
            <>
                <div className={isActive ? "Icon IconActive" : 'Icon'} onClick={menuSelect}>
                    <AiOutlineMenu />
                </div>
            </>
        )
    }

    function renderMenu() {
        return (
            <>
                <div className={isActive ? "Menu MenuActive" : 'Menu'}>
                    <Link to='/'>Support</Link>
                    <Link to='/'>Contact Us</Link>
                </div>
            </>
        )
    }
}

export default Nav