import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import Header from '../src/ui/Header';
import Footer from '../src/ui/Footer';
import theme from '../src/ui/Theme';
import Fonts from '../src/ui/Fonts';
import { LazyLoadComponent } from 'react-lazy-load-image-component';

export default function MyApp(props) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [value, setValue] = useState(0);

  const { Component, pageProps } = props;

  React.useEffect(() => {
    Fonts();
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>My page</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <Header
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
          value={value}
          setValue={setValue}
        />
        <Component {...pageProps} />
        <LazyLoadComponent threshold={400}>
          <Footer
            selectedIndex={selectedIndex}
            setSelectedIndex={setSelectedIndex}
            value={value}
            setValue={setValue}
          />
        </LazyLoadComponent>
      </ThemeProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
