#!/bin/bash
echo "starting deployment...."
git add .
git commit -m "chore: deploy"
git push origin master