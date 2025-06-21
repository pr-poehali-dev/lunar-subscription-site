import Icon from "@/components/ui/icon";

const Features = () => {
  const features = [
    {
      icon: "Shield",
      title: "Безопасность",
      description:
        "Космический уровень защиты ваших данных с шифрованием нового поколения",
    },
    {
      icon: "Zap",
      title: "Скорость",
      description: "Мгновенный доступ к сервисам со скоростью света",
    },
    {
      icon: "Heart",
      title: "Простота",
      description: "Интуитивный интерфейс, который понравится каждому",
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-cosmic-dark mb-6">
            Почему выбирают нас?
          </h2>
          <p className="text-xl text-cosmic-dark/70 max-w-2xl mx-auto">
            Три космических принципа, которые делают нас лучшими в галактике
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="glass-effect rounded-3xl p-8 text-center hover:scale-105 transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="w-16 h-16 bg-cosmic-purple/20 rounded-full flex items-center justify-center mx-auto mb-6 animate-float">
                <Icon
                  name={feature.icon as any}
                  size={32}
                  className="text-cosmic-purple"
                />
              </div>
              <h3 className="text-2xl font-semibold text-cosmic-dark mb-4">
                {feature.title}
              </h3>
              <p className="text-cosmic-dark/70 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
