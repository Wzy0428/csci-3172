* *Date Created*: 13/02/2025
* *Last Modification Date*: 13/02/2025
* GitLab URL: https://git.cs.dal.ca/zhiyingw/csci-3172/-/tree/main/activities/lecture10

## Authors
Zhiying Wu
zh617138@dal.ca

# Test Cases
Regular Expressions: 
/([A-Za-z]+)([ A-Za-z]+)*/

## First Name
Maria
maria
maRia
Maria Gabriella
maria Gabriella 
Maria gabriella

All the first name passed

Regular Expressions: 
/([A-Za-z]+)([-'][ A-Za-z]+)*/

## Last Name
Smith
smith
smith-burns
Smith-Burns
smith-Burns
O'Brien	
o'Brien	
O'brien	
o'brien	

All the last name passed


Regular Expressions: 
/[A-Za-z0-9]+([.-][A-Za-z0-9]+)*@[A-Za-z0-9.-]+\.[A-Za-z]{2,6}/

## Email
someone@somewhere.com
Someone-someone@somewhere.com
someone.someone@somewhere.com
Someone-someone@somwewhere.com
someone@somewhere-somewhere.com
Someone-someone@somewhere.somewhere.com
someone.someone@somewhere.co
Someone-someone@somwewhere.info
someone.someone@somewhere-somewhere.co
someone.someone@somewhere-somewhere.info
Someone-someone@somwewhere.somewhere.co
Someone-someone@somwewhere.somewhere.inform

All the email passed

Regular Expressions: 
/(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).{12,}/

## Password
aB@3bc_e-uxE
aB@3bc_ex-U!
aB@3bc_!5-Ux
2aB#n!3ha-b4

All the password passed

Reflection:
Using regexr.com is very helpful for testing the regular expressions in real-time. It allows me to see matching and non-matching characters. However, I faced an issue with the ^ and $ anchors at first. They didn't match the text because I hadn't formatted the strings correctly. Once I adjusted for that, everything worked as expected. Overall, the tool made the process much smoother.


