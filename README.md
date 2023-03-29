

The TimeTraveler's class takes two arguments in its constructor: the amount of money inherited by Ivan and the year until which he has to live in the past. It initializes the age to 18, since that's how old Ivan is when he receives the inheritance.
The calculateExpenses method takes a year as an argument and calculates the expenses Ivan will have in that year based on the rules given in the question.
The travel method simulates Ivan's journey through time, calculating his expenses in each year and subtracting them from his remaining money. If at any point his remaining money is not enough to cover his expenses, the method returns a string indicating how much more money he needs to survive. Otherwise, if he makes it to the end of the journey with money left over, the method returns a string indicating how much money he will have left.
