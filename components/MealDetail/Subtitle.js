import { View, Text, StyleSheet } from "react-native";

function Subtitle({ children }) {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
}

export default Subtitle;

const styles = StyleSheet.create({
  subtitle: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitleContainer: {
    padding: 6,
    borderRadius: 3, 
    marginHorizontal: 24,
    marginVertical: 4,
    backgroundColor: "#5721d4",
    borderTopWidth: 1, 
    borderTopColor: "white",
    borderBottomColor: "white",
    borderBottomWidth: 1,
  },
});
