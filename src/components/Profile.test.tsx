import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { EffectsContext, HPContext, RoleContext, StatsContext } from '../App';
import { Effects, Stats } from '../types/types';
import { calculateHPMax } from '../utils/commonMethods';
import Profile from './Profile';

const DEFAULT_MAX_HP = 35;
const DEFAULT_STATS = { BODY: 5, WILL: 4 };
const DEFAULT_EFFECTS = {
  'seriously wounded': { active: false },
  'mortally wounded': { active: false },
};
const DEFAULT_ROLE = 'Medtech';

const renderProfile = (
  stats: Stats = DEFAULT_STATS,
  HP: number = DEFAULT_MAX_HP,
  currentEffects: Effects = DEFAULT_EFFECTS,
  role: string = DEFAULT_ROLE,
) => {
  const setCurrentEffects = vi.fn();
  const setHP = vi.fn();
  const setStats = vi.fn();
  const setRole = vi.fn();

  const { rerender, debug } = render(
    <StatsContext.Provider value={{ stats, setStats }}>
      <HPContext.Provider value={{ HP, setHP }}>
        <EffectsContext.Provider value={{ currentEffects, setCurrentEffects }}>
          <RoleContext.Provider value={{ role, setRole }}>
            <Profile />
          </RoleContext.Provider>
        </EffectsContext.Provider>
      </HPContext.Provider>
    </StatsContext.Provider>,
  );

  return { rerender, debug, setHP };
};

// const healButton = await screen.findByText('HEAL');
// const HPDisplay = await screen.findByTestId('HP-display');
// const HPInput = (await screen.findByTestId('HP-input')) as HTMLInputElement;

describe('HP Adjustment', async () => {
  it('renders with correct HP display', async () => {
    const stats = DEFAULT_STATS;
    const startingHP = 29;
    renderProfile(DEFAULT_STATS, startingHP);

    const HPDisplay = await screen.findByTestId('HP-display');
    // Because i set this default HP in renderProfile, this doesn't really test anything
    // But it does pass :D
    const expectedMaxHP = calculateHPMax(stats);

    const expectedHPDisplay = `${startingHP} / ${expectedMaxHP}`;
    const actualHPDisplay = HPDisplay.innerHTML;

    expect(actualHPDisplay).toBe(expectedHPDisplay);
  });

  it('heals one hp if input is empty', async () => {
    const startingHP = 30;
    const { setHP } = renderProfile(undefined, startingHP);

    const healButton = await screen.findByText('HEAL');
    const HPDisplay = await screen.findByTestId('HP-display');
    const HPInput = (await screen.findByTestId('HP-input')) as HTMLInputElement;

    const initialHP = parseInt(HPDisplay.innerHTML.split(' / ')[0]);
    expect(initialHP).toBe(30);
    HPInput.value = '';

    fireEvent.click(healButton);

    const expectedHP = initialHP + 1;

    expect(setHP).toHaveBeenCalledWith(expectedHP);
  });
  it('damages one hp if input is empty', async () => {
    const { setHP } = renderProfile();

    const damageButton = await screen.findByText('DAMAGE');
    const HPDisplay = await screen.findByTestId('HP-display');
    const HPInput = (await screen.findByTestId('HP-input')) as HTMLInputElement;

    const initialHP = parseInt(HPDisplay.innerHTML.split(' / ')[0]);
    expect(initialHP).toBe(35);

    HPInput.value = '';
    fireEvent.click(damageButton);
    const expectedHP = initialHP - 1;

    expect(setHP).toHaveBeenCalledWith(expectedHP);
  });
});

//  it('damages one hp if input is empty', async () => {});
//  it('heals any hp number in input', async () => {});
//  it('damages any hp number in input', async () => {});
//  it('does not heal above max hp', async () => {});
//  it('does not damage hp below 0', async () => {});
