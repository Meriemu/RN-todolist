import {View, Text, TouchableOpacity} from "react-native";
import {s} from "./TabBottomMenu.style";

export const TabBottomMenu = ({selectedTabName, onSelected, todoList}) => {
  const countByStatus = todoList.reduce(
    (acc, todo) => {
      todo.isCompleted ? acc.done++ : acc.inProgress++;
      return acc;
    },
    {all: todoList.length, inProgress: 0, done: 0}
  );

  const getTextStyle = (tabName) => {
    return {
      fontWeight: "bold",
      color: tabName === selectedTabName ? "#2F76E5" : "#000",
    };
  };
  return (
    <View style={s.container}>
      <TouchableOpacity onPress={() => onSelected("all")}>
        <Text style={getTextStyle("all")}>All({countByStatus.all})</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onSelected("inProgress")}>
        <Text style={getTextStyle("inProgress")}>
          In progress({countByStatus.inProgress})
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onSelected("done")}>
        <Text style={getTextStyle("done")}>Done({countByStatus.done})</Text>
      </TouchableOpacity>
    </View>
  );
};
