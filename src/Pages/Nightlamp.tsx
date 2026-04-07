import t1 from "../assets/images/t1.jpg";
import t2 from "../assets/images/t2.jpg";
import t3 from "../assets/images/t3.jpg";
import t4 from "../assets/images/t4.jpg";
import Cards from "../components/card";
const Nightlampcards = [
  { id: 9, name: "TableLight1", price: 100, image: t1 },
  { id: 10, name: "TableLight2", price: 150, image: t2 },
  { id: 11, name: "TableLight3", price: 200, image: t3 },
  { id: 12, name: "TableLight4", price: 250, image: t4 },
];

function Nightlamp() {
  return (
    <section className="w-full h-full mt-20">
      <div className="flex justify-center items-center gap-3 flex-wrap m-6">
        {Nightlampcards.map((Nightlampcard) => (
          <Cards key={Nightlampcard.id} {...Nightlampcard} />
        ))}
      </div>
    </section>
  );
}

export default Nightlamp;
