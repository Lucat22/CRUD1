import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';

import { PaperProvider } from 'react-native-paper';
import Routers from './src/router/Routers';

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Routers />
      </NavigationContainer>
    </PaperProvider>
  );
}