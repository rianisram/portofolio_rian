import About from "./component/Aboutus";
import Card from "./component/Card";
import Hero from "./component/Hero";
import Navbar from "./component/Navbar";
import Footers from "./component/Footers";
import Belajar from "./component/Belajar"
import Pengalaman from "./component/Pengalaman"


export default function HomePage() {
  return (
    <div className="bg-gradient-to-t  from-[#467773] via-[#607e8c] to-[#f3f2f2] ">
      <Navbar />
      <Hero />
      <About />
      <Card />
      <Belajar />
      <Pengalaman />
      <Footers />
    </div>
  )
}
