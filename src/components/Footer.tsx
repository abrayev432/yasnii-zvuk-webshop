
import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="bg-white text-slate-800 px-3 py-2 rounded text-sm font-medium inline-block mb-4">
              Ясный звук
            </div>
            <p className="text-gray-300 mb-4">
              Профессиональный центр слухопротезирования с многолетним опытом работы
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-teal-400" />
                <span>+7 (495) 123-45-67</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-teal-400" />
                <span>info@yasnyzvuk.ru</span>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-teal-400 mt-1" />
                <span>г. Москва, ул. Примерная, д. 123</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Режим работы</h3>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-3 text-teal-400" />
                <div>
                  <div>Пн-Пт: 9:00 - 18:00</div>
                  <div>Сб: 10:00 - 16:00</div>
                  <div>Вс: выходной</div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Услуги</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Диагностика слуха</li>
              <li>Подбор аппаратов</li>
              <li>Настройка и ремонт</li>
              <li>Консультации</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Ясный звук. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
