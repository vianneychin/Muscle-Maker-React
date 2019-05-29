import React from 'react'
import VideoItem from './VideoItem'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const VideoList = ({ videos, onVideoSelect }) => {
  const renderedList = videos.map( (video) => {
    return <VideoItem key={video.id.videoId} onVideoSelect={onVideoSelect} video={video}/>
  })
  return (
    <Wrapper>
      { renderedList }
    </Wrapper>
  )
}

export default VideoList