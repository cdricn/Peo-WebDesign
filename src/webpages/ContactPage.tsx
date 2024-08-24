import styles from './ContactPage.module.css'

function ContactPage() {
  return (
    <>
      <div className={styles.contact_header}>
        <h1>CONTACT</h1>
      </div>
      <div className={styles.contact_wrapper}>
        <div className={styles.content_container}>
          <div className={styles.content}>
            <h2 className={styles.content_title}>E-mail</h2>
            <p className={styles.content_text}>
              Please use this email to contact me: xxx_email@gmail.com. <br/>
              Please allow approximately three days for a reply.
              If you do not hear back from me within 3 days,
              I'd appreciate it if you could contact me again.
              Only accept inquiries from companies and other vtubers
              on this site. Inquiries from fans are not accepted.
            </p>
          </div>
          <div className={styles.content}>
            <h2 className={styles.content_title}>For Companies</h2>
            <p className={styles.content_text}> 
              I would greatly appreciate it if you could also provide
              the name of the contact person and a link to your
              company's homepage or any other information about the
              company. I actively welcome projects that would also
              please fans outside Japan.
            </p>
          </div>
          <div className={styles.content}>
            <h2 className={styles.content_title}>For Streamers/Creators</h2>
            <p className={styles.content_text}>
              Please include a link to the platform where you are
              active in your inquiry. As we cannot ascertain your
              activities and there is a possibility of impersonation,
              we generally do not respond to emails from individuals
              who do not follow @xxxuser on Twitter or do not
              include the above information.
            </p>
          </div>
        </div>
        <div className={styles.forms_container}>
        </div>
      </div>
    </>
  );
}

export default ContactPage