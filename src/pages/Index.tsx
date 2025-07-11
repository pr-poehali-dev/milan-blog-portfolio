import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useState, useEffect } from "react";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    setIsVisible(true);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 },
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-gray-900">Милан Власов</div>
            <div className="hidden md:flex items-center space-x-6">
              <button
                onClick={() => scrollToSection("about")}
                className={`text-gray-600 hover:text-blue-600 transition-colors ${activeSection === "about" ? "text-blue-600 font-semibold" : ""}`}
              >
                О блогере
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className={`text-gray-600 hover:text-blue-600 transition-colors ${activeSection === "projects" ? "text-blue-600 font-semibold" : ""}`}
              >
                Проекты
              </button>
              <button
                onClick={() => scrollToSection("collaboration")}
                className={`text-gray-600 hover:text-blue-600 transition-colors ${activeSection === "collaboration" ? "text-blue-600 font-semibold" : ""}`}
              >
                Сотрудничество
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className={`text-gray-600 hover:text-blue-600 transition-colors ${activeSection === "contact" ? "text-blue-600 font-semibold" : ""}`}
              >
                Связь
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div
              className={`space-y-8 transition-all duration-1000 ${isVisible ? "animate-fade-in" : "opacity-0"}`}
            >
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                  Привет, я <span className="text-blue-600">Милан</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Блогер, контент-мейкер и digital-энтузиаст. Создаю контент,
                  который вдохновляет и мотивирует тысячи людей каждый день.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Badge variant="secondary" className="px-4 py-2 text-sm">
                  <Icon name="Video" size={16} className="mr-2" />
                  Видео-контент
                </Badge>
                <Badge variant="secondary" className="px-4 py-2 text-sm">
                  <Icon name="Camera" size={16} className="mr-2" />
                  Фотография
                </Badge>
                <Badge variant="secondary" className="px-4 py-2 text-sm">
                  <Icon name="Mic" size={16} className="mr-2" />
                  Подкасты
                </Badge>
              </div>
              <div className="flex gap-4">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 hover:scale-105"
                  onClick={() => scrollToSection("projects")}
                >
                  <Icon name="Play" size={20} className="mr-2" />
                  Посмотреть работы
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="transition-all duration-300 hover:scale-105"
                  onClick={() => scrollToSection("contact")}
                >
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  Связаться
                </Button>
              </div>
            </div>
            <div
              className={`relative transition-all duration-1000 delay-300 ${isVisible ? "animate-scale-in" : "opacity-0"}`}
            >
              <div className="relative z-10 group">
                <img
                  src="/img/4fa0831c-3a4c-46a7-8e64-107740d0f9cb.jpg"
                  alt="Милан Власов"
                  className="rounded-2xl shadow-2xl w-full max-w-md mx-auto transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-3xl opacity-20 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">О блогере</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Рассказываю истории, которые меняют мир вокруг нас
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group animate-slide-up">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110">
                  <Icon name="Users" size={32} className="text-blue-600" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  500K+
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Подписчиков в социальных сетях</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group animate-slide-up delay-100">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110">
                  <Icon name="Heart" size={32} className="text-purple-600" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  2M+
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Лайков и реакций</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group animate-slide-up delay-200">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110">
                  <Icon name="Trophy" size={32} className="text-green-600" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  50+
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Успешных проектов</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Проекты</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Избранные работы, которые делают мир лучше
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group animate-fade-in">
              <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center transition-all duration-300 group-hover:scale-105">
                <Icon
                  name="Youtube"
                  size={48}
                  className="text-white transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  Видео-блог "Жизнь в тренде"
                </h3>
                <p className="text-gray-600 mb-4">
                  Еженедельный влог о современных трендах и lifestyle
                </p>
                <div className="flex items-center justify-between">
                  <Badge
                    variant="outline"
                    className="group-hover:bg-blue-100 transition-colors"
                  >
                    Видео
                  </Badge>
                  <Icon
                    name="ExternalLink"
                    size={16}
                    className="text-gray-400 group-hover:text-blue-600 transition-colors"
                  />
                </div>
              </CardContent>
            </Card>
            <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group animate-fade-in delay-100">
              <div className="h-48 bg-gradient-to-br from-green-500 to-blue-600 flex items-center justify-center transition-all duration-300 group-hover:scale-105">
                <Icon
                  name="Instagram"
                  size={48}
                  className="text-white transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                  Instagram Stories
                </h3>
                <p className="text-gray-600 mb-4">
                  Ежедневные истории о путешествиях и открытиях
                </p>
                <div className="flex items-center justify-between">
                  <Badge
                    variant="outline"
                    className="group-hover:bg-green-100 transition-colors"
                  >
                    Фото
                  </Badge>
                  <Icon
                    name="ExternalLink"
                    size={16}
                    className="text-gray-400 group-hover:text-green-600 transition-colors"
                  />
                </div>
              </CardContent>
            </Card>
            <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group animate-fade-in delay-200">
              <div className="h-48 bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center transition-all duration-300 group-hover:scale-105">
                <Icon
                  name="Podcast"
                  size={48}
                  className="text-white transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                  Подкаст "Открытый разговор"
                </h3>
                <p className="text-gray-600 mb-4">
                  Глубокие беседы с интересными людьми
                </p>
                <div className="flex items-center justify-between">
                  <Badge
                    variant="outline"
                    className="group-hover:bg-purple-100 transition-colors"
                  >
                    Аудио
                  </Badge>
                  <Icon
                    name="ExternalLink"
                    size={16}
                    className="text-gray-400 group-hover:text-purple-600 transition-colors"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Collaboration Section */}
      <section id="collaboration" className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Сотрудничество
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Работаю с ведущими брендами и создаю вдохновляющий контент
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">
                  Что я предлагаю
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Icon name="Check" size={20} className="text-green-600" />
                    <span className="text-gray-700">
                      Создание уникального контента
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Check" size={20} className="text-green-600" />
                    <span className="text-gray-700">
                      Продвижение продуктов и услуг
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Check" size={20} className="text-green-600" />
                    <span className="text-gray-700">
                      Консультации по digital-маркетингу
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Check" size={20} className="text-green-600" />
                    <span className="text-gray-700">
                      Участие в мероприятиях
                    </span>
                  </div>
                </div>
              </div>
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 hover:scale-105"
                onClick={() => scrollToSection("contact")}
              >
                <Icon name="Handshake" size={20} className="mr-2" />
                Начать сотрудничество
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-100 rounded-lg p-6 text-center hover:bg-gray-200 transition-all duration-300 hover:scale-105 group">
                <Icon
                  name="Target"
                  size={32}
                  className="text-blue-600 mx-auto mb-2 group-hover:scale-110 transition-transform"
                />
                <h4 className="font-bold text-gray-900 mb-1">Охват</h4>
                <p className="text-sm text-gray-600">До 1M просмотров</p>
              </div>
              <div className="bg-gray-100 rounded-lg p-6 text-center hover:bg-gray-200 transition-all duration-300 hover:scale-105 group">
                <Icon
                  name="Zap"
                  size={32}
                  className="text-purple-600 mx-auto mb-2 group-hover:scale-110 transition-transform"
                />
                <h4 className="font-bold text-gray-900 mb-1">Вовлечение</h4>
                <p className="text-sm text-gray-600">15%+ engagement</p>
              </div>
              <div className="bg-gray-100 rounded-lg p-6 text-center hover:bg-gray-200 transition-all duration-300 hover:scale-105 group">
                <Icon
                  name="Clock"
                  size={32}
                  className="text-green-600 mx-auto mb-2 group-hover:scale-110 transition-transform"
                />
                <h4 className="font-bold text-gray-900 mb-1">Скорость</h4>
                <p className="text-sm text-gray-600">24-48 часов</p>
              </div>
              <div className="bg-gray-100 rounded-lg p-6 text-center hover:bg-gray-200 transition-all duration-300 hover:scale-105 group">
                <Icon
                  name="Award"
                  size={32}
                  className="text-orange-600 mx-auto mb-2 group-hover:scale-110 transition-transform"
                />
                <h4 className="font-bold text-gray-900 mb-1">Качество</h4>
                <p className="text-sm text-gray-600">Премиум контент</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gray-900 text-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Связь</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Готов к новым проектам и интересным предложениям
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Контактная информация</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Icon name="Mail" size={20} className="text-blue-400" />
                    <span>milan.vlasov@example.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Phone" size={20} className="text-blue-400" />
                    <span>+7 (999) 123-45-67</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="MapPin" size={20} className="text-blue-400" />
                    <span>Москва, Россия</span>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Социальные сети</h3>
                <div className="flex space-x-4">
                  <Button
                    variant="outline"
                    size="icon"
                    className="border-gray-700 hover:bg-gray-800 transition-all duration-300 hover:scale-110"
                  >
                    <Icon name="Instagram" size={20} />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="border-gray-700 hover:bg-gray-800 transition-all duration-300 hover:scale-110"
                  >
                    <Icon name="Youtube" size={20} />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="border-gray-700 hover:bg-gray-800 transition-all duration-300 hover:scale-110"
                  >
                    <Icon name="Twitter" size={20} />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="border-gray-700 hover:bg-gray-800 transition-all duration-300 hover:scale-110"
                  >
                    <Icon name="Linkedin" size={20} />
                  </Button>
                </div>
              </div>
            </div>
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Написать сообщение</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">
                    Имя
                  </label>
                  <input
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    placeholder="Ваше имя"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">
                    Email
                  </label>
                  <input
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    placeholder="your@email.com"
                    type="email"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">
                    Сообщение
                  </label>
                  <textarea
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 h-32 resize-none transition-all"
                    placeholder="Расскажите о своем проекте..."
                  ></textarea>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 transition-all duration-300 hover:scale-105">
                  <Icon name="Send" size={16} className="mr-2" />
                  Отправить сообщение
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-black text-white">
        <div className="container mx-auto">
          <div className="flex items-center justify-center space-x-2">
            <span className="text-gray-400">
              © 2024 Милан Власов. Все права защищены.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
