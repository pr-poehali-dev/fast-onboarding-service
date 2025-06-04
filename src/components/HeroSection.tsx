
import React from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.05\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"2\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Подключим к <span className="text-yellow-300">ФИС ФРДО</span> за 1 день
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100 mb-4 font-medium">
            Без ошибок. Без лишних документов. Без головной боли.
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/20">
            <p className="text-2xl md:text-3xl font-bold text-yellow-300 mb-2">
              Всего 13 770 ₽
            </p>
            <p className="text-lg text-blue-100">
              Всё сделаем за вас — от настройки до обучения.<br />
              Успешное подключение гарантируем. Сопровождение 3 месяца.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold px-8 py-4 text-lg">
              <Icon name="Phone" className="mr-2" size={20} />
              Заказать подключение
            </Button>
            <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 px-8 py-4">
              <Icon name="PlayCircle" className="mr-2" size={20} />
              Как это работает
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
