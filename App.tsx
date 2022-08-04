import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from './navigation';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

    if (!isLoadingComplete) {
        return null;
    } else {
        return (
            <SafeAreaProvider>
                <Navigation colorScheme={colorScheme} />
                <StatusBar />
            </SafeAreaProvider>
        );
    }
}
