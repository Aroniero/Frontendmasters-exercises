# npm

1) First u have to check if u have node and npm:

```
node -v
npm -v
```

2) In folder of your project. Flag -y means that u skip all question about this file.

```
npm init -y
```

it will give your a package.json, e.g.:

```javascript
{
  "name": "adopt-me",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}

```

# Prettier

```
npm install -D prettier
or
npm i -D prettier
```

-D means Developer dependencies, so when i am deploying my code to production I dont need to go Prettier with it. It is just for me for my local environment.

In package.json we are adding in script tag:

```json
"scripts": {
    "format": "prettier \"src/**/*.{js,html}\" --write",
 },
```

It will run prettier on any file in src folder which has either js extension or html

In Settings of VSCode (Ctrl + , ) you have to set up 2 things:
	1) Format on save -> checked
	2) Require Config -> checked          this will only run prettier when u install it on your project. So when u get other project when there is not prettier u wont break it

Next you have to create file in root folder called.
**.prettierrc**
in this file you have to create empty object and save it. 

```
{}
```

Empty Object means that u want default settings of Prettier

# ESLint 

```
npm install -D eslint eslint-config-prettier
```

eslint-config-prettier       <-- means that prettier takes charge over eslint in things like spaces.

then create new file called:
**.eslintrc.json**
inside we can make rules:

```json
{
  "extends": ["eslint:recommended", "prettier", "prettier/react"],
  "plugins": [],
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "env": {
    "es6": true,
    "browser": true,
    "node": true
  }
}
```

in package.json we are adding:

```json
"scripts": {
    "lint": "eslint \"src/**/*.{js,jsx}\" --quiet",
 },
```

Then we should install ESLint Dirk Baeumer from VSCode extensions

# gitignore

```
node_modules/
.DS_Store
.cache/
dist/
coverage/
.vscode/
.env
```
