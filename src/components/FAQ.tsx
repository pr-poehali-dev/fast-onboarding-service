import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "А если уже пытались подключиться, но не вышло?",
      answer:
        "Исправим ошибки, подключим правильно. У нас большой опыт решения проблем с подключением к ФИС ФРДО.",
    },
    {
      question: "Что делать, если я ничего не понимаю в этом процессе?",
      answer:
        "Вам ничего не нужно понимать — мы всё сделаем и обучим. Наша задача — избавить вас от технических сложностей.",
    },
    {
      question: "А если не подключите?",
      answer:
        "Вернём деньги. Но такого ещё не было за все время нашей работы. Мы гарантируем 100% результат.",
    },
    {
      question: "Какие документы нужны?",
      answer:
        "Мы дадим памятку — всё просто: ЭЦП, AnyDesk, Госуслуги. Никаких сложных документов и справок не требуется.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Частые вопросы
          </h2>
          <p className="text-xl text-gray-600">
            Отвечаем на самые популярные вопросы наших клиентов
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-gray-200 rounded-lg px-6 bg-gray-50 hover:bg-gray-100 transition-colors duration-200"
              >
                <AccordionTrigger className="text-left font-semibold text-lg text-gray-800 hover:text-blue-600">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-lg leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
