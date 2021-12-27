import { Account, GENDER, ROLE } from '../models/account';
import { Transaction } from '../models/transaction';

export const transactions: Transaction[] = [
  {
    date: '01/01/2021',
    description: 'Love you',
    deposits: 990,
    withdrawals: null,
    balance: 1990,
  },
  {
    date: '01/02/2021',
    description: 'Last night was great',
    deposits: 100,
    withdrawals: null,
    balance: 2090,
  },
  {
    date: '01/01/2021',
    description: 'See you on monday',
    deposits: null,
    withdrawals: 1254,
    balance: 836,
  },
  {
    date: '01/01/2021',
    description: 'Nice t',
    deposits: 570,
    withdrawals: null,
    balance: 1406,
  },
  {
    date: '01/01/2021',
    description: 'Love you',
    deposits: 126,
    withdrawals: null,
    balance: 1532,
  },
  {
    date: '01/01/2021',
    description: 'Love you',
    deposits: null,
    withdrawals: 532,
    balance: 1000,
  },
];

export const accountDetails: Account = {
  id: '26e2e158-66c7-11ec-90d6-0242ac120003',
  email: 'greenspaceml@gmail.com',
  username: 'greenspaceml',
  password: 'greenspaceml',
  dateOfBirth: '2015-06-14',
  gender: GENDER.MALE,
  role: ROLE.Manager,
};

export const listAccount: Account[] = [
  {
    id: '26e2e158-66c7-11ec-90d6-0242ac120003',
    email: 'greenspaceml@gmail.com',
    username: 'greenspaceml',
    password: 'greenspaceml',
    dateOfBirth: '2015-06-14',
    gender: GENDER.MALE,
    role: ROLE.Manager,
  },
];
