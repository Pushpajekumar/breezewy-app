import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Colors } from "~/constants/Colors"; // Adjust the import based on your project structure
import { AntDesign } from "@expo/vector-icons";
import { Input } from "~/components/ui/input"; // Adjust the import based on your project structure

const filter = [
  { id: 1, name: "All", value: "all" },
  { id: 2, name: "Workout", value: "workout" },
  { id: 3, name: "Exercise", value: "exercise" },
  { id: 4, name: "Diet", value: "diet" },
];

const result = [
  {
    id: 1,
    name: "Hammer Curls",
    image: require("~/assets/images/search-result.png"),
  },
  {
    id: 2,
    name: "Push Ups",
    image: require("~/assets/images/search-result.png"),
  },
  {
    id: 3,
    name: "Squats",
    image: require("~/assets/images/search-result.png"),
  },
  { id: 4, name: "Plank", image: require("~/assets/images/search-result.png") },
];

const Index = () => {
  const [selectedFilter, setSelectedFilter] = useState(1); // Default selected filter

  return (
    <View style={styles.container}>
      <View style={styles.search}>
        <AntDesign name="left" size={20} color={Colors.light.primary} />
        <View style={styles.searchContainer}>
          <Input
            style={styles.input}
            placeholderTextColor={"#FFFFFF"}
            placeholder="Search..."
          />
          <Image
            source={require("~/assets/images/Magnifer.png")}
            style={styles.image}
            alt="Search bar"
          />
        </View>
      </View>
      <View style={styles.filterContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {filter.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={[
                styles.filterBox,
                {
                  backgroundColor:
                    selectedFilter === item.id
                      ? Colors.light.primary
                      : "transparent", // Set selected background color
                  borderColor:
                    selectedFilter === item.id ? Colors.light.primary : "white", // Set border color
                },
              ]}
              onPress={() => setSelectedFilter(item.id)} // Update selected filter
            >
              <Text
                style={{
                  color: selectedFilter === item.id ? "#000000" : "#FFFFFF", // Set text color based on selection
                  margin: 10,
                }}
              >
                {item.name}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <ScrollView>
        {result?.map((item) => (
          <View style={styles.result_box} key={item?.id}>
            <Image
              source={item?.image}
              width={60}
              height={60}
              alt="Search result"
              style={styles.result_image}
            />

            <Text style={styles.result_text}>{item?.name}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
    paddingTop: 60,
    paddingHorizontal: 20,
  },

  search: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
    justifyContent: "center",
  },

  searchContainer: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#FFFFFF",
    borderRadius: 8,
    alignItems: "center",
    flex: 1,
    paddingHorizontal: 5,
  },

  input: {
    flex: 1,
    color: "#FFFFFF",
  },

  image: {
    width: 24,
    height: 24,
  },

  filterContainer: {
    flexDirection: "row",
    marginTop: 15,
  },

  filterBox: {
    borderRadius: 29,
    paddingHorizontal: 10,
    margin: 5,
    borderWidth: 1,
  },

  result_box: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#2F2F2F",
    borderRadius: 12,
    marginTop: 10,
    gap: 10,
    shadowColor: "#C5C6C7",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1.41,
    elevation: 2,
  },

  result_image: {
    width: 60,
    height: 60,
    borderRadius: 12,
  },

  result_text: {
    fontSize: 18,
    fontWeight: "500",
    color: "white",
  },
});

export default Index;
