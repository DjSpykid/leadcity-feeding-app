import FeedingBalanceCard from "@/components/FeedingBalanceCard";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ResturantList from "@/components/ResturantList";
import Text from "@/components/Text";
import { Suspense } from "react";

export default function Home({name}) {
  return (
    <Suspense 
    fallback={
      <div className="flex justify-center items-center h-screen">
      {/* Horizontal moving Font Awesome spinner */}
      <div className="flex space-x-4">
        <i className="fas fa-circle text-indigo-700 text-lg animate-horizontal-move"></i>
        <i className="fas fa-circle text-indigo-700 text-lg animate-horizontal-move [animation-delay:150ms]"></i>
        <i className="fas fa-circle text-indigo-700 text-lg animate-horizontal-move [animation-delay:300ms]"></i>
      </div>
    </div>
    }
    > 
    <div className="justify-center items-center p-4 mb-20 max-w-6xl font-sans mx-auto space-y-3">
    <Header/>
    <FeedingBalanceCard />
    <Text/>
  
    <ResturantList/>
    </div>
    <Footer/>
     </Suspense>
  );
}
