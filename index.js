const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

const filtered = drivers.filter(findMatching)

function findMatching(drivers, name){
let filtered = drivers.filter(drivers=>drivers===name||drivers===name.toLowerCase());
return filtered
}
 
const transporters = [];

function fuzzyMatch(transporters, prsn){
    let fltrd= transporters.filter(transporter=>
         transporter.startsWith(prsn));
         return fltrd
    }

const transp = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];
function  matchName(transp,person){
  let found = transp.filter(function(trans) {
    return trans.name == person; });
return found
  }
