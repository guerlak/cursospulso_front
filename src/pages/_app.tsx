import { ThemeProvider } from "styled-components"
import Header from "../components/Header"
import GlobalStyle from "../styles/global"
import theme from "../styles/theme"
import MessengerCustomerChat from 'react-messenger-customer-chat';


function MyApp({ Component, pageProps }) {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
    </ThemeProvider >
  )
}

export default MyApp
