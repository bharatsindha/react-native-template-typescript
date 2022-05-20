import React, {ReactElement} from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import {persistor, store} from '@/store';
import {networkService} from '@/networking';
import {RootNavigator} from '@/navigation';
import {hide} from 'react-native-bootsplash';
import {PersistGate} from 'redux-persist/integration/react';

const App = (): ReactElement => {
  const handleStoreRehydration = () => {
    const {accessToken} = store.getState().user;

    if (accessToken) {
      networkService.setAccessToken(accessToken);
    }

    hide();
  };

  return (
    <Provider store={store}>
      <PersistGate onBeforeLift={handleStoreRehydration} persistor={persistor}>
        <GestureHandlerRootView style={{flex: 1}}>
          <RootNavigator />
        </GestureHandlerRootView>
      </PersistGate>
    </Provider>
  );
};

export default App;
