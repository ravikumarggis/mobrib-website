import { Target, Eye, Heart, Users, Award, TrendingUp } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen">
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-cyan-50 to-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">
              About{' '}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Mobrib
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              We're revolutionizing the way people send and receive packages by connecting senders with travelers, creating a smarter, faster, and more affordable delivery network.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Mobrib was born from a simple observation: millions of people travel every day with empty space in their bags, while millions of packages wait to be delivered through expensive traditional couriers.
                </p>
                <p>
                  We saw an opportunity to create a platform that benefits everyone. Travelers can earn extra income by utilizing their spare capacity, while senders get faster, more affordable delivery options with real-time tracking and personal touch.
                </p>
                <p>
                  Today, Mobrib has grown into a thriving community of thousands of users who trust us to connect them for seamless package delivery across cities and countries.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl p-12 aspect-square flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">📦</div>
                  <p className="text-2xl font-bold text-gray-800">Connecting People</p>
                  <p className="text-lg text-gray-600 mt-2">One Package at a Time</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: 'Our Mission',
                description: 'To make package delivery accessible, affordable, and efficient for everyone by leveraging the power of community and technology.',
                color: 'from-blue-500 to-cyan-500',
              },
              {
                icon: Eye,
                title: 'Our Vision',
                description: 'To become the world\'s most trusted peer-to-peer delivery platform, connecting millions of people for seamless package transport.',
                color: 'from-cyan-500 to-teal-500',
              },
              {
                icon: Heart,
                title: 'Our Values',
                description: 'Trust, transparency, community, and innovation drive everything we do. We believe in creating value for both senders and travelers.',
                color: 'from-orange-500 to-pink-500',
              },
            ].map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-6`}>
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Achievements</h2>
            <p className="text-gray-600 text-lg">Milestones we're proud of</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Users, value: '3,000+', label: 'Active Users', color: 'bg-blue-500' },
              { icon: Award, value: '10,000+', label: 'Deliveries Completed', color: 'bg-cyan-500' },
              { icon: TrendingUp, value: '95%', label: 'Customer Satisfaction', color: 'bg-orange-500' },
              { icon: Target, value: '50+', label: 'Cities Covered', color: 'bg-green-500' },
            ].map((achievement, index) => (
              <div
                key={index}
                className="text-center p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className={`w-16 h-16 ${achievement.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <achievement.icon className="w-8 h-8 text-white" />
                </div>
                <p className="text-4xl font-bold mb-2">{achievement.value}</p>
                <p className="text-gray-600">{achievement.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-50 via-pink-50 to-blue-50">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Join Our Journey</h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Be part of a community that's changing the way packages move around the world. Whether you're sending or traveling, Mobrib makes it simple, secure, and rewarding.
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-10 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-shadow">
              Get Started Today
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
