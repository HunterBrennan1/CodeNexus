import NavBar from "./navbar";
import Searchbar from "./searchbar";
import Footer from "../components/footer";
import Bar from "../components/barDivider";

export const Toolspage = () => {
  return (
    <section>
      <NavBar />
      <Searchbar />
      <Bar />
      <Footer />
    </section>
  )
}

export default Toolspage;