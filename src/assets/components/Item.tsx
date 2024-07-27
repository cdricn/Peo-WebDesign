import './Item.css'
import topimage1 from '../topdeal-image1.jpg'

function Item() {
  return (
    <>
      <div className='item-box'>
        <div>
          <img src={topimage1}></img>
        </div>
        <div className='item-description'>
          <p className='item-title'>Wireless Headphones Model TB High Definition Audio</p>
          <span className='item-price'>P500</span>
        </div>
        <div className='item-rating'>
          <span>rating</span>
        </div>
      </div>
    </>
  );
}

export default Item