#!/bin/bash
# Takes in a URL, sends request to URL, shows the body size of the response.
curl -s "$1" | wc -c
