import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Touchab,
  To,
  Tou,
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default ListItem = ({ item, id, handleDelete }) => {
  return (
    <>
      <View key={id} style={styles.root}>
        <Text style={styles.item}>
          {id + 1}. {item}
        </Text>

        <TouchableOpacity onPress={handleDelete}>
          <MaterialCommunityIcons
            style={styles.delete}
            name="delete-outline"
            size={20}
          />
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  root: {
    padding: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#e1e1",
    marginBottom: 10,
  },
  item: {
    marginLeft: 10,
  },
  divider: {
    backgroundColor: "gray",
    paddingTop: 1,
  },
  delete: {
    marginLeft: 10,
  },
});
