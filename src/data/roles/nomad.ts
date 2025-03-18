import { RoleAbilities } from '../../types/types';

export const nomad: RoleAbilities = {
  roleName: 'Moto',
  roleDescription: 'Road warriors and Gypsies who roam the highways',
  roleAbilities: [
    {
      name: 'Nomad Vehicle Familiarity',
      description:
        "Being part of a Nomad Family means spending your life in the driver's seat and under the hood, improving your driving abilities and vehicle knowledge enough to get by on familiarity alone or with training to pull off impressive feats with ease. A Nomad adds their Moto Rank to any Drive Land Vehicle, Pilot Air Vehicle, Pilot Sea Vehicle, Air Vehicle Tech, Land Vehicle Tech, or Sea Vehicle Tech Skill Check they make.",
    },
    {
      name: 'Family Motorpool',
      description:
        "Whenever a Nomad increases their Role Ability Rank, they have the option of: 1. Either adding a stock vehicle (with minimum specs) of their Moto Rank or lower to the pool of vehicles they have permission to use from the Family Motorpool. 2. upgrading one of the Nomad's already permitted Family Vehicles with a single upgrade of their Moto Rank or lower. A Nomad can only have one of their Family Vehicles out at a time. A Nomad can call one of their Family to get their current Family Vehicle swapped out with another of their loaned Family Vehicles, and, assuming their Family is close by, the vehicle can be swapped out the following morning. If destroyed, the Family will fully repair any Family Vehicle for the Nomad, but it will take a week's time. The Nomad will also be expected to pay 500eb for the service. Even Family Heads pay this because it's a way of saving face for damaging Family property. It might be waived if you are broke, but your reputation would suffer. Daily repairs like bullet removal are the Nomad's responsibility. Upon attaining the 10th Rank in their Role Ability, a Nomad is promoted to a leadership position in their Family, with all the responsibility that entails. While leading by example, such a Nomad can have all their Family Vehicles out at a time. Any future Family Vehicles they wish to purchase are bought at market price, and any future upgrades they desire can be bought at 1,000eb a piece.",
    },
  ],
  levels: {
    '1': {
      'Family Motorpool ': 'Compact Groundcar, Gyrocopter, Jetski, Roadbike',
    },
    '5': {
      'Family Motorpool ':
        'Compact Groundcar, Gyrocopter, Jetski, Roadbike, Helicopter, High Performance Groundcar, Speedboat',
    },
    '7': {
      'Family Motorpool ':
        'Compact Groundcar, Gyrocopter, Jetski, Roadbike, Helicopter, High Performance Groundcar, Speedboat, AV-4, Cabin Cruiser, Superbike',
    },
    '9': {
      'Family Motorpool ':
        'Compact Groundcar, Gyrocopter, Jetski, Roadbike, Helicopter, High Performance Groundcar, Speedboat, AV-4, Cabin Cruiser, Superbike, Aerozep, AV-9, Super Groundcar, Yacht',
    },
  },
};
