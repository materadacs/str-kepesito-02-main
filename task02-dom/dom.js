const bookList = [
    { title: 'Don Quixote', isRead: true, author: 'Miguel de Cervantes' },
    { title: 'Lord of the Rings', isRead: false, author: 'J.R.R. Tolkien' },
    { title: 'Harry Potter and the Sorcerers Stone', isRead: true, author: ' J.K. Rowling' },
    { title: 'And Then There Were None', isRead: true, author: 'Agatha Christie' },
    { title: 'Alices Adventures in Wonderland', isRead: false, author: 'Lewis Carroll' },
    { title: 'The Lion, the Witch, and the Wardrobe', isRead: true, author: 'C.S. Lewis' },
    { title: 'Love in the Time of Cholera', isRead: true, author: 'Gabriel García Márquez' },
]

function listMyBooks(bookList) {
    if (bookList.isRead == true) {
     bookList.filter( item => item.isRead == true).map(item = item.title);
     document.getElementById("container").innerHTML = "<strong>Ezt a könyvet már olcastad:</strong>" + item
    }
}

function configStyle() {
    document.querySelectorAll('section').forEach(e => {
        e.style.border = '3px solid red'
    });
    document.querySelectorAll('div').forEach(e => {
        e.style.display = 'flex'
        e.style.textAlign = 'center'
    });
    document.querySelectorAll('p').forEach(e => {
        e.style.textAlign = 'center'
        e.style.color = 'red'
    })
}

export { listMyBooks, configStyle };