import Header from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Payment = () => {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12 animate-slide-up">
            <h1 className="text-4xl md:text-5xl font-bold text-cosmic-dark mb-4">
              Космический платёж
            </h1>
            <p className="text-xl text-cosmic-dark/70">
              Безопасная оплата межгалактических подписок
            </p>
          </div>

          <div className="glass-effect rounded-3xl p-8 animate-slide-up">
            {/* Выбранный план */}
            <div className="mb-8 p-6 bg-cosmic-muted rounded-2xl">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-cosmic-dark">
                  Лунная орбита
                </h3>
                <div className="text-2xl font-bold text-cosmic-purple">
                  1990₽
                </div>
              </div>
              <div className="text-cosmic-dark/70">
                20 премиум сервисов • Приоритетная поддержка • Расширенная
                аналитика
              </div>
            </div>

            {/* Способы оплаты */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-cosmic-dark mb-4">
                Выберите способ оплаты
              </h3>
              <div className="space-y-3">
                <label className="flex items-center p-4 border border-cosmic-light rounded-xl cursor-pointer hover:bg-cosmic-muted transition-colors">
                  <input
                    type="radio"
                    name="payment"
                    className="mr-3"
                    defaultChecked
                  />
                  <Icon
                    name="CreditCard"
                    size={20}
                    className="text-cosmic-purple mr-3"
                  />
                  <span className="text-cosmic-dark">Банковская карта</span>
                </label>
                <label className="flex items-center p-4 border border-cosmic-light rounded-xl cursor-pointer hover:bg-cosmic-muted transition-colors">
                  <input type="radio" name="payment" className="mr-3" />
                  <Icon
                    name="Smartphone"
                    size={20}
                    className="text-cosmic-purple mr-3"
                  />
                  <span className="text-cosmic-dark">
                    СБП (Быстрые платежи)
                  </span>
                </label>
                <label className="flex items-center p-4 border border-cosmic-light rounded-xl cursor-pointer hover:bg-cosmic-muted transition-colors">
                  <input type="radio" name="payment" className="mr-3" />
                  <Icon
                    name="Wallet"
                    size={20}
                    className="text-cosmic-purple mr-3"
                  />
                  <span className="text-cosmic-dark">Электронный кошелёк</span>
                </label>
              </div>
            </div>

            {/* Детали оплаты */}
            <div className="mb-8 p-6 bg-cosmic-muted rounded-2xl">
              <div className="flex justify-between items-center mb-2">
                <span className="text-cosmic-dark/70">Подписка на месяц</span>
                <span className="text-cosmic-dark">1990₽</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-cosmic-dark/70">
                  Скидка новому пользователю
                </span>
                <span className="text-green-600">-199₽</span>
              </div>
              <hr className="my-4 border-cosmic-light" />
              <div className="flex justify-between items-center text-lg font-semibold">
                <span className="text-cosmic-dark">К оплате</span>
                <span className="text-cosmic-purple">1791₽</span>
              </div>
            </div>

            {/* Кнопка оплаты */}
            <Button className="w-full py-4 text-lg bg-cosmic-purple hover:bg-cosmic-purple/90 text-white animate-pulse-glow">
              <Icon name="Rocket" size={20} className="mr-2" />
              Запустить подписку
            </Button>

            {/* Гарантии */}
            <div className="mt-6 text-center">
              <div className="flex items-center justify-center text-sm text-cosmic-dark/70">
                <Icon
                  name="Shield"
                  size={16}
                  className="text-cosmic-purple mr-2"
                />
                Защищённый платёж • Возврат в течение 14 дней
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Payment;
