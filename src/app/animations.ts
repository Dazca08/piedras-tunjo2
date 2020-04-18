import { trigger, transition, style, animate } from '@angular/animations';

export const basicAnimate = trigger('basicAnimate', [
    transition(':enter', [ // void => *
        style({ opacity: 0, transform: 'translateX(-200px)' }),
        animate('1s', style({ opacity: 1, transform: 'none'}))
    ])
]);

export const newRowTable = trigger('newRow', [
    transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-100px)' }),
        animate(500, style({ opacity: 1, transform: 'none' }))
    ]),
    transition(':leave', [ // * => void
        animate(500, style({ opacity: 0, transform: 'translateY(100px)' }))
    ])
]);
