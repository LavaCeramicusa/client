import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from 'components/comon/Button';
import Select from 'components/comon/Select';
import { activeCard } from 'services/cardService';
import { Card } from 'types/card';
import { Gender } from 'types/user';
import { showToast } from 'utils/configToast';

type CardKey = keyof typeof cardFields;
type UserKey = keyof typeof userFields;

const cardFields = {
  // type: 'Card Type',
  // period: 'Card Effective Period',
  // active: 'Card Time Active',
  // inactive: 'Card Time Inactive',
};

const cardKeys = Object.keys(cardFields) as CardKey[];

const userFields = {
  code: {
    title: 'Card Code',
    type: 'input',
  },
  fullName: { title: 'FullName', type: 'input' },
  gender: { title: 'Gender', type: 'select' },
  birthOfDate: { title: 'Birth of Date', type: 'date' },
  address: { title: 'Address', type: 'input' },
  phoneNumber: { title: 'Phone', type: 'input' },
  mail: { title: 'Mail', type: 'input' },
};

const userKeys = Object.keys(userFields) as UserKey[];

const Edit = () => {
  const [card, setCard] = useState<Card>({ gender: 'Female' } as Card);

  const navigate = useNavigate();

  const handleUpdateCard = async () => {
    if (!card.code || !card.fullName || !card.phoneNumber) return;
    try {
      const res = await activeCard(card);

      if (res) {
        showToast.success('Active successfully.');
        setCard({ gender: 'Female' } as Card);
      }
    } catch (err) {
      // @ts-ignore
      if (err?.response?.data?.message === 'Card has already active!') {
        showToast.error('Card has already active!');
        return;
      }
      showToast.error('Active failed.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('e', typeof e.target.value);
    setCard((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleUpdateGender = (value: string) => {
    setCard((prev) => ({ ...prev, gender: value as Gender }));
  };

  return (
    <div className='min-h-screen bg-red-100 px-5 flex items-center justify-center bg-[url("../assets/bg-login.jpg")] bg-cover bg-no-repeat'>
      <div className='max-w-7xl mx-auto pt-12 px-5 md:px-8 bg-white rounded-xl shadow'>
        <h3 className='mb-8 text-center uppercase text-3xl tracking-wider text-blue-900'>
          Active Card
        </h3>

        <div className='flex flex-col pb-14 w-full min-[400px]:w-[350px] min-[500px]:w-[450px] mx-auto'>
          {userKeys.map((key) => (
            <div className='flex items-center justify-between mb-2' key={key}>
              <p className='text-blue-500'>{`${userFields[key].title}:`}</p>

              {['input', 'date'].includes(userFields[key].type) && (
                <input
                  type={userFields[key].type}
                  name={key}
                  className='inline-block font-normal w-40 min-[400px]:w-[200px] min-[500px]:w-80 h-10 shadow border border-solid border-gray-400 relative px-3 pb-0.5 outline-none rounded-md'
                  value={card?.[key] || ''}
                  onChange={handleChange}
                />
              )}

              {userFields[key].type === 'select' && (
                <Select
                  options={['Male', 'Female']}
                  selected={card.gender}
                  setSelected={handleUpdateGender}
                  className='!w-40 min-[400px]:!w-[200px] min-[500px]:!w-80 border border-solid border-gray-400'
                />
              )}
            </div>
          ))}

          <div className='flex justify-end gap-3 mt-5'>
            <Button
              className='bg-gray-400 shadow-none hover:shadow-none'
              onClick={() => navigate('/')}
            >
              Cancel
            </Button>
            <Button onClick={handleUpdateCard}>Save</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edit;
