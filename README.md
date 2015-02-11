#Requirements

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
####Install Laravel packages
```sh
cd src/
composer install
```

#Grunt commands
For rebuilding CSS from SASS use:
```sh
grunt compass
```

For building a minified/cache busting app:
```sh
grunt build
```