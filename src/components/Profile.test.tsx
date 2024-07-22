import { PropsWithChildren } from 'react';

import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { EffectsContext, HPContext, StatsContext } from '../App';
import { Effects, Stats } from '../types/types';
import { calculateHPMax } from '../utils/commonMethods';
import Profile, { ProfileProps } from './Profile';

// Profile props = name, setName, role, setRole, healthPoints
const renderProfile = (
  stats: Stats = { BODY: 5, WILL: 4 },
  HP: number = 35,
  currentEffects: Effects = {
    'seriously wounded': { active: false },
    'mortally wounded': { active: false },
  },
) => {
  const setCurrentEffects = vi.fn();
  const setHP = vi.fn();
  const setStats = vi.fn();

  const props = {
    name: 'test name',
    setName: vi.fn(),
    role: 'test role',
    setRole: vi.fn(),
  };

  const { rerender, debug } = render(
    <StatsContext.Provider value={{ stats, setStats }}>
      <HPContext.Provider value={{ HP, setHP }}>
        <EffectsContext.Provider value={{ currentEffects, setCurrentEffects }}>
          <Profile {...props} />
        </EffectsContext.Provider>
      </HPContext.Provider>
    </StatsContext.Provider>,
  );

  return { rerender, debug };
};

// const healButton = await screen.findByText('HEAL');
// const HPDisplay = await screen.findByTestId('HP-display');
// const HPInput = (await screen.findByTestId('HP-input')) as HTMLInputElement;

describe('HP Adjustment', async () => {
  it('renders with correct HP display', async () => {
    const stats = { BODY: 5, WILL: 4 };
    renderProfile(stats);

    const HPDisplay = await screen.findByTestId('HP-display');
    // Because i set this default HP anyway, this doesn't really test anything
    // But it does pass :D
    const expectedMaxHP = calculateHPMax(stats);
    const expectedHP = expectedMaxHP;

    const expectedHPDisplay = `${expectedHP} / ${expectedMaxHP}`;
    const actualHPDisplay = HPDisplay.innerHTML;

    expect(actualHPDisplay).toBe(expectedHPDisplay);
  });

  it('heals one hp if input is empty', async () => {
    const { rerender } = renderProfile();

    const healButton = await screen.findByText('HEAL');
    const HPDisplay = await screen.findByTestId('HP-display');
    const HPInput = (await screen.findByTestId('HP-input')) as HTMLInputElement;

    const initialHPDisplayed = parseInt(HPDisplay.innerHTML.split(' / ')[0]);
    HPInput.value = '';

    fireEvent.click(healButton);

    const actualHPDisplay = parseInt(HPDisplay.innerHTML.split(' / ')[0]);
    const expectedHPDisplayed = initialHPDisplayed + 1;

    expect(actualHPDisplay).toBe(expectedHPDisplayed);
  });
});

//  it('damages one hp if input is empty', async () => {});
//  it('heals any hp number in input', async () => {});
//  it('damages any hp number in input', async () => {});
//  it('does not heal above max hp', async () => {});
//  it('does not damage hp below 0', async () => {});
