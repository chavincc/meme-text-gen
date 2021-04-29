import { useState, useEffect } from 'react'

import styles from './style.module.css'
import { TemplateCard } from '../index'
import { MemeTemplate } from '../../types/meme'
import { getTemplates } from '../../services/meme'

function Home() {
    const [templates, setTemplates] = useState<MemeTemplate[]>([])

    useEffect(() => {
        (async () => {
            const templates = await getTemplates()
            setTemplates(templates)
            console.log(templates[0])
        })()
    }, [])

    return (
        <div className={styles.home}>
            <div className={styles.header}>
                Select template
            </div>
            <div className={styles.cardContainer}>
                {
                    templates.map(template => (
                        <TemplateCard template={template} key={template.id}/>
                    ))
                }
            </div>            
        </div>
    )
}

export default Home