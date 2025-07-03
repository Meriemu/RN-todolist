import {useState} from "react";
import {Alert, Image, Text, TouchableOpacity, View} from "react-native";
import check from "../../assets/check.png";
import {s} from "./CardTodo.style";

export const CardTodo = ({todoList, deletedTodo}) => {
  const [todoFinished, setTodoFinished] = useState(todoList.isCompleted);

  const onDeleteTodoAlert = () =>
    Alert.alert("Deleted todo", "Are you sure to delete this todo ? ", [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "OK",
        onPress: () => {
          deletedTodo(todoList.id);
          console.log("OK Pressed");
        },
      },
    ]);

  const onCardClick = () => {
    setTodoFinished(!todoFinished);
  };

  return (
    <TouchableOpacity
      style={s.card}
      onPress={onCardClick}
      onLongPress={onDeleteTodoAlert}
    >
      <Text style={[s.txt, todoFinished && s.strikethrough]}>
        {todoList.title}
      </Text>
      {todoFinished && <Image source={check} style={s.icon} />}
    </TouchableOpacity>
  );
};
