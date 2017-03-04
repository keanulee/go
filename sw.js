importScripts('bower_components/sw-toolbox/sw-toolbox.js');

toolbox.router.get('/(.*)', toolbox.fastest);
