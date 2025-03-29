/*This problem is to ask the enter:
Age.
Driver license.

Print "Hired" if the user age >= 21 and he/she has a driver license,
otherwise print "Rejected".
*/

let Age = prompt("Please enter your age : ");
let HasDriverLicense = prompt("Do you have a driver license ? ");

if(Age >= 21 && HasDriverLicense == true)
{
    console.log("Hired");
}
else
{
    console.log("Rejected");
}