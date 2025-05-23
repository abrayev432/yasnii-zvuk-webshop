
import React from 'react';
import { Award, Clock, Heart, Star } from 'lucide-react';

const WhyChooseUs = () => {
  const advantages = [
    {
      icon: Award,
      title: 'Опыт более 15 лет',
      description: 'Наши специалисты имеют многолетний опыт работы с пациентами'
    },
    {
      icon: Star,
      title: 'Ведущие бренды',
      description: 'Работаем только с проверенными производителями'
    },
    {
      icon: Clock,
      title: 'Быстрая настройка',
      description: 'Настройка и адаптация аппарата в день обращения'
    },
    {
      icon: Heart,
      title: 'Индивидуальный подход',
      description: 'Учитываем особенности каждого пациента'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
            Почему выбирают нас
          </h2>
          <div className="w-16 h-1 bg-teal-500 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Наши преимущества, которые ценят клиенты
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => (
            <div key={index} className="text-center">
              <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <advantage.icon className="w-10 h-10 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {advantage.title}
              </h3>
              <p className="text-gray-600">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
