export interface Role {
  id: string;
  name: string;
  img: string;
}

export default [
  {
    id: 'scrumMasters',
    name: 'Scrum Masters',
    img: '/Images/Scrum Master.svg',
  },
  {
    id: 'productOwners',
    name: 'Product Owners',
    img: '/Images/Product Owner.svg',
  },
  {
    id: 'developers',
    name: 'Developers',
    img: '/Images/Developer.svg',
  },
  {
    id: 'designers',
    name: 'Designers',
    img: '/Images/Designer.svg',
  },
];
