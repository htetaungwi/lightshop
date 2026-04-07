import { Link } from "react-router"
import in2 from "../assets/images/in2.png";
import out4 from "../assets/images/out4.jpg";
import t2 from "../assets/images/t2.jpg";
import Card from "../components/Homecard";
const Homecards = [
  { id: 1, title: "View Indoor Lights ", image: in2, link: "/indoor" },
  { id: 2, title: "View Outdoor Lights ", image: out4, link: "/outdoors" },
  { id: 3, title: "View Table Lights ", image: t2, link: "/nightlamp" },
];
function Home() {
  return (
    <section className=" h-fit mt-20">
      <h2 className="text-2xl text-bold tex-left m-8 w-fit ">
        Decorate Your Space With Our Lighting Solutions
      </h2>
      {/* Homecard section start */}
      <div>
        <div className="flex justify-center w-full items-center  text-center ">
          <Link
            to="/shops"
            className="border-2 border-black rounded-full px-4 py-2 hover:bg-sky-400"
          >
            Show All Products &#129026;
          </Link>
        </div>
        <div className="flex justify-center items-center gap-4 flex-wrap m-6 flex-col md:grid md:grid-cols-2 lg:grid-cols-3">
          {Homecards.map((Homecard) => (
            <Card key={Homecard.id} {...Homecard} />
          ))}
        </div>
      </div>
      {/* Homecard section end */}
      <div className="flex flex-col justify-center items-center m-4 md:grid md:grid-cols-3">
        <p className="block text-justify w-4/5 h-fit p-4 border-2 border-black rounded-xl shadow-black m-2">
          Indoor Lighting: Ceilling lights,downlights, panel lights and
          decorative fixtures that bring warmth and ambiance to any room.
        </p>
        <p className="block text-justify w-4/5 h-fit p-4 border-2 border-black rounded-xl shadow-black m-2">
          Outdoor Lighting: Floodlights, wall lights, and garden fixtures that
          enhance security and create a welcoming atmosphere for your outdoor
          spaces.
        </p>
        <p className="block text-justify w-4/5 h-fit p-4 border-2 border-black rounded-xl shadow-black m-2">
          Table Lamps: Stylish and functional table lamps that add a touch of
          elegance to your living spaces, perfect for reading or creating a cozy
          ambiance.
        </p>
      </div>
      <h4 className="text-2xl text-bold text-center w-full">
        Every Solution For Your Lighting Needs
      </h4>
      <div className="flex justify-center items-center w-full ">
        <Link
          to="/services"
          className="border-2 border-black rounded-full  text-black w-40 m-8 text-center hover:bg-sky-400 h-10 px-4 py-2"
        >
          Our Services
        </Link>
      </div>
    </section>
  );
}

export default Home