/* Grouping Selector - Styles h1 and h2 together */

h1,h2{
    color: darkblue;
    text-align: center;
}

  
      
/* Adjacent Sibling Selector - Styles only the paragraph right after h1 */

h1+p{
    color: green;
    font-weight: bold;
}


 /* General Sibling Selector - Styles all elements after h2 */
 h2~p{
    color: red;
 }


/* General Sibling Selector - Styles all spans after the button */
button~span{
    font-size: 18px;
    color: purple;
}
        