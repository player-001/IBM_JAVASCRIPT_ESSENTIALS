const breakfastMenu = ["Pancakes- $12", "Eggs Benedect- $22.99", "Oatmeal- $21.99", "Frittata- $15"]
const mainCourseMenu = ["Steak- $10", "Pasta- $6", "Burger- $4", "Salmon- $12"]
const dessertMenu = ["Cake- $20", "Ice Cream- $15", "Pudding- $8", "Fruit Salad- $23"]

const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => {   //one way to update the array elements and reassign to the array
    return `<p>Item ${index + 1}: ${item}</p>`
}).join('')

document.getElementById("breakfastMenuItems").innerHTML = breakfastMenuItemsHTML



let mainCourseItem = ''
mainCourseMenu.forEach((item, index) => {   //using for each to traverse each element
    mainCourseItem += `<p>Item ${index + 1}: ${item}</p>`
})
document.getElementById("maincourseMenuItems").innerHTML = mainCourseItem



let dessertItem = ''
for(let i = 0; i < dessertMenu.length; i++){   //for loop to iterate over the array
    dessertItem += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`
}
document.getElementById("dessertMenuItems").innerHTML = dessertItem

