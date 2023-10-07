import Select from '../Select'
import styles from './header.module.scss'
const Header = () => {
  return (<>

    <div className={styles.header}>  
        <h4> Where in the world ?</h4>
        <span className={styles.darkMode}> <span className='material-symbols-outlined' >
dark_mode
</span> Dark Mode </span>
    </div>
   
 </> )
}

export default Header