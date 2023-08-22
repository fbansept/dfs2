import { FlatList, Text, View } from "react-native";
import useAppStyle from "../../AppStyles";
import { useEffect, useState } from "react";
import { Button } from "../../components/Button";

export const Liste = ({ navigation }) => {
  const styles = useAppStyle();

  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    console.log("send");
    fetch("http://192.168.1.176:3000/tasks")
      .then((result) => result.json())
      .then((liste) => {
        setTodoList(liste);
        console.log("received");
      });
  }, []);

  return (
    <View style={styles.container}>
      <Text>Nombre de tache à effectuer : {todoList.length}</Text>
      <FlatList
        data={todoList}
        renderItem={({ item }) => <Text>{item.title}</Text>}
      ></FlatList>
      <Button
        fab
        icon="plus"
        onPress={() => navigation.navigate("Add task")}
      ></Button>
    </View>
  );
};
