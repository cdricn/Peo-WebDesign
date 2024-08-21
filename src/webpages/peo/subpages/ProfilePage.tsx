import style from './ProfilePage.module.css'
import image from '../images/image2.png'
import { Link } from "react-router-dom"

function ProfilePage() {
  return (
    <>
      <div className={style.profile_header}>
        <h1>PROFILE</h1>
      </div>
      <div className={style.profile_content_wrapper}>
        <div className={style.profile_content}>
          <div className={style.profile_content_container}>
            <div className={style.content_title}>
              <h2>Yukinoshita Peo</h2>
            </div>
            <div className={style.subtext_container}>
              <div className={style.subtext_title}>
                <p>
                Height:<br />
                Birthday:<br />
                Likes:<br />
                Dislikes:
                </p>
              </div>
              <div className={style.subtext_description}>
                <p>
                  150cm<br />
                  May 14th<br />
                  Games, Peonies, Potatoes, English<br />
                  Ghosts, Worms, Tomatoes
                </p>
              </div>
            </div>
            <div className={style.content_description}>
              <p>
                Peo is a flower fairy living in Fairyland, above the
                sky in Japan! <br/> 
                She may be a shy and introverted girl,
                but she loves to chat with everyone! <br/>  
                She is studying English hard to chat with everyone.
              </p>
            </div>
            <div className={style.content_divider}>
            </div>
            <div className={style.content_buttons}>
              <div className={style.content_button}>
              <div className={style.button_padding}>Lore</div>
              </div>
              <div className={style.content_button}>
                <Link to='/sheetpage' className={style.button_text}>
                  <div className={style.button_padding}>Reference Sheet</div>
                </Link>
              </div>
              <div className={style.content_button}>
                <div className={style.button_padding}>Terms of Use</div>
              </div>
            </div>
          </div>
          <div className={style.profile_image_container}>
            <img src={image} className={style.profile_image}>
            </img>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfilePage