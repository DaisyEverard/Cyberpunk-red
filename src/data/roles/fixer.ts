import { RoleAbility } from '../../types/types';

export const fixer: RoleAbility = {
  roleName: 'Operator',
  roleDescription: 'Deal makers, smugglers, organizers and information brokers.',
  roleAbilities: [
    {
      name: 'Contacts',
      description:
        'Contacts represents who the Fixer can reach out in order to source goods, favors, or information. The Fixer will still have to pay for these, of course',
    },
    {
      name: 'Reach',
      description:
        'Reach is the highest price category of items that a Fixer can always source, and if they can use their influence to gather other Fixers into creating a Night Market, which makes all price categories of items available to them for a short time',
    },
    {
      name: 'Haggle',
      description:
        'Haggle is the ability of the Fixer to strike a deal. When haggling with a person, you roll COOL + Trading Skill + Your Operator Rank + 1d10 against their COOL + Trading Skill + Their Operator Rank (if they are a Fixer) + 1d10. If you succeed, you can make 1 deal of your Operator Rank or lower. Only 1 Fixer deal can be made per transaction',
    },
    {
      name: 'Grease',
      description:
        "Grease represents the Fixer's ability to blend into the many cultures on and off The Street; ability to know the language, social codes, and status marks for each group or culture.",
    },
  ],
  levels: {
    '1': {
      Contacts: 'Local honcho, gang lord, local neighborhood leadership',
      Reach:
        'You can always find a place to source Cheap and Everyday items for your clients on a piece-bypiece basis, even if they are otherwise unavailable',
      Haggle: 'If successful, you can get 10% more or less than market price when buying or selling',
      Grease: 'You know the cultural ins-and-outs of your immediate neighborhood including all local gangs',
    },
    '3': {
      Contacts: 'City gang honcho, minor politician, Corp Exec, well known person in the neighborhood',
      Reach:
        'You can always find a place to source up to Expensive items for your clients on a piece by piece basis, even if they are otherwise unavailable',
      Haggle: 'If successful, when you buy 5 or more of the same item, you can get one more of that item for free',
      Grease:
        "You know how to get along well with at least 1 other culture in your area as well as gaining a single language you don't already know associated with that culture at Skill Level 4",
    },
    '5': {
      Contacts: 'Major City player, City politico, neighborhood celebrity',
      Reach:
        'Once per month, working with other Fixers of your rank, you can set up a Night Market. While at a Night Market that you have helped organize, you can always find a place to source up to Super Luxury items',
      Haggle: 'If successful, you can negotiate the pay per person for a Job up 20%',
      Grease:
        "You know how to get along perfectly with 2 additional cultures (3 in total) in your area as well as gaining a single language which you don't already know associated with each culture at Skill Level 4",
    },
    '7': {
      Contacts: 'Local Corp president, mayor or City manager, local celebrity',
      Reach:
        'You can always find a place to source up to Very Expensive items for your clients on a piece by piece basis, even if they are otherwise unavailable',
      Haggle:
        "If successful, when buying a Luxury or Super Luxury item, you can pay half now and half in one month. If you ever don't pay the second half on time, nobody will do this deal with you again",
      Grease:
        "You know how to blend in perfectly with 3 additional cultures (6 in total) in your area as well as a gaining single language which you don't already know associated with each culture at Skill Level 4",
    },
    '9': {
      Contacts: 'Divisional Corp head, state or City zone politico, well known celebrity',
      Reach:
        'You can always find a place to source up to Luxury items for your clients on a piece by piece basis, even if they are otherwise unavailable. When you set up a Night Market, you can choose to additionally set up a Midnight Market inside it, which gathers the leadership of the criminal underworld',
      Haggle: 'If successful, you can get 20% more or less than market price when buying or selling',
      Grease:
        'You know how to blend in perfectly with not only many cultures in your area, but also with Corporate and governmental agencies',
    },
    '10': {
      Contacts: 'Major world leader, major Corporation head, world-famous celebrity',
      Reach:
        'You can always find a place to source up to Super Luxury items for your clients on a piece by piece basis, even if they are otherwise unavailable',
      Haggle: 'If successful, you can negotiate to double the pay per person for a Dangerous Job',
      Grease:
        'You can blend in seamlessly with almost any group, including very specialized or "tight" groups such as secret societies, cults, or exclusive membership groups',
    },
  },
};
