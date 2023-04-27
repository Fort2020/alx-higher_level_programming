#!/bin/bash
# Send JSON POST request to URL passed as first argument, shows the body of the response.
curl -s -H "Content-Type: application/json" -d "$(cat "$2") "$1"
