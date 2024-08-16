import './LinkGroup.css'
import youtubeIcon from '../images/icons/ytIcon.png'
import twitterIcon from '../images/icons/twtIcon.png'
import twitchIcon from '../images/icons/twitchIcon.png'
import fanclubIcon from '../images/icons/fancIcon.png'
import kofiIcon from '../images/icons/kofiIcon.png'
import discordIcon from '../images/icons/dsIcon.png'

function LinkGroup() {
  return (
    <>
      <div className='link-container fontwgt-p'>
        <ul className='link-items font-visbyB'>
          <div className='link-item'>
            <div className='link-item-icon'>
              <img src={youtubeIcon}>
              </img>
            </div>
            <div className='link-item-title'>YOUTUBE</div>
          </div>
          <div className='link-item'>
            <div className='link-item-icon'>
              <img src={twitterIcon}>
              </img>
            </div>
            <div className='link-item-title'>TWITTER</div>
          </div>
          <div className='link-item'>
            <div className='link-item-icon'>
              <img src={twitchIcon}>
              </img>
            </div>
            <div className='link-item-title'>TWITCH</div>
          </div>
          <div className='link-item'>
            <div className='link-item-icon'>
              <img src={fanclubIcon}>
              </img>
            </div>
            <div className='link-item-title'>FANCLUB</div>
          </div>
          <div className='link-item'>
            <div className='link-item-icon'>
              <img src={kofiIcon}>
              </img>
            </div>
            <div className='link-item-title'>KO-FI</div>
          </div>
          <div className='link-item'>
            <div className='link-item-icon'>
              <img src={discordIcon}>
              </img>
            </div>
            <div className='link-item-title'>DISCORD</div>
          </div>
        </ul>
      </div>
    </>
  );
}

export default LinkGroup