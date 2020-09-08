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
        name: "The Shawshank Redemption ",
        genre: "Drama ",
        rating: 9.3,
        cast: ["Tim Robbins", "Morgan Free", "Bob Guntonman"],
    }
};
