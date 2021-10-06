import { StyleSheet } from "react-native";
export const globalStyles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#EDF2F4",
  },
  header: {
    elevation: 0,
    backgroundColor: "#1D3557",
  },
  headerTitle: {
    fontSize: 26,
    color: "#A8DADC",
    paddingBottom: 7,
  },
  headerBackAnimation: {
    width: 50,
    height: 50,
  },
  tabBar: {
    height: 70,
    backgroundColor: "#1D3557",
  },
  input: {
    marginTop: 35,
    marginBottom: 15,
    width: "85%",
    height: 50,
  },
  TitleText: {
    fontSize: 24,
  },
  emptySpacer: {
    marginTop: 75,
    opacity: 0,
  },
  highlitedText: {
    color: "#399DFF",
  },
  errorText: {
    color: "crimson",
    fontWeight: "bold",
    marginTop: 6,
    textAlign: "center",
  },
  normalText: {
    flexDirection: "row",
    fontFamily: "rubik-light",
    paddingTop: 20,
  },
  buttonText: {
    fontSize: 25,
    color: "white",
    fontFamily: "rubik-bold",
  },
  loaderContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  loader: {
    width: 200,
    height: 200,
  },
  button: {
    backgroundColor: "#EF233C",
    width: 330,
    height: 50,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  // The text input
  inputComp: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    width: 330,
    paddingLeft: 20,
    fontSize: 18,
    fontFamily: "rubik-regular",
  },
  // The view covering the text input
  textInputView: {
    borderWidth: 1,
    borderRadius: 50,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
    height: 50,
    backgroundColor: "#A8DADC",
    marginTop: 20,
  },
  hideIcon: {
    padding: 25,
  },
  normalAndHighlightContainer: {
    flexDirection: "row",
    fontFamily: "rubik-light",
  },
});
