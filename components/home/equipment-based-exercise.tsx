import AntDesign from "@expo/vector-icons/AntDesign";
import React from "react";
import { FlatList, Image, Text, View } from "react-native";

const homeExploreData = [
  {
    id: 1,
    name: "Dumbells",
    imgUrl: require("~/assets/images/Image (1).png"),
  },
  {
    id: 2,
    name: "Benches",
    imgUrl: require("~/assets/images/Image (2).png"),
  },
  {
    id: 3,
    name: "Treadmill",
    imgUrl: require("~/assets/images/Image (3).png"),
  },
  {
    id: 4,
    name: "Weights",
    imgUrl: require("~/assets/images/Image (3).png"),
  },
  {
    id: 5,
    name: "Lifting",
    imgUrl: require("~/assets/images/Image (1).png"),
  },
  {
    id: 6,
    name: "Demo",
    imgUrl: require("~/assets/images/Image (2).png"),
  },
];

const EquipmentBasedExercise = () => {
  return (
    <View className="mt-[20px]  ">
      <View className="flex-row px-3 items-center justify-between">
        <Text className="text-white text-xl font-medium">
          Equipment-Based Exercise
        </Text>
        <AntDesign name="right" size={20} color="#F2D679" />
      </View>
      <View className="pt-1 ml-[10px]">
        <FlatList
          data={homeExploreData}
          renderItem={({ item }) => (
            <View className="mx-[10px] relative">
              <Image
                source={item.imgUrl}
                alt="Explore Icon"
                width={130}
                height={175}
                className="w-[130px] h-[175px] rounded-lg"
              />
              <View className="absolute w-full bottom-0 bg-[#212020]/90 justify-center items-center">
                <Text className="text-white py-2 text-base font-medium text-center">
                  {item.name}
                </Text>
              </View>
            </View>
          )}
          scrollEnabled
          horizontal
          className="my-3"
        />
      </View>
    </View>
  );
};

export default EquipmentBasedExercise;
