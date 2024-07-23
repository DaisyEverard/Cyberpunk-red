import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import CharacterProvider, { CharacterContext } from '../context/Character';
import { Effects, Stats } from '../types/types';
import { calculateHPMax, calculateHumanity } from '../utils/commonMethods';
import Profile from './Profile';

// nedd to edit CharacterProvider to find a way to inject these values

const DEFAULT_MAX_HP = 20;
const DEFAULT_HUMANITY = 20;

const renderProfile = () => {
  const { rerender, debug } = render(
    <CharacterProvider>
      <Profile />
    </CharacterProvider>,
  );
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

const getCurrentlyDisplayedHP = async () => {
  const { HPDisplay } = await getDomElements();
  return parseInt(HPDisplay.innerHTML.split(' / ')[0]);
};
const getCurrentlyDisplayedHumanity = async () => {
  const { humanityDisplay } = await getDomElements();
  return parseInt(humanityDisplay.innerHTML);
};

describe('HP Adjustment', async () => {
  it('renders with HP 20 by default', async () => {
    renderProfile();

    const initialHP = await getCurrentlyDisplayedHP();
    expect(initialHP).toBe(DEFAULT_MAX_HP);
  });

  it('heals any HP number in input', async () => {
    renderProfile();

    const { healButton, damageButton, HPDisplay, HPInput } = await getDomElements();

    //damage first
    // need to do this step because the component renders at max health, and you can't heal more
    //probably need a way to render with different intial state
    HPInput.value = '10';
    fireEvent.click(damageButton);

    const initialHP = await getCurrentlyDisplayedHP();
    console.log(`initialHP: ${initialHP}`);

    // empty input
    HPInput.value = '';
    fireEvent.click(healButton);
    let expectedHP = initialHP + 1;
    let actualHP = await getCurrentlyDisplayedHP();
    expect(actualHP).toBe(expectedHP);

    // populated input
    HPInput.value = '7';
    fireEvent.click(healButton);
    expectedHP += 7;
    actualHP = await getCurrentlyDisplayedHP();
    expect(actualHP).toBe(expectedHP);
  });

  it('damages any hp number in input', async () => {
    renderProfile();

    const { damageButton, HPInput } = await getDomElements();

    const initialHP = await getCurrentlyDisplayedHP();

    // empty input
    HPInput.value = '';
    fireEvent.click(damageButton);
    let expectedHP = initialHP - 1;
    let actualHP = await getCurrentlyDisplayedHP();
    expect(actualHP).toBe(expectedHP);

    // populated input
    HPInput.value = '8';
    fireEvent.click(damageButton);
    expectedHP -= 8; // this does not stack to 9 because setHP is a mock
    actualHP = await getCurrentlyDisplayedHP();
    expect(actualHP).toBe(expectedHP);
  });

  it('does not heal above max hp', async () => {
    renderProfile();

    const { healButton, HPInput } = await getDomElements();

    HPInput.value = '';
    fireEvent.click(healButton);
    let actualHP = await getCurrentlyDisplayedHP();
    expect(actualHP).toBe(DEFAULT_MAX_HP);

    HPInput.value = '10';
    fireEvent.click(healButton);
    actualHP = await getCurrentlyDisplayedHP();
    expect(actualHP).toBe(DEFAULT_MAX_HP);
  });

  it('does not damage hp below 0', async () => {
    renderProfile();
    const { damageButton, HPInput } = await getDomElements();

    // gets HP to 0
    // one more than required to test populated input
    HPInput.value = (DEFAULT_MAX_HP + 1).toString();
    fireEvent.click(damageButton);
    let actualHP = await getCurrentlyDisplayedHP();
    expect(actualHP).toBe(0);

    HPInput.value = '';
    actualHP = await getCurrentlyDisplayedHP();
    expect(actualHP).toBe(0);
  });
});

describe('Humanity Adjustment', async () => {
  it('renders with 30 Humanity by default', async () => {
    renderProfile();

    const { humanityDisplay } = await getDomElements();

    const initialHumanity = parseInt(humanityDisplay.innerHTML);
    expect(initialHumanity).toBe(DEFAULT_HUMANITY);
  });

  it('increases Humanity by 1 or number in input', async () => {
    renderProfile();
    const { humanityInput, incrementHumanityButton } = await getDomElements();
    const initialHumanity = await getCurrentlyDisplayedHumanity();

    // empty input
    humanityInput.value = '';
    fireEvent.click(incrementHumanityButton);
    let expectedHumanity = initialHumanity + 1;
    let actualHumanity = await getCurrentlyDisplayedHumanity();
    expect(actualHumanity).toBe(expectedHumanity);

    //populated input
    humanityInput.value = '12';
    fireEvent.click(incrementHumanityButton);
    expectedHumanity += 12;
    actualHumanity = await getCurrentlyDisplayedHumanity();
    expect(actualHumanity).toBe(expectedHumanity);
  });

  it('decreases Humanity by 1 or number in input', async () => {
    renderProfile();
    const { humanityInput, decrementHumanityButton } = await getDomElements();
    const initialHumanity = await getCurrentlyDisplayedHumanity();

    // empty input
    humanityInput.value = '';
    fireEvent.click(decrementHumanityButton);
    let expectedHumanity = initialHumanity - 1;
    let actualHumanity = await getCurrentlyDisplayedHumanity();
    expect(actualHumanity).toBe(expectedHumanity);
    // populated input
    humanityInput.value = '5';
    fireEvent.click(decrementHumanityButton);
    expectedHumanity -= 5;
    actualHumanity = await getCurrentlyDisplayedHumanity();
    expect(actualHumanity).toBe(expectedHumanity);
  });

  it('does not decrease below 0 humanity', async () => {
    renderProfile();
    const { humanityInput, decrementHumanityButton } = await getDomElements();

    humanityInput.value = (DEFAULT_HUMANITY + 1).toString();
    fireEvent.click(decrementHumanityButton);
    let actualHumanity = await getCurrentlyDisplayedHumanity();
    expect(actualHumanity).toBe(0);

    humanityInput.value = '';
    fireEvent.click(decrementHumanityButton);
    expect(actualHumanity).toBe(0);
  });

  // SKIPPED TESTS
  // The way the follwing 2 tests were written required access to the stats state
  // Is there a behavioural way to test this?
  //There is a display for EMP but in a different component
  it.skip('decreases EMP stat when going down a 10s place', async () => {
    const startingHumanity = 30;
    const { setStats } = renderProfile(undefined, undefined, undefined, undefined, startingHumanity);

    const { humanityInput, decrementHumanityButton } = await getDomElements();
    const expectedStats = { BODY: 5, WILL: 4, EMP: 2 };

    // emp down 1
    humanityInput.value = '';
    fireEvent.click(decrementHumanityButton);
    expect(setStats).toHaveBeenCalledWith(expectedStats);

    // emp down another 1, block decrease
    humanityInput.value = '10';
    fireEvent.click(decrementHumanityButton);
    expect(setStats).toHaveBeenCalledWith(expectedStats);
  });
  it.skip('increases EMP stat when going up a 10s place', async () => {
    const startingHumanity = 19;
    const startingStats = { BODY: 5, WILL: 4, EMP: 1 };
    const { setStats } = renderProfile(startingStats, undefined, undefined, undefined, startingHumanity);

    const { humanityInput, incrementHumanityButton } = await getDomElements();
    const expectedStats = { BODY: 5, WILL: 4, EMP: 2 };

    // EMP up 1
    humanityInput.value = '';
    fireEvent.click(incrementHumanityButton);
    expect(setStats).toHaveBeenCalledWith(expectedStats);

    // EMP up another 1, block increase
    humanityInput.value = '10';
    fireEvent.click(incrementHumanityButton);
    expect(setStats).toHaveBeenCalledWith(expectedStats);
  });
});
