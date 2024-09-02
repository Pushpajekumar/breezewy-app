import { View, Image } from "react-native";
const onboarding = () => {
  return (
    <View className="flex-1 relative">
      {/* <Image
        source={require("~/assets/images/onboard-first-screen.png")}
        alt="first-onboarding-screen"
        resizeMode="contain"
        className="w-full h-full object-center object-contain -z-20"
      /> */}
      <View className="absolute top-0 inset-0 bg-red-500 z-50" />
    </View>
  );
};
export default onboarding;
