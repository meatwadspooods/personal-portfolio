import React from 'react';

const Header: React.FC = () => {
  return (
    <div className="text-left w-[384px]">
      <section>
        <h1 className="text-4xl text-white font-bold mb-2">Adam Elhamdi</h1>
        <h2 className="text-xl font-medium text-gray-400 mb-4">
          {" "}
          Fullstack Software Engineer
        </h2>
        <h3 className="text-xl font-medium text-gray-400 mb-4">
          📍Houston, Texas 🇺🇸
        </h3>
      </section>
      <section className="text-gray-300 text-sm">
        Building Real Products For Real Clients, Not Just More Projects
      </section>
    </div>
  );
};

export default Header;
