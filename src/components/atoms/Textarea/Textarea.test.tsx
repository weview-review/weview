import { fireEvent, render, screen } from '@/tests/test-utils';

import Textarea from './Textarea';

describe('Textarea 컴포넌트 테스트 및 placeholder 체크', () => {
  test('Textarea 컴포넌트가 렌더링된다.', () => {
    render(<Textarea placeholder="텍스트를 입력해주세요." />);
    expect(
      screen.getByPlaceholderText('텍스트를 입력해주세요.'),
    ).toBeInTheDocument();
  });
  test('disabled된 Textarea 컴포넌트가 렌더링된다.', () => {
    render(<Textarea placeholder="텍스트를 입력해주세요." disabled />);
    expect(
      screen.getByPlaceholderText('텍스트를 입력해주세요.'),
    ).toHaveAttribute('disabled');
  });

  test('Textarea 컴포넌트의 입력에 따라 value가 변한다.', () => {
    render(<Textarea placeholder="텍스트를 입력해주세요." />);
    const input = screen.getByPlaceholderText('텍스트를 입력해주세요.');
    fireEvent.change(input, { target: { value: 'test' } });
    expect(input).toHaveValue('test');
  });

  test('Textarea 컴포넌트의 label이 렌더링된다.', () => {
    render(<Textarea placeholder="텍스트를 입력해주세요." label="텍스트" />);
    expect(screen.getByText('텍스트')).toBeInTheDocument();
  });
});
