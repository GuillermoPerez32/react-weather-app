import React from 'react'
import SocialLink from './SocialLink'

const Footer = () => {
  return (
    <div className='footer'>
      <SocialLink url={'http://google.com'} icon_name="fa-facebook"/>
      <SocialLink url={'http://google.com'} icon_name="fa-twitter"/>
      <SocialLink url={'http://google.com'} icon_name="fa-linkedin"/>
      <SocialLink url={'http://google.com'} icon_name="fa-instagram"/>
    </div>
  )
}

export default Footer