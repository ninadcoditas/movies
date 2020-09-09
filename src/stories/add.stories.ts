import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';

import { ThemeService } from '../app/services/theme.service';
import { StoreModule } from '@ngrx/store';
import { authreducer } from '../app/reducers/auth.reducer'

import { APP_BASE_HREF } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
    AddComponent
} from './components';
import { RouterModule } from '@angular/router';

export default {
    title: 'Example/AddMovie',
    component: AddComponent,
    decorators: [
        moduleMetadata({

            imports: [
                CommonModule,
                FontAwesomeModule,
                RouterModule.forRoot([], { useHash: true }),
                StoreModule.forRoot({
                    auth: authreducer
                })],
            providers: [{ provide: APP_BASE_HREF, useValue: '/' }, ThemeService]
        }),
    ],
    argTypes: {
        movie: {
            "name": "The Dark Knight",
            "genre": "Action,Crime,Drama",
            "rating": 9.3,
            "cast": [
                "Christian Bale",
                "Heath Ledger",
                "Morgan Freeman"
            ]
        }
    }
} as unknown as Meta;

const Template: Story<AddComponent> = (args: AddComponent) => ({
    component: AddComponent,
    props: args,
});

export const Primary = Template.bind({});
Primary.args = {
    movie: {
        "name": "The Dark Knight",
        "genre": "Action,Crime,Drama",
        "rating": 9.3,
        "cast": [
            "Christian Bale",
            "Heath Ledger",
            "Morgan Freeman"
        ]
    }
}

