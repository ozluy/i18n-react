import React from "react"
import { FormattedMessage } from "react-intl"
import { defaultMessages } from "../../i18n"
import logo from "../../logo.svg"
import { withLang } from "../LanguageContex"

export default withLang(({ language }) => (
  <header className="App-header">
    <nav>
      <a className="App-link">
        <FormattedMessage {...defaultMessages["header-nav-home"]}>
          {txt => txt}
        </FormattedMessage>
      </a>
      <a className="App-link">
        <FormattedMessage {...defaultMessages["header-nav-about"]}>
          {txt => txt}
        </FormattedMessage>
      </a>
      <a className="App-link">
        <FormattedMessage {...defaultMessages["header-nav-contact"]}>
          {txt => txt}
        </FormattedMessage>
      </a>
      <select onChange={val => language.setLanguage(val.target.value)}>
        <option value="en">EN</option>
        <option value="tr"> TR</option>
      </select>
    </nav>
    <img src={logo} className="App-logo" alt="logo" />
  </header>
))
