import styles from './EventItem.module.css'
import image from '../assets/images/image4.jpg'
import { Link } from 'react-router-dom';

function EventItem() {
  return (
    <>
      <div className={styles.item_container}>
        <div className={styles.item_image}>
          <img src={image}>
          </img>
        </div>
        <div className={styles.item_text_container}>
          <div className={styles.item_header}>
            Very Long Event Header Super Charity Stream Long
          </div>
          {
          // Description div if you decide to add it back
          /* <div className={styles.item_description}>
            Some description that should be passed as props instead of
            being hardcoded in this component. Same with header and the image.
            Maybe add a cut off somehow for the text because height should be
            a fixed size.
          </div> */
          }
          <div className={styles.item_button_container}>
            <Link to={'/'} className={styles.item_link}>
              <div className={styles.item_button}>
                See More
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default EventItem