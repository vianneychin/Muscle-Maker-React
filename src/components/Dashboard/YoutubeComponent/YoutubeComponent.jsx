import React from 'react'
import styled from 'styled-components'
import SearchBar from './SearchBar'
import youtube from './api/youtube'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'

const SearchBarAndVideo = styled.div`
  background-color: black;
  float: left;
  width: 70%;
  height: 100%;
`
const VideoResults = styled.div`
  background-color: grey;
  float: left;
  width: 30%;

`
const MainContainer = styled.div`
  height: 73vh;
`

class YoutubeComponent extends React.Component {
  state = {
    videos: [], selectedVideo: null
  }

  componentDidMount() {
    this.onTermSubmit('working out')
  }

  onTermSubmit = async (term) => {
    const response = await youtube.get('./search', {
      params: {
        q: term
      }
    })
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[1]
    })
  }
  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video })
  }
  render() {
    return (
      <div>
        <MainContainer>
          <SearchBar onTermSubmit={this.onTermSubmit}/>
          <VideoResults className="column">
            <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
          </VideoResults>
          <SearchBarAndVideo className="column">
            <VideoDetail video={ this.state.selectedVideo } />
          </SearchBarAndVideo>
        </MainContainer>
      </div>
    )
  }
}

export default YoutubeComponent