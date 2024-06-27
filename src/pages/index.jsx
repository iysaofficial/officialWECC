import Navigation from "../components/navigation";
import Footer from "../components/footer";

// Content
import MainHero from "../components/mainhero";
import Category from "../components/category";
import Organized from "../components/organized";
import About from "../components/about";
import Backtotop from "../components/back-to-top";

import Timevenue from "../components/timeveneu";

function Home() {
    return (
        <>
        <Navigation />
        <MainHero />
        <About />
        <Timevenue />
        <Category />
        <Organized />
        <Backtotop />
        <Footer />
    </>
    )
}

export default Home;