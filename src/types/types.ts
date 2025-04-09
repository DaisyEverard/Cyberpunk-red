import { Role } from './Role';

export type ModalDisplays = Record<string, string>;

export type SkillOption = { name: string; level: number };
export type SkillOptions = Record<string, SkillOption>;
export type SkillType = {
  level: number;
  has_options: boolean;
  stat_type: string;
  options: SkillOptions;
};
export type SkillsType = Record<string, SkillType>;

export type StatsType = Record<string, number>;

export type EffectType = Record<string, boolean>;
export type EffectsType = Record<string, EffectType>;

export type CharacterType = {
  id?: string;
  name: string;
  role: Role;
  stats: StatsType;
  hp: number;
  humanity: number;
  currentSkills: SkillsType;
  currentEffects: EffectsType;
};

export type RoleAbility = Record<string, string>;
export type RoleAbilities = {
  roleName: string;
  roleDescription: string;
  roleAbilities: RoleAbility[];
  levels: Object;
};

// BACKEND TYPES
export type Stat = { name: string; level: number };
export type APIStatsType = Stat[];

export type APIEffectsType = APIEffect[];
export type APIEffect = { name: string; active: boolean };

export type APISkillOptions = SkillOption[];
export type APISkillType = {
  name: string;
  level: number;
  has_options: boolean;
  stat_type: string;
  options: APISkillOptions;
};
export type APISkillsType = APISkillType[];

export type APICharacterType = {
  id?: string;
  name: string;
  role: Role;
  stats: APIStatsType;
  hp: number;
  humanity: number;
  currentSkills: APISkillsType;
  currentEffects: APIEffectsType;
};
