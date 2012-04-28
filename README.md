# filtrify.js


## What?
Filtrify is an advanced tag filtering plugin, inspired by [Chosen](http://harvesthq.github.com/chosen/") multiple select feature and Orman Clark’s [Vertical Navigation Menu](http://webdesigntutsplus.s3.amazonaws.com/tuts/291_vertical_menu/demo/index.html).
Advanced because you can search tags within tags and filter items by multiple tags from different categories and get a live feedback on the number of items containing related tags.



## How?
Filtrify makes use of the new HTML5 "data" attribute to store the metadata.  
All you have to do is include a "data" attribute for each item in your list with the respective tags (metadata). If you have more than one category of tags, include them in another "data" attribute. You can add as much categories of tags as you need.  
Filtrify will then go through all the data attributes you included in your items and it will create a search menu with as many fields as the different number of categories (data-attributes) you provided. Each field label in the menu fires a "popup" filtering panel and there's where all the magic happens.  
The plugin instanciation is very simple, you just have to pass a "containerID" and a "placeHolderID" which is the ID of the element where you want to place the menu.

Visit filtrify's [project page](http://luis-almeida.github.com/filtrify/) to read the documentation.



## Demos
* [Single category](http://luis-almeida.github.com/filtrify/music.html)
* [Multiple categories](http://luis-almeida.github.com/filtrify/movies.html)
* [Highlight matched items with the callback function](http://luis-almeida.github.com/filtrify/highlight.html)
* [Add a legend with the callback function](http://luis-almeida.github.com/filtrify/legend.html)
* [Instantiate with a custom query](http://luis-almeida.github.com/filtrify/query.html)
* [Trigger a custom query](http://luis-almeida.github.com/filtrify/trigger.html)
* [Reset all filters](http://luis-almeida.github.com/filtrify/reset.html)
* [Close panel after adding a tag](http://luis-almeida.github.com/filtrify/close.html)
* [Block "data" attributes from being added as categories](http://luis-almeida.github.com/filtrify/block.html)
* [Load images with Lazy Load](http://luis-almeida.github.com/filtrify/lazyload.html)
* [Add pagination with jPages](http://luis-almeida.github.com/filtrify/jpages.html)



## Browser compatibility (tested):
IE7 (buggy)  
IE8+, Chrome, Firefox, Opera and Safari (current versions)



## Release log:  

#####v0.2 (04.04.2012)  
* Isotope integration demo added  
* Bug fix: search icon disappearance issue in the "jPages" demo

#####v0.1.1 (01.04.2012)  
* Bug fix: 1px jump when toggling the filter  

#####v0.1 (22.03.2012)  
* First release


