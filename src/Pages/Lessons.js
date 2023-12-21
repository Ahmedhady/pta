import Footer from '../Footer';
import Navbar from '../Navbar';
import Banner from '../Banner';
import U10U from '../assets/10.jpg';
import JUN from '../assets/Jun.jpg';
import ADULT from '../assets/Adult.jpg';
import BEG from '../assets/Beg.jpg';
import L1 from '../assets/L1.jpg';
import L2 from '../assets/L2.jpg';
import L3 from '../assets/L3.jpg';
import L4 from '../assets/L4.jpg';

import { CheckBadgeIcon, } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Customized Training',
    description: 'Private lessons are personalized to the players skill level, goals, strengths, and weaknesses. The coach designs the lesson plans to address specific areas needing improvement',
    icon: CheckBadgeIcon,
  },
  {
    name: 'Individual Attention',
    description: 'With one-on-one coaching, the player receives undivided attention from the coach, allowing for detailed feedback, correction, and personalized guidance',
    icon: CheckBadgeIcon,
  },
  {
    name: 'Flexibility and Convenience',
    description: 'Sessions can be scheduled at mutually convenient times for the player and coach, offering flexibility in training schedules',
    icon: CheckBadgeIcon,
  },
  {
    name: 'Skill Development',
    description: ' Coaches can focus on different aspects such as technique, footwork, strategy, mental aspects of the game, match tactics, and more based on the players requirements',
    icon: CheckBadgeIcon,
  },
  {
    name: 'Immediate Feedback',
    description: 'Players receive immediate feedback on their technique, allowing for quick adjustments and improvements during the session',
    icon: CheckBadgeIcon,
  },
  {
    name: 'Progress Tracking',
    description: 'Private lessons often include performance evaluation, allowing the coach to track the players progress over time and adjust training accordingly',
    icon: CheckBadgeIcon,
  },
  {
    name: 'Intensity and Focus',
    description: 'The intensity and focus on individual improvement can lead to quicker skill development compared to group training settings',
    icon: CheckBadgeIcon,
  },
]

const links = [
  { name: '1 hour per Lesson', },
]

export default function Example() {
    return (
        <><Banner /><Navbar />
       <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-1">
       
  <div class="px-4 sm:px-0 ">
  <h3 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Private Lessons</h3> 
    <p class="mt-6 text-lg leading-8 text-gray-600">One-on-one with a tennis coach  Tailored instruction and focus on the player's specific needs</p>
  </div>
  

          <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Features of Private Tennis Lessons</p>
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

          
          <div className="grid grid-cols-1 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          
          
          <img
            src= {L3}
            alt="Side of walnut card tray with card groove and recessed card area."
            className="rounded-lg bg-gray-100"
          />
          <img
            src= {L1}
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