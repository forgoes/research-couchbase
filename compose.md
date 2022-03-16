### To boot up a couchbase cluster
- docker-compose up -d 
- docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' couchbase-1 
- docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' couchbase-2 
- set cluster in http://127.0.0.1:8091/ui/index.html
