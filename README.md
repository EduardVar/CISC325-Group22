# CISC325-Group22

Repository for Group 22's CISC325 High Fidelity Prototype

# Current Functionality:

Teacher Homepage

- Users can interact with menu buttons to navigate the site. Most of those pages don't exist yet, so expect some 404 errors.
- Individual projects can be selected from the table. For this prototype, they will all redirect to the same demo project.
- New projects can be added with the "New Project" button, updating the table instantly. However they will disappear upon page refresh because this prototype does not have backend database functionality.

Student Project Page

- Users can drag around blocks between the input, operator and block bank areas of the page. The output area updates automatically as blocks are moved.
- Currently only has support for very basic math operations using some demo blocks. In a full implementation, these blocks and their combination outputs would be pulled from a database of projects created by a teacher user.
- Known Issues:
- You can drag input blocks into the operation area and vice versa. That goes about as well as you'd expect.
- You can drag the output block into the other areas, creating an all new block in the process. Considering calling this a feature instead of a bug because it's neat.
- You can drag blocks into other blocks. At first it looks like a really cool intentional feature, until you realize that it breaks everything.
- The CSS breaks constantly when you do weird stuff with the blocks, including trying to have more than four blocks in the block bank. 

# Planned Functionality:

Teacher Project Page

Student Homepage

Login Page

Register Page
