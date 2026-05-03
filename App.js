import 'react-native-gesture-handler';
import React from 'react';
import { AuthProvider } from './providers/AuthProvider';
import RootNavigator from './navigation/RootNavigator';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModalProvider>
        <AuthProvider>
          <RootNavigator />
        </AuthProvider>
      </BottomSheetModalProvider>

    </GestureHandlerRootView>

  );
}
