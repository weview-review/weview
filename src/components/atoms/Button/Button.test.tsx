import { render, screen } from '@/tests/test-utils';

import Button from './Button';

describe('Button', () => {
  it('should render the heading', () => {
    render(<Button>test</Button>);

    // Assert
    screen.getByRole('heading', { name: /Button/i });
  });
});
