const myAge = 20;
let message;

if (myAge >= 18) {
  message = 'You can vote'
} else {
  message = 'You cannot vote'
}

console.log(message);

message = myAge >= 18 ? 'Yes. You can vote' : 'No. You cannot vote';

console.log(message);

// You could replace it all in one line and make it a const
const message2 = myAge >= 18 ? 'Yes. You can vote' : 'No. You cannot vote';
console.log(message2);

// SECOND EXAMPLE WITH FUNCTIONS
const showPage = () => 'showing the page';
const showErrorPage = () => 'showing the error page';

const msg = myAge >= 21 ? showPage() : showErrorPage();
console.log(msg);

// CHALLENGE
const team = ['Tyler', 'Porter']
const result = team.length <= 4 ? `Team size: ${team.length}` : 'Too many people on your team';
console.log(result);
console.log(team.length <= 4 ? `Team size: ${team.length}` : 'Too many people on your team');
