import React, { Component } from "react"
import { IntlProvider, addLocaleData } from "react-intl"
import en from "react-intl/locale-data/en"
import tr from "react-intl/locale-data/tr"
import cs from "react-intl/locale-data/cs"
import translations from "../../i18n"

addLocaleData([...en, ...tr, ...cs])

const LanguageContext = React.createContext({
  currentLang: {},
  setLang: () => {},
})

const withLang = Component => props => (
  <LanguageContext.Consumer>
    {language => <Component {...props} language={language} />}
  </LanguageContext.Consumer>
)

class LanguageProvider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentLang: "tr",
    }
  }

  setLanguage = data => {
    this.setState({ currentLang: data })
  }
  render() {
    const { currentLang } = this.state
    return (
      <LanguageContext.Provider
        value={{ currentLang, setLanguage: this.setLanguage }}
      >
        <IntlProvider
          locale={currentLang}
          defaultLocale="tr"
          messages={translations[currentLang].messages}
        >
            {this.props.children}
        </IntlProvider>
      </LanguageContext.Provider>
    )
  }
}

export { LanguageProvider, withLang }
