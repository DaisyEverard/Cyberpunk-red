import { RoleAbilities } from '../../types/types';

export const netrunner: RoleAbilities = {
  roleName: 'Interface',
  roleDescription: 'Cybernetic computer hackers',
  roleAbilities: [
    {
      name: 'Interface',
      description:
        'Interface is what allows the Netrunner to Netrun—to interface with electronic mind-modems (called cyberdecks) to control computers, electronics, and associated programming. The Interface Role Ability also gives the Netrunner access to a wide suite of Abilities related to computer hacking and system control.',
    },
  ],
  levels: {
    '1': {
      interface: '2 NET actions per turn',
    },
    '4': {
      interface: '3 NET actions per turn',
    },
    '7': {
      interface: '4 NET actions per turn',
    },
    '10': {
      interface: '5 NET actions per turn',
    },
  },
};
