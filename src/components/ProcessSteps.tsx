import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const ProcessSteps = () => {
  const steps = [
    {
      number: "01",
      title: "Вы оставляете заявку",
      description: "мы связываемся в течение 15 минут",
      icon: "MessageSquare",
      color: "from-blue-500 to-cyan-500",
    },
    {
      number: "02",
      title: "Мы всё настраиваем через AnyDesk",
      description: "ЭЦП, Госуслуги, криптография, шаблоны",
      icon: "Monitor",
      color: "from-purple-500 to-pink-500",
    },
    {
      number: "03",
      title: "Вы получаете доступ и инструкции",
      description: "уже в этот же день, с поддержкой на 3 месяца",
      icon: "CheckCircle2",
      color: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <section
      id="process"
      className="py-24 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent"></div>
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-6 py-3 rounded-full font-semibold mb-6">
            <Icon name="Zap" size={20} />
            Простой процесс
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6 leading-tight">
            Как всё происходит — <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              просто и по шагам
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Наш отработанный процесс гарантирует быстрое и качественное
            подключение
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="relative bg-white border-none shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 group overflow-hidden"
            >
              {/* Gradient background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
              ></div>

              <CardContent className="p-8 text-center relative">
                {/* Step number */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div
                    className={`w-14 h-14 bg-gradient-to-br ${step.color} text-white rounded-2xl flex items-center justify-center font-bold text-xl shadow-lg`}
                  >
                    {step.number}
                  </div>
                </div>

                <div className="mt-12 mb-8">
                  <div
                    className={`w-20 h-20 mx-auto bg-gradient-to-br ${step.color} rounded-3xl flex items-center justify-center mb-6 shadow-lg`}
                  >
                    <Icon
                      name={step.icon as any}
                      size={36}
                      className="text-white"
                    />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-slate-800 mb-4 leading-tight">
                  {step.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-lg">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg">
            <Icon name="Sparkles" size={24} />
            Ничего не нужно изучать — всё сделаем за вас
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
