alert('index.js is loaded');
const path = require('path');
module.exports = {
    mode: 'development',
    entry: './js/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
};
import getDateString from './date.js';
import '../styles/styles.scss';
import image from '../images/Pancakes1.jpg
import $ from 'jquery';
import 'bootstrap/css/bootstrap.min.min.css';
import 'bootstrap';
import '@fortawesome/fontawesome-free/js/all';
$(document).ready(() => {
    // Print the current time
    $('.js-content').html(`<i class="fas fa-clock"></i> ${ getDateString() }`);
    // Display the image
    $('<img />')
        .attr('src', image)
        .attr('alt', 'Always provide a descriptive alt text.')
        .appendTo('body');
    // Display the Bootstrap modal window
    $('.js-modal').modal({
        show: true,
        keyboard: true
    });
});