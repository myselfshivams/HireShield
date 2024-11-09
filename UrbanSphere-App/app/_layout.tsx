import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="Login" options={{ headerShown: false }} />
      <Stack.Screen name="Tabs" options={{ headerShown: false }} />
      <Stack.Screen name="Forgot" options={{ headerShown: false }} />
      <Stack.Screen
        name="Notification"
        options={{ headerShown: false }}
      />
    </Stack>
  );
}
