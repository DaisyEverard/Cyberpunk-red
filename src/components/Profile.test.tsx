import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { EffectsContext, HPContext, HumanityContext, RoleContext, StatsContext } from '../App';
import { Effects, Stats } from '../types/types';
import { calculateHPMax, calculateHumanity } from '../utils/commonMethods';
import Profile from './Profile';

const DEFAULT_STATS = { BODY: 5, WILL: 4, EMP: 3 };
const DEFAULT_MAX_HP = calculateHPMax(DEFAULT_STATS); // 35
const DEFAULT_EFFECTS = {
  'seriously wounded': { active: false },
  'mortally wounded': { active: false },
};
const DEFAULT_ROLE = 'Medtech';
const DEFAULT_HUMANITY = calculateHumanity(DEFAULT_STATS); // 30

const renderProfile = (
  stats: Stats = DEFAULT_STATS,
  HP: number = DEFAULT_MAX_HP,
  currentEffects: Effects = DEFAULT_EFFECTS,
  role: string = DEFAULT_ROLE,
  humanity: number = DEFAULT_HUMANITY,
) => {
  const setCurrentEffects = vi.fn();
  const setHP = vi.fn();
  const setStats = vi.fn();
  const setRole = vi.fn();
  const setHumanity = vi.fn();

  const { rerender, debug } = render(
    <StatsContext.Provider value={{ stats, setStats }}>
      <HPContext.Provider value={{ HP, setHP }}>
        <EffectsContext.Provider value={{ currentEffects, setCurrentEffects }}>
          <RoleContext.Provider value={{ role, setRole }}>
            <HumanityContext.Provider value={{ humanity, setHumanity }}>
              <Profile />
            </HumanityContext.Provider>
          </RoleContext.Provider>
        </EffectsContext.Provider>
      </HPContext.Provider>
    </StatsContext.Provider>,
  );

  return { rerender, debug, setHP, setHumanity, setStats };
};

const getDomElements = async () => {
  // HP
  const healButton = await screen.findByText('HEAL');
  const HPDisplay = await screen.findByTestId('HP-display');
  const HPInput = (await screen.findByTestId('HP-input')) as HTMLInputElement;
  const damageButton = await screen.findByText('DAMAGE');

  // HUMANITY
  const humanityDisplay = await screen.findByTestId('humanity-display');
  const humanityInput = (await screen.findByTestId('humanity-input')) as HTMLInputElement;
  const incrementHumanityButton = await screen.findByText('ADD');
  const decrementHumanityButton = await screen.findByText('REMOVE');

  return {
    healButton,
    HPDisplay,
    HPInput,
    damageButton,
    humanityDisplay,
    humanityInput,
    incrementHumanityButton,
    decrementHumanityButton,
  };
};

describe('HP Adjustment', async () => {
  it('renders with correct hp', async () => {
    const startingHP = 21;
    renderProfile(undefined, startingHP);

    const { HPDisplay } = await getDomElements();

    const initialHP = parseInt(HPDisplay.innerHTML.split(' / ')[0]);
    expect(initialHP).toBe(21);
  });

  it('heals any HP number in input', async () => {
    const startingHP = 20;
    const { setHP } = renderProfile(undefined, startingHP);

    const { healButton, HPDisplay, HPInput } = await getDomElements();
    const initialHP = parseInt(HPDisplay.innerHTML.split(' / ')[0]);

    // empty input
    HPInput.value = '';
    fireEvent.click(healButton);
    let expectedHP = initialHP + 1;
    expect(setHP).toHaveBeenCalledWith(expectedHP);

    // populated input
    HPInput.value = '7';
    fireEvent.click(healButton);
    expectedHP = initialHP + 7;
    expect(setHP).toHaveBeenCalledWith(expectedHP);
  });

  it('damages any hp number in input', async () => {
    const { setHP } = renderProfile();

    const { damageButton, HPDisplay, HPInput } = await getDomElements();

    const initialHP = parseInt(HPDisplay.innerHTML.split(' / ')[0]);

    // empty input
    HPInput.value = '';
    fireEvent.click(damageButton);
    let expectedHP = initialHP - 1;
    expect(setHP).toHaveBeenCalledWith(expectedHP);

    // populated input
    HPInput.value = '8';
    fireEvent.click(damageButton);
    expectedHP = initialHP - 8; // this does not stack to 9 because setHP is a mock
    expect(setHP).toHaveBeenCalledWith(expectedHP);
  });

  it('does not heal above max hp', async () => {
    const { setHP } = renderProfile();

    const { healButton, HPInput } = await getDomElements();

    HPInput.value = '';
    fireEvent.click(healButton);
    expect(setHP).toHaveBeenCalledTimes(0);

    HPInput.value = '10';
    fireEvent.click(healButton);
    expect(setHP).toHaveBeenCalledTimes(0);
  });

  it('does not damage hp below 0', async () => {
    const startingHP = 0;
    const { setHP } = renderProfile(undefined, startingHP);

    const { damageButton, HPInput } = await getDomElements();

    HPInput.value = '';
    fireEvent.click(damageButton);
    expect(setHP).toHaveBeenCalledTimes(0);

    HPInput.value = '5';
    fireEvent.click(damageButton);
    expect(setHP).toHaveBeenCalledTimes(0);
  });
});

describe('Humanity Adjustment', async () => {
  it('renders with correct Humanity', async () => {
    renderProfile();

    const { humanityDisplay } = await getDomElements();

    const initialHumanity = parseInt(humanityDisplay.innerHTML);
    expect(initialHumanity).toBe(30);
  });

  it('increases Humanity by 1 or number in input', async () => {
    const startingHumanity = 5;
    const { setHumanity } = renderProfile(undefined, undefined, undefined, undefined, startingHumanity);

    const { humanityDisplay, humanityInput, incrementHumanityButton } = await getDomElements();
    const initialHumanity = parseInt(humanityDisplay.innerHTML);

    // empty input
    humanityInput.value = '';
    fireEvent.click(incrementHumanityButton);
    let expectedHumanity = initialHumanity + 1;
    expect(setHumanity).toHaveBeenCalledWith(expectedHumanity);

    //populated input
    humanityInput.value = '12';
    fireEvent.click(incrementHumanityButton);
    expectedHumanity = initialHumanity + 12;
    expect(setHumanity).toHaveBeenCalledWith(expectedHumanity);
  });

  it('decreases Humanity by 1 or number in input', async () => {
    const { setHumanity } = renderProfile();

    const { humanityInput, humanityDisplay, decrementHumanityButton } = await getDomElements();
    const initialHumanity = parseInt(humanityDisplay.innerHTML);

    // empty input
    humanityInput.value = '';
    fireEvent.click(decrementHumanityButton);
    let expectedHumanity = initialHumanity - 1;
    expect(setHumanity).toHaveBeenCalledWith(expectedHumanity);
    // populated input
    humanityInput.value = '5';
    fireEvent.click(decrementHumanityButton);
    expectedHumanity = initialHumanity - 5;
    expect(setHumanity).toHaveBeenCalledWith(expectedHumanity);
  });

  it('does not decrease below 0 humanity', async () => {
    const startingHumanity = 0;
    const { setHumanity } = renderProfile(undefined, undefined, undefined, undefined, startingHumanity);

    const { humanityInput, decrementHumanityButton } = await getDomElements();

    humanityInput.value = '';
    fireEvent.click(decrementHumanityButton);
    expect(setHumanity).toHaveBeenCalledTimes(0);
  });

  it('decreases EMP stat when going down a 10s place', async () => {
    const startingHumanity = 30;
    const { setStats } = renderProfile(undefined, undefined, undefined, undefined, startingHumanity);

    const { humanityInput, decrementHumanityButton } = await getDomElements();
    const expectedStats = { BODY: 5, WILL: 4, EMP: 2 };

    humanityInput.value = '';
    fireEvent.click(decrementHumanityButton);
    expect(setStats).toHaveBeenCalledWith(expectedStats);
  });
  it('increases EMP stat when going up a 10s place', async () => {
    const startingHumanity = 19;
    const startingStats = { BODY: 5, WILL: 4, EMP: 1 };
    const { setStats } = renderProfile(startingStats, undefined, undefined, undefined, startingHumanity);

    const { humanityInput, incrementHumanityButton } = await getDomElements();
    const expectedStats = { BODY: 5, WILL: 4, EMP: 2 };

    humanityInput.value = '';
    fireEvent.click(incrementHumanityButton);
    expect(setStats).toHaveBeenCalledWith(expectedStats);
  });
});
