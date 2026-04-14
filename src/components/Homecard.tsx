import { Link } from "react-router"

interface Cards{
    id: number,
    title: string,
    image: string,
    link: string
}
const Card = ({ title, image, link }: Cards) => { 
    return (
      <div className="relative w-full h-50  ">
        <img src={image} alt="" className="w-full h-full rounded-2xl" />
        <div className="absolute bottom-4 left-4 z-40 ">
          <h3 className="text-black text-xl ">{title}</h3>
          <div className="border-2 border-gray-100 rounded-full bg-gray-100 text-black w-30 text-center hover:bg-sky-400 h-10 px-4 py-2">
            <Link to={link}>View</Link>
          </div>
        </div>
      </div>
    );
}
export default Card;