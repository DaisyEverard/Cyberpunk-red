import { RoleAbility } from '../../types/types';

export const exec: RoleAbility = {
  roleDescription: 'Slick business raiders and multi-millionaires',
  roleName: 'Teamwork',
  roleAbilities: [
    {
      name: 'Teamwork',
      description:
        'Just like a real corporate executive, the Exec builds a team whose members help them accomplish their goals, whether legal or not, morale permitting. Team members have a visible job description (like secretary or driver) but also have a covert roles (such as Netrunner, bodyguard, or assassin). Plus they get free housing and nice set of clothes!',
    },
  ],
  levels: {
    '1': {
      'Signing Bonus':
        'A suit comprised of a Businesswear Jacket, Top, Bottom, and Footwear. These cannot be re-sold without raising suspicion',
    },
    '2': {
      'Signing Bonus':
        'A suit comprised of a Businesswear Jacket, Top, Bottom, and Footwear. These cannot be re-sold without raising suspicion',
      'Housing Bonus':
        'Corporate Housing: A corporate Conapt. No rent of fees paid as long as they are a memeber of the corporation. If the Exec leaves to join another Corporation, they will extend to them the same offer, and even pay to move all their stuff to the new apartment',
    },
    '6': {
      'Signing Bonus':
        'A suit comprised of a Businesswear Jacket, Top, Bottom, and Footwear. These cannot be re-sold without raising suspicion',
      'Housing Bonus':
        'Corporate Housing: A corporate Conapt. No rent of fees paid as long as they are a memeber of the corporation. If the Exec leaves to join another Corporation, they will extend to them the same offer, and even pay to move all their stuff to the new apartment',
      'Corporate Health Insurance':
        'The Exec is given Trauma Team Silver coverage, paid for monthly by their Corporation. If the Exec leaves to join another Corporation, they will extend to them the same offer',
    },
    '7': {
      'Signing Bonus':
        'A suit comprised of a Businesswear Jacket, Top, Bottom, and Footwear. These cannot be re-sold without raising suspicion',
      'Housing Bonus': "The Exec's corporate housing is improved to a Beaverville House in the Executive Zone",
      'Corporate Health Insurance':
        'The Exec is given Trauma Team Silver coverage, paid for monthly by their Corporation. If the Exec leaves to join another Corporation, they will extend to them the same offer',
    },
    '8': {
      'Signing Bonus':
        'A suit comprised of a Businesswear Jacket, Top, Bottom, and Footwear. These cannot be re-sold without raising suspicion',
      'Housing Bonus': "The Exec's corporate housing is improved to a Beaverville House in the Executive Zone",
      'Corporate Health Insurance': 'The Corporation upgrades their coverage to Trauma Team Executive.',
    },
    '10': {
      'Signing Bonus':
        'A suit comprised of a Businesswear Jacket, Top, Bottom, and Footwear. These cannot be re-sold without raising suspicion',
      'Housing Bonus':
        "The Exec's corporate housing is improved dramatically to a Beaverville McMansion in the Executive Zone or a Luxury Penthouse in the Corporate Zone",
      'Corporate Health Insurance': 'The Corporation upgrades their coverage to Trauma Team Executive.',
    },
  },
};
