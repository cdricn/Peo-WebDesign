import './ProfilePage.css'
import image from '../images/image2.png'
import { Link } from "react-router-dom"

function ProfilePage() {
  return (
    <>
      <div className='profile-header'>
        <h1 className='font-visbyH color-D'>PROFILE</h1>
      </div>
      <div className='profile-content'>
        <div className='profile-description'>
          <div className='profile-description-title'>
            <h2 className='font-visbyB color-C'>Yukinoshita Peo</h2>
          </div>
          <div className='profile-description-short'>
            <div className='profile-info-main'>
              <p className='color-C font-visbyB'>
              Height:<br />
              Birthday:<br />
              Likes:<br />
              Dislikes:
              </p>
            </div>
            <div className='profile-info-sub font-visbyB'>
              <p>
                150cm<br />
                May 14th<br />
                Games, Peonies, Potatoes, English<br />
                Ghosts, Worms, Tomatoes
              </p>
            </div>
          </div>
          <div className='profile-description-long font-visbyB'>
            <p>
              Peo is a flower fairy living in Fairyland, above the
              sky in Japan! <br/> 
              She may be a shy and introverted girl,
              but she loves to chat with everyone! <br/>  
              She is studying English hard to chat with everyone.
            </p>
          </div>
          <div className='profile-divider'>
          </div>
          <div className='profile-description-buttons font-visbyB'>
            <div className='profile-buttons'>
            <div className='pad'>Lore</div>
            </div>
            <div className='profile-buttons'>
              <Link to='/sheetpage' className='button-text'>
                <div className='pad'>Reference Sheet</div>
              </Link>
            </div>
            <div className='profile-buttons'>
              <div className='pad'>Terms of Use</div>
            </div>
          </div>
        </div>
        <div className='profile-page-image'>
          <img src={image} className='profile-image'>
          </img>
        </div>
      </div>
    </>
  );
}

export default ProfilePage