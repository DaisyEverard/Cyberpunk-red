import { RoleAbilities } from '../../types/types';

export const medtech: RoleAbilities = {
  roleName: 'Medicine',
  roleDescription:
    'Medtech\'s are the medical doctors. They take care of those human and those who have become more "machine" than human with their medical expertise and technical knowledge of cyberware implants.[1]',
  roleAbilities: [
    {
      name: 'Surgery',
      description:
        'For every point you allocate to Surgery, you gain 2 points in the Surgery Skill (up to a maximum of 10). The Surgery Skill is the TECH Skill used to treat the most severe Critical Injuries, as well as implant cyberware, and is only available to Medtechs through this Medicine Specialty.',
    },
    {
      name: 'Medical Tech (Pharmaceuticals)',
      description:
        "For every point you allocate to Medical Tech (Pharmaceuticals), you gain 1 point in the Medical Tech Skill (up to a maximum of 10). The Medical Tech Skill is the TECH Skill used to operate, understand, and repair (as other non-vehicle Tech Skills) medical machinery. This Skill is only available to Medtechs, and only through either this Medicine Specialty or Cryosystem Operation. You can only put a maximum of 5 points into this specialty. Each time you allocate a point into Pharmaceuticals you also gain access to one of the following pharmaceuticals, which your Character can synthesize by rolling a DV13 Medical Tech Check, wasting the materials used on a failure. A Medtech can make a number of doses from 200eb of materials equal to their Medical Tech Skill in 1 hour. You can't synthesize Street Drugs with Medical Tech (Pharmaceuticals). Applying a single dose of a drug to a target takes an Action. If the target is unwilling, the Medtech can use their Action to attempt to make a single Melee Weapon Attack with their Airhypo against the target, that administers a single dose to their target on a hit instead of dealing damage. A Character who is not a Medtech cannot administer Pharmaceuticals correctly. These aren't Street Drugs, they require training to get the medically correct proportions",
    },
    {
      name: 'Medical Tech (Cryosystem Operation)',
      description:
        'For every point you allocate to Medical Tech (Cryosystem Operation), you gain 1 point in the Medical Tech Skill (up to a maximum of 10). The Medical Tech Skill is the TECH Skill used to operate, understand, and repair (as other non-vehicle Tech Skills) medical machinery. This Skill is only available to Medtechs, and only through either this Medicine Specialty or Pharmaceuticals. You can only put a maximum of 5 points into this specialty. When you allocate points into Cryosystem Operation you also gain a benefit',
    },
  ],
  levels: {
    '1': {
      Surgery: '+2 to Surgery Skill',
      'Medical Tech (Pharmaceuticals)': '+1 to Medical Tech Skill, access to 1 Pharmaceutical',
      'Medical Tech (Cryosystem Operation)': 'You gain one Cryopump',
    },
    '2': {
      Surgery: '+4 to Surgery Skill',
      'Medical Tech (Pharmaceuticals)': '+2 to Medical Tech Skill, access to 2 Pharmaceutical',
      'Medical Tech (Cryosystem Operation)':
        'You become a Registered Cryotank Technician and gain unlimited 24/7 access to 1 Cryotank at a time at any cryotank facility operated by medical corporations or government agencies',
    },
    '3': {
      Surgery: '+6 to Surgery Skill',
      'Medical Tech (Pharmaceuticals)': '+3 to Medical Tech Skill, access to 3 Pharmaceutical',
      'Medical Tech (Cryosystem Operation)': 'You gain 1 Cryotank, installed in a room of your choosing.',
    },
    '4': {
      Surgery: '+8 to Surgery Skill',
      'Medical Tech (Pharmaceuticals)': '+4 to Medical Tech Skill, access to 4 Pharmaceutical',
      'Medical Tech (Cryosystem Operation)':
        'You gain 2 more Cryotanks that can fit in the same room as your first one and your Cryopump has 2 charges and its maximum carrying capacity increases to 2 people in stasis',
    },
    '5': {
      Surgery: '+10 to Surgery Skill',
      'Medical Tech (Pharmaceuticals)': '+5 to Medical Tech Skill, access to 5 Pharmaceutical',
      'Medical Tech (Cryosystem Operation)':
        'You gain 3 more Cryotanks that can fit in the same room as the first three and your Cryopump has 3 charges and its maximum carrying capacity increases to three people in stasis',
    },
  },
};
