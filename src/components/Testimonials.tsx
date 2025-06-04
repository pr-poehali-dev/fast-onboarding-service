import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Testimonials = () => {
  const testimonials = [
    {
      text: "Думала, это будет сложно, но оказалось проще простого. Всё сделали за меня. Марат — профи.",
      author: "Анна",
      company: "автошкола",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    },
    {
      text: "Подключили за 2 часа, сразу загрузили документы. Цена в 5 раз ниже, чем у конкурентов.",
      author: "ООО «Ремедиум»",
      company: "",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
    },
    {
      text: "Получили не просто подключение, а ещё и шаблоны, инструкции, поддержку. Рекомендую!",
      author: "Учебный центр «Феникс»",
      company: "",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    },
  ];

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Отзывы наших клиентов
          </h2>
          <p className="text-xl text-gray-300">
            Более 100 успешных подключений за последний год
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-colors duration-200"
            >
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Icon
                      key={i}
                      name="Star"
                      size={20}
                      className="text-yellow-400 fill-current"
                    />
                  ))}
                </div>

                <Icon
                  name="Quote"
                  size={32}
                  className="text-blue-400 mb-4 opacity-60"
                />

                <p className="text-gray-300 mb-6 text-lg leading-relaxed italic">
                  "{testimonial.text}"
                </p>

                <div className="border-t border-gray-700 pt-6">
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      className="w-12 h-12 rounded-full object-cover border-2 border-gray-600"
                    />
                    <div>
                      <p className="font-semibold text-white">
                        {testimonial.author}
                      </p>
                      {testimonial.company && (
                        <p className="text-gray-400 text-sm">
                          {testimonial.company}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 space-y-4">
          <Badge className="bg-green-500 text-white px-6 py-2 text-lg">
            <Icon name="TrendingUp" className="mr-2" />
            98% клиентов рекомендуют нас
          </Badge>

          <div>
            <Button
              asChild
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg rounded-xl"
            >
              <a
                href="https://www.avito.ru/user/your-profile-id/reviews"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Icon name="ExternalLink" size={20} />
                Все отзывы на Авито
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
