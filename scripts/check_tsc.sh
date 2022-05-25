#!/bin/bash

tsc --emitDeclarationOnly --outDir types_temp

RESULT=$(diff -r types types_temp)

rm -rf types_temp

if [ "$RESULT" != "" ]
then
    echo "Please run 'tsc' command first to generate type declarations!" && exit 1;
fi

exit 0;
