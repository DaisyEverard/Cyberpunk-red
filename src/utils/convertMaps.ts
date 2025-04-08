import { APIStatsType, StatsType,SkillType, EffectsType, APIEffectsType, APIEffect, EffectType, SkillOptions, APISkillOptions, SkillOption, SkillsType, APISkillsType, APISkillType } from '../types/types';

const convertStatsToAPIStats = (stats: StatsType): APIStatsType => {
    // Input: {"INT": 2,"WILL": 2,}
    // Output: [{name: "INT", level: 2}, {name: "WILL", level: 2}]
  
    const apiStatsList = [];
    for (const [key, value] of Object.entries(stats)) {
      const item = { name: key, level: value };
      apiStatsList.push(item);
    }

    return apiStatsList
  };
  
  const convertAPIStatsToStats = (stats: APIStatsType): StatsType => {
    // Input: [{name: "INT", level: 2}, {name: "WILL", level: 2}]
    // Output: {"INT": 2,"WILL": 2,}
    const statsRecord = <Record<string, number>>{};
  
    for (const i in stats) {
      statsRecord[stats[i].name] = stats[i].level;
    }

    return statsRecord;
  };

  const convertEffectsToAPIEffects = (effects: EffectsType): APIEffectsType => {
    const apiEffectsList: APIEffectsType = [];
    for (const [key, value] of Object.entries(effects)) {
      const item: APIEffect = { name: key, active: value.active };
      apiEffectsList.push(item);
    }

    return apiEffectsList
  }

  const convertAPIEffectsToEffects = (effects: APIEffectsType): EffectsType => {
    const effectsRecord = <Record<string, EffectType>>{};
  
    for (const i in effects) {
        const newEffect: EffectType = {active: effects[i].active} 
        effectsRecord[effects[i].name] =newEffect;
    }

    return effectsRecord;
  };

  const convertOptionsToAPIOptions = (options: SkillOptions): APISkillOptions => {
    const optionsList: APISkillOptions = [];

    for (const [_, value] of Object.entries(options)) {
        const item: SkillOption = value;
        optionsList.push(item);
    }

    return optionsList
  }

  const convertAPIOptionsToOptions = (options: APISkillOptions) => {
    const optionsRecord = <Record<string, SkillOption>>{};

    for (const i in options) {
        const index = parseInt(i)
        const skillOption = options[index];
        optionsRecord[index + 1] = skillOption;
    }

    return optionsRecord
  }

  const convertSkillsToAPISkills = (skills: SkillsType): APISkillsType => {
    const skillsList: APISkillsType = [];

    for (const [key, value] of Object.entries(skills)) {
        // key = name
        // value needs options conversion

        const item: APISkillType = {
            name: key,
            level: value.level,
            has_options: value.has_options,
            stat_type:value.stat_type,
            options: convertOptionsToAPIOptions(value.options)
        }
        skillsList.push(item)
    }
    return skillsList
  }

  const convertAPISkillsToSkills = (skills: APISkillsType): SkillsType => {
    const skillsRecord = <SkillsType>{}

    for (const index in skills) {
        const i = parseInt(index)
        const name = skills[i]['name']

        const newSkill: SkillType = {
            level: skills[i].level,
            has_options: skills[i].has_options,
            stat_type: skills[i].stat_type,
            options: convertAPIOptionsToOptions(skills[i].options)
        }

        skillsRecord[name] = newSkill 
    }

    return skillsRecord
  }
 
  export {convertAPIStatsToStats,
        convertStatsToAPIStats, 
        convertEffectsToAPIEffects, 
        convertAPIEffectsToEffects,
        convertOptionsToAPIOptions, 
        convertAPIOptionsToOptions,
        convertSkillsToAPISkills,
        convertAPISkillsToSkills
}