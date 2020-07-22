import * as React from "react";
import { Button, View } from "react-native";

function RoomScreen({ route, navigation }) {
  const { room } = route.params;
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <div>{room.name}</div>
      {room.members.length > 0 ? (
        room.members.map((member, i) => {
          return <div key={i}>{member.name + ": " + member.score}</div>;
        })
      ) : (
        <div>No members currently!</div>
      )}
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

export default RoomScreen;
