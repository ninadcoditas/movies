import { Story, Meta } from '@storybook/angular/types-6-0';
import { MovieListComponent } from './components';

import { moduleMetadata } from '@storybook/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { StoreModule, HttpClientModule, reducer, authreducer } from './services-module'
import { RouterModule } from '@angular/router';
export default {
    title: 'Example/Movie-list',
    component: MovieListComponent,
    argTypes: {
        movielist: [
            {
                name: "The Shawshank Redemption ",
                genre: "Drama ",
                rating: 9.3,
                cast: ["Tim Robbins", "Morgan Free", "Bob Guntonman"],
                id: 2,
            },
            {
                name: "The Shawshank Redemption ",
                genre: "Drama ",
                rating: 9.3,
                cast: ["Tim Robbins", "Morgan Free", "Bob Guntonman"],
                id: 2,
            }
        ],
    },
    decorators: [
        moduleMetadata({
            imports: [
                HttpClientModule,
                RouterModule.forRoot([], { useHash: true }),
                StoreModule.forRoot({
                    movie: reducer,
                    auth: authreducer
                }),
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        }),
    ],
} as unknown as Meta;

const Template: Story<MovieListComponent> = (args: MovieListComponent) => ({
    component: MovieListComponent,
    props: args,
});

export const Primary = Template.bind({});
Primary.args = {
    movielist: [
        {
            name: "The Shawshank Redemption ",
            genre: "Drama ",
            rating: 9.3,
            cast: ["Tim Robbins", "Morgan Free", "Bob Guntonman"],
            id: 2,
        },
        {
            name: "The Shawshank Redemption ",
            genre: "Drama ",
            rating: 9.3,
            cast: ["Tim Robbins", "Morgan Free", "Bob Guntonman"],
            id: 2,
        }
    ]
};


export const Empty = Template.bind({});
Empty.args = {
    movielist: []
};
