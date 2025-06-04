import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const ProcessSteps = () => {
  const steps = [
    {
      number: "01",
      title: "Вы оставляете заявку",
      description: "мы связываемся в течение 15 минут",
      icon: "Phone",
    },
    {
      number: "02",
      title: "Мы всё настраиваем через AnyDesk",
      description: "ЭЦП, Госуслуги, криптография, шаблоны",
      icon: "Settings",
    },
    {
      number: "03",
      title: "Вы получаете доступ и инструкции",
      description: "уже в этот же день, с поддержкой на 3 месяца",
      icon: "CheckCircle",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Как всё происходит — просто и по шагам
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="relative bg-white border-none shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <CardContent className="p-8 text-center">
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    {step.number}
                  </div>
                </div>

                <div className="mt-8 mb-6">
                  <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <Icon
                      name={step.icon as any}
                      size={32}
                      className="text-blue-600"
                    />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-6 py-3 rounded-full font-semibold">
            <Icon name="Info" size={20} />
            Ничего не нужно изучать — всё сделаем за вас
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
