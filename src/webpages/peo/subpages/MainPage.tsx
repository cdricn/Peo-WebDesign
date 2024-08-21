import style from './MainPage.module.css'
import EventItem from '../components/EventItem.tsx';
import LinkGroup from '../components/LinkGroup.tsx'

function MainPage() {
  const listEventItems = Array.apply(null, Array(5)).map(() => <EventItem />)

  return (
    <>
      <div className={style.body_wrapper}>
        <div className={style.body_main}>
          <div className={style.main_container}>
            <div className={style.main_items}>
              <div className={style.title_container}>
                <h1 className={style.title}>
                  PEO <br/> YUKINOSHITA
                </h1>
              </div>
              <div className={style.linkgroup_container}>
                <LinkGroup />
              </div>
            </div>
          </div>
          <div className={style.main_small_bar}>
          </div>
          <div className={style.main_medium_bar}>
          </div>
          <div className={style.main_large_bar}>
          </div>
        </div>
      </div>
      <div className={style.body_content}>
        <div className={style.divider}></div>
        <div className={style.event_container}>
          <div className={style.event_header}><h1>Upcoming Events</h1></div>
          <div className={style.event_items}>
            {listEventItems}
          </div>
        </div>
        <div className={style.event_container}>
          <div className={style.event_header}><h1>Recent Activities</h1></div>
          <div className={style.event_items}>
            {listEventItems}
          </div>
        </div>
      </div>
    </>
  );
}

export default MainPage