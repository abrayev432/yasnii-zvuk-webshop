
import React from 'react';
import { Stethoscope, Settings, Users, Shield } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Stethoscope,
      title: 'Диагностика слуха',
      description: 'Профессиональная аудиометрия на современном оборудовании'
    },
    {
      icon: Settings,
      title: 'Настройка аппаратов',
      description: 'Индивидуальная настройка под ваши потребности'
    },
    {
      icon: Users,
      title: 'Консультации',
      description: 'Бесплатные консультации опытных специалистов'
    },
    {
      icon: Shield,
      title: 'Гарантия',
      description: 'Расширенная гарантия на все слуховые аппараты'
    }
  ];

  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Наши услуги
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Полный спектр услуг для восстановления и улучшения вашего слуха
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="text-center p-6 rounded-lg border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="bg-teal-100 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                <service.icon className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
