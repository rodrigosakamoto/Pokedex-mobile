import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import Info from './pages/Info';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main,
      Info,
    },
    {
      headerLayoutPreset: 'center',
      headerBackTitleVisible: false,
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#ff0000',
        },
        headerTintColor: '#fff',
      },
    }
  )
);

export default Routes;
