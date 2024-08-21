import style from './LinkGroup.module.css'
import youtubeIcon from '../images/icons/ytIcon.png'
import twitterIcon from '../images/icons/twtIcon.png'
import twitchIcon from '../images/icons/twitchIcon.png'
import fanclubIcon from '../images/icons/fancIcon.png'
import kofiIcon from '../images/icons/kofiIcon.png'
import discordIcon from '../images/icons/dsIcon.png'

function LinkGroup() {
  const ytlink = 'https://www.youtube.com/@YukinoshitaPeo';
  const xlink = 'https://x.com/yukinoshitapeo';
  const twlink = 'https://www.twitch.tv/yukinoshita_peo';
  // Empty on purpose
  const fclink = '';
  const kflink = '';
  const dclink = '';

  return (
    <>
      <div className={style.link_container}>
        <ul className={style.link_items}>
          <div className={style.link_item}>
            <a href={ytlink} target='_blank' className={style.link_item_container}>
              <img src={youtubeIcon} className={style.link_item_icon}>
              </img>
            </a>
            <a href={ytlink} target='_blank'>
              <div className={style.link_item_title}>YOUTUBE</div>
            </a>
          </div>
          <div className={style.link_item}>
            <a href={xlink} target='_blank' className={style.link_item_container}>
              <img src={twitterIcon} className={style.link_item_icon}>
              </img>
            </a>
            <a href={xlink} target='_blank'>
              <div className={style.link_item_title}>TWITTER</div>
            </a>
          </div>
          <div className={style.link_item}>
            <a href={twlink} target='_blank' className={style.link_item_container}>
              <img src={twitchIcon} className={style.link_item_icon}>
              </img>
            </a>
            <a href={twlink} target='_blank'>
              <div className={style.link_item_title}>TWITCH</div>
            </a>
          </div>
          <div className={style.link_item}>
            <a href={fclink} target='_blank' className={style.link_item_container}>
              <img src={fanclubIcon} className={style.link_item_icon}>
              </img>
            </a>
            <a href={fclink} target='_blank'>
              <div className={style.link_item_title}>FANCLUB</div>
            </a>
          </div>
          <div className={style.link_item}>
            <a href={dclink} target='_blank' className={style.link_item_container}>
              <img src={discordIcon} className={style.link_item_icon}>
              </img>
            </a>
            <a href={dclink} target='_blank'>
              <div className={style.link_item_title}>DISCORD</div>
            </a>
          </div>
          <div className={style.link_item}>
            <a href={kflink} target='_blank' className={style.link_item_container}>
              <img src={kofiIcon} className={style.link_item_icon}>
              </img>
            </a>
            <a href={kflink} target='_blank'>
              <div className={style.link_item_title}>KO-FI</div>
            </a>
          </div>
        </ul>
      </div>
    </>
  );
}

export default LinkGroup