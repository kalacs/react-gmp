import axios from 'axios';
import { screen, waitFor, act } from '@testing-library/react';

import { renderWithRedux, mockMoviesResponse } from '@test-utils';
import { store } from '@store';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '@theme';

import { Content } from './Content';
import { Router } from 'react-router';
import { createMemoryHistory } from 'history';
import { Movie, MovieGenre } from '@api/Movies';

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
  it('should render component and display loading overlay', () => {
    renderWithRouter();
    expect(screen.getByTestId('loading-overlay')).toBeDefined();
  });

  it('should fetch movies on component init', async () => {
    const mockedMovies: Movie[] = [
      {
        id: 1,
        coverUrl: 'cover',
        description: 'desc',
        genre: [MovieGenre.ActionAdventure],
        rating: 5,
        releaseDate: '2021',
        runtime: 125,
        title: 'movie title',
      },
    ];

    const mockedGet = mockedAxios.get.mockImplementationOnce(() => {
      return Promise.resolve({
        data: mockMoviesResponse(),
      });
    });

    renderWithRouter();

    // need to wait for a tick
    // is there another way??
    await Promise.resolve();

    const movieComponents = await waitFor(() =>
      screen.getAllByTestId('movie-wrapper')
    );


    const loadingOverlay = screen.queryByTestId('loading-overlay');

    expect(loadingOverlay).toBeNull();
    expect(movieComponents.length).toBe(mockedMovies.length);
    expect(mockedGet).toBeCalled();
  });
});
