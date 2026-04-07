
function Footer() {
  return (
    <footer className="mt-20 ">
      
      
        <div className=" bg-sky-600 py-2 text-sm  text-center lg:text-xl text-white  flex flex-col justify-center items-center">
          <h4 className=" inline  w-3/4  md:w-fit ">
            Dubai | Abu-Dhabi | Sharjah | Ras-Al-Khaimah
          </h4>
          <a
            href="mailto:htetaung18399@gmail.com"
            target="_blank"
            className="border-2  border-white px-4 py-2 my-2 w-fit rounded-full  "
          >
            htetaung18399@gmail.com
          </a>
          <a
            href="https://wa.me/+971 505931821"
            className="border-2 border-white px-4 my-2 w-fit rounded-full "
            target="_blank"
          >
            +971 505931821
          </a>
          <div className="h-0.5 w-full bg-white"></div>
          <p className=" text-sm w-fit">
            copyright: &reg; example 2026 Light Shop
          </p>
        </div>
      
    </footer>
  );
}

export default Footer