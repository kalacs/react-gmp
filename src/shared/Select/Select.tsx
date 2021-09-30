import { PureComponent } from 'react';
import { darken } from 'polished';

import { TriangleDown } from '@styled-icons/octicons';
import styled, { ThemeConsumer } from 'styled-components';

import { SelectProps } from './Select.models';
import { SelectOption } from '@shared';

const SelectTriangle = styled(TriangleDown)`
  color: ${(props) => props.color};
  margin-left: auto;
`;

const SelectWrapper = styled.div`
  display: flex;
  align-items: center;
  max-width: 190px;
  min-width: 150px;

  cursor: pointer;
  position: relative;

  .select-placeholder {
    opacity: 0.5;
  }

  .placeholder-wrapper {
    display: flex;
    width: 100%;
  }
`;

const OptionsWrapper = styled.div`
  position: absolute;
  width: 100%;
  left: 0;
  bottom: 0;
  transform: translateY(100%);
  z-index: 1;
  background-color: ${({ theme }) => theme.palette.secondaryVariant};
`;

const Option = styled.div`
  padding: 0.5em 0.6em;
  border-bottom: 1px solid ${({ theme }) => theme.palette.accent};
  &:hover {
    transition: background-color 100ms;
    background-color: ${({ theme }) =>
      darken(0.1, theme.palette.secondaryVariant)};
  }
`;

export class Select<TId> extends PureComponent<SelectProps<TId>> {
  static defaultProps: Partial<SelectProps<unknown>> = {
    placeholder: 'Select something',
  };

  selectClass = 'select-component';

  state = {
    isOpen: false,
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

  private findSelectedOption() {
    const { value } = this.props;

    if (value == null) {
      return null;
    }

    return this.props.options.find(({ id }) => id === value);
  }

  render() {
    const { isOpen } = this.state;
    const { options, onSelect, placeholder } = this.props;

    const selectedOption = this.findSelectedOption();

    return (
      <SelectWrapper onClick={this.toggleIsOpen} className={this.selectClass}>
        <div className='placeholder-wrapper'>
          <span className='select-placeholder'>
            {selectedOption?.name ?? placeholder}
          </span>
          <ThemeConsumer>
            {(theme) => (
              <SelectTriangle color={theme.palette.primary} size='20' />
            )}
          </ThemeConsumer>
        </div>
        {isOpen && (
          <OptionsWrapper>
            {options.map(({ name, id }: SelectOption<TId>) => (
              <Option
                key={`${id}`}
                onClick={() => onSelect(id)}
                data-value={id}
              >
                {name}
              </Option>
            ))}
          </OptionsWrapper>
        )}
      </SelectWrapper>
    );
  }
}
