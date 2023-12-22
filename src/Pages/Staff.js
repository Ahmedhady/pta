import Footer from '../Footer';
import Navbar from '../Navbar';
import Banner from '../Banner';
import TEAM from '../assets/Team.jpg';
import TEAM2 from '../assets/Team2.jpg';
import Zein from '../assets/Zein.PNG';
import Maher from '../assets/Maher.jpg';
import Ashraf from '../assets/Ashraf.PNG';

const people = [
    {
      name: 'Zein Radwan',
      role: 'Founder / Head Coach',
      imageUrl: Zein,
    },
    {
        name: 'Maher',
        role: 'Head Coach',
        imageUrl: Zein,
      },
      {
        name: 'Ashraf',
        role: 'Head Coach',
        imageUrl: Ashraf,
      },
      // Mo
      // Mo
    // More people...
  ]

const Staff =  () => { 
    return (
        <><Banner /><Navbar />
        <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-2">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Technical Staff</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
          PTA staff's guiding principles revolve around technical proficiency, character development, and instilling core values through training         </p>
        </div>
        <img className=""
              src= {TEAM}
              alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
              className="rounded-lg bg-gray-100"
            />
      </div>
    </div>
 <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our team</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
          We are individuals versed in tennis coaching, instruction, and training, 
          and these roles extend beyond the confines of the tennis court, 
          encompassing numerous facets across many aspects of life         </p>
        </div>
        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt="" />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                  <p className="text-sm font-semibold leading-6 text-blue-600">{person.role}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
        <Footer /></>
    )
}
export default Staff;