import { View, Text, Image } from "react-native";
import { Input } from "../ui/input";
const SearchComp = () => {
  return (
    <View className=" mt-5 px-3">
      <View className="border pr-2 rounded-md border-white flex-row justify-between items-center">
        <Input
          className="rounded  flex-1"
          placeholderTextColor={"#FFFFFF"}
          placeholder="Search..."
        />
        <Image
          source={require("~/assets/images/Magnifer.png")}
          className="w-6 h-6"
          alt="Search bar"
        />
      </View>
    </View>
  );
};
export default SearchComp;
