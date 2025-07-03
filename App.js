import {ScrollView, Text, View} from "react-native";
import {s} from "./App.style";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import {Header} from "./components/Header/Header";
import {TabBottomMenu} from "./components/TabBottomMenu/TabBottomMenu";
import {CardTodo} from "./components/CardTodo/CardTodo";
import {useState} from "react";
import {ButtonAdd} from "./components/ButtonAdd/ButtonAdd";
import Dialog from "react-native-dialog";

export default function App() {
  const [selectedTabName, setSelectedTabName] = useState("inProgress");
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      title: "AAAAA",
      isCompleted: true,
    },
    {
      id: 2,
      title: "BBBBB",
      isCompleted: false,
    },
    {
      id: 3,
      title: "CCCCC",
      isCompleted: true,
    },
    {
      id: 4,
      title: "DDDDD",
      isCompleted: true,
    },
    {
      id: 5,
      title: "EEEEE",
      isCompleted: true,
    },
    {
      id: 6,
      title: "FFFFF",
      isCompleted: false,
    },
    {
      id: 7,
      title: "GGGGG",
      isCompleted: true,
    },
    {
      id: 8,
      title: "HHHHH",
      isCompleted: true,
    },
  ]);
  const [showDialog, setShowDialog] = useState(false);
  const inProgress = todoList.filter((f) => !f.isCompleted);
  const done = todoList.filter((f) => f.isCompleted === true);

  const res =
    selectedTabName === "all"
      ? todoList
      : selectedTabName === "inProgress"
      ? inProgress
      : done;

  const deleteTodo = (todoId) => {
    setTodoList((prev) => prev.filter((todo) => todo.id !== todoId));
  };

  const showAddDialog = () => {
    console.log("YTOOOO");
    setShowDialog(true);
  };
  return (
    <>
      <SafeAreaProvider>
        <SafeAreaView style={s.app}>
          <View style={s.header}>
            <Header />
          </View>
          <View style={s.body}>
            <ScrollView>
              {res.map((td) => (
                <View style={s.cardItem} key={td.id}>
                  <CardTodo todoList={td} deletedTodo={deleteTodo} />
                </View>
              ))}
            </ScrollView>
          </View>
          <ButtonAdd onPress={showAddDialog} />
        </SafeAreaView>
      </SafeAreaProvider>
      <View style={s.footer}>
        <TabBottomMenu
          selectedTabName={selectedTabName}
          onSelected={setSelectedTabName}
          todoList={todoList}
        />
      </View>
      <Dialog.Container visible={showDialog}>
        <Dialog.Title>Create a task</Dialog.Title>
        <Dialog.Description>Choose a name</Dialog.Description>
        <Dialog.Input onChangeText={() => ""} />
        <Dialog.Button label="Create" onPress={() => ""} />
        <Dialog.Button label="Cancel" onPress={() => setShowDialog(false)} />
      </Dialog.Container>
    </>
  );
}
