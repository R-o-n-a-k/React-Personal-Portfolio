import "./Home.css";
import Social from "./Social";
import Data from "./Data";

function Home() {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <Social />
          <div className="home__img" data-aos="fade-left"></div>
          <Data />
        </div>
      </div>
    </section>
  );
}

export default Home;
