import SaleButton from '../Button/Button';
import styles from './Navbar.module.scss';

export default function Navbar({title, items}){
  return(
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <h3>{title}</h3>
      </div>
      <div className={styles.items}>
        {items && items.map(item => (
          <SaleButton key={item.name} type={'white'} size={'small'} href={item.link}>{item.name}</SaleButton>
        ))}
      </div>
    </nav>
  )
}