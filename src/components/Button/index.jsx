import styles from './button.module.scss'
const Button = ({title,icon}) => {
  return (
    <button className={styles.button}> {icon} {title}</button>
  )
}

export default Button