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
      <Text style={styles.title}>
        Sign <Text style={styles.titleHighlight}>In</Text>
      </Text>

      <View style={styles.inputContainer}>
        <Ionicons
          name="call-outline"
          size={20}
          color="#888"
          style={styles.icon}
        />
        <TextInput
          style={styles.input}
          placeholder="+91"
          placeholderTextColor="#666"
          onChangeText={setPhoneNumber}
          keyboardType="phone-pad"
        />
      </View>

      <View style={styles.inputContainer}>
        <Ionicons
          name="lock-closed-outline"
          size={20}
          color="#888"
          style={styles.icon}
        />
        <TextInput
          style={styles.input}
          placeholder="Your Password"
          placeholderTextColor="#666"
          secureTextEntry={!showPassword}
          onChangeText={setPassword}
          value={password}
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Ionicons
            name={showPassword ? "eye-outline" : "eye-off-outline"}
            size={20}
            color="#888"
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Forgot")}>
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
    backgroundColor: "#1D1B20",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 42,
    fontWeight: "700",
    color: "#fff",
    textAlign: "center",
    marginBottom: 30,
  },
  titleHighlight: {
    color: "#8A2BE2",
  },
  inputContainer: {
    color: "#fff",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#333",
    borderRadius: 12,
    marginBottom: 20,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: "#fff",
  },
  loginButton: {
    width: "100%",
    alignSelf: "center",
    backgroundColor: "#8A2BE2",
    borderRadius: 12,
    paddingVertical: 12,
    alignItems: "center",
    marginBottom: 20,
  },
  loginButtonText: {
    fontSize: 16,
    color: "#fff",
  },
  forgotText: {
    textAlign: "center",
    color: "#999",
    marginTop: 20,
  },
  forgotLink: {
    color: "#8A2BE2",
    fontWeight: "500",
  },
  circle: {
    position: "absolute",
    borderRadius: 100,
    backgroundColor: "#8A2BE2",
  },
});
