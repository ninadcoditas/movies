import { Story, Meta } from '@storybook/angular/types-6-0';
import { MovieListComponent } from './components';

import { moduleMetadata } from '@storybook/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { StoreModule, HttpClientModule, reducer, authreducer } from './services-module'
import { RouterModule } from '@angular/router';
import { MovieCardComponent } from './components'
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
                "image": "https://images-na.ssl-images-amazon.com/images/I/71jzMH-kHQL._AC_SY679_.jpg"
            },
            {
                "name": "The Dark Knight",
                "genre": "Action,Crime,Drama",
                "rating": 9.3,
                "cast": [
                    "Christian Bale",
                    "Heath Ledger",
                    "Morgan Freeman"
                ],
                "id": 1,
                "image": "https://images-na.ssl-images-amazon.com/images/I/71jzMH-kHQL._AC_SY679_.jpg"
            }
        ],
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
    movielist: [
        {
            name: "The Shawshank Redemption ",
            genre: "Drama ",
            rating: 9.3,
            cast: ["Tim Robbins", "Morgan Free", "Bob Guntonman"],
            id: 2,
            "image": "https://imgc.allpostersimages.com/img/print/u-g-F4S6WB0.jpg?w=550&h=550&p=0"
        },
        {
            "name": "The Dark Knight",
            "genre": "Action,Crime,Drama",
            "rating": 9.3,
            "cast": [
                "Christian Bale",
                "Heath Ledger",
                "Morgan Freeman"
            ],
            "id": 1,
            "image": "https://images-na.ssl-images-amazon.com/images/I/71jzMH-kHQL._AC_SY679_.jpg"
        }
    ]
};


export const Empty = Template.bind({});
Empty.args = {
    movielist: []
};
