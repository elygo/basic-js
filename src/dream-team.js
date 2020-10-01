module.exports = function createDreamTeam(members) {
  // remove line with error and write your code here
  var team = [];
  if ( members === "number" || members === undefined || members === null || members === false ){
    return false;
  } else {

     for(var i=0; i < members.length; i++){
     if(typeof(members[i]) !== "string") {

     } else {
        team.push(members[i].trim().charAt(0).toUpperCase());
      }
    }

  }
  return team.sort().join('');
};
