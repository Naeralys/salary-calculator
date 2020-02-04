# Salary Calculator

Node/Typescript

## Problem: Employee monthly pay slip

When supplied employee details: first name, last name, annual salary (positive integer) and super rate (0% - 50% inclusive), payment start date, the program should generate pay slip information with name, pay period, gross income, income tax, net income and super.

The calculation details will be the following:

* pay period = per calendar month  
* gross income = annual salary / 12 months  
* income tax = based on the tax table provided below  
* net income = gross income - income tax  
* super = gross income x super rate

Notes: All calculation results should be rounded to the whole dollar. If >= 50 cents round up to the next dollar increment, otherwise round down.
