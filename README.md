# Получаем и выводим весь список контактов в виде таблицы (console.table)
node index.js --action list
https://monosnap.com/file/pQTEfwQY2L6UFPqMOlI3Pyis5NHfpF

# Получаем контакт по id
node index.js --action get --id 5
https://monosnap.com/file/X44jLSOqf7Cnk3YKlIoHYh0YB0wkDa

# Добавялем контакт
node index.js --action add --name Mango --email mango@gmail.com --phone 322-22-22
https://monosnap.com/file/ja5QH0pUOm8xZ7lzKpL3KURr9anxCX

# Удаляем контакт
node index.js --action remove --id=3
https://monosnap.com/file/ET6L2dMGQMWxHa82hHQCSZW1Js1Ue9

