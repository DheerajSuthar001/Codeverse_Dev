import React from 'react'
import ContactUsForm from '../../ContactPage/ContactUsForm'

const ContactFormSection = () => {
  return (
    <div className='mx-auto'>
      <h1 className='text-center text-2xl text-richblack-50 font-bold mb-3'>
        Get in Touch
      </h1>
      <p className='text-center text-richblack-200 mb-10'>
        We'd love to here for you, Please fill out this form.
      </p>
      <div>
        <ContactUsForm />
      </div>
    </div>
  )
}

export default ContactFormSection
