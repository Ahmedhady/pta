import Footer from '../Footer';
import Navbar from '../Navbar';
import Banner from '../Banner';
import U10U from '../assets/10.jpg';
import JUN from '../assets/Jun.jpg';
import ADULT from '../assets/Adult.jpg';

const stats = [
  { id: 1, name: 'Ages 5-10 Beginners-Intermediate', value: 'Under 10 Academy', imageUrl: U10U, },
  { id: 2, name: 'Ages 8-16 Beginners-Advanced (Open Level)', value: 'Juniors Academy', imageUrl: JUN,},
  { id: 3, name: 'Ages 18+ Groups separated by skill level', value: 'Adults Academy', imageUrl: ADULT, },
]
const links = [
  { name: 'Includes 1 hour per session x 12 sessions per month', },
]

export default function Example() {
    return (
        <><Banner /><Navbar />
       <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-1">
       
  <div class="px-4 sm:px-0 ">
  <h3 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Monthly Programs</h3> 
    <p class="mt-6 text-lg leading-8 text-gray-600">A structured program Based on the individual's skill level, goals, and specific areas all the year round</p>
  </div>

  <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
                {stat.value}
              </dd>
              <img
              src= {stat.imageUrl}
              alt="Walnut card tray filled with cards and card angled in dedicated groove."
              className="rounded-lg bg-gray-100"
            />
            </div>
          ))}
        </dl>
      </div>
    </div>
</div> 
          </div>
      <Footer /></>
    )
  }  