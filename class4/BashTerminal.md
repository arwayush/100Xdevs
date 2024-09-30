- pwd :- (print working directory)
  gives me the base root directory
  In case of vs code terminal, gives me the current working directory

- cd (Change Directory) :- It will navigate the directory for us
  eg: cd desktop -> into the desktop
  eg: cd .. -> moves out of the desktop folder

- ls (listing all the files) :- It will gives all the files/folders in that directory, let me see the files

- mkdir (it is used to make the directory i.e. folders)

- touch :- command used to create a new file

- cat:- print the contents of the file

_- vi :- The Vim Command_
---- To enter a file "vi fileName"
---- files cannot be edited directly you need to on the insert mode by pressing "i" button
---- To exit the insert mode, press "escape"
---- To move out of the file structure "escape" -> ":q!"
---- :w -> save the changes but do not exit
---- :wa -> Save all open multiple files without quitting.
---- :w filename -> Save the file with a different name and continue editing the current file.
---- :wq -> save and exit

- mv -> move the files from one folder to another
  eg:- mv file.txt new-folder
  moving the file "file.txt" to "new-folder"

- cp -> it lets me copying the files
  eg:- cp file.txt new-folder
  cp -r test3 test2

**Node related commands**

- nvm -> node version manager, lets you know the version related things
  // check version
  node -v || node --version

// list locally installed versions of node
nvm ls

// list remove available versions of node
nvm ls-remote

// install specific version of node
nvm install 18.16.1

// set default version of node
nvm alias default 18.16.1

// switch version of node
nvm use 20.5.1

// install latest LTS version of node (Long Term Support)
nvm install --lts

// install latest stable version of node
nvm install stable
