import out1 from "../assets/images/out1.jpg";
import out2 from "../assets/images/out2.jpg";
import out3 from "../assets/images/out3.jpg";
import out4 from "../assets/images/out4.jpg";
const Outdoorscards = [
  { id: 5, name: "OutdoorLight1", price: 100, image: out1 },
  { id: 6, name: "OutdoorLight2", price: 150, image: out2 },
  { id: 7, name: "OutdoorLight3", price: 200, image: out3 },
  { id: 8, name: "OutdoorLight4", price: 250, image: out4 },
];
import Cards from "../components/card";
function Outdoors() {
  return (
    <section className="mt-18 ">
      <div className="flex justify-center  items-center  flex-wrap m-6">
        
        
          {Outdoorscards.map((Outdoorcard) => (
            <Cards key={Outdoorcard.id} {...Outdoorcard} />
          ))}
      
      </div>
    </section>
  );
}

export default Outdoors;
