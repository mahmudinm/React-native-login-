
import React from 'react';
import Navigation from "./src/navigation/index";
import { Provider as PaperProvider } from 'react-native-paper';

const App = () => {
  return (
    <PaperProvider>
      <Navigation />
    </PaperProvider>
  );
};


export default App;
