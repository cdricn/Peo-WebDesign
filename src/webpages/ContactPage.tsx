import './ContactPage.css'

function ContactDetails() {
  return (
    <>
      <div className='contactdetails-container'>
        <h2>For Everyone</h2>
        <p>
          Please allow approximately three days for a reply.
          If you do not hear back from me within 3 days,
          I'd appreciate it if you could contact me again.
          Only accept inquiries from companies and other vtubers
          on this site. Inquiries from fans are not accepted.
        </p>
        <h2>For Companies</h2>
        <p> 
          I would greatly appreciate it if you could also provide
          the name of the contact person and a link to your
          company's homepage or any other information about the
          company. I actively welcome projects that would also
          please fans outside Japan.
        </p>
        <h2>For Streamers/ <br/>Creators</h2>
        <p>
          Please include a link to the platform where you are
          active in your inquiry. As we cannot ascertain your
          activities and there is a possibility of impersonation,
          we generally do not respond to emails from individuals
          who do not follow @xxxuser on Twitter or do not
          include the above information.
        </p>
      </div>
    </>
  )
}

function ContactForm() {
  return (
    <>
      <p>E-mail <br/> xxx_email@gmail.com.</p>
      <form>
        <label>Name:</label>
        <input type='text' id='name' name='name'></input>
        <label>Email:</label>
        <input type='text' id='email' name='email'></input>
        <label>Subject:</label>
        <input type='text' id='subject' name='subject'></input>
        <label>Message:</label>
        <input type='text' id='message' name='message'></input>
      </form>
      <button id='submit-button'>Submit</button>
    </>
  )
}

function ContactPage() {
  return (
    <> 
      <div className='content-wrapper'>
        <div className='contactinfo-container'>
          <ContactDetails />
        </div>
        <div className='contactform-container'>
          <ContactForm />
        </div>
      </div>
    </>
  );
}

export default ContactPage