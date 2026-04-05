

Q1-How does TypeScript enforce type safety in this object-oriented program?

TypeScript enforces type safety by requiring variables, function parameters, and return values to have specific data types. Once a type is defined, only values of that type can be assigned or used. This prevents errors such as passing the wrong type of data to functions or assigning incorrect values to variables, making the code more reliable and easier to debug.

TypeScript enforce type script by strictly typing the variable datatype and tying to it so that another variable cannot be used in that place.



Q2-How did inheritance reduce code duplication for PhysicalProduct and DigitalProduct?

Inheritance reduces code duplication by allowing both PhysicalProduct and DigitalProduct to reuse common properties and methods from the Product parent class, such as name, price, and displayDetails(). Instead of rewriting the same code in each class, they extend the parent class and only add or modify functionality specific to their type, resulting in cleaner and more maintainable code.

Inheritence reduces code duplicaiton by using the varaible of the parent class without adding those variable into its child class and we can further made modification to that class by adding more details to it.


Q3-What are the benefits of using encapsulation and access modifiers (public, private, protected) in this context?

Encapsulation helps protect the internal state of an object by restricting direct access to its data. Using access modifiers:

private ensures that variables cannot be accessed directly from outside the class
protected allows access within the class and its child classes
public allows access from anywhere

This improves security, prevents accidental changes, and ensures that data is accessed or modified in a controlled way using methods like getters and setters.


Q4-If you had to add a new type of product (e.g., a SubscriptionProduct), how would polymorphism make this extension straightforward?

Polymorphism allows different classes to implement the same method in their own way. If a new SubscriptionProduct is added, it can override methods like getPriceWithTax() or displayDetails() with its own logic. The main program can treat all products the same (using the base Product type), without needing to change existing code. This makes the system easy to extend and scalable