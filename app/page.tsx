"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Scissors, Shirt, Sparkles, Ruler, Star, MapPin, Mail } from "lucide-react"
import Link from "next/link"

export default function Home() {
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
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-20 items-center justify-between px-4 md:px-8">
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-3xl font-bold bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
              Zahra
            </div>
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#diensten" className="text-sm font-medium hover:text-primary transition-colors">
              Diensten
            </Link>
            <Link href="#reviews" className="text-sm font-medium hover:text-primary transition-colors">
              Reviews
            </Link>
          </nav>
          <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600">
            <Phone className="mr-2 h-4 w-4" />
            Bel: 015 - 785 148 40
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-blue-50 to-white opacity-70" />
        <div className="container relative px-4 md:px-8 py-20 md:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm bg-white shadow-sm">
                <Mail className="mr-2 h-4 w-4 text-primary" />
                <span className="text-muted-foreground">kleermakerij.zahra@hotmail.com</span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                Jouw Kleermaker in{" "}
                <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                  Delft
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
                Ontdek de perfecte pasvorm en vakmanschap bij Kleermakerij Zahra. Jouw adres voor maatkleding, 
                reparatie, gordijnen op maat en stomerij in Delft.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-lg">
                  <Phone className="mr-2 h-5 w-5" />
                  Bel: 015 - 785 148 40
                </Button>
                <Button size="lg" variant="outline" className="text-lg">
                  Diensten
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl blur-3xl opacity-20" />
              <img
                src="https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?w=800&q=80"
                alt="Kleermaker aan het werk"
                className="relative rounded-3xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="diensten" className="py-20 md:py-32">
        <div className="container px-4 md:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center rounded-full bg-primary/10 px-4 py-1.5 mb-4">
              <Scissors className="mr-2 h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Wat we doen</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Onze Diensten
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Van maatkleding tot stomerij, wij bieden een breed scala aan diensten voor al uw kledingbehoeften
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center space-x-3">
                    <div className="p-3 bg-white rounded-full">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="container px-4 md:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center rounded-full bg-primary/10 px-4 py-1.5 mb-4">
              <Star className="mr-2 h-4 w-4 text-primary fill-primary" />
              <span className="text-sm font-medium text-primary">Testimonials</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Dit zeggen onze klanten
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Lees wat onze tevreden klanten over ons te zeggen hebben
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reviews.map((review, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-2">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{review.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-gray-50">
        <div className="container px-4 md:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="text-3xl font-bold bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                Zahra
              </div>
              <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 w-full">
                <Phone className="mr-2 h-4 w-4" />
                015 - 785 148 40
              </Button>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Adres</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>Oosthaven 52</p>
                <p>2611 RB Delft</p>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Sitemap</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <Link href="#diensten" className="block hover:text-primary transition-colors">
                  Diensten
                </Link>
                <Link href="#reviews" className="block hover:text-primary transition-colors">
                  Reviews
                </Link>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Sociale</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <Link href="https://facebook.com" className="block hover:text-primary transition-colors">
                  Facebook
                </Link>
              </div>
            </div>
          </div>
          
          <div className="border-t mt-12 pt-8 text-center text-sm text-muted-foreground">
            <p>© 2026 Zahra Kleermakerij - Specialist door Kaabir/vakdoek</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
