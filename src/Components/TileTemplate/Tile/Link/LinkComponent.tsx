import './Link.css'

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