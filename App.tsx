import { NativeBaseProvider, StatusBar } from "native-base";
import { useFonts, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold } from '@expo-google-fonts/roboto';

import { AuthContextProvider } from "./src/contexts/AuthContext";

import { Loading } from './src/components/loading';
import { Singin } from './src/screens/Signin';

import { THEME } from './src/style/theme';

export default function App() {
  const [ FontsLoaded ] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold
  })

  return (
    <NativeBaseProvider theme={ THEME }>
      <AuthContextProvider>
        <StatusBar
          barStyle="light-content"
          backgroundColor ="transparent"
          translucent
          />
        { FontsLoaded ? <Singin /> : <Loading /> }
      </AuthContextProvider>
    </NativeBaseProvider>
  );
}