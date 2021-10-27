import { StyleSheet } from "react-native";
export const globalStyles = StyleSheet.create({
  appBackground: {
    backgroundColor: "#141D28",
  },

  // Container of the page
  container: {
    alignItems: "center",
    backgroundColor: "#141D28",
  },

  // Header
  header: {
    borderBottomWidth: 1,
    borderBottomColor: "#3D4751",
    elevation: 0,
    backgroundColor: "#141D28",
  },

  // Title of the header
  headerTitle: {
    fontSize: 26,
    color: "#A8DADC",
    paddingBottom: 7,
  },

  // Header back button
  headerBackAnimation: {
    width: 50,
    height: 50,
  },

  // Tabbar
  tabBar: {
    borderTopWidth: 1,
    borderTopColor: "#3D4751",
    height: 80,
    backgroundColor: "#141D28",
  },

  // Used for react-native-paper inputs
  input: {
    marginTop: 35,
    marginBottom: 15,
    width: "85%",
    height: 50,
    backgroundColor: "#161D28",
    borderColor: "#3D4751",
  },

  // Used for Titles
  TitleText: {
    fontSize: 24,
  },

  // Used for Titles on a black background
  whiteTitleText: {
    fontSize: 24,
    color: "#fff",
  },

  // Used for spacing components (Used a lot when scrollbar doesn't scroll to the bottom)
  emptySpacer: {
    marginTop: 75,
    opacity: 0,
  },

  // Used for highlited texts or links
  highlitedText: {
    color: "#00A19D",
  },

  // Used for showing errors
  errorText: {
    color: "crimson",
    fontWeight: "bold",
    marginTop: 6,
    textAlign: "center",
  },

  // Used for Normal texts
  normalText: {
    flexDirection: "row",
    fontFamily: "rubik-light",
    paddingTop: 20,
    color: "#A8DADC",
  },

  // Used for Normal texts on a black background
  normalWhiteText: {
    flexDirection: "row",
    fontFamily: "rubik-light",
    paddingTop: 20,
    color: "#fff",
  },

  // Text of the button
  buttonText: {
    fontSize: 25,
    color: "#141D28",
    fontFamily: "rubik-bold",

    textAlign: "center",
  },

  smallButtonText: {
    fontSize: 25,
    color: "#A8DADC",
    fontFamily: "rubik-light",

    textAlign: "center",
  },

  // Container of loading animation
  loaderContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  // Style of loading animation
  loader: {
    width: 200,
    height: 200,
  },

  // Style of the button
  button: {
    backgroundColor: "#A1D1D3",
    width: 330,
    height: 50,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 20,
  },

  smallButton: {
    backgroundColor: "#161D28",
    borderColor: "#A8DADC",
    borderWidth: 2,
    width: 70,
    height: 30,
    borderRadius: 50,
    marginTop: 20,
    marginBottom: 20,
  },

  // Style for the default react native text input component
  inputComp: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    width: 330,
    paddingLeft: 20,
    fontSize: 18,
    fontFamily: "rubik-regular",
    color: "#A8DADC",
  },

  // The view covering the text input
  textInputView: {
    borderWidth: 1,
    borderRadius: 50,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
    height: 50,
    backgroundColor: "#161D28",
    borderColor: "#3D4751",
    marginTop: 20,
    color: "#A8DADC",
  },

  // Style of the button that hides password
  hideIcon: {
    padding: 25,
  },

  // Used for showing two texts (mostly a normalText and a highlightText) beside each other
  normalAndHighlightContainer: {
    flexDirection: "row",
    fontFamily: "rubik-light",
    color: "#A8DADC",
  },
});
