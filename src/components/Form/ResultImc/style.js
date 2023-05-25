import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  corpo: {
    flex: 1,
    padding: 10,
    backgroundColor: "#ff8210", 
    borderRadius: 30, 
    marginBottom: 10, 
  },
  titulo: {
    color: "green", 
    alignItems: "center",
  },
  resultado: {
    color: "blue", 
    fontSize: 45, 
    alignItems: "center",
  },
  caixaBotaoCompartilhar: {
    width: "100%",
    alignItems: "center", 
    marginBottom: 10, 
  },
  botaoCompartilhar: {
    backgroundColor: "#1877f2", 
    borderRadius: 50, 
    paddingTop: 5, 
  },
  textoBotaoCompartilhar: {
    color: "#fff", 
    fontWeight: "bold",
    paddingHorizontal: 30,
    alignItems: "center", 
  },
});

export default styles;