import { render, screen, cleanup, fireEvent } from '@/tests/test-utils';

import { Button } from './Button';
import { FiHeart } from 'react-icons/fi';

describe('Button 컴포넌트 테스트', () => {
  afterEach(() => cleanup());

  it('Button 컴포넌트가 정상적으로 렌더링된다.', () => {
    render(<Button data-testid="btn">Button</Button>);
    const button = screen.getByTestId('btn');
    expect(button).toBeInTheDocument();
  });

  it('onClick 이벤트가 정상적으로 트리거된다.', () => {
    const fn = jest.fn();
    render(
      <Button onClick={fn} data-testid="btn">
        Button
      </Button>,
    );

    const button = screen.getByTestId('btn');
    fireEvent.click(button);
    expect(fn).toHaveBeenCalled();
  });

  test('icons와 함께 렌더링되어야 한다.', () => {
    render(
      <>
        <Button icon={<FiHeart />}>Icon</Button>
        <Button icon={<FiHeart />} iconRight>
          IconRight
        </Button>
      </>,
    );
    expect(screen.getByText('Icon')).toBeTruthy();
    expect(screen.getByText('IconRight')).toBeTruthy();
  });

  test('비활성화 된다.', () => {
    render(<Button disabled>Disabled</Button>);
    expect(screen.getByRole('button')).toBeDisabled();
  });
});
