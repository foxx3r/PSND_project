# Projeto PSND

para rodar o script do projeto PSND, voce precisa dos seguintes requisitos:

1 - Um PC com sistema operacional Unix-like ou um emulador de terminal

2 - O Node.js instalado em sua maquina

3 - O NPM instalado em sua maquina

4 - O Yarn instalado

5 - Clone este repositorio

6 - As dependencias necessarias

7 - O MongoDB instalado

# Instalacao

**Debian e derivados:**

`$ sudo apt install nodejs`


**Mac OS X**

1 - Instale o homebrew em sua maquina

2 - Execute o seguinte comando:

`$ brew install nodejs`


**Arch Linux e derivados:**

`$ sudo pacman -S nodejs`


**Fedora e derivados:**

`$ sudo dnf install nodejs`

ou

`$ sudo yum install nodejs`


**OpenSUSE e derivados:**

`$ sudo zypper install nodejs`


**FreeBSD e derivados:**

`$ sudo pkg install nodejs`


**Termux:**

`$ pkg install nodejs`

ou

`$ apt install nodejs`


**Windows:**

Instale o Node.js no windows: https://nodejs.org


# Instalando o Yarn

`npm i -g yarn`


# Clonando o projeto

1 - Instale o Git de acordo com a instalacao do NodeJS especificado acima, trocando a palavra "nodejs" por "git"

2 - Digite:

`$ git clone https://github.com/foxx3r/PSND_project`


# Instalando dependencias necessarias

1 - Entre no diretorio do projeto:

`$ cd PSND_project`

2 - Instale as dependencias necessarias com:

`$ yarn install`


# Instalacao do MongoDB

1 - Veja o tutorial de instalacao do MongoDB no site oficial para seu respectivo sistema operacional https://www.mongodb.com/download-center/community

2 - Execute o comando:

`$ mongod`


# Executando o projeto

1 - Entre no diretorio src:

`$ cd src`

2 - Execute o servidor:

`$ node server.js`

**Nota: se quiser por algum motivo trocar o host e a porta, no arquivo src/.env voce pode altera-los**
