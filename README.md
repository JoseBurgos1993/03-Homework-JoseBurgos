# 03-Homework-JoseBurgos

I started by creating 4 strings that contained all possible characters for lowercase, uppercase, numerical, and special characters.

I excluded " and \

When the user clicks the Generate button, they are prompted for the length of the password. It checks to make sure the input is a number between 8 and 128. I initally had it check to see if the input was less than 8 or greater than 128, but I found that it still accepted letters and special characters since technically 'H' and '&%' are not <8 or >128. So I just flipped it and made it only accept input for numbers between 8 and 128.

Afterwards, the screen prompts the user to confirm or deny if they want lowercase, uppercase, numerical, or special characters. If they canceled through the whole thing, they are forced to try again. It only allows passage if the user actually picks at least one of the character groups.

Once everything is selected, the new password is generated in the box. The user can then choose to generate a new password and be prompted all over again. Using proper scoping, I made sure that inputs from previous attempts aren't carried over. So you don't end up adding the same character groups to list of possible characters and ruin the balance.