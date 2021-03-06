import './App.css'
import Grid from './components/Grid/Grid'

function App() {

  const emojis = [
    'ð', 'ðĒ', 'ð', 'ð', 'ð', 'ð', 'ðĶĒ', 'ð', 'ð', 'ðĶ', 'ðĶ', 'ðž', 'ðą', 'ðĢ', 'ðķ',
    'ð', 'ðĒ', 'ð', 'ð', 'ð', 'ð', 'ðĶĒ', 'ð', 'ð', 'ðĶ', 'ðĶ', 'ðž', 'ðą', 'ðĢ', 'ðķ',
  ]

  return (
    <div className="App">
      <h1>Memoji Game</h1>
      <Grid emojis={emojis} />
    </div>
  )
}

export default App
