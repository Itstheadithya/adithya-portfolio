import React from 'react'
import styles from './ContactsStyles.module.css'

function Contacts() {
  return (
    <section id='contact' className={styles.container}>
      <h1 className='sectionTitle'>Contacts</h1>
      <form action="https://formspree.io/f/xvgprvpz" method="post" target="_balnk">
        <div className='formGroup'>
            <label htmlFor='name' hidden>
                Name
            </label>
            <input type='text' name='name' id='name'
            placeholder='Name' required />
        </div>
        <div className='formGroup'>
            <label htmlFor='email' hidden>
                Email
            </label>
            <input type='text' name='email' id='email'
            placeholder='Email' required />
        </div>
        <div className='formGroup'>
            <label htmlFor='message' hidden>
                Message
            </label>
            <textarea name='message' id='message'
            placeholder='Message' required ></textarea>
        </div>
        <input className='hover btn' type='submit' value='Submit' />
      </form>
    </section>
  )
}

export default Contacts
