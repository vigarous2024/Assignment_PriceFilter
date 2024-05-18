/*Type alias
Type union
Type literals
HOMEWORK ALERT
1) Make an array of objects. There should be atleast 6 objects
2) Give properties productName and productPrice
3) Do the filtration.
Use javascript built in filter method on the array. You need to filter the products where price is less than 1000.
NOTE: Everybody needs to complete the homework.
And do not forget to post the home work on Linkedin. Also tag all your teachers.*/

type MarketItems = {     //Type Alias
    productName : string, 
    productPrice : number,
    make: number,
}
let electItems : MarketItems [] = [{
    productName : "Lenovo E530 charger", //01
    productPrice : 600,
    make: 2018,           
},
{
    productName : "Lenovo E530 Harddish cover", //02
    productPrice : 500,
    make : 2022,            
},
{
    productName : "Lenovo E550 Heatpad", //03
    productPrice : 900,
    make : 2023,            
},
{
    productName : "Dell Pavilion Charger", //04
    productPrice : 1000, 
    make : 2021,           
},
{
    productName : "HP Notebook 2024 mouse pad", //05
    productPrice : 950,
    make : 2024,            
},
{
    productName : "Samsung Notebook", //06
    productPrice : 5000,   
    make : 2021         
},
] 
// Applying filter() with multiple filters
const filterPrice : MarketItems[] = electItems.filter(Product => Product.productPrice < 1000  && Product.make <= 2024)
console.log(filterPrice)
