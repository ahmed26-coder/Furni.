import "./home.css";
import { FaPlusCircle } from "react-icons/fa";
import product1 from "../assets/product-1.png";
import product2 from "../assets/product-2.png";
import product3 from "../assets/product-3.png";
import dot from "../assets/Dot.png";
import maskgroup from "../assets/Mask group.png";
import { LuAmbulance } from "react-icons/lu";
import { FiShoppingBag } from "react-icons/fi";
import { HiOutlineSupport } from "react-icons/hi";
import { VscSync } from "react-icons/vsc";
import { MdOutlineCircle } from "react-icons/md";
import imggriad1 from "../assets/img-grid-2 1.png";
import imggriad2 from "../assets/img-grid-3 1.png";
import dotgreen from "../assets/Dot green.png";
import maskgroup1 from "../assets/Mask group1.png";

function about() {
  const DataCard = [
    {
      id: "1",
      icon: LuAmbulance,
      title: "Fast  & Free Shipping",
      dish: "Donec mattis porta eros, aliquet finibus risus interdum at. Nulla vivethe as it was"
    },
    {
      id: "2",
      icon: FiShoppingBag,
      title: "Easy to Shop",
      dish: "Donec mattis porta eros, aliquet finibus risus interdum at. Nulla vivethe as it was"
    },
    {
      id: "3",
      icon: HiOutlineSupport,
      title: "24/7 Support",
      dish: "Donec mattis porta eros, aliquet finibus risus interdum at. Nulla vivethe as it was"
    },
    {
      id: "4",
      icon: VscSync,
      title: "Hassle Free Returns",
      dish: "Donec mattis porta eros, aliquet finibus risus interdum at. Nulla vivethe as it was"
    }
  ];
  return (
    <div className="about" id="about">
      <div className="about1">
        <div className="part1">
          <h1>Crafted with excellent material.</h1>
          <p>
            Donec mattis porta eros, aliquet finibus risus interdum at. Nulla
            vivethe as it was for us to know what was to be done.
          </p>
          <button>Explore</button>
        </div>
        <div className="part2">
          <img src={product1} alt="error" />
          <div className="free"></div>
          <div className="p">
            <p>Nordic CHAIR</p>
            <p className="number">$50.00</p>
          </div>
          <FaPlusCircle />
        </div>
        <div className="part3">
          <img src={product2} alt="error" />
          <div className="p">
            <p>Kruzo Aero Chair</p>
            <p className="number">$78.00</p>
          </div>
        </div>
        <div className="part4">
          <img src={product3} alt="error" />
          <div className="p">
            <p>Ergonomic Chair</p>
            <p className="number">$43.00</p>
          </div>
        </div>
      </div>
      <div className="about2">
        <div className="part1">
          <div className="part1">
            <h1>Why Choose Us</h1>
            <p>
              Donec mattis porta eros, aliquet finibus risus interdum at. Nulla
              vivethe as it was for us to know what was to be done. the
            </p>
          </div>
          <div className="part2">
            {DataCard.map((card) => (
              <article key={card.id}>
                <card.icon />
                <h3>{card.title}</h3>
                <p>{card.dish}</p>
              </article>
            ))}
          </div>
        </div>
        <div className="part2">
          <div className="img-container">
            <img className="img1" src={dot} alt="error" />
            <img className="img2" src={maskgroup} alt="error" />
          </div>
        </div>
      </div>
      <div className="about_bottom">
        <div className="about_right">
          <img className="img3" src={dotgreen} alt="error" />
          <img className="img4" src={maskgroup1} alt="error" />
          <img className="img5" src={imggriad2} alt="error" />
          <img className="img6" src={imggriad1} alt="error" />
        </div>
        <div className="about_left">
          <h1>We help you make Modern Interior Design</h1>
          <p>
            Donec mattis porta eros, aliquet finibus risus interdum at. Nulla
            vivethe as it was for us to know what was to be done. the this is a
            long post for the text.`This small text has to be place here, since
            this is a place holder. You can also chane it.
          </p>
          <div className="dish">
            <p>
              <MdOutlineCircle />
              Donec mattis porta eros,let aliquet finibus ri
            </p>
            <p>
              <MdOutlineCircle />
              Donec mattis porta eros,let aliquet finibus ri
            </p>
            <p>
              <MdOutlineCircle />
              Donec mattis porta eros,let aliquet finibus ri
            </p>
            <p>
              <MdOutlineCircle />
              Donec mattis porta eros,let aliquet finibus ri
            </p>
          </div>
          <button>Explore</button>
        </div>
      </div>
      <div className="about_footer">
        <div className="left">
          <div className="left">
            <img src={product1} alt="error" />
            <div className="free_time"></div>
          </div>
          <div className="right">
              <h4>Nordic Chair</h4>
              <p>Donec mattis porta eros, aliquet finibus risus in. Donecd </p>
              <button className="click">Read more</button>  
          </div>
        </div>
        <div className="center">
          <div className="left">
              <img src={product2} alt="error" />
              <div className="free_time"></div>
          </div>
          <div className="right">
              <h4>Kruzi Aero</h4>
              <p>Donec mattis porta eros, aliquet finibus risus in. Donecd </p>
              <button className="click">Read more</button>  
          </div>
        </div>
        <div className="right">
          <div className="left">
            <img src={product3} alt="error" />
            <div className="free_time"></div>
          </div>
          <div className="right">
              <h4>Ergonomic Chair</h4>
              <p>Donec mattis porta eros, aliquet finibus risus in. Donecd </p>
              <button className="click">Read more</button>  
          </div>
        </div>
      </div>
    </div>
  );
}

export default about;
