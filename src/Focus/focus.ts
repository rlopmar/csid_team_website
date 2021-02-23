export type CardInfo = {
  title: string;
  body: string;
  icon: string;
};

export const cards: CardInfo[] = [
  {
    title: 'Innovation',
    body:
      'Developing new and improved products and services to add business value to feed customer/employees demand or needs.',
    icon: 'innovation',
  },
  {
    title: 'Agile',
    body:
      'To achieve Business Agility, we rapidly increase our ability to deliver innovative products and services to create the right solution for the right customer/employee at the right time.',
    icon: 'agile',
  },
  {
    title: 'Data-Drive',
    body:
      'Increasing digitalization is generating more and more data in all areas of business that could be re-use to inform or enhance processes, decision-making, and even a new revenue model.',
    icon: 'datadriven',
  },
  {
    title: 'User Centricity',
    body:
      'Creating positive employee engagement, more satisfy customer needs, keeping the customer lifetime value of our users at the center of our efforts.',
    icon: 'usercentricity',
  },
  {
    title: 'Customer Success',
    body:
      'We ensure a delightful experience for both our customers and employees by focusing on Next Generation Customer Experience and contributing to SAP´s strategic priorities and corporate goals.',
    icon: 'customersuccess',
  },
];
