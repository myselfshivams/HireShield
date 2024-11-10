import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";

type RootStackParamList = {
  Login: undefined;
  Forgot: undefined;
};

type ForgotScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Forgot"
>;

const Forgot = () => {
  const navigation = useNavigation<ForgotScreenNavigationProp>();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);

  const handleBackPress = () => {
    navigation.navigate("Login");
  };

  const handleContinue = () => {
    alert("Password reset successfully");
    navigation.navigate("Login");
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
        <Ionicons name="arrow-back" size={24} color="#333" />
      </TouchableOpacity>

      <Text style={styles.title}>
        Reset <Text style={styles.titleHighlight}>Password</Text>
      </Text>

      <View style={styles.inputContainer}>
        <Ionicons
          name="call-outline"
          size={20}
          color="#000"
          style={styles.icon}
        />
        <TextInput
          style={styles.input}
          placeholder="+91"
          keyboardType="phone-pad"
          onChangeText={setPhoneNumber}
          value={phoneNumber}
        />
      </View>

      <View style={styles.inputContainer}>
        <Ionicons
          name="lock-closed-outline"
          size={20}
          color="#000"
          style={styles.icon}
        />
        <TextInput
          style={styles.input}
          placeholder="Your Current Password"
          secureTextEntry={!showCurrentPassword}
          onChangeText={setCurrentPassword}
          value={currentPassword}
        />
        <TouchableOpacity
          onPress={() => setShowCurrentPassword(!showCurrentPassword)}
        >
          <Ionicons
            name={showCurrentPassword ? "eye-outline" : "eye-off-outline"}
            size={20}
            color="#000"
          />
        </TouchableOpacity>
      </View>

      <View style={styles.inputContainer}>
        <Ionicons
          name="lock-closed-outline"
          size={20}
          color="#000"
          style={styles.icon}
        />
        <TextInput
          style={styles.input}
          placeholder="Your New Password"
          secureTextEntry={!showNewPassword}
          onChangeText={setNewPassword}
          value={newPassword}
        />
        <TouchableOpacity onPress={() => setShowNewPassword(!showNewPassword)}>
          <Ionicons
            name={showNewPassword ? "eye-outline" : "eye-off-outline"}
            size={20}
            color="#000"
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Forgot;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  title: {
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    color: "#333",
    marginBottom: 30,
  },
  titleHighlight: {
    color: "#A6F10F",
  },
  backButton: {
    position: "absolute",
    top: 40,
    left: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f1f1f1",
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 10,
    marginBottom: 20,
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: "#333",
  },
  continueButton: {
    backgroundColor: "#A6F10F",
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
  },
  continueButtonText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "500",
  },
});
