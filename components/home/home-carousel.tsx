import { View, Text, Dimensions, Image } from "react-native";
import Carousel from "react-native-reanimated-carousel";

const carouselImages = [
  {
    id: 1,
    imgUrl: require("~/assets/images/Workout_level_card (1).jpg"),
  },
  {
    id: 2,
    imgUrl: require("~/assets/images/Workout_level_card (2).jpg"),
  },
  {
    id: 3,
    imgUrl: require("~/assets/images/Workout_level_card.jpg"),
  },
];

const HomeCarousel = () => {
  return (
    <View
      style={{
        marginTop: 30,
        marginLeft: 20,
        height: 150,
      }}
    >
      <Carousel
        loop
        width={335}
        height={150}
        autoPlay={true}
        data={carouselImages}
        scrollAnimationDuration={1000}
        onSnapToItem={(index) => console.log("current index:", index)}
        renderItem={({ item }) => (
          <View
            style={{
              flex: 1,
              marginRight: 10,
              borderWidth: 1,
              justifyContent: "center",
            }}
          >
            <Image
              source={item.imgUrl}
              alt="Carousel Image"
              className="object-contain w-full h-full rounded-lg px-5"
            />
          </View>
        )}
      />
    </View>
  );
};
export default HomeCarousel;
