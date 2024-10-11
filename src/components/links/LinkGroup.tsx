import style from './LinkGroup.module.css'
import youtubeIcon from '../../assets/images/icons/ytIcon.png'
import twitterIcon from '../../assets/images/icons/twtIcon.png'
import twitchIcon from '../../assets/images/icons/twitchIcon.png'
import fanclubIcon from '../../assets/images/icons/fancIcon.png'
import kofiIcon from '../../assets/images/icons/kofiIcon.png'
import discordIcon from '../../assets/images/icons/dsIcon.png'

interface LinkProps {
  name: string;
  srclink?: string;
  srcimg: string;
}

function Link({name, srclink, srcimg}: LinkProps){
  return (
    <>
      <li className={style.link_item}>
        <a href={srclink} target='_blank' className={style.link_item_container}>
          <img src={srcimg} className={style.link_item_icon}>
          </img>
        </a>
        <a href={srclink} target='_blank'>
          <div className={style.link_item_title}>{name}</div>
        </a>
      </li>
    </>
  );
}

function LinkGroup() {
  /* json this maybe */
  const ytlink = 'https://www.youtube.com/@YukinoshitaPeo';
  const xlink = 'https://x.com/yukinoshitapeo';
  const twlink = 'https://www.twitch.tv/yukinoshita_peo';

  const linkItems_arr = [
    {name: 'YOUTUBE', srclink: ytlink, img: youtubeIcon},
    {name: 'TWITTER', srclink: xlink, img: twitterIcon},
    {name: 'TWITCH', srclink: twlink, img: twitchIcon},
    {name: 'FANCLUB', srclink: '', img: fanclubIcon},
    {name: 'KO-FI', srclink: '', img: kofiIcon},
    {name: 'DISCORD', alsrclinkink: '', img: discordIcon},
  ]

  return (
    <>
      <div className={style.link_container}>
        <ul className={style.link_items}>
          {linkItems_arr.map((item) => (
            <Link name={item.name} srclink={item.srclink} srcimg={item.img}/>
          ))}
        </ul>
      </div>
    </>
  );
}

export default LinkGroup