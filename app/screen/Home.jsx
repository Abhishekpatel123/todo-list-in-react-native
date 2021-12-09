import React, { useState } from "react";
import { StyleSheet, View, TextInput, FlatList } from "react-native";
import ListItem from "../components/ListItem";
import SearchAndAdd from "../components/SearchAndAdd";

export default Home = () => {
  let data = ["item1", "item2", "item3", "item4"];
  const [list, setList] = useState(data);
  const [input, setInput] = useState("");

  //   on typing input field
  const handleChange = (value) => setInput(value);

  // adding new list
  const handleAdd = () => {
    if (list.includes(input)) alert("This item already exist in list.");
    else if (input) setList((prev) => [...prev, input]);
    else alert("Input field is empty.");
    setInput("");
  };

  const handleDelete = (targetedList) =>
    setList((pre) => pre.filter((list) => list !== targetedList));

  return (
    <View style={styles.root}>
      {/* - serach */}
      <SearchAndAdd
        handleAdd={handleAdd}
        handleChange={handleChange}
        input={input}
      />
      {/* - list */}
      {/* <FlatList
        data={list}
        renderItem={({ item, index }) => (
          <ListItem
            id={index}
            item={item}
            handleDelete={() => handleDelete(item)}
          />
        )}
        keyExtractor={(item) => item}
      /> */}
      {list.map((item, index) => {
        if (item.toLowerCase().includes(input.toLowerCase())) {
          return (
            <ListItem
              key={index}
              id={index}
              item={item}
              handleDelete={() => handleDelete(item)}
            />
          );
        }
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {},
});
