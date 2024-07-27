import Item from './Item.tsx'
import './Container.css'
import '../fonts.css'

function Container() {
  return (
    <>
      <div className='group-container'>
        <h2>Top Deals</h2>
        <div className='items-flex'>
          <Item />
        </div>
      </div>
    </>
  );  
}

export default Container