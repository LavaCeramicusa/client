export type PeriodType = '10' | '15' | '20' | 'Unlimited';
type CardType = 'Lava Smile' | 'Lava Gold' | 'Lava Platinum' | 'Lava Diamond';

export interface Card {
  code: string;
  type: CardType;
  period: PeriodType;
  activeDate?: string;
  expired: boolean;
  fullName?: string;
  gender: 'Male' | 'Female';
  address?: string;
  birthOfDate?: string;
  phoneNumber?: string;
  mail?: string;
}
