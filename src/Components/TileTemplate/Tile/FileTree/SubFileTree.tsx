import React from 'react'
import './SubFileTree.css'
import ShouldBeSubFile from './SubFile'

interface Props {
    fileTreeOpen: boolean
}

const SubFile: React.FC<Props> = ({ fileTreeOpen }) => {
    return (
        <div>
            <ul className={fileTreeOpen ? 'SubFileList' : 'SubFileList HideFile'}>
                <ShouldBeSubFile fileName={'Link 1'} />
                <ShouldBeSubFile fileName={'Link 2'} />
            </ul>
        </div>
    )
}

export default SubFile