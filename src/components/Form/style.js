import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

  formContext: {
    width: "100%",
    height: "100%",
    bottom: 0,
    backgroundColor: "#ff8210",
    alignItems: "center",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: 30,
  },

  form: {
    width: "100%",
    height: "auto",
    marginTop: 30,
    padding: 10,
  },

  formLabel: {
    color: "#ff8210",
    fontSize: 18,
    paddingLeft: 20,
  },

  input: {
    width: "90%",
    borderRadius: 5,
    backgroundColor: "#ff8210",
    height: 40,
    margin: 12,
    paddingLeft: 10,
  },

  buttonCalculator: {
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    backgroundColor: "#ff8210",
    paddingTop: 14,
    paddingBottom: 14,
    marginLeft: 12,
    marginTop: 30,
  },
 
  textButtonCalculator: {
    fontSize: 20,
    color: "#ff8210",
    fontWeight: "bold",
    textAlign: "center",
    width: "100%",
  },
  errorMessage:{
    fontSize:12,
    color: "red",
    fontWeight:"bold",
    paddingLeft:20,
  }
});

export default styles;