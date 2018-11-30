#!/bin/bash

for f in *.jpg; do
  convert ./"$f" -resize x200 ./"$f"
done
