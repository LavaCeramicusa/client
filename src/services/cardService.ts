import { Card } from 'types/card';
import { instance } from './config';

export const fetchCard = async (code: string) => {
  const res = (await instance.get(`cards/${code}`)) as Card;

  return res;
};

export const activeCard = async (payload: Card) => {
  const res = await instance.patch(`/cards/active`, payload);

  return res;
};
