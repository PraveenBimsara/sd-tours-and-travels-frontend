import React from "react";
import mainImage from "../assets/Ella-Sri-Lanka.jpg";
import aboutImage from "../assets/about-us.jpg";

const AboutUs = () => {
  return (
    <div className="about-us">
      <section
        className="relative h-[60vh] bg-cover bg-center flex items-center justify-center mb-12"
        style={{ backgroundImage: `url(${mainImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent"></div>
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white">
          About Us
        </h1>
      </section>

      <section
        className="py-12 bg-gray-50 relative h-[100vh] bg-cover bg-center flex flex-col items-center justify-center"
        style={{ backgroundImage: `url(${aboutImage})` }}
      >
        <div className="flex flex-col items-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-navy mb-4">
            SD Tours and Travel
          </h1>
          <p className="text-center text-white">
            SD Tours & Travels invites you to experience the true beauty of Sri
            Lanka — from ancient heritage sites and lush green mountains to
            breathtaking beaches and rich wildlife. Travel with comfort, safety,
            and local expertise while we turn every journey into a memorable
            story.
          </p>
        </div>

        <div className="flex flex-col items-center">
          <h1 className="text-4xl md:text-5xl font-bold text-sunsetYellow drop-shadow-lg mb-4">
            Our Story
          </h1>
          <p className="text-center text-white">
            <span className="text-sunsetOrange font-semibold">
              SD Tours & Travels
            </span>{" "}
            is a Sri Lanka–based travel company dedicated to creating meaningful
            and unforgettable travel experiences across the island. With strong
            local knowledge and a passion for hospitality, we design carefully
            planned tours that showcase Sri Lanka’s culture, nature, history,
            and hidden beauty.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
