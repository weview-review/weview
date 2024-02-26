import { fireEvent, render, screen } from '@/tests/test-utils';
import Input from './Input';

describe('Input', () => {
  it('Input 컴포넌트가 정상적으로 렌더링 되는지', () => {
    render(<Input />);
    screen.getByRole('textbox', { name: /Input/i });
  });

  it('placeholder가 찍혀있는지', () => {
    render(<Input />);
    screen.getByPlaceholderText('test');
  });

  it('이벤트에 따라 value가 변하는지', () => {
    const handleChange = jest.fn();
    const { container } = render(<input type="text" onChange={handleChange} />);
    const Input = container.firstChild as HTMLInputElement;
    fireEvent.change(Input, { target: { value: 'a' } });
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(Input.value).toBe('a');
  });

  it('Input Checkbox 클릭 시 체크되는지', () => {
    const { container } = render(<input type="checkbox" />);
    const Input = container.firstChild as HTMLInputElement;
    fireEvent.click(Input);
    expect(Input.checked).toBe(true);
  });
});
