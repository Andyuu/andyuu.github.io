//TODO: https://stackoverflow.com/questions/2455225/how-do-i-move-focus-to-next-input-with-jquery
// attackSpeed = 1.6 
// T = 20/attackSpeed
// time = 0.5
// t = time * 20
// d = 0.2 + ((t + 0.5) / T) ** 2 * 0.8
// d2 = (t+0.5) / T
// print d2

//Input validation on clones
var toolMaterials = ["Images/Barrier.webp",
  "Images/Oak_Planks.webp",
  "Images/Gold_Ingot.webp",
  "Images/Cobblestone.webp",
  "Images/Iron_Ingot.webp",
  "Images/Diamond.webp",
  "Images/Netherite_Ingot.webp"]

var swords = [
["Images/Sword/Wooden_Sword.webp", 4, 1.6],
["Images/Sword/Golden_Sword.webp", 4, 1.6],
["Images/Sword/Stone_Sword.webp", 5, 1.6],
["Images/Sword/Iron_Sword.webp", 6, 1.6],
["Images/Sword/Diamond_Sword.webp", 7, 1.6],
["Images/Sword/Netherite_Sword.webp", 8, 1.6]]

var axes = [
["Images/Axe/Wooden_Axe.webp", 7, 0.8],
["Images/Axe/Golden_Axe.webp", 7, 1],
["Images/Axe/Stone_Axe.webp", 9, 0.8],
["Images/Axe/Iron_Axe.webp", 9, 0.9],
["Images/Axe/Diamond_Axe.webp", 9, 1],
["Images/Axe/Netherite_Axe.webp", 10, 1]]

var pickaxes = [
["Images/Pickaxe/Wooden_Pickaxe.webp", 2, 1.2],
["Images/Pickaxe/Golden_Pickaxe.webp", 2, 1.2],
["Images/Pickaxe/Stone_Pickaxe.webp", 3, 1.2],
["Images/Pickaxe/Iron_Pickaxe.webp", 4, 1.2],
["Images/Pickaxe/Diamond_Pickaxe.webp", 5, 1.2],
["Images/Pickaxe/Netherite_Pickaxe.webp", 6, 1.2]]

var shovels = [
["Images/Shovel/Wooden_Shovel.webp", 2.5, 1],
["Images/Shovel/Golden_Shovel.webp", 2.5, 1],
["Images/Shovel/Stone_Shovel.webp", 3.5, 1],
["Images/Shovel/Iron_Shovel.webp", 4.5, 1],
["Images/Shovel/Diamond_Shovel.webp", 5.5, 1],
["Images/Shovel/Netherite_Shovel.webp", 6.5, 1]]

var hoes = [
["Images/Hoe/Wooden_Hoe.webp", 1, 1],
["Images/Hoe/Golden_Hoe.webp", 1, 1],
["Images/Hoe/Stone_Hoe.webp", 1, 2],
["Images/Hoe/Iron_Hoe.webp", 1, 3],
["Images/Hoe/Diamond_Hoe.webp", 1, 4],
["Images/Hoe/Netherite_Hoe.webp", 1, 4]]

var enchantedSwords = [
  "Images/Sword/Enchanted_Wooden_Sword.webp",
  "Images/Sword/Enchanted_Golden_Sword.webp",
  "Images/Sword/Enchanted_Stone_Sword.webp",
  "Images/Sword/Enchanted_Iron_Sword.webp",
  "Images/Sword/Enchanted_Diamond_Sword.webp",
  "Images/Sword/Enchanted_Netherite_Sword.webp"]
  
var enchantedAxes = [
"Images/Axe/Enchanted_Wooden_Axe.webp",
"Images/Axe/Enchanted_Golden_Axe.webp",
"Images/Axe/Enchanted_Stone_Axe.webp",
"Images/Axe/Enchanted_Iron_Axe.webp",
"Images/Axe/Enchanted_Diamond_Axe.webp",
"Images/Axe/Enchanted_Netherite_Axe.webp"]

var enchantedPickaxes = [
"Images/Pickaxe/Enchanted_Wooden_Pickaxe.webp",
"Images/Pickaxe/Enchanted_Golden_Pickaxe.webp",
"Images/Pickaxe/Enchanted_Stone_Pickaxe.webp",
"Images/Pickaxe/Enchanted_Iron_Pickaxe.webp",
"Images/Pickaxe/Enchanted_Diamond_Pickaxe.webp",
"Images/Pickaxe/Enchanted_Netherite_Pickaxe.webp"]

var enchantedShovels = [
"Images/Shovel/Enchanted_Wooden_Shovel.webp",
"Images/Shovel/Enchanted_Golden_Shovel.webp",
"Images/Shovel/Enchanted_Stone_Shovel.webp",
"Images/Shovel/Enchanted_Iron_Shovel.webp",
"Images/Shovel/Enchanted_Diamond_Shovel.webp",
"Images/Shovel/Enchanted_Netherite_Shovel.webp"]

var enchantedHoes = [
"Images/Hoe/Enchanted_Wooden_Hoe.webp",
"Images/Hoe/Enchanted_Golden_Hoe.webp",
"Images/Hoe/Enchanted_Stone_Hoe.webp",
"Images/Hoe/Enchanted_Iron_Hoe.webp",
"Images/Hoe/Enchanted_Diamond_Hoe.webp",
"Images/Hoe/Enchanted_Netherite_Hoe.webp"]

var helmets = [["Images/Helmet/Empty_Helmet.webp", 0, 0],
["Images/Helmet/Leather_Helmet.webp", 1, 0],
["Images/Helmet/Golden_Helmet.webp", 2, 0],
["Images/Helmet/Chainmail_Helmet.webp", 2, 0],
["Images/Helmet/Iron_Helmet.webp", 2, 0],
["Images/Helmet/Turtle_Helmet.webp", 2, 0],
["Images/Helmet/Diamond_Helmet.webp", 3, 2],
["Images/Helmet/Netherite_Helmet.webp", 3, 3]]

var chestplates = [["Images/Chestplate/Empty_Chestplate.webp", 0, 0],
["Images/Chestplate/Leather_Chestplate.webp", 3, 0],
["Images/Chestplate/Golden_Chestplate.webp", 5, 0],
["Images/Chestplate/Chainmail_Chestplate.webp", 5, 0],
["Images/Chestplate/Iron_Chestplate.webp", 6, 0],
["Images/Chestplate/Diamond_Chestplate.webp", 8, 2],
["Images/Chestplate/Netherite_Chestplate.webp", 8, 3]]

var leggings = [["Images/Leggings/Empty_Leggings.webp", 0, 0],
["Images/Leggings/Leather_Leggings.webp", 2, 0],
["Images/Leggings/Golden_Leggings.webp", 3, 0],
["Images/Leggings/Chainmail_Leggings.webp", 4, 0],
["Images/Leggings/Iron_Leggings.webp", 5, 0],
["Images/Leggings/Diamond_Leggings.webp", 6, 2],
["Images/Leggings/Netherite_Leggings.webp", 6, 3]]

var boots = [["Images/Boots/Empty_Boots.webp", 0, 0],
["Images/Boots/Leather_Boots.webp", 1, 0],
["Images/Boots/Golden_Boots.webp", 1, 0],
["Images/Boots/Chainmail_Boots.webp", 1, 0],
["Images/Boots/Iron_Boots.webp", 2, 0],
["Images/Boots/Diamond_Boots.webp", 3, 2],
["Images/Boots/Netherite_Boots.webp", 3, 3]]

var enchantedHelmets = ["Images/Helmet/Empty_Helmet.webp",
"Images/Helmet/Enchanted_Leather_Helmet.webp",
"Images/Helmet/Enchanted_Golden_Helmet.webp",
"Images/Helmet/Enchanted_Chainmail_Helmet.webp",
"Images/Helmet/Enchanted_Iron_Helmet.webp",
"Images/Helmet/Enchanted_Turtle_Helmet.webp",
"Images/Helmet/Enchanted_Diamond_Helmet.webp",
"Images/Helmet/Enchanted_Netherite_Helmet.webp"]

var enchantedChestplates = ["Images/Chestplate/Empty_Chestplate.webp",
"Images/Chestplate/Enchanted_Leather_Chestplate.webp",
"Images/Chestplate/Enchanted_Golden_Chestplate.webp",
"Images/Chestplate/Enchanted_Chainmail_Chestplate.webp",
"Images/Chestplate/Enchanted_Iron_Chestplate.webp",
"Images/Chestplate/Enchanted_Diamond_Chestplate.webp",
"Images/Chestplate/Enchanted_Netherite_Chestplate.webp"]

var enchantedLeggings = ["Images/Leggings/Empty_Leggings.webp",
"Images/Leggings/Enchanted_Leather_Leggings.webp",
"Images/Leggings/Enchanted_Golden_Leggings.webp",
"Images/Leggings/Enchanted_Chainmail_Leggings.webp",
"Images/Leggings/Enchanted_Iron_Leggings.webp",
"Images/Leggings/Enchanted_Diamond_Leggings.webp",
"Images/Leggings/Enchanted_Netherite_Leggings.webp"]

var enchantedBoots = ["Images/Boots/Empty_Boots.webp",
"Images/Boots/Enchanted_Leather_Boots.webp",
"Images/Boots/Enchanted_Golden_Boots.webp",
"Images/Boots/Enchanted_Chainmail_Boots.webp",
"Images/Boots/Enchanted_Iron_Boots.webp",
"Images/Boots/Enchanted_Diamond_Boots.webp",
"Images/Boots/Enchanted_Netherite_Boots.webp"]

var trident = ["Images/Trident.webp", 9 , 1.1]
var enchantedTrident = "Images/Enchanted_Trident.webp"
var barrierImage = "Images/Barrier.webp";
var critImage = "Images/Crit.webp";
var editImage = "Images/Book_And_Quill.webp";
var deleteImage = "Images/Fire_Charge.webp";


var heartImage = "Images/Icon/Heart.webp";
var halfHeartImage = "Images/Icon/Half_Heart.webp";
var emptyHeartImage = "Images/Icon/Empty_Heart.webp";
var armourImage = "Images/Icon/Armour.webp";
var halfArmourImage = "Images/Icon/Half_Armour.webp";
var emptyArmourImage = "Images/Icon/Empty_Armour.webp";
var toughnessImage = "Images/Icon/Toughness.webp";
var halfToughnessImage = "Images/Icon/Half_Toughness.webp";
var damageImage = "Images/Icon/Damage.webp";
var threeQuarterDamageImage = "Images/Icon/Three_Quarter_Damage.webp";
var halfDamageImage = "Images/Icon/Half_Damage.webp";
var quarterDamageImage = "Images/Icon/Quarter_Damage.webp";
var emptyDamageImage = "Images/Icon/Empty_Damage.webp";
var cooldownImage = "Images/Icon/Hourglass.webp";
var halfCooldownImage = "Images/Icon/Half_Hourglass.webp"
var redCooldownImage = "Images/Icon/Red_Hourglass.webp"
var halfRedCooldownImage = "Images/Icon/Half_Red_Hourglass.webp"
var emptyCooldownImage = "Images/Icon/Empty_Hourglass.webp"
var infiniteCooldownImage = "Images/Icon/Infinite.webp"


var maxProfiles = 16
var weaponProfileNum = 0
var armourProfileNum = 0

var armourMaterialList = ["None", "Leather", "Golden", "Chainmail", "Iron", "Diamond", "Netherite"]
var helmetMaterialList = ["None", "Leather", "Golden", "Chainmail", "Iron", "Turtle", "Diamond", "Netherite"]
var armourNames = ["None", "None", "None", "None"]
var armourMaterials = [0, 0, 0, 0]
var armourDefence = [0, 0, 0, 0]
var armourToughness = [0, 0, 0, 0]
var totalArmour = 0
var totalToughness = 0
var protection = 0
var protectionBonus = 0
var hitpoints = 20
var toolMaterialList = ["Wooden", "Golden", "Stone", "Iron", "Diamond", "Netherite"]
var toolMaterialName = "No"
var toolList = [ "Sword", "Axe", "Pickaxe", "Shovel", "Hoe", "Trident", "None"]
var toolName = "Sword"
var toolOptions = swords
var tools = [swords, axes, pickaxes, shovels, hoes, trident, [barrierImage, 1, 4]]
var enchantedTools = [enchantedSwords, enchantedAxes, enchantedPickaxes, enchantedShovels, enchantedHoes, enchantedTrident, barrierImage]
var toolMaterial = 0
var tool = 0
var baseDamage = 1
var attackSpeed = 4
//Effects order: Strength, Weakness, Resistance
// var effect = [0, 0, 0]
var effectsMax = 5
var maxHitpoints = 99 //Doesnt work
var effectBonus = [0, 0, 0]

const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === "dark" || currentTheme == null) {
      $(".themeSwitch input").prop("checked",true)
    }
}


function camelToTitle(text) {
  text = text.replace(/([A-Z])/g, " $1");
  return text.charAt(0).toUpperCase() + text.slice(1);
}
function random(max = 100) {
  return Math.floor(Math.random() * max)
}
const pluralise = (count, noun, suffix = 's') =>
  `${count} ${noun}${count !== 1 ? suffix : ''}`;
//Unused
function round(value, precision) {
  var multiplier = Math.pow(10, precision || 0);
  return Math.round(value * multiplier) / multiplier;
};
94

function romanNumeral(num) {
  var lookup = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1},roman = '',i;
  for ( i in lookup ) {
    while ( num >= lookup[i] ) {
      roman += i;
      num -= lookup[i];
    }
  }
  return roman;
}
class Effect{
  constructor() {
    this.strength = 0
    this.haste = 0
    this.regeneration = 0
    this.resistance = 0
    this.weakness = 0
    this.miningFatigue = 0
    this.fireResistance = 0
    this.speed = 0
    this.slowness = 0
    this.waterBreathing = 0
    this.invisibility = 0
    this.glowing = 0
    this.healthBoost = 0
    this.absorption = 0
    this.jumpBoost = 0
    this.slowFalling = 0
    this.levitation = 0
    this.saturation = 0
    this.hunger = 0
    this.nausea = 0
    this.nightVision = 0
    this.blindness = 0
    this.darkness = 0
    this.poison = 0
    this.wither = 0
    // this.instantHealth = 0
    // this.instantDamage = 0
  }
  bonus(effect, secondary=false, sign=false, roundPrecision){
    effect = effect.toLowerCase().replace(/\s+/g, ''); //Remove whitespace
    let bonus = 0
    let multiplicitive = false
    switch(effect){
      case "strength":
        bonus =  this.strength * 3
        break;
      case "weakness":
        bonus =  this.weakness * -4
        break;
      case "haste":
        if (secondary){
          bonus = 1 + this.haste * 0.2
          multiplicitive = true
        } else {
          bonus = 1 + this.haste * 0.1
          multiplicitive = true
        }
        break;
      case "miningfatigue":
        if (secondary){
          bonus = 0.3 ** this.miningFatigue
          multiplicitive = true
        } else {
          bonus = this.miningFatigue < 10 ? 1 - this.miningFatigue * 0.1 : 0
          multiplicitive = true
        }
        break;
      case "regeneration": case "regen":
        if (this.regeneration > 0 ) {
          bonus = this.regeneration < 6 ? 20/(Math.floor(100 / (2 ** this.regeneration) )) : 20
        } else {
          bonus = 0
        }
        break;
      case "resistance": case "res":
        bonus = this.resistance < 5 ? 1 - this.resistance * 0.2 : 0
        multiplicitive = true
        break;
      case "fireresistance": case "fire": case "fireres":
        if (this.fireResistance) {
          bonus = 0
        } else {
          bonus = 1
        }
        multiplicitive = true
        break;
      case "speed":
        bonus = 1 + this.speed * 0.2
        multiplicitive = true
        break;
      case "slowness":
        bonus = 1 - this.slowness * 0.2
        multiplicitive = true
        break;
      case "waterbreathing": case "breathing":
        if (this.waterBreathing > 0){
          bonus = "indefinite"
        } else {
          bonus = "normal"
        }
        break;
      case "invisibility":
        if (this.invisibility > 0 ){
          // Add mob detection range
          bonus = "hidden"
        } else {
          bonus = "visible"
        }
        break;
      case "glowing":
        if (this.glowing > 0 ){
          bonus = ""
        } else {
          bonus = "no "
        }
        break;
      case "healthboost":
        bonus = 4 * this.healthBoost
        break;
      case "absorption":
        bonus = 4 * this.absorption
        break;
      case "jumpboost":
        if (secondary) {
          bonus = -this.jumpBoost
        } else {
          bonus = 1.25 + this.jumpBoost * 0.625;
        }
        break;
      case "slowfalling":
        if (this.slowFalling){
          bonus = "slow"
        } else {
          bonus = "normal"
        }
        break;
      case "levitation":
        bonus = 0.9 * this.levitation
        break;
      case "saturation":
        if (secondary) {
          bonus = 2 * this.saturation
        } else {
          bonus = this.saturation
        }
        break;
      case "hunger":
        bonus = -0.025 * this.hunger 
        break;
      case "nausea":
        if (this.nausea) {
          bonus = ""
        } else {
          bonus = "no "
        }
        break;
      case "nightvision":
        if (this.nightVision) {
          bonus = ""
        } else {
          bonus = "no "
        }
        break;
      case "blindness":
        if (this.blindness) {
          bonus = ""
        } else {
          bonus = "no "
        }
        break;
      case "darkness":
        if (this.darkness) {
          bonus = ""
        } else {
          bonus = "no "
        }
        break;
      case "poison":
        switch(this.poison) {
          case "0": case 0:
            bonus = 0
            break;
          case "1":
            bonus = -20/25
            break;
          case "2": case "3": case "4":
            bonus = -20/12
            break;
          case "5":
            bonus = -20/10
            break;
          default:
            bonus = -20/10
            break;
        }
        break;
      case "wither":
        switch(this.wither) {
          case "0": case 0:
            bonus = 0
            break;
          case "1":
            bonus = -20/40
            break;
          case "2":
            bonus = -20/20
            break;
          case "3": case "4": case "5":
            bonus = -20/10
            break;
          default:
            bonus = -20/10
            break;
        }
        break;
    }
    if (roundPrecision) {
      if (typeof bonus == "number") {
        bonus = round(bonus,roundPrecision)
      }
    }
    if (sign){
      if (multiplicitive) {
        bonus = bonus + "x"
      }
      else {
        bonus = ( bonus < 0 ? "" : "+" ) + bonus
      }
    }
    return bonus
  }
  description(effectName, secondary=false) {
    effectName = effectName.toLowerCase().replace(/\s+/g, '');
    let bonus = this.bonus(effectName, false, true, 8)
    let bonusNoSign = this.bonus(effectName, false, false, 8)
    let bonus2 = this.bonus(effectName, true, true, 8)
    switch(effectName){
      case "strength": case "weakness":
        return bonus + " damage"
      case "haste": case "miningfatigue":
        if (secondary) {
          return bonus2 + " mining speed"
        } else {
        return bonus + " attack speed"
        }
      case "regeneration": case "regen": case "poison": case "wither":
        return bonus + " health/second"
      case "resistance": case "res":
        return bonus + " damage received"
      case "fireresistance": case "fire": case "fireres":
        return bonus + " fire damage received"
      case "speed": case "slowness":
        return bonus + " walking speed"
      case "waterbreathing": case "breathing":
        return bonusNoSign + " underwater breathing"
      case "invisibility":
        return bonusNoSign + " player"
      case "glowing":
        return bonusNoSign + "glowing effect"
      case "healthboost":
        return bonus + " extra health"
      case "absorption":
        return bonus + " extra temporary health"
      case "jumpboost":
        if (secondary) {
          return bonus2 + " fall damage"
        } else {
          return bonusNoSign + " blocks jump height"
        }
      case "slowfalling":
        return bonusNoSign + " falling speed"
      case "levitation":
        return bonus + " blocks/second height"
      case "saturation":
        if (secondary) {
          return pluralise(bonus2,"hunger point")+"/tick"
        } else {
          return pluralise(bonus,"saturation point")+"/tick"
        }
      case "hunger":
        return bonus + " hunger/second"
      case "nausea":
        return bonusNoSign + "nausea effect"
      case "nightvision":
        return bonusNoSign + "night vision effect"
      case "blindness":
        return bonusNoSign + "blindness effect"
      case "darkness":
        return bonus + "darkness effect"
    }

  }
}
class Weapon {
  constructor(effect) {
    this.material = 0
    this.tool = 0
    this.crit = false
    this.sharpness = 0
    this.effect = effect
  }
  get toolName() {
    return toolList[this.tool]
  }
  get materialName() {
    return toolMaterialList[this.material]
  }
  get name() {
    if (this.tool >= 5) {
      return this.toolName
    } else {
    return this.materialName + " " + this.toolName
    }
  }
  get materialImage() {
    return toolMaterials[this.material]
  }
  get toolImage() {
    if (this.tool >= 5) {
      return tools[this.tool][0]
    } else {
      return tools[this.tool][this.material][0]
    }
  }
  get enchantedToolImage() {
    if (this.tool >= 5) {
      return enchantedTools[this.tool]
    } else {
      return enchantedTools[this.tool][this.material]
    }
  }
  get baseDamage() {
    if (this.tool >= 5) {
      return tools[this.tool][1]
    } else {
      return tools[this.tool][this.material][1]
    }
  }
  get baseAttackSpeed() {
    if (this.tool >= 5) {
      return tools[this.tool][2]
    } else {
      return tools[this.tool][this.material][2]
    }
  }
  get attackSpeed() {
    return this.baseAttackSpeed * this.effect.bonus("haste") * this.effect.bonus("miningFatigue")
  }
  get attackCooldown() {
    var attackCooldown = 1 / this.attackSpeed - 0.025
    attackCooldown = (Math.ceil(attackCooldown * 20) / 20);
    if (attackCooldown < 0.5) {
      attackCooldown = 0.5
    }
    return attackCooldown
  }
  get critBonus() {
    return (this.crit) ? 1.5 : 1;
  }
  get sharpnessBonus() {
    return (this.sharpness>0) ? this.sharpness * 0.5 + 0.5 : 0;
  }
  get damage() {
    var damage = (this.baseDamage + this.effect.bonus("strength") + this.effect.bonus("weakness")) * this.critBonus + this.sharpnessBonus
    if (damage < 0) {
      damage = 0
    }
    return damage
  }
  get DPS() {
    return this.damage / this.attackCooldown
  }
}
class Armour {
  constructor() {
    this.helmet = 0
    this.chestplate = 0
    this.leggings = 0
    this.boots = 0
    this.helmetProtection = 0
    this.chestplateProtection = 0
    this.leggingsProtection = 0
    this.bootsProtection = 0
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
  get enchantedHelmetImage() {
    return enchantedHelmets[this.helmet]
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
  get enchantedChestplateImage() {
    return enchantedChestplates[this.chestplate]
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
  get enchantedLeggingsImage() {
    return enchantedLeggings[this.leggings]
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
  get enchantedBootsImage() {
    return enchantedBoots[this.boots]
  }
  get bootsDefence() {
    return boots[this.boots][1]
  }
  get bootsToughness() {
    return boots[this.boots][2]
  }
  get defence() {
    return this.helmetDefence + this.chestplateDefence + this.leggingsDefence + this.bootsDefence
  }
  get toughness() {
    return this.helmetToughness + this.chestplateToughness + this.leggingsToughness + this.bootsToughness
  }
  get protection() {
    return this.helmetProtection + this.chestplateProtection + this.leggingsProtection + this.bootsProtection
  }
  get protectionBonus() {
    return this.protection * 4
  }
}
class Results {
  constructor(attacker, attackerEffect, defender, defenderEffect) {
    this.attacker = attacker
    this.attackerEffect = attackerEffect
    this.defender = defender
    this.defenderEffect = defenderEffect
  }
  get damageDealt() {
    let dmg = this.attacker.damage * (1 - (Math.min(20, Math.max(this.defender.defence / 5, this.defender.defence - 4 * this.attacker.damage / (this.defender.toughness + 8)))) / 25);
    dmg *= this.defenderEffect.bonus("resistance") * (1 - this.defender.protectionBonus / 100);
    return dmg
  }
  get armourReduction() {
    let dmg = this.attacker.damage * (1 - (Math.min(20, Math.max(this.defender.defence / 5, this.defender.defence - 4 * this.attacker.damage / (this.defender.toughness + 8)))) / 25);
    return (1 - dmg / this.attacker.damage) * 100
  }
  get defenceReduction() {
    let altDamageDealt = this.attacker.damage * (1 - (Math.min(20, Math.max(this.defender.defence / 5, this.defender.defence - 4 * this.attacker.damage / 8))) / 25);
    return (1 - altDamageDealt / this.attacker.damage) * 100
  }
  get toughnessReduction() {
    let dmg = this.attacker.damage * (1 - (Math.min(20, Math.max(this.defender.defence / 5, this.defender.defence - 4 * this.attacker.damage / (this.defender.toughness + 8)))) / 25);
    let altDamageDealt = this.attacker.damage * (1 - (Math.min(20, Math.max(this.defender.defence / 5, this.defender.defence - 4 * this.attacker.damage / 8))) / 25);
    return (1 - dmg / altDamageDealt) * 100
  }
  get percentDamageDealt() {
    return this.damageDealt / this.attacker.damage * 100;
  }
  get DPS() {
    return this.damageDealt / this.attacker.attackCooldown
  }
  get hitsToKill() {
    return Math.ceil(this.defender.hitpoints / this.damageDealt);
  }
  get timeToKill() {
    return this.hitsToKill * this.attacker.attackCooldown;
  }


}
const effect = new Effect();
const weapon = new Weapon(effect);
const armour = new Armour(effect);
const results = new Results(weapon, effect, armour, effect);

$(document).ready(function () {
  $(".themeSwitch input").change(function (event) {
    if($(this).prop("checked") == true) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
  });
  $(document).scroll(function() {
    let scroll = $(document).scrollTop();
    // console.log(scroll)
    if (scroll >= 50) {
      $("header").addClass("shrink")
    } else {
      $("header").removeClass("shrink")
    }
  });
  // Sortable 
  $("#weaponProfiles, #armourProfiles").sortable({
    axis: "y",
    opacity: 0.9,
    distance: 25,
    helper: function (event, elm) {
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
    helper: function (event, ui) {
      var $clone = $(ui).clone();
      $clone.css('position', 'absolute');
      return $clone.get(0);
    }
  }); //Sort profile group list
  //Folder 
  $("#closeModal, #folderModal").on('click', function () {
    $("#folderModal").css("display", "none");
  }).children().click(function (event) { event.stopPropagation(); });
  $(".folder").on('click', function () {
    $("#folderModal").css("display", "block");
  });

  //Profiles
  $(".box, .arrow").contextmenu(function () {
    return false;
  }); //Hide context menu on right click
  $(".box").mousedown(function (event) {
    //Find if it is a user click
    if (event.hasOwnProperty('originalEvent')) {

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
  $(document).bind('keydown', 'alt+w', function () {
    if ($("#saveWeapon").attr("disabled") == "disabled") {
      return false;
    } else {
      $("#saveWeapon").trigger("click");
    }
  }); //Alt + W triggers "#saveWeapon"
  $("#saveWeapon").click(function () {
    //Increase profile number if below max
    if (weaponProfileNum < maxProfiles) {
      weaponProfileNum++
    } else {

      //Warn user that profile number is max
      $(this).after($("<span>").css("color", "red").css("fontWeight", "bold").text(" Reached max profiles ").fadeOut(2000));

      //Disable button to prevent spam
      $(this).attr("disabled", true);
      var that = $(this);
      setTimeout(function () { enableButton(that) }, 3000);
      return false;
    }

    //Set the profile via function
    setWeaponProfile(undefined, true);


  }); //Save weapon profile
  $(document).bind('keydown', 'alt+a', function () {
    if ($("#saveArmour").attr("disabled") == "disabled") {
      return false;
    } else {
      $("#saveArmour").trigger("click");
    }
  }); //Alt + A triggers "#saveArmour"
  $("#saveArmour").click(function () {
    //Increase profile number if below max
    if (armourProfileNum < maxProfiles) {
      armourProfileNum++
    } else {

      //Warn user that profile number is max
      $(this).after($("<span>").css("color", "red").css("fontWeight", "bold").text(" Reached max profiles ").fadeOut(2000));

      //Disable button to prevent spam
      $(this).attr("disabled", true);
      var button = $(this);
      setTimeout(function () { enableButton(button) }, 3000);
      return false;
    }

    //Set the profile via function
    setArmourProfile(undefined, true);


  }); //Save armour profile
  $(".collapser").click(function () {
    $(this).siblings(".profileContainer").children().addClass("collapse")
  });
  $(".expander").click(function () {
    $(this).siblings(".profileContainer").children().removeClass("collapse")
  });

  //Normal boxes
  $(".selectTool").mousedown(function (event) {
    let temp = $(this).attr("id").replace (/[^\d.]/g, '' )-1;

    if (weapon.tool == temp) {
      weapon.tool = 6
    } else {
      weapon.tool = temp
    }
    updateHTML()
  });
  $("#tool").mousedown(function (event) {
    if (event.which === 3) {
      weapon.material = weapon.material - 1 < 0 ? toolMaterialList.length-1 : weapon.material - 1;
    } else {
      weapon.material = weapon.material + 1 >= toolMaterialList.length ? 0 : weapon.material + 1;
    }
    updateHTML()
  });
  $(".crit").mousedown(function (event) {
    if (event.which === 3) {
      weapon.crit = false
    } else {
      weapon.crit = !weapon.crit;
    }
    updateHTML();
  });
  $("#helmet").mousedown(function (event) {
    if (event.which === 3) {
      armour.helmet = armour.helmet - 1 < 0 ? helmetMaterialList.length-1 : armour.helmet - 1;
    } else {
      armour.helmet = armour.helmet + 1 >= helmetMaterialList.length ? 0 : armour.helmet + 1;
    }
    updateHTML();
  });
  $("#chestplate").mousedown(function (event) {
    if (event.which === 3) {
      armour.chestplate = armour.chestplate - 1 < 0 ? armourMaterialList.length-1 : armour.chestplate - 1;
    } else {
      armour.chestplate = armour.chestplate + 1 >= armourMaterialList.length ? 0 : armour.chestplate + 1;
    }
    updateHTML();
  });
  $("#leggings").mousedown(function (event) {
    if (event.which === 3) {
      armour.leggings = armour.leggings - 1 < 0 ? armourMaterialList.length-1 : armour.leggings - 1;
    } else {
      armour.leggings = armour.leggings + 1 >= armourMaterialList.length ? 0 : armour.leggings + 1;
    }
    updateHTML();
  });
  $("#boots").mousedown(function (event) {
    if (event.which === 3) {
      armour.boots = armour.boots - 1 < 0 ? armourMaterialList.length-1 : armour.boots - 1;
    } else {
      armour.boots = armour.boots + 1 >= armourMaterialList.length ? 0 : armour.boots + 1;
    }
    updateHTML();
  });
  $('.dice').contextmenu(function () {
    return false;
  });
  $(".dice").mousedown(function (event) {
    $(this).removeClass("animate");
    $(this).width(); // trigger a DOM reflow
    $(this).addClass("animate");
    $(this).children('.pip').remove();
    for (i = 0; i <= random(6); i++) {
      $(this).append($("<div>").addClass("pip"));
    }
  });
  $(".animation").mousedown(function (event) {
    $(this).removeClass("animate");
    $(this).width(); // trigger a DOM reflow
    $(this).addClass("animate");
  });
  $(".weaponDice").mousedown(function (event) {
    weapon.material = random(7);
    weapon.tool = random(5);
    weapon.crit = random(2);
    weapon.sharpness = random(2) ? 1 + random(5) : 0;
    updateHTML()
  });
  $(".weaponReset").mousedown(function (event) {
    weapon.material = 0
    weapon.tool = 0
    weapon.crit = false
    weapon.sharpness = 0
    updateHTML()
  });
  $(".armourDice").mousedown(function (event) {
    armour.helmet = random(7)
    armour.chestplate = random(6)
    armour.leggings = random(6)
    armour.boots = random(6)
    armour.helmetProtection = random(2) && armour.helmet ? random(6) : 0;
    armour.chestplateProtection = random(2) && armour.chestplate ? random(6) : 0;
    armour.leggingsProtection = random(2) && armour.leggings ? random(6) : 0;
    armour.bootsProtection = random(2) && armour.boots ? random(6) : 0;
    armour.hitpoints = 1 + random(40);
    updateHTML()
  });
  $(".armourReset").mousedown(function (event) {
    armour.helmet = 0
    armour.chestplate = 0
    armour.leggings = 0
    armour.boots = 0
    armour.helmetProtection = 0
    armour.chestplateProtection = 0
    armour.leggingsProtection = 0
    armour.bootsProtection = 0
    armour.hitpoints = 20
    updateHTML()
  });
  $(".effectDice").mousedown(function (event) {
    if (event.which === 3) {
      effect.fireResistance = random(10) == 0 ? 1 : 0; 
      effect.speed = random(10) == 0 ? random(6) : 0;
      effect.slowness = random(10) == 0 ? random(6) : 0;
      effect.waterBreathing = random(10) == 0 ? 1 : 0;
      effect.invisibility = random(10) == 0 ? 1 : 0;
      effect.glowing = random(10) == 0 ? 1 : 0;
      effect.healthBoost = random(10) == 0 ? 1 : 0;
      effect.absorption = random(10) == 0 ? 1 : 0;
      effect.jumpBoost = random(10) == 0 ? random(6) : 0;
      effect.slowFalling = random(10) == 0 ? 1 : 0;
      effect.levitation = random(10) == 0 ? 1 : 0;
      effect.saturation = random(10) == 0 ? 1 : 0;
      effect.hunger = random(10) == 0 ? 1 : 0;
      effect.nausea = random(10) == 0 ? 1 : 0;
      effect.nightVision = random(10) == 0 ? 1 : 0;
      effect.blindness = random(10) == 0 ? 1 : 0;
      effect.darkness = random(10) == 0 ? 1 : 0;
      effect.poison = random(10) == 0 ? 1 : 0;
      effect.wither = random(10) == 0 ? 1 : 0;
  }
  do {
    effect.strength = random(2) == 0 ? random(6) : 0;
    effect.weakness = random(10) == 0 ? random(6) : 0;
    effect.haste = random(2) == 0 ? random(6) : 0;
    effect.miningFatigue = random(2) == 0 ? random(6) : 0;
    effect.regeneration = random(2) == 0 ? random(6) : 0;
    effect.resistance = random(2) == 0 ? random(5) : 0;
  } while (!effect.strength && !effect.weakness && !effect.haste && !effect.miningFatigue && !effect.regeneration && !effect.resistance);

    updateHTML()
  });
  $(".effectReset").mousedown(function (event) {
    effect.strength = 0
    effect.weakness = 0
    effect.haste = 0
    effect.miningFatigue = 0
    effect.regeneration = 0
    effect.resistance = 0
    effect.fireResistance = 0
    effect.speed = 0
    effect.slowness = 0
    effect.waterBreathing = 0
    effect.invisibility = 0
    effect.glowing = 0
    effect.healthBoost = 0
    effect.absorption = 0
    effect.jumpBoost = 0
    effect.slowFalling = 0
    effect.levitation = 0
    effect.saturation = 0
    effect.hunger = 0
    effect.nausea = 0
    effect.nightVision = 0
    effect.blindness = 0
    effect.darkness = 0
    effect.poison = 0
    effect.wither = 0
    updateHTML()
  });
  $(".armourUp").mousedown(function (event) {
    armour.helmet = armour.helmet < 7 ? armour.helmet+1 : 0;
    if (armour.helmet == 5) {
      armour.helmet = 6
    }
    armour.chestplate = armour.chestplate < 6 ? armour.chestplate+1 : 0;
    armour.leggings = armour.leggings < 6 ? armour.leggings+1 : 0;
    armour.boots = armour.boots < 6 ? armour.boots+1 : 0;
    updateHTML()
  });
  $(".armourDown").mousedown(function (event) {
    armour.helmet = armour.helmet > 0 ? armour.helmet-1 : 7;
    if (armour.helmet == 5) {
      armour.helmet = 4
    }
    armour.chestplate = armour.chestplate > 0 ? armour.chestplate-1 : 6;
    armour.leggings = armour.leggings > 0 ? armour.leggings-1 : 6;
    armour.boots = armour.boots > 0 ? armour.boots-1 : 6;
    updateHTML()
  });
  //Number boxes
  $(".arrowUp").mousedown(function (event) {
    var temp = Number($(this).next().val());
    if (event.which === 3) {
      if (temp < 96) {
        temp+=4
        $(this).next().val(temp).trigger('change');
      } else if (temp < 99) {
        temp = 99
        $(this).next().val(temp).trigger('change');
      }
    } else if (temp < 99) {
        temp++
        $(this).next().val(temp).trigger('change');
      };
  });
  $(".arrowDown").mousedown(function (event) {
    var temp = Number($(this).prev().val());
    if (event.which === 3) {
      if (temp > 3) {
        temp -= 4
        $(this).prev().val(temp).trigger('change');
      } else if (temp > 0) {
        temp = 0
        $(this).prev().val(temp).trigger('change');
      }

    } else if (temp > 0) {
      temp--
      $(this).prev().val(temp).trigger('change');
    }
  });
  $(".effect .inputValue").change(function () {
    let value = $(this).val();
    let effectName = $(this).parent().attr('class').split(' ')[0];
    effect[effectName] = value
    updateHTML();
  });
  $(".sharpnessValue").change(function () {
    weapon.sharpness = $(this).val();
    updateHTML();
  });
  $(".protectionValue").change(function () {
    if ($(this).parent().is("#helmetProtection")) {
      armour.helmetProtection = Number($(this).val());
    }
    else if ($(this).parent().is("#chestplateProtection")) {
      armour.chestplateProtection = Number($(this).val());
    }
    else if ($(this).parent().is("#leggingsProtection")) {
      armour.leggingsProtection = Number($(this).val());
    }
    else if ($(this).parent().is("#bootsProtection")) {
      armour.bootsProtection = Number($(this).val());
    }
    
    if ($(this).val() > 5) {
      $(this).val(5).trigger('change');
    }
    updateHTML();

  });
  $("#hitpointsValue").change(function () {
    armour.hitpoints = $(this).val();
    if (armour.hitpoints == 0) {
      $(this).val(1).trigger('change');
    }
    updateHTML();
  });

  updateProfiles()
  updateHTML()

  loadModalHandlers()
  // defaultProfiles()
});

function updateHTML() {
  $(".effect").each(function() {
    let effectName = $(this).attr('class').split(' ')[0];
    let value = effect[effectName]
    $(this).find("input").val(value);

    let description = effect.description(effectName)
    let description2 = effect.description(effectName, true)
    if (description == description2) {
      $(this).attr("title", camelToTitle(effectName) +"\n"+ description)
    } else {
      $(this).attr("title", camelToTitle(effectName) +"\n"+description +"\n"+ description2)
    }
    let numeral = romanNumeral(value).length <= 6 ? romanNumeral(value) : value
    $(this).parent().attr("data-before", numeral);
    if ($(this).parent().parent().attr("id") != "effectTable") {
      $("#effectTable ."+effectName+ " .inputValue").val(value)
      $("#effectTable ."+effectName).attr("data-before", numeral);
    }

    if ($(this).find(".inputValue").val() == 0) {
      $(this).addClass("off")
    } else {
      $(this).removeClass("off")
      if ($(this).parent().attr("id") == "effectTable") {
        $(this).clone(true).appendTo("#effectLine");
      }

    }
    if ($(this).parent().attr("id") == "effectLine") {
      $(this).remove()
    }
  });
  // $("#dice1").attr("title", "Left click for random weapon \nRight click to reset all")
  // $("#dice2").attr("title", "Left click for random armour \nRight click to reset all")
  $("#selectTool1").css("background-image", "url(" +  swords[weapon.material][0] + ")")
  $("#selectTool2").css("background-image", "url(" +  axes[weapon.material][0] + ")")
  $("#selectTool3").css("background-image", "url(" +  pickaxes[weapon.material][0] + ")")
  $("#selectTool4").css("background-image", "url(" +  shovels[weapon.material][0] + ")")
  $("#selectTool5").css("background-image", "url(" +  hoes[weapon.material][0] + ")")
  $("#selectTool6").css("background-image", "url(" +  trident[0] + ")")
  $("#selectTool"+(weapon.tool+1)).css("background-image", "url(" + barrierImage + ")")


  $("#toolMaterial").css("background-image", "url(" + weapon.materialImage + ")");
  //Damage
  let weaponDamageTitle = ""
  if (effect.strength > 0 || effect.weakness > 0 || weapon.crit == true || weapon.sharpness > 0) {
    weaponDamageTitle += weapon.baseDamage + " base damage"

    if (effect.strength > 0) {
      weaponDamageTitle += "\nStrength: " + effect.bonus("strength", false, true)
    }
    if (effect.weakness > 0) {
      weaponDamageTitle += "\nWeakness: " + effect.bonus("weakness", false, true)
    }
    if (weapon.crit == true) {
      weaponDamageTitle += "\n1.5x crit bonus" 
    }
    if (weapon.sharpness > 0) {
      weaponDamageTitle += "\nSharpness: +"+weapon.sharpnessBonus
    }
    weaponDamageTitle += "\nTotal: "+weapon.damage+" damage"
  } else {
    weaponDamageTitle += weapon.damage+" damage"
  }
  $("#weaponDamage").empty().append(damagePointImages(weapon.damage)).attr("title", weaponDamageTitle);
  $("#attackSpeed").text(round(weapon.attackSpeed,3))
  let attackCooldownTitle = ""
  if (isFinite(weapon.attackCooldown)) {
    attackCooldownTitle = weapon.attackCooldown + "s attack cooldown"
    if (effect.haste > 0) {
      attackCooldownTitle += "\nHaste: ÷ "+effect.bonus("haste",false,false,8)
    }
    if (effect.miningFatigue > 0) {
      attackCooldownTitle += "\nMining Fatigue: ÷ "+effect.bonus("miningFatigue",false,false,8)
    }
  } else {
    attackCooldownTitle = "Infinite attack cooldown \nMining Fatigue: ÷ 0 \n(Always deal 20% damage)";
  }
  $("#attackCooldown").empty().append(cooldownPointImages(weapon.attackCooldown)).attr("title", attackCooldownTitle)

  $("#toolDescription").text(weapon.name);
  $("#toolDamage").text(weapon.damage);
  //Crit
  if (weapon.crit == true){
    $(".crit").addClass("on")
    $(".crit").attr("title", "Critical hit\n x1.5 base damage");
  } else {
    $(".crit").removeClass("on")
    $(".crit").attr("title", "No crit");
  }

  //Sharpness
  if (weapon.sharpness > 0) {
    $("#tool").css("background-image", "url(" + weapon.enchantedToolImage + ")");
    $(".sharpness .inputValue").addClass("levelled");
  } else {
    $("#tool").css("background-image", "url(" + weapon.toolImage + ")");
    $(".sharpness .inputValue").removeClass("levelled");
  }
  $(".sharpness .inputValue").val(weapon.sharpness);

  //Tooltip for sharpness setter
  if (weapon.tool != 6 || weapon.sharpness == 0) {
    $(".sharpness .inputValue, .sharpness").attr("title", "Sharpness\n+"+ weapon.sharpnessBonus+" damage")
  } else {
    $(".sharpness .inputValue, .sharpness").attr("title", "Sharpness "+weapon.sharpness +" emptiness \n+"+ weapon.sharpnessBonus+" damage \n(in theory)")
  }

  //Damage
  $("#attackDamage").text(weapon.damage)
  if (weapon.attackSpeed > 2) {
    $("#immunityInfo").text("Damage immunity limits DPS");
  } else {
    $("#immunityInfo").text("");
  }
  // (weapon.attackSpeed > 2) ? $("#immunityInfo").text("Damage immunity limits DPS") : $("#immunityInfo").text("");
  $("#damagePerSecond").text(round(weapon.DPS, 3));



  //Helmet
  if (armour.helmetProtection > 0) {
    $("#helmet").css("background-image", "url(" + armour.enchantedHelmetImage + ")");
    $("#helmetProtection .inputValue").addClass("levelled");
  } else {
    $("#helmet").css("background-image", "url(" + armour.helmetImage + ")");
    $("#helmetProtection .inputValue").removeClass("levelled");
  }
  $("#helmetDefence").empty().append(armourPointImages(armour.helmetDefence)).attr("title", pluralise(armour.helmetDefence / 2, "armour point"));
  $("#helmetToughness").empty().append(toughnessPointImages(armour.helmetToughness)).attr("title", pluralise(armour.helmetToughness / 2, "toughness point"));
  //Chestplate
  if (armour.chestplateProtection > 0) {
    $("#chestplate").css("background-image", "url(" + armour.enchantedChestplateImage + ")");
    $("#chestplateProtection .inputValue").addClass("levelled");
  } else {
    $("#chestplate").css("background-image", "url(" + armour.chestplateImage + ")");
    $("#chestplateProtection .inputValue").removeClass("levelled");
  }
  $("#chestplateDefence").empty().append(armourPointImages(armour.chestplateDefence)).attr("title", pluralise(armour.chestplateDefence / 2, "armour point"));
  $("#chestplateToughness").empty().append(toughnessPointImages(armour.chestplateToughness)).attr("title", pluralise(armour.chestplateToughness / 2, "toughness point"));
  //Leggings
  if (armour.leggingsProtection > 0) {
    $("#leggings").css("background-image", "url(" + armour.enchantedLeggingsImage + ")");
    $("#leggingsProtection .inputValue").addClass("levelled");
  } else {
    $("#leggings").css("background-image", "url(" + armour.leggingsImage + ")");
    $("#leggingsProtection .inputValue").removeClass("levelled");
  }
  $("#leggingsDefence").empty().append(armourPointImages(armour.leggingsDefence)).attr("title", pluralise(armour.leggingsDefence / 2, "armour point"));
  $("#leggingsToughness").empty().append(toughnessPointImages(armour.leggingsToughness)).attr("title", pluralise(armour.leggingsToughness / 2, "toughness point"));
  //Boots
  if (armour.bootsProtection > 0) {
    $("#boots").css("background-image", "url(" + armour.enchantedBootsImage + ")");
    $("#bootsProtection .inputValue").addClass("levelled");
  } else {
    $("#boots").css("background-image", "url(" + armour.bootsImage + ")");
    $("#bootsProtection .inputValue").removeClass("levelled");
  }
  $("#bootsDefence").empty().append(armourPointImages(armour.bootsDefence)).attr("title", pluralise(armour.bootsDefence / 2, "armour point"));
  $("#bootsToughness").empty().append(toughnessPointImages(armour.bootsToughness)).attr("title", pluralise(armour.bootsToughness / 2, "toughness point"));
  //Armour
  $("#totalDefence").empty().append(armourPointImages(armour.defence)).attr("title", pluralise(armour.defence / 2, "armour point"));
  $("#totalToughness").empty().append(toughnessPointImages(armour.toughness)).attr("title", pluralise(armour.toughness / 2, "toughness point"));
  //Protection
  $("#protectionLevel").text(armour.protection);
  $("#protectionBonus").text(armour.protectionBonus);
  $("#helmetProtection .protectionValue").val(armour.helmetProtection);
  $("#chestplateProtection .protectionValue").val(armour.chestplateProtection);
  $("#leggingsProtection .protectionValue").val(armour.leggingsProtection);
  $("#bootsProtection .protectionValue").val( armour.bootsProtection);

  //Resistance
  $("#resistanceLevel").text(armour.resistance);
  $("#resistanceBonus").text(armour.resistanceBonus);
  //Hitpoints
  $("#totalHitpoints").empty().append(hitpointImages(armour.hitpoints)).attr("title", pluralise(armour.hitpoints, "hitpoint"));
  $("#hitpointsValue").val(armour.hitpoints);
  $(".hitpointBreak").css( "margin-top", Math.min(8,(armour.hitpoints-1)/20 << 0)*-2+"px"); //Clump lines of hearts closer where there are more

  //Tooltips for protection setters
  if (armour.helmet > 0) {
    $("#helmetProtection .inputValue").attr("title", "Protection "+armour.helmetProtection+" "+armour.helmetName.toLowerCase()+" helmet \n"+ armour.helmetProtection*4+"% extra damage reduction")
  } else {
    $("#helmetProtection .inputValue").attr("title", "Protection "+armour.helmetProtection+" emptiness \n"+ armour.helmetProtection*4+"% damage reduction \n(in theory)")
  }
  if (armour.chestplate > 0) {
    $("#chestplateProtection .inputValue").attr("title", "Protection "+armour.chestplateProtection+" "+armour.chestplateName.toLowerCase()+" chestplate \n"+ armour.chestplateProtection*4+"% extra damage reduction")
  } else {
    $("#chestplateProtection .inputValue").attr("title", "Protection "+armour.chestplateProtection+" emptiness \n"+ armour.chestplateProtection*4+"% damage reduction \n(in theory)")
  }
  if (armour.leggings > 0) {
    $("#leggingsProtection .inputValue").attr("title", "Protection "+armour.leggingsProtection+" "+armour.leggingsName.toLowerCase()+" leggings \n"+ armour.leggingsProtection*4+"% extra damage reduction")
  } else {
    $("#leggingsProtection .inputValue").attr("title", "Protection "+armour.leggingsProtection+" emptiness \n"+ armour.leggingsProtection*4+"% damage reduction \n(in theory)")
  }
  if (armour.boots > 0) {
    $("#bootsProtection .inputValue").attr("title", "Protection "+armour.bootsProtection+" "+armour.bootsName.toLowerCase()+" boots \n"+ armour.bootsProtection*4+"% extra damage reduction")
  } else {
    $("#bootsProtection .inputValue").attr("title", "Protection "+armour.bootsProtection+" emptiness \n"+ armour.bootsProtection*4+"% damage reduction \n(in theory)")
  }
  
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
  $("#armourReduction").text(round(results.armourReduction, 2));
  $("#defenceReduction").text(round(results.defenceReduction, 2));
  $("#toughnessReduction").text(round(results.toughnessReduction, 2));
  $("#resistanceReduction").text(armour.resistanceBonus);
  $("#protectionReduction").text(armour.protectionBonus);
  $("#damageDealt").text(round(results.damageDealt, 3));
  $("#percentDamageDealt").text(round(results.percentDamageDealt, 2));
  $("#damageDealtPerSecond").text(round(results.DPS, 3));
  $("#hitsToKill").text(results.hitsToKill);
  $("#timeToKill").text(round(results.timeToKill, 2));

  $(".gearContainer").each(function() {
    if ($(this).height() > 553) {
      $(this).addClass("tallContainer")
    } else {
      $(this).removeClass("tallContainer")
    }
  });
};

function armourPointImages(num) {
  let span = $('<span />');
  let full = (num / 2) << 0;
  let half = num % 2;
  if (num > 0) {
    for (let i = 0; i < full; i++) {
      span.append("<img src=" + armourImage + " height='18px' width='18px' >");
    }
    for (let i = 0; i < half; i++) {
      span.append("<img src=" + halfArmourImage + " height='18px' width='18px' >");

    }
  } else {
    span.append("<img src=" + emptyArmourImage + " height='18px' width='18px' >");

  }
  return span;
};
function hitpointImages(num) {
  let span = $('<span>');
  let fullLines = (num / 20) << 0;
  let extra = num % 20;
  let full = (extra / 2) << 0;
  let half = extra % 2;
  for (let i = 0; i < full; i++) {
    span.append("<img src=" + heartImage + " height='18px' width='18px' >");
  }
  for (let i = 0; i < half; i++) {
    span.append("<img src=" + halfHeartImage + " height='18px' width='18px' >");
  }
  for (let i = 0; i < fullLines; i++) {
    if (num % 20 || i>0 ) {
    span.append("<br class='hitpointBreak'>");
    }
    for (let i = 0; i < 10; i++) {
      span.append("<img src=" + heartImage + " height='18px' width='18px' >");
    }
  }
  return span;
};
function toughnessPointImages(num) {
  let span = $("<span>");
  let full = (num / 2) << 0;
  let half = num % 2;
  for (let i = 0; i < full; i++) {
    span.append("<img src=" + toughnessImage + " height='18px' width='18px' >");
  }
  for (let i = 0; i < half; i++) {
    span.append("<img src=" + halfToughnessImage + " height='18px' width='18px' >");

  }
  return span;
};
function damagePointImages(num) {
  let span = $("<span>");

  if (num > 0) {
    let fullLines = (num / 20) << 0;
    for (let i = 0; i < fullLines; i++) {
      for (let i = 0; i < 10; i++) {
        span.append("<img src=" + damageImage + " height='18px' width='18px' >");
      }
      span.append("<br>");
    }
    let extra = num%20;
    let full = (extra / 2) << 0;
    let fraction = extra % 2;
    let quarter = fraction < 1 && fraction >= 0.5;
    let half = fraction < 1.5 && fraction >= 1;
    let threeQuarter = fraction < 2 && fraction >= 1.5;

    for (let i = 0; i < full; i++) {
      span.append("<img src=" + damageImage + " height='18px' width='18px' >");
    }
    if (quarter) {
      span.append("<img src=" + quarterDamageImage + " height='18px' width='18px' >");
    }
    if (half) {
      span.append("<img src=" + halfDamageImage + " height='18px' width='18px' >");
    }
    if (threeQuarter) {
      span.append("<img src=" + threeQuarterDamageImage + " height='18px' width='18px' >");
    }
  } else {
    span.append("<img src=" + emptyDamageImage + " height='18px' width='18px' >");
  }
  return span;
};
function cooldownPointImages(num) {
  let span = $('<span />');
  if (isFinite(num)) {
    num = num*20
    let full = (num / 2) << 0;
    let half = num % 2;
    if (num > 0) {
      for (let i = 0; i < full; i++) {
        span.append("<img src=" + cooldownImage + " height='32px' width='26px' >");
      }
      for (let i = 0; i < half; i++) {
        span.append("<img src=" + halfCooldownImage + " height='32px' width='26px' >");

      }
    } else {
      span.append("<img src=" + emptyCooldownImage + " height='32x' width='26px' >");

    }
  } else {
    span.append("<img src=" + infiniteCooldownImage + " height='24px' width='40px' >");
  }
  return span;
};

function loadProfileHandlers() {
  //Update profile to current values
  $(".editWeaponProfile").off("mousedown").on("mousedown", function (event) {
    event.stopPropagation();
    var weaponProfile = $(this).parent();
    var name = weaponProfile.find(".profileName").val()
    $("#saveWeapon").next("span").remove();
    $("#saveWeapon").after($("<span>").css("color", "forestgreen").css("fontWeight", "bold").text(" Updated " + name).fadeOut(2000));
    weaponProfile.empty();
    setWeaponProfile(name, false, weaponProfile);
  });
  $(".editArmourProfile").off("mousedown").on("mousedown", function (event) {
    event.stopPropagation();
    var armourProfile = $(this).parent();
    var name = armourProfile.find(".profileName").val()
    $("#saveArmour").next("span").remove();
    $("#saveArmour").after($("<span>").css("color", "forestgreen").css("fontWeight", "bold").text(" Updated " + name).fadeOut(2000));
    armourProfile.empty();
    setArmourProfile(name, false, armourProfile);
  });

  //Delete profile
  $(".deleteWeaponProfile").off("mousedown").on("mousedown", function (event) {
    event.stopPropagation();
    weaponProfile = $(this).parent();
    var name = weaponProfile.find(".profileName").val()
    $("#saveWeapon").next("span").remove();
    $("#saveWeapon").after($("<span>").css("color", "red").css("fontWeight", "bold").text(" Deleted " + name).fadeOut(2000));
    weaponProfile.remove();
    weaponProfileNum--
    $('#weaponProfiles > .weaponProfile').each(function (index) {
      var currentName = $(this).find(".profileName").val()
      var substringName = currentName.substring(0, 8);
      if (substringName == "Profile-") {
        $(this).find(".profileName").attr("value", "Profile-" + (index + 1));
        $(this).find(".profileName").val("Profile-" + (index + 1)).trigger("change");
      }
    });

  });
  $(".deleteArmourProfile").off("mousedown").on("mousedown", function (event) {
    event.stopPropagation();
    armourProfile = $(this).parent();

    //Red text to show deletion
    var name = armourProfile.find(".profileName").val()
    $("#saveArmour").next("span").remove();
    $("#saveArmour").after($("<span>").css("color", "red").css("fontWeight", "bold").text(" Deleted " + name).fadeOut(2000));

    //Remove and reduce profile count
    armourProfile.remove();
    armourProfileNum--

    $('#armourProfiles > .armourProfile').each(function (index) {
      var currentName = $(this).find(".profileName").val()
      var substringName = currentName.substring(0, 8);
      if (substringName == "Profile-") {
        $(this).find(".profileName").attr("value", "Profile-" + (index + 1));
        $(this).find(".profileName").val("Profile-" + (index + 1)).trigger("change");
      }
    });

  });

  //Disable context menu
  $("#weaponProfiles, #armourProfiles").contextmenu(function () {
    return false;
  });

  //Select the profile
  $(".weaponProfile").on("mousedown", function (event) {
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
  $(".armourProfile").on("mousedown", function (event) {
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
  $(".profileName").change(function () {
    var name = $(this).val()

    //Reset the name if profile is empty
    if (name == "") {
      var defaultName = "Profile-" + ($(this).parent().parent().prevAll().length + 1);
      $(this).val(defaultName);
      name = defaultName;
    }
    //Weapons
    if ($(this).closest(".weaponProfile").length) {
      $(this).closest(".weaponProfile").data("name", name);

      //Set header if profile is selected
      if ($(this).closest(".weaponProfile").hasClass("selected")) {
        $("#weapon").text(name);
      }
    }

    //Armour
    if ($(this).closest(".armourProfile").length) {
      $(this).closest(".armourProfile").data("name", name);

      //Set header if profile is selected
      if ($(this).closest(".armourProfile").hasClass("selected")) {
        $("#armour").text(name);
      }
    }




  });

};

function loadModalHandlers() {
  //off to prevent duplicate events
  $(".profileFolder").off("click").on('click', function () {
    if ($(this).hasClass("collapse")) {
      $(this).removeClass("collapse");
      $(this).nextUntil('.profileFolder').filter(".profileGroup").css("display", "block");
    } else {
      $(this).addClass("collapse");
      $(this).nextUntil('.profileFolder').filter(".profileGroup").css("display", "none");
    }
  }).children().click(function (event) { event.stopPropagation(); });

  $(".profileGroup").off("click").on('click', function () {
    $(".profileGroup").removeClass("selected");
    $(this).addClass("selected");
    $("#previewText").css("display", "none");
    $("#groupSelected").css("display", "block");
    $("#groupName").attr("value", $(this).html())

  });

  $(".profileAddFolder").off("click").on('click', function () {
    if ($(this).prevAll(".profileFolder").length < 10) {
      $(this).removeClass("full")
      var folder = $('<div>').addClass("profileFolder collapse");
      var span = $('<span>').addClass("profileDeleteFolder").text("× ")
      var inputWidth = $('<span>').addClass("profileFolderNameWidth");
      var input = $('<input>').addClass("profileFolderName").attr("value", "Folder");
      folder.append(span)
      folder.append(inputWidth)
      folder.append(input)
      $(this).before(folder)
    } else {
      $(this).addClass("full")
    }
    loadModalHandlers()
  });
  $(".profileDeleteFolder").off("click").on('click', function () {
    if ($(this).parent().hasClass("collapse")) {
      $(this).parent().removeClass("collapse");
      $(this).parent().nextUntil('.profileFolder').css("display", "block");
    }
    if ($(this).parent().nextUntil('.profileFolder').length > 0) {
      $(this).parent().prevAll(".profileFolder:first").removeClass("collapse");
      $(this).parent().prevUntil('.profileFolder').css("display", "block");
    }
    $(this).parent().remove();
  });

  //Width of input field
  $(".profileFolderName").off("input").on('input', function (event) {
    var inputWidth = $(this).prev('.profileFolderNameWidth')
    inputWidth.text($(this).val());
    $(this).width((inputWidth).width());
  });
  $(".folder").on('click', function (event) {
    $(".profileFolderName").each(function () {
      var inputWidth = $(this).prev('.profileFolderNameWidth')
      inputWidth.text($(this).val());
      $(this).width((inputWidth).width());
    });
  });
  $(".profileFolderName").each(function () {
    var inputWidth = $(this).prev('.profileFolderNameWidth')
    inputWidth.text($(this).val());
    $(this).width((inputWidth).width());
  });
};


var enableButton = function (ele) {
  $(ele).removeAttr("disabled");
}
function makeEffectList() {
  let effects = ["strength","haste","regeneration","resistance","weakness","miningFatigue","fireResistance","speed",
  "slowness","waterBreathing","invisibility","glowing","healthBoost","absorption","jumpBoost","slowFalling",
  "levitation","saturation","hunger","nausea","nightVision","blindness","darkness","poison","wither"]
  
  for (i = 0; i < effects.length; i++) {
    var effectDiv = $("<div>").addClass(effects[i] + " number effect")
    if (i <= 3) {
      effectDiv.addClass("positive")
    }
    else if ( i > 3 && i <= 5 ){
      effectDiv.addClass("negative")
    }

    var arrowUpButton = $("<button>").addClass("arrow arrowUp")
    arrowUpButton.append($("<p>").text("+"))
    arrowUpButton.appendTo(effectDiv)
    var effectInput = $("<input>").addClass("inputValue").prop("type","text").attr("value", 0);
    effectInput.appendTo(effectDiv)
    var arrowDownButton = $("<button>").addClass("arrow arrowDown")
    arrowDownButton.append($("<p>").text("-"))
    arrowDownButton.appendTo(effectDiv)
    effectDiv.appendTo("#effectTable")
  }
}
makeEffectList()

function setWeaponProfile(name = "Profile-" + weaponProfileNum, create = false, weaponProfile) {

  //Only when creating new div
  if (create) {
    var weaponProfile = $("<div>").addClass('profile weaponProfile').attr("id", "weaponProfile" + weaponProfileNum);
  }

  //Name input
  var label = $("<label>").text('> ');
  var input = $('<input type="text" spellcheck="false">').addClass('profileName').attr("value", name);
  input.appendTo(label);
  weaponProfile.append(label);

  //Data values
  weaponProfile.data("name", name);
  weaponProfile.data("tool", tool);
  weaponProfile.data("toolMaterial", toolMaterial);
  weaponProfile.data("strength", effect[0]);
  weaponProfile.data("weakness", effect[1]);
  weaponProfile.data("crit", crit);
  weaponProfile.data("sharpness", sharpness);
  weaponProfile.data("attackDamage", attackDamage);

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
  var profileHitCooldown = $('<p>').text("Hit Cooldown: " + (attackCooldown.toFixed(2)));
  weaponProfile.append(profileHitCooldown);
  var profileDamagePerSecond = $('<p>').text("Damage Per Second: " + damagePerSecond);
  weaponProfile.append(profileDamagePerSecond);
  var profileDamage = $('<p>').addClass("profileShorthand profileDamage").text("Attack damage: " + attackDamage);
  weaponProfile.append(profileDamage);
  var profileDamageDealt = $('<p>').addClass("profileShorthand profileDamageDealt").text("Damage dealt: " + damageDealt);
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
    values.push("Strength " + effect[0]);
  };
  if (effect[1] > 0) {
    table.append($('<th>').text('Weakness'));
    clones.push($("#weakness").clone());
    values.push("Weakness " + effect[1]);
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
    values.push("Sharp " + sharpness);
  }
  table.append($('<tr>'));

  //Add the boxes to table
  for (i = 0; i < clones.length; i++) {
    clones[i].css({ transform: 'scale(.875)' });
    if (i == 0) {
      table.append($('<th>').attr('colspan', "2").append(clones[i]))
    } else {
      table.append($('<th>').append(clones[i]))
    }
  }
  table.append($('<tr>'));

  //Add descriptions to table  
  table.append($('<td>').attr('colspan', "2").text(toolMaterialName + " " + toolName));
  for (i = 0; i < values.length; i++) {
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
function setArmourProfile(name = "Profile-" + armourProfileNum, create = false, armourProfile) {

  //Only when creating new div
  if (create) {
    var armourProfile = $("<div>").addClass('profile armourProfile').attr("id", "armourProfile" + armourProfileNum);
  }
  //Name input
  var label = $("<label>").text('> ');
  var input = $('<input type="text" spellcheck="false">').addClass('profileName').attr("value", name);
  input.appendTo(label);
  armourProfile.append(label);

  //Data values
  armourProfile.data("name", name);
  armourProfile.data("armourMaterials", [...armourMaterials]);
  armourProfile.data("protection", protection);
  armourProfile.data("resistance", effect[2]);
  armourProfile.data("hitpoints", hitpoints);
  armourProfile.data("totalArmour", totalArmour);
  armourProfile.data("totalToughness", totalToughness);

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
  var profileArmour = $('<p>').text("Armour: " + totalArmour);
  armourProfile.append(profileArmour);
  var profileToughness = $('<p>').text("Toughness: " + totalToughness);
  armourProfile.append(profileToughness);

  var reductions = 1 - (1 - protection * 0.04) * (1 - effect[2] * 0.2);
  reductions *= 100;
  var profileReductions = $('<p>').text("Extra Reducs: " + round(reductions, 1) + "%");
  armourProfile.append(profileReductions);
  var profileDamageTaken = $('<p>').addClass("profileShorthand profileDamageTaken").text("Damage Taken: " + damageDealt);
  armourProfile.append(profileDamageTaken);

  var damageReduced = round((100 - percentDamageDealt), 2)
  var profileDamageReduced = $('<p>').addClass("profileShorthand profileDamageReduced").text("Reduced By: " + damageReduced + "%");
  armourProfile.append(profileDamageReduced);


  //Make Table
  var tableContainer = $('<div>').addClass('profileTableContainer');
  var table = $('<table>').addClass('profileTable');

  //Create copies of boxes and table headers
  var clones = [];
  var values = [];
  if (effect[2] || hitpoints != 20) {
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
    values.push("Prot " + protection);
  }
  if (effect[2] > 0) {
    table.append($('<th>').text('Resistance'));
    clones.push($("#resistance").clone());
    values.push("Res " + effect[2]);
  };
  if (hitpoints != 20) {
    table.append($('<th>').text('Hitpoints'));
    var hitpointsBox = $("<div>").addClass("box number").attr("id", "hitpointsBox");
    hitpointsBox.css("background-image", "url(" + heartImage + ")");
    clones.push(hitpointsBox);
    values.push(hitpoints + " HP");
  }
  table.append($('<tr>'));

  //Add the boxes to table
  for (i = 0; i < clones.length; i++) {
    clones[i].css({ transform: 'scale(.875)' });
    table.append($('<th>').append(clones[i]))
  }
  table.append($('<tr>'));

  for (i = 0; i < values.length; i++) {
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
    var thisDamageDealt = thisAttackDamage * (1 - (Math.min(20, Math.max(totalArmour / 5, totalArmour - 4 * thisAttackDamage / (totalToughness + 8)))) / 25);
    thisDamageDealt = thisDamageDealt * (1 - effectBonus[2] / 100)
    thisDamageDealt = thisDamageDealt * (1 - protectionBonus / 100);
    thisDamageDealt = round(thisDamageDealt, 3)
    $(this).find(".profileDamageDealt").text("Damage dealt: " + thisDamageDealt);
  });
  $("#armourProfiles").children().each(function () {
    var thisTotalArmour = $(this).data("totalArmour");
    var thisTotalToughness = $(this).data("totalToughness");
    var thisResistance = $(this).data("resistance");
    var thisProtection = $(this).data("protection");
    var thisDamageTaken = attackDamage * (1 - (Math.min(20, Math.max(thisTotalArmour / 5, thisTotalArmour - 4 * attackDamage / (thisTotalToughness + 8)))) / 25);
    thisDamageTaken = thisDamageTaken * (1 - thisResistance / 5)
    thisDamageTaken = thisDamageTaken * (1 - thisProtection / 25);
    thisDamageTaken = round(thisDamageTaken, 3)
    $(this).find(".profileDamageTaken").text("Damage Taken: " + thisDamageTaken);
    var thisDamageReduced = 100 - 100 * thisDamageTaken / attackDamage
    thisDamageReduced = round(thisDamageReduced, 2)
    $(this).find(".profileDamageReduced").text("Reduced By: " + thisDamageReduced + "%");
  });
}

function setInputFilter(textbox, inputFilter) {
  ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop"].forEach(function (event) {
    textbox.addEventListener(event, function () {
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
  var numberInputs = $('.inputValue').not(".protectionValue");
  for (i = 0; i < numberInputs.length; i++) {
    setInputFilter(numberInputs[i], function (value) {
      return /^(?=.{0,2}$)\d*$/.test(value);
    });
  }
}
limitInputNum()

function limitInputNumProtection() {
  var numberInputs = $('.protectionValue');
  for (i = 0; i < numberInputs.length; i++) {
    setInputFilter(numberInputs[i], function (value) {
      return /^(?=.{0,1}$)^[0-5]*$/.test(value);
    });
  }
}
limitInputNumProtection()

function limitInputText() {
  var nameInputs = $('.profileName, .profileFolderName');
  for (i = 0; i < nameInputs.length; i++) {
    setInputFilter(nameInputs[i], function (value) {
      return /^[a-zA-Z0-9_-]{0,14}$/.test(value);
    });
  }
}


function makeWeaponProfile({ name, weapon: thisWeapon, material: thisMaterial, tool: thisTool, strength: thisStrength, weakness: thisWeakness, crit: thisCrit, sharpness: thisSharpness } = {}) {

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
  if (!(/^[a-zA-Z0-9_-]{0,14}$/.test(name))) {
    console.log("invalid profile name passed into makeWeaponProfile")
    name = "Profile-" + weaponProfileNum
  }

  //Make new profile
  setWeaponProfile(name, true);

}
function makeArmourProfile({ name, fullSet: thisFullSet, helmet: thisHelmet, chestplate: thisChestplate, leggings: thisLeggings, boots: thisBoots, protection: thisProtection, resistance: thisResistance, hp: thisHitpoints } = {}) {
  armourProfileNum++

  //Full set
  if (typeof thisFullSet === "string") {
    thisFullSet.toLowerCase();
  }
  if (thisFullSet) {
    thisHelmet = thisChestplate = thisLeggings = thisBoots = thisFullSet
  }
  var thisArmour = [thisHelmet, thisChestplate, thisLeggings, thisBoots]

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
  if (thisHitpoints >= 1 && thisHitpoints <= maxHitpoints) {
    hitpoints = thisHitpoints
  } else {
    hitpoints = 20
  }
  $("#hitpointsValue").val(hitpoints).trigger("change");

  //Test for valid name
  if (!(/^[a-zA-Z0-9_-]{0,14}$/.test(name))) {
    console.log("invalid profile name passed into makeWeaponProfile")
    name = "Profile-" + armourProfileNum
  }

  //Make new profile
  setArmourProfile(name, true);


}

function defaultProfiles() {
  //WeaponProfiles: name, weapon or (material + tool), strength, weakness, crit, sharpness
  //ArmourProfiles: name, fullSet or (helmet, chestplate, leggings, boots), protection, resistance, hp
  //Armour Materials: leather/l, gold/g, chain/c, iron/i, diamond/d, netherite/n
  makeWeaponProfile({ name: "Ninja", weapon: "iron sword" });
  makeWeaponProfile({ name: "Warrior", weapon: "stone sword" });
  makeWeaponProfile({ name: "Runner", weapon: "wooden sword" })
  makeWeaponProfile({ name: "Tank", weapon: "stone pickaxe" })
  makeWeaponProfile({ name: "Archer" })

  makeArmourProfile({ name: "Tank", chestplate: "i", leggings: "i", boots: "i" })
  makeArmourProfile({ name: "Jumper", leggings: "i", boots: "d", protection: 1 })
  makeArmourProfile({ name: "Scout", leggings: "c", boots: "d", protection: 2 })
  makeArmourProfile({ name: "Archer", chestplate: "d" })
  makeArmourProfile({ name: "Builder", helmet: "l", chestplate: "i" })
  makeArmourProfile({ name: "Miner", chestplate: "l", leggings: "c" })
  makeArmourProfile({ name: "Runner", chestplate: "c", boots: "i" })
  makeArmourProfile({ name: "Warrior", chestplate: "c", leggings: "l" })
  makeArmourProfile({ name: "Assassin", boots: "d", protection: 3 })
  makeArmourProfile({ name: "Medic", chestplate: "g" })
  makeArmourProfile({ name: "Summoner", chestplate: "c" })
  makeArmourProfile({ name: "Vamp", leggings: "g", boots: "g", hp: 36 })
  makeArmourProfile({ name: "Bomber", chestplate: "l", boots: "l" })
  makeArmourProfile({ name: "Ninja" })
}


class WeaponProfile extends Weapon {
  static list = [];
  constructor() {
    super();
    this.position;
    this.group;
    //
  }
}