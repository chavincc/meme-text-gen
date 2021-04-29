import { useState, useEffect, useRef, forwardRef } from 'react'
import { useParams } from 'react-router-dom'
import { exportComponentAsJPEG } from 'react-component-export-image'

import { MemeTemplate } from '../../types/meme'
import { getTemplateById } from '../../services/meme'
import { Meme } from '../index'
import styles from './style.module.css'

interface ParamsTypes {
    id: string
}

function Generation() {
    const { id } = useParams<ParamsTypes>()
    const [template, setTemplate] = useState<MemeTemplate>()
    const [memeText, setMemeText] = useState<string>('nicky nachat <SEP> nicky napat')
    const memeRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        (async () => {
            const response = await getTemplateById(parseInt(id))
            setTemplate(response)
        })()
    }, [id])

    if (template) return (
        <div className={styles.generation}>
            <div className={styles.imageColumn}>
                <Meme template={template} text={memeText} ref={memeRef}/>
                <button onClick={()=>{exportComponentAsJPEG(memeRef)}}>download</button>
            </div>            
            <div className={styles.textColumn}>

            </div>
        </div>
    )
    else return (
        <div className={styles.generation}>
            <div className={styles.loading}>loading...</div>
        </div>
    )
}

export default Generation