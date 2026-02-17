import React, { useState } from "react";
import Navbar from "./components/Navbar";
import AIConsultant from "./components/AIConsultant";
import { SERVICES, PORTFOLIO } from "./constants";
import { Service } from "./types";

const App: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<
    "All" | "Hair" | "Nails" | "Lashes"
  >("All");

  const filteredServices =
    selectedCategory === "All"
      ? SERVICES
      : SERVICES.filter((s) => s.category === selectedCategory);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=2000"
            alt="Beauty Studio"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-50/20 via-transparent to-stone-50"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <span className="inline-block px-4 py-1 mb-6 text-sm font-semibold tracking-widest text-amber-800 uppercase bg-amber-100 rounded-full">
            Artistry in Every Detail
          </span>
          <h1 className="text-6xl md:text-8xl font-bold text-stone-900 mb-8 leading-tight">
            Elevated Beauty by <br />
            <span className="serif italic text-amber-800">Renay Brener</span>
          </h1>
          <p className="text-xl md:text-2xl text-stone-700 mb-10 max-w-2xl mx-auto leading-relaxed">
            Specializing in high-end hair braiding, precision nail technology,
            and bespoke lash artistry.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#book"
              className="px-10 py-4 bg-stone-900 text-white text-lg font-medium rounded-full hover:bg-stone-800 transition shadow-xl"
            >
              Book Your Experience
            </a>
            <a
              href="#services"
              className="px-10 py-4 bg-white text-stone-900 text-lg font-medium rounded-full border border-stone-200 hover:bg-stone-50 transition shadow-sm"
            >
              Explore Services
            </a>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-stone-900 mb-4">
              The Service Menu
            </h2>
            <p className="text-stone-600 text-lg">
              Curated treatments for the modern individual.
            </p>
          </div>

          <div className="flex justify-center mb-12 space-x-2 md:space-x-4">
            {["All", "Hair", "Nails", "Lashes"].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat as any)}
                className={`px-6 py-2 rounded-full transition text-sm md:text-base ${
                  selectedCategory === cat
                    ? "bg-amber-800 text-white shadow-lg"
                    : "bg-stone-100 text-stone-600 hover:bg-stone-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="group bg-stone-50 rounded-3xl overflow-hidden border border-stone-100 hover:shadow-2xl transition-all duration-500"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-amber-800">
                    {service.category}
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-stone-900">
                      {service.title}
                    </h3>
                    <span className="text-amber-800 font-bold">
                      {service.price}
                    </span>
                  </div>
                  <p className="text-stone-600 mb-6 line-clamp-2 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="flex items-center text-stone-400 text-sm mb-6">
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    {service.duration}
                  </div>
                  <a
                    href="#book"
                    className="block text-center w-full py-3 bg-white text-stone-900 border border-stone-200 rounded-xl font-medium group-hover:bg-stone-900 group-hover:text-white transition-colors duration-300"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section id="portfolio" className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-stone-900 mb-4 serif italic">
              The Gallery
            </h2>
            <p className="text-stone-600 text-lg">
              Visual evidence of excellence and precision.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
            {PORTFOLIO.map((item) => (
              <div
                key={item.id}
                className="relative aspect-square group overflow-hidden rounded-2xl md:rounded-3xl shadow-lg"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                  <div className="text-center">
                    <span className="text-white/80 text-xs uppercase tracking-widest block mb-1">
                      {item.category}
                    </span>
                    <h4 className="text-white text-lg font-bold">
                      {item.title}
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Consultant Component */}
      <AIConsultant />

      {/* Booking Section */}
      <section id="book" className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 bg-stone-900 rounded-[3rem] p-12 md:p-20 text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-amber-800/20 rounded-full blur-3xl"></div>
          <div className="relative z-10 text-center">
            <h2 className="text-5xl font-bold mb-8">Secure Your Session</h2>
            <p className="text-stone-300 text-xl mb-12">
              Experience the Renay Brener difference. Appointments fill up
              quickly—reserve your time today.
            </p>
            <form
              className="space-y-6 text-left max-w-md mx-auto"
              onSubmit={(e) => {
                e.preventDefault();
                alert(
                  "In a real app, this would redirect to a scheduling provider like Acuity or Calendly!",
                );
              }}
            >
              <div>
                <label className="block text-sm font-medium text-stone-400 mb-2">
                  Service
                </label>
                <select className="w-full bg-stone-800 border-none rounded-xl px-4 py-4 text-white focus:ring-2 focus:ring-amber-500">
                  <option>Select a service...</option>
                  {SERVICES.map((s) => (
                    <option key={s.id}>
                      {s.title} ({s.price})
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-400 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full bg-stone-800 border-none rounded-xl px-4 py-4 text-white focus:ring-2 focus:ring-amber-500"
                  placeholder="Jane Doe"
                />
              </div>
              <button
                type="submit"
                className="w-full py-5 bg-amber-700 hover:bg-amber-600 text-white font-bold rounded-xl transition shadow-lg text-lg uppercase tracking-widest"
              >
                Check Availability
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-stone-50 border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-stone-900 mb-4 tracking-tighter">
            RENAY BRENER
          </h2>
          <div className="flex justify-center space-x-6 mb-8">
            <a href="#" className="text-stone-400 hover:text-stone-900">
              Instagram
            </a>
            <a href="#" className="text-stone-400 hover:text-stone-900">
              TikTok
            </a>
            <a href="#" className="text-stone-400 hover:text-stone-900">
              Pinterest
            </a>
          </div>
          <p className="text-stone-500 text-sm">
            © 2026 Renay Brener Beauty Studio. All rights reserved. <br />
            Located in Pretoria, Gauteng.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
