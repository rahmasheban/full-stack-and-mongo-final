import { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
} from "react-native";
import axios from "axios";

export default function ViewUsersScreen() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

 const loadUsers = async () => {
  try {
    const response = await axios.get(
      "http://10.69.0.135:5000/api/users"
    );

    console.log(response.data);

    setUsers(response.data);
  } catch (error) {
    console.log("ERROR:", error);
  }
};

  return (
   <View style={styles.summaryCard}>
  <Text style={styles.summaryText}>
    Total Users: {users.length}
  </Text>


      <FlatList
        data={users}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text>{item.fullName}</Text>
            <Text>{item.email}</Text>
            <Text>{item.phone}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:20
  },
  title:{
    fontSize:28,
    fontWeight:"bold",
    marginBottom:20
  },
  card:{
    backgroundColor:"#fff",
    padding:15,
    borderRadius:10,
    marginBottom:10
  },
 

summaryCard: {
  backgroundColor: "#6E8B74",
  padding: 15,
  borderRadius: 12,
  marginBottom: 20,
},

summaryText: {
  color: "#fff",
  fontSize: 18,
  fontWeight: "bold",
  textAlign: "center",
},
});