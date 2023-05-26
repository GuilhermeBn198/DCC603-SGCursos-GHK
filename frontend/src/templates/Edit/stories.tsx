import type { Meta, StoryObj } from '@storybook/react';

import Edit from '.';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Edit> = {
  title: 'Edit',
  component: Edit,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof Edit>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {};