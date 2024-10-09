import AntDesign from "@expo/vector-icons/AntDesign";
import { View, Text } from "react-native";

type BackComponentProps = {
  title: string;
};

const BackComponent = ({ title }: BackComponentProps) => {
  return (
    <View className="flex-row  items-center px-3 py-2 ">
      <AntDesign name="left" size={20} color="#F2D679" />
      <Text className="text-white text-xl mx-5 font-medium">{title}</Text>
    </View>
  );
};
export default BackComponent;
