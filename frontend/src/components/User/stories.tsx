import type { Meta, StoryObj } from '@storybook/react';

import User from '.';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof User> = {
  title: 'User',
  component: User,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof User>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {};