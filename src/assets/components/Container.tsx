import Item from './Item.tsx'
import './Container.css'
import '../fonts.css'

function Container() {
  return (
    <>
      <div className='items-flex'>
          <Item />
      </div>
    </>
  );  
}

export default Container