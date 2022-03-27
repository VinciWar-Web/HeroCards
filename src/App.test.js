import { render, screen } from '@testing-library/react';
import { App } from './App';

beforeEach(() => {
  render(<App />);
})

test('render the title of my app', () => {

  const titleApp = screen.getByText(/Hero Cards/i);
  expect(titleApp).toBeInTheDocument();

});



test('render data api', async() => {

	const resp = await fetch(`https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json`);
	const body = await resp.json();

  expect(!body.length).toBe( false )
});
