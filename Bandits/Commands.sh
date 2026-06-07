# Open the file called - located in the current directory. 
# This forces the command to treat the string as a path instead of an option.
cat ./-

# "" or \ could be used to treat this whole as a single filename.
cat "./--spaces in this filename--"

# Files beginning with a . are hidden. 
#The -a flag means show all files, including hidden ones.
ls -a

#The file command examines a file and tells you what kind of data it contains.
file ./*