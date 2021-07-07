import React from 'react'

function Song(props) {
  
    const songName = props.songs.Name
    const background = props.songs.Background.formats.large.url
    const spotify = props.songs.Spotify
    const apple = props.songs.Apple
    const youtube = props.songs.Youtube
    const ytprf = 'https://www.youtube.com/embed/'
    const id = props.songs._id

    return (
      <div className="content" style={{backgroundImage: `url(${background})`}}>
              <div className="content-info">
                  <div className="wrap">
                      <h3 className="content-title">{songName}</h3>
                      <a className="music-button" href={spotify}>
                          <img alt='Listen On Spotify' src="https://warpkings.com/images/spotify-button.png"></img>
                      </a>
                      <a className="music-icon" href={spotify}>
                          <img alt='Listen On Spotify' src="https://warpkings.com/images/spotify-icon.png"></img>
                      </a>
                      <br></br>
                      <a className="music-button" href={apple}>
                          <img alt='Listen On Apple Music' src="https://warpkings.com/images/apple-music-button.png"></img>
                      </a>
                      <a className="music-icon" href={apple}>
                          <img alt='Listen On Apple Music' src="https://warpkings.com/images/apple-icon.png"></img>
                      </a>
                      </div>
                  <iframe title={'The Warp Kings music video for ' + songName} height="fit-container" min-height="315px" src={ytprf + youtube} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
          </div>
    )
  }

  export default Song