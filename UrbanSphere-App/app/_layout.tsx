import { Stack } from "expo-router";
import { useAuth0, Auth0Provider } from "react-native-auth0";

export default function RootLayout() {
  return (
    <Auth0Provider
      domain={"dev-88np1j27r1x01hts.us.auth0.com"}
      clientId={"fqWjT4nR14voB4zhP41xpziKDScloxgV"}
    >
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="Login" options={{ headerShown: false }} />
        <Stack.Screen name="Tabs" options={{ headerShown: false }} />
        <Stack.Screen name="Forgot" options={{ headerShown: false }} />
        <Stack.Screen name="Notification" options={{ headerShown: false }} />
        <Stack.Screen name="CityStats" options={{ headerShown: false }} />
      </Stack>
    </Auth0Provider>
  );
}
