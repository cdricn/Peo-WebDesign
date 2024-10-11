import './MainPage.css'
import LinkGroup from '../components/links/LinkGroup'
import image from '../assets/images/image5.jpg'

function MainPage() {

  return (
    <>
    <div className='page-image-container'>
    </div>
    <div className='page-content'>
      <div className='page-title'>
        <h1>PEO<br/>
          <span style={{paddingLeft: '3.5rem'}}>YUKINOSHITA</span>
        </h1>
      </div>
      <div className='page-links'>
        <LinkGroup />
      </div>
    </div>
    </>
  );
}

export default MainPage