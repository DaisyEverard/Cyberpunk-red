import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { EffectsContext, HPContext, RoleContext, StatsContext } from '../App';
import { Effects, Stats } from '../types/types';
import { calculateHPMax } from '../utils/commonMethods';
import Profile from './Profile';

const renderProfile = (
  stats: Stats = { BODY: 5, WILL: 4 },
  HP: number = 35, //max HP for default stats
  currentEffects: Effects = {
    'seriously wounded': { active: false },
    'mortally wounded': { active: false },
  },
  role: string = 'Medtech',
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

  return { render, debug, setHP };
};

// const healButton = await screen.findByText('HEAL');
// const HPDisplay = await screen.findByTestId('HP-display');
// const HPInput = (await screen.findByTestId('HP-input')) as HTMLInputElement;

describe('HP Adjustment', async () => {
  it('renders with correct HP display', async () => {
    const stats = { BODY: 5, WILL: 4 };
    const startingHP = 29;
    renderProfile(stats, startingHP);

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
    HPInput.value = '';

    fireEvent.click(healButton);

    const actualHP = parseInt(HPDisplay.innerHTML.split(' / ')[0]);
    const expectedHP = initialHP + 1;

    expect(actualHP).toBe(expectedHP);
    expect(setHP).toHaveBeenCalledWith(expectedHP);
  });
});

//  it('damages one hp if input is empty', async () => {});
//  it('heals any hp number in input', async () => {});
//  it('damages any hp number in input', async () => {});
//  it('does not heal above max hp', async () => {});
//  it('does not damage hp below 0', async () => {});
