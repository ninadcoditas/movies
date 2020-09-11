import { Story, Meta } from '@storybook/angular/types-6-0';
import { MovieListComponent } from './components';

import { moduleMetadata } from '@storybook/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { StoreModule, HttpClientModule, reducer, authreducer } from './services-module'
import { RouterModule } from '@angular/router';
import { MovieCardComponent } from './components'
import movielist from './movie-data'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
export default {
    title: 'Example/Movie-list',
    component: MovieListComponent,
    argTypes: {
        movielist,
        isLoggedIn: true
    },
    decorators: [
        moduleMetadata({
            declarations: [MovieCardComponent],
            imports: [
                HttpClientModule,
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

const Template: Story<MovieListComponent> = (args: MovieListComponent) => ({
    component: MovieListComponent,
    props: args,
});

export const Filled = Template.bind({});
Filled.args = {
    movielist,
    isLoggedIn: true
};


export const Empty = Template.bind({});
Empty.args = {
    movielist: []
};
