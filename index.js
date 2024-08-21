import { program } from "commander";
import db from "./contacts.js";

/**
 * Available action types.
 */
const ACTIONS_LIST = Object.freeze({
  LIST: "list",
  GET: "get",
  ADD: "add",
  REMOVE: "remove",

  /**
   * Gets the ordered list of actions.
   * @returns {string[]} List of actions in the defined order.
   */
  getOrderedActions: function () {
    return [this.LIST, this.GET, this.ADD, this.REMOVE];
  },
});

program
  .option(
    "-a, --action <type>",
    `chosen action, one of these: ${ACTIONS_LIST.getOrderedActions().join(
      " | "
    )}`
  )
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");
program.addHelpText(
  "after",
  `

Example call:
  Display the entire list of contacts:
  $ node index.js -a list

  Get single contact by its id:
  $ node index.js -a get -i 05olLMgyVQdWRwgKfg5J6

  Add new contact to the list:
  $ node index.js -a add -n Mango -e mango@gmail.com -p 322-22-22

  Remove contact from the list:
  $ node index.js -a remove -i qdggE76Jtbfd9eWJHrssH`
);
program.showHelpAfterError("(use --help for additional information)");
program.parse();

const options = program.opts();

/**
 * Invokes action based on provided action type.
 * @param {string} param.action Action type.
 * @param {object} param.data Contact object containing contact information.
 */
async function invokeAction({ action, ...data }) {
  try {
    switch (action) {
      case ACTIONS_LIST.LIST: {
        const contacts = await db.listContacts();
        if (!contacts.length) {
          console.log("No contacts found in the contacts list.");
          break;
        }
        const tableData = contacts.map(({ id, name, email, phone }) => ({
          ID: id,
          Name: name,
          "E-mail": email,
          "Phone number": phone,
        }));
        console.table(tableData);
        break;
      }
      case ACTIONS_LIST.GET: {
        const contact = await db.getContactById(data.id);
        console.log(contact);
        break;
      }
      case ACTIONS_LIST.ADD: {
        const addedContact = await db.addContact({ ...data });
        console.log(addedContact);
        break;
      }
      case ACTIONS_LIST.REMOVE: {
        const removedContact = await db.removeContact(data.id);
        console.log(removedContact);
        break;
      }

      default:
        console.warn("\x1B[31m Unknown action type!");
    }
  } catch (error) {
    console.warn(`\x1B[31m ${error.message}`);
  }
}

invokeAction(options);
