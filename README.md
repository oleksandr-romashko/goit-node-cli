# Contacts management CLI application

#### goit-node-cli

<p align="center">
  <img align="center" src="./assets/thumbnail.jpg" width="720" title="Project thumbnail" alt="project thumbnail">
</p>


<h4 align="center">
  Command-line application to store and manage your contacts.
</h4>


## Project description

Store and manage your contacts using a command-line interface: 

* Display the entire list of stored contacts
* Retrieve specific contacts by ID
* Add new contacts
* Remove existing contacts

## Quickstart

1) Download the files from the [repository](https://github.com/oleksandr-romashko/goit-node-cli).
2) Make sure you have the [latest Node.js LTS version](https://nodejs.org/en/download/package-manager) installed on your machine. 
3) Install the application dependencies using the `npm install` command in your terminal.

## Usage

1) Retrieves and displays the entire list of contacts as a table (console.table):
    ```bash
    node index.js -a list
    ```
2) Retrieves a contact by ID and logs the contact object to the console or null if a contact with that ID does not exist:
    ```bash
    node index.js -a get -i 05olLMgyVQdWRwgKfg5J6
    ```
3) Adds a contact and logs the newly created contact object to the console:
    ```bash
    node index.js -a add -n Mango -e mango@gmail.com -p 322-22-22
    ```
4) Removes a contact and logs the deleted contact object to the console or null if a contact with that ID does not exist:
    ```bash
    node index.js -a remove -i qdggE76Jtbfd9eWJHrssH
    ```