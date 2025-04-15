import React from "react";
import { Link } from "react-router-dom";
import ButtonAtom from "../../atoms/button";
import { Wallet, TrendingUp, Clock, Search, Plus } from "lucide-react"
import ProjectCarousel from "../../organisms/projectcarroussel";

const HomePage: React.FC = () => {
  // Dados simulados para os projetos
  const trendingProjects = [
    {
      id: 1,
      name: "Projeto Alpha",
      image: "/placeholder.jpg",
      funded: 75,
      timeLeft: "3 dias",
      category: "DeFi",
    },
    {
      id: 2,
      name: "Metaverso Beta",
      image: "/placeholder.jpg",
      funded: 45,
      timeLeft: "5 dias",
      category: "Metaverso",
    },
    {
      id: 3,
      name: "NFT Collection Gamma",
      image: "/placeholder.jpg",
      funded: 90,
      timeLeft: "1 dia",
      category: "NFT",
    },
    {
      id: 4,
      name: "DApp Delta",
      image: "/placeholder.jpg",
      funded: 30,
      timeLeft: "7 dias",
      category: "DApp",
    },
    {
      id: 5,
      name: "Protocolo Epsilon",
      image: "/placeholder.jpg",
      funded: 60,
      timeLeft: "4 dias",
      category: "Protocolo",
    },
  ]

  const recentProjects = [
    {
      id: 6,
      name: "Zeta Finance",
      image: "/placeholder.jpg",
      funded: 15,
      timeLeft: "10 dias",
      category: "DeFi",
    },
    {
      id: 7,
      name: "Eta Marketplace",
      image: "/placeholder.jpg",
      funded: 25,
      timeLeft: "8 dias",
      category: "Marketplace",
    },
    {
      id: 8,
      name: "Theta Game",
      image: "/placeholder.jpg",
      funded: 40,
      timeLeft: "6 dias",
      category: "GameFi",
    },
    {
      id: 9,
      name: "Iota Protocol",
      image: "/placeholder.jpg",
      funded: 55,
      timeLeft: "5 dias",
      category: "Protocolo",
    },
    {
      id: 10,
      name: "Kappa DAO",
      image: "/placeholder.jpg",
      funded: 70,
      timeLeft: "3 dias",
      category: "DAO",
    },
  ]

  const popularProjects = [
    {
      id: 11,
      name: "Lambda Exchange",
      image: "/placeholder.jpg",
      funded: 85,
      timeLeft: "2 dias",
      category: "Exchange",
    },
    {
      id: 12,
      name: "Mu Wallet",
      image: "/placeholder.jpg",
      funded: 95,
      timeLeft: "1 dia",
      category: "Wallet",
    },
    {
      id: 13,
      name: "Nu Bridge",
      image: "/placeholder.jpg",
      funded: 65,
      timeLeft: "4 dias",
      category: "Bridge",
    },
    {
      id: 14,
      name: "Xi Analytics",
      image: "/placeholder.jpg",
      funded: 50,
      timeLeft: "6 dias",
      category: "Analytics",
    },
    {
      id: 15,
      name: "Omicron Social",
      image: "/placeholder.jpg",
      funded: 35,
      timeLeft: "7 dias",
      category: "Social",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-6">
            <Link to="/" className="flex items-center space-x-2">
              <img src="/logo.png" alt="Logo" width={32} height={32} />
              <span className="font-bold">DAO Funding</span>
            </Link>
            <nav className="hidden md:flex gap-6">
              <Link to="/explorar" className="text-sm font-medium transition-colors hover:text-primary">
                Explorar
              </Link>
              <Link to="/categorias" className="text-sm font-medium transition-colors hover:text-primary">
                Categorias
              </Link>
              <Link to="/sobre" className="text-sm font-medium transition-colors hover:text-primary">
                Sobre
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <ButtonAtom
            onClick={() => {}}
            variant="outline" className="hidden md:flex gap-2">
              <Search className="h-4 w-4" />
              Buscar
            </ButtonAtom>
            <ButtonAtom
            onClick={() => {}}
            variant="outline" className="gap-2">
              <Wallet className="h-4 w-4" />
              Conectar Carteira
            </ButtonAtom>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Descubra e Financie Projetos Inovadores
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Conecte-se com projetos revolucionários e ajude a construir o futuro da web3
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <ButtonAtom
                onClick={() => {}}
                className="gap-2">
                  <Search className="h-4 w-4" />
                  Explorar Projetos
                </ButtonAtom>
                <ButtonAtom 
                onClick={() => {}}
                variant="outline" className="gap-2">
                  <Plus className="h-4 w-4" />
                  Criar Projeto
                </ButtonAtom>
              </div>
              <p className="text-sm text-muted-foreground">É necessário possuir o NFT da DAO para criar projetos</p>
            </div>
          </div>
        </section>

        <section className="py-8 md:py-12">
          <div className="container px-4 md:px-6">
            <div className="flex items-center justify-between mb-6">
              <div className="space-y-1">
                <h2 className="text-2xl font-bold tracking-tight flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  Em alta nas últimas 24h
                </h2>
                <p className="text-sm text-muted-foreground">Projetos com maior crescimento de financiamento</p>
              </div>
              <Link to="/em-alta" className="text-sm font-medium text-primary hover:underline">
                Ver todos
              </Link>
            </div>
            <ProjectCarousel projects={trendingProjects} />
          </div>
        </section>

        <section className="py-8 md:py-12 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="flex items-center justify-between mb-6">
              <div className="space-y-1">
                <h2 className="text-2xl font-bold tracking-tight">Lançados recentemente</h2>
                <p className="text-sm text-muted-foreground">Novos projetos que acabaram de chegar à plataforma</p>
              </div>
              <Link to="/recentes" className="text-sm font-medium text-primary hover:underline">
                Ver todos
              </Link>
            </div>
            <ProjectCarousel projects={recentProjects} />
          </div>
        </section>

        <section className="py-8 md:py-12">
          <div className="container px-4 md:px-6">
            <div className="flex items-center justify-between mb-6">
              <div className="space-y-1">
                <h2 className="text-2xl font-bold tracking-tight flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  Mais acessados na última semana
                </h2>
                <p className="text-sm text-muted-foreground">Projetos populares com maior número de visitas</p>
              </div>
              <Link to="/populares" className="text-sm font-medium text-primary hover:underline">
                Ver todos
              </Link>
            </div>
            <ProjectCarousel projects={popularProjects} />
          </div>
        </section>

        <section className="py-12 md:py-24 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tight">Faça parte da comunidade</h2>
                <p className="text-muted-foreground md:text-lg">
                  Junte-se a milhares de inovadores, investidores e entusiastas que estão moldando o futuro da
                  tecnologia blockchain.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <ButtonAtom
                  onClick={() => {}}
                  className="gap-2">
                    <Wallet className="h-4 w-4" />
                    Conectar Carteira
                  </ButtonAtom>
                  <ButtonAtom 
                  onClick={() => {}}
                  variant="outline">Saiba mais</ButtonAtom>
                </div>
              </div>
              <div className="relative h-[300px] rounded-lg overflow-hidden">
                <img src="/community.jpg" alt="Comunidade DAO" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-6 md:py-8">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <Link to="/" className="flex items-center space-x-2">
                <img src="/logo.png" alt="Logo" width={32} height={32} />
                <span className="font-bold">DAO Funding</span>
              </Link>
              <p className="text-sm text-muted-foreground">
                Plataforma descentralizada para financiamento de projetos inovadores na web3.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-4">Plataforma</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/explorar" className="text-muted-foreground hover:text-foreground">
                    Explorar Projetos
                  </Link>
                </li>
                <li>
                  <Link to="/criar" className="text-muted-foreground hover:text-foreground">
                    Criar Projeto
                  </Link>
                </li>
                <li>
                  <Link to="/categorias" className="text-muted-foreground hover:text-foreground">
                    Categorias
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-4">Recursos</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/documentacao" className="text-muted-foreground hover:text-foreground">
                    Documentação
                  </Link>
                </li>
                <li>
                  <Link to="/faq" className="text-muted-foreground hover:text-foreground">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link to="/tutoriais" className="text-muted-foreground hover:text-foreground">
                    Tutoriais
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-4">Comunidade</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/discord" className="text-muted-foreground hover:text-foreground">
                    Discord
                  </Link>
                </li>
                <li>
                  <Link to="/twitter" className="text-muted-foreground hover:text-foreground">
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link to="/forum" className="text-muted-foreground hover:text-foreground">
                    Fórum
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-muted-foreground">© 2023 DAO Funding. Todos os direitos reservados.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link to="/termos" className="text-xs text-muted-foreground hover:text-foreground">
                Termos de Uso
              </Link>
              <Link to="/privacidade" className="text-xs text-muted-foreground hover:text-foreground">
                Política de Privacidade
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default HomePage;
