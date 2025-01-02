#!/bin/bash
echo -e '<IfModule mod_rewrite.c>\n\tRewriteEngine On\n\tRewriteBase /\n\t# Redirige todas las solicitudes a index.html\n\tRewriteRule ^index\.html$ - [L]\n\tRewriteCond %{REQUEST_FILENAME} !-f\n\tRewriteCond %{REQUEST_FILENAME} !-d\n\tRewriteRule . /index.html [L]\n</IfModule>' > dist/.htaccess
yarn
yarn build
