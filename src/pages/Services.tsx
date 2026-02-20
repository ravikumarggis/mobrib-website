import { useEffect, useState } from 'react';
import { Code, Smartphone, Palette, Database, Shield, Zap, ArrowRight } from 'lucide-react';

interface Service {
  icon: React.ComponentType<{ className: string }>;
  title: string;
  description: string;
  features: string[];
}

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services: Service[] = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Modern, scalable web applications built with latest technologies.',
      features: ['React & Vue.js', 'Full Stack Solutions', 'Progressive Web Apps', 'API Development'],
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      features: ['React Native', 'Native Development', 'App Store Optimization', 'User Testing'],
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive interfaces that users love to interact with.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
    },
    {
      icon: Database,
      title: 'Database Solutions',
      description: 'Robust database architecture and optimization services.',
      features: ['Database Design', 'Performance Tuning', 'Data Migration', 'Backup Solutions'],
    },
    {
      icon: Shield,
      title: 'Security & Testing',
      description: 'Comprehensive security audits and quality assurance testing.',
      features: ['Security Audits', 'Penetration Testing', 'QA Testing', 'Code Review'],
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Lightning-fast applications with optimized performance metrics.',
      features: ['Speed Optimization', 'SEO Services', 'Load Testing', 'Monitoring'],
    },
  ];

  return (
    <div className="min-h-screen bg-slate-900 pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 transform text-center mb-16 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our <span className="bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive solutions designed to meet all your digital needs and drive business growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={`relative group transition-all duration-500 transform ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                } ${hoveredIndex === index ? 'scale-105' : 'scale-100'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-500 rounded-lg blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-lg border border-slate-700 h-full hover:border-cyan-400 transition-all duration-300">
                  <Icon className="w-14 h-14 text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-slate-400 mb-6 leading-relaxed">{service.description}</p>

                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                        <span className="text-slate-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center text-cyan-400 font-semibold group-hover:space-x-2 transition-all duration-300">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-slate-800 to-slate-900 border border-slate-700 rounded-lg p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Custom Solutions Available</h2>
          <p className="text-slate-300 text-lg mb-8">
            Don't see what you're looking for? We offer custom development services tailored to your unique needs.
          </p>
          <a
            href="/contact"
            className="inline-block bg-gradient-to-r from-blue-400 to-blue-500 text-slate-900 font-bold py-3 px-8 rounded-lg hover:shadow-lg hover:shadow-cyan-400/50 transition-all duration-300 transform hover:scale-105"
          >
            Request a Custom Solution
          </a>
        </div>
      </div>
    </div>
  );
}
