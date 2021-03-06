<!doctype html>
<html class="no-js" lang="">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title></title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
    
        <!-- build:css(src/public/) css/app.min.css -->
        <link rel="stylesheet" href="/components/normalize.css/normalize.css">
        <link rel="stylesheet" href="/css/app.css">
        <!-- endbuild -->
        <!-- build:js(src/public) js/vendor/modernizr.min.js -->
        <script src="/components/modernizr/modernizr.js"></script>
        <!-- endbuild -->
    </head>
    <body data-config='{"env":"{{ App::environment() }}"}'>

        <div id="app"></div>

        <!-- build:js(src/public/) js/vendor/require.min.js -->
        <script src="/components/requirejs/require.js"></script>
        <!-- endbuild -->
        <!-- build:js(src/public/) js/app.min.js -->
        <script src="/js/app.js"></script>
        <!-- endbuild -->

    </body>
</html>