import { useState, useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom'
import { exportComponentAsJPEG } from 'react-component-export-image'
import GetAppIcon from '@material-ui/icons/GetApp';
import CachedIcon from '@material-ui/icons/Cached';

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

    const handleInput = (e: any) => {
        setMemeText(e.target.value)
    }

    if (template) return (
        <div className={styles.generation}>
            <div className={styles.flexContainer}>
                <div className={styles.columnCenter}>
                    <Meme template={template} text={memeText} ref={memeRef}/>
                </div>            
                <div className={styles.column}>
                    <div className={styles.memeLabel}>{template.label}</div>
                    <div className={styles.inputLabel}>Generated text :</div>
                    <textarea
                        className={styles.textarea}
                        value={memeText}
                        spellCheck='false'
                        onChange={handleInput}
                    />
                </div>
            </div>
            <div className={styles.buttonRow}>
                <div className={styles.columnCenter}>
                    <button
                        onClick={()=>{exportComponentAsJPEG(memeRef)}}
                        className={styles.button}
                    >
                        <GetAppIcon/>
                        <span className={styles.buttonText}>download</span>
                    </button>
                </div>
                <div className={styles.columnCenter}>
                    <button className={styles.buttonSecondary}>
                        <CachedIcon/>
                        <span className={styles.buttonText}>generate again</span>
                    </button>
                </div>
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