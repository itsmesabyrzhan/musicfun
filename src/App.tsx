function App() {

  const tracks = [
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

  return (
    <>
      <h1>Musicfun Player</h1>
      <ul>
        { tracks.map((track) => {
          return (
            <li key={ track.id }>
              <h2>{ track.title }</h2>
              <audio src={ track.url } controls={ true }></audio>
            </li>
          )
        }) }
      </ul>
    </>
  )
}

export default App
