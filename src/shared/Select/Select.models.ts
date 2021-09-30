export interface SelectOption<TId> {
  id: TId;
  name: string;
}

export interface SelectProps<TId> {
  options: SelectOption<TId>[];
  value?: TId | null;
  onSelect: (optionId: TId) => void;
  placeholder?: string;
}
