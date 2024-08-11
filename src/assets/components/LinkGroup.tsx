import './LinkGroup.css'
import youtubeIcon from '../icons/ytIcon.png'
import twitterIcon from '../icons/twtIcon.png'
import twitchIcon from '../icons/twitchIcon.png'
import fanclubIcon from '../icons/fancIcon.png'
import kofiIcon from '../icons/kofiIcon.png'
import discordIcon from '../icons/dsIcon.png'

function LinkGroup() {
  return (
    <>
      <div className='link-container'>
        <ul className='link-items'>
          <div className='item'>
            <div className='item-icon'>
              <img src={youtubeIcon}>
              </img>
            </div>
            <div className='item-title'>YOUTUBE</div>
          </div>
          <div className='item'>
            <div className='item-icon'>
              <img src={twitterIcon}>
              </img>
            </div>
            <div className='item-title'>TWITTER</div>
          </div>
          <div className='item'>
            <div className='item-icon'>
              <img src={twitchIcon}>
              </img>
            </div>
            <div className='item-title'>TWITCH</div>
          </div>
          <div className='item'>
            <div className='item-icon'>
              <img src={fanclubIcon}>
              </img>
            </div>
            <div className='item-title'>FANCLUB</div>
          </div>
          <div className='item'>
            <div className='item-icon'>
              <img src={kofiIcon}>
              </img>
            </div>
            <div className='item-title'>KO-FI</div>
          </div>
          <div className='item'>
            <div className='item-icon'>
              <img src={discordIcon}>
              </img>
            </div>
            <div className='item-title'>DISCORD</div>
          </div>
        </ul>
      </div>
    </>
  );
}

export default LinkGroup