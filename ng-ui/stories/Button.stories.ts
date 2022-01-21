import { CommonModule } from '@angular/common';
import { Meta, moduleMetadata, storiesOf, Story } from '@storybook/angular';

import { ButtonComponent, ButtonModule, ButtonSize } from 'button';

export default {
    title: 'Oasys/Button',
    component: ButtonComponent,
    decorators: [
        moduleMetadata({
          imports: [ButtonModule],
        }),
      ],
  } as Meta;

  const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
    props: args
  });

  Template.parameters = {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/N5RwsM3LOBLXohR9VZwTWW/Tokens-Spike',
    },
  }
  
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
