import MUITheme from '@/setup/MUI/MUITheme';
import { ThemeProvider } from '@emotion/react';
import Head from 'next/head';
import * as React from 'react';
import styles from './Layout.module.scss';
import HeaderNav from './HeaderNav';
import { Container } from '@mui/material';

export interface ILayoutProps {
  children: React.ReactNode;
}

export default function Layout(props: ILayoutProps) {
  return (
    <>
      <ThemeProvider theme={MUITheme}>
        <Head>
          <title>OWL MOVIE</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className={styles['layout__wrapper']}>
          <HeaderNav />
          <main>
            <Container maxWidth="xl">{props.children}</Container>
          </main>
          <footer></footer>
        </div>
      </ThemeProvider>
    </>
  );
}