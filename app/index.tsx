import { ScrollView } from "react-native";
import BackComponent from "~/components/globals/back-component";
import FeaturedContainer from "~/components/globals/featured-container";
import SearchComp from "~/components/home/search-comp";

const mealsAndPackagesData = [
  {
    id: 1,
    name: "Silver Package: Meal Plan & 8 IN-Person 30 Min PT Sessions",
    imgUrl: require("~/assets/images/image 196.jpg"),
  },
  {
    id: 2,
    name: "Silver Package: Meal Plan & 8 IN-Person 30 Min PT Sessions",
    imgUrl: require("~/assets/images/image 197.jpg"),
  },
  {
    id: 3,
    name: "Silver Package: Meal Plan & 8 IN-Person 30 Min PT Sessions",
    imgUrl: require("~/assets/images/image 196.jpg"),
  },
];
const inPersonTrainingData = [
  {
    id: 1,
    name: "30 min In Person Training Session (4x Per Week)",
    imgUrl: require("~/assets/images/image 195.jpg"),
  },
  {
    id: 2,
    name: "30 min In Person Training Session (4x Per Week)",
    imgUrl: require("~/assets/images/image 197.jpg"),
  },
  {
    id: 3,
    name: "30 min In Person Training Session (4x Per Week)",
    imgUrl: require("~/assets/images/image 194.jpg"),
  },
];
const weightLossProgramData = [
  {
    id: 1,
    name: "Weight-loss Program",
    imgUrl: require("~/assets/images/image 194.jpg"),
  },
  {
    id: 2,
    name: "Weight-gain Program",
    imgUrl: require("~/assets/images/image 199.jpg"),
  },
  {
    id: 3,
    name: "Weight-loss Program",
    imgUrl: require("~/assets/images/image 194.jpg"),
  },
];

const index = () => {
  return (
    <ScrollView className="bg-[#1E1E1E] flex-1 mt-8 py-3">
      <BackComponent title="Programs & Plans" />
      <SearchComp />
      <FeaturedContainer
        data={mealsAndPackagesData}
        title="Meals and Packages"
      />
      <FeaturedContainer data={weightLossProgramData} title="Programs" />
      <FeaturedContainer
        data={inPersonTrainingData}
        title="In Person Training"
      />
      <FeaturedContainer data={mealsAndPackagesData} title="Online Training" />
    </ScrollView>
  );
};
export default index;
