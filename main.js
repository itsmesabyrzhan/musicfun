const tracks = [
  {
    title: 'MusicFun Soundtrack',
    url: 'https://musicfun.it-incubator.app/api/samurai-way-soundtrack.mp3',
  },
  {
    title: 'MusicFun Soundtrack Instrumental',
    url: 'https://musicfun.it-incubator.app/api/samurai-way-soundtrack-instrumental.mp3',
  },
]

const rootElement = document.getElementById('root')

const titleElement = document.createElement('h1')
titleElement.textContent = 'MusicFun Player'
rootElement.append(titleElement)

const trackListElement = document.createElement('ul')

tracks.forEach(track => {
  const trackElement = document.createElement('li')

  const trackTitleElement = document.createElement('h2')
  trackTitleElement.textContent = track.title
  trackElement.append(trackTitleElement)

  const trackAudioElement = document.createElement('audio')
  trackAudioElement.src = track.url
  trackAudioElement.controls = true
  trackElement.append(trackAudioElement)

  trackListElement.append(trackElement)
})

rootElement.append(trackListElement)
