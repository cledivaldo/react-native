import AsyncStorage from "@react-native-async-storage/async-storage";

const TOKEN_KEY = "authToken";

/**
 * Salva o token no AsyncStorage
 * @param token Token de autenticação
 */
export const saveToken = async (token: string): Promise<void> => {
	try {
		await AsyncStorage.setItem(TOKEN_KEY, token);
	} catch (error) {
		console.error("Erro ao salvar o token:", error);
	}
};

/**
 * Recupera o token armazenado no AsyncStorage
 * @returns Token armazenado ou null
 */
export const getToken = async (): Promise<string | null> => {
	try {
		return await AsyncStorage.getItem(TOKEN_KEY);
	} catch (error) {
		console.error("Erro ao recuperar o token:", error);
		return null;
	}
};

/**
 * Remove o token do AsyncStorage (Logout)
 */
export const removeToken = async (): Promise<void> => {
	try {
		await AsyncStorage.removeItem(TOKEN_KEY);
	} catch (error) {
		console.error("Erro ao remover o token:", error);
	}
};
