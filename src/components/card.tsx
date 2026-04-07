interface Card {
    id: number;
    name: string;
    price: number;
    image: string;
}
const Cards = ({ name, price, image }: Card) => {
    return (
        <div className="  w-40 h-64 border-2 border-gray-500 rounded-lg p-1 hover:border-sky-500 hover:p-0 hover:shadow-sky-400 shadow-gray-500 shadow-lg m-6">
            <img src={image} alt="" className="w-full h-4/5 rounded-t-lg " />
            <div className=" ">
                <h3 className="font-bold">{name}</h3>
                <p>${price}</p>
            </div>
        </div>
    )
    
}
export default Cards;