import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  > div {
    > iframe {
      width: 1280px;
      height: 750px;
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
      </div>
    </Wrapper>
  )
}
export default VideoDetail