const fs = require("fs").promises;
const path = require("path");
require("colors");
const { nanoid } = require("nanoid");



const contactsPath = path.join(__dirname, 'db', 'contacts.json');
  
  // TODO: задокументировать каждую функцию
  const  listContacts = async () => {
 try {
		const contacts = await fs.readFile(contactsPath, { encoding: 'utf-8' })
		return JSON.parse(contacts)
	} catch (error) {
		console.log(`Error: ${error.message}`.red)
	}
  };

function getContactById(contactId) {
  // ...твой код
}

function removeContact(contactId) {
  // ...твой код
}

function addContact(name, email, phone) {
  // ...твой код
}
