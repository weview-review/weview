import type { Meta, StoryObj } from '@storybook/react';

import Button from './Button';

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    children: 'Example',
    variant: 'contained',
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Contained: Story = {
  args: {
    variant: 'contained',
    children: 'Button',
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    children: 'Button',
  },
};
export const Link: Story = {
  args: {
    variant: 'link',
    children: 'Button',
  },
};

export const Xs: Story = {
  args: {
    size: 'xs',
    children: 'Button',
  },
};

export const Sm: Story = {
  args: {
    size: 'sm',
    children: 'Button',
  },
};

export const Md: Story = {
  args: {
    size: 'md',
    children: 'Button',
  },
};

export const Lg: Story = {
  args: {
    size: 'lg',
    children: 'Button',
  },
};
