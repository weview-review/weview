import type { Meta, StoryObj } from '@storybook/react';

import Input from './Input';

const meta: Meta<typeof Input> = {
  title: 'weview/Atoms/Input',
  component: Input,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: 'outlined',
    variant: 'outlined',
  },
};

export const Borderless: Story = {
  args: {
    variant: 'borderless',
    placeholder: 'borderless',
  },
};

export const Filled: Story = {
  args: {
    variant: 'filled',
    placeholder: 'filled',
  },
};

export const Label: Story = {
  args: {
    label: 'label',
    placeholder: 'label',
  },
};
