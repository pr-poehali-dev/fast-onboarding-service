import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Footer = () => {
  const additionalServices = [
    { icon: "BookOpen", title: "Разработка образовательных программ" },
    { icon: "Briefcase", title: "Помощь в получении лицензии" },
    { icon: "Monitor", title: "Настройка системы ДОТ" },
    { icon: "Search", title: "Аудит сайта по 831/1493" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Additional Services */}
      <section className="py-16 border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Дополнительные услуги</h3>
            <p className="text-gray-400 text-lg">
              Комплексные решения для образовательных организаций
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-8">
            {additionalServices.map((service, index) => (
              <Card
                key={index}
                className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-colors"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 bg-blue-600 rounded-full flex items-center justify-center">
                    <Icon
                      name={service.icon as any}
                      size={24}
                      className="text-white"
                    />
                  </div>
                  <h4 className="font-semibold text-white">{service.title}</h4>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button
              variant="outline"
              className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white"
            >
              Подробнее
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-2xl font-bold mb-6">Контакты</h4>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Icon name="Phone" className="text-green-400" />
                    <span className="text-lg">+7 (999) 155-82-51</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Mail" className="text-blue-400" />
                    <span className="text-lg">maratsafin16@yandex.ru</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Clock" className="text-gray-400" />
                    <span>Пн–Сб, 10:00–20:00 по МСК</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-2xl font-bold mb-6">Мессенджеры</h4>
                <div className="flex gap-4">
                  <Button size="lg" className="bg-green-500 hover:bg-green-600">
                    <Icon name="MessageCircle" className="mr-2" />
                    WhatsApp
                  </Button>
                  <Button size="lg" className="bg-blue-500 hover:bg-blue-600">
                    <Icon name="Send" className="mr-2" />
                    Telegram
                  </Button>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
              <p>&copy; 2024 ФИС ФРДО Подключение. Все права защищены.</p>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
