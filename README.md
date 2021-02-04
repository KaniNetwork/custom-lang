# Kani custom lang
Create your own custom lang for the Discord Bot Kanishiel

To create your own lang, 

 - Fork this repository
 
 - Modify (this will be explained later how)
 
 - Create a pull request


That's easy as this !



> How to modify with your translation ? 

First of all, 
You will have to copy the example into translation, rename "example" folder with the name of your translation and start creating your custom lang :


 - role_description.js
![Role Example](docs/roleexample.png)

The first part of the role is his name ( ⚠️ You are obliged to provide one, if you want to remove the role of the language, just fill the description with "disable")

After this, we have the description. That can be split in multiple part (here 5) :

First part is the role camp (here Solo), second and after are the power(s) (here there is 4 line to describes the power)

**Disclaimer:** You can't create power, you can just change the descritpion of a power but it will leave it with the classic werewolf game power

PLEASE KEEP THE TEMPLATE, DONT USE SOME FANTASY AND ALSO DONT MOOVE THE ROLE ORDER

 - description_game.js

Fist : channels
![Channel Example](docs/channelexample.png)

The werewolf channels are made in two part : the key, that you have to **never** change and the name, that you're free to change to everything

![Win Example](docs/winexample.png)

In four parts : key (never change), title, description and which camp win

