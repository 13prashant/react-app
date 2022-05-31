import HomeCarousel from "../components/Home/HomeCarousel/HomeCarousel";
import Ads from "../components/Home/Ads/Ads";
import Testimonials from "../components/Home/Testimonials/Testimonials";

const Home = () => {
  return (
    <>
      <HomeCarousel />
      <Ads button="Sign Up" />
      <Testimonials />
      <Ads button="Mock Test" />
    </>
  );
};

export default Home;
