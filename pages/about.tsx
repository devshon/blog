import React from 'react'
import { NextPage } from 'next'
import { Frame } from 'components/common/frame'
import { AboutMain } from 'components/about/about-main'
import { AboutIntro } from 'components/about/about-intro'
import { AboutPhotos } from 'components/about/about-photos'

const About: NextPage = () => {
  return (
    <Frame>
      <AboutMain />
      <AboutIntro />
      <AboutPhotos />
    </Frame>
  )
}

export default About