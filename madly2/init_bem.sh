# !/bin/bash
init_bem(){
cd $1

local name="$2$1"
local scss="_$name.scss"

if [[ $1 =~ ^[^_] ]]
then
	local name="$1"
	local scss="$name.scss"
fi

if [ ! -e $scss ]
then
	if ! $3
	then
		touch $scss
	fi
fi

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

# Init bem structure in src/common/
if [ -d src/common/ ]; then
	cd src/common/

	# init modules
	if [ -d common.modules ]; then
		cd common.modules
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
	if [ -d common.blocks ]; then
		cd common.blocks
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
	if [ -d common.pages ]; then
		cd common.pages
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
