import Header from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Subscriptions = () => {
  const plans = [
    {
      name: "Космический старт",
      price: "990₽",
      period: "месяц",
      features: ["5 премиум сервисов", "24/7 поддержка", "Базовая аналитика"],
      popular: false,
    },
    {
      name: "Лунная орбита",
      price: "1990₽",
      period: "месяц",
      features: [
        "20 премиум сервисов",
        "Приоритетная поддержка",
        "Расширенная аналитика",
        "API доступ",
      ],
      popular: true,
    },
    {
      name: "Межгалактический",
      price: "3990₽",
      period: "месяц",
      features: [
        "Безлимитные сервисы",
        "Персональный менеджер",
        "Полная аналитика",
        "Белая маркировка",
      ],
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h1 className="text-5xl md:text-6xl font-bold text-cosmic-dark mb-6">
              Выберите свою
              <br />
              <span className="bg-gradient-to-r from-cosmic-purple to-cosmic-light bg-clip-text text-transparent">
                космическую подписку
              </span>
            </h1>
            <p className="text-xl text-cosmic-dark/70 max-w-2xl mx-auto">
              Каждый план открывает новые горизонты возможностей
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={plan.name}
                className={`glass-effect rounded-3xl p-8 relative hover:scale-105 transition-all duration-300 animate-slide-up ${
                  plan.popular
                    ? "ring-2 ring-cosmic-purple animate-pulse-glow"
                    : ""
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-cosmic-purple text-white px-4 py-2 rounded-full text-sm font-medium">
                      Популярный выбор
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-semibold text-cosmic-dark mb-4">
                    {plan.name}
                  </h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-cosmic-purple">
                      {plan.price}
                    </span>
                    <span className="text-cosmic-dark/70">/{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center text-cosmic-dark/80"
                    >
                      <Icon
                        name="Check"
                        size={16}
                        className="text-cosmic-purple mr-3 flex-shrink-0"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full py-3 ${
                    plan.popular
                      ? "bg-cosmic-purple hover:bg-cosmic-purple/90 text-white animate-pulse-glow"
                      : "bg-transparent border border-cosmic-purple text-cosmic-purple hover:bg-cosmic-purple hover:text-white"
                  }`}
                >
                  Выбрать план
                </Button>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Subscriptions;
