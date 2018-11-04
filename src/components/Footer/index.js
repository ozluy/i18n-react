import React from "react"
import { FormattedMessage, injectIntl } from "react-intl"
import { defaultMessages } from "../../i18n"
/* to use translations as string or in js
    use 'injectInt' and 'formatMessage' from 'intl' object */

export default injectIntl(({ intl }) => (
  <footer>
    <div>
      <FormattedMessage
        {...defaultMessages["footer-copyright"]}
        values={{ name: "Yusuf", year: 2018 }}
      >
        {txt => txt}
      </FormattedMessage>
    </div>
    <div>
      {intl.formatMessage({ ...defaultMessages["footer-made-with-love"] })}
    </div>
  </footer>
))
