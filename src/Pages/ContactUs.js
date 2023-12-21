import Footer from '../Footer';
import Navbar from '../Navbar';
import Banner from '../Banner';
import Cta from '../Cta';
import { PaperClipIcon } from '@heroicons/react/20/solid'
import { MapPinIcon, MapIcon} from '@heroicons/react/20/solid'
import { Link } from 'react-router-dom';

export default function Example() {
    return (
        <><Banner /><Navbar />
       <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-1">
       
  <div class="px-4 sm:px-0 ">
  <h3 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contact Us</h3> 
    <p class="mt-6 text-lg leading-8 text-gray-600">Need to get in touch with us?</p>
  </div>
  <div class="mt-6 border-t border-gray-100">
    <dl class="divide-y divide-gray-100">
      <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt class="text-sm font-medium leading-6 text-gray-900">Mobile</dt>
        <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">+201008650696</dd>
      </div>
      <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt class="text-sm font-medium leading-6 text-gray-900">Email</dt>
        <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">ptacademy15@gmail.com</dd>
      </div>
      <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt class="text-sm font-medium leading-6 text-gray-900">Opening Hours</dt>
        <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">7 days a week from 5 pm to 11 pm</dd>
      </div>
      <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt class="text-sm font-medium leading-6 text-gray-900">Branches</dt>
        <dd class="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
          <ul role="list" class="divide-y divide-gray-100 rounded-md border border-gray-200">
            <li class="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
              <div class="flex w-0 flex-1 items-center">
                <div class="ml-4 flex min-w-0 flex-1 gap-2">
                  <Link to={"https://www.google.com.eg/maps/place/Club+Assiut+Cement/@27.1880435,31.0365786,18z/data=!4m10!1m2!2m1!1z2YbYp9iv2Yog2KfYs9mF2YbYqiDYp9iz2YrZiNi3!3m6!1s0x144507ab50000001:0x13eb1e7fd77ca3e2!8m2!3d27.1863995!4d31.0385269!15sCh7Zhtin2K_ZiiDYp9iz2YXZhtiqINin2LPZitmI2LeSAQtzcG9ydHNfY2x1YuABAA!16s%2Fg%2F11kj901q8b?entry=ttu"} class="mt-1 text-sm leading-6 text-gray-700 hover:text-blue-600 sm:col-span-2 sm:mt-0">Cement Club, El-kilo 14 Alwadi Road , Asyut, Egypt, 71111</Link>
                </div>
              </div>
              <div class="ml-4 flex-shrink-0">
              </div>
            </li>
            <li class="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
              <div class="flex w-0 flex-1 items-center">
                <div class="ml-4 flex min-w-0 flex-1 gap-2">
                  <Link to={"https://www.google.com.eg/maps/place/%D8%A7%D9%84%D9%85%D8%AF%D9%8A%D9%86%D9%87+%D8%A7%D9%84%D8%AC%D8%A7%D9%85%D8%B9%D9%8A%D8%A9+%D8%AC%D8%A7%D9%85%D8%B9%D8%A9+%D8%A3%D8%B3%D9%8A%D9%88%D8%B7,+Al+Gamah+-+Al+Qasr+Al+Ahnee+Rd,+Al+Walideyah+Al+Qebleyah,+Asyut+1,+Assiut+Governorate+2074020%E2%80%AD/@27.1875544,31.1737828,16.03z/data=!4m6!3m5!1s0x14450bfc840f78dd:0x52256b3f33410c05!8m2!3d27.1872719!4d31.1764079!16s%2Fg%2F11b8td6075?entry=ttu"} class="mt-1 text-sm leading-6 text-gray-700 hover:text-blue-600 sm:col-span-2 sm:mt-0">University housing, Assiut University, Asyut, Egypt, 71515</Link>
                </div>
              </div>
              <div class="ml-4 flex-shrink-0">
              </div>
            </li>
          </ul>
        </dd>
      </div>
    </dl>
  </div>
</div> 
          </div>
      <Footer /></>
    )
  }  