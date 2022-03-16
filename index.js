var customerName = 'bob';

function upperCaseCustomerName(){
    customerName = customerName.toUpperCase(); 
}

function setBestCustomer(){
    // variables with no type are always in the global scope
    // never want to do this
    bestCustomer = 'not bob';
}

function overwriteBestCustomer(){
    bestCustomer = 'maybe bob';
}

const leastFavoriteCustomer = 'karen';

function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = 'joe';
}