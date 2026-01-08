import "@mantine/core/styles.css"
import "@mantine/carousel/styles.css"

import "@/styles/globals.css"
import type { AppProps } from "next/app"
import { createTheme, MantineProvider } from "@mantine/core"
import Head from "next/head"

export default function App({ Component, pageProps }: AppProps) {
  const theme = createTheme({
    fontFamily: "EudoxusSans, Garata",
    primaryColor: "maskani",
    colors: {
      maskani: [
        "#E6F0FA",
        "#D1E4F5",
        "#B9D6EE",
        "#9EC6E7",
        "#82B6DF",
        "#6FA5D6", // base
        "#4C7CA6",
        "#3A6486",
        "#2B4D69",
        "#1B374D",
      ],
    },
  })

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="theme-color" content="#6FA5D6" />
        <link rel="canonical" href="https://maskani.app" />

        <meta name="author" content="Maskani Team" />
        <meta name="geo.region" content="KE" />
        <meta name="geo.placename" content="Kenya" />
        <meta name="language" content="English" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="revisit-after" content="7 days" />
        <meta property="business:contact_data:street_address" content="Kenya" />
        <meta property="business:contact_data:locality" content="Nairobi" />
        <meta property="business:contact_data:country" content="Kenya" />
        <meta
          property="business:contact_data:email"
          content="app.maskani.ke@gmail.com"
        />
        <meta
          property="business:contact_data:phone_number"
          content="+254107641197"
        />
        <meta
          property="business:contact_data:website"
          content="https://maskani.app"
        />
      </Head>
      <MantineProvider theme={theme}>
        <Component {...pageProps} />
      </MantineProvider>
    </>
  )
}
