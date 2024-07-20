import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import Header from './Header';

// I know this is a pointless test
// I need simple examples first, but I don't think I've done this in a very vitest way
// I didn't want to have to write a data-testid when there's already an id?
describe('Header', () => {
  it('renders title correctly', async () => {
    render(<Header />);

    const text = await screen.findByText('Cyberpunk Red - Character Assistant');

    expect(text).toBeDefined();
  });
});
