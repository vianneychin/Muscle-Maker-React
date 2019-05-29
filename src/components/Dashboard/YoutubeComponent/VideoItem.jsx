import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  > img {
    max-width: 180px;
  }
`
const Span = styled.span`
  display: inline-block;
  width: 16em;
`
const Section = styled.section`
      display: flex;
    flex-direction: row-reverse;
`

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <Section>
      <Span>{ video.snippet.title }</Span>
      <Wrapper onClick={ () => onVideoSelect(video) }>
        <img alt={video.snippet.title} src={video.snippet.thumbnails.medium.url} />
      </Wrapper>
    </Section>
  )
}

export default VideoItem