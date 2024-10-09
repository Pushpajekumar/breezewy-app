import { ScrollView } from "react-native";
import FeaturedContainer from "~/components/globals/featured-container";
import EquipmentBasedExercise from "~/components/home/equipment-based-exercise";
import Header from "~/components/home/header";
import HomeCarousel from "~/components/home/home-carousel";
import HomeExplore from "~/components/home/home-explore";
import SearchComp from "~/components/home/search-comp";

const homeExploreData = [
  {
    id: 1,
    name: "Total body & Cardio (gym) ",
    imgUrl: require("~/assets/images/image (3).jpg"),
  },
  {
    id: 2,
    name: "Abs Workout",
    imgUrl: require("~/assets/images/image (2).jpg"),
  },
  {
    id: 3,
    name: "Legs & Glutes",
    imgUrl: require("~/assets/images/image (3).jpg"),
  },
  {
    id: 4,
    name: "Arms & Shoulders",
    imgUrl: require("~/assets/images/image (2).jpg"),
  },
  {
    id: 5,
    name: "Yoga & Stretching",
    imgUrl: require("~/assets/images/image (3).jpg"),
  },
];

const featuredDiet = [
  {
    id: 1,
    name: "Total body & Cardio (gym) ",
    imgUrl: require("~/assets/images/Image (3)2.jpg"),
  },
  {
    id: 2,
    name: "Abs Workout",
    imgUrl: require("~/assets/images/Image (2)1.jpg"),
  },
  {
    id: 3,
    name: "Legs & Glutes",
    imgUrl: require("~/assets/images/Image (3)2.jpg"),
  },
  {
    id: 4,
    name: "Arms & Shoulders",
    imgUrl: require("~/assets/images/Image (2)1.jpg"),
  },
  {
    id: 5,
    name: "Yoga & Stretching",
    imgUrl: require("~/assets/images/Image (3)2.jpg"),
  },
];
const shop = () => {
  return (
    <ScrollView className="bg-[#1E1E1E] flex-1 mt-8">
      <Header />
      <SearchComp />
      <HomeCarousel />
      <HomeExplore />
      <EquipmentBasedExercise />
      <FeaturedContainer data={homeExploreData} title="Featured Workouts" />
      <FeaturedContainer data={featuredDiet} title="Featured Diets" />
    </ScrollView>
  );
};
export default shop;
