import style from './Footer.module.css'

function Footer() {
  return (
    <>
      <div className={style.footer}>
        <div className={style.footer_bar}></div>
        <div className={style.footer_text}>
          <span>@20XX SOME COPYRIGHT TEXT</span>
        </div>
      </div>
    </>
  );
}

export default Footer