import { useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Movie } from '@api/Movies';
import {
  Footer,
  FlexColumnContainer,
  MovieDetailsContext,
  NotFoundPage,
} from '@shared';

import { HomePageHeader, Content } from './home-page';

export default function App() {
  const [movieWithDetails, setMovieWithDetails] = useState<Movie | null>(null);

  return (
    <Switch>
      <Route path='/' exact>
        <Redirect to='/search'></Redirect>
      </Route>
      <Route path='/search/:searchQuery?'>
        <MovieDetailsContext.Provider
          value={{
            movie: movieWithDetails,
            showMovieDetails: setMovieWithDetails,
          }}
        >
          <HomePageHeader />
          <FlexColumnContainer>
            <Content />
          </FlexColumnContainer>
          <Footer />
        </MovieDetailsContext.Provider>
      </Route>
      <Route path='*'>
        <NotFoundPage></NotFoundPage>
      </Route>
    </Switch>
  );
}
