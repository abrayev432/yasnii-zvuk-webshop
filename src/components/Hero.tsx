
import React from 'react';

const Hero = () => {
  return (
    <section className="bg-gray-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Верните радость общения с близкими
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Современные слуховые аппараты от ведущих производителей с профессиональной настройкой
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-teal-500 text-white px-8 py-3 rounded-lg hover:bg-teal-600 transition-colors font-medium">
                Подобрать слуховой аппарат
              </button>
              <button className="bg-slate-600 text-white px-8 py-3 rounded-lg hover:bg-slate-700 transition-colors font-medium">
                Бесплатная консультация
              </button>
            </div>
          </div>
          <div className="lg:text-right">
            <img
              src="/lovable-uploads/d8286acd-9e31-4290-8122-03a71d37ebdf.png"
              alt="Современный слуховой аппарат"
              className="w-full max-w-md mx-auto lg:mx-0 lg:ml-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
