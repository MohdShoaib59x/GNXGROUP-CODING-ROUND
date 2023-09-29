import Hero from "./components/Hero";
import Hero1 from "./components/Hero1";
import Hero2 from "./components/Hero2";
import Navbar from "./components/Navbar";
import Founders from "./components/Founders";
import Poplar from "./components/Poplar";
import Footer from "./components/Footer";

export default function App() {
  return (
    <section>
      <Navbar />
      <Hero />
      <Hero1 />
      <Hero2 />
      <Founders />
      <Poplar />
      <h4 className="w-9/12 mx-auto text-5xl py-20">
        Meet the experts and Revolutionise your sales performance in{" "}
        <b>14 Days</b>
      </h4>
      <Footer />
    </section>
  );
}
