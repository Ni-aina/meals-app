import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

const Layout = ()=> {

  return (
    <>
      <Stack>
        <Stack.Screen name="(root)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="light" />
    </>
  )
}

export default Layout;