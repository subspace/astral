import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import { Tab, Tabs } from './Tabs'

export default {
  title: 'Common/Tabs',
  component: Tabs,
} as ComponentMeta<typeof Tabs>

const Template: ComponentStory<typeof Tabs> = (args) => (
  <Tabs {...args}>
    <Tab title='tab 1'>simple body</Tab>
    <Tab title='tab 2'>simple body 2</Tab>
  </Tabs>
)

export const Primary = Template.bind({})
Primary.args = {}
