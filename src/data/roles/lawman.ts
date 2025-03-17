import { RoleAbility } from '../../types/types';

export const lawman: RoleAbility = {
  roleName: 'Backup',
  roleDescription: 'Cops. Maximum lawmen on mean 21st century streets.',
  roleAbilities: [
    {
      name: 'Combat Number',
      description:
        'A Skill Base used for both offense and defense. This number combines both STAT and Skill for them. You will add a d10 roll to this value whenever attacking with their carried weapons or equipment or defending. Backup cannot dodge bullets',
    },
    {
      name: 'SP',
      description: 'The stopping power of the armor on both their Body and Head location',
    },
    {
      name: 'HP',
      description: 'The amount of Hit Points that each member of the backup has',
    },
    {
      name: 'Move & Body',
      description:
        "The backup's MOVE and BODY STAT, important for movement and for some effects that reference the target's MOVE or BODY (like Death Saves)",
    },
    {
      name: 'Backup',
      description:
        'When in danger, you can call on Backup from a group of your Backup Rank or lower. As an Action, you attempt to roll equal or lower than your Backup Rank on a d10 to get someone to respond to your call. If you abuse this, your Boss will throw you off the force or fine you as they see fit. After someone responds to your call, you roll a d6 to find out in how many Rounds your backup will arrive on the scene. If you roll a 6 on this roll, instead of your typical backup, the backup that arrives will be of the next highest level of backup, unless you are Rank 10, in which case two separate backup groups will arrive. If nobody responds to your call, you can always try your backup call again next Turn.',
    },
  ],
  levels: {
    '1': {
      'Combat Number': 8,
      SP: 7,
      HP: 20,
      'Move & Body': 4,
      backup: {
        description:
          'Corporate Security. Four local renta-cops on the scene, arriving on foot. They carry Heavy Pistols and wear Kevlar®.',
      },
    },
    '3': {
      'Combat Number': 10,
      SP: 7,
      HP: 25,
      'Move & Body': 5,
      backup: {
        description:
          'Local Beat Cops. Four local cops on the beat. They arrive in two Compact Groundcars. They carry Heavy Pistols and are armored in Kevlar®.',
      },
    },
    '5': {
      'Combat Number': 14,
      SP: 13,
      HP: 35,
      'Move & Body': 4,
      backup: {
        description:
          'Sheriff\'s Department. Two local "County Mounties" patrolling the exurbs and the highways around the City. They will arrive in a High Performance Groundcar, armed with Heavy Pistols and Assault Rifles. Armored in Heavy Armorjack.',
      },
    },
    '8': {
      'Combat Number': 16,
      SP: 15,
      HP: 50,
      'Move & Body': 6,
      backup: {
        description:
          'Recovery Zone Marshal. Like the marshals of the Old West, these are lone Lawmen who patrol the Recovery Zones and new cities. One arrives on a Superbike, carrying a Very Heavy Pistol, Assault Rifle, Grenade Launcher, and wearing Flak Armor.',
      },
    },
    '9': {
      'Combat Number': 15,
      SP: 18,
      HP: 35,
      'Move & Body': 4,
      backup: {
        description:
          'C-SWAT. Two heavy hitters from the Psycho Squad. They carry assault rifles and rocket launchers, wearing Metalgear®. Will arrive from the air in an AV-4.',
      },
    },
    '10': {
      'Combat Number': 14,
      SP: 11,
      HP: 35,
      'Move & Body': 6,
      backup: {
        description:
          'National Law Enforcement/Interpol/FBI/Netwatch. These are serious hitters, operating under the control of national governments or international law enforcement groups. They travel in pairs, will arrive in an AV-4, and are outfitted with Very Heavy Pistols, Assault Rifles, in Light Armorjack. Unlike all other forms of Backup, these serious hitters stick around after the conflict ends and assist in investigating the scene. While they will not travel with the Crew on a day-to-day basis, after the first time they are called the same 2 serious hitters will always respond to calls for backup connected to the initial call until the "case" is closed, or they fall in the line of duty. Additionally, they can use their Combat Number for these Skills: Accounting, Acting, Conceal/Reveal Object, Criminology, Cryptography, Deduction, Education, Forgery, Interrogation, Paramedic, Perception, Personal Grooming, Resist Torture/Drugs, Stealth, and Tracking.',
      },
    },
  },
};
