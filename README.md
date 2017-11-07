# SSR

```sh
$ echo FLAGFLAGFLAG > ./flag
$ docker build -t ssr .
$ docker run -d -it --rm --name ssr -p 8080:8080 ssr
```
