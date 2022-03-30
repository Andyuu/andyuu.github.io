var toolMaterials = ["Images/Barrier.webp",
                 "Images/Oak_planks.webp",
                 "Images/Gold_ingot.webp",
                 "Images/Cobblestone.webp",
                 "Images/Iron_ingot.webp",
                 "Images/Diamond.webp",
                 "Images/Netherite_ingot.webp"]

var swords = [["Images/Barrier.webp",1,4],
               ["Images/Sword/Wooden_Sword.webp",4,1.6],
               ["Images/Sword/Stone_Sword.webp",5,1.6],
               ["Images/Sword/Iron_Sword.webp",6,1.6],
               ["Images/Sword/Diamond_Sword.webp",7,1.6],
               ["Images/Sword/Netherite_Sword.webp",8,1.6]]

var axes = [["Images/Barrier.webp",1,4],
               ["Images/Axe/Wooden_Axe.webp",7,0.8],
               ["Images/Axe/Golden_Axe.webp",7,1],
               ["Images/Axe/stone_Axe.webp",9,0.8],
               ["Images/Axe/Iron_Axe.webp",9,0.9],
               ["Images/Axe/Diamond_Axe.webp",9,1],
               ["Images/Axe/Netherite_Axe.webp",10,1]]

var pickaxes = [["Images/Barrier.webp",1,4],
               ["Images/Pickaxe/Wooden_Pickaxe.webp",2,1.2],
               ["Images/Pickaxe/Golden_Pickaxe.webp",2,1.2],
               ["Images/Pickaxe/stone_Pickaxe.webp",3,1.2],
               ["Images/Pickaxe/Iron_Pickaxe.webp",4,1.2],
               ["Images/Pickaxe/Diamond_Pickaxe.webp",5,1.2],
               ["Images/Pickaxe/Netherite_Pickaxe.webp",6,1.2]]

var shovels = [["Images/Barrier.webp",1,4],
               ["Images/Shovel/Wooden_Shovel.webp",2.5,1],
               ["Images/Shovel/Golden_Shovel.webp",2.5,1],
               ["Images/Shovel/stone_Shovel.webp",3.5,1],
               ["Images/Shovel/Iron_Shovel.webp",4.5,1],
               ["Images/Shovel/Diamond_Shovel.webp",5.5,1],
               ["Images/Shovel/Netherite_Shovel.webp",6.5,1]]

var hoes = [["Images/Barrier.webp",1,4],
               ["Images/Hoe/Wooden_Hoe.webp",1,1],
               ["Images/Hoe/Golden_Hoe.webp",1,1],
               ["Images/Hoe/stone_Hoe.webp",1,2],
               ["Images/Hoe/Iron_Hoe.webp",1,3],
               ["Images/Hoe/Diamond_Hoe.webp",1,4],
               ["Images/Hoe/Netherite_Hoe.webp",1,4]]

var helmets = [["Images/Helmet/empty_Helmet.webp",0,0],
               ["Images/Helmet/Leather_Helmet.webp",1,0],
               ["Images/Helmet/Golden_Helmet.webp",2,0],
               ["Images/Helmet/Chainmail_Helmet.webp",2,0],
               ["Images/Helmet/Iron_Helmet.webp",2,0],
               ["Images/Helmet/Turtle_Helmet.webp",2,0],
               ["Images/Helmet/Diamond_Helmet.webp",3,2],
               ["Images/Helmet/Netherite_Helmet.webp",3,3]]

var chestplates = [["Images/Chestplate/empty_Chestplate.webp",0,0],
               ["Images/Chestplate/Leather_Chestplate.webp",3,0],
               ["Images/Chestplate/Golden_Chestplate.webp",5,0],
               ["Images/Chestplate/Chainmail_Chestplate.webp",5,0],
               ["Images/Chestplate/Iron_Chestplate.webp",6,0],
               ["Images/Chestplate/Diamond_Chestplate.webp",8,2],
               ["Images/Chestplate/Netherite_Chestplate.webp",8,3]]

var leggings = [["Images/Leggings/empty_Leggings.webp",0,0],
               ["Images/Leggings/Leather_Leggings.webp",2,0],
               ["Images/Leggings/Golden_Leggings.webp",3,0],
               ["Images/Leggings/Chainmail_Leggings.webp",4,0],
               ["Images/Leggings/Iron_Leggings.webp",5,0],
               ["Images/Leggings/Diamond_Leggings.webp",6,2],
               ["Images/Leggings/Netherite_Leggings.webp",6,3]]

var boots = [["Images/Boots/empty_Boots.webp",0,0],
               ["Images/Boots/Leather_Boots.webp",1,0],
               ["Images/Boots/Golden_Boots.webp",1,0],
               ["Images/Boots/Chainmail_Boots.webp",1,0],
               ["Images/Boots/Iron_Boots.webp",2,0],
               ["Images/Boots/Diamond_Boots.webp",3,2],
               ["Images/Boots/Netherite_Boots.webp",3,3]]


var barrierImage = "Images/Barrier.webp";
var strengthImage = "Images/Strength.webp";
var weaknessImage = "Images/Weakness.webp";
var resistanceImage = "Images/Resistance.webp";
var enchantmentImage = "Images/Enchanted_Book.webp";
var critImage = "Images/Crit.webp";
var editImage = "Images/Book_And_Quill.webp";
var deleteImage = "Images/Fire_Charge.webp";
var heartImage = "Images/Heart.webp";
var halfHeartImage = "Images/Half_Heart.webp";
var emptyHeartImage = "Images/Empty_Heart.webp";
var armourImage = "Images/Armour.webp";
var halfArmourImage = "Images/Half_Armour.webp";
var emptyArmourImage = "Images/Empty_Armour.webp";
var toughnessImage = "Images/Toughness.webp";
var halfToughnessImage = "Images/Half_Toughness.webp";

var maxProfiles = 16
var weaponProfileNum = 0
var armourProfileNum = 0

//These values can be reset
var armourMaterialList = ["None","Leather","Golden","Chainmail","Iron","Diamond","Netherite"]
var helmetMaterialList = ["None","Leather","Golden","Chainmail","Iron","Turtle","Diamond","Netherite"]
var armourNames = ["None","None","None","None"]
var armourMaterials = [0,0,0,0]
var armourDefence = [0,0,0,0]
var armourToughness = [0,0,0,0]
var totalArmour = 0
var totalToughness = 0
var protection = 0
var protectionBonus = 0
var hitpoints = 20
var toolMaterialList = ["No","Wooden","Golden","Stone","Iron","Diamond","Netherite"]
var toolMaterialName = "No"
var toolList = ["Sword","Axe","Pickaxe","Shovel","Hoe"]
var toolName = "Sword"
var toolOptions = swords
var tools = [swords,axes,pickaxes,shovels,hoes]
var toolMaterial = 0
var tool = 0
var baseDamage = 1
var attackSpeed = 4
//Effects order: Strength, Weakness, Resistance
var effect = [0,0,0]
var effectsMax = 5
var effectBonus = [0,0,0]
var effectLevelDivs = ["strengthLevel","weaknessLevel","resistanceLevel"]
var effectBonusDivs = ["strengthBonus","weaknessBonus","resistanceBonus"]
var crit = false
var critBonus = 1
var sharpness = 0
var sharpnessBonus = 0
var attackDamage = 1
var damagePerSecond = 2
var attackCooldown = 0.5
var damageDealt = 1
var beforeProtDamage = 1
var percentDamageDealt = 100
var damageDealtPerSecond = 2
var hitsToKill = 20
var timeToKill = 10

const random = (max = 100) => {
    return Math.floor(Math.random() * max)
};
//Unused
function reset() {
  armourMaterialList = ["None","Leather","Golden","Chainmail","Iron","Diamond","Netherite"]
  armourNames = ["None","None","None","None"]
  armourMaterials = [0,0,0,0]
  armourDefence = [0,0,0,0]
  armourToughness = [0,0,0,0]
  totalArmour = 0
  totalToughness = 0
  protection = 0
  protectionBonus = 0
  hitpoints = 20
  toolMaterialList = ["No","Wooden","Golden","Stone","Iron","Diamond","Netherite"]
  toolMaterialName = "No"
  toolList = ["Sword","Axe","Pickaxe","Shovel","Hoe"]
  toolName = "Sword"
  toolOptions = swords
  toolMaterial = 0
  tool = 0
  baseDamage = 1
  attackSpeed = 4
  //Effects order: Strength, Weakness, Resistance
  effect = [0,0,0]
  effectsMax = 5
  effectBonus = [0,0,0]
  effectLevelDivs = ["strengthLevel","weaknessLevel","resistanceLevel"]
  effectBonusDivs = ["strengthBonus","weaknessBonus","resistanceBonus"]
  crit = false
  critBonus = 1
  sharpness = 0
  sharpnessBonus = 0
  attackDamage = 1
  damagePerSecond = 2
  attackCooldown = 0.5
  damageDealt = 1
  beforeProtDamage = 1
  percentDamageDealt = 100
  damageDealtPerSecond = 2
  hitsToKill = 20
  timeToKill = 10
};

class Weapon {
  constructor(){
    this.material = 0
    this.tool = 0
    this.strength = 0
    this.weakness = 0
    this.crit = false
    this.sharpness = 0
  }
  get toolName() {
    return toolList[this.tool]
  }
  get materialName() {
    return toolMaterialList[this.material]
  }
  get name() {
    return this.materialName + " "+this.toolName
  }
  get materialImage() {
    return toolMaterials[this.material]
  }
  get toolImage() {
    return tools[this.tool][this.material][0]
  }
  get baseDamage() {
    return tools[this.tool][this.material][1]
  }
  get attackSpeed() {
    return tools[this.tool][this.material][2]
  }
  get attackCooldown(){
    var attackCooldown = 1/this.attackSpeed- 0.025
    attackCooldown = (Math.ceil(attackCooldown*20)/20);
    if (attackCooldown < 0.5) {
      attackCooldown = 0.5
    }
    return attackCooldown
  }
  get strengthBonus(){
    return this.strength * 3
  }
  get weaknessBonus(){
    return this.weakness * 4
  }
  get critBonus(){
    return (this.crit) ? 1.5 : 1;
  }
  get sharpnessBonus(){
    return (this.sharpness) ? this.sharpness * 0.5 + 0.5 : 0;
  }
  get damage() {
    var damage = (this.baseDamage + this.strengthBonus - this.weaknessBonus) * this.critBonus + this.sharpnessBonus
    if (damage < 0) {
      damage = 0
    }
    return damage;
  }
  get DPS() {
    return this.damage/this.attackCooldown
  }
  get strengthImage(){
    if (this.strength == 0) {
      return barrierImage
    } else {
      return strengthImage
    }
  }
  get weaknessImage(){
    if (this.weakness == 0) {
      return barrierImage
    } else {
      return weaknessImage
    }
  }
  get critImage(){
    if (this.crit == false) {
      return barrierImage
    } else {
      return critImage
    }
  }
  effectColor(level){
    let colors = ["#777","#FF6D6A","#EFBE7D","#E9EC6B","#8BD3E6","#B1A2CA"]
    return colors[level]
  }
}
class Armour {
  constructor(){
    this.helmet = 0
    this.chestplate = 0
    this.leggings = 0
    this.boots = 0
    this.protection = 0
    this.resistance = 0
    this.hitpoints = 20
  }
  get helmetName() {
    return helmetMaterialList[this.helmet]
  }
  get chestplateName() {
    return armourMaterialList[this.chestplate]
  }
  get leggingsName() {
    return armourMaterialList[this.leggings]
  }
  get bootsName() {
    return armourMaterialList[this.boots]
  }
  get helmetImage() {
    return helmets[this.helmet][0]
  }
  get helmetDefence() {
    return helmets[this.helmet][1]
  }
  get helmetToughness() {
    return helmets[this.helmet][2]
  }
  get chestplateImage() {
    return chestplates[this.chestplate][0]
  }
  get chestplateDefence() {
    return chestplates[this.chestplate][1]
  }
  get chestplateToughness() {
    return chestplates[this.chestplate][2]
  }
  get leggingsImage() {
    return leggings[this.leggings][0]
  }
  get leggingsDefence() {
    return leggings[this.leggings][1]
  }
  get leggingsToughness() {
    return leggings[this.leggings][2]
  }
  get bootsImage() {
    return boots[this.boots][0]
  }
  get bootsDefence() {
    return boots[this.boots][1]
  }
  get bootsToughness() {
    return boots[this.boots][2]
  }
  get defence() {
    return this.helmetDefence+this.chestplateDefence+this.leggingsDefence+this.bootsDefence
  }
  get toughness() {
    return this.helmetToughness+this.chestplateToughness+this.leggingsToughness+this.bootsToughness
  }
  get protectionBonus() {
    return this.protection * 4
  }
  get resistanceBonus() {
    return this.resistance * 20
  }
  get resistanceImage(){
    if (this.resistance == 0) {
      return barrierImage
    } else {
      return strengthImage
    }
  }
  effectColor(level){
    let colors = ["#777","#FF6D6A","#EFBE7D","#E9EC6B","#8BD3E6","#B1A2CA"]
    return colors[level]
  }
}
class Results {
  constructor(attacker, defender){
    this.attacker = attacker
    this.defender = defender
  }  
  get damageDealt() {
    // return this.attacker.damage
    let dmg = this.attacker.damage*(1-(Math.min(20,Math.max(this.defender.defence/5,this.defender.defence-4*this.attacker.damage/(this.defender.toughness+8))))/25);
    dmg *= (1- this.defender.resistanceBonus/100) * (1- this.defender.protectionBonus/100);
    return dmg
  }
  get armourReduction() {
    let dmg = this.attacker.damage*(1-(Math.min(20,Math.max(this.defender.defence/5,this.defender.defence-4*this.attacker.damage/(this.defender.toughness+8))))/25);
    return (1 - dmg/this.attacker.damage) * 100
  }
  get defenceReduction() {
    let altDamageDealt = this.attacker.damage*(1-(Math.min(20,Math.max(this.defender.defence/5,this.defender.defence-4*this.attacker.damage/8)))/25);
    return (1 - altDamageDealt/this.attacker.damage) * 100    
  }
  get toughnessReduction() {
    let dmg = this.attacker.damage*(1-(Math.min(20,Math.max(this.defender.defence/5,this.defender.defence-4*this.attacker.damage/(this.defender.toughness+8))))/25);
    let altDamageDealt = this.attacker.damage*(1-(Math.min(20,Math.max(this.defender.defence/5,this.defender.defence-4*this.attacker.damage/8)))/25);
    return (1 - dmg/altDamageDealt) * 100   
  }
  get percentDamageDealt(){
    return this.damageDealt / this.attacker.damage * 100;
  }
  get DPS(){
    return this.damageDealt / this.attacker.attackCooldown
  }
  get hitsToKill(){
    return Math.ceil(this.defender.hitpoints/ this.damageDealt);
  }
  get timeToKill(){
    return this.hitsToKill * this.attacker.attackCooldown;
  }
  
  
}
const weapon = new Weapon();
const armour = new Armour();
const results = new Results(weapon,armour);

$(document).ready(function() {
  // Sortable 
  $("#weaponProfiles, #armourProfiles").sortable({
    axis: "y",
    opacity: 0.9,
    distance: 25,
    helper: function(event, elm) {
      return $(elm).clone().position({
        my: "left",
        at: "left",
        of: elm
      });
    }
    }); //Sort profile list
  $("#profileGroups").sortable({
    axis: "y",
    opacity: 0.9,
    distance: 25,
    items: "> .profileGroup, .profileFolder",
    helper: function(event, ui){
      var $clone =  $(ui).clone();
      $clone .css('position','absolute');
      return $clone.get(0);
    }
  }); //Sort profile group list
  //Folder 
  $("#closeModal, #folderModal").on('click', function() {
    $("#folderModal").css("display","none");
  }).children().click(function(event) {   event.stopPropagation(); });
  $(".folder").on('click', function() {
    $("#folderModal").css("display","block");
  }); 


  //Profiles
  $('.box').contextmenu(function() {
    return false;
  }); //Hide context menu on right click
  $('.box').mousedown(function(event) {
    //Find if it is a user click
    if(event.hasOwnProperty('originalEvent')) {

      //Deselect weapon profile
      if ($(this).closest('table').attr('id') == "weaponTable") {
        $(".weaponProfile").removeClass("selected");
        $("#weapon").text("Weapon");
      }

      //Deselect armour profile
      if ($(this).closest('table').attr('id') == "armourTable") {
        $(".armourProfile").removeClass("selected");
        $("#armour").text("Armour");
      }

    }
  }); //Deselect Profiles on user click  
  $(document).bind('keydown', 'alt+w', function() {
    if ($("#saveWeapon").attr("disabled") == "disabled") {
      return false;
    } else {
      $("#saveWeapon").trigger("click");
    }
  }); //Alt + W triggers "#saveWeapon"
  $("#saveWeapon").click(function() {
    //Increase profile number if below max
    if (weaponProfileNum < maxProfiles) {
      weaponProfileNum++
    } else {

      //Warn user that profile number is max
      $(this).after($("<span>").css("color", "red").css("fontWeight","bold").text(" Reached max profiles ").fadeOut(2000));

      //Disable button to prevent spam
      $(this).attr("disabled", true);
      var that = $(this);
      setTimeout(function() { enableButton(that) }, 3000);
      return false;
    }

    //Set the profile via function
    setWeaponProfile(undefined, true);


  }); //Save weapon profile
  $(document).bind('keydown', 'alt+a', function() {
    if ($("#saveArmour").attr("disabled") == "disabled") {
      return false;
    } else {
      $("#saveArmour").trigger("click");
    }
  }); //Alt + A triggers "#saveArmour"
  $("#saveArmour").click(function() {
    //Increase profile number if below max
    if (armourProfileNum < maxProfiles) {
      armourProfileNum++
    } else {
      
      //Warn user that profile number is max
      $(this).after($("<span>").css("color", "red").css("fontWeight","bold").text(" Reached max profiles ").fadeOut(2000));
      
      //Disable button to prevent spam
      $(this).attr("disabled", true);
      var button = $(this);
      setTimeout(function() { enableButton(button) }, 3000);
      return false;
    }

    //Set the profile via function
    setArmourProfile(undefined, true);


  }); //Save armour profile
  $(".collapser").click(function() {
    $(this).siblings(".profileContainer").children().addClass("collapse")
  });
  $(".expander").click(function() {
    $(this).siblings(".profileContainer").children().removeClass("collapse")
  });
  
  //Normal boxes
  $("#toolMaterial").mousedown(function(event) {
    //Update on left click, Reset on right click
    if (event.which === 3) {
      weapon.material = 0
    } else {
      weapon.material = weapon.material + 1 >= toolMaterialList.length ? 0 : weapon.material + 1;
    }
    updateHTML()
  });
  $("#tool").mousedown(function(event) {
    if (event.which === 3) {
      weapon.tool = 0
    } else {
      weapon.tool = weapon.tool + 1 >= toolList.length ? 0 : weapon.tool + 1;
    }
    updateHTML()
  });
  $("#strength").mousedown(function(event) {
    if (event.which === 3) {
      weapon.strength = 0
    } else {
      weapon.strength = weapon.strength + 1 > effectsMax ? 0 : weapon.strength + 1;
    }
    updateHTML()
  });
  $("#weakness").mousedown(function(event) {
    if (event.which === 3) {
      weapon.weakness = 0
    } else {
      weapon.weakness = weapon.weakness + 1 > effectsMax ? 0 : weapon.weakness + 1;
    }
    updateHTML()
  });
  $("#resistance").mousedown(function(event) {
    if (event.which === 3) {
      armour.resistance = 0
    } else {
      armour.resistance = armour.resistance + 1 > effectsMax ? 0 : armour.resistance + 1;
    }
    updateHTML();
  });
  $("#crit").mousedown(function(event) {
    if (event.which === 3) {
      weapon.crit = false
    } else {
      weapon.crit = !weapon.crit;
    }
    updateHTML();    
  });
  $("#helmet").mousedown(function(event) {
    if (event.which === 3) {
      armour.helmet = 0
    } else {
      armour.helmet = armour.helmet + 1 >= helmetMaterialList.length ? 0 : armour.helmet + 1;
    }
    updateHTML();
  });
  $("#chestplate").mousedown(function(event) {
    if (event.which === 3) {
      armour.chestplate = 0
    } else {
      armour.chestplate = armour.chestplate + 1 >= armourMaterialList.length ? 0 : armour.chestplate + 1;
    }
    updateHTML();
  });
  $("#leggings").mousedown(function(event) {
    if (event.which === 3) {
      armour.leggings = 0
    } else {
      armour.leggings = armour.leggings + 1 >= armourMaterialList.length ? 0 : armour.leggings + 1;
    }
    updateHTML();
  });
  $("#boots").mousedown(function(event) {
    if (event.which === 3) {
      armour.boots = 0
    } else {
      armour.boots = armour.boots + 1 >= armourMaterialList.length ? 0 : armour.boots + 1;
    }
    updateHTML();
  });
  $('.dice').contextmenu(function() {
    return false;
  });
  $(".dice").mousedown(function(event) {
    $(this).removeClass("animate");
    $(this).width(); // trigger a DOM reflow
    $(this).addClass("animate");
    $(this).children('.pip').remove();
    if (event.which !== 3) {
      for (i=0; i<=random(6); i++) {
        $(this).append($("<div>").addClass("pip"));
      }
    }
  });
  $("#dice1").mousedown(function(event) {
    if (event.which === 3) {
      weapon.material = 0
      weapon.tool = 0
      weapon.strength = 0
      weapon.weakness = 0
      weapon.crit = false
      weapon.sharpness = 0
    } else {
      weapon.material = random(7);
      weapon.tool = random(5);
      weapon.strength = (random(4)) ? random(6) : 0;
      weapon.weakness = (random(2) * random(2)) ? random(6) : 0;
      weapon.crit = random(2);
      weapon.sharpness = random(6);
    }
    updateHTML()
  });
  $("#dice2").mousedown(function(event) {
    if (event.which === 3) {
      armour.helmet = 0
      armour.chestplate = 0
      armour.leggings = 0
      armour.boots = 0
      armour.protection = 0
      armour.resistance = 0
      armour.hitpoints = 20
    } else {
      armour.helmet = random(7)
      armour.chestplate = random(6)
      armour.leggings = random(6)
      armour.boots = random(6)
      armour.protection = (random(2) * random(2)) ? random(21) : 0;
      armour.resistance = (random(2) * random(2)) ? random(6) : 0;
      armour.hitpoints = 1+random(40);
    }
    updateHTML()
  });
    
  //Number boxes
  $(".arrowUp").mousedown(function() {
    var temp = $(this).next().val();
    if (temp<99) {
      temp++
      $(this).next().val(temp).trigger('change');
    };
  });
  $(".arrowDown").mousedown(function() {
    var temp = $(this).prev().val();
    if (temp>0) {
      temp--
      $(this).prev().val(temp).trigger('change');
    };
  });  
  $("#sharpnessValue").change(function() {
    weapon.sharpness = $(this).val();
    updateHTML();
  });
  $("#protectionValue").change(function() {
    armour.protection = $(this).val();
    if (armour.protection>20) {
      $(this).val(20).trigger('change');
    }
    updateHTML();

  });
  $("#hitpointsValue").change(function() {
    armour.hitpoints = $(this).val();
    if (armour.hitpoints==0) {
      $(this).val(1).trigger('change');
    }
    updateHTML();
  });   

  updateProfiles()    
  
  loadModalHandlers()
  // defaultProfiles()
});
function armourPointImages(num) {
  let span = $('<span />');
  let full = (num/2) << 0;
  let half = num % 2;
  if (num > 0) {
    for (let i = 0; i < full; i++) {
      span.append("<img src="+armourImage+ " height='18px' width='18px' >");
    }
    for (let i = 0; i < half; i++) {
      span.append("<img src="+halfArmourImage +" height='18px' width='18px' >");

    }
  } else {
    span.append("<img src="+emptyArmourImage +" height='18px' width='18px' >");

  }
  return span;
};

function toughnessPointImages(num) {
  let span = $('<span />');
  let full = (num/2) << 0;
  let half = num % 2;
  if (num > 0) {
    for (let i = 0; i < full; i++) {
      span.append("<img src="+toughnessImage+ " height='18px' width='18px' >");
    }
    for (let i = 0; i < half; i++) {
      span.append("<img src="+halfToughnessImage +" height='18px' width='18px' >");

    }
  } else {
    span.append("<img src="+emptyArmourImage +" height='18px' width='18px' >");

  }
  return span;
};


function updateHTML(){
  //Tool
  $("#toolMaterial").css("background-image", "url(" + weapon.materialImage + ")");
  $("#tool").css("background-image", "url(" + weapon.toolImage + ")");
  $("#baseDamage").text(weapon.baseDamage)
  $("#attackSpeed").text(weapon.attackSpeed.toFixed(1))
  $("#attackCooldown").text(weapon.attackCooldown.toFixed(2));
  $("#toolDescription").text(weapon.name);
  //Strength
  $("#strengthLevel").text(weapon.strength);
  $("#strengthBonus").text(weapon.strengthBonus);
  $("#strength").css("background-image", "url(" + weapon.strengthImage + ")");
  $("#strength").css("background-color", weapon.effectColor(weapon.strength));
  //Weakness
  $("#weaknessLevel").text(weapon.weakness);
  $("#weaknessBonus").text(weapon.weaknessBonus);
  $("#weakness").css("background-image", "url(" + weapon.weaknessImage + ")");
  $("#weakness").css("background-color", weapon.effectColor(weapon.weakness));
  //Crit
  $("#crit").css("background-image", "url(" + weapon.critImage + ")");
  (weapon.crit) ?  $("#critBool").text("Crit") : $("#critBool").text("No Crit");
  $("#critBonus").text(weapon.critBonus);
  //Sharpness
  $("#sharpnessLevel").text(weapon.sharpness);
  $("#sharpnessBonus").text(weapon.sharpnessBonus);
  $("#sharpnessValue").attr("value",weapon.sharpness);
  //Damage
  $("#attackDamage").text(weapon.damage)
  if (weapon.attackSpeed > 2) {
    $("#immunityInfo").text("Damage immunity limits DPS");
  } else {
    $("#immunityInfo").text("");
  }
  // (weapon.attackSpeed > 2) ? $("#immunityInfo").text("Damage immunity limits DPS") : $("#immunityInfo").text("");
  $("#damagePerSecond").text(round(weapon.DPS,3));

  //Helmet
  $("#helmet").css("background-image", "url(" + armour.helmetImage + ")");    
  $("#helmetDefence").empty().append(armourPointImages(armour.helmetDefence));
  $("#helmetToughness").empty().append(toughnessPointImages(armour.helmetToughness));
  //Chestplate
  $("#chestplate").css("background-image", "url(" + armour.chestplateImage + ")");    
  $("#chestplateDefence").empty().append(armourPointImages(armour.chestplateDefence));
  $("#chestplateToughness").empty().append(toughnessPointImages(armour.chestplateToughness));
  //Leggings
  $("#leggings").css("background-image", "url(" + armour.leggingsImage + ")");    
  $("#leggingsDefence").empty().append(armourPointImages(armour.leggingsDefence));
  $("#leggingsToughness").empty().append(toughnessPointImages(armour.leggingsToughness));
  //Boots
  $("#boots").css("background-image", "url(" + armour.bootsImage + ")");
  $("#bootsDefence").empty().append(armourPointImages(armour.bootsDefence));
  $("#bootsToughness").empty().append(toughnessPointImages(armour.bootsToughness));
  //Armour
  $("#totalDefence").empty().append(armourPointImages(armour.defence)).append(" ("+armour.defence+")");
  $("#totalToughness").empty().append(toughnessPointImages(armour.toughness)).append(" ("+armour.toughness+")");
  //Protection
  $("#protectionLevel").text(armour.protection);
  $("#protectionBonus").text(armour.protectionBonus);
  $("#protectionValue").attr("value",armour.protection);
  //Resistance
  $("#resistanceLevel").text(armour.resistance);
  $("#resistanceBonus").text(armour.resistanceBonus);
  $("#resistance").css("background-image", "url(" + armour.resistanceImage + ")");
  $("#resistance").css("background-color", armour.effectColor(armour.resistance));
  //Hitpoints
  $("#hitpointsLevel").text(armour.hitpoints);
  $("#hitpointsValue").attr("value",armour.hitpoints);
  
  //Results 
  if (weapon.damage && armour.defence) {
    $("#armourReductionRow").show()
  } else {
    $("#armourReductionRow").hide()
  }
  if (weapon.damage && armour.toughness) {
    $('#defenceReductionRow, #toughnessReductionRow').show();
  } else {
    $('#defenceReductionRow, #toughnessReductionRow').hide();
  }
  if (weapon.damage && armour.protection) {
    $('#protectionReductionRow').show();
  } else {
    $('#protectionReductionRow').hide();
  }
  if (weapon.damage && armour.resistance) {
    $('#resistanceReductionRow').show();
  } else {
    $('#resistanceReductionRow').hide();
  }
  $("#armourReduction").text(round(results.armourReduction,2));
  $("#defenceReduction").text(round(results.defenceReduction,2));
  $("#toughnessReduction").text(round(results.toughnessReduction,2));
  $("#resistanceReduction").text(armour.resistanceBonus);
  $("#protectionReduction").text(armour.protectionBonus);
  $("#damageDealt").text(round(results.damageDealt,3));
  $("#percentDamageDealt").text(round(results.percentDamageDealt,2));
  $("#damageDealtPerSecond").text(round(results.DPS,3));
  $("#hitsToKill").text(results.hitsToKill);
  $("#timeToKill").text(round(results.timeToKill,2));
};

function loadProfileHandlers() {
  //Update profile to current values
  $(".editWeaponProfile").off("mousedown").on("mousedown", function(event) {
    event.stopPropagation();
    var weaponProfile = $(this).parent();
    var name = weaponProfile.find(".profileName").val()
    $("#saveWeapon").next("span").remove();
    $("#saveWeapon").after($("<span>").css("color", "forestgreen").css("fontWeight","bold").text(" Updated "+ name).fadeOut(2000));
    weaponProfile.empty();
    setWeaponProfile(name, false, weaponProfile);
  });
  $(".editArmourProfile").off("mousedown").on("mousedown", function(event) {
    event.stopPropagation();
    var armourProfile = $(this).parent();
    var name = armourProfile.find(".profileName").val()
    $("#saveArmour").next("span").remove();
    $("#saveArmour").after($("<span>").css("color", "forestgreen").css("fontWeight","bold").text(" Updated "+ name).fadeOut(2000));
    armourProfile.empty();
    setArmourProfile(name, false, armourProfile);
  });
  
  //Delete profile
  $(".deleteWeaponProfile").off("mousedown").on("mousedown", function(event) {
    event.stopPropagation();
    weaponProfile = $(this).parent();
    var name = weaponProfile.find(".profileName").val()
    $("#saveWeapon").next("span").remove();
    $("#saveWeapon").after($("<span>").css("color", "red").css("fontWeight","bold").text(" Deleted "+ name).fadeOut(2000));
    weaponProfile.remove();
    weaponProfileNum--
    $('#weaponProfiles > .weaponProfile').each(function (index) {
      var currentName = $(this).find(".profileName").val()
      var substringName = currentName.substring(0, 8);
      if (substringName == "Profile-") {       
        $(this).find(".profileName").attr("value", "Profile-"+(index+1));
        $(this).find(".profileName").val("Profile-"+(index+1)).trigger("change");
      }
    });

  }); 
  $(".deleteArmourProfile").off("mousedown").on("mousedown", function(event) {
    event.stopPropagation();
    armourProfile = $(this).parent();

    //Red text to show deletion
    var name = armourProfile.find(".profileName").val()
    $("#saveArmour").next("span").remove();
    $("#saveArmour").after($("<span>").css("color", "red").css("fontWeight","bold").text(" Deleted "+ name).fadeOut(2000));

    //Remove and reduce profile count
    armourProfile.remove();
    armourProfileNum--

    $('#armourProfiles > .armourProfile').each(function (index) {
      var currentName = $(this).find(".profileName").val()
      var substringName = currentName.substring(0, 8);
      if (substringName == "Profile-") {
        $(this).find(".profileName").attr("value", "Profile-"+(index+1));
        $(this).find(".profileName").val("Profile-"+(index+1)).trigger("change");
      }
    });

  });

  //Disable context menu
  $("#weaponProfiles, #armourProfiles").contextmenu(function() {
    return false;
  });

  //Select the profile
  $(".weaponProfile").on("mousedown", function(event) {
    //On right click, collapse the profile
    if (event.which === 3) {
      event.stopImmediatePropagation();
      if ($(this).hasClass("collapse")) {
        $(this).removeClass("collapse");
      } else {
        $(this).addClass("collapse");
      }
      //On left click, select the profile
    } else {

      //Add outline to this profile
      $(".weaponProfile").removeClass("selected");
      $(this).addClass("selected")

      //Set tool values
      toolMaterial = $(this).data("toolMaterial");
      $("#toolMaterial").trigger("mousedown", false);
      tool = $(this).data("tool");
      $("#tool").trigger("mousedown", false);

      //Set strength value
      effect[0] = $(this).data("strength");
      $("#strength").trigger("mousedown", false);

      //Set weakness value
      effect[1] = $(this).data("weakness");
      $("#weakness").trigger("mousedown", false);

      //Set crit value
      crit = ($(this).data("crit"));
      $("#crit").trigger("mousedown", false);

      //Set sharpness value
      $("#sharpnessValue").val($(this).data("sharpness")).trigger("change");

      //Set header text to profile name
      $("#weapon").text($(this).data("name"));
    }
  });
  $(".armourProfile").on("mousedown", function(event) {
    //On right click, collapse the profile
    if (event.which === 3) {
      event.stopImmediatePropagation();
      if ($(this).hasClass("collapse")) {
        $(this).removeClass("collapse");
      } else {
        $(this).addClass("collapse");
      }
      //On left click, select the profile
    } else {

      //Add outline to this profile
      $(".armourProfile").removeClass("selected");
      $(this).addClass("selected")

      //Set armour values
      armourMaterials = $(this).data("armourMaterials").slice();
      $("#helmet").trigger("mousedown", false);
      $("#chestplate").trigger("mousedown", false);
      $("#leggings").trigger("mousedown", false);
      $("#boots").trigger("mousedown", false);

      //Set resistance value
      effect[2] = $(this).data("resistance");
      $("#resistance").trigger("mousedown", false);

      //Set protection value
      $("#protectionValue").val($(this).data("protection")).trigger("change");
      $("#hitpointsValue").val($(this).data("hitpoints")).trigger("change");

      //Set header text to profile name
      $("#armour").text($(this).data("name"));

    }
  });

  //Updating profile name
  $(".profileName").change(function() {
    var name = $(this).val()

    //Reset the name if profile is empty
    if (name == "") {
      var defaultName = "Profile-"+($(this).parent().parent().prevAll().length+1);
      $(this).val(defaultName);
      name = defaultName;
    }
    //Weapons
    if ( $(this).closest(".weaponProfile").length) {
      $(this).closest(".weaponProfile").data( "name", name);

      //Set header if profile is selected
      if ($(this).closest(".weaponProfile").hasClass("selected")) {
        $("#weapon").text(name);
      }
    }
    
    //Armour
    if ( $(this).closest(".armourProfile").length) {
      $(this).closest(".armourProfile").data( "name", name);

      //Set header if profile is selected
      if ($(this).closest(".armourProfile").hasClass("selected")) {
        $("#armour").text(name);
      }
    }

    
   

  });
  
};

function loadModalHandlers() {
  //off to prevent duplicate events
  $(".profileFolder").off("click").on('click', function() {
    if ($(this).hasClass( "collapse" )) {
      $(this).removeClass( "collapse" );
      $(this).nextUntil('.profileFolder').filter(".profileGroup").css("display","block");
    } else {
      $(this).addClass( "collapse" );
      $(this).nextUntil('.profileFolder').filter(".profileGroup").css("display","none");
    }
  }).children().click(function(event) {   event.stopPropagation(); });
  
  $(".profileGroup").off("click").on('click', function() {
    $(".profileGroup").removeClass("selected");
    $(this).addClass("selected");
    $("#previewText").css("display","none");
    $("#groupSelected").css("display","block");
    $("#groupName").attr("value",$(this).html())
    
  });
  
  $(".profileAddFolder").off("click").on('click', function() {
    if ($(this).prevAll(".profileFolder").length < 10) {
      $(this).removeClass("full")
      var folder = $('<div>').addClass("profileFolder collapse");
      var span = $('<span>').addClass("profileDeleteFolder").text("× ")
      var inputWidth = $('<span>').addClass("profileFolderNameWidth");
      var input = $('<input>').addClass("profileFolderName").attr("value","Folder");
      folder.append(span)
      folder.append(inputWidth)
      folder.append(input)
      $(this).before(folder)
    } else {
      $(this).addClass("full")
    }
    loadModalHandlers()
  });
  $(".profileDeleteFolder").off("click").on('click', function() {
    if ($(this).parent().hasClass( "collapse" )) {
      $(this).parent().removeClass( "collapse" );
      $(this).parent().nextUntil('.profileFolder').css("display","block");
    }
    if ($(this).parent().nextUntil('.profileFolder').length > 0) {
      $(this).parent().prevAll(".profileFolder:first").removeClass( "collapse" );
      $(this).parent().prevUntil('.profileFolder').css("display","block");
    }
    $(this).parent().remove();
  });
  
  //Width of input field
  $(".profileFolderName").off("input").on('input', function(event) {
    var inputWidth = $(this).prev('.profileFolderNameWidth')
    inputWidth.text($(this).val());
    $(this).width((inputWidth).width());
  });
  $(".folder").on('click', function(event) {
    $(".profileFolderName").each(function(){
      var inputWidth = $(this).prev('.profileFolderNameWidth')
      inputWidth.text($(this).val());
      $(this).width((inputWidth).width());
    });
  });
  $(".profileFolderName").each(function(){
    var inputWidth = $(this).prev('.profileFolderNameWidth')
    inputWidth.text($(this).val());
    $(this).width((inputWidth).width());
  });
};

function round(value, precision) {
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
};

var enableButton = function(ele) {
    $(ele).removeAttr("disabled");
}

function setWeaponProfile(name="Profile-"+weaponProfileNum, create=false, weaponProfile) {
  
  //Only when creating new div
  if (create) {
    var weaponProfile = $("<div>").addClass('profile weaponProfile').attr("id","weaponProfile"+weaponProfileNum);
  }
  
  //Name input
  var label = $("<label>").text('> ');
  var input = $('<input type="text" spellcheck="false">').addClass('profileName').attr("value", name);
  input.appendTo(label);
  weaponProfile.append(label);
  
  //Data values
  weaponProfile.data( "name", name );
  weaponProfile.data( "tool", tool );
  weaponProfile.data( "toolMaterial", toolMaterial );
  weaponProfile.data( "strength", effect[0] );
  weaponProfile.data( "weakness", effect[1] );
  weaponProfile.data( "crit", crit );
  weaponProfile.data( "sharpness", sharpness );
  weaponProfile.data( "attackDamage", attackDamage );
  
  //Edit and Delete buttons
  var editWeaponProfile = $('<div>').addClass("profileButton editProfile editWeaponProfile");
  var editTooltip = $('<span>').addClass("tooltip editTooltip").text("Update Profile");
  editWeaponProfile.append(editTooltip);
  weaponProfile.append(editWeaponProfile);
  var deleteWeaponProfile = $('<div>').addClass("profileButton deleteProfile deleteWeaponProfile");
  var deleteTooltip = $('<span>').addClass("tooltip deleteTooltip").text("Delete Profile");
  deleteWeaponProfile.append(deleteTooltip);
  
  //Stat Values
  weaponProfile.append(deleteWeaponProfile);   
  var profileHitCooldown = $('<p>').text("Hit Cooldown: "+(attackCooldown.toFixed(2)));
  weaponProfile.append(profileHitCooldown);
  var profileDamagePerSecond = $('<p>').text("Damage Per Second: "+damagePerSecond);
  weaponProfile.append(profileDamagePerSecond);
  var profileDamage = $('<p>').addClass("profileShorthand profileDamage").text("Attack damage: "+attackDamage);
  weaponProfile.append(profileDamage);
  var profileDamageDealt = $('<p>').addClass("profileShorthand profileDamageDealt").text("Damage dealt: "+damageDealt);
  weaponProfile.append(profileDamageDealt);
  
  //Make Table
  var tableContainer = $('<div>').addClass('profileTableContainer');
  var table = $('<table>').addClass('profileTable');

  //Create copies of boxes
  var clones = [];
  var values = [];
  clones.push($("#tool").clone());
  
  //Table Headers
  table.append($('<th>').attr('colspan', "2").text('Weapon'));
  
  //Only add values if not defualt
  if (effect[0] > 0) {
    table.append($('<th>').text('Strength'));
    clones.push($("#strength").clone());
    values.push("Strength " +effect[0]);
  };
  if (effect[1] > 0) {
    table.append($('<th>').text('Weakness'));
    clones.push($("#weakness").clone());
    values.push("Weakness "+effect[1]);
  };
  
  //Header and clone for crit
  table.append($('<th>').text('Crit'));
  clones.push($("#crit").clone());
  if (crit) {
    values.push("Crit");
  } else {
    values.push("No Crit");
  }
  
  //Only add sharpness if not defualt
  if (sharpness > 0) {
    table.append($('<th>').text('Sharpness'));
    var sharpnessBox = $("<div>").addClass("box number");
    sharpnessBox.css("background-image", "url(" + enchantmentImage + ")"); 
    clones.push(sharpnessBox);
    values.push("Sharp "+sharpness);
  }
  table.append($('<tr>'));
  
  //Add the boxes to table
  for(i=0; i<clones.length; i++){
    clones[i].css({ transform: 'scale(.875)' });
    if (i==0) {
      table.append($('<th>').attr('colspan', "2").append(clones[i]))
    } else {
      table.append($('<th>').append(clones[i]))
    }
  }
  table.append($('<tr>'));
  
  //Add descriptions to table  
  table.append($('<td>').attr('colspan', "2").text(toolMaterialName+" "+toolName));
  for(i=0; i<values.length; i++){
    table.append($('<td>').append(values[i]));
  }
  //Finish profile
  tableContainer.append(table)
  weaponProfile.append(tableContainer);
  if (create) {
    $("#weaponProfiles").append(weaponProfile);
  }
  //Add input filter after the text box is added
  limitInputText();
  
  loadProfileHandlers();


}
function setArmourProfile(name="Profile-"+armourProfileNum, create=false, armourProfile) {
  
  //Only when creating new div
  if (create) {
    var armourProfile = $("<div>").addClass('profile armourProfile').attr("id","armourProfile"+armourProfileNum);
  }
  //Name input
  var label = $("<label>").text('> ');
  var input = $('<input type="text" spellcheck="false">').addClass('profileName').attr("value", name);
  input.appendTo(label);
  armourProfile.append(label);
  
  //Data values
  armourProfile.data( "name", name );
  armourProfile.data( "armourMaterials", [...armourMaterials] );
  armourProfile.data( "protection", protection );
  armourProfile.data( "resistance", effect[2] );
  armourProfile.data( "hitpoints", hitpoints );
  armourProfile.data( "totalArmour", totalArmour );
  armourProfile.data( "totalToughness", totalToughness );

  //Edit and Delete buttons
  var editArmourProfile = $('<div>').addClass("profileButton editProfile editArmourProfile");
  var editTooltip = $('<span>').addClass("tooltip editTooltip").text("Update Profile");
  editArmourProfile.append(editTooltip);
  armourProfile.append(editArmourProfile);
  var deleteArmourProfile = $('<div>').addClass("profileButton deleteProfile deleteArmourProfile");
  var deleteTooltip = $('<span>').addClass("tooltip deleteTooltip").text("Delete Profile");
  deleteArmourProfile.append(deleteTooltip);
  armourProfile.append(deleteArmourProfile);
  
  //Stat Values
  var profileArmour = $('<p>').text("Armour: "+ totalArmour);
  armourProfile.append(profileArmour);
  var profileToughness = $('<p>').text("Toughness: "+totalToughness);
  armourProfile.append(profileToughness);
  
  var reductions = 1- (1-protection*0.04) * (1-effect[2]*0.2);
  reductions *= 100;
  var profileReductions = $('<p>').text("Extra Reducs: "+ round(reductions,1)+"%");
  armourProfile.append(profileReductions);
  var profileDamageTaken = $('<p>').addClass("profileShorthand profileDamageTaken").text("Damage Taken: "+damageDealt);
  armourProfile.append(profileDamageTaken);
  
  var damageReduced = round((100-percentDamageDealt),2)
  var profileDamageReduced = $('<p>').addClass("profileShorthand profileDamageReduced").text("Reduced By: "+damageReduced+"%");
  armourProfile.append(profileDamageReduced);
  
  
  //Make Table
  var tableContainer = $('<div>').addClass('profileTableContainer');
  var table = $('<table>').addClass('profileTable');
  
  //Create copies of boxes and table headers
  var clones = [];
  var values = [];
  if (effect[2] || hitpoints!=20) {
    var showAllArmour = false;
  } else {
    var showAllArmour = true; 
  }
  if (armourMaterials[0] || showAllArmour) {
    clones.push($("#helmet").clone());
    table.append($('<th>').text('Helmet'));
    values.push(armourMaterialList[armourMaterials[0]]);
  }
  if (armourMaterials[1] || showAllArmour) {
    clones.push($("#chestplate").clone());
    table.append($('<th>').text('Chestplate'));
    values.push(armourMaterialList[armourMaterials[1]]);
  }
  if (armourMaterials[2] || showAllArmour) {
    clones.push($("#leggings").clone());
    table.append($('<th>').text('Leggings'));
    values.push(armourMaterialList[armourMaterials[2]]);
  }
  if (armourMaterials[3] || showAllArmour) {
    clones.push($("#boots").clone());
    table.append($('<th>').text('Boots'));
    values.push(armourMaterialList[armourMaterials[3]]);
  }
  
  //Only add values if not defualt
  if (protection > 0) {
    table.append($('<th>').text('Protection'));
    var protectionBox = $("<div>").addClass("box number");
    protectionBox.css("background-image", "url(" + enchantmentImage + ")"); 
    clones.push(protectionBox);
    values.push("Prot "+protection);
  }
  if (effect[2] > 0) {
    table.append($('<th>').text('Resistance'));
    clones.push($("#resistance").clone());
    values.push("Res " +effect[2]);
  };
  if (hitpoints != 20) {
    table.append($('<th>').text('Hitpoints'));
    var hitpointsBox = $("<div>").addClass("box number").attr("id","hitpointsBox");
    hitpointsBox.css("background-image", "url(" + heartImage + ")"); 
    clones.push(hitpointsBox);
    values.push(hitpoints+" HP");
  }
  table.append($('<tr>'));   

  //Add the boxes to table
  for(i=0; i<clones.length; i++){
    clones[i].css({ transform: 'scale(.875)' });
    table.append($('<th>').append(clones[i]))
  }
  table.append($('<tr>'));
  
  for(i=0; i<values.length; i++){
    table.append($('<td>').append(values[i]));
  }
  
  //Finish profile
  tableContainer.append(table)
  armourProfile.append(tableContainer);
  if (create) {
    $("#armourProfiles").append(armourProfile);
  }
  //Add input filter after the text box is added
  limitInputText();
  
  loadProfileHandlers()


}

function updateProfiles() {
  $("#weaponProfiles").children().each(function () {
    var thisAttackDamage = $(this).data("attackDamage");
    var thisDamageDealt = thisAttackDamage*(1-(Math.min(20,Math.max(totalArmour/5,totalArmour-4*thisAttackDamage/(totalToughness+8))))/25);
    thisDamageDealt= thisDamageDealt * (1- effectBonus[2]/100)
    thisDamageDealt= thisDamageDealt * (1-protectionBonus/100);
    thisDamageDealt= round(thisDamageDealt,3)
    $(this).find(".profileDamageDealt").text("Damage dealt: "+thisDamageDealt);
  });
  $("#armourProfiles").children().each(function () {
    var thisTotalArmour = $(this).data("totalArmour");
    var thisTotalToughness = $(this).data("totalToughness");
    var thisResistance = $(this).data("resistance");
    var thisProtection = $(this).data("protection");
    var thisDamageTaken = attackDamage*(1-(Math.min(20,Math.max(thisTotalArmour/5,thisTotalArmour-4*attackDamage/(thisTotalToughness+8))))/25);
    thisDamageTaken = thisDamageTaken * (1- thisResistance/5)
    thisDamageTaken = thisDamageTaken * (1- thisProtection/25);
    thisDamageTaken = round(thisDamageTaken,3)
    $(this).find(".profileDamageTaken").text("Damage Taken: "+thisDamageTaken);
    var thisDamageReduced = 100 - 100*thisDamageTaken/attackDamage
    thisDamageReduced = round(thisDamageReduced,2)
    $(this).find(".profileDamageReduced").text("Reduced By: "+thisDamageReduced+"%");
  });
}

function setInputFilter(textbox, inputFilter) {
  ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop"].forEach(function(event) {
    textbox.addEventListener(event, function() {
      if (inputFilter(this.value)) {
        this.oldValue = this.value;
        this.oldSelectionStart = this.selectionStart;
        this.oldSelectionEnd = this.selectionEnd;
      } else if (this.hasOwnProperty("oldValue")) {
        this.value = this.oldValue;
        this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
      } else {
        this.value = "";
      }
    });
  });
}
function limitInputNum() {
  var numberInputs =document.getElementsByClassName('inputValue');
  for (i = 0; i < numberInputs.length; i++) {
    setInputFilter(numberInputs[i], function(value) {
      return /^(?=.{0,2}$)\d*$/.test(value); });
  }
}
limitInputNum()
function limitInputText() {
  var nameInputs = $('.profileName, .profileFolderName');
  for (i = 0; i < nameInputs.length; i++) {
    setInputFilter(nameInputs[i], function(value) {
      return /^[a-zA-Z0-9_-]{0,14}$/.test(value); });
  }
}


function makeWeaponProfile({name, weapon: thisWeapon, material: thisMaterial, tool: thisTool, strength: thisStrength, weakness: thisWeakness, crit: thisCrit, sharpness: thisSharpness} = {}) {
  
  weaponProfileNum++
  //Weapon
  if (thisWeapon) {
    thisWeapon = thisWeapon.split(" ");
    if (thisWeapon.length == 2) {
      thisMaterial = thisWeapon[0]
      thisTool = thisWeapon[1]
    }
  }
    
  //Material
  if (typeof thisMaterial === "string") {
    thisMaterial.toLowerCase();
  }
  if (thisMaterial >= 0 && thisMaterial <= 6) {
    toolMaterial = thisMaterial
  } else {
    toolMaterial = 0
  }
  switch (thisMaterial) {
    case "no": case "none":
      toolMaterial = 0;
      break;
    case "wood": case "wooden": case "w":
      toolMaterial = 1;
      break;
    case "gold": case "golden": case "g":
      toolMaterial = 2;
      break;
    case "stone": case "s":
      toolMaterial = 3;
      break;
    case "iron": case "i":
      toolMaterial = 4;
      break;
    case "diamond": case "d":
      toolMaterial = 5;
      break;
    case "netherite": case "n":
      toolMaterial = 6;
      break;
      
  }
  $("#toolMaterial").trigger("mousedown", false);
  
  //Tool
  if (typeof thisTool === "string") {
    thisTool.toLowerCase();
  }
  if (thisTool >= 0 && thisTool <= 6) {
    tool = thisTool
  } else {
    tool = 0
  }
  switch (thisTool) {
    case "sword":
      tool = 0;
      break;
    case "axe":
      tool = 1;
      break;
    case "pickaxe": case "pick":
      tool = 2;
      break;
    case "shovel":
      tool = 3;
      break;
    case "hoe":
      tool = 4;
      break;
  }

  $("#tool").trigger("mousedown", false);
  
  //Strength
  if (thisStrength >= 0 && thisStrength <= 5) {
    effect[0] = thisStrength
  } else {
    effect[0] = 0
  }
  $("#strength").trigger("mousedown", false);
  
  //Weakness
  if (thisWeakness >= 0 && thisWeakness <= 5) {
    effect[1] = thisWeakness
  } else {
    effect[1] = 0
  }
  $("#weakness").trigger("mousedown", false);
  
  //Crit
  if (typeof thisCrit === "string") {
    thisCrit.toLowerCase();
  } 
  if (thisCrit == true || thisCrit == "crit" || thisCrit == "yes" || thisCrit == 1) {
    crit = true
  } else {
    crit = false
  }
  $("#crit").trigger("mousedown", false);
  
  //Sharpness
  if (thisSharpness >= 0 && thisSharpness <= 99) {
    sharpness = thisSharpness
  } else {
    sharpness = 0
  }
  $("#sharpnessValue").val(sharpness).trigger("change");
  //Test for valid name
  if ( !(/^[a-zA-Z0-9_-]{0,14}$/.test(name)) ) {
    console.log("invalid profile name passed into makeWeaponProfile")
    name = "Profile-"+weaponProfileNum
  }
  
  //Make new profile
  setWeaponProfile(name, true);
  
}
function makeArmourProfile({name, fullSet: thisFullSet, helmet: thisHelmet, chestplate: thisChestplate, leggings: thisLeggings, boots: thisBoots, protection: thisProtection, resistance: thisResistance, hp: thisHitpoints} = {}) {
  armourProfileNum++
  
  //Full set
  if (typeof thisFullSet === "string") {
    thisFullSet.toLowerCase();
  }
  if (thisFullSet) {
    thisHelmet = thisChestplate = thisLeggings = thisBoots = thisFullSet
  }
  var thisArmour = [thisHelmet,thisChestplate,thisLeggings,thisBoots]
  
  //Armour
  for (let i = 0; i < 4; i++) {
    if (typeof thisArmour[i] === "string") {
      thisArmour[i].toLowerCase();
    }
    if (thisArmour[i] >= 0 && thisArmour[i] <= 6) {
      armourMaterials[i] = thisArmour[i]
    } else {
      armourMaterials[i] = 0
    }
    switch (thisArmour[i]) {
      case "no": case "none":
        armourMaterials[i] = 0;
        break;
      case "leather": case "l":
        armourMaterials[i] = 1;
        break;
      case "gold": case "golden": case "g":
        armourMaterials[i] = 2;
        break;
      case "chain": case "chainmail": case "c":
        armourMaterials[i] = 3;
        break;
      case "iron": case "i":
        armourMaterials[i] = 4;
        break;
      case "diamond": case "d":
        armourMaterials[i] = 5;
        break;
      case "netherite": case "n":
        armourMaterials[i] = 6;
        break;
    }
  }
  
  $("#helmet").trigger("mousedown", false);
  $("#chestplate").trigger("mousedown", false);
  $("#leggings").trigger("mousedown", false);
  $("#boots").trigger("mousedown", false);
  
  //Protection
  if (thisProtection >= 0 && thisProtection <= 20) {
    protection = thisProtection
  }
  else if (thisProtection > 20) {
    protection = 20
  } else {
    protection = 0
  }
  $("#protectionValue").val(protection).trigger("change");
  
  //Resistance
  if (thisResistance >= 0 && thisResistance <= 5) {
    effect[2] = thisResistance
  } else {
    effect[2] = 0
  }
  $("#resistance").trigger("mousedown", false);

  //Hitpoints
  if (thisHitpoints >= 1 && thisHitpoints <= 99) {
    hitpoints = thisHitpoints
  } else {
    hitpoints = 20
  }
  $("#hitpointsValue").val(hitpoints).trigger("change");
  
  //Test for valid name
  if ( !(/^[a-zA-Z0-9_-]{0,14}$/.test(name)) ) {
    console.log("invalid profile name passed into makeWeaponProfile")
    name = "Profile-"+armourProfileNum
  }

  //Make new profile
  setArmourProfile(name, true);


}

function defaultProfiles() { 
  //WeaponProfiles: name, weapon or (material + tool), strength, weakness, crit, sharpness
  //ArmourProfiles: name, fullSet or (helmet, chestplate, leggings, boots), protection, resistance, hp
  //Armour Materials: leather/l, gold/g, chain/c, iron/i, diamond/d, netherite/n
  makeWeaponProfile({name: "Ninja", weapon: "iron sword"});
  makeWeaponProfile({name: "Warrior", weapon: "stone sword"});
  makeWeaponProfile({name: "Runner", weapon: "wooden sword"})
  makeWeaponProfile({name: "Tank", weapon: "stone pickaxe"})
  makeWeaponProfile({name: "Archer"})
  
  makeArmourProfile({name: "Tank", chestplate: "i", leggings: "i", boots: "i"})
  makeArmourProfile({name: "Jumper", leggings: "i", boots: "d", protection: 1})
  makeArmourProfile({name: "Scout", leggings: "c", boots: "d", protection: 2})
  makeArmourProfile({name: "Archer", chestplate: "d"})
  makeArmourProfile({name: "Builder", helmet: "l", chestplate: "i"})
  makeArmourProfile({name: "Miner", chestplate: "l", leggings: "c"})
  makeArmourProfile({name: "Runner", chestplate: "c", boots: "i"})
  makeArmourProfile({name: "Warrior", chestplate: "c", leggings: "l"})
  makeArmourProfile({name: "Assassin", boots: "d", protection: 3})
  makeArmourProfile({name: "Medic", chestplate: "g"})
  makeArmourProfile({name: "Summoner", chestplate: "c"})
  makeArmourProfile({name: "Vamp", leggings: "g", boots: "g", hp: 36})
  makeArmourProfile({name: "Bomber", chestplate: "l", boots: "l"})
  makeArmourProfile({name: "Ninja"})
}




class WeaponProfile extends Weapon {
  static list = [];
  constructor(){
    super();
    this.position;
    this.group;
    //
  }
}