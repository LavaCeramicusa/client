import classNames from 'classnames';

import Footer from 'components/Footer';
import Header from 'components/Header/Header';
import { Tab } from '@headlessui/react';
import Slider from 'components/SliderAnimation';
import { categories, clients, experts, services } from 'data';

const Line = () => (
  <span className='inline-block grow mx-3 pt-0.5  border-b border-b-gray-300 border-dashed'></span>
);

const Landing = () => {
  return (
    <div>
      <Header />

      {/* <section className='h-full flex flex-col lg:flex-row'>
        <div className='w-full bg-sky-100 p-5 md:p-20 xl:pl-32 lg:w-1/2'>
          <p className='inline-block mt-8 md:mt-0 px-2 py-px rounded-md text-white bg-orange-600'>
            DENTAL PRACTICE
          </p>
          <br />
          <h4 className='inline-block mt-5 mb-5 py-3 px-4 text-3xl bg-white rounded-lg text-blue-900'>
            Fully dedicated to your dental health
          </h4>
          <p>
            Te veritus tractatos delicatissimi qui, justo diceret mentitum ut
            sit. Qui sed reque dicam, qui veri nullam vituperatoribus in.
            Tibique maiestatis sum quod sum ut alienum nec et, summo possim
            persequeris vix mea. Adhuc quodsi qui, sit no tale essent electram.
            Mei sum prodesset in pro, quo scripta feugait vidisse.
          </p>
          <p className='mt-5 mb-10 text-red-500 text-xl'>Andrea McCollins</p>
        </div>

        <div className='w-full lg:w-1/2'>
          <img
            src='https://st2.depositphotos.com/1499736/6786/i/950/depositphotos_67866333-stock-photo-female-patient-receiving-dental-care.jpg'
            alt='Dental Practice'
            className='h-full w-full'
          />
        </div>
      </section> */}

      {/* <section className='w-full max-w-[1600px] mx-auto flex flex-col gap-20 lg:gap-10 p-5 xl:p-20 mt-20 pb-14 lg:flex-row'>
        <div className='w-full'>
          <img
            src={feature1}
            alt='Teeth'
            className='w-full h-64 sm:h-80 lg:h-64 rounded-md'
          />
          <h4 className='text-3xl text-blue-600 mt-4 mb-5'>
            Pick the dentist that fits all your needs the best
          </h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus vero
            et accusantium? Inventore atque in distinctio animi reiciendis
            commodi rem illum iusto. Laboriosam est non beatae blanditiis ad
            suscipit et?
          </p>
        </div>

        <div className='w-full'>
          <img
            src={feature2}
            alt='Dentist'
            className='w-full h-64 sm:h-80 lg:h-64 rounded-md'
          />
          <ul className='list-disc p-4 mt-2'>
            {futures.map((future) => (
              <li key={future} className='mb-5'>
                {future}
              </li>
            ))}
          </ul>
        </div>

        <div className='w-full overflow-hidden rounded-lg'>
          <div className='px-8 py-10 bg-pink-100'>
            <h3 className='mb-8 text-3xl font-semibold text-center text-blue-700'>
              Working Hours
            </h3>
            <ul>
              {times.map((time) => (
                <li
                  key={time.day}
                  className='flex items-center justify-between mb-5'
                >
                  <span>{time.day}</span>
                  <Line />
                  <span>{time.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section> */}

      <section className='bg-green-100'>
        <div className='max-w-7xl mx-auto flex flex-col p-5 md:flex-row md:flex-wrap xl:p-20 gap-3'>
          {services.map((service) => (
            <div
              className='flex items-center w-full md:w-1/3 grow mt-8'
              key={service.title}
            >
              <img
                src={service.image}
                alt={service.title}
                className='shrink-0'
              />

              <div className='grow ml-6'>
                <h4 className='text-blue-500 text-md mb-3'>{service.title}</h4>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className='px-5 py-20 xl:px-20'>
        <h3 className='text-center text-5xl'>Our Personnels</h3>
        <Slider />
      </div>

      <div className='w-full p-5 xl:p-20 py-16 bg-amber-50'>
        <div className='max-w-7xl mx-auto'>
          <Tab.Group>
            <Tab.List className='flex flex-col md:flex-row space-x-1 rounded-xl bg-blue-400 p-1'>
              {categories.map((category) => (
                <Tab
                  key={category.tab}
                  className={({ selected }) =>
                    classNames(
                      'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700 outline-none',
                      selected
                        ? 'bg-white shadow'
                        : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                    )
                  }
                >
                  {category.tab}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className='mt-2'>
              {categories.map((category, idx) => (
                <Tab.Panel
                  key={idx}
                  className='flex flex-col-reverse lg:flex-row gap-10 mt-20 bg-orange-50'
                >
                  <div className='lg:w-3/5 lg::pr-44 bg-amber-50'>
                    <h4 className='text-blue-600 text-3xl mt-5 lg:mt-0'>
                      {category.title}
                    </h4>
                    <p className='mt-3 mb-5'>{category.subTitle}</p>
                    <p className='mb-10'>{category.description}</p>
                  </div>

                  <div className='lg:w-2/5'>
                    <img
                      src={category.image}
                      alt={category.title}
                      className='mx-auto'
                    />
                  </div>
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>

      <section className='px-5 lg:px-20 my-32'>
        <div className='text-center'>
          <span className='text-red-300 text-sm tracking-widest'>
            THE ALLSMILES TEAM
          </span>
          <h3 className='text-blue-900 text-5xl mb-4 mt-3'>
            What Our Customers Say
          </h3>
          <p className='mb-16 text-gray-400'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam iure
            reprehenderit nisi inventore dolore eos? Dolorem veritatis illum
            iusto incidunt repudiandae modi eveniet eius, nisi labore!
            Consectetur aperiam libero dolor.
          </p>
        </div>

        <div className='flex flex-col max-w-7xl mx-auto sm:flex-row flex-wrap gap-20 sm:gap-10'>
          {experts.map((expert) => (
            <div
              className='sm:w-1/3 lg:w-1/5 mb-2 grow text-center'
              key={expert.name}
            >
              <img
                src={expert.image}
                alt={expert.name}
                className='w-full rounded'
              />
              <p className='mt-4 text-blue-800 text-xl'>{expert.name}</p>
              <span className='text-red-600 text-sm tracking-widest'>
                {expert.position}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className='bg-orange-100 flex flex-col sm:flex-row flex-wrap px-5 lg:px-20 py-24 lg:py-16 justify-between gap-16'>
        {clients.map((client) => (
          <img
            key={client.title}
            src={client.image}
            alt={client.title}
            className='w-52 lg:w-auto mx-auto h-20'
          />
        ))}
      </section>
      <Footer />
    </div>
  );
};

export default Landing;
