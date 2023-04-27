#!/bin/bash
# Send DELETE request to the URL passed first argument and shows the body of the response.
curl -sX DELETE "$1"
