import Header from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Profile = () => {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 animate-slide-up">
            <h1 className="text-4xl md:text-5xl font-bold text-cosmic-dark mb-4">
              Космический профиль
            </h1>
            <p className="text-xl text-cosmic-dark/70">
              Управляйте своим цифровым пространством
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Профиль пользователя */}
            <div className="lg:col-span-1">
              <div className="glass-effect rounded-3xl p-8 text-center animate-slide-up">
                <div className="w-24 h-24 bg-cosmic-purple rounded-full mx-auto mb-4 flex items-center justify-center animate-pulse-glow">
                  <Icon name="User" size={32} className="text-white" />
                </div>
                <h2 className="text-2xl font-semibold text-cosmic-dark mb-2">
                  Космонавт #001
                </h2>
                <p className="text-cosmic-dark/70 mb-6">
                  Исследователь цифровых галактик
                </p>
                <Button className="w-full bg-cosmic-purple hover:bg-cosmic-purple/90 text-white">
                  Редактировать профиль
                </Button>
              </div>
            </div>

            {/* Информация и настройки */}
            <div className="lg:col-span-2 space-y-8">
              {/* Активные подписки */}
              <div
                className="glass-effect rounded-3xl p-8 animate-slide-up"
                style={{ animationDelay: "0.2s" }}
              >
                <h3 className="text-xl font-semibold text-cosmic-dark mb-6 flex items-center">
                  <Icon
                    name="Zap"
                    size={20}
                    className="text-cosmic-purple mr-2"
                  />
                  Активные подписки
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-cosmic-muted rounded-xl">
                    <div>
                      <div className="font-medium text-cosmic-dark">
                        Лунная орбита
                      </div>
                      <div className="text-sm text-cosmic-dark/70">
                        Действует до 15.07.2024
                      </div>
                    </div>
                    <div className="text-cosmic-purple font-semibold">
                      1990₽/мес
                    </div>
                  </div>
                </div>
              </div>

              {/* Статистика */}
              <div
                className="glass-effect rounded-3xl p-8 animate-slide-up"
                style={{ animationDelay: "0.4s" }}
              >
                <h3 className="text-xl font-semibold text-cosmic-dark mb-6 flex items-center">
                  <Icon
                    name="BarChart3"
                    size={20}
                    className="text-cosmic-purple mr-2"
                  />
                  Статистика использования
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-cosmic-muted rounded-xl">
                    <div className="text-2xl font-bold text-cosmic-purple">
                      156
                    </div>
                    <div className="text-sm text-cosmic-dark/70">
                      Часов в этом месяце
                    </div>
                  </div>
                  <div className="text-center p-4 bg-cosmic-muted rounded-xl">
                    <div className="text-2xl font-bold text-cosmic-purple">
                      12
                    </div>
                    <div className="text-sm text-cosmic-dark/70">
                      Активных сервисов
                    </div>
                  </div>
                </div>
              </div>

              {/* Настройки */}
              <div
                className="glass-effect rounded-3xl p-8 animate-slide-up"
                style={{ animationDelay: "0.6s" }}
              >
                <h3 className="text-xl font-semibold text-cosmic-dark mb-6 flex items-center">
                  <Icon
                    name="Settings"
                    size={20}
                    className="text-cosmic-purple mr-2"
                  />
                  Настройки
                </h3>
                <div className="space-y-4">
                  <Button variant="outline" className="w-full justify-start">
                    <Icon name="Bell" size={16} className="mr-2" />
                    Уведомления
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Icon name="CreditCard" size={16} className="mr-2" />
                    Способы оплаты
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Icon name="Shield" size={16} className="mr-2" />
                    Безопасность
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
