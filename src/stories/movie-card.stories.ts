import { Story, Meta } from '@storybook/angular/types-6-0';
import { MovieCardComponent } from '../app/components/movie/movie-card/movie-card.component';

import { moduleMetadata } from '@storybook/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


export default {
    title: 'Example/Movie-card',
    component: MovieCardComponent,
    argTypes: {
        movie: {
            name: "The Shawshank Redemption ",
            genre: "Drama ",
            rating: 9.3,
            cast: ["Tim Robbins", "Morgan Free", "Bob Guntonman"],
            id: 2,
        }
    },
    decorators: [
        moduleMetadata({
            imports: [],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        }),
    ],
} as unknown as Meta;

const Template: Story<MovieCardComponent> = (args: MovieCardComponent) => ({
    component: MovieCardComponent,
    props: args,
});

export const Primary = Template.bind({});
Primary.args = {
    movie: {
        "name": "Fight Club",
        "genre": "Drama",
        "rating": 8.8,
        "cast": [
            "Edward Norton ",
            "Brad Pitt ",
            " Meat Loaf"
        ],
        "id": 3,
        "image": "https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg"
    }
};
