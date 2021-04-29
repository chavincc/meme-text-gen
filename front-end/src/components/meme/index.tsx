import { forwardRef } from 'react'

import styles from './style.module.css'
import { MemeTemplate } from '../../types/meme'

interface MemeProps {
    template: MemeTemplate,
    text: string,
}

const Meme = forwardRef<HTMLDivElement, MemeProps>(({template, text}, ref) => {
    const splitText = text.split('<SEP>')

    return (
        <div className={styles.meme} ref={ref}>
            <img src={`data:image/jpg;base64,${template.imageBinary}`} alt={template.label}/>
            <div className={styles.text1}>{splitText[0]}</div>
            <div className={styles.text2}>{splitText[1]}</div>
        </div>
    )
});

export default Meme