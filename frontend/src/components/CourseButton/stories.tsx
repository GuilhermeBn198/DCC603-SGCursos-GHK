import type { Meta, StoryObj } from '@storybook/react'

import CourseButton from '.'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof CourseButton> = {
  title: 'CourseButton',
  component: CourseButton
}

export default meta
type Story = StoryObj<typeof CourseButton>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    id: '1',
    slug: 'a-complete-guide-to-using-indexeddb',
    course_name: 'Um guia completo para usar o IndexedDB',
    course_photo:
      'https://blog.logrocket.com/wp-content/uploads/2023/05/complete-guide-using-indexeddb-nocdn.png',
    course_workload: 60,
    start_date: '2021-09-27 15:22:53.679985+02',
    end_date: '2021-09-27 15:22:53.679985+02',
    teacher: 'Acauan Ribeiro',
    course_category: 'Programming'
  }
}
