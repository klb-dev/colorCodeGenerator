# ABOUT
This project included using fetch() for getting information from [The Color API](https://www.thecolorapi.com/). The purpose to use HTML input type="color" for the picker and then choose the mode of what colors the user would want. Then it will generate 5 columns of colors based upon the mode. The only value the user will get is a hex code. There is no switching between the values. 
# TOOLS
- HTML - HyperText Markup Language defines structure of content. There is not a lot of HTML because I am using fetch() and did most of everything in JS
- CSS - Cascading Style Sheets describes the presentation of the HTML document. Utilized class for layout, added some classes in JS which were provided in the CSS.
- JavaScript - Object-oriented programming language (scripting language) to dynamically update content and animate objects. This is the bones of the project. Using innerHTML to create the containers and add content. 
# LEARNING
- This project took me out of the normal activities I use with JS. 
- I created pseudocode (generic regular language to try and see how a program should run). My head thought it was correct and then when I got to the project, I realized the logic was good but I did not produce it into the DOM. 
- Using multiple functions is something I need to get better with and know where and how to implement them. Some I created but was unsure how to include them within the program. Trial and error. 
- My hardest part with JS is not the logic of how functions and classes should work, but the DOM. It is a step I continually forget and then I am frustrated. Fingers crossed I will get better with this step and it becomes second nature.
- Trying to figure out how to copy the code to the clipboard (stretch goal), was challenging. I realized I needed to use 'navigator.clipboard.writeText()'. I implemented it inside my getColors(). Utilized MDN to figure out Notification - asking for permission and then if granted will display the notification that the hex was copied.
# RESOURCES
- [Mozilla Document Network (MDN)](https://developer.mozilla.org/en-US/) is a community of developers that help other developers. Being new it is easy for me to understand the syntax of each language with MDN.
- [Geeks for Geeks](https://www.geeksforgeeks.org/) is an organization to help further learning on new trends.
- [Stack Overflow](https://stackoverflow.com/) is another resource used by developers. Asking questions sometimes can take a while, but the knowledge on this site is amazing.
- [freeCodeCamp-forum](https://forum.freecodecamp.org/) is a non-profit to help educate developers. The community asks and answers questions to help beginner get aquatinted with coding. A way for the development community to understand.
# WHAT IS NEXT
My goal is to add the ability for different values of color. a lot of design and developers use rgb and hsl as standard color values. Right now the project only gives hex values, but I would like the user to have the option between all the values. 
When using the input type="color" it gives the user options of which value they would like, but right now the only return value is hex. 
I will implement the other values so they can click on the hex value and it will change.
# AUTHOR
**Karen Byrd - KLB Development**

**2024 project from *[Scrimba Bootcamp](https://scrimba.com)***