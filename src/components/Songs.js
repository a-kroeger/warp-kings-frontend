import React from 'react'
import Song from './Song'
import Spinner from './Spinner'

function Songs(props){
    const { songs , loading } = props

    if (loading) {
        return <Spinner />
    } else {
        return (
            <div id="anchor-content-panel">
                {songs.map(songs => (
                    <Song
                        songs={songs}
                        key={songs.id}
                    />
                ))}
            </div>
        )
    }
}

export default Songs