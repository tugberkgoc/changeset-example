# changeset-example

## Basic Installation

### Step 1: Installing Node Version 18

```shell
nvm install 18
nvm use 18
```

### Step 2: Install npm Packages

Run this command at the root of the project.
   
```shell
npm install
```
### Step 3: Building

The `static` folder is automatically generated during the build process. It contains all the necessary files that are produced from the workspaces located under the `lib` folder.

When you run the build command:

```shell
npm run build
```

## Running / Testing Locally

You need to have two terminals running at the same time.

### Step 1: Start Watcher

Run this command at the root of the project.

```shell
npm run watch
```
