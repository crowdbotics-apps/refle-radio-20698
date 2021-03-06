import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList110918Navigator from '../features/ArticleList110918/navigator';
import ArticleList110917Navigator from '../features/ArticleList110917/navigator';
import ArticleList110916Navigator from '../features/ArticleList110916/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList110918: { screen: ArticleList110918Navigator },
ArticleList110917: { screen: ArticleList110917Navigator },
ArticleList110916: { screen: ArticleList110916Navigator },

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
