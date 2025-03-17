import { RoleAbility } from '../../types/types';

export const media: RoleAbility = {
  roleName: 'Credibility',
  roleDescription: 'Newsmen and reporters who go to the wall for the truth',
  roleAbilities: [
    {
      name: 'Access/Sources',
      description:
        'Access/Sources represents those you can reasonably get in touch with/interview or otherwise gain information from',
    },
    {
      name: 'Audience',
      description: 'Audience is how many people your stories or exposés can reach',
    },
    {
      name: 'Believability',
      description:
        'Believability is how well your story or exposé goes over with your audience. The higher your Credibility, the more likely people will believe something you have written or broadcast. You roll 1d10 based on your Believability when you publish a story and any time you want to find out whether an individual (or a group of individuals) believe your story. If your story contains even a single piece of verifiable evidence that is easily understood by the masses, the chance your audience will believe it is 1 higher. If it contains more than 4 distinct verifiable pieces of hard evidence, the chance your audience will believe it is 2 higher. These two bonuses stack with each other. LUCK can never be spent on a Believability Check',
    },
    {
      name: 'Impact',
      description:
        'Impact is how much change any individual story or revelation you publish has on your audience. For example, a story about an unfair economic practice at the incremental level might just get a few local bosses to change their practices. But at higher levels of Credibility, your exposé may cause entire Megacorps to fall. Your GM will handle this. Once you publish a story/scoop you cannot publish another story on the same exact topic unless you have new information to add to the conversation',
    },
  ],
  levels: {
    '1': {
      'Access/Sources': 'Local honcho, gang lord, local neighborhood leadership',
      Audience: 'Immediate neighborhood.',
      Believability: '2 out of 10 chance the audience buys it.',
      Impact:
        'Change created by a story/scoop is small, incremental. Small-time bad guys are scared and may change their ways a little.',
    },
    '3': {
      'Access/Sources': 'City gang honcho, minor politician, Corp Exec, well known person in the neighborhood',
      Audience: "You're well known as a contributor on the local screamsheet or Data Pool.",
      Believability: '3 out of 10 chance the audience buys it.',
      Impact:
        'Change created by a story/scoop has a direct effect; local small-time bad guys get arrested or thrown out of power, justice gets served.',
    },
    '5': {
      'Access/Sources': 'Major City player, City politico, local celebrity',
      Audience: "Your stuff goes Citywide. You're a regular columnist or contributor to local screamsheets or TV.",
      Believability: '4 out of 10 chance the audience buys it.',
      Impact:
        'Change created by a story/scoop changes things all over the City. Higher-level bad guys may be jailed or thrown out of power. Local laws may even get passed.',
    },
    '7': {
      'Access/Sources': 'Local Corp president, mayor or City manager, City celebrity',
      Audience: 'Your stuff goes Statewide. You are a minor celeb in your own right.',
      Believability: '5 out of 10 chance the audience buys it.',
      Impact:
        'Change created by a story/scoop can change things all over several cities. Mid-level corporations or governments may be thrown out of power. Laws may be passed that affect people over several cities.',
    },
    '9': {
      'Access/Sources': 'Divisional Corp head, State politico, well known celebrity',
      Audience:
        "You are known by many across the country, but not by everyone. If they've seen you, chances are it is on a national newsfeed.",
      Believability: '6 out of 10 chance the audience buys it.',
      Impact:
        'Change created by a story/scoop can change things all over a major area like a whole nation. Large corporations or local governments may be toppled. Laws may be passed that affect people over a national area.',
    },
    '10': {
      'Access/Sources': 'Major world leader, major Corporation head, world-famous celebrity',
      Audience:
        'You are known worldwide. People stop you for autographs and people in high places use you to leak important stuff.',
      Believability: '7 out of 10 chance the audience buys it.',
      Impact:
        'Change created by a story/scoop can change things all over the world. Megacorps and powerful governments may fall or be overthrown. International laws may be established. Change can affect millions.',
    },
  },
};
