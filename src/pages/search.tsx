import React, { useRef, useState } from 'react';
import { ReactComponent as Loading } from '../assets/loading.svg';
import Button from 'components/comon/Button';
import { fetchCard } from 'services/cardService';
import { Card, PeriodType } from 'types/card';
import classNames from 'classnames';
import { showToast } from 'utils/configToast';

const defaultCard: Partial<Card> = {
  code: '',
  activeDate: '',
  fullName: '',
  address: '',
  birthOfDate: '',
  phoneNumber: '',
  mail: '',
};

const Search = () => {
  const inputCodeRef = useRef<HTMLInputElement>(null);
  const [card, setCard] = useState<Partial<Card>>(defaultCard);
  const [loading, setLoading] = useState(false);

  const btnStyles = classNames('h-10 outline-none ', {
    'bg-gray-400 !py-0': loading,
  });

  const handleSearch = async () => {
    const code = inputCodeRef.current?.value;

    try {
      if (code) {
        // setLoading(true);
        const res = await fetchCard(inputCodeRef.current?.value || '');
        setLoading(false);
        if (!res) return;
        setCard(res);
      }
    } catch (err) {
      setLoading(false);
      showToast.error('Card not exists.');
      // @ts-ignore
      if (err?.response?.data?.message === 'Card not found!') {
      }
      console.error(err);
    }
  };

  const renderPeriod = (strTime: PeriodType | undefined) => {
    if (!strTime) return '';

    if (strTime === 'Unlimited') {
      return strTime;
    }

    return `${strTime} years`;
  };

  const renderDate = (strDate: string | undefined) => {
    if (!strDate) return '';

    const date = new Date(strDate);

    return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
  };

  return (
    <div className='min-h-screen pt-8 px-5 bg-[url("../assets/hero-bg11.jpg")]'>
      <div className='flex items-center justify-center gap-2 mb-14'>
        <input
          type='text'
          className='inline-block h-10 relative px-5 pb-0.5 outline-none rounded-full'
          ref={inputCodeRef}
        />
        <Button className={btnStyles} onClick={handleSearch} disabled={loading}>
          {loading ? <Loading className='w-10 h-10 text-white' /> : 'Search'}
        </Button>
      </div>

      <div className='flex flex-col md:flex-row max-w-7xl mx-auto pb-14'>
        <div className='md:w-1/2 md:pr-10 md:border-r md:border-groove md:border-white'>
          <h4 className='text-blue-900 text-3xl text-center mb-5'>
            Card Information
          </h4>

          <div className='flex mb-2'>
            <p className='mr-5 text-blue-500'>Card Code:</p>
            <p>{card.code}</p>
          </div>

          <div className='flex mb-2'>
            <p className='mr-5 text-blue-500'>Card Type:</p>
            <p>{card.type}</p>
          </div>

          <div className='flex mb-2'>
            <p className='mr-5 text-blue-500'>Card Effective Period:</p>
            <p>{renderPeriod(card.period)}</p>
          </div>

          <div className='flex mb-2'>
            <p className='mr-5 text-blue-500'>Card Time Active:</p>
            <p>{renderDate(card.activeDate)}</p>
          </div>

          {/* <div className='flex mb-2'>
            <p className='mr-5 text-blue-500'>Card Time Inactive:</p>
            <p>{card.}</p>
          </div> */}
        </div>

        <div className='md:w-1/2 md:pl-10 mt-10 md:mt-0'>
          <h4 className='text-blue-900 text-3xl text-center mb-5'>
            Customer Information
          </h4>

          <div className='flex mb-2'>
            <p className='mr-5 text-blue-500'>FullName:</p>
            <p>{card.fullName}</p>
          </div>

          <div className='flex mb-2'>
            <p className='mr-5 text-blue-500'>Gender:</p>
            <p></p>
          </div>

          <div className='flex mb-2'>
            <p className='mr-5 text-blue-500'>Birth of Date:</p>
            <p>{card.birthOfDate}</p>
          </div>

          <div className='flex mb-2'>
            <p className='mr-5 text-blue-500'>Address:</p>
            <p>{card.address}</p>
          </div>

          <div className='flex mb-2'>
            <p className='mr-5 text-blue-500'>Phone</p>
            <p>{card.phoneNumber}</p>
          </div>

          <div className='flex mb-2'>
            <p className='mr-5 text-blue-500'>Mail:</p>
            <p>{card.mail}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
