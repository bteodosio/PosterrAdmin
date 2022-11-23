import React from 'react'
import { Header } from './components/Header'
import GlobalStyles from './styles/global'
import { ThemeContextProvider } from './styles/themes/ThemeContext'
import { NavBar } from './components/NavBar/NavBar'
import { SideBarData } from './SideBarData'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { pages } from './pages/'
import { LiveChat } from './components/LiveChat'

const App: React.FC = () => {
  return (
    <ThemeContextProvider>
      <div className="App">
        <GlobalStyles />

        <Router>
          <Header>
            <NavBar menuItems={SideBarData} />
          </Header>
          <LiveChat />
          <Routes>
            <Route path="/" element={pages.home} />
            <Route path="/cars" element={pages.cars} />
            <Route path="/bikes" element={pages.bikes} />
            <Route path="/planes" element={pages.planes} />
            <Route path="/science" element={pages.science} />
          </Routes>
        </Router>
      </div>
    </ThemeContextProvider>
  )
}

export default App
