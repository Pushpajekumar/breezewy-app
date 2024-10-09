import { Image, View } from "react-native";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Text } from "~/components/ui/text";

const GITHUB_AVATAR_URI = "https://github.com/mrzachnugent.png";
const Header = () => {
  return (
    <View className="flex-row justify-between items-center pt-5 px-3">
      <View className="flex-row items-center gap-3">
        <Avatar alt="Zach Nugent's Avatar">
          <AvatarImage source={{ uri: GITHUB_AVATAR_URI }} />
          <AvatarFallback>
            <Text className="text-white">ZN</Text>
          </AvatarFallback>
        </Avatar>
        <View>
          <Text className="font-medium text-xl text-white">
            Hey, Pushpaje 👋
          </Text>
          <Text className="text-sm text-[#8A8A8A]">Stay Healthy always.</Text>
        </View>
      </View>
      <View className="flex-row items-center gap-5">
        <Image
          source={require("~/assets/images/Cart Large Minimalistic.png")}
          className="w-6 h-6"
          alt="Shopping Cart"
        />
        <Image
          source={require("~/assets/images/Notification.png")}
          className="w-6 h-6"
          alt="Notification Bell"
        />
      </View>
    </View>
  );
};
export default Header;
