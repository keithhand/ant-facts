FROM python:alpine3.7 AS test

LABEL maintainer="Keith Hand <keithhand.dev>"
LABEL version="1.0"

RUN pip install slackclient

WORKDIR /app
ENTRYPOINT [ "python" ]
