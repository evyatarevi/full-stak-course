# In Python, variables are created when you assign a value to it. Python has no command for declaring a variable.
# Variables do not need to be declared with any particular type, and can even change type after they have been set.

# Casting:
x = str(3)    # x will be '3'
y = int(3)    # y will be 3
z = float(3)  # z will be 3.0
print(type(x))

# Python allows you to assign values to multiple variables in one line:
x, y, z = "Orange", "Banana", "Cherry"

# And you can assign the same value to multiple variables in one line:
x = y = z = "Orange"

# Unpack a Collection:
fruits = ["apple", "banana", "cherry"]
x, y, z = fruits  # need exactly variable. not change the list itself.
print(x)  #apple
print(y)  #banana
print(z)  #cherry

# Output Variables:
print(x, y, z)

# To *create* a global variable inside a function, you can use the global keyword:
def myfunc():
  global x
  x = "fantastic"

# To *change* the value of a global variable inside a function, refer to the variable by using the global keyword:
x = "awesome"
def myfunc():
  global x
  x = "fantastic"

# אפשר להשתמש במשתנה הגלובלי, אך א"א לשנות אותו, אא"כ נכתוב גלובל
x = 1
def fun():
    y = x + 1
    print(y)  # y=2

# Data Type:
x = "Hello World"	#str	
x = 20	#int	
x = 20.5	#float	
x = 1j	#complex	
x = ["apple", "banana", "cherry"]	#list	
x = ("apple", "banana", "cherry")	#tuple	
x = range(6)	#range	
x = {"name" : "John", "age" : 36}	#dict	
x = {"apple", "banana", "cherry"}	#set	
x = frozenset({"apple", "banana", "cherry"})	#frozenset	
x = True	#bool	
x = b"Hello"	#bytes	
x = bytearray(5)	#bytearray	
x = memoryview(bytes(5))	#memoryview	
x = None	#NoneType

# Import the random module, and display a random number between 1 and 9:
import random
print(random.randrange(1, 10))

# You can assign a multiline string to a variable by using three quotes:
a = """Lorem ipsum dolor
   sit ame"""  #in the result, the line breaks are inserted at the *same* position as in the code(with line space).

# Check if "free" is present in the following text:
txt = "The best things in life are free!"
print("free" in txt)

# Check if "expensive" is NOT present in the following text:
txt = "The best things in life are free!"
print("expensive" not in txt)

# ---Note: All string methods return new values. They do not change the original string.---

# Get the characters from position 2 to position 5 (not included):
b = "Hello, World!"
print(b[2:5])

# negative indexes to start the slice from the end of the string:
b = "Hello, World!"
print(b[-5:-2])  #print orl

# modify strings:

# The strip() method removes any whitespace from the beginning or the end (not include!):
a = " Hello, World! "
print(a.strip()) # returns "Hello, World!"

# The replace() method replaces a string with another string (all over the string):
a = "Hello, World!"
print(a.replace("H", "J"))

# The split() method returns a list where the text between the specified separator becomes the list items.
a = "Hello, World!"
print(a.split(",")) # returns ['Hello', ' World!']


# Use the format() method to insert numbers into strings:
age = 36
txt = "My name is John, and I am {}"
print(txt.format(age))



# # -------booleans------

# Almost any value is evaluated to True if it has some sort of content:
# Any string is True, except empty strings.
# Any number is True, except 0.
# Any list, tuple, set, and dictionary are True, except empty ones.

print(bool("Hello"))  #True
print(bool(15))       #True
print(bool(0))        #False
print(bool(""))       #False

# In fact, there are not many values that evaluate to False,
# except empty values, such as (), [], {}, "", the number 0,
# and the value None. And of course the value False evaluates to False.


#------operators-----

# **	Exponentiation	x ** y	
# # //	Floor division	x // y

# and -	Returns True if both statements are true	  x < 5 and  x < 10	
# or	- Returns True if one of the statements is true	x < 5 or x < 4	
# not	- Reverse the result, returns False if the result is true	not(x < 5 and x < 10)

# in -	Returns True if a sequence with the specified value is present in the object	x in y	
# not in -	Returns True if a sequence with the specified value is not present in the object	x not in y


#-----Lists-----

#--insert

# Change the values "banana" and "cherry" with the values "blackcurrant" and "watermelon":
thislist = ["apple", "banana", "cherry", "orange", "kiwi", "mango"]
thislist[1:3] = ["blackcurrant", "watermelon"]
print(thislist)  #['apple', 'blackcurrant', 'watermelon', 'orange', 'kiwi', 'mango']

# If you insert more items than you replace, the new items will be inserted where you specified, 
# and the remaining items will move accordingly:
thislist = ["apple", "banana", "cherry"]
thislist[1:2] = ["blackcurrant", "watermelon"]
print(thislist)   #['apple', 'blackcurrant', 'watermelon', 'cherry']

# If you insert less items than you replace, the new items will be inserted where you specified, 
# and the remaining items will move accordingly:
thislist = ["apple", "banana", "cherry"]
thislist[1:3] = ["watermelon"]
print(thislist)   #['apple', 'watermelon']

# To insert a new list item, without replacing any of the existing values, we can use the insert() method:
thislist = ["apple", "banana", "cherry"]
thislist.insert(2, "watermelon")
print(thislist)  #['apple', 'banana', 'watermelon', 'cherry']

# To add an item to the end of the list, use the *append()* method.

# To append elements from another list to the current list, use the extend() method:
thislist = ["apple", "banana", "cherry"]
tropical = ["mango", "pineapple", "papaya"]
thislist.extend(tropical)


#---remove

# The remove() method removes the specified *item*:
thislist.remove("banana")

# The pop() method removes the specified *index*:
thislist.pop(1)
# If you do not specify the index, the pop() method removes the last item.

# The del keyword also removes the specified index:
del thislist[0]

#The del keyword can also delete the list completely:
del thislist
print(thislist)  #error

# The clear() method empties the list. The list still remains, but it has no content:
thislist.clear()
print(thislist)  #[]

# List Comprehension:
# newlist = [expression for item in iterable if condition == True]
newlist = [x for x in fruits if "a" in x]  #arr with all items in fruits that have "a"
newlist = [x for x in fruits]  #arr with all items in fruits

# The expression can also contain conditions, not like a filter, but as a way to manipulate the outcome:
newlist = [x if x != "banana" else "orange" for x in fruits]
