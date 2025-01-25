import "./home.css";
import About from "./About"
import Servisec from "./Servisec"
import Blog from "./Blog"
import Contact from "./Contact"
import couch from "../assets/couch 11.png";
import dotted from "../assets/Dotted.png"

function Home() {
  return (
    <>
      <div className="home" id="#">
        <div className="text">
          <h1>Modern Interior Design Studio</h1>
          <div className="button">
            <button className="button1">Shop Now</button>
            <button className="button2">Explore</button>
          </div>
        </div>
        <div className="img">
            <img className="img1" src={dotted} alt="error" />
            <img className="img2" src={couch} alt="error" />
        </div>
      </div>
      <About/>
      <Servisec />
      <Blog />
      <Contact />
    </>
  );
}

export default Home;
