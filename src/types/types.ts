import { Role } from './Role';

export type EffectType = Record<string, boolean>;
export type EffectsType = Record<string, EffectType>;

export type ModalDisplays = Record<string, string>;

export type SkillType = Record<string, any>;
export type SkillsType = Record<string, SkillType>;

export type StatsType = Record<string, number>;

export type CharacterType = {
  name: string;
  role: Role;
  stats: StatsType;
  HP: number;
  humanity: number;
  currentSkills: SkillsType;
  currentEffects: EffectsType;
};

export type RoleAbility = {
  roleName: string;
  roleDescription: string;
  roleAbilities: Object[];
  levels: Object;
};
