"""

Created by: John Hanekom

Date: September 29th, 2022

This program calculates the area of a trapezoid using the inputted numbers.

"""
game.splash("Let's calculate the area trapezoid!")
top_base = game.ask_for_number("Enter the top base of the trapezoid (cm):")
bottom_base = game.ask_for_number("Enter the bottom base of the trapezoid (cm):")
height = game.ask_for_number("Enter the height of the trapezoid (cm):")
area = top_base + bottom_base
area = area / 2
area = area * height
game.splash("The area of the trapezoid with dimensions of: " + str(top_base) + " cm by " + str(bottom_base) + " cm by " + str(height) + " cm is " + "")
game.splash("" + convert_to_text(area) + " cm.")