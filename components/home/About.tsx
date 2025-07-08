import React from "react";

const About = () => {
  return (
    <section className="px-6 md:px-44 py-16 bg-white text-gray-700 font-poppins border">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* About Us */}
        <div>
          <h3 className="text-pink-600 font-semibold text-sm uppercase mb-2 tracking-wider">
            About Us
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            TUMALOCK DEAL
          </h2>
          <p className="text-base md:text-lg mb-6">
            <span className="font-semibold text-gray-900">Tumalock deal</span>{" "}
            is an innovative business idea aimed at securing agreements between
            buyers and sellers in the ever-growing world of e-commerce. With the
            increasing popularity of online transactions, there has also been an
            increase in reported cases of fraud and scams, resulting in
            significant financial losses.
          </p>
          <p className="text-base md:text-lg">
            Tumalock platform provides a solution by holding the{" buyer's"}{" "}
            payment in a secure trust account while the purchased goods are
            being delivered by the seller. The seller cannot access the funds
            until the goods have been successfully delivered. Once the buyer
            receives the items, they verify their condition and then unlock the
            money to be released to the seller.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="space-y-12">
          {/* Mission */}
          <div>
            <h4 className="text-pink-600 font-semibold text-sm uppercase mb-2 tracking-widest">
              Our Mission
            </h4>
            <p className="text-base md:text-lg">
              To unlock opportunities for e-commerce growth through secure,
              trusted, and reliable payment solution.
            </p>
          </div>

          {/* Vision */}
          <div>
            <h4 className="text-pink-600 font-semibold text-sm uppercase mb-2 tracking-widest">
              Our Visions
            </h4>
            <p className="text-base md:text-lg">
              To be the leading secure, simple, and affordable payment platform
              that empowers financial growth in e-commerce.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
