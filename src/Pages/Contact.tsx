import loco from "../assets/images/loca.jpg"
import emi from "../assets/images/emil.webp"
import wp from "../assets/images/wp.webp"
function Contact() {
  return (
    <section className="w-full mt-20 h-fit ">
      <h1 className="text-center font-bold text-2xl m-8">Our Branches</h1>
      <div className="md:grid md:grid-cols-2">
        {/* Dubai Branch */}
        <div className="mb-12">
          <h3 className="mt-8 px-8 text-xl text-left">Dubai Branch</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462560.6828291298!2d54.89781575271148!3d25.07628044598915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai!5e0!3m2!1sen!2sae!4v1775194084540!5m2!1sen!2sae"
            className="w-full h-80 px-4 "
          ></iframe>
          <div className=" mx-4">
            <p className="text-left text-lg">
              <img src={wp} className="w-12 h-12 inline mr-2" />
              +971000000
            </p>
            <p className="text-left text-lg">
              <img src={emi} alt="" className="w-12 h-12 inline mr-2 " />
              eg@gmail.com
            </p>
            <p className="text-left text-lg">
              <img src={loco} alt="" className="w-12 h-12 inline mr-2" />
              Dubai
            </p>
          </div>
        </div>
        {/* Abudhabi Branch */}
        <div className="mb-12">
          <h3 className="mt-8 px-8 text-xl text-left">Abu Dhabi Branch</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d465132.97343521053!2d54.22894439588459!3d24.386473873295266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e440f723ef2b9%3A0xc7cc2e9341971108!2sAbu%20Dhabi!5e0!3m2!1sen!2sae!4v1775197712452!5m2!1sen!2sae"
            className="w-full h-80 px-4 "
          ></iframe>
          <div className="mx-4">
            <p className="text-left text-lg">
              <img src={wp} className="w-12 h-12 inline mr-2" />
              +971000000
            </p>
            <p className="text-left text-lg">
              <img src={emi} alt="" className="w-12 h-12 inline mr-2 " />
              eg@gmail.com
            </p>
            <p className="text-left text-lg">
              <img src={loco} alt="" className="w-12 h-12 inline mr-2" />
              Dubai
            </p>
          </div>
        </div>
        {/* Shajah Branch */}
        <div className="mb-12">
          <h3 className="mt-8 px-8 text-xl text-left">Shajah Branch</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d230818.18181231487!2d55.3814609610801!3d25.319853057884803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5f5fede7964b%3A0x2a830aa19c1f6d89!2sSharjah!5e0!3m2!1sen!2sae!4v1775197843494!5m2!1sen!2sae"
            className="w-full h-80 px-4 "
          ></iframe>
          <div className="mx-4">
            <p className="text-left text-lg">
              <img src={wp} className="w-12 h-12 inline mr-2" />
              +971000000
            </p>
            <p className="text-left text-lg">
              <img src={emi} alt="" className="w-12 h-12 inline mr-2 " />
              eg@gmail.com
            </p>
            <p className="text-left text-lg">
              <img src={loco} alt="" className="w-12 h-12 inline mr-2" />
              Dubai
            </p>
          </div>
        </div>
        {/* Ras Al-khaimah branch */}
        <div className="mb-12">
          <h3 className="mt-8 px-8 text-xl text-left">Ras Al Khaimah Branch</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d460076.4790465634!2d55.638602021836185!3d25.726019706630513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef676ad264b24c1%3A0x10f6affe1a9e78a3!2sRas%20Al-Khaimah%20-%20Ras%20Al%20Khaimah!5e0!3m2!1sen!2sae!4v1775197932501!5m2!1sen!2sae"
            className="w-full px-4 h-80"
          ></iframe>
          <div className="mx-4">
            <p className="text-left text-lg">
              <img src={wp} className="w-12 h-12 inline mr-2" />
              +971000000
            </p>
            <p className="text-left text-lg">
              <img src={emi} alt="" className="w-12 h-12 inline mr-2 " />
              eg@gmail.com
            </p>
            <p className="text-left text-lg">
              <img src={loco} alt="" className="w-12 h-12 inline mr-2" />
              Dubai
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact