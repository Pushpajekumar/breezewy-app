import * as React from "react";
import { View } from "react-native";
import { Button } from "~/components/ui/button";
import { Text } from "~/components/ui/text";

export default function Screen() {
  return (
    <View className="flex-1 justify-center items-center gap-5 p-6 bg-secondary/30">
      <Text className="text-2xl font-bold text-primary">Hello, World!</Text>
      <Button>
        <Text className="text-lg text-primary">Press me</Text>
      </Button>
    </View>
  );
}
