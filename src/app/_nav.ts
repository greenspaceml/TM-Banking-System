import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
  },
  {
    name: 'Account Details',
    url: '/account-details',
    icon: 'cil-user',
  },
  {
    name: 'Transaction history',
    url: '/transactions-history',
    icon: 'cil-history',
  },
  {
    name: 'Transfer money',
    url: '/transfer-money',
    icon: 'cil-transfer',
  },
  {
    name: 'Client',
    url: '/client',
    children: [
      {
        name: 'Create client account',
        url: '/client/create-client-account',
        icon: 'cil-user-plus',
      },
      {
        name: 'Client account list',
        url: '/client/list-client-account',
        icon: 'cil-group',
      },
    ],
  },
];
