import type { Meta, StoryObj } from '@storybook/react';

import Button from './Button';
import { FiSmile } from 'react-icons/fi';

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['contained', 'outlined', 'link'],
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['xs', 'sm', 'md', 'lg'],
      },
    },
    icon: {
      control: {
        type: 'none',
      },
    },
    iconRight: {
      control: {
        type: 'none',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    variant: 'contained',
    children: 'Button',
  },
};

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
export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
};

export const Block: Story = {
  args: {
    ...Default.args,
    block: true,
  },
};

export const Xs: Story = {
  args: {
    ...Default.args,
    size: 'xs',
  },
};

export const Sm: Story = {
  args: {
    ...Default.args,
    size: 'sm',
  },
};

export const Md: Story = {
  args: {
    ...Default.args,
    size: 'md',
  },
};

export const Lg: Story = {
  args: {
    ...Default.args,
    size: 'lg',
  },
};

export const WithIcon: Story = {
  args: {
    ...Default.args,
    icon: <FiSmile />,
  },
};

export const IconRight: Story = {
  args: {
    ...WithIcon.args,
    iconRight: true,
  },
};
