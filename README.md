# clip2mark Website

*Easily convert richly formatted text or HTML to [Markdown](http://daringfireball.net/projects/markdown/syntax)*.

## Demo

<https://jimbrig.github.io/clip2mark-site/>

## Purpose

This demo site demonstrates the use of javascript to intake contents from the clipboard (text, rich text, or HTML) and 
return as markdown.

## Usage

Simply launch the site (or open [index.html](index.html) locally) and paste some content into the browser.

You can paste multiple times, however this will overwrite the previous conversion.

## Roadmap

I am currently attempting to implement an express backend API endpoint in the [feature/api branch](https://github.com/jimbrig/clip2mark/tree/feature/api); still under development - see the [develop -> main pull request](https://github.com/jimbrig/clip2mark/pull/1) for progress.

## Tested browsers

-   Chrome 33 (Linux and OS X)
-   Firefox 27 (Linux)
-   Safari 5 (OS X)
-   Internet Explorer 11 (Windows)

Credits: The conversion is carried out by [to-markdown](https://github.com/domchristie/to-markdown), a Markdown converter running in the browser.

***

Jimmy Briggs | 2021

***
