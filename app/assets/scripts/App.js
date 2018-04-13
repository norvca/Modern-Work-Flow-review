import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import $ from 'jquery';

var mobileMunu = new MobileMenu();
new RevealOnScroll($('.feature-item'), "63%");
new RevealOnScroll($('.testimonial'), "40%");