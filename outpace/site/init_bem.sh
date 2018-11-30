# !/bin/bash
init_bem(){
cd $1

local name="$2$1"
local jsx="$name.jsx"
local scss="_$name.scss"

if [[ $1 =~ ^[^_] ]]
then
	local name="$1"
	local jsx="$name.jsx"
	local scss="$name.scss"
fi


if [ ! -e $jsx ]
then
	touch $jsx
fi

if [ ! -e $scss ]
then
	if ! $3
	then
		touch $scss
	fi
fi

# rm .js
# rm .jsx
# rm .scss

dirs=$(ls)
for dir in $dirs
do
	if [ -d $dir ]
	then
		if [[ $dir =~ ^[^_] ]]
		then
			init_bem $dir $dir $3
		else
			init_bem $dir $name $3
		fi
	fi
done
cd ..
}

# Init bem structure in src/
if [ -d src/ ]; then
	cd src/

	# init modules
	if [ -d modules ]; then
		cd modules
		dirs=$(ls)
		for dir in $dirs
		do
			if [ -d $dir ]
			then
				init_bem $dir "" false
			fi
		done
		cd ..
	fi

	# init blocks
	if [ -d blocks ]; then
		cd blocks
		dirs=$(ls)
		for dir in $dirs
		do
			if [ -d $dir ]
			then
				init_bem $dir "" false
			fi
		done
		cd ..
	fi

	# init pages
	if [ -d pages ]; then
		cd pages
		dirs=$(ls)
		for dir in $dirs
		do
			if [ -d $dir ]
			then
				init_bem $dir "" false
			fi
		done
		cd ..
	fi

	# start directtory
	cd ../..
fi

# Init bem structure in src/client
if [ -d src/client ]; then
	cd src/client

	# init modules
	if [ -d modules ]; then
		cd modules
		dirs=$(ls)
		for dir in $dirs
		do
			if [ -d $dir ]
			then
				init_bem $dir "" false
			fi
		done
		cd ..
	fi

	# init blocks
	if [ -d blocks ]; then
		cd blocks
		dirs=$(ls)
		for dir in $dirs
		do
			if [ -d $dir ]
			then
				init_bem $dir "" false
			fi
		done
		cd ..
	fi

	# init pages
	if [ -d pages ]; then
		cd pages
		dirs=$(ls)
		for dir in $dirs
		do
			if [ -d $dir ]
			then
				init_bem $dir "" false
			fi
		done
		cd ..
	fi

	# start directtory
	cd ../..
fi

# Init bem structure in src/admin
if [ -d src/admin ]; then
	cd src/admin

	# init modules
	if [ -d modules ]; then
		cd modules
		dirs=$(ls)
		for dir in $dirs
		do
			if [ -d $dir ]
			then
				init_bem $dir "" false
			fi
		done
		cd ..
	fi

	# init blocks
	if [ -d blocks ]; then
		cd blocks
		dirs=$(ls)
		for dir in $dirs
		do
			if [ -d $dir ]
			then
				init_bem $dir "" false
			fi
		done
		cd ..
	fi

	# init elements
	if [ -d elements ]; then
		cd elements
		dirs=$(ls)
		for dir in $dirs
		do
			if [ -d $dir ]
			then
				init_bem $dir "" false
			fi
		done
		cd ..
	fi

	# start directtory
	cd ../..
fi
