import Image from 'next/image'
import React from 'react'
import EnquiryForm from './EnquiryForm'

const Enquiry = () => {
  return (
    <div style={{ display: 'flex', height: 'fit-content', padding: '40px', flexWrap: 'wrap'}}>
        <div style={{ width: '30%'}}>
            <Image src="/contact.jpg" height={500} width={500} alt="contact-iamge" />

        </div>
        <EnquiryForm />
      
    </div>
  )
}

export default Enquiry
