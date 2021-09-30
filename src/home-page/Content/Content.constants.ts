import { SelectOption } from '@shared';

export const enum SortOptions {
  ByReleaseDate,
  ByTitle,
}

export const SORT_OPTIONS: SelectOption<SortOptions>[] = [
  {
    id: SortOptions.ByReleaseDate,
    name: 'RELEASE DATE',
  },
  {
    id: SortOptions.ByTitle,
    name: 'TITLE',
  },
];
