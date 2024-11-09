import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";

type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  Forgot: undefined;
  Tabs: undefined;
};

type LoginScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Login"
>;

const LoginScreen = () => {
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    if (phoneNumber && password) {
      navigation.navigate("Tabs");
    } else {
      Alert.alert("Error", "Please enter both phone number and password.");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.circle, styles.topLeftCircle]} />
      <View style={[styles.circle, styles.bottomRightCircle]} />

      <Text style={styles.title}>
        Sign <Text style={styles.titleHighlight}>In</Text>
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
          placeholder="Your Password"
          secureTextEntry={!showPassword}
          onChangeText={setPassword}
          value={password}
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Ionicons
            name={showPassword ? "eye-outline" : "eye-off-outline"}
            size={20}
            color="#000"
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("ForgotScreen")}>
        <Text style={styles.forgotText}>
          Don’t remember your password?{" "}
          <Text style={styles.forgotLink}>Forget Password</Text>
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default LoginScreen;

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
  loginButton: {
    backgroundColor: "#A6F10F",
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
  },
  loginButtonText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "500",
  },
  forgotText: {
    textAlign: "center",
    color: "#666",
    marginTop: 20,
  },
  forgotLink: {
    color: "#000",
    fontWeight: "500",
  },
  circle: {
    position: "absolute",
    borderRadius: 100,
    backgroundColor: "#A6F10F",
  },
  topLeftCircle: {
    width: 160,
    height: 160,
    top: -50,
    left: -50,
  },
  bottomRightCircle: {
    width: 200,
    height: 200,
    bottom: -60,
    right: -60,
  },
});
