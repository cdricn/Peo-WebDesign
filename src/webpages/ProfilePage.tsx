import styles from './ProfilePage.module.css'

function ProfilePage() {
  return (
    <>
      <div className='content-wrapper'>
        <div className='content-header'>PROFILE</div>
        <div className={styles['profileinfo-container']}>
          <h1>Peo <br/> Yukinoshita</h1>
          <p className={styles['profile-description']}>
            <span>Height:</span> 150cm <br/>
            <span>Birthday:</span> May 14th <br/>
            <span>Likes:</span> Games, peonies, potatoes, English <br/>
            <span>Dislikes:</span> Ghosts, worms, tomatoes <br/><br/>
            Peo is a flower fairy living in Fairyland, above the
            sky in Japan! She may be a shy and introverted
            girl, but she loves to chat with everyone! <br/><br/>

            She is studying English hard to chat with everyone.
          </p>
        </div>
        <div className={styles['image-container']}>
        </div>
        <div className={styles['circle-container']}>
          <div className={styles['circle']}></div>
        </div>
      </div>
    </>
  );
}

export default ProfilePage