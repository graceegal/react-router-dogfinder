import { describe, test, expect } from "vitest";

import { render, screen, waitFor } from '@testing-library/react';
import App from './App';
import dogs from "./_testCommon";

const DOG_API_URL = "http://localhost:5001/dogs";

import fetchMock from "fetch-mock";


test('renders the main page with dogs from api', async () => {
  fetchMock.get(DOG_API_URL, dogs);

  const { container } = render(<App />);
  const heading = await waitFor(() => screen.findByText('Welcome!'));
  const nav = container.querySelector("nav");

  expect(nav).toBeInTheDocument();
  expect(heading).toBeInTheDocument();
  expect(fetchMock.called(DOG_API_URL)).toBe(true);
});
