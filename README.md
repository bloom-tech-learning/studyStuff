# Hello Web48 - Full Stack Web Development
## Fork and clone this repo. When you need to commit use the following commands.
```sh
git status
git add --all
git status
git commit -m "your commit message"
git push origin master
```

## How to set up GIT SSH
```sh
ssh-keygen -t ed25519 -C "your_email@example.com"
eval "$(ssh-agent -s)"
open ~/.ssh/config
touch ~/.ssh/config
open ~/.ssh/config
Host *
  AddKeysToAgent yes
  UseKeychain yes
  IdentityFile ~/.ssh/id_ed25519
ssh-add -K ~/.ssh/id_ed25519
pbcopy < ~/.ssh/id_ed25519.pub
```
### go to github copy from "pbcopy < ~/.ssh/id_ed25519.pub" cmd+V
### test git
```sh
ssh -T git@github.com
```