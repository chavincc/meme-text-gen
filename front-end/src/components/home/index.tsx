import { useState, useEffect } from 'react'

import styles from './style.module.css'
import { TemplateCard } from '../index'
import { MemeTemplate } from '../../types/meme'

function Home() {
    const [templates, setTemplates] = useState<MemeTemplate[]>([])

    useEffect(() => {
        setTemplates([
            {
                id: 0,
                label: 'Drake Hotline Bling',
                imageBinary: '123456'
            },
            {
                id: 0,
                label: 'Drake Hotline Bling',
                imageBinary: '123456'
            },
            {
                id: 0,
                label: 'Drake Hotline Bling',
                imageBinary: '123456'
            },
            {
                id: 0,
                label: 'Drake Hotline Bling',
                imageBinary: '123456'
            },
            {
                id: 0,
                label: 'Drake Hotline Bling',
                imageBinary: '123456'
            },
            {
                id: 0,
                label: 'Drake Hotline Bling',
                imageBinary: '123456'
            },
        ])
    }, [])

    return (
        <div className={styles.home}>
            <div className={styles.header}>
                Select template
            </div>
            <div className={styles.cardContainer}>
                {
                    templates.map(template => (
                        <TemplateCard template={template}/>
                    ))
                }
            </div>            
        </div>
    )
}

export default Home