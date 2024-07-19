import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

describe('App.tsx', () => {
  it('tests run', () => {
    expect(true).toBeTruthy();
  });

  it('can render', async () => {
    render(<h1>Hello World</h1>);

    const text = await screen.findByText('Hello World');

    expect(text).toBeDefined();
  });
});
