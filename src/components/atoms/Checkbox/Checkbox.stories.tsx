import type { Meta, StoryObj } from '@storybook/react';

import Checkbox from './Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'weview/Atoms/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  args: {
    children: 'Example',
  },
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {};
