import React, { Component } from "react"
import { LanguageProvider } from "./components/LanguageContex"
import Header from "./components/Header"
import Footer from "./components/Footer"
import "./App.css"

class App extends Component {
  render() {
    return (
      <LanguageProvider>
        <div className="App">
          <Header />
          <Footer />
        </div>
      </LanguageProvider>
    )
  }
}

export default App
