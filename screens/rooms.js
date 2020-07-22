import * as React from "react";
import { Button, View } from "react-native";

const rooms = [
  {
    name: "Room 1",
    members: [
      { name: "a", score: 10 },
      { name: "b", score: 5 },
      { name: "c", score: 15 },
    ],
  },
  {
    name: "Room 2",
    members: [
      { name: "d", score: 10 },
      { name: "e", score: 5 },
      { name: "f", score: 15 },
    ],
  },
];

function RoomsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <div>Your Rooms</div>
      {rooms.length > 0 ? (
        rooms.map((room, i) => {
          return (
            <Button
              key={i}
              title={"Go to " + room.name}
              onPress={() =>
                navigation.navigate("Room", { room, headerTitle: room.name })
              }
            />
          );
        })
      ) : (
        <div>No rooms currently!</div>
      )}

      <Button title='Go back' onPress={() => navigation.goBack()} />
    </View>
  );
}

export default RoomsScreen;
