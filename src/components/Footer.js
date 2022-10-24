import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
      <a href={'http://google.com'} target={'_blank'} rel={'noreferrer'}>
      <span className="fa-stack fa-lg">
      <i className="fa fa-circle-thin fa-stack-2x"></i>
      <i className="fa fa-facebook fa-stack-1x"></i>
      </span>
      </a>
      <a href={'http://google.com'} target={'_blank'} rel={'noreferrer'}>
      <span className="fa-stack fa-lg">
      <i className="fa fa-circle-thin fa-stack-2x"></i>
      <i className="fa fa-twitter fa-stack-1x"></i>
      </span>
      </a>
      <a href={'http://google.com'} target={'_blank'} rel={'noreferrer'}>
      <span className="fa-stack fa-lg">
      <i className="fa fa-circle-thin fa-stack-2x"></i>
      <i className="fa fa-linkedin fa-stack-1x"></i>
      </span>
      </a>
      <a href={'http://google.com'} target={'_blank'} rel={'noreferrer'}>
      <span className="fa-stack fa-lg">
      <i className="fa fa-circle-thin fa-stack-2x"></i>
      <i className="fa fa-instagram fa-stack-1x"></i>
      </span>
      </a>
    </div>
  )
}

export default Footer