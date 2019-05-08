# README #

PSO Section ID Calculator v1.1

JavaScript Section ID calculator for Phantasy Star Online: Blue Burst that focuses on code readability and generous commenting. 
The mission behind this is to help preserve knowledge of PSO's section ID generation by creating an open-source calculator that can be easily used by the layman, and easily understood by the novice programmer.

Intended for use with the Ultima server (https://phantasystaronline.net/); compatibility not guaranteed on other game versions/servers. You are encouraged to fork this project for your PSO server or preferred game version.

### Setup ###

To install on a modern web server like Apache2, copy "index.html" and "SectionIDCalc.js" into the same website directory and access "index.html" in your browser of choice.

It can also be used locally on most modern computers by placing "index.html" and "SectionIDCalc.js" in a folder together and opening "index.html" in a modern web browser (i.e. Chrome).

### Usage ###

Select your character class in the dropdown menu, then start typing your character name into the text input box. You will see your Section ID appear below the text input.

### Formula ###

Phantasy Star Online's Section IDs are not random; they can be predicted fairly simply as long as you know your game version and server's class offset and character values.

Every letter, number, and punctuation in a PSO character's name are assigned a specific known value from 0-9. The value for each letter is added up into a subtotal.
Then, a class offset is added to the subtotal. Every class in the game has a known value ranging from 0-9.
Finally, the last number of the total is taken and translated into a Section ID.

In practice:
Let's assume we have a HUcast named 'PSOCalc'.
Add up the values of each individual letter in the name:

- P = 0
- S = 3
- O = 9
- C = 7
- a = 7
- l = 8
- c = 9
- Subtotal = 43

(Note that, as shown in this example, capital and lowercase letters may have different values)

Now, add in the class offset to the subtotal. The class offset for HUcast is 7.
Total = 50

Take the last number from the total, in this case '0', and translate it from the list of section IDs.
0 = Viridia

We know that a HUcast named PSOCalc will be a Viridia!

### License ###

As the purpose of this project is to preserve knowledge regarding PSO, this section ID calculator has been released under the MIT License. You are encouraged to share, fork, and modify this calculator to fit your server/game version's needs.

See the attached license file for a full explanation of your rights.

### Changelog ###

v1.1.1

- Minor whitespace cleanup and removal of a dead CSS link

v1.1

- Section ID now auto-calculates when name or class is changed

v1.0

- Working PSO:BB section ID calculator
