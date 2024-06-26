import Head from "next/head";
import "../styles/globals.css";
import Config from "../public/config.json";

function MyApp({ Component, pageProps }) {
  const { title, description, characters, colorPage } = Config;

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="shortcut icon" href="/icon.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content={colorPage} />

        {/* <!-- Primary Meta Tags --> */}
        <title>{title}</title>
        <meta name="title" content={title} />
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content={`Genshin, Impact, Banner, Countdown, Rerun, ${characters.join(
            ", "
          )}`}
        />
        <meta name="author" content="hajajai" />
        <link rel="apple-touch-icon" href="/icon.svg" />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://genshinverse-genshinbanner-countdown.netlify.app/"
        />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="https://genshinverse-genshinbanner-countdown.netlify.app/banner.webp" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://genshinverse-genshinbanner-countdown.netlify.app/"
        />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content="https://genshinverse-genshinbanner-countdown.netlify.app/banner.webp" />
        <meta property="twitter:image" content="https://genshinverse-genshinbanner-countdown.netlify.app/banner.webp" />
        <meta name="google-site-verification" content="6LzivULb2yoDnaGPIV84YlL5nKAThi_uQrmJegaIiis" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
