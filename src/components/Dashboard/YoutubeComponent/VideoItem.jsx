import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  width: 32em;
  > img {
    max-width: 180px;
  }
`
const Span = styled.span`
  display: inline-block;
  width: 16em;
`

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div>
      <Span>{ video.snippet.title }</Span>
      <Wrapper onClick={ () => onVideoSelect(video) }>
        <img alt={video.snippet.title} src={video.snippet.thumbnails.medium.url} />
      </Wrapper>
    </div>
  )
}

export default VideoItem