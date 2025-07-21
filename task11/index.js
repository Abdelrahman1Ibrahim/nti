// function hndelLoopFn(start, end, breakNum, continueLoop) {
//   if (start && end && breakNum && continueLoop) {
//     if (start < end) {
//       for (let i = start; i < end; i++) {
//         if (i === continueLoop) {
//           continue;
//         }
//         if (i === breakNum) {
//           continue;
//         }
//         console.log(i);
//       }
//     } else if (start > end) {
//       for (let i = start; i > end; i--) {
//         if (i === continueLoop) {
//           continue;
//         }
//         if (i === breakNum) {
//           continue;
//         }
//         console.log(i);
//       }
//     }
//   } else {
//     console.log("Please provide valid parameters");
//   }
// }

// const { fail } = require("node:assert");

// hndelLoopFn(1, 10, 5, 2);
// hndelLoopFn(10, 1, 5, 2);

// hndelLoopFn(10, 1, 5);

var users = [];

var usersNumber = prompt("Enter The number of users you want to add");
for (let i = 1; i <= +usersNumber; i++) {
  var name = prompt("Enter user name " + i);
  var id = prompt("Enter user ID" + i);
  var balance = parseFloat(prompt("Enter user balance" + i));

  addUser(name, id, +balance);
}

function addUser(name, id, balance) {
  users.push({
    name: name,
    id: id,
    balance: balance
  });
}

function deleteUser(id) {
  users = users.filter((user) => user.id !== id);
}
function editUser(id) {
  if (users.find((user) => user.id === id)) {
    var name = prompt("Enter new user name");
    var balance = parseFloat(prompt("Enter new user balance"));

    users = users.map((user) => {
      if (user.id === id) {
        return { ...user, name: name, balance: balance };
      }
      return user;
    });
  } else {
    console.log("User not found");
  }
}

console.table(users);
