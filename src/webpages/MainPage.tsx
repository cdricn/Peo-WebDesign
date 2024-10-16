import './MainPage.css'
import LinkGroup from '../components/links/LinkGroup'

function MainPage() {

  return (
    <>
    <div className='home-height'>
      <div className='home-image-container'>
        <div className='home-image'>
        </div>
      </div>
      <div className='home-content-container'>
        <div className='home-title'>
          <h1>PEO</h1>
          <h1>YUKINOSHITA</h1>
        </div>
        <div className='home-links'>
          <LinkGroup />
        </div>
      </div>
    </div>
    </>
  );
}

export default MainPage