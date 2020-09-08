import { Story, Meta } from '@storybook/angular/types-6-0';
import { MovieCardComponent } from '../app/components/movie/movie-card/movie-card.component';

import { Rating } from '../app/custom-components/Rating';
customElements.define('movie-rating', Rating);

import { Cast } from '../app/custom-components/Cast';
customElements.define('movie-cast', Cast);

import { moduleMetadata } from '@storybook/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


export default {
    title: 'Example/Movie-card',
    component: MovieCardComponent,
    argTypes: {
        name: "The Shawshank Redemption ",
        genre: "Drama ",
        rating: 9.3,
        cast: [
            "Tim Robbins ",
            " Morgan Free",
            "Bob Guntonman"
        ],
        id: 2,
    },
    decorators: [
        moduleMetadata({
            declarations: [Rating, Cast],
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
    name: "The Shawshank Redemption ",
    genre: "Drama ",
    rating: 9.3,
    cast: [
        "Tim Robbins ",
        " Morgan Free",
        "Bob Guntonman"
    ],
    id: 2,
};
