import Footer from '../Footer';
import Navbar from '../Navbar';
import Banner from '../Banner';
import U10U from '../assets/10.jpg';
import JUN from '../assets/Jun.jpg';
import ADULT from '../assets/Adult.jpg';
import BEG from '../assets/Beg.jpg';
import TENAD from '../assets/TenAd.jpg';
import COMP from '../assets/Comp.jpg';
import L1 from '../assets/L1.jpg';
import L2 from '../assets/L2.jpg';
import L3 from '../assets/L3.jpg';
import L4 from '../assets/L4.jpg';
import Comp2 from '../assets/Comp2.jpg';
import Comp1 from '../assets/Comp1.jpg';
import Comp3 from '../assets/Comp3.jpg';

import { CheckBadgeIcon, } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Competition Experience',
    description: 'Offers the opportunity to compete in a structured environment against players of similar or varying skill levels',
    icon: CheckBadgeIcon,
  },
  {
    name: 'Skill Development',
    description: 'Provides a platform to practice and refine skills learned during training or coaching sessions',
    icon: CheckBadgeIcon,
  },
  {
    name: 'Networking and Community',
    description: 'Allows players to meet and connect with other tennis enthusiasts in their local area',
    icon: CheckBadgeIcon,
  },
  {
    name: 'Motivation and Goal Setting',
    description: 'Helps in setting personal goals and tracking progress in a competitive setting',
    icon: CheckBadgeIcon,
  },
  {
    name: 'Fun and Social Interaction',
    description: 'Offers a chance to enjoy the sport while engaging in a social and competitive atmosphere',
    icon: CheckBadgeIcon,
  },
]

const links = [
  { name: 'Several athletes from the academy achieved top positions in both national championships within and outside the academys venues', },
]

export default function Example() {
    return (
        <><Banner /><Navbar />
       <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-1">
       
  <div class="px-4 sm:px-0 ">
  <h3 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Tournaments</h3> 
    <p class="mt-6 text-lg leading-8 text-gray-600">We host numerous state-level tournaments annually, securing multiple medals in both our own courts and various other venues where the events take place</p>
  </div>
 

          

          <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Benefits of Participating in Tournaments</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
              We host numerous state-level tournaments annually, securing multiple medals in both our own courts and various other venues where the events take place
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
            src= {COMP}
            alt="Side of walnut card tray with card groove and recessed card area."
            className="rounded-lg bg-gray-100"
          />
          <img
            src= {Comp2}
            alt="Side of walnut card tray with card groove and recessed card area."
            className="rounded-lg bg-gray-100"
          />
          <img
            src= {Comp1}
            alt="Side of walnut card tray with card groove and recessed card area."
            className="rounded-lg bg-gray-100"
          />
          <img
            src= {Comp3}
            alt="Side of walnut card tray with card groove and recessed card area."
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