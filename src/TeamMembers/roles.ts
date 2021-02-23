export interface Role {
  id: string;
  name: string;
  img: string;
}

export default [
  {
    id: 'agile',
    name: 'Agile',
    img: '/Images/Scrum Master.svg',
  },
  {
    id: 'productOwners',
    name: 'Product Owners and Business Analyst',
    img: '/Images/Product Owner.svg',
  },
  {
    id: 'developers',
    name: 'Development',
    img: '/Images/Developer.svg',
  },
  {
    id: 'designers',
    name: 'Designers',
    img: '/Images/Designer.svg',
  },
];
