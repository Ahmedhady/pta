import Footer from '../Footer';
import Navbar from '../Navbar';
import Banner from '../Banner';

import C1 from '../assets/Camp1.jpg';
import C2 from '../assets/Camp2.jpg';
import C3 from '../assets/Camp3.jpg';
import C4 from '../assets/Camp4.jpg';
import C5 from '../assets/Camp5.jpg';
import C from '../assets/C1.jpg';
import Camping from '../assets/Camping.jpg';




import { CheckBadgeIcon, } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Intensive Training',
    description: 'Immersion in a structured environment allows players to focus solely on tennis for significant periods, aiding skill development and improvement',
    icon: CheckBadgeIcon,
  },
  {
    name: 'Professional Coaching',
    description: 'Access to experienced coaches who provide personalized guidance and correction to enhance individual skills',
    icon: CheckBadgeIcon,
  },
  {
    name: 'Competition Exposure',
    description: 'Opportunities to play practice matches and sometimes compete in tournaments, gaining valuable match experience',
    icon: CheckBadgeIcon,
  },
  {
    name: 'Fitness and Conditioning',
    description: 'Specialized fitness training sessions tailored for tennis players to improve strength, agility, endurance, and injury prevention',
    icon: CheckBadgeIcon,
  },
  {
    name: 'Social and Fun Environment',
    description: 'Camps often foster a sense of camaraderie among participants, offering chances to make new friends while enjoying tennis and other activities',
    icon: CheckBadgeIcon,
  },
]
const links = [
  { name: '20 hours of tennis training per week', },
]

export default function Example() {
    return (
        <><Banner /><Navbar />
       <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-1">
       
  <div class="px-4 sm:px-0 ">
  <h3 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Seasonal Camps</h3>
    <p class="mt-6 text-lg leading-8 text-gray-600">A fantastic way for players to immerse themselves in an intensive and focused training environment during fall, winter, spring, and summer camps</p>
  </div>
  


          <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Benefits of Seasonal Tennis Camps</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
              A structured program designed to enhance various aspects of a player's game, providing training, coaching, competition, and sometimes other recreational activities
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-blue-600" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>


          <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          
          <img
            src= {C4}
            alt="Side of walnut card tray with card groove and recessed card area."
            className="rounded-lg bg-gray-100"
          />
          <img
            src= {C5}
            alt="Top down view of walnut card tray with embedded magnets and card groove."
            className="rounded-lg bg-gray-100"
          />
          <img
            src= {C}
            alt="Top down view of walnut card tray with embedded magnets and card groove."
            className="rounded-lg bg-gray-100"
          />
          <img
            src= {Camping}
            alt="Top down view of walnut card tray with embedded magnets and card groove."
            className="rounded-lg bg-gray-100"
          />
         
        </div>
          
        </div>

      </div>
    </div>
</div> 
          </div>
      <Footer /></>
    )
  }  