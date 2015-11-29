BloodType = {
  
  AB_POS : "AB_POS",
  AB_NEG : "AB_NEG",
  A_POS  : "A_POS",
  A_NEG  : "A_NEG",
  B_POS  : "B_POS",
  B_NEG  : "B_NEG",
  O_POS  : "O_POS",
  O_NEG  : "O_NEG"

};

BloodTransfusionRules = {
  
  /**
   * Set the simulation speed.
   * @type {Number} : Valid values between 1 and 200
   */
  simulation_speed : 200,

  /**
   * returns BloodType, or false to give no BloodType
   * 
   * @name receive_patient
   * @param {Bank} blood_inventory
   * @param {Patient} patient
   * @returns {BloodType or false}
   *
   * Patient properties {
   *   gender : String, (MALE,FEMALE)
   *   blood_type : String (BloodType)
   * }
   * 
   * Bank properties {
   *   AB_POS : Integer,
   *   AB_NEG : Integer,
   *   A_POS  : Integer,
   *   A_NEG  : Integer,
   *   B_POS  : Integer,
   *   B_NEG  : Integer,
   *   O_POS  : Integer,
   *   O_NEG  : Integer
   * }
   * 
   */

  receive_patient : function (blood_inventory, patient) {
   
    switch (patient.blood_type){
      case "AB_POS": 
        usableTypes = ["AB_POS", "AB_NEG", "A_POS", "A_NEG", "B_POS", "B_NEG", "O_POS", "O_NEG"];
        return searchBloodType(blood_inventory, usableTypes);
        //   var most = blood_inventory[usableTypes[i]]; 
        //   // most.sort(function(a, b){return b-a});
        // return most[0];
        // return AB_POS||AB_NEG||A_POS||A_NEG||B_POS||B_NEG||O_POS||O_NEG;
        break;

      case "AB_NEG":
          usableTypes = ["AB_NEG", "A_NEG", "B_NEG", "O_NEG"];
          return searchBloodType(blood_inventory, usableTypes);
              
                // AB_NEG||A_NEG||B_NEG||O_NEG;
              
        break;

      case "A_POS":
        usableTypes = ["A_POS", "A_NEG", "O_POS", "O_NEG"];
          return searchBloodType(blood_inventory, usableTypes);
                // A_POS||A_NEG||O_POS||O_NEG;
        break;

      case "A_NEG":
        usableTypes = ["A_NEG", "O_NEG"];
        return searchBloodType(blood_inventory, usableTypes);
        // if(blood_inventory.A_NEG > 0 || blood_inventory > 0){
        //   if(blood_inventory.A_NEG >= blood_inventory.O_NEG){
        //     return BloodType.A_NEG;
        //   }
        //     return BloodType.O_NEG;
        // }
                // A_NEG||O_NEG;
        break;

      case "B_POS":
        usableTypes = ["B_POS", "B_NEG", "O_POS", "O_NEG"];
        return searchBloodType(blood_inventory, usableTypes);
                // B_POS||B_NEG||O_POS||O_NEG;
        break;

      case "B_NEG":
        usableTypes = ["B_NEG", "O_NEG"];
        return searchBloodType(blood_inventory, usableTypes);
        // if(blood_inventory.B_NEG > 0 || blood_inventory.O_NEG > 0){
        //   if(blood_inventory.B_NEG >= blood_inventory.O_NEG > 0){
        //     return BloodType.B_NEG;
        //   }
        //     return BloodType.O_NEG;
        // }
                // B_NEG||O_NEG;
        break;

      case "O_POS":
        usableTypes = ["O_POS", "O_NEG"];
        return searchBloodType(blood_inventory, usableTypes);
        // if(blood_inventory.O_POS > 0 || blood_inventory.O_NEG > 0){
        //   if(blood_inventory.O_POS >= blood_inventory.O_NEG){
        //     return BloodType.O_POS;
        //   }
        //     return BloodType.O_NEG;
        // }
                // O_POS||O_NEG
        break;

      case "O_NEG":
       usableTypes = "O_NEG";
       return searchBloodType(blood_inventory, usableTypes);

      default:
        return false;
    }
    // give a random blood type to anyone
    // very bad idea!
    // return [
    //   BloodType.AB_POS,
    //   BloodType.AB_NEG,
    //   BloodType.A_POS,
    //   BloodType.A_NEG
    // ][Math.floor(Math.random()*4)];
    // return patient.blood_type;
}        
  
function searchBloodType (blood_inventory, patient) {
 
  var usableTypes = [];
    for (var i = usableTypes.length -1; i >= 0; i++){
      var bloodType = usableTypes[i];
      if (blood_inventory[bloodType]){
        return BloodType[bloodType];
      }
     }
  }
};