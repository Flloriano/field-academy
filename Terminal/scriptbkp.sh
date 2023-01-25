#!/bin/bash
Pasta=FIELD_ACADEMY 
if [ -d "$Pasta" ]; then
	echo "$Pasta existe"
	touch $Pasta/helloWorld.js
else 
	echo "$Pasta não existe"
	mkdir FIELD_ACADEMY
	touch $Pasta/helloWorld.js

sudo apt-get install -y nodejs

node helloWorld.js  

fi




