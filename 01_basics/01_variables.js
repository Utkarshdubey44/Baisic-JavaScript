const accountId = 1
let accountEmail = "utkarshdubey@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

accountEmail = "utkarsh@google.com"
accountPassword = "54321"
accountCity = "Jai"

// accountId = 2

/* Prefer not to use var
    because of issue in block scope and functional scope
*/

console.log(accountId)
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])