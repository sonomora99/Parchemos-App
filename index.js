// import 'react-native-gesture-handler';

import { registerRootComponent } from 'expo';

import App from './App';
import { MD3LightTheme as DefaultTheme, PaperProvider } from 'react-native-paper';

import { useColorScheme } from 'react-native';
// import themes from './assets/css/colors'
import { es, registerTranslation } from 'react-native-paper-dates'
registerTranslation('es', es);
// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
export default function Main() {

    const colorScheme = useColorScheme();
    const theme = {
        ...DefaultTheme,
        myOwnProperty: true,
        // Specify custom property in nested object
        // colors:themes.Light
        // colors: colorScheme === 'dark' ? themes.Dark : themes.Light,
    };
    return (
        <PaperProvider theme={theme}>
            <App />
        </PaperProvider>
    );
}
registerRootComponent(Main);
