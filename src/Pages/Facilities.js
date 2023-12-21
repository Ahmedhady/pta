import Footer from '../Footer';
import Navbar from '../Navbar';
import Banner from '../Banner';

import SWIM1 from '../assets/Swim1.jpg';
import SWIM2 from '../assets/Swim2.jpg';
import GYM from '../assets/Gym.jpg';
import GYM1 from '../assets/Gym1.jpg';
import GYM2 from '../assets/Gym2.jpg';

import COURT from '../assets/Court.jpg';
import COURT1 from '../assets/Court1.jpg';
import COURT2 from '../assets/Court2.jpg';
import BLUECOURT from '../assets/BlueCourt.PNG';
import CLAYCOURT from '../assets/ClayCourt.PNG';
import POOL from '../assets/Pool.jpeg';
import GYMM from '../assets/Gymm.jpeg';
import CourtV from '../assets/CourtV.jpg';


  const stats = [
    { name: 'Courts', value: '12', imageUrl: CLAYCOURT },
    { name: 'Pools', value: '3',imageUrl: POOL },
    { name: 'Gym', value: '1',imageUrl: GYMM },
  ]

const Facilities =  () => { 
    return (
        <><Banner /><Navbar />
<div className=" relative overflow-hidden bg-white py-24 sm:py-32">
      <div
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
      />
      <div
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Sports Facilities</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
          The facilities provided by PTA can greatly impact the quality of training and overall experience for players
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          
          <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-6">
            {stats.map((stat) => (
              <div key={stat.name} className="flex flex-col-reverse">
                <dt className="text-base leading-7 text-gray-900">{stat.name}</dt>
                <dd className="text-2xl font-bold leading-9 tracking-tight text-gray-900">{stat.value}</dd>
                <img className=""
              src= {stat.imageUrl}
              alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
              className="rounded-lg bg-gray-100 h-15 w-27"
            />
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
    <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-8 px-6 lg:px-8 xl:grid-cols-3">
                <img className=""
                    src={CourtV}
                    alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                    className="rounded-lg bg-gray-100" />
                 <img className=""
                    src={COURT2}
                    alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                    className="rounded-lg bg-gray-100" />
                 <img className=""
                    src={SWIM1}
                    alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                    className="rounded-lg bg-gray-100" />
                 <img className=""
                    src={SWIM2}
                    alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                    className="rounded-lg bg-gray-100" />
                 <img className=""
                    src={GYM1}
                    alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                    className="rounded-lg bg-gray-100" />
                 <img className=""
                    src={GYM2}
                    alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                    className="rounded-lg bg-gray-100" />
            </div>
            </div>
        <Footer /></>
    )
}
export default Facilities;