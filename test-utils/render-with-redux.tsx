import { render } from '@testing-library/react';
import { Component, FC } from 'react';
import { Provider } from 'react-redux';
import { Store, AnyAction } from 'redux';

export function renderWithRedux<TComponent extends Component | FC, SType>(
  component: TComponent,
  store: Store<SType, AnyAction>,
) {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  };
}
