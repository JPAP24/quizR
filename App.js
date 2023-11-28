import React from 'react';
import AppNavigator from './AppNavigator';
import { NativeBaseProvider } from 'native-base';
import { extendTheme } from 'native-base';

const theme = extendTheme({
  colors: {
    primary: {
      500: '#D0D4FC',
      600: '#4255FF',
    },
    muted: {
      800: '#4255FF',
    },
    secondary: {
      200: '#DAF9FD'
    }
  },
});
export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <AppNavigator />
    </NativeBaseProvider>
  )


}