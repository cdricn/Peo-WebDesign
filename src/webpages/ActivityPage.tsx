import './ActivityPage.css'
import image1 from '../assets/images/image1.png'

function ActivityPage() {
  return (
    <>
      <div className='content-wrapper'>
        <div className='content-header'>ACTIVITY</div>
        <div className='activity-container'>
          <h1>TWITTER & YOUTUBE</h1>
          <div className='activity-palette'>
            <ActivityPallete />
            <ActivityPallete />
            <ActivityPallete />
            <ActivityPallete />
            <ActivityPallete />
            <ActivityPallete />
            <ActivityPallete />
            <ActivityPallete />
            <ActivityPallete />
          </div>
        </div>
        
      </div>
    </>
  );
}

function ActivityPallete() {

  const itemImage = {
    backgroundImage: `url("/${image1}")`,
  };

  return (
    <>
      <div className='palette-item'>
        <div style={itemImage}></div>
        <div className='item-title'></div>
      </div>
    </>
  )
}

export default ActivityPage