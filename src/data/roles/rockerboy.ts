import { RoleAbility } from '../../types/types';

export const rockerboy: RoleAbility = {
  roleName: 'Charismatic Impact',
  roleDescription:
    "A Rockerboy can only use their Charismatic Impact Role Ability on Fans. Assuming you aren't in combat, you can make people who aren't currently fans into fans (unless they actively dislike you) by rolling Charismatic Impact + 1d10 vs. a DV8 for a Single Person, DV10 for a Small Group of up to 6, or DV12 for a Huge Group. If they succeed, the fan or group of fans puts their best effort toward the favor the Rockerboy asked for. If they fail, the Rockerboy can't ask for the same favor again from those fans for a week",
  roleAbilities: [
    {
      name: 'Venues you can play',
      description: 'The best type of venue your Rockerboy can hope to play under most circumstances',
    },
    {
      name: 'Impact on a single fan',
      description:
        'The impact your Rockerboy can have on a single fan by beating a DV8 on their Charismatic Impact Check',
    },
    {
      name: 'Impact on a small group of fans',
      description:
        'The impact your Rockerboy can have on a group of up to six fans by beating a DV10 on their Charismatic Impact Check',
    },
    {
      name: 'The impact on a large group of fans',
      description:
        'The impact your Rockerboy can have on a large group of fans gathered to see them by beating a DV12 on their Charismatic Impact Check',
    },
  ],
  levels: {
    '1': {
      'Venues you can play': 'Small local clubs',
      'Impact on a single fan':
        'Rockerboy can convince fan to do a small favor for the Rockerboy; buy the Rockerboy a drink or meal, give them a lift somewhere.',
      'Impact on a small group of fans':
        'Rockerboy has a group of up to 6 fans to ask for autographs and other personal totems; fans will stop Rockerboy in streets to befriend them.',
      'Impact on a huge group of fans': "You're kidding, right? You don't have huge groups of fans yet",
    },
    '3': {
      'Venues you can play': 'Well known clubs',
      'Impact on a single fan':
        'Rockerboy can convince fan to do a major favor for the Rockerboy; go to bed with the Rockerboy, put a good word in for them, etc',
      'Impact on a small group of fans':
        'Convince a group of up to 6 fans to regularly hang out with Rockerboy; provide booze, drugs, or other party favors to the Rockerboy',
      'Impact on a huge group of fans': 'Rockerboy has a strong local following; fans buy their recordings and merch',
    },
    '5': {
      'Venues you can play': 'Large, important clubs',
      'Impact on a single fan':
        'Rockerboy can convince fan to commit a minor crime for Rockerboy; shoplift, help out in a fight',
      'Impact on a small group of fans':
        'Convince a group of up to 6 fans to act as the Rockerboy\'s personal "posse"; constantly hang out with them, do Rockerboy favors, and provide things for their personal needs',
      'Impact on a huge group of fans':
        "Rockerboy's fans are all over the City, often in nearby cities. They are strongly loyal and will often do major favors for the Rockerboy in exchange for attention",
    },
    '7': {
      'Venues you can play': 'Small concert halls, local video feed',
      'Impact on a single fan': 'Fan is willing to risk their life for Rockerboy without question',
      'Impact on a small group of fans':
        'Convince a group of up to 6 fans to commit a minor crime for Rockerboy; shoplift, help in a fight',
      'Impact on a huge group of fans':
        "The Rockerboy's fans are rabidly loyal. They fight with rival fan groups, support strong fan information networks, will band together to help Rockerboy",
    },
    '9': {
      'Venues you can play': 'Large concert halls, national video feed',
      'Impact on a single fan':
        'Rockerboy can convince fan to commit major crime for Rockerboy; steal expensive item, beat someone up for Rockerboy',
      'Impact on a small group of fans':
        'Convince a group of up to 6 fans to commit a major crime for Rockerboy; steal expensive item, beat someone up',
      'Impact on a huge group of fans':
        "The Rockerboy's fans are basically a brainwashed, cult-like following; they will riot, destroy property, and even kill for the Rockerboy",
    },
    '10': {
      'Venues you can play': 'Huge stadiums or international video',
      'Impact on a single fan': 'Fan is willing to sacrifice self for Rockerboy without question',
      'Impact on a small group of fans':
        'Convince a group of up to 6 fans to risk their lives for the Rockerboy; to act as personal protection',
      'Impact on a huge group of fans':
        "The Rockerboy's fans are now a worldwide following with strong, cult-like attributes. They will do almost anything for the Rockerboy if asked; they are a private army based on the Rockerboy's charisma",
    },
  },
};
