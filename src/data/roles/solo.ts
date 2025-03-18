import { RoleAbilities } from '../../types/types';

export const solo: RoleAbilities = {
  roleName: 'Combat Awareness',
  roleDescription:
    'With Combat Awareness, a Solo can call up their training to have an enhanced situational awareness of the battlefield. When combat begins (before Initiative is rolled), anytime outside of combat, or in combat with an Action, a Solo may divide the total number of points they have in their Combat Awareness Role Ability among 6 different abilities. If a Solo chooses to not change their point assignments, their previous ones persist. Activating some abilities will cost the Solo more points than others',
  roleAbilities: [
    {
      name: 'Damage Deflection',
      description: 'For every 2 point assigned to this ability, reduce the first damage you take in a round by 1',
    },
    {
      name: 'Fumble Recovery',
      description:
        'For 4 points, you ignore critical failures (1s) you roll while attacking. These rolls are still treated as 1, however',
    },
    {
      name: 'Initiative Reaction',
      description:
        'Your reflexes are trained to respond instantly, without thinking, at the start of a firefight. Each point adds a +1 to Initiative rolls made',
    },
    {
      name: 'Precision Attack',
      description: 'For every 3 points assigned to this ability, add 1 to any attacks made',
    },
    {
      name: 'Spot Weakness',
      description:
        'You have been trained to look for weak spots to damage even heavily armored targets. Each point adds a +1 to the damage (before armor) of your first successful Attack in a Round',
    },
    {
      name: 'Threat Detection',
      description: 'You have enhanced situational awareness. Each point adds a +1 to any Perception Checks made',
    },
  ],
  levels: {},
};
