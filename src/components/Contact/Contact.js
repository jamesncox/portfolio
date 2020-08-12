import React from 'react'
import ContactHeader from './ContactHeader'
import SocialHeader from './SocialHeader'
import Social from './Social'
import EmailForm from './EmailForm'

export default function Contact() {

    return (
        <>
            <ContactHeader />
            <EmailForm />
            <SocialHeader />
            <Social />
        </>
    )
}