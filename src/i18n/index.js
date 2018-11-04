import en from "./en"
import tr from "./tr"

const languages = [en, tr]

const languageObject = {}

languages.map(lang => {
  const messages = {}
  let defaultValues = {}

  lang.items.map(item => {
    item.map(attr => {
      messages[attr.id] = attr.defaultMessage
      defaultValues = {
        ...defaultValues,
        ...{ [attr.id]: attr }
      }
      return attr
    })

    return item
  })
  languageObject[lang.name] = {
    messages,
    default: defaultValues
  }
  return lang
})

export const defaultMessages = languageObject.en.default

export default languageObject
