import { FiArrowRight } from 'react-icons/fi'
import './SubFile.css'

interface Props {
    fileName: string
}

const SubFile: React.FC<Props> = ({ fileName }) => {
    return (
        <div className="SubFile">
            <div className='FileTreeIcon'><FiArrowRight /></div>
            <div>{fileName}</div>
        </div>
    )
}

export default SubFile