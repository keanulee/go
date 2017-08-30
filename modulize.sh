# Clone from repo, since modulizer's current working directory mode doesn't seem
# to work.
modulizer keanulee/go
cd modulizer_workspace/go


# Install dependencies in the go/ directory as if it was the app root.
yarn install
# modulizer didn't match this third-party bower dependency to the npm equivalent.
yarn add highcharts


# Add missing imports. Note that some imports define globals,
# so we don't import symbols from them.
echo "import * as Polymer from './node_modules/@polymer/polymer/polymer-element.js';
$(cat go-background.js)" > go-background.js

echo "import * as Polymer from './node_modules/@polymer/polymer/polymer-element.js';
$(cat go-clock.js)" > go-clock.js

echo "import * as Polymer from './node_modules/@polymer/polymer/polymer-element.js';
import './node_modules/@polymer/iron-ajax/iron-ajax.js';
$(cat go-transit.js)" > go-transit.js

echo "import * as Polymer from './node_modules/@polymer/polymer/polymer-element.js';
import './node_modules/@polymer/iron-ajax/iron-ajax.js';
import './node_modules/highcharts/highcharts.js';
$(cat go-weather.js)" > go-weather.js


# Fix the last script tag in index.html - the HTML imports in <head> are already
# replaced by JS modules; don't need to do it again here.
sed -i '' -e 's/<script type="module">/<script>/g' -e "s/import '.*\.js';/ /g" index.html
