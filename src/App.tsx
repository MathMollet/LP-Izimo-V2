import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Building2, Shield, Clock, Wallet, CheckCircle2, ArrowRight, CreditCard, Train, ParkingMeter as Parking, Coffee, Timer, TrendingUp, Database, Calculator, Settings, PenTool as Tool, ChevronLeft, ChevronRight, FileText, Users, Home, AlertTriangle, ClipboardCheck, Smartphone, Building, UserCheck, Mail, FileSignature, Camera, History, Target, Users2, Moon, Sun } from 'lucide-react';

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPriceIndex, setCurrentPriceIndex] = useState(0);
  const [currentFeatureSet, setCurrentFeatureSet] = useState(0);
  const [currentBenefitIndex, setCurrentBenefitIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const pauseTimeout = useRef(null);

  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = useCallback(() => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    }
  }, [isDarkMode]);

  const priceComparisons = [
    {
      icon: CreditCard,
      text: "Une pinte de bière"
    },
    {
      icon: Train,
      text: "Quatre tickets de métro"
    },
    {
      icon: Parking,
      text: "3 heures de stationnement à Paris"
    },
    {
      icon: Coffee,
      text: "Un café gourmand"
    }
  ];

  const securityFeatures = [
    {
      title: "Impayés de loyers ?",
      description: "Nous avons des solutions.",
      icon: Wallet
    },
    {
      title: "Locataire négligent ou nuisances ?",
      description: "Restez serein et faites nous confiance.",
      icon: Shield
    },
    {
      title: "Dépannage en urgence ?",
      description: "Nous avons ce qu'il vous faut.",
      icon: Clock
    },
    {
      title: "Assurance bailleur ?",
      description: "Tout est couvert.",
      icon: CheckCircle2
    }
  ];

  const benefits = [
    {
      title: "Gagnez du temps pour ce qui compte vraiment",
      description: "Réduisez jusqu'à 90 % votre temps de gestion, selon les options sélectionnées, et concentrez-vous sur vos activités préférées.",
      icon: Timer
    },
    {
      title: "Maximisez vos revenus locatifs",
      description: "Augmentez vos mises en location, réduisez la vacance locative, économisez les frais d'agence et suivez vos revenus en temps réel grâce à nos outils d'optimisation performants.",
      icon: TrendingUp
    },
    {
      title: "Centralisez et sécurisez vos données",
      description: "Ne perdez plus de temps à chercher vos documents éparpillés ! Toutes vos données sont stockées en toute sécurité et dans le respect des normes RGPD.",
      icon: Database
    },
    {
      title: "Fini le casse-tête de la comptabilité",
      description: "Profitez d'une synchronisation bancaire intelligente avec identification automatique de vos flux financiers et un suivi comptable en temps réel.",
      icon: Calculator
    },
    {
      title: "Gardez le contrôle tout en automatisant",
      description: "Notre plateforme intuitive vous offre un contrôle total sur votre patrimoine tout en automatisant les tâches les plus chronophages.",
      icon: Settings
    },
    {
      title: "Anticipez les imprévus locatifs",
      description: "Izimo va au-delà de la gestion administrative : en cas de pannes, de fuites ou d'autres urgences, nous vous accompagnons avec des solutions fiables et 100 % remboursées.",
      icon: Tool
    }
  ];

  const features = [
    {
      icon: ClipboardCheck,
      title: "Gestion administrative simplifiée",
      description: "Créez en un clic vos baux, quittances, avis d'échéance ou de relance, et gagnez un temps précieux."
    },
    {
      icon: Smartphone,
      title: "Izimo, votre fidèle compagnon",
      description: "Accédez à Izimo sur ordinateur ou smartphone, et recevez des notifications en temps réel pour suivre votre patrimoine où que vous soyez."
    },
    {
      icon: Building,
      title: "Pilotage de vos biens",
      description: "Gérez facilement vos propriétés : suivez loyers et charges en temps réel depuis une interface intuitive."
    },
    {
      icon: UserCheck,
      title: "Gestion des candidatures locatives",
      description: "Dites adieu aux faux dossiers grâce à une validation automatisée par l'État. Configurez vos propres filtres pour ne recevoir que des candidatures complètes et conformes à vos critères."
    },
    {
      icon: Users,
      title: "Suivi des locataires",
      description: "Gardez le contrôle sur vos relations locatives grâce à des outils de gestion efficaces et organisés."
    },
    {
      icon: Mail,
      title: "Messagerie intégrée",
      description: "Communiquez directement avec vos locataires depuis notre plateforme, sans passer par des canaux externes."
    },
    {
      icon: FileText,
      title: "Gestion des documents",
      description: "Centralisez, stockez et gérez tous vos documents en toute sécurité, en conformité avec les normes RGPD."
    },
    {
      icon: AlertTriangle,
      title: "Gestion des incidents simplifiée",
      description: "Traitez les demandes d'interventions et gérez les réparations en quelques clics, sans tracas."
    },
    {
      icon: FileSignature,
      title: "Signature électronique",
      description: "Fini les impressions, scans et envois interminables ! Signez vos contrats directement en ligne et économisez du temps."
    },
    {
      icon: Camera,
      title: "États des lieux numériques assistés par IA",
      description: "Révolutionnez vos états des lieux avec notre application : réalisez-les jusqu'à 4 fois plus vite grâce à l'intelligence artificielle."
    }
  ];

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentBenefitIndex((prevIndex) =>
          prevIndex === benefits.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [isPaused, benefits.length]);

  const handleNavigation = (direction) => {
    setIsPaused(true);
    
    if (pauseTimeout.current) {
      clearTimeout(pauseTimeout.current);
    }

    setCurrentBenefitIndex((prevIndex) => {
      if (direction === 'prev') {
        return prevIndex === 0 ? benefits.length - 1 : prevIndex - 1;
      } else {
        return prevIndex === benefits.length - 1 ? 0 : prevIndex + 1;
      }
    });

    pauseTimeout.current = setTimeout(() => {
      setIsPaused(false);
    }, 5000);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPriceIndex((prevIndex) => 
        prevIndex === priceComparisons.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleFeatureNavigation = (direction) => {
    if (direction === 'prev') {
      setCurrentFeatureSet(prev => prev === 0 ? Math.ceil(features.length / 6) - 1 : prev - 1);
    } else {
      setCurrentFeatureSet(prev => prev === Math.ceil(features.length / 6) - 1 ? 0 : prev + 1);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 dark:text-white transition-colors duration-200">
      {/* Navigation */}
      <nav className="fixed w-full bg-white dark:bg-gray-900 shadow-sm z-50 transition-colors duration-200">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Building2 className="w-8 h-8 text-[#6366F1]" />
              <span className="text-xl dark:text-white"><span className="font-bold">IZIMO</span><span className="font-normal">, l'immobilier simplifié</span></span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => setActiveTab('home')}
                className={`${activeTab === 'home' ? 'text-[#6366F1]' : 'text-gray-600 dark:text-gray-300'} hover:text-[#6366F1]`}
              >
                Accueil
              </button>
              <button 
                onClick={() => setActiveTab('beta')}
                className={`${activeTab === 'beta' ? 'text-[#6366F1]' : 'text-gray-600 dark:text-gray-300'} hover:text-[#6366F1]`}
              >
                Version Bêta
              </button>
              <button 
                onClick={() => setActiveTab('faq')}
                className={`${activeTab === 'faq' ? 'text-[#6366F1]' : 'text-gray-600 dark:text-gray-300'} hover:text-[#6366F1]`}
              >
                FAQ
              </button>
              <button 
                onClick={() => setActiveTab('contact')}
                className={`${activeTab === 'contact' ? 'text-[#6366F1]' : 'text-gray-600 dark:text-gray-300'} hover:text-[#6366F1]`}
              >
                Nous contacter
              </button>
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? (
                  <Sun className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                ) : (
                  <Moon className="w-5 h-5 text-gray-600" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-16">
        {activeTab === 'home' && (
          <>
            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-br from-[#F5F3FF] to-white dark:from-gray-800 dark:to-gray-900">
              <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                  <div className="text-[#6366F1] text-2xl font-bold mb-4">IZIMO</div>
                  <div className="space-y-2 mb-6">
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black dark:text-white">
                      Gérez vos biens en toute simplicité,
                    </h1>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#6366F1]">
                      déléguez sans perdre le contrôle
                    </h1>
                  </div>
                  <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
                    Que vous aimiez tout gérer vous-même ou préfériez déléguer un maximum, Izimo s'adapte à vos besoins grâce à la flexibilité d'un service à la carte.
                  </p>
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                    Outil tout-en-un, Izimo vous offre tous les outils pour une gestion simple, rapide et efficace. Idéal pour les gestions à distance, notre plateforme vous permet de déléguer ce que vous souhaitez tout en maîtrisant vos coûts et en évitant les frais d'agences traditionnels.
                  </p>
                  <button 
                    onClick={() => setActiveTab('beta')}
                    className="bg-[#6366F1] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#4F46E5] transition-colors flex items-center justify-center mx-auto space-x-2"
                  >
                    <span>Essayez Gratuitement</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </section>

            {/* Security Section */}
            <section className="py-20 bg-white dark:bg-gray-900">
              <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                  <div className="space-y-2 mb-6">
                    <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white">
                      Sécurité = Sérénité,
                    </h2>
                    <h2 className="text-4xl md:text-5xl font-bold text-[#6366F1]">
                      Gérez sereinement avec Izimo
                    </h2>
                  </div>
                  <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
                    Izimo ne se limite pas à la gestion administrative : nous vous aidons à vous protéger des imprévus et des tracas locatifs.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    {securityFeatures.map((feature, index) => (
                      <div key={index} className="p-6 text-left transition-transform hover:scale-105">
                        <div className="flex flex-col items-center text-center space-y-4">
                          <div className="bg-[#6366F1] bg-opacity-10 rounded-lg p-4">
                            <feature.icon className="w-8 h-8 text-[#6366F1]" />
                          </div>
                          <h3 className="text-xl font-semibold mb-2 dark:text-white">{feature.title}</h3>
                          <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <p className="text-lg text-gray-600 dark:text-gray-300 mt-12">
                    Avec Izimo, vous êtes préparé à toutes les situations, pour une gestion locative vraiment sans souci.
                  </p>
                </div>
              </div>
            </section>

            {/* Pricing Section */}
            <section className="py-20 bg-gradient-to-br from-[#F5F3FF] to-white dark:from-gray-800 dark:to-gray-900">
              <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                  <h2 className="text-6xl md:text-7xl font-bold text-[#6366F1] mb-12">
                    5 fois moins cher qu'en agence
                  </h2>

                  <div className="bg-white dark:bg-gray-800 border-2 border-[#6366F1] rounded-md shadow-xl p-10 mb-16 transform hover:scale-[1.02] transition-all duration-300">
                    <h3 className="text-3xl font-bold mb-6 dark:text-white">
                      Votre gestion, vos règles : ne payez que pour ce que vous utilisez
                    </h3>
                    <p className="text-xl text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                      Avec Izimo, vous choisissez ce qui vous convient : gérez vos biens à votre façon en accédant à des outils intuitifs, ou déléguez les tâches que vous préférez confier à des experts qualifiés.
                    </p>
                    <p className="text-lg text-gray-700 dark:text-gray-300">
                      Pas d'engagement inutile, pas de frais superflus : chaque service s'adapte à vos besoins et à votre budget. Vous gardez le contrôle, nous simplifions le reste.
                    </p>
                  </div>

                  <div className="bg-white dark:bg-gray-800 rounded-md shadow-lg p-8 border-2 border-[#6366F1]">
                    <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
                      Libérez votre esprit de la gestion locative, pour le prix de ce que vous dépensez sans même y penser.
                    </h3>
                    <p className="text-xl text-[#6366F1] font-semibold mb-8">
                      Izimo vous simplifie la vie pour seulement 10 € par mois, soit le prix de :
                    </p>
                    
                    <div className="relative h-32 overflow-hidden">
                      {priceComparisons.map((comparison, index) => {
                        const Icon = comparison.icon;
                        return (
                          <div
                            key={index}
                            className={`absolute w-full transform transition-all duration-500 ease-in-out flex flex-col items-center ${
                              index === currentPriceIndex
                                ? 'translate-x-0 opacity-100'
                                : index < currentPriceIndex
                                ? '-translate-x-full opacity-0'
                                : 'translate-x-full opacity-0'
                            }`}
                          >
                            <Icon className="w-16 h-16 text-[#6366F1] mb-4 dark:text-[#818CF8]" />
                            <p className="text-xl text-gray-700 dark:text-gray-300 font-medium">{comparison.text}</p>
                          </div>
                        );
                      })}
                    </div>

                    <p className="text-lg text-gray-600 dark:text-gray-300 mt-8">
                      Et tout ça, sans les frais d'agences exorbitants. Pourquoi s'en priver ?
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Benefits Section */}
            <section className="py-20 bg-white dark:bg-gray-900">
              <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                  <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 dark:text-white">
                    S'en priver, c'est se priver de :
                  </h2>

                  <div className="relative max-w-7xl mx-auto">
                    <button
                      onClick={() => handleNavigation('prev')}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors z-10"
                    >
                      <ChevronLeft className="w-6 h-6 text-gray-600" />
                    </button>

                    <div className="overflow-hidden">
                      <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{
                          transform: `translateX(calc(-${currentBenefitIndex * 33.333}% + ${window.innerWidth > 1280 ? '16.666%' : '0%'}))`,
                        }}
                      >
                        {benefits.map((benefit, index) => {
                          const Icon = benefit.icon;
                          const position = (index - currentBenefitIndex + benefits.length) % benefits.length;
                          const isCenter = position === 0;
                          const isAdjacent = position === 1 || position === benefits.length - 1;
                          
                          return (
                            <div
                              key={index}
                              className={`w-1/3 flex-shrink-0 px-4 transition-all duration-500 ${
                                isCenter ? 'opacity-100 scale-100' : 
                                isAdjacent ? 'opacity-75 scale-95' : 
                                'opacity-0 scale-90'
                              }`}
                            >
                              <div className="bg-white dark:bg-gray-800 rounded-xl p-8 h-full shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex flex-col items-center text-center space-y-4">
                                  <div className="bg-[#6366F1] bg-opacity-10 rounded-2xl p-4">
                                    <Icon className="w-8 h-8 text-[#6366F1]" />
                                  </div>
                                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{benefit.title}</h3>
                                  <p className="text-gray-500 dark:text-gray-300 text-base leading-relaxed">{benefit.description}</p>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    <button
                      onClick={() => handleNavigation('next')}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors z-10"
                    >
                      <ChevronRight className="w-6 h-6 text-gray-600" />
                    </button>

                    <div className="flex justify-center mt-8 space-x-2">
                      {benefits.map((_, index) => (
                        <button
                          key={index}
                          className={`w-2 h-2 rounded-full transition-colors ${
                            index === currentBenefitIndex ? 'bg-[#6366F1]' : 'bg-gray-300'
                          }`}
                          onClick={() => {
                            setCurrentBenefitIndex(index);
                            setIsPaused(true);
                            if (pauseTimeout.current) {
                              clearTimeout(pauseTimeout.current);
                            }
                            pauseTimeout.current = setTimeout(() => {
                              setIsPaused(false);
                            }, 5000);
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="text-center mt-16">
                    <button 
                      onClick={() => setActiveTab('beta')}
                      className="bg-[#6366F1] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#4F46E5] transition-colors flex items-center justify-center mx-auto space-x-2"
                    >
                      <span>Essayez Gratuitement</span>
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-gradient-to-br from-[#F5F3FF] to-white dark:from-gray-800 dark:to-gray-900">
              <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto text-center">
                  <span className="text-[#6366F1] text-lg font-semibold mb-4 block">Fonctionnalités</span>
                  <h2 className="text-4xl md:text-5xl font-bold mb-4 dark:text-white">
                    Tout ce dont vous avez besoin
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 text-xl mb-16 max-w-3xl mx-auto">
                    Une suite complète d'outils pour simplifier la gestion de vos biens immobiliers
                  </p>

                  <div className="relative">
                    <button
                      onClick={() => handleFeatureNavigation('prev')}
                      className="absolute -left-12 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors z-10"
                    >
                      <ChevronLeft className="w-6 h-6 text-gray-600" />
                    </button>

                    <div className="grid grid-cols-3 gap-6">
                      {features.slice(currentFeatureSet * 6, (currentFeatureSet * 6) + 6).map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                          <div key={index} className={`${index >= 3 ? 'mt-6' : ''}`}>
                            <div className="p-6 transition-transform hover:scale-105">
                              <div className="flex flex-col items-center text-center space-y-4">
                                <div className="bg-[#6366F1] bg-opacity-10 rounded-md p-4">
                                  <Icon className="w-6 h-6 text-[#6366F1]" />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{feature.title}</h3>
                                <p className="text-gray-500 dark:text-gray-300 text-sm leading-relaxed">
                                  {feature.description}
                                </p>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    <button
                      onClick={() => handleFeatureNavigation('next')}
                      className="absolute -right-12 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors z-10"
                    >
                      <ChevronRight className="w-6 h-6 text-gray-600" />
                    </button>

                    <div className="flex justify-center mt-8 space-x-2">
                      {Array.from({ length: Math.ceil(features.length / 6) }).map((_, index) => (
                        <button
                          key={index}
                          className={`w-2 h-2 rounded-full transition-colors ${
                            index === currentFeatureSet ? 'bg-[#6366F1]' : 'bg-gray-300'
                          }`}
                          onClick={() => setCurrentFeatureSet(index)}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Customization Section */}
            <section className="py-20 bg-white dark:bg-gray-900">
              <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto text-center">
                  <h2 className="text-4xl md:text-5xl font-bold mb-4 dark:text-white">
                    À la carte ou en Menu,
                    <span className="text-[#6366F1]"> vous choisissez, Izimo s'adapte</span>
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 text-xl mb-16 max-w-3xl mx-auto">
                    Composez votre formule selon vos besoins et votre budget
                  </p>

                  <div className="grid md:grid-cols-2 gap-8">
                    {/* À la carte */}
                    <div className="bg-gradient-to-br from-[#F5F3FF] to-white dark:from-gray-800 dark:to-gray-900 rounded-lg p-8 shadow-lg">
                      <div className="bg-[#6366F1] bg-opacity-10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                        <Settings className="w-8 h-8 text-[#6366F1]" />
                      </div>
                      <h3 className="text-2xl font-bold mb-4 dark:text-white">À la carte</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-6">
                        Sélectionnez uniquement les services dont vous avez besoin
                      </p>
                      <ul className="text-left space-y-4">
                        <li className="flex items-center">
                          <CheckCircle2 className="w-5 h-5 text-[#6366F1] mr-3 flex-shrink-0" />
                          <span className="dark:text-white">Payez uniquement ce que vous utilisez</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle2 className="w-5 h-5 text-[#6366F1] mr-3 flex-shrink-0" />
                          <span className="dark:text-white">Modifiez vos options à tout moment</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle2 className="w-5 h-5 text-[#6366F1] mr-3 flex-shrink-0" />
                          <span className="dark:text-white">Sans engagement de durée</span>
                        </li>
                      </ul>
                    </div>

                    {/* En menu */}
                    <div className="bg-gradient-to-br from-[#F5F3FF] to-white dark:from-gray-800 dark:to-gray-900 rounded-lg p-8 shadow-lg">
                      <div className="bg-[#6366F1] bg-opacity-10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                        <Shield className="w-8 h-8 text-[#6366F1]" />
                      </div>
                      <h3 className="text-2xl font-bold mb-4 dark:text-white">En menu</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-6">
                        Profitez de nos formules tout compris à prix avantageux
                      </p>
                      <ul className="text-left space-y-4">
                        <li className="flex items-center">
                          <CheckCircle2 className="w-5 h-5 text-[#6366F1] mr-3 flex-shrink-0" />
                          <span className="dark:text-white">Jusqu'à 30% d'économies sur les services</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle2 className="w-5 h-5 text-[#6366F1] mr-3 flex-shrink-0" />
                          <span className="dark:text-white">Support prioritaire inclus</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle2 className="w-5 h-5 text-[#6366F1] mr-3 flex-shrink-0" />
                          <span className="dark:text-white">Fonctionnalités premium débloquées</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-12">
                    <button 
                      onClick={() => setActiveTab('beta')}
                      className="bg-[#6366F1] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#4F46E5] transition-colors flex items-center justify-center mx-auto space-x-2"
                    >
                      <span>Découvrir nos formules</span>
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* Target Audience Section */}
            <section className="py-20 bg-white dark:bg-gray-900">
              <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto text-center">
                  <h2 className="text-4xl md:text-5xl font-bold mb-4 dark:text-white">
                    Izimo, c'est pour qui ?
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 text-xl mb-16 max-w-3xl mx-auto">
                    Une solution adaptée à tous les types de propriétaires
                  </p>

                  <div className="grid md:grid-cols-3 gap-8">
                    {/* Pour les Particuliers */}
                    <div className="bg-gradient-to-br from-[#F5F3FF] to-white dark:from-gray-800 dark:to-gray-900 rounded-lg p-8 shadow-lg transition-transform hover:scale-105">
                      <div className="bg-[#6366F1] bg-opacity-10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                        <Users className="w-8 h-8 text-[#6366F1]" />
                      </div>
                      <h3 className="text-2xl font-bold mb-4 dark:text-white">Pour les Particuliers</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Simplifiez la gestion de vos biens locatifs et maximisez vos revenus sans les frais d'agence traditionnels.
                      </p>
                    </div>

                    {/* Pour les SCI */}
                    <div className="bg-gradient-to-br from-[#F5F3FF] to-white dark:from-gray-800 dark:to-gray-900 rounded-lg p-8 shadow-lg transition-transform hover:scale-105">
                      <div className="bg-[#6366F1] bg-opacity-10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                        <Building2 className="w-8 h-8 text-[#6366F1]" />
                      </div>
                      <h3 className="text-2xl font-bold mb-4 dark:text-white">Pour les SCI</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Gérez efficacement votre patrimoine immobilier avec des outils adaptés aux besoins spécifiques des SCI.
                      </p>
                    </div>

                    {/* Pour la location saisonnière */}
                    <div className="bg-gradient-to-br from-[#F5F3FF] to-white dark:from-gray-800 dark:to-gray-900 rounded-lg p-8 shadow-lg transition-transform hover:scale-105">
                      <div className="bg-[#6366F1] bg-opacity-10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                        <Home className="w-8 h-8 text-[#6366F1]" />
                      </div>
                      <h3 className="text-2xl font-bold mb-4 dark:text-white">Pour la location saisonnière</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Optimisez vos locations courte durée et gérez facilement vos réservations et communications avec les voyageurs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* About Section */}
            <section className="py-20 bg-gradient-to-br from-[#F5F3FF] to-white dark:from-gray-800 dark:to-gray-900">
              <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto text-center">
                  <h2 className="text-4xl md:text-5xl font-bold mb-4 dark:text-white">Mieux comprendre Izimo</h2>
                  <p className="text-gray-600 dark:text-gray-300 text-xl mb-16 max-w-3xl mx-auto">
                    IZIMO est né de la volonté de simplifier la gestion locative pour tous
                  </p>

                  <div className="grid md:grid-cols-2 gap-12">
                    {/* Notre Histoire */}
                    <div className="flex flex-col items-center">
                      <div className="bg-[#6366F1] bg-opacity-10 rounded-full w-20 h-20 flex items-center justify-center mb-6">
                        <History className="w-10 h-10 text-[#6366F1]" />
                      </div>
                      <h3 className="text-2xl font-bold mb-4 dark:text-white">Notre Histoire</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Nous sommes deux amoureux de l'immobilier, multi propriétaire et investisseur depuis plus de dix ans. Nous avons rapidement fait face aux difficultés liées à la gestion locative, notamment lors des gestions à distance. Fort de notre connaissances dans le milieu et de nos formations initiales en ingénierie nous avons donné naissance à Izimo en 2024.
                      </p>
                    </div>

                    {/* Notre Mission */}
                    <div className="flex flex-col items-center">
                      <div className="bg-[#6366F1] bg-opacity-10 rounded-full w-20 h-20 flex items-center justify-center mb-6">
                        <Target className="w-10 h-10 text-[#6366F1]" />
                      </div>
                      <h3 className="text-2xl font-bold mb-4 dark:text-white">Notre Mission</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Izimo se positionne comme l'outil tout-en-un pour les propriétaires souhaitant gérer efficacement leur patrimoine locatif, tout en offrant la flexibilité d'un service à la carte pour ceux préférant déléguer certaines tâches. Nos objectifs vous concernant :<br/>
                        <span className="font-semibold dark:text-white">Économies :</span> Réduction des frais liés aux agences classiques.<br/>
                        <span className="font-semibold dark:text-white">Efficacité :</span> Gain de temps grâce à l'automatisation.<br/>
                        <span className="font-semibold dark:text-white">Transparence :</span> Accès à toutes les informations en un clic.
                      </p>
                    </div>

                  </div>
                </div>
              </div>
            </section>

          </>
        )}

        {activeTab === 'beta' && (
          <section className="py-20 bg-gradient-to-br from-[#F5F3FF] to-white dark:from-gray-800 dark:to-gray-900">
            <div className="container mx-auto px-4">
              <div className="max-w-lg mx-auto">
                <h2 className="text-3xl font-bold mb-4 text-center dark:text-white">Rejoignez la version Bêta</h2>
                <div className="text-center mb-8 text-gray-600 dark:text-gray-300">
                  <p className="mb-4">Soyez les premiers à tester Izimo!</p>
                  <p className="mb-4">En rejoignant notre version bêta, profitez d'un accès exclusif à nos fonctionnalités innovantes et bénéficiez de 3 mois gratuits pour tester la puissance de notre solution.</p>
                  <p>Ne manquez pas cette opportunité de révolutionner votre gestion locative : inscrivez-vous dès maintenant et soyez parmi les premiers à façonner l'avenir de la location !</p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
                  <form className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                        Nom complet
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6366F1] focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        placeholder="Votre nom"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6366F1] focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        placeholder="votre@email.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6366F1] focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        placeholder="Votre numéro"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-[#6366F1] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#4F46E5] transition-colors"
                    >
                      Je m'inscris pour essayer la version beta
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </section>
        )}

        {activeTab === 'faq' && (
          <section className="py-20 bg-gradient-to-br from-[#F5F3FF] to-white dark:from-gray-800 dark:to-gray-900">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold mb-12 text-center dark:text-white">Questions fréquentes</h2>
                <div className="space-y-6">
                  {[
                    {
                      question: "Comment fonctionne la période d'essai ?",
                      answer: "La version bêta vous permet de tester gratuitement toutes les fonctionnalités premium pendant 30 jours, sans engagement."
                    },
                    {
                      question: "Puis-je annuler à tout moment ?",
                      answer: "Oui, vous pouvez annuler votre abonnement à tout moment, sans frais ni engagement."
                    },
                    {
                      question: "Mes données sont-elles sécurisées ?",
                      answer: "Absolument. Nous utilisons les dernières technologies de cryptage et respectons strictement les normes RGPD pour protéger vos données."
                    },
                    {
                      question: "Comment fonctionne le support client ?",
                      answer: "Notre équipe support est disponible par email et chat pour tous les clients, avec un support prioritaire pour les abonnements Premium et Pro."
                    }
                  ].map((item, index) => (
                    <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
                      <h3 className="text-xl font-semibold mb-3 dark:text-white">{item.question}</h3>
                      <p className="text-gray-600 dark:text-gray-300">{item.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {activeTab === 'contact' && (
          <section className="py-20 bg-gradient-to-br from-[#F5F3FF] to-white dark:from-gray-800 dark:to-gray-900">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold mb-4 text-[#6366F1]">Contactez-nous</h2>
                  <p className="text-xl text-gray-600 dark:text-gray-300">
                    Une question ? Un besoin spécifique ? Notre équipe est là pour vous aider.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                  {/* Contact Info */}
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-2xl font-semibold mb-6 dark:text-white">Informations de contact</h3>
                      <div className="space-y-4">
                        <div className="flex items-center space-x-4">
                          <div className="bg-[#6366F1] bg-opacity-10 p-3 rounded-lg">
                            <Mail className="w-6 h-6 text-[#6366F1]" />
                          </div>
                          <div>
                            <p className="font-medium dark:text-white">Email</p>
                            <p className="text-gray-600 dark:text-gray-300">contact@izimo.fr</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4">
                          <div className="bg-[#6366F1] bg-opacity-10 p-3 rounded-lg">
                            <Users2 className="w-6 h-6 text-[#6366F1]" />
                          </div>
                          <div>
                            <p className="font-medium dark:text-white">Support</p>
                            <p className="text-gray-600 dark:text-gray-300">Disponible 7j/7 de 9h à 19h</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-2xl font-semibold mb-6 dark:text-white">FAQ rapide</h3>
                      <div className="space-y-4">
                        <div className="p-4">
                          <p className="font-medium mb-2 dark:text-white">Combien de temps pour une réponse ?</p>
                          <p className="text-gray-600 dark:text-gray-300">Nous nous engageons à répondre sous 24h ouvrées.</p>
                        </div>
                        <div className="p-4">
                          <p className="font-medium mb-2 dark:text-white">Besoin d'une démo ?</p>
                          <p className="text-gray-600 dark:text-gray-300">Indiquez-le dans votre message, nous organiserons une présentation personnalisée.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Contact Form */}
                  <div className="p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                    <form className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                            Prénom
                          </label>
                          <input
                            type="text"
                            id="firstName"
                           className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#6366F1] focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                            placeholder="Votre prénom"
                          />
                        </div>
                        <div>
                          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                            Nom
                          </label>
                          <input
                            type="text"
                            id="lastName"
                           className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#6366F1] focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                            placeholder="Votre nom"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#6366F1] focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                          placeholder="votre@email.com"
                        />
                      </div>

                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                          Sujet
                        </label>
                        <select
                          id="subject"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#6366F1] focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        >
                          <option value="">Sélectionnez un sujet</option>
                          <option value="demo">Demande de démonstration</option>
                          <option value="pricing">Question sur les tarifs</option>
                          <option value="features">Renseignements fonctionnalités</option>
                          <option value="support">Support technique</option>
                          <option value="other">Autre demande</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                          Message
                        </label>
                        <textarea
                          id="message"
                          rows={6}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#6366F1] focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                          placeholder="Votre message..."
                        ></textarea>
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-[#6366F1] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#4F46E5] transition-colors flex items-center justify-center space-x-2"
                      >
                        <span>Envoyer le message</span>
                        <ArrowRight className="w-5 h-5" />
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Building2 className="w-6 h-6 text-[#6366F1]" />
              <span className="font-bold">Izimo</span>
            </div>
            <p className="text-gray-600">© 2024 Izimo. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;