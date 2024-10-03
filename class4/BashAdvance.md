_Bash_ :- Command line interpreter language that lets you interact with your operating system

**Some different options with ls Commands**

ls -l "folderName"
It will give us ---- permission number-of-references owner-name group-owner-name size-in-bytes last-modified-date-and-time name-of-directory

ls -r "folderName"
gives the details of the multiple subdirectory or folders

ls -t "folderName"
files updated recently -> files updated lastly

ls -la "folderName"
gives us all the hidden directories

ls -lRa "folderName"
gives the hidden files recursively

ls -s "folderName"
directory by size

ls -lR | grep '.fileType'

- look and find the certain directory inside the folder, recursively
- eg:- ls -lR | grep .jsx

cd -> change directory
cd "folderName" -> jump into the "folderName" directory
cd .. -> popping out from the "folderName" directory

_touch_ -> command to create new file
_to write in the file created_ -> cat > "fileName"
Ctrl + d -> to stop writing in the file
cat "fileName" -> to check what is writtten in the file

**touch "newFile" && cat > "newFile"** -> combined command to create a file and write into that file

**to append more details in the file**
cat >> "fileName"
data will get appended at the end of the file

mkdir -> to create a new directory
**mkdir "newFolder" && cd "newFolder"** -> combined command to create a directory and move into that directory

**Reursively create the directory**4
mkdir -p "folderName"/"fileName"
mkdir -p "folderName"/"fileName2"
mkdir -p "folderName"/"fileName3"
mkdir -p "folderName"/"fileName4"

for Eg:- mkdir -p frontend/index.html
mkdir -p frontend/style.css
mkdir -p frontend/index.js

**Renaming a file**
mv index.js script.js -> renaming the index.js file to script.js

**Move files from one place to another**

```Bash Code
mv frontend 100xdevs
```

Two possible scenarios: -> yaa to move karegi

- Moving frontend to the 100xdevs directory: If 100xdevs is an existing directory, the frontend folder or file will be moved inside that directory.

After the command, the directory structure would look like 100xdevs/frontend.

-> yaa to directory ka naam change kar degi

- Renaming frontend to 100xdevs: If 100xdevs does not exist, the mv command will rename frontend to 100xdevs.

After the command, the directory frontend will no longer exist, and it will be renamed to 100xdevs.

**Copying the files from one folder to another one**
cp frontend/index.html backend
-> copying the index.html file from the frontend folder to the backend folder

Recursively copying the test directory from the frontend folder to the backend folder

**Removing the file**
-> rm command to remove a file: rm filename
-> Use the rm -r command to remove a folder and its contents: rm -r foldername
-> to remove the folder inside a directory
rm -r folderName/anotherFolderName
anotherFolderName will get removed

**Changing the file permissions**
-> we can decide that which user can do what or whether he can read, write, or etc.
chmod: Change file permissions

u -> user
g -> group

- -> adding permissions

* -> revoking permissions
  w/2 -> write
  r/4 -> read
  x/1 -> execute
  r&w/6
  777 -> to give all the permissions

eg: chmod u+x fileName
permission added or given to user to execute the file named fileName
also can be done by using the numbers instead of using the w/r/x ---> 2/4/1

**To give message**
echo "Ram Ram" --> IT will print the text "Ram Ram"
echo $PATH --> to give you all path variables
head -> gives the first 10 rows of the file
tail -> gives the last 10 rows of the file
first 20 -> head -20 fileName
last 20 -> tail -20 fileNAme
certain section of particular file

tail -n +25 fileName.txt | head 25 fileName.txt -> getting in range

wc fileName.txt -> number-of-lines number-of-words number-of-characters

grep "name-need-to-be-found" fileName -> gives the list of that word which need to be found

grep "name-need-to-be-found" fileName | wc -> gives the list as well as the count of the number

**Grep Command**
grep -c "setosa" iris.data.csv
-> finds the word "setosa" in the file

grep -h "setosa" iris.data.csv -> this command gives us all the lines in which "setosa" matches

grep -hi "setosa" iris.data.csv -> this command will give us all the instances irrespective of the sensitiveness of the case, i.e. there can come capital, lowercase, etc. all type of the "setosa"

grep -hir "setosa" . -> occurences not only in file but the whole current directory

grep -hinw "setosa" fileName -> this will give us only "setosa"✅ but will not give "\__stosa_" ❌

grep -o "setosa" iris.data.csv -> gives us only the matched part

grep -w "setosa" iris.data.csv -> gives us the output

_history_ -> command used to see the history of all the commands

**To automate the script** -> we uses the script

grep "error" log.txt
grep -v "info" log.txt
grep -A error log.txt -> preceding
grep -B error log.txt -> succeding
grep -C error log.txt -> both preceding and succeeding

replicate the functionlaity of grep with sed command
sed -n '/ERROR/ p' log.txt

-> replacing the occurences of file of ERROR with CRITICAL
sed 's/ERROR/CRITICAL' log.txt

-> creating a backup file
sed '3 s/ERROR/CRITICAL' log.txt

-> for specific set of lines, replacing the CRITICAL with VERYCRITICAL
sed '3,6 s/CRITICAL/VERYCRITICAL/' log.txt

**awk**
awk 'CRITICAL/{print $0}' log.txt
awk '{gsub(CRITICAL/, "ERROR")}{print}' log.txt -> substituting the word Critical with "ERROR" and printing it out, but not changing with file

awk '{print $1, $2}' log.txt -> printing the 1st and 2nd columns of the file

awk -F "," '{print $1, $2}' log.txt -> specifying the delimiter

Doing some arithematic operations on the top of our file
awk '{count[$2]++} END {print count["ERROR"]}' log.txt
-> finds the word "error" in the second column of the file log.txt and print all the occurences
