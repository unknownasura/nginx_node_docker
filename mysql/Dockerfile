FROM mysql:8.0

ENV MYSQL_DATABASE=appdb
ENV MYSQL_ROOT_PASSWORD=root

COPY ./Initial.sql /docker-entrypoint-initdb.d/
