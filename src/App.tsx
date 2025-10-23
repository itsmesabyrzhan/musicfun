import { useState } from 'react'
import './App.css'

type Track = {
  id: number
  title: string
  url: string
}

const tracks: Track[] | null = [
  {
    id: 1,
    title: 'MusicFun Soundtrack',
    url: 'https://musicfun.it-incubator.app/api/samurai-way-soundtrack.mp3',
  },
  {
    id: 2,
    title: 'MusicFun Soundtrack Instrumental',
    url: 'https://musicfun.it-incubator.app/api/samurai-way-soundtrack-instrumental.mp3',
  },
]

function App() {
  const [selectedTrackId, setSelectedTrackId] = useState<number | null>(null)

  return (
    <>
      <h1>Musicfun Player</h1>
      { tracks === null
        ? <span>Loading...</span>
        : tracks.length === 0
          ? <span>No tracks</span>
          : (
            <ul>
              { tracks.map(track => (
                <li
                  key={ track.id }
                  style={ {
                    border: selectedTrackId === track.id ? '1px solid white' : '1px solid transparent',
                    borderRadius: '15px',
                    padding: '25px 15px',
                    cursor: 'pointer',
                  } }
                  onClick={ () => setSelectedTrackId(prevId => (prevId === track.id ? null : track.id)) }>
                  <h2>{ track.title }</h2>
                  <audio src={ track.url } controls />
                </li>
              )) }
            </ul>
          )
      }
    </>
  )
}

export default App
