import { Role } from './Role';

export type EffectType = Record<string, boolean>;
export type EffectsType = Record<string, EffectType>;

export type ModalDisplays = Record<string, string>;

export type SkillOption = { name: string; level: number };
export type SkillType = {
  level: number;
  has_options: boolean;
  stat_type: string;
  options: Record<string, SkillOption>;
};
export type SkillsType = Record<string, SkillType>;

export type StatsType = Record<string, number>;

export type CharacterType = {
  id?: string;
  name: string;
  role: Role;
  stats: StatsType;
  HP: number;
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
