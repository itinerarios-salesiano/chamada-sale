import styles from './Button.module.scss';

export default function SaleButton({icon, size, type, active, href, className, onClick, ...props}){
  return(
    <button 
      onClick={
        () => {
          if(href){
            window.location.href = href
          }
          if(onClick){
            onClick()
          }
        }
      }
      className={`${styles.button} ${styles[size]} ${active && styles.active} ${icon && styles.hasIcon} ${styles[type]} ${className}` } {...props} >
      {icon}
      {props.children}
    </button>
  )
}