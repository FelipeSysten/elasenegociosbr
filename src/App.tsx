/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Users, 
  Target, 
  TrendingUp, 
  Calendar, 
  Award, 
  CheckCircle2, 
  Instagram, 
  MessageCircle, 
  ArrowRight, 
  Menu, 
  X,
  Star,
  Briefcase,
  Globe,
  Handshake,
  ChevronRight
} from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', href: '#' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Comunidade', href: '#comunidade' },
    { name: 'Diretório', href: '#diretorio' },
    { name: 'Eventos', href: '#eventos' },
    { name: 'Planos', href: '#planos' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 gold-gradient rounded-full flex items-center justify-center font-serif text-black font-bold text-xl">E</div>
          <span className="font-serif text-2xl tracking-tighter font-bold gold-text-gradient">ELAS <span className="text-xs block -mt-1 font-sans tracking-widest text-white/60">E NEGÓCIOS BR</span></span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {menuItems.map((item) => (
            <a key={item.name} href={item.href} className="text-sm uppercase tracking-widest hover:text-gold transition-colors">
              {item.name}
            </a>
          ))}
          <button className="gold-gradient text-black px-6 py-2 rounded-full text-sm font-bold uppercase tracking-widest hover:scale-105 transition-transform">
            Entrar
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl py-8 px-6 flex flex-col gap-6 border-b border-white/10"
          >
            {menuItems.map((item) => (
              <a key={item.name} href={item.href} onClick={() => setIsOpen(false)} className="text-lg font-serif tracking-wide hover:text-gold">
                {item.name}
              </a>
            ))}
            <button className="gold-gradient text-black py-4 rounded-xl font-bold uppercase tracking-widest">
              Entrar na Área da Membro
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-1">
        <img 
          src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=2000" 
          alt="Background" 
          className="w-full h-full object-cover opacity-40"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-20 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1 border border-gold/30 rounded-full text-gold text-xs uppercase tracking-[0.3em] mb-6">
            Networking • Visibilidade • Oportunidade
          </span>
          <h1 className="text-6xl lg:text-8xl font-serif leading-[0.9] mb-8">
            A maior comunidade de mulheres que fazem <span className="gold-text-gradient italic">negócios de verdade.</span>
          </h1>
          <p className="text-xl text-white/60 max-w-lg mb-10 leading-relaxed">
            Networking estratégico, visibilidade e oportunidades exclusivas para empreendedoras que buscam faturamento com conexão e propósito.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="gold-gradient text-black px-8 py-4 rounded-full font-bold uppercase tracking-widest flex items-center justify-center gap-2 hover:shadow-[0_0_30px_rgba(197,160,89,0.3)] transition-all">
              Quero fazer parte <ArrowRight size={18} />
            </button>
            <button className="border border-white/20 hover:bg-white/5 px-8 py-4 rounded-full font-bold uppercase tracking-widest transition-all">
              Conheça a comunidade
            </button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9, rotateY: 20 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="hidden lg:block relative perspective-1000"
        >
          <motion.div 
            animate={{ 
              rotateY: [0, 5, 0, -5, 0],
              rotateX: [0, -3, 0, 3, 0]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl relative preserve-3d"
          >
            <img 
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=1000" 
              alt="Networking Feminino" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-8 left-8 right-8 glass-card p-6 transform translate-z-10">
              <p className="font-serif italic text-2xl mb-2">"Não é só networking... é faturamento com conexão!"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center text-gold">
                  <Star size={16} fill="currentColor" />
                </div>
                <div>
                  <p className="text-sm font-bold">Adriana (Drika)</p>
                  <p className="text-xs text-white/40 uppercase tracking-widest">CEO & Fundadora</p>
                </div>
              </div>
            </div>
          </motion.div>
          {/* Floating Stats */}
          <div className="absolute -top-10 -right-10 glass-card p-4 animate-bounce-slow transform translate-z-20">
            <p className="text-3xl font-serif gold-text-gradient font-bold">+3.000</p>
            <p className="text-[10px] uppercase tracking-widest text-white/60">Mulheres Conectadas</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Stats = () => {
  const stats = [
    { label: 'Mulheres Conectadas', value: '+3.000', icon: Users },
    { label: 'Negócios Gerados', value: '+500', icon: TrendingUp },
    { label: 'Cidades Atendidas', value: '+50', icon: Globe },
    { label: 'Eventos Realizados', value: '+100', icon: Calendar },
  ];

  return (
    <section className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div 
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gold/10 flex items-center justify-center text-gold">
                <stat.icon size={24} />
              </div>
              <h3 className="text-4xl font-serif font-bold mb-1">{stat.value}</h3>
              <p className="text-xs uppercase tracking-widest text-white/40">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Benefits = () => {
  const benefits = [
    {
      title: "Networking Estratégico",
      desc: "Conecte-se com empreendedoras de diversos segmentos prontas para parcerias.",
      icon: Handshake
    },
    {
      title: "Visibilidade Constante",
      desc: "Sua empresa em destaque no Instagram e no diretório exclusivo da comunidade.",
      icon: Globe
    },
    {
      title: "Eventos & Mentorias",
      desc: "Participação em rodadas de negócios, workshops e cafés presenciais.",
      icon: Award
    },
    {
      title: "Clube de Benefícios",
      desc: "Acesso a descontos exclusivos em serviços, softwares e parceiros.",
      icon: Star
    }
  ];

  return (
    <section id="comunidade" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-gold text-xs uppercase tracking-[0.3em] mb-4 block">Por que se juntar a nós?</span>
            <h2 className="text-5xl lg:text-7xl font-serif leading-tight">
              Benefícios exclusivos para <span className="italic gold-text-gradient">impulsionar</span> seu negócio.
            </h2>
          </div>
          <p className="text-white/40 max-w-sm mb-4">
            O Elas e Negócios BR é mais que um grupo, é um passe ideal para posicionar sua empresa no mercado.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 perspective-1000">
          {benefits.map((benefit, i) => (
            <motion.div 
              key={benefit.title}
              whileHover={{ 
                y: -10,
                rotateX: 5,
                rotateY: 5,
                scale: 1.02
              }}
              className="glass-card p-8 group transition-all hover:bg-white/10 preserve-3d"
            >
              <div className="w-14 h-14 rounded-2xl gold-gradient flex items-center justify-center text-black mb-8 group-hover:scale-110 transition-transform shadow-lg">
                <benefit.icon size={28} />
              </div>
              <h3 className="text-2xl font-serif mb-4 transform translate-z-20">{benefit.title}</h3>
              <p className="text-white/50 leading-relaxed text-sm transform translate-z-10">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Plans = () => {
  const plans = [
    {
      name: "Essencial",
      price: "29",
      features: [
        "Acesso ao grupo exclusivo",
        "Networking online",
        "Divulgação no diretório",
        "Suporte da comunidade"
      ],
      recommended: false
    },
    {
      name: "Premium",
      price: "79",
      features: [
        "Todos os benefícios do Essencial",
        "Participação em eventos presenciais",
        "Destaque no diretório",
        "Divulgação nas redes sociais",
        "Rodadas de negócios"
      ],
      recommended: true
    },
    {
      name: "Empresarial",
      price: "199",
      features: [
        "Destaque máximo no portal",
        "Publicidade da empresa",
        "Participação em eventos VIP",
        "Palestras e mentorias",
        "Consultoria estratégica"
      ],
      recommended: false
    }
  ];

  return (
    <section id="planos" className="py-32 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-5xl lg:text-6xl font-serif mb-6">Escolha o seu <span className="italic gold-text-gradient">plano de crescimento</span></h2>
          <p className="text-white/40">Investimento estratégico para quem busca conexões reais e resultados sólidos.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div 
              key={plan.name}
              className={`relative p-10 rounded-[2.5rem] border transition-all duration-500 ${plan.recommended ? 'bg-gold text-black border-transparent scale-105 shadow-[0_0_50px_rgba(197,160,89,0.2)]' : 'bg-white/5 border-white/10 hover:border-gold/50'}`}
            >
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-black text-gold text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-full">
                  Mais Popular
                </div>
              )}
              <h3 className="text-2xl font-serif mb-2 uppercase tracking-widest">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-sm font-bold">R$</span>
                <span className="text-6xl font-serif font-bold">{plan.price}</span>
                <span className={`text-sm ${plan.recommended ? 'text-black/60' : 'text-white/40'}`}>/mês</span>
              </div>
              <ul className="space-y-4 mb-10">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <CheckCircle2 size={18} className={plan.recommended ? 'text-black' : 'text-gold'} />
                    <span className={plan.recommended ? 'text-black/80' : 'text-white/70'}>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className={`w-full py-4 rounded-full font-bold uppercase tracking-widest transition-all ${plan.recommended ? 'bg-black text-white hover:bg-zinc-800' : 'gold-gradient text-black hover:scale-105'}`}>
                Assinar Agora
              </button>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-white/40 text-sm">
            * A participação em alguns eventos pode envolver taxas adicionais.
          </p>
        </div>
      </div>
    </section>
  );
};

const DirectoryPreview = () => {
  const members = [
    { name: "Ana Silva", biz: "Marketing Digital", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200" },
    { name: "Carla Mendes", biz: "Moda & Estilo", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200" },
    { name: "Juliana Costa", biz: "Gastronomia", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200" },
    { name: "Beatriz Oliveira", biz: "Arquitetura", img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=200" },
  ];

  return (
    <section id="diretorio" className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-gold text-xs uppercase tracking-[0.3em] mb-4 block">Catálogo de Negócios</span>
            <h2 className="text-5xl lg:text-6xl font-serif mb-8 leading-tight">
              Diretório de <span className="italic gold-text-gradient">Empreendedoras</span>
            </h2>
            <p className="text-white/60 text-lg mb-10 leading-relaxed">
              Um dos pontos mais poderosos da nossa comunidade. Transformamos o site em um grande catálogo de negócios femininos, onde cada membro ganha visibilidade real.
            </p>
            <div className="space-y-6 mb-12">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold shrink-0"><CheckCircle2 size={20} /></div>
                <p className="text-white/80">Página personalizada com foto, empresa e contatos.</p>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold shrink-0"><CheckCircle2 size={20} /></div>
                <p className="text-white/80">Filtros por cidade e segmento de atuação.</p>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold shrink-0"><CheckCircle2 size={20} /></div>
                <p className="text-white/80">Conexão direta com redes sociais e WhatsApp.</p>
              </div>
            </div>
            <button className="flex items-center gap-2 text-gold font-bold uppercase tracking-widest group">
              Explorar diretório completo <ChevronRight className="group-hover:translate-x-2 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {members.map((member, i) => (
              <motion.div 
                key={member.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-6 text-center group"
              >
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-gold/30 group-hover:border-gold transition-colors">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <h4 className="font-serif text-xl mb-1">{member.name}</h4>
                <p className="text-[10px] uppercase tracking-widest text-white/40">{member.biz}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer id="contato" className="bg-black pt-32 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-12 h-12 gold-gradient rounded-full flex items-center justify-center font-serif text-black font-bold text-2xl">E</div>
              <span className="font-serif text-3xl tracking-tighter font-bold gold-text-gradient">ELAS <span className="text-xs block -mt-1 font-sans tracking-widest text-white/60">E NEGÓCIOS BR</span></span>
            </div>
            <p className="text-white/40 max-w-md mb-8 leading-relaxed">
              Fortalecendo o empreendedorismo feminino através de conexões reais e oportunidades de negócios. Junte-se à maior rede de mulheres empreendedoras.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-black transition-all"><Instagram size={20} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-black transition-all"><MessageCircle size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-xl mb-8">Links Rápidos</h4>
            <ul className="space-y-4 text-sm text-white/40">
              <li><a href="#" className="hover:text-gold">Home</a></li>
              <li><a href="#sobre" className="hover:text-gold">Sobre Nós</a></li>
              <li><a href="#comunidade" className="hover:text-gold">Comunidade</a></li>
              <li><a href="#eventos" className="hover:text-gold">Eventos</a></li>
              <li><a href="#planos" className="hover:text-gold">Planos</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-xl mb-8">Contato</h4>
            <ul className="space-y-4 text-sm text-white/40">
              <li className="flex items-center gap-3"><MessageCircle size={16} className="text-gold" /> (73) 99999-9999</li>
              <li className="flex items-center gap-3"><Globe size={16} className="text-gold" /> Itabuna - Ilhéus, BA</li>
              <li className="flex items-center gap-3"><Users size={16} className="text-gold" /> @elasenegociosbr</li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:row justify-between items-center gap-6 text-[10px] uppercase tracking-[0.2em] text-white/20">
          <p>© 2026 ELAS E NEGÓCIOS BR. TODOS OS DIREITOS RESERVADOS.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white">Privacidade</a>
            <a href="#" className="hover:text-white">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="selection:bg-gold selection:text-black">
      <Navbar />
      <Hero />
      <Stats />
      
      {/* About Section */}
      <section id="sobre" className="py-32 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden border border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1000" 
                alt="Equipe Elas e Negócios" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 glass-card p-8 max-w-xs">
              <h4 className="font-serif text-2xl mb-2">Nossa Missão</h4>
              <p className="text-sm text-white/60 leading-relaxed">
                Fortalecer o empreendedorismo feminino através de conexões reais e oportunidades de negócios.
              </p>
            </div>
          </div>
          <div>
            <span className="text-gold text-xs uppercase tracking-[0.3em] mb-4 block">Nossa História</span>
            <h2 className="text-5xl lg:text-7xl font-serif mb-8 leading-tight">
              Criando o futuro do <span className="italic gold-text-gradient">negócio feminino.</span>
            </h2>
            <p className="text-white/60 text-lg mb-8 leading-relaxed">
              O Elas e Negócios BR nasceu da necessidade de um espaço onde mulheres pudessem não apenas trocar experiências, mas gerar faturamento real através de networking estratégico.
            </p>
            <div className="grid grid-cols-2 gap-8 mb-12">
              <div>
                <h4 className="font-serif text-xl mb-2 text-gold">Visão</h4>
                <p className="text-sm text-white/40">Ser a maior rede de conexões femininas no comércio do sul da Bahia.</p>
              </div>
              <div>
                <h4 className="font-serif text-xl mb-2 text-gold">Valores</h4>
                <p className="text-sm text-white/40">Colaboração, crescimento coletivo e ética nos negócios.</p>
              </div>
            </div>
            <button className="gold-gradient text-black px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:scale-105 transition-transform">
              Conheça as Fundadoras
            </button>
          </div>
        </div>
      </section>

      <Benefits />
      <DirectoryPreview />
      
      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 gold-gradient opacity-10 blur-[120px]"></div>
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-6xl lg:text-8xl font-serif mb-10 leading-[0.9]">
            Pronta para levar seu negócio ao <span className="italic gold-text-gradient">próximo nível?</span>
          </h2>
          <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto">
            Junte-se a milhares de mulheres que já estão transformando networking em faturamento real.
          </p>
          <button className="gold-gradient text-black px-12 py-6 rounded-full text-xl font-bold uppercase tracking-[0.2em] hover:shadow-[0_0_50px_rgba(197,160,89,0.4)] transition-all">
            Entrar para a Comunidade
          </button>
        </div>
      </section>

      <Plans />
      
      {/* Blog Preview Placeholder */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-16">
            <div>
              <span className="text-gold text-xs uppercase tracking-[0.3em] mb-4 block">Conteúdo & Autoridade</span>
              <h2 className="text-5xl font-serif">Blog <span className="italic gold-text-gradient">Elas e Negócios</span></h2>
            </div>
            <button className="hidden md:block border-b border-gold text-gold pb-1 uppercase tracking-widest text-xs font-bold">Ver todos os artigos</button>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-video rounded-2xl overflow-hidden mb-6 border border-white/10">
                  <img 
                    src={`https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&q=80&w=800&sig=${i}`} 
                    alt="Blog Post" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <span className="text-gold text-[10px] uppercase tracking-widest mb-2 block">Empreendedorismo</span>
                <h3 className="text-2xl font-serif mb-4 group-hover:text-gold transition-colors">Como o networking estratégico pode dobrar seu faturamento em 6 meses.</h3>
                <p className="text-white/40 text-sm line-clamp-2">Descubra as táticas usadas pelas maiores empreendedoras da nossa comunidade para gerar conexões de alto valor...</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
