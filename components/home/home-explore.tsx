import { View, Text, FlatList, Image } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

const homeExploreData = [
  {
    id: 1,
    name: "Workout",
    imgUrl: require("~/assets/images/image.png"),
  },
  {
    id: 2,
    name: "Diet Plans",
    imgUrl: require("~/assets/images/Body_part_image.png"),
  },
  {
    id: 3,
    name: "Recipie",
    imgUrl: require("~/assets/images/Body_part_image-1.png"),
  },
  {
    id: 4,
    name: "Calculator",
    imgUrl: require("~/assets/images/Body_part_image-2.png"),
  },
  {
    id: 5,
    name: "Exercise",
    imgUrl: require("~/assets/images/Body_part_image-1.png"),
  },
  {
    id: 6,
    name: "Yoga",
    imgUrl: require("~/assets/images/Body_part_image-2.png"),
  },
];

const HomeExplore = () => {
  return (
    <View className=" mt-[30px]">
      <View className="flex-row items-center px-3  justify-between">
        <Text className="text-white text-xl font-medium">Explore</Text>
        <AntDesign name="right" size={20} color="#F2D679" />
      </View>

      <View className="pt-1">
        <FlatList
          data={homeExploreData}
          renderItem={({ item }) => (
            <View className="ml-5  ">
              <Image
                source={item.imgUrl}
                alt="Explore Icon"
                width={70}
                height={70}
                className="w-[70px] h-[70px] rounded-full"
              />
              <Text className="text-white mt-3 text-sm text-center">
                {item.name}
              </Text>
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
export default HomeExplore;
