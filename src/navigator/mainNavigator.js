import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen7190723Navigator from '../features/BlankScreen7190723/navigator';
import BlankScreen6190722Navigator from '../features/BlankScreen6190722/navigator';
import CopyOfBlankScreen4190721Navigator from '../features/CopyOfBlankScreen4190721/navigator';
import BlankScreen4184634Navigator from '../features/BlankScreen4184634/navigator';
import BlankScreen3184633Navigator from '../features/BlankScreen3184633/navigator';
import BlankScreen2184564Navigator from '../features/BlankScreen2184564/navigator';
import BlankScreen1183087Navigator from '../features/BlankScreen1183087/navigator';
import BlankScreen0183086Navigator from '../features/BlankScreen0183086/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen7190723: { screen: BlankScreen7190723Navigator },
BlankScreen6190722: { screen: BlankScreen6190722Navigator },
CopyOfBlankScreen4190721: { screen: CopyOfBlankScreen4190721Navigator },
BlankScreen4184634: { screen: BlankScreen4184634Navigator },
BlankScreen3184633: { screen: BlankScreen3184633Navigator },
BlankScreen2184564: { screen: BlankScreen2184564Navigator },
BlankScreen1183087: { screen: BlankScreen1183087Navigator },
BlankScreen0183086: { screen: BlankScreen0183086Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
