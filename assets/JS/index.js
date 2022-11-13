// let text = "";
// const fruits = ["apple", "orange", "cherry"];
// fruits.forEach(myFunction2);
// document.getElementById("credit").innerHTML = text;
function myFunction() {
    const form = document.getElementById('bookInfo');
    let Book = {
        bookName: form.elements['bookName'].value,
        price: form.elements['bookPrice'].value,
        bookDiscount: (form.elements['bookDiscount'].value / 100),
        bookTax: form.elements['bookTax'].value,
        bookAmount: form.elements['bookAmount'].value,
        bookPurchased: form.elements['bookPurchased'].value,
        termOfCredit: form.elements['termOfCredit'].value
    }
    BookPurchase(Book);
}

function myFunction2(item, index) {
    text += index + ": " + item + "<br>";
}

function BookPurchase(Book) {
    const currency = "Rp. ";
    let availability = true;
    let totalBooksBought;
    let price2 = 0;
    let youSave = Book.price * Book.bookDiscount;
    let youSave2 = 0;
    let totalPrice = (Book.price - youSave) * Book.bookTax + (Book.price - youSave);
    let totalPrice2 = 0;

    for (let i = 1; i <= Book.bookPurchased; i++) {
        if (bookAmount === 0) { availability = false; break; }
        Book.bookAmount -= 1;
        price2 = price2 + Book.price * 1;
        youSave2 = youSave2 + youSave;
        totalPrice2 = totalPrice2 + totalPrice;
        totalBooksBought = i;
    }

    // bagian hutang JS_day3
    let creditPerMonth = parseFloat((totalPrice2 / Book.termOfCredit).toFixed(2));
    let checkLoan = (totalPrice2 - creditPerMonth * Book.termOfCredit) / Book.termOfCredit; //selisih uang
    let checkLoan2 = creditPerMonth + checkLoan;
    console.log(totalPrice2);
    console.log(checkLoan2);
    let monthList = [
        {
            index: 1,
            name: 'January',
            credit: 0
        },
        {
            index: 2,
            name: 'February',
            credit: 0
        },
        {
            index: 3,
            name: 'March',
            credit: 0
        },
        {
            index: 4,
            name: 'April',
            credit: 0
        },
        {
            index: 5,
            name: 'May',
            credit: 0
        },
        {
            index: 6,
            name: 'June',
            credit: 0
        },
        {
            index: 7,
            name: 'July',
            credit: 0
        },
        {
            index: 8,
            name: 'August',
            credit: 0
        },
        {
            index: 9,
            name: 'September',
            credit: 0
        },
        {
            index: 10,
            name: 'October',
            credit: 0
        },
        {
            index: 11,
            name: 'November',
            credit: 0
        },
        {
            index: 12,
            name: 'December',
            credit: 0
        },
];
    let monthCredit = monthList.filter((bulan) => {
        return (bulan.index <= Book.termOfCredit)
    });

    for (let x = 0; x < monthCredit.length; x++) {
        monthCredit[x].credit = creditPerMonth;
    }
    let finalData = [Book, ...monthCredit];
    console.log(finalData);
    // bagian hutang JS_day3


    document.getElementById("bookTitle").innerHTML = "Book Title: " + Book.bookName;
    document.getElementById("Price").innerHTML = "Price: " + price2;
    document.getElementById("youGot").innerHTML = "You got " + Book.bookDiscount * 100 + "% off";
    document.getElementById("youSave").innerHTML = "You save " + currency + youSave2;
    document.getElementById("tax").innerHTML = "Tax: " + Book.bookTax * 100 + "%";
    document.getElementById("needToPay").innerHTML = "You only need to pay: " + currency + totalPrice2;
    if (availability && Book.bookAmount > 0) {
        document.getElementById("booksRemaining").innerHTML = Book.bookAmount + " books remaining. You can buy again";
    }
    else {
        document.getElementById("booksRemaining").innerHTML = "Books are out. You bought " + totalBooksBought + " books. Come back anytime.";
    }
}
