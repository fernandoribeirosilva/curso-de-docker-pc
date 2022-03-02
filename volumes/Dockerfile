FROM php:8-apache

WORKDIR /var/www/html/

COPY . . 

EXPOSE 80

# vai dar permição para www-data:www-data em todo o meu projeto
RUN chown -R www-data:www-data /var/www 