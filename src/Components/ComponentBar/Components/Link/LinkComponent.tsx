import './Link.css'
import EnverusImage from '../../../../Assets/images/Enverus_Logo.jpg'

interface Props {
    link: string
    textContent: string
}

const LinkComponent: React.FC<Props> = ({ link, textContent }) => {
    return (
        <a href={link} className='Link' target={'_'}>
            {textContent}
        </a>
    )
}

export default LinkComponent