#Requirements

- NPM >= 1.4.28
- Ruby >= 1.9.3
- Compass >= 1.0.3
- Bower >= 1.3.12
- PHP >= 5.4
 - Mcrypt PHP Extension
 - OpenSSL PHP Extension
 - Mbstring PHP Extension

#Installation

####Install NPM packages
```sh
npm install
```
####Install bower components
```sh
bower install
grunt compass
```
####Install Laravel
```sh
cd src/
composer install
```

Make sure you setup your own **.env** file correctly, you can copy the .env.example file.

#Grunt commands
For rebuilding CSS from SASS use:
```sh
grunt compass
```

For building a minified/cache busting app:
```sh
grunt build
```

For auto building SASS use:
```sh
grunt watch
```