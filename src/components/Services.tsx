import { Code, Smartphone, Globe, Zap, Database, Palette } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const services = [
  {
    icon: Globe,
    title: 'Web Development',
    description: 'Custom web applications built with modern frameworks like React, Vue, and Angular for optimal performance.',
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile apps for iOS and Android using React Native, Flutter, and Swift.',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive interfaces designed with user experience at the forefront of every decision.',
  },
  {
    icon: Code,
    title: 'Full Stack Development',
    description: 'End-to-end solutions with Node.js, Express, and modern databases for scalable applications.',
  },
  {
    icon: Database,
    title: 'Database Solutions',
    description: 'Robust database architecture with PostgreSQL, MongoDB, and cloud-based solutions.',
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description: 'Lightning-fast applications optimized for speed, SEO, and exceptional user experience.',
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const { ref, isVisible } = useScrollAnimation();
  const Icon = service.icon;

  return (
    <div
      ref={ref}
      className={`group bg-slate-800 p-8 rounded-2xl hover:bg-slate-750 transition-all duration-500 hover:shadow-2xl hover:scale-105 border border-slate-700 hover:border-cyan-500 ${
        isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'
      }`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
        {service.title}
      </h3>
      <p className="text-gray-400 leading-relaxed">{service.description}</p>
    </div>
  );
}

export default function Services() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();

  return (
    <section id="services" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={titleRef}
          className={`text-center mb-16 ${
            titleVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-500">Services</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Comprehensive solutions tailored to transform your ideas into reality
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
