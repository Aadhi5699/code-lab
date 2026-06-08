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
# c suffix stands for bytes
find . -type f -size 1033c ! -executable
# 2 = Standard Error , /dev/null is a special, empty file in Linux
2>/dev/null

# -u = Input: A, A, A, B, C, C output: B (Because A and C repeated, they are deleted entirely.
# Strings just show human readable text, filters out the binary junk.
sort data.txt | uniq -u
strings data.txt | grep "=="

# keep it .gz to decompress, xxd - Creating and reversing hex text.
mv data data.gz
gunzip data.gz