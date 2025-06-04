import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const ContactForm = () => {
  const services = [
    { id: "prof", label: "Проф. обучение" },
    { id: "dpo", label: "ДПО" },
    { id: "vo-spo", label: "ВО / СПО" },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <Card className="border-none shadow-2xl">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Оставьте заявку — получите подробную консультацию
              </CardTitle>
              <p className="text-gray-600 text-lg">
                Ответим на все вопросы и рассчитаем стоимость
              </p>
            </CardHeader>

            <CardContent className="space-y-6">
              <div className="space-y-4">
                <Input placeholder="Ваше имя" className="h-12 text-lg" />
                <Input
                  placeholder="Телефон"
                  type="tel"
                  className="h-12 text-lg"
                />
                <Input
                  placeholder="Название организации"
                  className="h-12 text-lg"
                />
              </div>

              <div>
                <p className="font-semibold text-gray-800 mb-4">
                  Отметьте нужные программы:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {services.map((service) => (
                    <div
                      key={service.id}
                      className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <Checkbox id={service.id} />
                      <label
                        htmlFor={service.id}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                      >
                        {service.label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <Button
                size="lg"
                className="w-full bg-green-500 hover:bg-green-600 text-white py-4 text-lg font-semibold rounded-xl"
              >
                <Icon name="Send" className="mr-2" />
                Оставить заявку
              </Button>

              <div className="text-center space-y-4">
                <p className="text-gray-600">или</p>

                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button
                    variant="outline"
                    size="lg"
                    className="flex-1 sm:flex-none"
                  >
                    <Icon name="MessageCircle" className="mr-2" />
                    написать в WhatsApp
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="flex-1 sm:flex-none"
                  >
                    <Icon name="Phone" className="mr-2" />
                    позвонить
                  </Button>
                </div>

                <Badge className="bg-red-500 text-white px-4 py-2 text-sm animate-pulse">
                  ⚠️ Осталось 3 свободных подключения на эту неделю
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
