#!/bin/bash

for f in *.jpg; do
  convert ./"$f" -resize x100 ./"$f"
done
