import NavBar from "./navbar";
import Hero from "./hero";
import Bubbles from "./bubbles";
import Footer from "./footer";
import Bar from "./barDivider";


export const Home = () => {
  return (
    <section>
      <NavBar />
      <Hero />
      <Bubbles />
      <Bar />
      <Footer />
    </section>
  )
}

export default Home;