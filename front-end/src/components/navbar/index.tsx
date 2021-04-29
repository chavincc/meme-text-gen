import { Link } from 'react-router-dom'

import styles from './style.module.css'
import { MenuItem } from '../../types/navigation'

const menu: MenuItem[] = [
    {
        label: 'Home',
        to: '/'
    }
]

function Navbar() {
    return (
        <div className={styles.navbar}>
            <div className={styles.logo}>MemeGenerator</div>
            <div className={styles.menuItemContainer}>
                {
                    menu.map(item => (
                        <Link
                            key={item.to}
                            to={item.to}
                            className={styles.menuItem}
                        >
                            {item.label}
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default Navbar