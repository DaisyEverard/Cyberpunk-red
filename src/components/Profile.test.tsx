import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { EffectsContext, HPContext, StatsContext } from '../App';
import { calculateHPMax } from '../utils/commonMethods';
import Profile from './Profile';

// Profile props = name, setName, role, setRole, healthPoints
const props = {
  name: 'test name',
  setName: vi.fn(),
  role: 'test role',
  setRole: vi.fn(),
};

const stats = { BODY: 5, WILL: 4 };
const setStats = vi.fn();

const HP = 35;
const setHP = vi.fn();

const currentEffects = {
  'seriously wounded': { active: false },
  'mortally wounded': { active: false },
};
const setCurrentEffects = vi.fn();

describe('HP Adjustment', async () => {
  // render(
  //   <StatsContext.Provider value={{ stats, setStats }}>
  //     <HPContext.Provider value={{ HP, setHP }}>
  //       <EffectsContext.Provider value={{ currentEffects, setCurrentEffects }}>
  //         <Profile {...props} />
  //       </EffectsContext.Provider>
  //     </HPContext.Provider>
  //   </StatsContext.Provider>,
  // );

  // const healButton = await screen.findByText('HEAL');
  // const HPDisplay = await screen.findByTestId('HP-display');
  // const HPInput = (await screen.findByTestId('HP-input')) as HTMLInputElement;

  it('renders with correct HP display', async () => {
    render(
      <StatsContext.Provider value={{ stats, setStats }}>
        <HPContext.Provider value={{ HP, setHP }}>
          <Profile {...props} />
        </HPContext.Provider>
      </StatsContext.Provider>,
    );

    const HPDisplay = await screen.findByTestId('HP-display');
    // Because i set HP as a const at the top, this doesn't really test anything
    // But it does pass :D
    const expectedMaxHP = calculateHPMax(stats);
    const expectedHP = expectedMaxHP;

    const expectedHPDisplay = `${expectedHP} / ${expectedMaxHP}`;
    const actualHPDisplay = HPDisplay.innerHTML;

    expect(actualHPDisplay).toBe(expectedHPDisplay);
  });

  it('heals one hp if input is empty', async () => {
    render(
      <StatsContext.Provider value={{ stats, setStats }}>
        <HPContext.Provider value={{ HP, setHP }}>
          <EffectsContext.Provider value={{ currentEffects, setCurrentEffects }}>
            <Profile {...props} />
          </EffectsContext.Provider>
        </HPContext.Provider>
      </StatsContext.Provider>,
    );

    const healButton = await screen.findByText('HEAL');
    const HPDisplay = await screen.findByTestId('HP-display');
    const HPInput = (await screen.findByTestId('HP-input')) as HTMLInputElement;

    const initialHPDisplayed = parseInt(HPDisplay.innerHTML.split(' / ')[0]);
    HPInput.value = '';

    fireEvent.click(healButton);
    await screen.findByTestId('HP-display');

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
