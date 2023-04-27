#!/bin/bash
# Takes URL, send POST request to the passed URL, shows the body of the response.
curl -s -X POST -d "test@gmail.com&subject=I will always be here for PLD" "$1"
