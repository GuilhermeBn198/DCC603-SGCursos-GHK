import type { Meta, StoryObj } from '@storybook/react'

import Task from '.'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Task> = {
  title: 'Task',
  component: Task,
  parameters: {
    background: 'dark',
    layout: 'fullscreen'
  }
}

export default meta
type Story = StoryObj<typeof Task>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {}
