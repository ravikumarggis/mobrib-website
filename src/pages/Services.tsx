import { Package, Zap, MapPin, Shield, Clock, DollarSign, Smartphone, CheckCircle, Truck, Plane, Train, Car } from 'lucide-react';

export default function Services() {
  return (
    <div className="min-h-screen">
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-cyan-50 to-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">
              Our{' '}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Comprehensive delivery solutions tailored to your needs. Fast, secure, and affordable package delivery at your fingertips.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {
                icon: Package,
                title: 'Standard Delivery',
                description: 'Reliable package delivery for your everyday needs. Perfect for non-urgent items with flexible delivery times.',
                features: ['3-5 days delivery', 'Package tracking', 'Insurance included', 'Affordable rates'],
                color: 'from-blue-500 to-cyan-500',
              },
              {
                icon: Zap,
                title: 'Express Shipping',
                description: 'Need it fast? Our express service gets your packages delivered within hours or the next day.',
                features: ['Same-day delivery', 'Priority handling', 'Real-time tracking', 'Guaranteed delivery'],
                color: 'from-orange-500 to-pink-500',
              },
              {
                icon: Truck,
                title: 'Local Delivery',
                description: 'Quick and efficient delivery within your city. Perfect for urgent local shipments.',
                features: ['2-4 hours delivery', 'Same-city service', 'Live GPS tracking', 'Instant notifications'],
                color: 'from-green-500 to-emerald-500',
              },
              {
                icon: Plane,
                title: 'International Shipping',
                description: 'Send packages across borders with ease. We handle all customs and documentation.',
                features: ['Global coverage', 'Customs clearance', 'Door-to-door service', 'Track worldwide'],
                color: 'from-teal-500 to-cyan-500',
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border border-gray-100"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`mt-6 w-full bg-gradient-to-r ${service.color} text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow`}>
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Our Services?</h2>
            <p className="text-gray-600 text-lg">Features that make us stand out</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: MapPin,
                title: 'Real-Time Tracking',
                description: 'Track your package every step of the way with live GPS updates and notifications.',
              },
              {
                icon: Shield,
                title: 'Secure & Insured',
                description: 'All packages are insured and handled with maximum security protocols.',
              },
              {
                icon: Clock,
                title: 'On-Time Delivery',
                description: '95% on-time delivery rate. We value your time and ensure prompt deliveries.',
              },
              {
                icon: DollarSign,
                title: 'Competitive Pricing',
                description: 'Get the best rates in the market without compromising on quality or speed.',
              },
              {
                icon: Smartphone,
                title: 'Easy Booking',
                description: 'Book deliveries in seconds through our user-friendly mobile app or website.',
              },
              {
                icon: CheckCircle,
                title: '24/7 Support',
                description: 'Our customer support team is always ready to help you with any queries.',
              },
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <feature.icon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Travel & Earn</h2>
            <p className="text-gray-600 text-lg">Turn your trips into income opportunities</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { icon: Train, label: 'Train', desc: 'Long distance routes' },
              { icon: Truck, label: 'Bus', desc: 'City & intercity travel' },
              { icon: Car, label: 'Car', desc: 'Flexible routes' },
              { icon: Plane, label: 'Plane', desc: 'Domestic & international' },
              { icon: Package, label: 'Bike', desc: 'Quick local delivery' },
            ].map((mode, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl text-center hover:shadow-lg transition-shadow border-2 border-blue-100 hover:border-blue-300"
              >
                <mode.icon className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                <h3 className="font-bold text-lg mb-1">{mode.label}</h3>
                <p className="text-sm text-gray-600">{mode.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-xl text-gray-700 mb-6">
              Earn up to <span className="text-3xl font-bold text-blue-600">$800</span> every time you travel
            </p>
            <button className="bg-gradient-to-r from-orange-600 to-pink-600 text-white px-10 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-shadow">
              Start Earning Today
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-50 via-pink-50 to-blue-50">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Join thousands of satisfied customers who trust Mobrib for their delivery needs. Sign up now and get 60% off on your first order.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-10 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-shadow">
                Send a Package
              </button>
              <button className="bg-white text-gray-800 px-10 py-4 rounded-full font-semibold text-lg border-2 border-gray-200 hover:border-blue-600 transition-colors">
                Become a Traveler
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
