import React from 'react'

const SocialLink = ({url, icon_name}) => {
  return (
    <a href={url} target={'_blank'} rel={'noreferrer'}>
    <span className="fa-stack fa-lg">
    <i className="fa fa-circle-thin fa-stack-2x"></i>
    <i className={`fa ${icon_name} fa-stack-1x`}></i>
    </span>
    </a>
  )
}

export default SocialLink