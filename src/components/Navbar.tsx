import styles from './Navbar.module.css'
import { Link } from "react-router-dom"

function Navbar() {
  return (
    <>
      <div className={styles.navbar}>
        <div>
          <ul className={styles.items_container}>
            <li>
              <Link to='/' className={styles.item_link}>
                <div className={styles.item}>
                  <span className={styles.item_title}>HOME</span>
                </div>
              </Link>
            </li>
            <li>
              <Link to='/profilepage' className={styles.item_link}>
                <div className={styles.item}>
                  <span className={styles.item_title}>PROFILE</span>
                </div>
              </Link>
            </li>
            <li>
              <Link to='/contactpage' className={styles.item_link}>
                <div className={styles.item}>
                  <span className={styles.item_title}>CONTACT</span>
                </div>
              </Link> 
            </li>   
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar