const breakfastMenu = ["Pancakes", "Eggs Benedect", "Oatmeal"]
const mainCourseMenu = ["Steak", "Pasta", "Burger"]
const dessertMenu = ["Cake", "Ice Cream", "Pudding"]

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

