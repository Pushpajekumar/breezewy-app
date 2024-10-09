import AntDesign from "@expo/vector-icons/AntDesign";
import { View, Text, FlatList, Image } from "react-native";

type FeaturedTypeProps = {
  title: string;
  data: {
    id: number;
    name: string;
    imgUrl: any;
  }[];
};

const FeaturedContainer = ({ title, data }: FeaturedTypeProps) => {
  return (
    <View className="mt-[20px]   ">
      <View className="flex-row items-center justify-between px-3">
        <Text className="text-white text-xl font-medium">{title}</Text>
        <AntDesign name="right" size={20} color="#F2D679" />
      </View>
      <View className="ml-[10px] pt-1">
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <View className="mx-[10px] relative">
              <Image
                source={item.imgUrl}
                alt="Explore Icon"
                width={250}
                height={160}
                className="w-[250px] h-[160px] rounded-lg"
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
export default FeaturedContainer;
