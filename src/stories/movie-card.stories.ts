import { Story, Meta } from '@storybook/angular/types-6-0';
import { MovieCardComponent } from '../app/components/movie/movie-card/movie-card.component';

import { moduleMetadata } from '@storybook/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { StoreModule, reducer, authreducer } from './services-module'
import { RouterModule } from '@angular/router';
import movielist from './movie-data'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

export default {
    title: 'Example/Movie-card',
    component: MovieCardComponent,
    argTypes: {
        movie: movielist[0],
        isLoggedIn: true
    },
    decorators: [
        moduleMetadata({
            imports: [
                RouterModule.forRoot([], { useHash: true }),
                StoreModule.forRoot({
                    movie: reducer,
                    auth: authreducer
                }),
                FontAwesomeModule
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        }),
    ],
} as unknown as Meta;

const Template: Story<MovieCardComponent> = (args: MovieCardComponent) => ({
    component: MovieCardComponent,
    props: args,
});

export const LoggedIn = Template.bind({});
LoggedIn.args = {
    movie: movielist[0],
    isLoggedIn: true
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
    movie: movielist[0],
    isLoggedIn: false
};
