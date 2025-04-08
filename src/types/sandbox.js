const convertAPIOptionsToOptions = options => {
  const optionsRecord = {};

  for (const i in options) {
    const index = parseInt(i);
    const skillOption = options[index];
    optionsRecord[index + 1] = skillOption;
  }

  return optionsRecord;
};

const convertAPISkillsToSkills = skills => {
  const skillsRecord = {};

  for (const index in skills) {
    const i = parseInt(index);
    const name = skills[i]['name'];

    const newSkill = {
      level: skills[i].level,
      has_options: skills[i].has_options,
      stat_type: skills[i].stat_type,
      options: convertAPIOptionsToOptions(skills[i].options),
    };

    skillsRecord[name] = newSkill;
  }

  return skillsRecord;
};

const input = [
  {
    name: 'Gamble',
    level: 0,
    has_options: false,
    stat_type: 'INT',
    options: null,
  },
  {
    name: 'Language',
    level: 2,
    has_options: true,
    stat_type: 'INT',
    options: [
      {
        name: 'Streetslang',
        level: 2,
      },
      {
        name: '(Cultural Origin Option 1)',
        level: 0,
      },
      {
        name: '(Cultural Origin Option 2)',
        level: 0,
      },
      {
        name: '(Cultural Origin Option 3)',
        level: 0,
      },
      {
        name: '(Cultural Origin Option 4)',
        level: 0,
      },
      {
        name: '',
        level: 0,
      },
    ],
  },
];

const result = convertAPISkillsToSkills(input);
for (const name in result) {
  console.log(result[name]['options']);
}
