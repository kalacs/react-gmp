import { SelectOption } from '@shared';
import { SortOptions } from '@api/Movies';

export interface SortControlProps {
  options: SelectOption<SortOptions>[];
  sortBy: SortOptions | null;
  optionSelected: (sortBy: SortOptions) => void;
}
