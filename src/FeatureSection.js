import { StarIcon, UserGroupIcon, SunIcon, BanknotesIcon  } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Experience Matters',
    description:
      'Our experienced coaches utilize a proven step-by-step methodology to effectively train and guide our students towards success',
    icon: StarIcon,
  },
  {
    name: 'Your tennis family',
    description:
      'Our community fervently backs and encourages the development and success of esteemed team tennis endeavors',
    icon: UserGroupIcon,
  },
  {
    name: 'Grassroots tennis',
    description:
      'Grassroots tennis serves as the foundation, introducing and nurturing a love for the sport among beginners while fostering its growth at the community level',
    icon: SunIcon,
  },
  {
    name: 'Affordability',
    description:
      'We advocate for equal access, ensuring that everyone has the chance to learn and enjoy the sport of tennis',
    icon: BanknotesIcon,
  },
]

export default function Example() {
  return (
    <div className="bg-blue-100 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">Learn faster</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Why learn from us Tennis?
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
          We love teaching tennis as a lifetime  sport!
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
