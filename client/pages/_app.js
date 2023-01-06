import { CssBaseline, ThemeProvider } from "@mui/material";
import { Layout } from "../components/layout";
import { theme } from "../styles/theme";
import { Provider } from "react-redux";
import store from "../store/store";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <Head>
          <title>Admin Panel</title>
        </Head>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
    </Provider>
  )
}
