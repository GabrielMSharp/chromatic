import { CommonModule } from '@angular/common';
import { Meta, moduleMetadata, storiesOf, Story } from '@storybook/angular';

import { ButtonComponent, ButtonModule, ButtonSize } from 'button';

export default {
    title: 'Button',
    component: ButtonComponent,
    decorators: [
        moduleMetadata({
          imports: [ButtonModule],
        }),
      ],
  } as Meta;

  const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
    props: args,
    // args: {
    //   size: 'small'
    // }
  });
  
  // export const Template: Story = () => ({
  //   props: {
  //     text: 'Button',
  //     disabled: false
  //   },
  //   argTypes: {
  //     buttonSize: {
  //       options: ['small', 'medium', 'large'],
  //       control: { type: 'radio' },
  //     },
  //     disabled: { control: 'checkbox'}
  //   },
  //   args: {
  //     disabled: false,
  //     buttonSize: 'medium',
  //     text: 'Button Label'
  //   }
  // });

  export const Default = Template.bind({});

  Default.args = {
    text: `I'm enabled`,
    disabled: false,
    size: 'large'
  };

  export const Disabled = Template.bind({});
  Disabled.args = {
    ...Default.args,
    text: `I'm disabled`,
    disabled: true,
    size: 'small'
  };
