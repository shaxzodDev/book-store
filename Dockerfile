FROM adoptopenjdk:11-jre-hotspot
COPY /Librarian/target/demo-0.0.1-SNAPSHOT.jar /code/book-store/target/
WORKDIR /code/book-store/target/
ENTRYPOINT ["java", "-jar", "demo-0.0.1-SNAPSHOT.jar"]