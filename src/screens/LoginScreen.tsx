// src/screens/LoginScreen.tsx;
import * as Google from "expo-auth-session/providers/google";
import React, { useState } from "react";
import { Button, Text, View } from "react-native";

const LoginScreen = () => {
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    clientId: "<YOUR_GOOGLE_CLIENT_ID>",
  });

  const [user, setUser] = useState<string | null>(null);

  React.useEffect(() => {
    if (response?.type === "success") {
      const { id_token } = response.params;
      // Aqui você pode fazer a autenticação com o backend ou armazenar o token
      setUser(id_token);
    }
  }, [response]);

  return (
    <View>
      <Button
        title="Login with Google"
        onPress={() => promptAsync()}
        disabled={!request}
      />
      {user && <Text>Logged in as {user}</Text>}
    </View>
  );
};

export default LoginScreen;
