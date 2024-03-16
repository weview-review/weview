import { fireEvent, render, screen } from '@/tests/test-utils';
import Input from './Input';

describe('Input 컴포넌트 테스트 및 placeholder 체크', () => {
  test('Input 컴포넌트가 렌더링된다.', () => {
    render(<Input placeholder="아이디를 입력해주세요." />);
    expect(
      screen.getByPlaceholderText('아이디를 입력해주세요.'),
    ).toBeInTheDocument();
  });
  test('disabled된 Input 컴포넌트가 렌더링된다.', () => {
    render(<Input placeholder="아이디를 입력해주세요." disabled />);
    expect(
      screen.getByPlaceholderText('아이디를 입력해주세요.'),
    ).toHaveAttribute('disabled');
  });

  test('Input 컴포넌트의 입력에 따라 value가 변한다.', () => {
    render(<Input placeholder="아이디를 입력해주세요." />);
    const input = screen.getByPlaceholderText('아이디를 입력해주세요.');
    fireEvent.change(input, { target: { value: 'test' } });
    expect(input).toHaveValue('test');
  });

  test('Input 컴포넌트의 label이 렌더링된다.', () => {
    render(<Input placeholder="아이디를 입력해주세요." label="아이디" />);
    expect(screen.getByText('아이디')).toBeInTheDocument();
  });
});
