/* The YoutubeVideo.jsx primarily contains the iframe for a YouTube video
as well as the title of the video. */

import React from 'react'
import styled from 'styled-components'

/* <----------- styled components -----------> */
const Container = styled.div`
  iframe {
    width: 853px;
    height: 500px;
  }
`
/* <------- end of styled components --------> */

const YouTubeVideo = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>
  }
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
  return (
    <Container>
      <iframe
        title="a video"
        src={videoSrc}
      />
      { video.snippet.title }
    </Container>
  )
}
export default YouTubeVideo