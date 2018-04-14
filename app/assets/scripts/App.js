import $ from 'jquery';
import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';

var mobileMunu = new MobileMenu();
new RevealOnScroll($('.feature-item'), "63%");
new RevealOnScroll($('.testimonial'), "40%");
var stickyHeader = new StickyHeader();