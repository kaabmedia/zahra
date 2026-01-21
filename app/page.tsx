"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Scissors, Shirt, Sparkles, Ruler, Star, MapPin, Mail, Clock, Facebook } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect } from "react"
import { MobileMenu } from "@/components/mobile-menu"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function Home() {
  useEffect(() => {
    // Smooth scroll behavior
    const anchors = document.querySelectorAll('a[href^="#"]')
    const handleAnchorClick = (event: Event) => {
      event.preventDefault()
      const currentTarget = event.currentTarget as HTMLAnchorElement | null
      const href = currentTarget?.getAttribute('href')
      if (!href) {
        return
      }
      const target = document.querySelector(href)
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }

    anchors.forEach(anchor => {
      anchor.addEventListener('click', handleAnchorClick)
    })

    return () => {
      anchors.forEach(anchor => {
        anchor.removeEventListener('click', handleAnchorClick)
      })
    }
  }, [])
  const services = [
    {
      title: "Maatkleding",
      description: "Of het nu gaat om een elegante jurk, een formele outfit voor een speciale gelegenheid, of casual kleding die perfect past, wij maken het voor u op maat. Onze ervaren kleermakers interpreten uw wensen met precisie en passie, en zorgen ervoor dat elk kledingstuk u niet alleen prachtig staat maar zich ook fijn voelt.",
      icon: Ruler,
      image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=800&q=80"
    },
    {
      title: "Kledingreparatie",
      description: "Heeft u een favoriet kledingstuk waar een knoop aan ontbreekt, een scheur die gerepareerd moet worden, of een zoom die moet worden aangepast? Zahra kleermakers zijn gespecialiseerd in reparaties met oog voor detail. Wij restaureren uw kleding naar hun oude glans.",
      icon: Scissors,
      image: "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?w=800&q=80"
    },
    {
      title: "Gordijnen op Maat",
      description: "Creëer de perfecte sfeer in uw huis met op maat gemaakte gordijnen van kleermakerij Zahra. Of je nu zoekt naar een elegante gordijnen voor de woonkamer, verduisterende gordijnen voor de slaapkamer, of functionele gordijnen voor de keuken, wij maken ze op maat en ze zijn van de beste kwaliteit.",
      icon: Sparkles,
      image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80"
    },
    {
      title: "Stomerij",
      description: "Vertrouw op onze professionele stomerijdiensten om uw waardevolle kleding fris en als nieuw te houden. Of we nu gaat om delicate stoffen, dure materialen, of dagelijkse kleding, Zahra Kleermakerij benadert alle kledingstukken met zorg en aandacht.",
      icon: Shirt,
      image: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=800&q=80"
    }
  ]

  const reviews = [
    {
      name: "Fatima El Amrani",
      text: "Ik vond geweldig dat ik een Marokkaanse jurk voor mijn bruiloft liet maken bij Zahra. Ze waren zeer professioneel en het resultaat was echt prachtig. Ze luisterden goed naar mijn wensen. Bedankt voor dit prachtige kunstwerk!",
      rating: 5
    },
    {
      name: "Linda de Vries",
      text: "Ik was bang dat dit al iets ervaren samen! 5 voor een nieuwe jurk Zahra had nodig, begin was blij met het resultaat! Mijn werk kon ik blij zijn om op mijn bruiloft te zag en een volgende keer beslist terug!",
      rating: 5
    },
    {
      name: "Peter van den Berg",
      text: "Ik ben absoluut enthousiast door het niveau van vakmanschap dat Zahra bij zijn kleerwerk getoond. Het team bij Zahra heeft geweldig werk verricht.",
      rating: 5
    },
    {
      name: "Marieke Kaddouri",
      text: "Ik wil een Djellaba bestellen voor mijn man. Ik was blij met de kwaliteit en de prijs. Zahra's heeft heel hulpvaardig gedaan. De volgende keer zal ik een djellaba voor mezelf laten maken!",
      rating: 5
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <ScrollToTop />
      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-xl border-b border-gray-100/80 shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
        <div className="container flex h-20 items-center justify-between px-4 md:px-8 lg:px-12">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 blur-lg opacity-30 group-hover:opacity-50 transition-opacity" />
              <span className="relative text-2xl md:text-3xl font-bold tracking-tight bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                Zahra
              </span>
            </div>
            <span className="hidden sm:inline-block text-xs font-medium text-gray-400 tracking-widest uppercase">Kleermakerij</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-1">
            <Link href="#diensten" className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all">
              Diensten
            </Link>
            <Link href="#reviews" className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all">
              Reviews
            </Link>
            <Link href="#contact" className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-3">
            <Button asChild className="hidden sm:flex bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-all duration-300">
              <a href="tel:0157851840" className="inline-flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span className="font-medium">015 - 785 1840</span>
              </a>
            </Button>
            <MobileMenu />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-50/50 to-white">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,0.05),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.05),transparent_50%)]" />
        <div className="container relative px-4 md:px-8 lg:px-12 py-16 md:py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-8 lg:space-y-10">
              <a href="mailto:kleermakerij.zahra@hotmail.com" className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm shadow-sm hover:shadow-md hover:border-gray-300 transition-all duration-300">
                <div className="flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500">
                  <Mail className="h-3 w-3 text-white" />
                </div>
                <span className="text-gray-600 font-medium">kleermakerij.zahra@hotmail.com</span>
              </a>
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 leading-[1.1]">
                  Jouw Kleermaker
                  <br />
                  <span className="relative">
                    in{" "}
                    <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-600 bg-clip-text text-transparent">
                      Delft
                    </span>
                    <svg className="absolute -bottom-2 left-0 w-full h-3 text-cyan-500/20" viewBox="0 0 200 12" preserveAspectRatio="none">
                      <path d="M0,8 Q50,0 100,8 T200,8" stroke="currentColor" strokeWidth="4" fill="none" />
                    </svg>
                  </span>
                </h1>
              </div>
              <p className="text-lg md:text-xl text-gray-500 max-w-xl leading-relaxed">
                Ontdek de perfecte pasvorm en vakmanschap bij Kleermakerij Zahra.
                <span className="text-gray-700 font-medium"> Uw adres voor maatkleding, reparatie, gordijnen op maat en stomerij.</span>
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-base font-semibold shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300 h-14 px-8">
                  <a href="tel:0157851840" className="inline-flex items-center gap-3">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/20">
                      <Phone className="h-4 w-4" />
                    </div>
                    015 - 785 1840
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-base font-semibold border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50 h-14 px-8 transition-all duration-300">
                  <a href="#diensten">
                    Bekijk Diensten
                  </a>
                </Button>
              </div>
              {/* Trust indicators */}
              <div className="flex items-center gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">5.0 beoordeling</span>
                </div>
                <div className="h-4 w-px bg-gray-200" />
                <div className="text-sm text-gray-500">
                  <span className="font-semibold text-gray-700">20+ jaar</span> ervaring
                </div>
              </div>
            </div>
            <div className="relative h-[450px] lg:h-[550px]">
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-gradient-to-tr from-blue-400/15 to-cyan-500/15 rounded-full blur-3xl" />
              {/* Main image */}
              <div className="relative h-full w-full rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl shadow-gray-900/10">
                <Image
                  src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=1200&q=80"
                  alt="Kleermaker werkt met stof en maatlint"
                  fill
                  priority
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/10 via-transparent to-transparent" />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 md:bottom-8 md:-left-8 bg-white rounded-xl shadow-xl shadow-gray-900/10 p-4 border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500">
                    <Scissors className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Vakmanschap</p>
                    <p className="text-xs text-gray-500">Sinds 2004</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="diensten" className="py-20 md:py-28 lg:py-32 bg-white">
        <div className="container px-4 md:px-8 lg:px-12">
          <div className="text-center mb-14 md:mb-20">
            <div className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-100 px-5 py-2 mb-6">
              <Scissors className="h-4 w-4 text-cyan-600" />
              <span className="text-sm font-semibold text-cyan-700 tracking-wide">Onze Expertise</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-5">
              Diensten op Maat
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Van maatkleding tot stomerij — wij bieden een compleet scala aan diensten met oog voor detail en kwaliteit
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <div key={index} className="group relative bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-500">
                <div className="relative h-56 md:h-64 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/95 shadow-lg backdrop-blur-sm">
                        <service.icon className="h-6 w-6 text-cyan-600" />
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-white">{service.title}</h3>
                    </div>
                  </div>
                </div>
                <div className="p-6 md:p-8">
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <a href="#contact" className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-600 hover:text-cyan-700 transition-colors">
                      Meer informatie
                      <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 md:py-28 lg:py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="container px-4 md:px-8 lg:px-12">
          <div className="text-center mb-14 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-5">
              Waarom Kleermakerij Zahra?
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Ontdek waarom klanten keer op keer voor ons kiezen
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
            <div className="group relative bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-lg hover:shadow-gray-200/50 transition-all duration-300">
              <div className="absolute top-0 left-8 right-8 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-b-full opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white mb-6 shadow-lg shadow-cyan-500/25">
                <Star className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Vakmanschap</h3>
              <p className="text-gray-500 leading-relaxed">
                Meer dan 20 jaar ervaring met de hoogste kwaliteit en oog voor detail in elk project.
              </p>
            </div>

            <div className="group relative bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-lg hover:shadow-gray-200/50 transition-all duration-300">
              <div className="absolute top-0 left-8 right-8 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-b-full opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white mb-6 shadow-lg shadow-cyan-500/25">
                <Clock className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Snelle Service</h3>
              <p className="text-gray-500 leading-relaxed">
                Efficiënte afhandeling zonder in te leveren op kwaliteit. Uw tijd is ook onze prioriteit.
              </p>
            </div>

            <div className="group relative bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-lg hover:shadow-gray-200/50 transition-all duration-300">
              <div className="absolute top-0 left-8 right-8 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-b-full opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white mb-6 shadow-lg shadow-cyan-500/25">
                <Sparkles className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Persoonlijke Aandacht</h3>
              <p className="text-gray-500 leading-relaxed">
                Wij luisteren naar uw wensen en leveren maatwerk dat perfect bij u past.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 md:py-28 lg:py-32 bg-white">
        <div className="container px-4 md:px-8 lg:px-12">
          <div className="text-center mb-14 md:mb-20">
            <div className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-50 to-yellow-50 border border-amber-100 px-5 py-2 mb-6">
              <Star className="h-4 w-4 text-amber-500 fill-amber-500" />
              <span className="text-sm font-semibold text-amber-700 tracking-wide">Klantbeoordelingen</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-5">
              Wat onze klanten zeggen
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Ontdek de ervaringen van tevreden klanten
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            {reviews.map((review, index) => (
              <div key={index} className="group relative bg-gradient-to-b from-gray-50 to-white rounded-2xl p-6 border border-gray-100 hover:border-gray-200 hover:shadow-lg hover:shadow-gray-100 transition-all duration-300">
                {/* Quote mark */}
                <div className="absolute top-4 right-4 text-gray-100 group-hover:text-gray-200 transition-colors">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-6 line-clamp-4">{review.text}</p>
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 text-white text-sm font-bold">
                    {review.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{review.name}</p>
                    <p className="text-xs text-gray-400">Geverifieerde klant</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-20 md:py-28 lg:py-32 overflow-hidden">
        {/* Background with gradient and pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,0.15),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.15),transparent_50%)]" />
        <div className="container relative px-4 md:px-8 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-5">
                Neem Contact Op
              </h2>
              <p className="text-lg text-gray-400 max-w-xl mx-auto leading-relaxed">
                Wij staan klaar om u te helpen. Neem vandaag nog contact met ons op.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-5 lg:gap-6 mb-12">
              <a href="tel:0157851840" className="group block">
                <div className="relative h-full bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                  <div className="flex flex-col items-center text-center">
                    <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white mb-5 shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/30 transition-shadow">
                      <Phone className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">Telefoon</h3>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors">015 - 785 1840</p>
                  </div>
                </div>
              </a>

              <a href="mailto:kleermakerij.zahra@hotmail.com" className="group block">
                <div className="relative h-full bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                  <div className="flex flex-col items-center text-center">
                    <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white mb-5 shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/30 transition-shadow">
                      <Mail className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors text-sm break-all">kleermakerij.zahra@hotmail.com</p>
                  </div>
                </div>
              </a>

              <a href="https://www.google.com/maps/search/?api=1&query=Oosthaven+52,+2611+RB+Delft" target="_blank" rel="noopener noreferrer" className="group block">
                <div className="relative h-full bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                  <div className="flex flex-col items-center text-center">
                    <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white mb-5 shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/30 transition-shadow">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">Bezoek Ons</h3>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors">Oosthaven 52<br />2611 RB Delft</p>
                  </div>
                </div>
              </a>
            </div>

            <div className="text-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-base font-semibold shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300 h-14 px-10">
                <a href="tel:0157851840" className="inline-flex items-center gap-3">
                  <Phone className="h-5 w-5" />
                  Bel Nu: 015 - 785 1840
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-white">
        <div className="container px-4 md:px-8 lg:px-12 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2 mb-5">
                <span className="text-2xl font-bold tracking-tight bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Zahra
                </span>
                <span className="text-xs font-medium text-gray-500 tracking-widest uppercase">Kleermakerij</span>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed mb-6">
                Uw vertrouwde kleermaker in Delft voor maatwerk, reparatie en meer. Kwaliteit en vakmanschap sinds 2004.
              </p>
              <div className="flex items-center gap-3">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:bg-white/10 hover:text-cyan-400 hover:border-cyan-400/30 transition-all">
                  <Facebook className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">Contact</h3>
              <div className="space-y-4 text-sm">
                <a href="https://www.google.com/maps/search/?api=1&query=Oosthaven+52,+2611+RB+Delft" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors group">
                  <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0 text-gray-500 group-hover:text-cyan-400 transition-colors" />
                  <span>Oosthaven 52<br />2611 RB Delft</span>
                </a>
                <a href="tel:0157851840" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group">
                  <Phone className="h-5 w-5 flex-shrink-0 text-gray-500 group-hover:text-cyan-400 transition-colors" />
                  <span>015 - 785 1840</span>
                </a>
                <a href="mailto:kleermakerij.zahra@hotmail.com" className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors group">
                  <Mail className="h-5 w-5 mt-0.5 flex-shrink-0 text-gray-500 group-hover:text-cyan-400 transition-colors" />
                  <span className="break-all">kleermakerij.zahra@hotmail.com</span>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">Navigatie</h3>
              <div className="space-y-3 text-sm">
                <Link href="#diensten" className="block text-gray-400 hover:text-white hover:translate-x-1 transition-all">
                  Onze Diensten
                </Link>
                <Link href="#reviews" className="block text-gray-400 hover:text-white hover:translate-x-1 transition-all">
                  Klantbeoordelingen
                </Link>
                <Link href="#contact" className="block text-gray-400 hover:text-white hover:translate-x-1 transition-all">
                  Contact
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">Openingstijden</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between text-gray-400">
                  <span>Maandag - Vrijdag</span>
                  <span className="text-white font-medium">09:00 - 18:00</span>
                </div>
                <div className="flex items-center justify-between text-gray-400">
                  <span>Zaterdag</span>
                  <span className="text-white font-medium">10:00 - 17:00</span>
                </div>
                <div className="flex items-center justify-between text-gray-400">
                  <span>Zondag</span>
                  <span className="text-gray-500">Gesloten</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 mt-12 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
              <p>© 2026 Kleermakerij Zahra. Alle rechten voorbehouden.</p>
              <p>Ontwikkeld door <span className="text-gray-400">Kaabir</span></p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
