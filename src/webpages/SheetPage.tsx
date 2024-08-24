import style from './SheetPage.module.css'

function SheetPage() {
  return (
    <>
      <div className='page-title'>
        <h1>REFERENCE SHEET</h1>
      </div>
      <div className='sheet-description'>
        <p>
          Please use this as a reference when making fan-art or commissioning an illustration. <br />
          I am already registered under Skeb's Secondary Creation Programme, so use Skeb for your commissions.<br/><br/>
          Click on each image to enlarge them! <br/><br/>
          <span className='emphasize'>*Use for AI learning/generation and other AI-related productions is prohibited.</span>
        </p>
      </div>
      <div className='sheet-content'>
        <div className='sheetcontent-group'>
          <div className='fullimg-container'>Test</div>
          <div className='longimg-container'>Test</div>
        </div>
      </div>
    </>
  );
}

export default SheetPage