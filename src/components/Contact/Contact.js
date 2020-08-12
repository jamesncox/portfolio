import React from 'react'
import ContactHeader from './ContactHeader'
import SocialHeader from './SocialHeader'
import Social from './Social'
import EmailForm from './EmailForm'
import ResumeHeader from './ResumeHeader'
import Resume from './Resume'

export default function Contact() {

    return (
        <>
            <ContactHeader />
            <EmailForm />
            <ResumeHeader />
            <Resume />
            <SocialHeader />
            <Social />
        </>
    )
}