import FeedingBalanceCard from "@/components/FeedingBalanceCard";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ResturantList from "@/components/ResturantList";
import Text from "@/components/Text";


export default function Home({name}) {
  return (
    <> 
    <div className="justify-center items-center p-4 mb-20 max-w-6xl font-sans mx-auto space-y-3">
    <Header/>
    <FeedingBalanceCard />
    <Text/>
  
    <ResturantList/>
    </div>
    <Footer/>
     </>
  );
}
