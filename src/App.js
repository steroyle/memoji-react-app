import './App.css'
import Grid from './components/Grid/Grid'

function App() {

  const emojis = [
    '🐛', '🐢', '🐋', '🐌', '🐂', '🐄', '🦢', '🐖', '🐎', '🦙', '🦎', '🐼', '🐱', '🐣', '🐶',
    '🐛', '🐢', '🐋', '🐌', '🐂', '🐄', '🦢', '🐖', '🐎', '🦙', '🦎', '🐼', '🐱', '🐣', '🐶',
  ]

  return (
    <div className="App">
      <h1>Memoji Game</h1>
      <Grid emojis={emojis} />
    </div>
  )
}

export default App
