import in1 from "../assets/images/in1.jpg";
import in2 from "../assets/images/in2.png";
import in3 from "../assets/images/in3.jpg";
import in4 from "../assets/images/in4.jpg";
import Cards from "../components/card";
const Indoorcards = [
  { id: 1, name: "IndoorLight1", price: 100, image: in1 },
  { id: 2, name: "IndoorLight2", price: 150, image: in2 },
  { id: 3, name: "IndoorLight3", price: 200, image: in3 },
  { id: 4, name: "IndoorLight4", price: 250, image: in4 },
]
function Indoor() {
  return (
    <section className="mt-20 ">
      <div className="flex justify-center items-center gap-3 flex-wrap m-6">
        {Indoorcards.map((Indoorcard) => (
          <Cards key={Indoorcard.id} {...Indoorcard} />
        ))}
      </div>
    </section>
  );
}

export default Indoor;
