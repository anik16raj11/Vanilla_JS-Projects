console.log('Ready to make Tech Library');


// creating constructor
function Book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
}

// Displaying constructor
function Display() { }


// Add methods to display prototype
Display.prototype.add = function (book) {
    console.log("Adding to UI");
    tableBody = document.getElementById('tableBody');
    let uiString = `<tr>
                        <td>${book.name}</td>
                        <td>${book.author}</td>
                        <td>${book.type}</td>
                    </tr>`;
    tableBody.innerHTML += uiString;
}

// Implementing the clear function
Display.prototype.validate = function (book) {
    if (book.name.length < 2 || book.author.length < 2) {
        return false;
    }
    else {
        return true;
    }
}

// Implementing the validate function
Display.prototype.clear = function () {
    let libraryForm = document.getElementById('libraryForm');
    libraryForm.reset();
}

Display.prototype.show = function (type, displayAlert) {
    let alert = document.getElementById('alert');
    alert.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert" bg-red>
                            <strong>Alert : </strong>${displayAlert}
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">x</span>
                            </button>
                       </div>`;
    setTimeout(function() {
        alert.innerHTML = ''
    }, 3000);
}


// Add submit event listener to libraryForm
let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e) {
    console.log('You submitted the library form');
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;

    let type;
    // friction, programming, comics;
    let friction = document.getElementById('friction');
    let programming = document.getElementById('programming');
    let comics = document.getElementById('comics');

    if (friction.checked) {
        type = friction.value;
    }
    else if (programming.checked) {
        type = programming.value;
    }
    else if (comics.checked) {
        type = comics.value;
    }

    let book = new Book(name, author, type);
    console.log(book);

    let display = new Display();

    if (display.validate(book)) {
        display.add(book);
        display.clear();
        display.show('Success','Your book has been successfully added.');
    }
    else {
        // show error to the user
        display.show('Danger','Sorry you cannot add this book.');
    }

    e.preventDefault();
}



// Add on details in your library;
// Stor all the data to the localStorage
// Give another column as an option to delete the book
// Add a scroll bar to the view








