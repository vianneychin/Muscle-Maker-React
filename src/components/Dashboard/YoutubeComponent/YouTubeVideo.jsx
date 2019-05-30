/* The YoutubeVideo.jsx primarily contains the iframe for a YouTube video
as well as the title of the video. */

import React from 'react'
import { ClipLoader } from 'react-spinners';
import styled from 'styled-components'

/* <----------- styled components -----------> */
const Container = styled.div`
  iframe {
    width: 1100px;
    height: 620px;
  }
`
const Loader = styled.div`
  position: absolute;
  top: 71%;
  left: 48%;
`
/* <------- end of styled components --------> */

const YouTubeVideo = ({ video }) => {
  if (!video) {
    return (
      <Loader>
        <ClipLoader></ClipLoader>
      </Loader>
    )
  }
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
  return (
    <Container>
      <iframe
        title="a video"
        src={videoSrc}
      />
    </Container>
  )
}
export default YouTubeVideo