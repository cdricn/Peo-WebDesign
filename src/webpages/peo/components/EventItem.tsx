import styles from './EventItem.module.css'

function EventItem() {
  return (
    <>
      <div className={styles.item_container}>
        <div className={styles.item_image}></div>
        <div className={styles.item_text_container}>
          <div className={styles.item_header}>
            HEADER
          </div>
          <div className={styles.item_description}>
            Some description probably passed as props. Same with header.
          </div>
          <div className={styles.item_button}></div>
        </div>
      </div>
    </>
  );
}

export default EventItem