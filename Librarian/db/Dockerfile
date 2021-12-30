FROM postgres:13.1-alpine
USER postgres
RUN whoami
ADD ./sql/create_countries.sql /docker-entrypoint-initdb.d/
ADD ./sql/insert_countries.sql /docker-entrypoint-initdb.d/
ADD ./sql/create_roles.sql /docker-entrypoint-initdb.d/
ADD ./sql/insert_roles.sql /docker-entrypoint-initdb.d/
#RUN chown postgres:postgres /docker-entrypoint-initdb.d/create_countries.sql
#RUN chown postgres:postgres /docker-entrypoint-initdb.d/insert_countries.sql
ENTRYPOINT ["docker-entrypoint.sh"]
EXPOSE 5432
CMD ["postgres"]