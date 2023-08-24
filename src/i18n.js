import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
.use(LanguageDetector)
.use(initReactI18next)
.init({
    debug: true,
    fallbackLng:'en',
    interpolation: {
        escapeValue: false
    },
    //{en: [ {home: {}}, {context: {} } ]}
    resources: {
        en: {
            translation: {
                homePageTitle: '',
                homePageSubtitle: '',
                contextPageTitle: '',
                contextPageSubtitle: '',
                homePage: {
                    title: 'Home Page [EN]',
                    subTitle: 'This is the home page of the application [EN]'
                },
                contextAPIPage: {
                    title: 'Context API [EN]',
                    subTitle: 'Working with Reacts Context API [EN]'
                }
            }
        }, 
        de: {
            translation: {
                homePage: {
                    title: 'Home Page [DE]',
                    subTitle: 'This is the home page of the application [DE]'
                },
                contextAPIPage: {
                    title: 'Context API [DE]',
                    subTitle: 'Working with Reacts Context API [DE]'
                }
            }
        }
    }
})

export default i18n;