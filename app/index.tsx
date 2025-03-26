import { StyleSheet,Text, View, Image, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ThemedText } from "../components/ThemedText";
import { Link } from "expo-router";
import { useThemeColors } from "../hooks/useThemeColors";
import { Card } from "@/components/Card";

export default function Index() {
  const colors = useThemeColors();
  const pokemons = Array.from({length: 35}, (_, k) => ({
    id: k + 1,
    name: `Pokemon name`
  }));
  return (
    <SafeAreaView style={[styles.container, {backgroundColor: colors.tint}]}>
      <View style={styles.header}>
        <Image source={require("@/assets/images/pokeball.png")} width={24} height={24}/>
        <ThemedText variant="Headline" color="grayWhite">
          Pokedex
        </ThemedText>
      </View>
      <Card style={styles.body}>
        <FlatList 
          data={pokemons}
          numColumns={3}
          columnWrapperStyle={styles.gridGap}
          contentContainerStyle={styles.gridGap , styles.list}
          renderItem={({item}) => 
          <Card style={{flex: 1/3}}>
            <Text>{item.name}</Text>
          </Card>} keyExtractor={(item) => item.id.toString()}/>
      </Card>
    </SafeAreaView>
  );
}

const styles = {
  container: {
    flex: 1,
    padding: 4,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    padding: 12,
  },
  body: {
    flex: 1,
  },
  gridGap: {
    gap: 8,
  },
  list: {
    padding: 12,
  },
};