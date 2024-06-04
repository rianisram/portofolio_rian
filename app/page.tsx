import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Footers from "./component/Footers";

export default function HomePage() {
  return (
   <div className="bg-gray-800">
   <Navbar />
   <Hero />
   <Footers/>
   </div>
  );
}
