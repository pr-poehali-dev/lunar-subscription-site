import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const PricingSection = () => {
  const plans = [
    {
      name: "Базовый",
      price: "490₽",
      period: "месяц",
      description: "Идеально для личного использования",
      features: [
        "3 премиум сервиса",
        "Базовая поддержка",
        "Стандартное качество",
        "Доступ с 1 устройства",
      ],
      popular: false,
      gradient: "from-purple-100 to-white",
      buttonStyle:
        "border-cosmic-purple text-cosmic-purple hover:bg-cosmic-purple hover:text-white",
    },
    {
      name: "Премиум",
      price: "1290₽",
      period: "месяц",
      description: "Лучший выбор для активных пользователей",
      features: [
        "15 премиум сервисов",
        "Приоритетная поддержка",
        "HD качество",
        "Доступ с 3 устройств",
        "Эксклюзивный контент",
      ],
      popular: true,
      gradient: "from-purple-200 to-purple-50",
      buttonStyle:
        "bg-cosmic-purple hover:bg-cosmic-purple/90 text-white animate-pulse-glow",
    },
    {
      name: "Бизнес",
      price: "2990₽",
      period: "месяц",
      description: "Для команд и компаний",
      features: [
        "Безлимитные сервисы",
        "Персональный менеджер",
        "4K качество",
        "Доступ с 10 устройств",
        "Аналитика и отчёты",
        "API интеграция",
      ],
      popular: false,
      gradient: "from-purple-300 to-purple-100",
      buttonStyle:
        "border-cosmic-purple text-cosmic-purple hover:bg-cosmic-purple hover:text-white",
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-cosmic-dark mb-6">
            Выберите свой
            <br />
            <span className="bg-gradient-to-r from-cosmic-purple to-cosmic-light bg-clip-text text-transparent">
              космический план
            </span>
          </h2>
          <p className="text-xl text-cosmic-dark/70 max-w-2xl mx-auto">
            Каждая подписка открывает новые возможности в цифровой вселенной
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative rounded-3xl p-8 hover:scale-105 transition-all duration-300 animate-slide-up ${
                plan.popular
                  ? "ring-2 ring-cosmic-purple shadow-2xl animate-pulse-glow scale-105"
                  : "shadow-lg hover:shadow-xl"
              }`}
              style={{
                background: `linear-gradient(135deg, ${plan.gradient})`,
                animationDelay: `${index * 0.2}s`,
              }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-cosmic-purple to-purple-600 text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg">
                    <Icon name="Crown" size={16} className="inline mr-1" />
                    Популярный
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <div
                  className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                    plan.popular
                      ? "bg-cosmic-purple animate-pulse-glow"
                      : "bg-cosmic-purple/20"
                  }`}
                >
                  <Icon
                    name={plan.popular ? "Zap" : "Circle"}
                    size={24}
                    className={
                      plan.popular ? "text-white" : "text-cosmic-purple"
                    }
                  />
                </div>

                <h3 className="text-2xl font-bold text-cosmic-dark mb-2">
                  {plan.name}
                </h3>
                <p className="text-cosmic-dark/70 text-sm mb-4">
                  {plan.description}
                </p>

                <div className="mb-6">
                  <span className="text-4xl font-bold text-cosmic-purple">
                    {plan.price}
                  </span>
                  <span className="text-cosmic-dark/70 text-lg">
                    /{plan.period}
                  </span>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div
                    key={feature}
                    className="flex items-start text-cosmic-dark/80"
                  >
                    <Icon
                      name="Check"
                      size={16}
                      className="text-cosmic-purple mr-3 flex-shrink-0 mt-0.5"
                    />
                    <span className="text-sm leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>

              <Link to="/payment" className="block">
                <Button
                  className={`w-full py-3 text-base font-medium ${plan.buttonStyle}`}
                >
                  {plan.popular ? (
                    <>
                      <Icon name="Rocket" size={16} className="mr-2" />
                      Начать сейчас
                    </>
                  ) : (
                    "Выбрать план"
                  )}
                </Button>
              </Link>
            </div>
          ))}
        </div>

        <div
          className="text-center mt-12 animate-slide-up"
          style={{ animationDelay: "0.8s" }}
        >
          <p className="text-cosmic-dark/70 mb-4">
            Не уверены какой план выбрать?
          </p>
          <Link to="/subscriptions">
            <Button
              variant="outline"
              className="border-cosmic-purple text-cosmic-purple hover:bg-cosmic-purple hover:text-white"
            >
              Сравнить все планы
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
