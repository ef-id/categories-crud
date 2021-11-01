import styles from './MenuItem.module.css'

const MenuItem = (props) => {
    return (
        <div className={styles.content}>
            <p className={styles.text}>
                {props.name}
            </p>
        </div>

    )
}

export default MenuItem;