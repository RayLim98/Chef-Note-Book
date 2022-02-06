import 'react-native-gesture-handler'
import {AppRegistry} from 'react-native';
import App from './App';
import Story from './storybook'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Story);
