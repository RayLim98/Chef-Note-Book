import 'react-native-gesture-handler'
import {AppRegistry} from 'react-native';
import App from './App';
// // Story book Must be commented out if you want realm to worok
// import Story from './storybook'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
