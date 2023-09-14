const getTheTitles = function(books) {
    let results = [];

    books.forEach(book => {
        results.push(book.title);
    });

    return results;
};

// Do not edit below this line
module.exports = getTheTitles;
