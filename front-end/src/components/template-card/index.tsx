import { Link } from 'react-router-dom'

import styles from './style.module.css'
import { MemeTemplate } from '../../types/meme'

interface TemplateCardProps {
    template: MemeTemplate
}

function TemplateCard({ template }: TemplateCardProps) {
    return (
        <div className={styles.templateCardGrid}>
            <Link className={styles.templateCard} to={`/generation/${template.id}`}>
                <div className={styles.imageContainer}>
                    <img src={`data:image/jpg;base64,${template.imageBinary}`} alt={template.label}/>
                </div>
                <div className={styles.templateLabel}>
                    {template.label}
                </div>
            </Link>
        </div>
    )
}

export default TemplateCard