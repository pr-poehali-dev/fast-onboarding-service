import React from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Подключим к <span className="text-yellow-300">ФИС ФРДО</span> за 1
            день
          </h1>

          <p className="text-xl md:text-2xl text-blue-100 mb-4 font-medium">
            Без ошибок. Без лишних документов. Без головной боли.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button
              size="lg"
              className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-semibold px-8 py-3 text-lg"
            >
              <Icon name="Phone" className="mr-2" size={20} />
              Получить консультацию
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-blue-200 text-blue-100 hover:bg-blue-600 px-8 py-3 text-lg"
            >
              <Icon name="FileText" className="mr-2" size={20} />
              Узнать требования
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-blue-200">
            <div className="flex items-center">
              <Icon
                name="CheckCircle"
                className="mr-2 text-green-400"
                size={16}
              />
              Опыт 10+ лет
            </div>
            <div className="flex items-center">
              <Icon
                name="CheckCircle"
                className="mr-2 text-green-400"
                size={16}
              />
              500+ успешных подключений
            </div>
            <div className="flex items-center">
              <Icon
                name="CheckCircle"
                className="mr-2 text-green-400"
                size={16}
              />
              Гарантия результата
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
