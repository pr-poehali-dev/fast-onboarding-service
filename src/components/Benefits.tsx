import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Benefits = () => {
  const benefits = [
    "13 770 ₽ — фиксированная цена, без скрытых платежей",
    "Поддержка до полного понимания",
    "Видеоинструкции и документы в подарок",
    "3 месяца сопровождения после подключения",
    "100% гарантия подключения или возврат денег",
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-green-500 text-white px-4 py-2 text-lg">
            100+ организаций уже подключились
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Почему выбирают нас?
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid gap-4 mb-12">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-4 bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <Icon name="Check" size={20} className="text-white" />
                </div>
                <span className="text-lg text-gray-700 font-medium">
                  {benefit}
                </span>
              </div>
            ))}
          </div>

          <Card className="bg-gradient-to-r from-green-500 to-emerald-600 border-none text-white">
            <CardContent className="p-8 text-center">
              <Icon
                name="Quote"
                size={40}
                className="mx-auto mb-4 opacity-80"
              />
              <p className="text-xl md:text-2xl font-medium mb-4 italic">
                "Нам объяснили всё простым языком. Всё настроили и дали шаблоны
                — лучше не придумаешь"
              </p>
              <p className="text-green-100">— Довольный клиент</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
