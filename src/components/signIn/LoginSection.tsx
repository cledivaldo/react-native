import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Modal,
  Platform,  
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import MyFloatingButton from "../myFloatingButton.tsx/MyFloatingButton";
import { styles } from "./loginSection.style";

interface LoginSectionProps {
  width: number;
  height: number;
}


const LoginSection: React.FC<LoginSectionProps> = ({
  width,
  height,
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const apiUrl = "http://192.168.1.60:3001"; // Ajuste para seu backend


  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Erro", "Preencha todos os campos!");
      return;
    }

    const controller = new AbortController(); // Controlador para abortar a requisição
    const signal = controller.signal;

    try {
      const response = (await Promise.race([
        fetch(`${apiUrl}/auth/login`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
          signal, // Passamos o signal para a requisição
        }),
        new Promise((_, reject) =>
          setTimeout(() => {
            controller.abort(); // Cancela a requisição após 5 segundos
            reject(new Error("Tempo limite de conexão atingido!"));
          }, 5000)
        ),
      ])) as Response; // Usando o type assertion para garantir que a variável é do tipo Response

      if (!response.ok) {
        const { message } = await response.json();
        setError(message);
        Alert.alert("Erro", message || "Credenciais inválidas");
        return;
      }

      const data = await response.json();
      const { token, user } = data;
      Alert.alert("Success", token);

    } catch (error) {
      if (error instanceof Error && error.name === "AbortError") {
        Alert.alert("Erro", "Tempo limite de conexão atingido!");
      } else {
        Alert.alert("Erro", "Verifique a sua conexão com o servidor, não foi possível chegar ao servidor!");
      }
    }
  };

  function SignIn(text: string) {
    Alert.alert(text);
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <View>
        <Text
          className="text-black font-bold text-[8vw] truncate"
          style={[
            styles.text,
            { fontSize: Math.min(width, height) * 0.06, color: "black" },
          ]}
        >
          Entre na sua conta
        </Text>
        <Text
          style={[styles.text, { fontSize: Math.min(width, height) * 0.03 }]}
        >
          Acesse sua conta com um único clique.
        </Text>

        <TouchableOpacity
          onPress={() => {
            setEmail("");
            setPassword("");
            setModalVisible(true);
          }}
        >
          <Text
            style={[
              styles.button,
              { fontSize: Math.min(width, height) * 0.07 },
            ]}
          >
            Entrar
          </Text>
        </TouchableOpacity>

        <Text
          style={[styles.text, { fontSize: Math.min(width, height) * 0.03 }]}
        >
          Seu acesso é seguro e protegido pela Microsoft.
        </Text>

        {/* Modal (Tela de Login) */}
        <Modal
          visible={modalVisible}
          transparent={true}
          animationType="fade"
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.overlay}>
            <View
              style={[
                styles.container,
                { width: width * 0.9, height: height * 0.63 },
              ]}
            >
              <View
                style={{
                  width: width * 0.9,
                  height: height * 0.12,
                  margin: 10,
                }}
              >
                <Text style={[styles.title, { paddingTop: 50 }]}>
                  Entre com sua conta
                </Text>
              </View>
              {/* Campo de E-mail */}
              <View style={{ width: width * 0.8, marginBottom: 15 }}>
                <Text style={{ fontSize: 14, color: "gray", marginBottom: 5 }}>
                  E-mail de acesso
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    borderWidth: 1,
                    borderColor: "#ccc",
                    borderRadius: 5,
                    paddingHorizontal: 10,
                  }}
                >
                  <MaterialIcons name="email" size={20} color="gray" />
                  <TextInput
                    style={{ flex: 1, paddingVertical: 10, paddingLeft: 10 }}
                    placeholder="Digite seu e-mail"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    value={email}
                    onChangeText={setEmail}
                  />
                </View>
              </View>

              {/* Campo de Senha */}
              <View style={{ width: width * 0.8, marginBottom: 15 }}>
                <Text style={{ fontSize: 14, color: "gray", marginBottom: 5 }}>
                  Senha
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    borderWidth: 1,
                    borderColor: "#ccc",
                    borderRadius: 5,
                    paddingHorizontal: 10,
                  }}
                >
                  <MaterialIcons name="lock" size={20} color="gray" />
                  <TextInput
                    style={{ flex: 1, paddingVertical: 10, paddingLeft: 10 }}
                    placeholder="Digite sua senha"
                    secureTextEntry={!showPassword} // Alterna entre senha visível ou oculta
                    onChangeText={setPassword}
                  />
                  <TouchableOpacity
                    onPress={() => setShowPassword(!showPassword)}
                  >
                    <MaterialIcons
                      name={showPassword ? "visibility-off" : "visibility"}
                      color="gray"
                      size={24}
                    />
                  </TouchableOpacity>
                </View>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-around",
                  alignItems: "flex-start",
                  flexWrap: "nowrap",
                  width: "100%",
                  margin: 10,
                }}
              >
                <Text
                  style={{
                    flexShrink: 1,
                    fontWeight: "bold",
                    width: "60%",
                    textAlign: "center",
                  }}
                >
                  Esqueceu a senha?
                </Text>
                <Text
                  style={{
                    flexShrink: 1,
                    fontStyle: "italic",
                    color: "#009a93",
                    textDecorationLine: "underline",
                    marginLeft: 5,
                    width: "40%",
                    textAlign: "center",
                  }}
                  onPress={() => SignIn("Esqueceu a senha?")}
                >
                  Clique Aqui
                </Text>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-around",
                  alignItems: "stretch",
                  flexWrap: "nowrap",
                  width: "100%",
                  margin: 10,
                }}
              >
                <Text
                  style={{
                    flexShrink: 1,
                    fontWeight: "bold",
                    width: "60%",
                    textAlign: "center",
                  }}
                >
                  Não tem cadastro?
                </Text>
                <Text
                  style={{
                    flexShrink: 1,
                    fontStyle: "italic",
                    color: "#009a93",
                    textDecorationLine: "underline",
                    marginLeft: 5,
                    width: "40%",
                    textAlign: "center",
                  }}
                  onPress={() => SignIn("Não tenho cadastro")}
                >
                  Cadastrar-me
                </Text>
              </View>

              <View style={styles.divider} />
              <View style={styles.divider} />

              <MyFloatingButton
                position="bottomRight"
                borderRadius={50}
                iconName="log-in"
                onPress={handleLogin}
                backgroundColor="#009a93"
              />

              <MyFloatingButton
                position="topLeft"
                borderRadius={50}
                iconName="log-out"
                onPress={() => setModalVisible(false)}
                backgroundColor="red"
              />

              {/* <TouchableOpacity onPress={() => SignIn()} style={styles.button}>
              <Text style={styles.buttonText}>Acessar</Text>
            </TouchableOpacity>
            <View style={styles.divider} />
            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              style={[styles.closeButton, { backgroundColor: "red" }]}
            > */}
              {/* <Text style={styles.buttonText}>Fechar</Text>
            </TouchableOpacity> */}
            </View>
          </View>
        </Modal>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginSection;
