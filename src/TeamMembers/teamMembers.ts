export interface MembersInfo {
  name: string;
  avatar: string;
  location: string;
  email: string;
  phoneNumber: string;
  responsabilities: string[];
  specializations: string[];
  role: string;
}

interface TeamMembers {
  [key: string]: MembersInfo[];
}

export const teamMembers: TeamMembers = {
  agile: [
    {
      name: 'Kai Hu',
      avatar: '/Avatars/Kai-Hu.png',
      location: 'Germany',
      email: 'kai.hu@sap.com',
      phoneNumber: '+44 95729435',
      responsabilities: ['responsabilities'],
      specializations: ['Project Management', 'Soft skills', 'Negotiation'],
      role: 'Scrum Master',
    },
    {
      name: 'Angel Garcia',
      avatar: '/Avatars/Angel-Garcia.png',
      location: 'Germany',
      email: 'angel.garcia@sap.com',
      phoneNumber: '+44 94567397',
      responsabilities: ['responsabilities'],
      specializations: ['Dragon Slayer', 'Master of Water'],
      role: 'Agile Master',
    },
  ],
  productOwners: [
    {
      name: 'George Revesz',
      avatar: '/Avatars/George.png',
      location: 'Heidelberg',
      email: 'not gonna tell you',
      phoneNumber: 'not gonna tell you',
      responsabilities: [],
      specializations: [],
      role: 'Product Owner',
    },
    {
      name: 'Brian Keenan',
      avatar: '/Avatars/Brian-Keenan.png',
      location: 'Barcelona',
      email: 'brian.keenan@sap.com',
      phoneNumber: '+44 94567397',
      responsabilities: ['responsabilities'],
      specializations: ['Dragon Slayer', 'Water Bender'],
      role: 'Full Stack Wizard',
    },

    {
      name: 'Carlos Delgado',
      avatar: '/Avatars/Carlos Delgado.jpg',
      location: 'Barcelona',
      email: 'carlos.delgado02@will.com',
      phoneNumber: '+34 2394572',
      responsabilities: ['responsabilities'],
      specializations: ['Big Datanalytics', 'Visionaire'],
      role: 'Product Owner',
    },
    {
      name: 'Gamze Kaya-Atilgan',
      avatar: '/Avatars/Gamze.png',
      location: 'Ill be back',
      email: 'universal.soldier@ssapito.com',
      phoneNumber: 'phone number',
      responsabilities: ['responsabilities'],
      specializations: ['Destroyer'],
      role: 'Product Owner',
    },
    {
      name: 'Maria Angeles Sanchez',
      avatar: '/Avatars/Maria-Angeles.png',
      location: 'Ill be back',
      email: 'universal.soldier@ssapito.com',
      phoneNumber: 'phone number',
      responsabilities: ['responsabilities'],
      specializations: ['Destroyer'],
      role: 'Business Analyst',
    },
  ],
  developers: [
    {
      name: 'Rafael Lopez',
      avatar: '/Avatars/Rafael-Lopez.png',
      location: 'BcnCity',
      email: 'churras_quito@quitoquito.com',
      phoneNumber: '+34 9423579287',
      responsabilities: ['responsabilities'],
      specializations: ['BBQ Master', 'Fastest hand in west'],
      role: 'Full Stack Master Race',
    },
    {
      name: 'Noche de Sergelo',
      avatar: '/Avatars/Alberto-Delgado.jpeg',
      location: 'Paradise City',
      email: 'nocheDeSergel@night.com',
      phoneNumber: '2398457',
      responsabilities: ['responsabilities'],
      specializations: ['Sergels Night'],
      role: 'Backend Developer',
    },
    {
      name: 'Cipriano Sanchez',
      avatar: '/Avatars/Cipriano-Sanchez.png',
      location: 'Ill be back',
      email: 'universal.soldier@ssapito.com',
      phoneNumber: 'phone number',
      responsabilities: ['responsabilities'],
      specializations: ['Destroyer'],
      role: 'Backend Developer',
    },
    {
      name: 'Guillermo Lopez',
      avatar: '/Avatars/Guillermo-Lopez.png',
      location: 'Ill be back',
      email: 'universal.soldier@ssapito.com',
      phoneNumber: 'phone number',
      responsabilities: ['responsabilities'],
      specializations: ['Destroyer'],
      role: 'Data Citizen',
    },
    {
      name: 'Padmapriya Kanniyan',
      avatar: '/Avatars/Priya.png',
      location: 'Ill be back',
      email: 'universal.soldier@ssapito.com',
      phoneNumber: 'phone number',
      responsabilities: ['responsabilities'],
      specializations: ['Destroyer'],
      role: 'Cloud Engineer',
    },
    {
      name: 'Sachin Baral Ramesh',
      avatar: '/Avatars/Sachin.png',
      location: 'Ill be back',
      email: 'universal.soldier@ssapito.com',
      phoneNumber: 'phone number',
      responsabilities: ['responsabilities'],
      specializations: ['Destroyer'],
      role: 'Yellow Sonic',
    },
    {
      name: 'Vishal Pokarne',
      avatar: '/Avatars/Vishal.png',
      location: 'Germany',
      email: 'vishal.pokarne@sap.com',
      phoneNumber: 'random phone number',
      responsabilities: [],
      specializations: [],
      role: 'Magician',
    },
  ],
  designers: [
    {
      name: 'Sagar the Wizard',
      avatar: '/Avatars/Sagar.png',
      location: 'MiddleSAP',
      email: 'wizard@theWhite.com',
      phoneNumber: '238749',
      responsabilities: ['responsabilities'],
      specializations: ['GOD', 'Creates things from nothing'],
      role: 'Beautify stuff',
    },
    {
      name: 'Lin  Wan',
      avatar: '/Avatars/Lin.png',
      location: 'Rot',
      email: 'Not gonna tell you',
      phoneNumber: 'none gonna tell ay',
      responsabilities: [],
      specializations: [],
      role: 'UX Designer',
    },
  ],
};
