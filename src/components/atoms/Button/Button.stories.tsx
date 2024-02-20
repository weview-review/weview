import { Button } from './Button';
import { FaSmile } from 'react-icons/fa';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: {
        type: 'select',
      },
      options: ['contained', 'outlined', 'link'],
      description: 'contained | outlined | link',
    },
    size: {
      control: {
        type: 'select',
      },
      options: ['xs', 'sm', 'md', 'lg'],
      description: 'xs | sm | md | lg',
    },
    block: {
      control: {
        type: 'boolean',
      },
      description: 'true | false',
    },
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

export const LeftIcon: Story = {
  args: { size: 'sm', children: 'Click Me', leftIcon: <FaSmile /> },
};

export const RightIcon: Story = {
  args: { size: 'sm', children: 'Click Me', rightIcon: <FaSmile /> },
};
