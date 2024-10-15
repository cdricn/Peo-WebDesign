import './MainPage.css'
import LinkGroup from '../components/links/LinkGroup'

function MainPage() {

  return (
    <>
    <div className='mainpage-image-container'>
      <div className='mainpage-image'>
      </div>
    </div>
    <div className='mainpage-content'>
      <div className='mainpage-title'>
        <h1>PEO</h1>
        <h1>YUKINOSHITA</h1>
      </div>
      <div className='mainpage-links'>
        <LinkGroup />
      </div>
    </div>
    </>
  );
}

export default MainPage