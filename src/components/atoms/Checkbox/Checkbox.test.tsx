import { render, screen } from '@/tests/test-utils';

import Checkbox from './Checkbox';

describe('Checkbox 컴포넌트 테스트', () => {
  test('Checkbox 컴포넌트가 렌더링된다.', () => {
    render(<Checkbox>체크</Checkbox>);
    expect(screen.getByLabelText('체크')).toBeInTheDocument();
  });
});
