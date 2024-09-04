import { View, Text, Image } from "react-native";
import Login from "~/components/auth/login";
const login = () => {
  return (
    <View className="bg-[#1E1E1E] flex-1 mt-8 p-5 relative">
      <View className="">
        <Text className="underline underline-offset-auto font-medium text-base decoration-2 decoration-amber-300 text-[#FFFFFF]">
          Login
        </Text>

        <View className="mt-10 ">
          <Text className="text-white font-semibold text-2xl">
            Welcome Back,
          </Text>
          <Text className="text-[#8A8A8A] text-sm">
            Hello there, sign in to continue!
          </Text>
        </View>
        <View className="absolute top-0 right-0">
          <Image
            source={require("../assets/images/login-shapes.png")}
            resizeMode="contain"
            width={103}
            height={135}
            className="absolute -right-6 top-0 w-[103px] h-[135px] opacity-70"
          />
        </View>
      </View>
      <View>
        <Login />
      </View>
    </View>
  );
};
export default login;
