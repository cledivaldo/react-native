import { StyleSheet } from "react-native";

export const styles =  StyleSheet.create({
 overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",    
  },
  container: {
    width: 300,
    height: 400,
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    elevation: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    justifyContent: "flex-start",
    marginBottom: 15,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    width: "100%",
  },
  input: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: "transparent",
    width: "100%",
  },
  icon: {
    fontSize: 20,
    marginRight: 10,
  },
  button: {
    display: "flex",
    backgroundColor: "#009a93",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    width: "90%",
    color: "white",
    justifyContent: "center",
    alignContent: "center",
    textAlign: "center",
    margin: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  closeButton: {
    marginTop: 10,
    alignItems: "center",
    padding: 15,
    borderRadius: 10,
    width: "90%",
  },
  closeButtonText: {
    color: "red",
    fontWeight: "bold",
  },

  text: {
    textAlign: "center", // Mantém centralizado
    fontFamily: "InterRegular",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
  },
  textWrapper: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  divider: {
    height: 6, // Altura do divisor
    marginVertical: 10, // Espaço vertical acima e abaixo do divisor
  },
});