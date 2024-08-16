import './MainPage.css'
import LinkGroup from '../components/LinkGroup.tsx'
import cover from '../images/image3.jpg'

function MainPage() {
  return (
    <>
    <div className='landing-main bg-light'>
      <div className='landing-main-title'>
        <div className='landing-main-header font-antipastoB'>
          <h1>PEO</h1>
          <h1>YUKINOSHITA</h1>
        </div>
        <div className='peo-link-group'>
          <LinkGroup />
        </div>
      </div>
      <div className='landing-main-gallery'>
        <div className='flex-blur'>
          <div className='blur'>
          </div>
          <div className='blur2'>
          </div>
          <div className='blur3'>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default MainPage