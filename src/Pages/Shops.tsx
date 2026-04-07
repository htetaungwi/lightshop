import in1 from '../assets/images/in1.jpg'
import in2 from '../assets/images/in2.png'
import in3 from '../assets/images/in3.jpg'
import in4 from '../assets/images/in4.jpg'
import out1 from '../assets/images/out1.jpg'
import out2 from '../assets/images/out2.jpg'
import out3 from '../assets/images/out3.jpg'
import out4 from '../assets/images/out4.jpg'
import t1 from '../assets/images/t1.jpg'
import t2 from '../assets/images/t2.jpg'
import t3 from '../assets/images/t3.jpg'
import t4 from '../assets/images/t4.jpg'
import Cards from '../components/card'
const Products = [
  { id: 1, name: "IndoorLight1", price: 100, image: in1 },
  { id: 2, name: "IndoorLight2", price: 150, image: in2 },
  { id: 3, name: "IndoorLight3", price: 200, image: in3 },
  { id: 4, name: "IndoorLight4", price: 250, image: in4 },
  { id: 5, name: "OutdoorLight1", price: 100, image: out1 },
  { id: 6, name: "OutdoorLight2", price: 150, image: out2 },
  { id: 7, name: "OutdoorLight3", price: 200, image: out3 },
  { id: 8, name: "OutdoorLight4", price: 250, image: out4 },
  { id: 9, name: "TableLight1", price: 100, image: t1 },
  { id: 10, name: "TableLight2", price: 150, image: t2 },
  { id: 11, name: "TableLight3", price: 200, image: t3 },
  { id: 12, name: "TableLight4", price: 250, image: t4 },
];

function Shops() {
  
  return (
    <section className="w-full h-full mt-20">
      <div className="flex justify-center items-center gap-3 flex-wrap m-6">
        {Products.map((Product) => (
          <Cards key={Product.id} {...Product} />
        ))}
      </div>
    </section>
  );
}

export default Shops