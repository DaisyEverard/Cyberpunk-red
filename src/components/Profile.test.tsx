import { useContext, useState } from 'react';

import { screen } from '@testing-library/dom';
import { fireEvent, render } from '@testing-library/react';
import { expect, test, vi } from 'vitest';

import { EffectsContext, HPContext, HumanityContext, StatsContext } from '../App';
import Profile from './Profile';

// Mock implementations for context
const MockProviders = ({ children, initialHP }) => {
  const [currentEffects, setCurrentEffects] = useState({
    'test effect': {
      active: false,
    },
  });
  const [HP, setHP] = useState(initialHP);
  const [humanity, setHumanity] = useState(10);
  const [stats, setStats] = useState({ BODY: 3, EMP: 3 });

  return (
    <EffectsContext.Provider value={{ currentEffects, setCurrentEffects }}>
      <HPContext.Provider value={{ HP, setHP }}>
        <HumanityContext.Provider value={{ humanity, setHumanity }}>
          <StatsContext.Provider value={{ stats, setStats }}>{children}</StatsContext.Provider>
        </HumanityContext.Provider>
      </HPContext.Provider>
    </EffectsContext.Provider>
  );
};

test('HP goes up by one if input is empty', () => {
  const mockSetName = vi.fn();
  const mockSetRole = vi.fn();
  const startingHP = 5;

  const { getByText, getByRole } = render(
    <MockProviders initialHP={startingHP}>
      <Profile
        name={'test name'}
        setName={mockSetName}
        role={'test role'}
        setRole={mockSetRole}
        healthPoints={startingHP}
      />
    </MockProviders>,
  );

  // Get the heal button and HP input
  const healButton = screen.getByText('HEAL');
  const hpInput = healButton.nextElementSibling as HTMLInputElement;
  const healthDisplay = screen.getByTestId('health-display');

  // Ensure the HP input is empty
  expect(hpInput.value).toBe('');

  // Click the heal button
  fireEvent.click(healButton);

  // Assert the HP value has incremented by one
  expect(hpInput.value).toBe('');
  expect(healthDisplay.textContent).toBe('6 / 25');
  // Adjust according to how you display HP and max HP
});
