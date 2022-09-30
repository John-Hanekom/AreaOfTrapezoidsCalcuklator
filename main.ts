/**
 * Created by: John Hanekom
 * 
 * Date: September 30th, 2022
 * 
 * This python program calculates the area of a trapezoid using the inputted integers.
 */
game.splash("Let's calculate the area of a trapezoid!")
let top_base = game.askForNumber("Enter the top base of the trapezoid (cm):")
let bottom_base = game.askForNumber("Enter the bottom base of the trapezoid (cm):")
let height = game.askForNumber("Enter the height of the trapezoid (cm):")
let area = top_base + bottom_base
area = area / 2
area = area * height
game.splash("The area of the trapezoid with dimensions of: " + ("" + top_base) + " cm by " + ("" + bottom_base) + " cm by " + ("" + height) + " cm is " + "")
game.splash("" + convertToText(area) + " cm.")
