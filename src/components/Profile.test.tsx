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

const getDomElements = async () => {
  const healButton = await screen.findByText('HEAL');
  const HPDisplay = await screen.findByTestId('HP-display');
  const HPInput = (await screen.findByTestId('HP-input')) as HTMLInputElement;
  const damageButton = await screen.findByText('DAMAGE');

  return { healButton, HPDisplay, HPInput, damageButton };
};

describe('HP Adjustment', async () => {
  it('heals one hp if input is empty', async () => {
    const startingHP = 30;
    const { setHP } = renderProfile(undefined, startingHP);

    const { healButton, HPDisplay, HPInput } = await getDomElements();

    const initialHP = parseInt(HPDisplay.innerHTML.split(' / ')[0]);
    expect(initialHP).toBe(30);
    HPInput.value = '';

    fireEvent.click(healButton);

    const expectedHP = initialHP + 1;

    expect(setHP).toHaveBeenCalledWith(expectedHP);
  });

  it('damages one hp if input is empty', async () => {
    const { setHP } = renderProfile();

    const { damageButton, HPDisplay, HPInput } = await getDomElements();

    const initialHP = parseInt(HPDisplay.innerHTML.split(' / ')[0]);
    expect(initialHP).toBe(35);

    HPInput.value = '';
    fireEvent.click(damageButton);
    const expectedHP = initialHP - 1;

    expect(setHP).toHaveBeenCalledWith(expectedHP);
  });

  it('heals any HP number in input', async () => {
    const startingHP = 20;
    const { setHP } = renderProfile(undefined, startingHP);

    const { healButton, HPDisplay, HPInput } = await getDomElements();

    const initialHP = parseInt(HPDisplay.innerHTML.split(' / ')[0]);
    expect(initialHP).toBe(20);
    HPInput.value = '7';

    fireEvent.click(healButton);

    const expectedHP = initialHP + 7;

    expect(setHP).toHaveBeenCalledWith(expectedHP);
  });

  it('damages any hp number in input', async () => {
    const { setHP } = renderProfile();

    const { damageButton, HPDisplay, HPInput } = await getDomElements();

    const initialHP = parseInt(HPDisplay.innerHTML.split(' / ')[0]);
    expect(initialHP).toBe(35);

    HPInput.value = '8';
    fireEvent.click(damageButton);
    const expectedHP = initialHP - 8;

    expect(setHP).toHaveBeenCalledWith(expectedHP);
  });

  it('does not heal above max hp', async () => {
    const { setHP } = renderProfile();

    const { healButton, HPDisplay, HPInput } = await getDomElements();

    const initialHP = parseInt(HPDisplay.innerHTML.split(' / ')[0]);
    expect(initialHP).toBe(35);
    HPInput.value = '';

    fireEvent.click(healButton);

    expect(setHP).toHaveBeenCalledTimes(0);
  });

  it('does not damage hp below 0', async () => {
    const startingHP = 0;
    const { setHP } = renderProfile(undefined, startingHP);

    const { damageButton, HPDisplay, HPInput } = await getDomElements();

    const initialHP = parseInt(HPDisplay.innerHTML.split(' / ')[0]);
    expect(initialHP).toBe(0);

    HPInput.value = '';
    fireEvent.click(damageButton);
    expect(setHP).toHaveBeenCalledTimes(0);

    HPInput.value = '5';
    fireEvent.click(damageButton);
    expect(setHP).toHaveBeenCalledTimes(0);
  });
});
