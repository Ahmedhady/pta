import AUN from './assets/AunLogo.jpeg';
import CEM from './assets/CemLogo.png';
import ETF from './assets/EtfLogo.jpg';
import PET from './assets/PetLogo.jpeg';
import MYS from './assets/MysLogo.png';


export default function Example() {
    return (
      <div className="bg-blue-100 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
            Our Partners
          </h2>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <img
              className="col-span-2 max-h-24 w-full object-contain lg:col-span-1"
              src= {AUN}
              alt="Transistor"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-24 w-full object-contain lg:col-span-1"
              src= {CEM}
              alt="Reform"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-24 w-full object-contain lg:col-span-1"
              src= {ETF}
              alt="Tuple"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-24 w-full object-contain sm:col-start-2 lg:col-span-1"
              src= {PET}
              alt="SavvyCal"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 col-start-2 max-h-24 w-full object-contain sm:col-start-auto lg:col-span-1"
              src= {MYS}
              alt="Statamic"
              width={158}
              height={48}
            />
          </div>
        </div>
      </div>
    )
  }