#!/bin/bash
# Make request to 0.0.0.0:5000/catch_me, cause server to respond message: "You got me"!
curl -sL -X PUT -H "Origin: HolbertonSchool" -d "user_id=98" 0.0.0.0:5000/catch_me
