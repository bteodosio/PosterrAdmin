import React from 'react'
import { Header } from './components/Header'
import GlobalStyles from './styles/global'
import { LiveChat } from './components/LiveChat'
import { ThemeContextProvider } from './styles/themes/ThemeContext'

const App: React.FC = () => {
  return (
    <ThemeContextProvider>
      <div className="App">
        <GlobalStyles />
        <Header />
        <LiveChat />
      </div>
    </ThemeContextProvider>
  )
}

export default App
