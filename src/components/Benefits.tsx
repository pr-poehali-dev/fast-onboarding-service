import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Benefits = () => {
  const benefits = [
    {
      text: "13 770 ₽ — фиксированная цена, без скрытых платежей",
      icon: "Banknote",
      color: "from-green-500 to-emerald-600",
    },
    {
      text: "Поддержка до полного понимания",
      icon: "Headphones",
      color: "from-blue-500 to-cyan-600",
    },
    {
      text: "Видеоинструкции и документы в подарок",
      icon: "Gift",
      color: "from-purple-500 to-violet-600",
    },
    {
      text: "3 месяца сопровождения после подключения",
      icon: "Calendar",
      color: "from-orange-500 to-red-600",
    },
    {
      text: "100% гарантия подключения или возврат денег",
      icon: "Shield",
      color: "from-emerald-500 to-teal-600",
    },
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
          <div className="grid gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center gap-6">
                  <div
                    className={`flex-shrink-0 w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon
                      name={benefit.icon}
                      size={28}
                      className="text-white"
                    />
                  </div>
                  <span className="text-lg text-gray-700 font-medium flex-1">
                    {benefit.text}
                  </span>
                  <Icon
                    name="ArrowRight"
                    size={20}
                    className="text-gray-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all duration-300"
                  />
                </div>
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
