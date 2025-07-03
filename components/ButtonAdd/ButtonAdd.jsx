import {Text, TouchableOpacity} from "react-native";
import logo from "../../assets/logo.png";
import {s} from "./ButtonAdd.style";

export const ButtonAdd = ({onPress}) => {
  return (
    <TouchableOpacity style={s.button} onPress={onPress}>
      <Text style={s.text}>Add a todo</Text>
    </TouchableOpacity>
  );
};
