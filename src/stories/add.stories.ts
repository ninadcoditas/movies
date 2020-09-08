import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';

import { ThemeService } from '../app/services/theme.service';
import { StoreModule } from '@ngrx/store';
import { authreducer } from '../app/reducers/auth.reducer'

import {
    AddComponent,
    UpdateComponent,
    HomeComponent,
    MovieCardComponent,
    MovieListComponent,
    SignupComponent,
    LoginComponent,
    HeaderComponent
} from './components';

export default {
    title: 'Example/AddMovie',
    component: AddComponent,
    decorators: [
        moduleMetadata({
            declarations: [
                HomeComponent,
                UpdateComponent,
                LoginComponent,
                SignupComponent,
                HeaderComponent,
                MovieCardComponent,
                MovieListComponent
            ],
            imports: [
                CommonModule,

                StoreModule.forRoot({
                    auth: authreducer
                })],
            providers: [ThemeService]
        }),
    ],
    argTypes: {
        "name": "The Dark Knight",
        "genre": "Action,Crime,Drama",
        "rating": 9.3,
        "cast": [
            "Christian Bale",
            "Heath Ledger",
            "Morgan Freeman"
        ]
    }
} as unknown as Meta;

const Template: Story<AddComponent> = (args: AddComponent) => ({
    component: AddComponent,
    props: args,
});

export const Filled = Template.bind({});
Filled.args = {
    "name": "The Dark Knight",
    "genre": "Action,Crime,Drama",
    "rating": 9.3,
    "cast": [
        "Christian Bale",
        "Heath Ledger",
        "Morgan Freeman"
    ]
}

export const Empty = Template.bind({});
Empty.args = {
    "name": "",
    "genre": "",
    "rating": "",
    "cast": ""

};

