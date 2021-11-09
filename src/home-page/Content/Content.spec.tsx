import axios, { AxiosStatic } from 'axios';
import { screen, waitFor, act } from '@testing-library/react';

import { renderWithRedux, mockMoviesResponse } from '@test-utils';
import { store } from '@store';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '@theme';

import { Content } from './Content';
import { Router } from 'react-router';
import { createMemoryHistory } from 'history';

jest.mock('axios');

function renderWithRouter() {
  const history = createMemoryHistory();
  return {
    ...renderWithRedux(
      <ThemeProvider theme={defaultTheme}>
        <Router history={history}>
          <Content />
        </Router>
      </ThemeProvider>,
      store
    ),
    history,
  };
}

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('Content Component', () => {
  let mockedMoviesGet: jest.Mocked<unknown>;
  beforeEach(() => {
    mockedMoviesGet = mockedAxios.get.mockImplementation(() => {
      return Promise.resolve({
        data: mockMoviesResponse(),
      });
    });
  });

  it('should render component and display loading overlay', () => {
    renderWithRouter();
    expect(screen.getByTestId('loading-overlay')).toBeDefined();
  });

  it('should fetch movies on component init', async () => {
    renderWithRouter();

    const movieComponents = await waitFor(() =>
      screen.getAllByTestId('movie-wrapper')
    );


    const loadingOverlay = screen.queryByTestId('loading-overlay');

    expect(loadingOverlay).toBeNull();
    expect(movieComponents.length).toBe(mockMoviesResponse().data.length);
    expect(mockedMoviesGet).toBeCalled();
  });
});
