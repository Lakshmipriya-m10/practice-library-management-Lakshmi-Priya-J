/*

Practice: Library Management System 
Instructions 
Scenario: 
You are tasked with designing a library management system. The library 
lends out various types of items such as books, DVDs, and magazines. While 
all items share some common properties (e.g., title, id, isAvailable), each 
type has unique properties and behaviors. For example: 
● Books have an author and a genre. 
● DVDs have a director and duration. 
● Magazines have an issueNumber and publisher. 
Tasks 
1. Step 1: Create a Base Class 
○ Define a class LibraryItem to represent shared properties 
(title, id, isAvailable) and methods (e.g., checkOut() and 
returnItem()). 
2. Step 2: Extend the Base Class 
○ Create child classes Book, DVD, and Magazine that inherit from 
LibraryItem. 
○ Add unique properties and methods for each child class: 
■ Book: Add properties like author and genre. 
■ DVD: Add properties like director and duration. 
■ Magazine: Add properties like issueNumber and publisher. 
3. Step 3: Instantiate Objects 
○ Create instances of each class and test the shared and unique 
methods. 
1 
4. Step 4: Test the Inheritance 
○ Use inherited methods like checkOut() and returnItem() to 
manage the availability of items. 
○ Test accessing and displaying unique properties of each child
*/
class LibraryItem{
    constructor(title,id,isAvailable){
        this.title = title;
        this.id = id;
        this.isAvailable = isAvailable;
    }
  checkOut() {
   if (this.isAvailable) {
        this.isAvailable = false;
        return `Successfully checked out ${this.id}. ${this.title} is now unavailable.`;
    }
    return "Checkout is not available.";
}

    returnItem(){
       if (this.isAvailable) {
        this.isAvailable = false;
        return `Successfully Returnout ${this.id}. ${this.title} is now unavailable.`;
    }
    return "Return Item is not available.";
}

checkOutId(id) {
    if (this.id === id && this.isAvailable) {
        this.isAvailable = false;
        return `Checked out ${this.title}`;
    }
    return "Checkout failed.";
}

    }
       class Book extends LibraryItem{
        constructor(title,id,isAvailable, author, genre ){
            super(title,id,isAvailable);
            this.author = author;
            this.genre = genre;
        }

       }
       class Dvd extends LibraryItem{
        constructor(title,id,isAvailable,director,duration  ){
            super(title,id,isAvailable);
            this.director = director;
            this.duration  = duration ;
        }

       }
       class  Magazine extends LibraryItem{
        constructor(title,id,isAvailable,issueNumber,publisher ){
            super(title,id,isAvailable);
            this.issueNumber =issueNumber;
            this.publisher  =publisher ;
        }
    }
    const libraryBook = new LibraryItem("The Hidden Chapter", 12325, true);
    const book1 = new Book("Book-Harry Potter", 12345, true, "J.K. Rowling", "Fantasy");
    const dvd = new Dvd("DVD-The Lion King", 458721, true, "Roger Allers", "120 minutes");
    const dvd = new Dvd("DVD-The Lion King", 458721, true, "Roger Allers", "120 minutes");
    const magazineName = new Magazine("Times", 145698, true, 125489, "Time USA, LLC");



console.log(libraryBook);
console.log(book1);
console.log(dvd);
console.log(magazineName);


console.log(dvd.checkOut());
console.log(dvd.isAvailable);

console.log(magazineName.returnItem());
console.log(magazineName.isAvailable);

console.log(dvd.checkOut());




    