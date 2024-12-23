import Banner from './components/Banner'
import Header from './components/Header'
import { GlobalCss } from './styles'

function App() {
  return (
    <>
      <GlobalCss />
      <div className="Container">
        <Header />
      </div>
      <Banner />
    </>
  )
}

export default App
