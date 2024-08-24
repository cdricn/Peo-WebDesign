import style from './ProfilePage.module.css'
import image from '../assets/images/image2.png'
import { Link } from "react-router-dom"

function ProfilePage() {
  return (
    <>
      <div className={style.profile_header}>
        <h1>PROFILE</h1>
      </div>
      <div className={style.profile_wrapper}>
        <div className={style.main}>
          <div className={style.main_container}>
            <div className={style.main_title}>
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
            <div className={style.main_description}>
              <p>
                Peo is a flower fairy living in Fairyland, above the
                sky in Japan! <br/> 
                She may be a shy and introverted girl,
                but she loves to chat with everyone! <br/>  
                She is studying English hard to chat with everyone.
              </p>
            </div>
            <div className={style.main_divider}>
            </div>
            <div className={style.main_buttons}>
              <div className={style.main_button}>
              <div className={style.button_padding}>Lore</div>
              </div>
              <div className={style.main_button}>
                <Link to='/sheetpage' className={style.button_text}>
                  <div className={style.button_padding}>Reference Sheet</div>
                </Link>
              </div>
              <div className={style.main_button}>
                <div className={style.button_padding}>Terms of Use</div>
              </div>
            </div>
          </div>
          <div className={style.main_image_container}>
            <img src={image} className={style.main_image}>
            </img>
          </div>
        </div>
        {/*<div className={style.gallery}>
          <div className={style.gallery_title}>
            <h2>Gallery</h2>
          </div>
          <div className={style.gallery_images}>
            Images for gallery
          </div>
        </div>*/}
      </div>
    </>
  );
}

export default ProfilePage