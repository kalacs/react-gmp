import { PureComponent, MouseEvent as ReactMouseEvent } from 'react';
import { ThemeConsumer } from 'styled-components';
import { CheckSquare, Checkbox } from '@styled-icons/boxicons-regular';

import { SelectOption } from '@shared';
import { Input } from '@shared/FormControls';

import { SelectProps } from './Select.models';
import {
  Option,
  OptionsWrapper,
  SelectTriangle,
  SelectWrapper,
} from './Select.styles';
import { isMultiSelect } from './Select.helpers';

export class Select<TId> extends PureComponent<SelectProps<TId>> {
  static defaultProps: Partial<SelectProps<unknown>> = {
    placeholder: 'Select something',
  };

  selectClass = 'select-component';

  state = {
    isOpen: false,
    selectedOptions: new Set<TId>(),
  };

  toggleIsOpen = () => {
    this.setState({
      ...this.state,
      isOpen: !this.state.isOpen,
    });
  };

  handleOutsideClick = (e: MouseEvent) => {
    if (!this.state.isOpen) {
      return;
    }

    const target = e.target as HTMLElement;

    const clickedOnTheSelect = target.closest(`.${this.selectClass}`);

    if (clickedOnTheSelect) {
      return;
    }

    this.toggleIsOpen();
  };

  componentDidMount() {
    document.addEventListener('mousedown', this.handleOutsideClick);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleOutsideClick);
  }

  private onOptionSelect = (optionId: TId, e: ReactMouseEvent) => {
    if (isMultiSelect<TId>(this.props)) {
      e.nativeEvent.stopImmediatePropagation();
      const selectedOptions = this.state.selectedOptions;
      if (selectedOptions.has(optionId)) {
        selectedOptions.delete(optionId);
      } else {
        selectedOptions.add(optionId);
      }

      this.props.onSelect([...selectedOptions]);
    } else {
      this.props.onSelect(optionId);
    }
  };

  private findSelectedOption() {
    const { value } = this.props;

    if (value == null) {
      return null;
    }

    return this.props.options.find(({ id }) => id === value);
  }

  render() {
    const { isOpen } = this.state;
    const { options, placeholder } = this.props;

    const selectedOption = this.findSelectedOption();

    return (
      <SelectWrapper onClick={this.toggleIsOpen} className={this.selectClass}>
        <div className='placeholder-wrapper'>
          <Input
            className='select-trigger'
            readOnly
            value={selectedOption?.name}
            placeholder={placeholder}
          ></Input>
          <ThemeConsumer>
            {(theme) => (
              <SelectTriangle color={theme.palette.primary} size='25' />
            )}
          </ThemeConsumer>
        </div>
        {isOpen && (
          <OptionsWrapper>
            {options.map(({ name, id }: SelectOption<TId>) => (
              <Option
                className={
                  this.state.selectedOptions.has(id)
                    ? 'option-selected'
                    : undefined
                }
                key={`${id}`}
                onClick={(e) => this.onOptionSelect(id, e)}
                data-value={id}
              >
                {this.state.selectedOptions.has(id) ? (
                  <CheckSquare size='20' />
                ) : (
                  <Checkbox size='20' />
                )}
                {name}
              </Option>
            ))}
          </OptionsWrapper>
        )}
      </SelectWrapper>
    );
  }
}
