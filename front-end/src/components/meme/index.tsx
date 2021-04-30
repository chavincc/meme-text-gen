import { forwardRef } from 'react'
// @ts-ignore
import { Textfit } from 'react-textfit'

import styles from './style.module.css'
import { MemeTemplate } from '../../types/meme'

interface MemeProps {
    template: MemeTemplate,
    text: string,
}

const Meme = forwardRef<HTMLDivElement, MemeProps>(({template, text}, ref) => {
    const splitText = text.split('<SEP>')

    const pickStyle = (id: number) => {
        switch(id) {
            case 0:
                return [styles.textTopRight, styles.textBottomRight]
            case 70:
                return [styles.textTopLeft, styles.textBottomLeft]
            case 8:
                return [styles.textHighLeft, styles.textHighRight]
            case 25:
                return [styles.trumpLeft, styles.trumpRight]
            case 32:
                return [styles.rockTop, styles.rockMiddle]
            case 28:
                return [styles.inScroll, styles.outScroll]
            default:
                return [styles.textTop, styles.textBottom]
        } 
    }

    const textStyle = pickStyle(template.id)

    return (
        <div className={styles.meme} ref={ref}>
            <img src={`data:image/jpg;base64,${template.imageBinary}`} alt={template.label}/>
            <Textfit className={textStyle[0]} mode="multi">{splitText[0]}</Textfit>
            <Textfit className={textStyle[1]}>{splitText[1]}</Textfit>
        </div>
    )
});

export default Meme