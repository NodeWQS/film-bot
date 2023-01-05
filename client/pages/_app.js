import { CssBaseline, ThemeProvider } from "@mui/material";
import { Layout } from "../components/layout";
import { theme } from "../styles/theme";
import { Provider } from "react-redux";
import store from "../store/store";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
    </Provider>
  )
}
