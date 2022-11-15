import { useState } from 'react'
import { FiArrowRight } from 'react-icons/fi'
import './File.css'
import SubFileTree from './SubFileTree'

interface Props {
    fileName: string
}

const File: React.FC<Props> = ({ fileName }) => {
    const [fileTreeOpen, setFileTreeOpen] = useState<boolean>(false)

    const handleFileTree = () => {
        setFileTreeOpen(!fileTreeOpen)
    }
    return (
        <div>
            <div className="File" onClick={handleFileTree}>
                <div className="FileHeader">
                    <div className={fileTreeOpen ? 'FileTreeIconOpen' : 'FileTreeIcon'}><FiArrowRight /></div>
                    <div>{fileName}</div>
                </div>
                <SubFileTree fileTreeOpen={fileTreeOpen} />
            </div>
        </div>
    )
}

export default File