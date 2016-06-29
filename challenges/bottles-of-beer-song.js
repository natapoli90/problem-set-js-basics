/*

  Create the "Bottles of beer on the wall" song (watch out for infinite loops!):

  ```
      5 bottles of beer on the wall,
      5 bottles of beer!
      Take one down and pass it around,
      4 bottles of beer on the wall...

      4 bottles of beer on the wall,
      4 bottles of beer!
      Take one down and pass it around,
      3 bottles of beer on the wall...
      etc.
  ```

  Bonuses
  - How would you change "0" to "No more"?
  - How would you fix "1 bottles of beer"?

*/

// YOUR CODE HERE
var bottles;
for (i = 5; i >= 0; i--)
{
    if (i == 1) {
        bottles = 'bottle';
    } else { bottles = 'bottles';
    }
    if (i <=5 && i!==0) {
        console.log("");
        console.log(i+" "+bottles+" of beer on the wall,");

    console.log(i+" "+bottles+" of beer!");
    console.log("Take one down and pass it around,");

    } else {
        console.log("No bottles of beer on the wall.");
    }
}
