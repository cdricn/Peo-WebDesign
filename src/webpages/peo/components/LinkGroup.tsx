import './LinkGroup.css'
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
  const fclink = 'https://www.patreon.com/YukinoshitaPeo';
  const kflink = 'https://ko-fi.com/yukinoshitapeo/';
  const dclink = 'https://discord.gg/yukinoshitapeo';

  return (
    <>
      <div className='link-container'>
        <ul className='link-items'>
          <div className='link-item'>
            <a href={ytlink} target='_blank' className='link-item-container'>
              <img src={youtubeIcon} className='link-item-icon'>
              </img>
            </a>
            <a href={ytlink} target='_blank'>
              <div className='link-item-title'>YOUTUBE</div>
            </a>
          </div>
          <div className='link-item'>
            <a href={xlink} target='_blank' className='link-item-container'>
              <img src={twitterIcon} className='link-item-icon'>
              </img>
            </a>
            <a href={xlink} target='_blank'>
              <div className='link-item-title'>TWITTER</div>
            </a>
          </div>
          <div className='link-item'>
            <a href={twlink} target='_blank' className='link-item-container'>
              <img src={twitchIcon} className='link-item-icon'>
              </img>
            </a>
            <a href={twlink} target='_blank'>
              <div className='link-item-title'>TWITCH</div>
            </a>
          </div>
          <div className='link-item'>
            <a href={fclink} target='_blank' className='link-item-container'>
              <img src={fanclubIcon} className='link-item-icon'>
              </img>
            </a>
            <a href={fclink} target='_blank'>
              <div className='link-item-title'>FANCLUB</div>
            </a>
          </div>
          <div className='link-item'>
            <a href={kflink} target='_blank' className='link-item-container'>
              <img src={kofiIcon} className='link-item-icon'>
              </img>
            </a>
            <a href={kflink} target='_blank'>
              <div className='link-item-title'>KO-FI</div>
            </a>
          </div>
          <div className='link-item'>
            <a href={dclink} target='_blank' className='link-item-container'>
              <img src={discordIcon} className='link-item-icon'>
              </img>
            </a>
            <a href={dclink} target='_blank'>
              <div className='link-item-title'>DISCORD</div>
            </a>
          </div>
        </ul>
      </div>
    </>
  );
}

export default LinkGroup