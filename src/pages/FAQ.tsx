import Header from "@/components/layout/Header";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";

const FAQ = () => {
  const faqs = [
    {
      question: "Как работают цифровые подписки?",
      answer:
        "Наша платформа предоставляет доступ к множеству премиум сервисов через единую подписку. Вы платите фиксированную сумму в месяц и получаете доступ ко всем включённым сервисам без дополнительных платежей.",
    },
    {
      question: "Можно ли отменить подписку в любое время?",
      answer:
        "Да, вы можете отменить подписку в любое время через личный кабинет. При отмене подписка будет действовать до конца оплаченного периода, после чего автоматически прекратится.",
    },
    {
      question: "Какие сервисы включены в подписку?",
      answer:
        "В зависимости от выбранного тарифа, вы получаете доступ к различным категориям сервисов: стриминговые платформы, облачные хранилища, образовательные ресурсы, дизайн-инструменты и многое другое.",
    },
    {
      question: "Есть ли пробный период?",
      answer:
        "Да, мы предоставляем 7-дневный бесплатный пробный период для всех новых пользователей. Вы можете протестировать все функции без ограничений.",
    },
    {
      question: "Как происходит оплата?",
      answer:
        "Мы принимаем банковские карты, СБП и электронные кошельки. Оплата происходит автоматически каждый месяц. Вы всегда можете изменить способ оплаты в настройках профиля.",
    },
    {
      question: "Поддерживаете ли вы корпоративных клиентов?",
      answer:
        "Да, у нас есть специальные тарифы для команд и компаний. Обратитесь к нашим менеджерам для получения индивидуального предложения.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16 animate-slide-up">
            <h1 className="text-4xl md:text-5xl font-bold text-cosmic-dark mb-6">
              Часто задаваемые
              <br />
              <span className="bg-gradient-to-r from-cosmic-purple to-cosmic-light bg-clip-text text-transparent">
                вопросы
              </span>
            </h1>
            <p className="text-xl text-cosmic-dark/70 max-w-2xl mx-auto">
              Найдите ответы на популярные вопросы о наших космических подписках
            </p>
          </div>

          <div className="glass-effect rounded-3xl p-8 animate-slide-up">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-cosmic-light rounded-2xl px-6"
                >
                  <AccordionTrigger className="text-left text-cosmic-dark hover:text-cosmic-purple py-6">
                    <div className="flex items-center">
                      <Icon
                        name="HelpCircle"
                        size={20}
                        className="text-cosmic-purple mr-3 flex-shrink-0"
                      />
                      {faq.question}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-cosmic-dark/80 pb-6 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Контакты для поддержки */}
          <div className="mt-16 text-center glass-effect rounded-3xl p-8 animate-slide-up">
            <h2 className="text-2xl font-semibold text-cosmic-dark mb-4">
              Не нашли ответ на свой вопрос?
            </h2>
            <p className="text-cosmic-dark/70 mb-6">
              Наша космическая служба поддержки готова помочь вам 24/7
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex items-center justify-center text-cosmic-purple">
                <Icon name="Mail" size={20} className="mr-2" />
                support@digitalspace.ru
              </div>
              <div className="flex items-center justify-center text-cosmic-purple">
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Онлайн чат
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FAQ;
