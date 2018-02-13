#!/bin/bash
# Generates a dependency graph
# run it from the .meta directory, not from the project root
dot -Tpng ../dependencies.gv -o dependencies.png
