import { StatusBar } from "react-native";
import { Link, Stack } from "expo-router";
import "./globals.css";

export default function RootLayout() {
  return (
    <>
      <StatusBar hidden={true} />

      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="movie/[id]" options={{ headerShown: false }} />
      </Stack>
    </>
  );
}
