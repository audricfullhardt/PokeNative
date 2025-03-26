import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ThemedText } from "./components/ThemedText";
import { Link } from "expo-router";

export default function Index() {
  return (
    <SafeAreaView>
      <ThemedText variant="Headline" color="black">
        Pokedex
      </ThemedText>
      <Link href={{pathname: "/pokemon/[id]", params: {id: 3}}}>Pokemon 3</Link>
      <Link href={{pathname: "/about"}}>À propos</Link>
    </SafeAreaView>
  );
}
