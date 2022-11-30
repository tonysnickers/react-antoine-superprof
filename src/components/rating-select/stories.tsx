import * as React from "react";
import RatingSelect from ".";

export default {
  title: "Rating Select",
  component: RatingSelect,
  argTypes: { onChange: { action: "rating changed" } },
};

const Template = (args) => <RatingSelect {...args} />;

export const Default = Template.bind({});

Default.args = {
  value: 7,
};
