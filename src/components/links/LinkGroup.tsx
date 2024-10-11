import style from './LinkGroup.module.css'
import youtubeIcon from '../assets/images/icons/ytIcon.png'
import twitterIcon from '../assets/images/icons/twtIcon.png'
import twitchIcon from '../assets/images/icons/twitchIcon.png'
import fanclubIcon from '../assets/images/icons/fancIcon.png'
import kofiIcon from '../assets/images/icons/kofiIcon.png'
import discordIcon from '../assets/images/icons/dsIcon.png'

interface arr_items {
  name: string,
  srclink: string,
  img: string,
}

function LinkGroup() {
  const ytlink = 'https://www.youtube.com/@YukinoshitaPeo';
  const xlink = 'https://x.com/yukinoshitapeo';
  const twlink = 'https://www.twitch.tv/yukinoshita_peo';

  const links_arr = [
    {name: 'YOUTUBE', srclink: ytlink, img: youtubeIcon},
    {name: 'TWITTER', srclink: xlink, img: twitterIcon},
    {name: 'TWITCH', srclink: twlink, img: twitchIcon},
    {name: 'FANCLUB', srclink: '', img: fanclubIcon},
    {name: 'KO-FI', srclink: '', img: kofiIcon},
    {name: 'DISCORD', alsrclinkink: '', img: discordIcon},
  ]

  //learn to make interface

  return (
    <>
      <div className={style.link_container}>
        <ul className={style.link_items}>
          {links_arr.map((item) => (
            <Link s={item.name} v={item.srclink} c={item.img}/>
          ))}
        </ul>
      </div>
    </>
  );
}

function Link(props: arr_items){

  return (
    <>
      <li className={style.link_item}>
        <a href={props.srclink} target='_blank' className={style.link_item_container}>
          <img src={props.img} className={style.link_item_icon}>
          </img>
        </a>
        <a href={props.srclink} target='_blank'>
          <div className={style.link_item_title}>{props.name}</div>
        </a>
      </li>
    </>
  );
}

function LinkGroupx() {
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
          <li className={style.link_item}>
            <a href={ytlink} target='_blank' className={style.link_item_container}>
              <img src={youtubeIcon} className={style.link_item_icon}>
              </img>
            </a>
            <a href={ytlink} target='_blank'>
              <div className={style.link_item_title}>YOUTUBE</div>
            </a>
          </li>
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