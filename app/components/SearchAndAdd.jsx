import React from "react";
import { StyleSheet, TextInput, View, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default SearchAndAdd = ({ handleAdd, handleChange, input }) => {
  return (
    <View style={styles.serach}>
      <TextInput
        value={input}
        placeholder="Search item here."
        onChangeText={handleChange}
        style={styles.input}
      />
      <TouchableOpacity style={styles.btn} onPress={handleAdd}>
        <MaterialCommunityIcons
          //   onPress={handleAdd}
          name="plus"
          size={20}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  serach: { flexDirection: "row", alignItems: "center", marginBottom: 30 },
  input: { flex: 1, borderWidth: 1, paddingLeft: 10, paddingVertical: 3 },
  btn: {
    paddingLeft: 10,
  },
});
