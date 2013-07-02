#!/bin/sh
#
# Generates index.html from README.md of my project
# see: http://developer.github.com/v3/markdown/#render-a-markdown-document-in-raw-mode 
#
RAW_README_URL=https://raw.github.com/pid/speakingurl/master/README.md
GITHUB_API_URL=https://api.github.com/markdown/raw

curl -s $RAW_README_URL | curl -s --data-binary @- -H 'Content-Type: text/plain' $GITHUB_API_URL 
