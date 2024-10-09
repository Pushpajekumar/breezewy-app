import * as React from "react";
import { Image, View } from "react-native";
import { Button } from "~/components/ui/button";
import { Text } from "~/components/ui/text";

export default function Onboarding() {
  return (
    <View className="flex relative flex-1 justify-center items-center mt-8">
      <Image
        source={require("~/assets/images/onboard-first-screen.jpg")}
        width={300}
        height={500}
        alt="first-onboarding-screen"
        className="w-full h-full object-center object-contain"
      />
      <View className="absolute w-full h-full  bg-[#1D1D1D]/70 p-5">
        <View className="items-end">
          <Text className="text-[#F2D679] font-medium text-sm">Skip </Text>
        </View>

        <View className="absolute bottom-8 w-screen p-5  ">
          <View>
            <Text className="text-[#FFFFFF] font-medium text-sm tracking-wider">
              That’s a Lifestyle
            </Text>
            <Text className="text-[#F2D679] font-bold text-6xl w-44 mt-5 -tracking-tight leading-tight ">
              Work Hard
            </Text>
            <Text className="text-[#FFFFFF] font-medium text-xsm">
              What see impossible today will one day become your worm-up
            </Text>
          </View>
          <Button className="bg-[#F2D679] mt-24" size={"lg"}>
            <Text>Next</Text>
          </Button>

          <View className="flex-row gap-1 mt-8 ">
            <View className="h-1 bg-[#F2D679] rounded flex-1">
              <Text>nh</Text>
            </View>
            <View className="bg-[#FFFFFF] h-1 rounded flex-1">
              <Text>nh</Text>
            </View>
            <View className="bg-[#FFFFFF] h-1 rounded flex-1">
              <Text>nh</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

{
  /* <View className="flex relative flex-1 justify-center items-center mt-8">
<Image
  source={require("~/assets/images/onboard-second-screen.jpg")}
  width={300}
  height={500}
  alt="first-onboarding-screen"
  className="w-full h-full object-center object-contain"
/>
<View className="absolute w-full h-full  bg-[#1D1D1D]/70 p-5">
  <View className="items-end">
    <Text className="text-[#F2D679] font-medium text-sm">Skip </Text>
  </View>

  <View className="absolute bottom-8 w-screen p-5  ">
    <View>
      <Text className="text-[#FFFFFF] font-medium text-sm tracking-wider">
        That’s a Lifestyle
      </Text>
      <Text className="text-[#F2D679] font-bold text-6xl w-64 mt-5 -tracking-tight leading-tight ">
        MOVE AHED
      </Text>
      <Text className="text-[#FFFFFF] font-medium text-xsm">
        What see impossible today will one day become your worm-up
      </Text>
    </View>
    <Button className="bg-[#F2D679] mt-24" size={"lg"}>
      <Text>Next</Text>
    </Button>

    <View className="flex-row gap-1 mt-8 ">
      <View className="h-1 bg-[#FFFFFF] rounded flex-1">
        <Text>nh</Text>
      </View>
      <View className=" bg-[#F2D679] h-1 rounded flex-1">
        <Text>nh</Text>
      </View>
      <View className="bg-[#FFFFFF] h-1 rounded flex-1">
        <Text>nh</Text>
      </View>
    </View>
  </View>
</View>
</View> */
}

{
  /* <View className="flex relative flex-1 justify-center items-center mt-8">
<Image
  source={require("~/assets/images/onboarding-third-screen.jpg")}
  width={300}
  height={500}
  alt="first-onboarding-screen"
  className="w-full h-full object-center object-contain"
/>
<View className="absolute w-full h-full  bg-[#1D1D1D]/70 p-5">
  <View className="items-end">
    <Text className="text-[#F2D679] font-medium text-sm">Skip </Text>
  </View>

  <View className="absolute bottom-8 w-screen p-5  ">
    <View>
      <Text className="text-[#FFFFFF] font-medium text-sm tracking-wider">
        That’s a Lifestyle
      </Text>
      <Text className="text-[#F2D679] font-bold text-6xl w-64 mt-5 -tracking-tight leading-tight ">
        STAY CALM
      </Text>
      <Text className="text-[#FFFFFF] font-medium text-xsm">
        What see impossible today will one day become your worm-up
      </Text>
    </View>
    <Button className="bg-[#F2D679] mt-24" size={"lg"}>
      <Text>Next</Text>
    </Button>

    <View className="flex-row gap-1 mt-8 ">
      <View className="h-1 bg-[#FFFFFF] rounded flex-1">
        <Text>nh</Text>
      </View>
      <View className=" h-1 bg-[#FFFFFF] rounded flex-1">
        <Text>nh</Text>
      </View>
      <View className=" bg-[#F2D679]  h-1 rounded flex-1">
        <Text>nh</Text>
      </View>
    </View>
  </View>
</View>
</View> */
}
