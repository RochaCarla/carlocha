import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { pages } from '../markdowns';
import Layout from './components/Layout';
import MyThemeProvider, { useThemes } from './hooks/useTheme';
import { GlobalStyle } from './styles/global';

const router = createHashRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <h1>Error 404</h1>,
    children: pages,
  },
]);

function AppWithCallbackAfterRender() {
  useEffect(() => console.log('Rendered'), []);
  const { selectedTheme } = useThemes();

  return (
    <React.StrictMode>
      <ThemeProvider theme={selectedTheme}>
        <RouterProvider router={router} />
        <GlobalStyle />
      </ThemeProvider>
    </React.StrictMode>
  );
}

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <MyThemeProvider>
    <AppWithCallbackAfterRender />
  </MyThemeProvider>,
);
