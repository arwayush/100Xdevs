**git**
free and open source version control system

**version control system**

- A system that keeps the track of our files or projects
- it allows you to revert the selected files to previous state,

* revert the entire project to previous state,
* compare changes over time,
* see who modiefied something so that we may know what is causing problem or what is the issue,
* who made it and when with the details

other ways are not scalable and contains the duplicacy of the work

- in sharing the data we need to use either USB, or email, or data sharing, or drive link, so process is very cumbersome
- Therefore the version control system is very important

**Types of version control system**

1. Centralized:

- There is the centralized server which is used to access the code and make any changes to the code
- all works on the central server
- so, the problem here is common point of failure
- It is not good or very effective for the large scale projects
- Eg: subversion and team foundation server

2. Distributed:

- Group of people have the complete project along with its history within the machine
- You not need to be online
- you can push on the online repo
- Eg: Git and Mercurial

Why Git ?

- Free
- open source
- scalable
- super fast
- cheap branching and merging

What is Git hub ?

- Github is a web-based hosting service for git repositories
- git can be used without github but github cannot be used without git

_Git_
used for version control
installed locally on computer
trackes the changes made to file

_github_
used for hosting git repos
cloub based
provides a web interface to view a file changes

Private Workplace / local repositories

- git gives the private copy of the whole repo,
- users can perform many operations such as add, remove, rename, move, commit and manny more

push -> send change to another repo, (may require permission)
pull -> grab a change from a repo

**Basic workflow of git**
_Working directory_ ----> git add ----> _Staging area_ ----> git commite ----> _repository_
Step - 1. you modify a file from the working directory
Step - 2. You add thses files to the staging area
Step - 3. You perform commit operation that moves the file from the staging after the push operation it stores the changes permanently to the git repo

_BLOBS_ - Binary Large Object
Each version of file is represented by the Blob,
It holds the data but doesn't holds the metadata
it is a binary file and in git database
It is named as SHA1 or hash of the file
git files are not addressed by the names, it is content addressed

_Trees_
Tree is an object, which represents the directory
It holds the blobs as well as other sub-directories
A tree is a binary file which stores the references to the blobs and trees

_Commit_

- Commit holds the current state of the repository, A commit is also named by SHA1 hash
- commit object = a node of the linked list
- every commit object has a pointer to the parent commit object
- from a given commit, you can traverse back by looking at the parent pointer to view the history of commit
- If a commit has multiple parent commits, then that particular commit has been created by mergin 2 branches

**Commands Of the Git**
_Clone_ - Brings a repo hosted somewhere like github into a folder or your local machine
_Add_ - Tracks your files and changes to git, sends to the staging area
_Commit_ - Save your files to the git
_push_ - upload your commits to the git repo like github
_pull_ - download the chagnes from a repo to your local repo

**Git Branching**

- In case of testing the feature which we will add soon in our working project, so in that case we will not directly add the files in the main or master branch
- we can create feature branch, in which testing can be done and if good than we can _merge_ them into the main branch
- _git checkout_ -> to move accrosss the branches
- _git checkout -b "branchName"_ -> to create and switch to a new branch
- _git branch -d "branchName"_ -> to delete the branch

_Git Merge Conflict_

- 2 or more developers are working on a common file, dev1 has pushed and when dev2 is trying to push changes since there is already changes made by the dev1, then git becomes confused what to keep and what to remove

Types of Merge Conflicts

Type:-1 While starting the merge process

- If there are changes in the working directory's stage area for the current project merging won't start
- in this case conflicts happens due to pending changes that need to be stabilised

Type:-2 During the merge process

- When there is the conflict between the local branch and the branch being merged
- Git resolves as much as possible, but there are things that need to be resolved manually

_Git Commands to resolve conflicts_
-> git log --merge -> produce the list of commands that are causing the conflict
-> git diff -> identifies the differences between the states repositories or files
-> git checkout -> used to undo the changes made to the file, or for changing branches
-> git reset --mixed -> used to undo the changes to the working directory and staging area
-> git merge --aborrt -> helps in exiting the merge process and returning back to the state before the merging began
-> git reset -> used at the time of merge conflict to reset the conflicted files to their original state
