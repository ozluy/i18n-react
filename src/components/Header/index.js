import React from 'react'
import { FormattedMessage } from 'react-intl'
import { defaultMessages } from '../../i18n'
import logo from '../../logo.svg'
import { withLang } from '../LanguageContex'

export default withLang(({ language }) => (
  <header className='App-header'>
    <nav>
      <span className='App-link'>
        <FormattedMessage {...defaultMessages['header-nav-home']}>
          {txt => txt}
        </FormattedMessage>
      </span>
      <span className='App-link'>
        <FormattedMessage {...defaultMessages['header-nav-about']}>
          {txt => txt}
        </FormattedMessage>
      </span>
      <span className='App-link'>
        <FormattedMessage {...defaultMessages['header-nav-contact']}>
          {txt => txt}
        </FormattedMessage>
      </span>
      <select onChange={val => language.setLanguage(val.target.value)}>
        <option value='tr'>Türkçe</option>
        <option value='en'>English</option>
        <option value='cs'>Čeština</option>
      </select>
    </nav>
    <img src={logo} className='App-logo' alt='logo' />
  </header>
))
