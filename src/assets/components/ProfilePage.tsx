import './ProfilePage.css'
import image from '../images/image2.png'

function ProfilePage() {
  return (
    <>
      <div className='page-title'>
        <h1>PROFILE</h1>
      </div>
      <div className='profile-content'>
        <div className='profile-description'>
          <div className='description-title'>
            <h2>Yukinoshita Peo</h2>
          </div>
          <div className='description-short'>
            <div className='info-main'>
              <p className='highlight-pink'>
              Height:<br />
              Birthday:<br />
              Likes:<br />
              Dislikes:
              </p>
            </div>
            <div className='info-sub'>
              <p>
                150cm<br />
                May 14th<br />
                Games, Peonies, Potatoes, English<br />
                Ghosts, Worms, Tomatoes
              </p>
            </div>
          </div>
          <div className='description-long'>
            <p>
              Peo is a flower fairy living in Fairyland, above the
              sky in Japan! She may be a shy and introverted girl,
              but she loves to chat with everyone!

              She is studying English hard to chat with everyone.
            </p>
          </div>
          <div className='divider'>
          </div>
          <div className='description-buttons'>
            <div className='buttons'>Lore</div>
            <div className='buttons'>Reference Sheet</div>
            <div className='buttons'>Terms of Service</div>
          </div>
        </div>
        <div className='profile-image'>
          <img src={image} className='image'>
          </img>
        </div>
      </div>
    </>
  );
}

export default ProfilePage