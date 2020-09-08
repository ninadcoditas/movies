import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';

import Button from './button.component';
import { HeaderComponent } from '../app/components/header/header.component'
import { ThemeService } from '../app/services/theme.service'
import { StoreModule } from '@ngrx/store';
import { authreducer } from '../app/reducers/auth.reducer'

export default {
  title: 'Example/Header',
  component: HeaderComponent,
  decorators: [
    moduleMetadata({
      declarations: [Button],
      imports: [CommonModule,
        StoreModule.forRoot({
          auth: authreducer
        })],
      providers: [ThemeService]
    }),
  ],
  argTypes: {
    isLoggedIn: false
  },
} as unknown as Meta;

const Template: Story<HeaderComponent> = (args: HeaderComponent) => ({
  component: HeaderComponent,
  props: args,
});

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {
    isLoggedIn: true
  },
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  isLoggedIn: false
};
