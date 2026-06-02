/* Books have an author and a genre.
DVDs have a director and duration.
Magazines have an issueNumber and publisher.
*/

/*Step 1: Create a Base Class
 Define a class LibraryItem to represent shared properties
(title, id, isAvailable) and methods (e.g., checkOut() and
returnItem()).
*/
class LibraryItem {
    constructor(title, id, isAvailable){
        this.title = title;
        this.id = id;
        this.isAvailable = isAvailable;
    }

    checkOut(){
        this.isAvailable = false;
        return `Successfully Checked Out Id ${this.id}. ${this.title} is available : ${this.isAvailable} `;
            }

    returnItem(){
    this.isAvailable = true;
    return `Successfully Returned Item Id ${this.id}. ${this.title} is available : ${this.isAvailable} `;
            }

    
}

const bookName1 = new LibraryItem("The Hidden Chapter", 12325, true);
const bookName2 = new LibraryItem("The Power of Consistency", 12335, true);

console.log(bookName1);
console.log(bookName2);


console.log(bookName1.checkOut());
console.log(bookName2.returnItem());    



/*2. Step 2: Extend the Base Class
Create child classes Book, DVD, and Magazine that inherit from
LibraryItem.
Add unique properties and methods for each child class:
■ Book: Add properties like author and genre.
■ DVD: Add properties like director and duration.
■ Magazine: Add properties like issueNumber and publisher.
*/
class Book extends LibraryItem {
    constructor(title, id, isAvailable, bookAuthor, genre) {
        super(title, id, isAvailable);
       
        this.bookAuthor = bookAuthor;
        this.genre = genre;
    }

}

class DVD extends LibraryItem {
     constructor(title, id, isAvailable, movieDirector, duration) {
        super(title, id, isAvailable);
      
        this.movieDirector = movieDirector;
        this.duration = duration;
    }

}

class Magazine extends LibraryItem{
        constructor(title, id, isAvailable, issueNumber, publisher) {
        super(title, id, isAvailable);
   
       
        this.issueNumber = issueNumber;
        this.publisher = publisher;
    }
}

/*3. Step 3: Instantiate Objects
Create instances of each class and test the shared and unique
methods.
*/

const bookName3 = new Book("Book-Harry Potter", 12345, true, "J.K. Rowling", "Fantasy");
const dvdName = new DVD("DVD-The Lion King", 458721, true, "Roger Allers", "120 minutes");
const magazineName = new Magazine("Times", 145698, true, 125489, "Time USA, LLC");
console.log(bookName3);
console.log(dvdName);
console.log(magazineName);

checkOutId(id) {
    if (this.id === id && this.isAvailable) {
        this.isAvailable = false;
        return `Checked out ${this.title}`;
    }
    return "Checkout failed.";
}
/*
4. Step 4: Test the Inheritance
Use inherited methods like checkOut() and returnItem() to
manage the availability of items.
Test accessing and displaying unique properties of each child
class.
*/
console.log(bookName3.checkOut());
console.log(dvdName.checkOut());
console.log(magazineName.checkOut());

console.log(bookName3.returnItem());
console.log(dvdName.returnItem());


console.log(bookName3.isAvailable);



