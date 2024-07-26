import Item from './Item.tsx'
import './Container.css'

function Container() {
  return (
    <>
      <div>title
        <h1>Top Deals</h1>
      </div>
      <div>item container
        <div>
          <Item />
        </div>
      </div>
    </>
  );  
}

export default Container