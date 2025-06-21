import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Главная" },
    { path: "/subscriptions", label: "Подписки" },
    { path: "/profile", label: "Профиль" },
    { path: "/faq", label: "FAQ" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Логотип */}
          <Link to="/" className="flex items-center space-x-2 animate-float">
            <div className="w-8 h-8 bg-cosmic-purple rounded-full animate-pulse-glow flex items-center justify-center">
              <Icon name="Zap" size={16} className="text-white" />
            </div>
            <span className="text-xl font-semibold text-cosmic-dark">
              DigitalSpace
            </span>
          </Link>

          {/* Десктопная навигация */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative transition-all duration-300 ${
                  isActive(item.path)
                    ? "text-cosmic-purple font-medium"
                    : "text-cosmic-dark hover:text-cosmic-purple"
                }`}
              >
                {item.label}
                {isActive(item.path) && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-cosmic-purple rounded-full animate-slide-up" />
                )}
              </Link>
            ))}
          </nav>

          {/* Кнопки действий */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="ghost"
              className="text-cosmic-dark hover:text-cosmic-purple"
            >
              Войти
            </Button>
            <Button className="bg-cosmic-purple hover:bg-cosmic-purple/90 text-white px-6 animate-pulse-glow">
              Начать
            </Button>
          </div>

          {/* Мобильное меню */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Icon
              name={isMenuOpen ? "X" : "Menu"}
              size={24}
              className="text-cosmic-dark"
            />
          </button>
        </div>

        {/* Мобильная навигация */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-cosmic-light animate-slide-up">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-center py-2 transition-colors ${
                    isActive(item.path)
                      ? "text-cosmic-purple font-medium"
                      : "text-cosmic-dark hover:text-cosmic-purple"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="ghost" className="text-cosmic-dark">
                  Войти
                </Button>
                <Button className="bg-cosmic-purple hover:bg-cosmic-purple/90 text-white">
                  Начать
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
