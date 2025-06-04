import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Requirements = () => {
  const requirements = [
    {
      icon: "Monitor",
      title: "Компьютер на Windows",
      description: "Любая версия от Windows 7",
    },
    {
      icon: "Shield",
      title: "ЭЦП руководителя",
      description: "Действующая электронная подпись",
    },
    {
      icon: "Link",
      title: "Доступ к Госуслугам",
      description: "Подтвержденная учетная запись",
    },
    {
      icon: "Download",
      title: "Программа AnyDesk",
      description: "Для удаленного подключения",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Что нужно для начала
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
          {requirements.map((req, index) => (
            <Card
              key={index}
              className="text-center border border-gray-200 hover:border-blue-300 transition-all duration-200 hover:shadow-lg"
            >
              <CardContent className="p-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                  <Icon
                    name={req.icon as any}
                    size={28}
                    className="text-blue-600"
                  />
                </div>
                <h3 className="font-bold text-gray-800 mb-2">{req.title}</h3>
                <p className="text-sm text-gray-600">{req.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" className="px-8 py-3">
            <Icon name="Download" className="mr-2" />
            Скачать памятку
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Requirements;
