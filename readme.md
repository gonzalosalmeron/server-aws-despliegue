# HTTP-SERVER
Este es un mini servidor en node.js para usarlo junto a aws-cli en la asignatura de despligue

## :open_book: Pasos a seguir
1. Instalar nvm e instalar node

## :computer: :minidisc: Instalación de nvm
```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash

```
```
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```
```
nvm install node ---lts
```
Esta información está sacada del [repo oficial](https://github.com/nvm-sh/nvm)

## :package: Añadimos pm2 al proyecto
```
npm install pm2
```
