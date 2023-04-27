#!/bin/bash
# Takes URL as an argument, send GET request to the URL, shows the body of the response.
curl -sH "X-School-User-Id: 98" "$1"
