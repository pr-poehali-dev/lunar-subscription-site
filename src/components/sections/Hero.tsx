import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto text-center">
        {/* Космический заголовок */}
        <div className="animate-slide-up">
          <h1 className="text-5xl md:text-7xl font-bold text-cosmic-dark mb-6 leading-tight">
            Цифровые подписки
            <br />
            <span className="bg-gradient-to-r from-cosmic-purple to-cosmic-light bg-clip-text text-transparent animate-pulse-glow">
              нового поколения
            </span>
          </h1>
        </div>

        {/* Описание */}
        <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
          <p className="text-xl md:text-2xl text-cosmic-dark/70 mb-12 max-w-3xl mx-auto leading-relaxed">
            Откройте мир безграничных возможностей с нашими премиальными
            подписками. Космические технологии для земных задач.
          </p>
        </div>

        {/* Кнопки действий */}
        <div
          className="animate-slide-up flex flex-col sm:flex-row gap-4 justify-center mb-16"
          style={{ animationDelay: "0.4s" }}
        >
          <Button
            size="lg"
            className="bg-cosmic-purple hover:bg-cosmic-purple/90 text-white px-8 py-4 text-lg animate-pulse-glow"
          >
            <Icon name="Rocket" size={20} className="mr-2" />
            Исследовать подписки
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-cosmic-purple text-cosmic-purple hover:bg-cosmic-purple hover:text-white px-8 py-4 text-lg"
          >
            <Icon name="Play" size={20} className="mr-2" />
            Смотреть демо
          </Button>
        </div>

        {/* Космические элементы */}
        <div className="relative">
          <div className="animate-float">
            <div className="w-32 h-32 mx-auto mb-8 relative">
              <div className="absolute inset-0 bg-cosmic-purple/20 rounded-full animate-pulse-glow"></div>
              <div
                className="absolute inset-4 bg-cosmic-purple/40 rounded-full animate-pulse-glow"
                style={{ animationDelay: "0.5s" }}
              ></div>
              <div
                className="absolute inset-8 bg-cosmic-purple rounded-full animate-pulse-glow flex items-center justify-center"
                style={{ animationDelay: "1s" }}
              >
                <Icon name="Sparkles" size={32} className="text-white" />
              </div>
            </div>
          </div>

          {/* Статистика */}
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto animate-slide-up"
            style={{ animationDelay: "0.6s" }}
          >
            <div className="glass-effect rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
              <div className="text-3xl font-bold text-cosmic-purple mb-2">
                1000+
              </div>
              <div className="text-cosmic-dark/70">Активных пользователей</div>
            </div>
            <div className="glass-effect rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
              <div className="text-3xl font-bold text-cosmic-purple mb-2">
                50+
              </div>
              <div className="text-cosmic-dark/70">Премиум сервисов</div>
            </div>
            <div className="glass-effect rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
              <div className="text-3xl font-bold text-cosmic-purple mb-2">
                99.9%
              </div>
              <div className="text-cosmic-dark/70">Время работы</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
