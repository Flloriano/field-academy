
#!/bin/bash
Pasta=FIELD_ACADEMY
if [ -d $Pasta ]; then
	echo "$Pasta existe"
	sudo  apt-get  install  nodejs
	touch $Pasta/helloWorld.js
	
	echo "var mens = 'Hello Field Academy'; function helloField(){console.log(mens); } helloField();" > $Pasta/helloWorld.js
	node $Pasta/helloWorld.js
else 
	mkdir FIELD_ACADEMY
	sudo  apt-get install nodejs
	echo "$Pasta não existe"
	touch $Pasta/helloWorld.js
	echo "var mens = 'Hello Field Academy'; function helloField(){ console.log(mens); } helloField();" > $Pasta/helloWorld.js
	node $Pasta/helloWorld.js  
fi
mv $Pasta/helloWorld.js /home/elias
zip -r FIELD_ACADEMY.zip FIELD_ACADEMY/
rm -r FIELD_ACADEMY



