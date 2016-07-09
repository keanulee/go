importScripts('https://polygit.org/sw-toolbox+googlechrome+*/components/sw-toolbox/sw-toolbox.js');

toolbox.router.get(/^https:\/\/keanulee.github.io\//, toolbox.fastest);
toolbox.router.get(/^https:\/\/polygit.org\//, toolbox.fastest);
toolbox.router.get(/^https:\/\/code.highcharts.com\//, toolbox.fastest);
