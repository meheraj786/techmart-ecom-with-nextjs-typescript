import Banner from "@/components/Banner";
import BestSelling from "@/components/BestSelling";
import Categories from "@/components/Categories";
import Featured from "@/components/Featured";
import FlashSale from "@/components/FlashSale";
import OurProducts from "@/components/OurProducts";
import ServiceFeatures from "@/components/ServiceFeatures";
import SingleOfferBanner from "@/components/SingleOfferBanner";


export default function Home() {

  return (
    <div className="min-h-screen">
      <Banner/>
      <FlashSale/>
      <Categories/>
      <BestSelling/>
      <SingleOfferBanner/>
      <OurProducts/>
      <Featured/>
      <ServiceFeatures/>
    </div>
  );
}
