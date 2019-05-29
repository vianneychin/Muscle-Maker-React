import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  > div {
      > iframe {
          width: 853px;
          height: 500px;
      }
  }
`

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>
  }
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
  return (
    <Wrapper>
      <div>
        <iframe title="a video" src={videoSrc} />
        { video.snippet.title }
      </div>
    </Wrapper>
  )
}
export default VideoDetail