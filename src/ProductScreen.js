import BLUECOURT from './assets/BlueCourt.PNG';
import BLUE from './assets/Blue.PNG';
import TENAD from './assets/TenAd.PNG';

import PF1 from './assets/PF1.jpg';
import PF2 from './assets/PF2.jpg';
import PF3 from './assets/PF3.jpg';
import PF4 from './assets/PF4.jpg';
import ZEIN3 from './assets/Zein3.jpg';
import LAND1 from './assets/Land1.jpg';
import ZEIN2 from './assets/Zein2.jpg';
import TEAM2 from './assets/Team2.jpg';
import TEAM3 from './assets/Team3.jpg';
import COMM1 from './assets/Comm1.jpg';
import MENTAL from './assets/Mental.jpg';

import { CheckBadgeIcon, } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Sportsmanship',
    description: 'Emphasize fair play, respect for opponents, and grace in victory or defeat',
    icon: CheckBadgeIcon,
  },
  {
    name: 'Integrity',
    description: 'Uphold the highest standards of honesty, fairness, and ethical behavior both on and off the courts',
    icon: CheckBadgeIcon,
  },
  {
    name: 'Discipline',
    description: 'Consistently train, practice, and maintain a high level of physical and mental fitness',
    icon: CheckBadgeIcon,
  },
  {
    name: 'Mental Toughness',
    description: 'Mental resilience to stay focused, composed, and confident',
    icon: CheckBadgeIcon,
  },
  {
    name: 'Perseverance',
    description: 'Face setbacks, injuries, and tough losses but must bounce back',
    icon: CheckBadgeIcon,
  },
  {
    name: 'Respect',
    description: 'Dignity and respect towards everyone involved in the sport',
    icon: CheckBadgeIcon,
  },
  {
    name: 'Passion and Love for the Game',
    description: 'Enthusiasm drives  dedication and commitment to constantly improve and excel on the court',
    icon: CheckBadgeIcon,
  },
  {
    name: 'Teamwork and Individuality',
    description: 'Train and travel with a team of coaches and support staff',
    icon: CheckBadgeIcon,
  },
]

export default function Example() {
  return (
    <div className="overflow-hidden bg-blue-100 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Values</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
              Overarching values associated with us
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

          <div className="grid grid-cols-3 grid-rows-3 gap-4 sm:gap-6 lg:gap-8">
          <img
            src= {ZEIN3}
            alt="Top down view of walnut card tray with embedded magnets and card groove."
            className="rounded-lg bg-gray-100"
          />
          <img
            src= {PF2}
            alt="Side of walnut card tray with card groove and recessed card area."
            className="rounded-lg bg-gray-100"
          />
          <img
            src= {PF4}
            alt="Walnut card tray filled with cards and card angled in dedicated groove."
            className="rounded-lg bg-gray-100"
          />
          <img
            src= {LAND1}
            alt="Top down view of walnut card tray with embedded magnets and card groove."
            className="rounded-lg bg-gray-100"
          />
          <img
            src= {PF3}
            alt="Side of walnut card tray with card groove and recessed card area."
            className="rounded-lg bg-gray-100"
          />
          <img
            src= {MENTAL}
            alt="Walnut card tray filled with cards and card angled in dedicated groove."
            className="rounded-lg bg-gray-100"
          />
          <img
            src= {TEAM2}
            alt="Top down view of walnut card tray with embedded magnets and card groove."
            className="rounded-lg bg-gray-100"
          />
          <img
            src= {TEAM3}
            alt="Side of walnut card tray with card groove and recessed card area."
            className="rounded-lg bg-gray-100"
          />
          <img
            src= {COMM1}
            alt="Walnut card tray filled with cards and card angled in dedicated groove."
            className="rounded-lg bg-gray-100"
          />
        </div>

        </div>
      </div>
    </div>
  )
}
