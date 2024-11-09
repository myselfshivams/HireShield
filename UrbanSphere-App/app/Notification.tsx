import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

type RootStackParamList = {
  index: undefined;
  Notification: undefined;
};

type NotificationScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Notification"
>;

export default function Notification() {
  const navigation = useNavigation<NotificationScreenNavigationProp>();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="arrow-back" size={24} color="#333333" />
      </TouchableOpacity>

      <Text style={styles.title}>
        Your <Text style={styles.highlight}>Notification</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
    paddingHorizontal: 20,
  },
  backButton: {
    position: "absolute",
    top: 30,
    left: 20,
    padding: 10,
  },
  title: {
    fontSize: 36,
    fontWeight: "700",
    color: "#333333",
    marginBottom: 40,
  },
  highlight: {
    color: "#ACACAC",
  },
});
