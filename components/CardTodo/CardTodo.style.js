import {StyleSheet} from "react-native";

export const s = StyleSheet.create({
  card: {
    backgroundColor: "#f9f9f9",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 80,
    paddingHorizontal: 20,
    borderRadius: 13,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    marginBottom: 15,
  },
  txt: {
    fontSize: 20,
  },
  strikethrough: {
    textDecorationLine: "line-through",
  },
  icon: {
    width: 20,
    height: 20,
  },
  cancel: {
    color: "red",
  },
});
