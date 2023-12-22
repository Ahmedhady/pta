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
import TENAD from './assets/TenAd.jpg';


const features = [
    { name: 'Tennis Training', description: 'Enhancing technique, and fostering a competitive edge' },
    { name: 'Physical Training', description: 'Emphasizing conditioning, agility, strength, and endurance tailored' },
    { name: 'Mental Training', description: 'Emphasizing psychological resilience, focus, strategic thinking, and mental fortitude' },
    { name: 'Competition', description: 'A platform for players to showcase their skills, resilience, and sportsmanship, driving personal growth and excellence' },
  ]
  
  export default function Example() {
    return (
      <div className="bg-blue-100">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Methods</h2>
            <p className="mt-4 text-gray-500">
              It all starts here
            </p>
  
            <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              {features.map((feature) => (
                <div key={feature.name} className="border-t border-gray-200 pt-4">
                  <dt className="font-medium text-gray-900">{feature.name}</dt>
                  <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
         
          <img
            src={TENAD}
            alt="Product screenshot"
            className="rounded-lg bg-gray-100 "
            width={2432}
            height={1442}
          />

        </div>
      </div>
    )
  }
  