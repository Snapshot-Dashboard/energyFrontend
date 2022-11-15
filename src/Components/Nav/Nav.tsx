import './Nav.css'
import { AiOutlineMenu } from 'react-icons/ai';
import { BrowserRouter as Router, Link } from 'react-router-dom'

interface Props {
    isActive: boolean
    setIsActive: React.Dispatch<React.SetStateAction<boolean>>
}

const Nav: React.FC<Props> = ({ isActive, setIsActive }) => {
    const menuSelect = () => {
        setIsActive(!isActive)
    }


    return (
        <div>
            <div className="NavBar">
                <div className="LeftSideNavBar">
                    <div className="Title">
                        Energy Market Snapshot
                        <div className="SubTitle">Powered by SandStone</div>
                    </div>
                    <div className="RightSideNavBar">
                        <div className={isActive ? "Icon IconActive" : 'Icon'} onClick={menuSelect}>
                            <AiOutlineMenu />
                        </div>
                    </div>
                </div>
            </div>

            <div className={isActive ? "Menu MenuActive" : 'Menu'}>

                <Link to='/'>Energy</Link>
            </div>
        </div>
    )
}

export default Nav