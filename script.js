//TODO: https://stackoverflow.com/questions/2455225/how-do-i-move-focus-to-next-input-with-jquery


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
var topRedCooldownImage = "Images/Icon/Top_Red_Hourglass.webp"
var bottomRedCooldownImage = "Images/Icon/Bottom_Red_Hourglass.webp"
var emptyCooldownImage = "Images/Icon/Empty_Hourglass.webp"
var infiniteCooldownImage = "Images/Icon/Infinite.webp"
var arrowImage = "Images/Arrow.webp"
var goldenArrowImage = "Images/Golden_Arrow.webp"

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
}
if (currentTheme == "dark" || currentTheme == null) {
  $(".themeSwitch input").prop("checked",true)
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
    this._haste = 0
    this._miningFatigue = 0
    this.strength = 0
    this.regeneration = 0
    this.resistance = 0
    this.weakness = 0
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
  set haste(value) {
    weapons[0].useInterval = false
    this._haste = value
  }
  get haste() {
    return this._haste
  }
  set miningFatigue(value) {
    weapons[0].useInterval = false
    this._miningFatigue = value
  }
  get miningFatigue() {
    return this._miningFatigue
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
    this._material = 0
    this._tool = 0
    this.crit = false
    this.sharpness = 0
    this.effect = effect
    this.useInterval = false
    this.attackInterval = 0.6
  }
  set material(value) {
      this.useInterval = false
      this._material = value
  }
  get material() {
    return this._material
  }
  set tool(value) {
    this.useInterval = false
    this._tool = value
  }
  get tool() {
    return this._tool
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
  get maxDamage() {
    var damage = Math.max(0,this.baseDamage + this.effect.bonus("strength") + this.effect.bonus("weakness")) * this.critBonus + this.sharpnessBonus
    return damage
  }
  get intervalMultiplier() {
    let attackCooldownTicks = 20 / this.attackSpeed
    let attackIntervalTicks = this.attackInterval * 20
    if (this.isInfiniteInterval) {
      return 0.2
    } else {
      return 0.2 + ((attackIntervalTicks + 0.5) / attackCooldownTicks) ** 2 * 0.8
    }
  }
  get intervalSharpnessMultiplier() {
    let attackCooldownTicks = 20 / this.attackSpeed
    let attackIntervalTicks = this.attackInterval * 20
    if (this.isInfiniteInterval) {
      return 0
    } else {
      return (attackIntervalTicks + 0.5) / attackCooldownTicks
    }
  }
  get isInfiniteInterval() {
    return !isFinite(this.attackInterval)
  }
  get useCrit() {
    return (this.intervalMultiplier > 0.848)
  }
  get damage() {
    if ( !this.isInfiniteInterval && (this.isMaxDamage || this.useInterval == false)) {
      return this.maxDamage
    } else {
      var damage = Math.max(0,this.baseDamage + this.effect.bonus("strength") + this.effect.bonus("weakness")) * this.intervalMultiplier
      if (this.useCrit) {
        damage *= this.critBonus
      }
      damage += this.sharpnessBonus * this.intervalSharpnessMultiplier
      return damage
    }
  }
  get isMaxDamage() {
    return this.attackInterval >= this.attackCooldown  
  }
  get DPS() {
    if (this.useInterval) {
      return this.damage / this.attackInterval
    } else {
      return this.damage / this.attackCooldown
    }
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
class Result {
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
    if (this.attacker.useInterval) {
      return this.damageDealt / this.attacker.attackInterval
    } else {
      return this.damageDealt / this.attacker.attackCooldown
    }
  }
  get hitsToKill() {
    return Math.ceil(this.defender.hitpoints / this.damageDealt);
  }
  get timeToKill() {
    if (this.attacker.useInterval) {
      return this.hitsToKill * this.attacker.attackInterval;
    } else {
      return this.hitsToKill * this.attacker.attackCooldown;
    }
  }


}
const effects = [new Effect() , new Effect()];
const weapons = [new Weapon(effects[0]), new Weapon(effects[1])];
const armours = [new Armour(effects[0]), new Armour(effects[1])];
const results = [new Result(weapons[0], effects[0], armours[1], effects[1]), new Result(weapons[1], effects[1], armours[0], effects[0])];

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
  $(".noContextMenu, .arrow").contextmenu(function () {
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
    if ($(".saveWeapon").attr("disabled") == "disabled") {
      return false;
    } else {
      $(".saveWeapon").trigger("click");
    }
  }); //Alt + W triggers "#saveWeapon"
  $(".saveWeapon").click(function () {
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
    if ($(".saveArmour").attr("disabled") == "disabled") {
      return false;
    } else {
      $(".saveArmour").trigger("click");
    }
  }); //Alt + A triggers "#saveArmour"
  $(".saveArmour").click(function () {
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
  $(".expander").mousedown(function () {
    // $(this).siblings(".profileContainer").children().removeClass("collapse")
    if ($(this).parent().parent().hasClass("expand")) {
      $(this).parent().parent().removeClass("expand")
    } else {
      $(this).parent().parent().addClass("expand")
    }
  });

  //Normal boxes
  $(".selectTool").mousedown(function (event) {
    let player = getPlayer(event)
    let temp = $(this).attr("class").split(/\s+/)[0].replace (/[^\d.]/g, '' );

    if (weapons[player].tool == temp) {
      weapons[player].tool = 6
    } else {
      weapons[player].tool = temp
    }
    updateHTML(event)
  });
  $(".tool").mousedown(function (event) {
    let player = getPlayer(event)
    if (event.which === 3) {
      weapons[player].material = weapons[player].material - 1 < 0 ? toolMaterialList.length-1 : weapons[player].material - 1;
    } else {
      weapons[player].material = weapons[player].material + 1 >= toolMaterialList.length ? 0 : weapons[player].material + 1;
    }
    updateHTML(event)
  });
  $(".crit").mousedown(function (event) {
    let player = getPlayer(event)
    if (event.which === 3) {
      weapons[player].crit = false
    } else {
      weapons[player].crit = !weapons[player].crit;
    }
    updateHTML(event);
  });
  $(".helmet").mousedown(function (event) {
    let player = getPlayer(event)
    if (event.which === 3) {
      armours[player].helmet = armours[player].helmet - 1 < 0 ? helmetMaterialList.length-1 : armours[player].helmet - 1;
    } else {
      armours[player].helmet = armours[player].helmet + 1 >= helmetMaterialList.length ? 0 : armours[player].helmet + 1;
    }
    updateHTML(event);
  });
  $(".chestplate").mousedown(function (event) {
    let player = getPlayer(event)
    if (event.which === 3) {
      armours[player].chestplate = armours[player].chestplate - 1 < 0 ? armourMaterialList.length-1 : armours[player].chestplate - 1;
    } else {
      armours[player].chestplate = armours[player].chestplate + 1 >= armourMaterialList.length ? 0 : armours[player].chestplate + 1;
    }
    updateHTML(event);
  });
  $(".leggings").mousedown(function (event) {
    let player = getPlayer(event)
    if (event.which === 3) {
      armours[player].leggings = armours[player].leggings - 1 < 0 ? armourMaterialList.length-1 : armours[player].leggings - 1;
    } else {
      armours[player].leggings = armours[player].leggings + 1 >= armourMaterialList.length ? 0 : armours[player].leggings + 1;
    }
    updateHTML(event);
  });
  $(".boots").mousedown(function (event) {
    let player = getPlayer(event)
    if (event.which === 3) {
      armours[player].boots = armours[player].boots - 1 < 0 ? armourMaterialList.length-1 : armours[player].boots - 1;
    } else {
      armours[player].boots = armours[player].boots + 1 >= armourMaterialList.length ? 0 : armours[player].boots + 1;
    }
    updateHTML(event);
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
    let player = getPlayer(event)
    weapons[player].material = random(7);
    weapons[player].tool = random(5);
    weapons[player].crit = random(2);
    weapons[player].sharpness = random(2) ? 1 + random(5) : 0;
    updateHTML(event)
  });
  $(".weaponReset").mousedown(function (event) {
    let player = getPlayer(event)
    weapons[player].material = 0
    weapons[player].tool = 0
    weapons[player].crit = false
    weapons[player].sharpness = 0
    updateHTML(event)
  });
  $(".armourDice").mousedown(function (event) {
    let player = getPlayer(event)
    armours[player].helmet = random(7)
    armours[player].chestplate = random(6)
    armours[player].leggings = random(6)
    armours[player].boots = random(6)
    armours[player].helmetProtection = random(2) && armours[player].helmet ? random(6) : 0;
    armours[player].chestplateProtection = random(2) && armours[player].chestplate ? random(6) : 0;
    armours[player].leggingsProtection = random(2) && armours[player].leggings ? random(6) : 0;
    armours[player].bootsProtection = random(2) && armours[player].boots ? random(6) : 0;
    armours[player].hitpoints = 1 + random(40);
    updateHTML(event)
  });
  $(".armourReset").mousedown(function (event) {
    let player = getPlayer(event)
    armours[player].helmet = 0
    armours[player].chestplate = 0
    armours[player].leggings = 0
    armours[player].boots = 0
    armours[player].helmetProtection = 0
    armours[player].chestplateProtection = 0
    armours[player].leggingsProtection = 0
    armours[player].bootsProtection = 0
    armours[player].hitpoints = 20
    updateHTML(event)
  });
  $(".effectDice").mousedown(function (event) {
    let player = getPlayer(event)
    if (event.which === 3) {
      effects[player].fireResistance = random(10) == 0 ? 1 : 0; 
      effects[player].speed = random(10) == 0 ? random(6) : 0;
      effects[player].slowness = random(10) == 0 ? random(6) : 0;
      effects[player].waterBreathing = random(10) == 0 ? 1 : 0;
      effects[player].invisibility = random(10) == 0 ? 1 : 0;
      effects[player].glowing = random(10) == 0 ? 1 : 0;
      effects[player].healthBoost = random(10) == 0 ? 1 : 0;
      effects[player].absorption = random(10) == 0 ? 1 : 0;
      effects[player].jumpBoost = random(10) == 0 ? random(6) : 0;
      effects[player].slowFalling = random(10) == 0 ? 1 : 0;
      effects[player].levitation = random(10) == 0 ? 1 : 0;
      effects[player].saturation = random(10) == 0 ? 1 : 0;
      effects[player].hunger = random(10) == 0 ? 1 : 0;
      effects[player].nausea = random(10) == 0 ? 1 : 0;
      effects[player].nightVision = random(10) == 0 ? 1 : 0;
      effects[player].blindness = random(10) == 0 ? 1 : 0;
      effects[player].darkness = random(10) == 0 ? 1 : 0;
      effects[player].poison = random(10) == 0 ? 1 : 0;
      effects[player].wither = random(10) == 0 ? 1 : 0;
  }
  do {
    let strength = random(2) == 0 ? random(6) : 0;
    if (effects[player].strength != strength) {
      effects[player].strength = strength
    }
    let weakness = random(10) == 0 ? random(6) : 0;
    if (effects[player].weakness != weakness) {
      effects[player].weakness = weakness
    }
    let haste = random(2) == 0 ? random(6) : 0;
    if (effects[player].haste != haste) {
      effects[player].haste = haste
    }
    let miningFatigue = random(2) == 0 ? random(6) : 0;
    if (effects[player].miningFatigue != miningFatigue) {
      effects[player].miningFatigue = miningFatigue
    }
    let regeneration = random(2) == 0 ? random(6) : 0;
    if (effects[player].regeneration != regeneration) {
      effects[player].regeneration = regeneration
    }
    let resistance = random(2) == 0 ? random(5) : 0;
    if (effects[player].resistance != resistance) {
      effects[player].resistance = resistance
    }
  } while (!effects[player].strength && !effects[player].weakness && !effects[player].haste && !effects[player].miningFatigue && !effects[player].regeneration && !effects[player].resistance);

    updateHTML(event)
  });
  $(".effectReset").mousedown(function (event) {
    let player = getPlayer(event)
    if (effects[player].strength != 0) {
      effects[player].strength = 0
    }
    if (effects[player].weakness != 0) {
      effects[player].weakness = 0
    }
    if (effects[player].haste != 0) {
      effects[player].haste = 0
    }
    if (effects[player].miningFatigue != 0) {
      effects[player].miningFatigue = 0
    }
    if (effects[player].regeneration != 0) {
      effects[player].regeneration = 0
    }
    if (effects[player].resistance != 0) {
      effects[player].resistance = 0
    }
    if (effects[player].fireResistance != 0) {
      effects[player].fireResistance = 0
    }
    if (effects[player].speed != 0) {
      effects[player].speed = 0
    }
    if (effects[player].slowness != 0) {
      effects[player].slowness = 0
    }
    if (effects[player].waterBreathing != 0) {
      effects[player].waterBreathing = 0
    }
    if (effects[player].invisibility != 0) {
      effects[player].invisibility = 0
    }
    if (effects[player].glowing != 0) {
      effects[player].glowing = 0
    }
    if (effects[player].healthBoost != 0) {
      effects[player].healthBoost = 0
    }
    if (effects[player].absorption != 0) {
      effects[player].absorption = 0
    }
    if (effects[player].jumpBoost != 0) {
      effects[player].jumpBoost = 0
    }
    if (effects[player].slowFalling != 0) {
      effects[player].slowFalling = 0
    }
    if (effects[player].levitation != 0) {
      effects[player].levitation = 0
    }
    if (effects[player].saturation != 0) {
      effects[player].saturation = 0
    }
    if (effects[player].hunger != 0) {
      effects[player].hunger = 0
    }
    if (effects[player].nausea != 0) {
      effects[player].nausea = 0
    }
    if (effects[player].nightVision != 0) {
      effects[player].nightVision = 0
    }
    if (effects[player].blindness != 0) {
      effects[player].blindness = 0
    }
    if (effects[player].darkness != 0) {
      effects[player].darkness = 0
    }
    if (effects[player].poison != 0) {
      effects[player].poison = 0
    }
    if (effects[player].wither != 0) {
      effects[player].wither = 0
    }
    updateHTML(event)
  });
  $(".armourUp").mousedown(function (event) {
    let player = getPlayer(event)
    armours[player].helmet = armours[player].helmet < 7 ? armours[player].helmet+1 : 0;
    if (armours[player].helmet == 5) {
      armours[player].helmet = 6
    }
    armours[player].chestplate = armours[player].chestplate < 6 ? armours[player].chestplate+1 : 0;
    armours[player].leggings = armours[player].leggings < 6 ? armours[player].leggings+1 : 0;
    armours[player].boots = armours[player].boots < 6 ? armours[player].boots+1 : 0;
    updateHTML(event)
  });
  $(".armourDown").mousedown(function (event) {
    let player = getPlayer(event)
    armours[player].helmet = armours[player].helmet > 0 ? armours[player].helmet-1 : 7;
    if (armours[player].helmet == 5) {
      armours[player].helmet = 4
    }
    armours[player].chestplate = armours[player].chestplate > 0 ? armours[player].chestplate-1 : 6;
    armours[player].leggings = armours[player].leggings > 0 ? armours[player].leggings-1 : 6;
    armours[player].boots = armours[player].boots > 0 ? armours[player].boots-1 : 6;
    updateHTML(event)
  });
  $(".cooldownReset").mousedown(function (event) {
    let player = getPlayer(event)
    weapons[player].useInterval = false
    updateHTML(event)
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
  $(".effect .inputValue").change(function (event) {
    let player = getPlayer(event)
    let value = $(this).val();
    let effectName = $(this).parent().attr('class').split(' ')[0];
    effects[player][effectName] = value
    updateHTML(event);
  });
  $(".sharpnessValue").change(function (event) {
    let player = getPlayer(event)
    weapons[player].sharpness = $(this).val();
    updateHTML(event);
  });
  $(".protectionValue").change(function (event) {
    let player = getPlayer(event)
    if ($(this).parent().hasClass("helmetProtection")) {
      armours[player].helmetProtection = Number($(this).val());
    }
    else if ($(this).parent().hasClass("chestplateProtection")) {
      armours[player].chestplateProtection = Number($(this).val());
    }
    else if ($(this).parent().hasClass("leggingsProtection")) {
      armours[player].leggingsProtection = Number($(this).val());
    }
    else if ($(this).parent().hasClass("bootsProtection")) {
      armours[player].bootsProtection = Number($(this).val());
    }
    
    if ($(this).val() > 5) {
      $(this).val(5).trigger('change');
    }
    updateHTML(event);

  });
  $(".hitpointsValue").change(function (event) {
    let player = getPlayer(event)
    armours[player].hitpoints = $(this).val();
    if (armours[player].hitpoints == 0) {
      $(this).val(1).trigger('change');
    }
    updateHTML(event);
  });
  $(".attackCooldownContainer").mousedown(function () {
    if ($(this).hasClass("editable")) {
      $(this).removeClass("editable")
    }
    else if ($(this).find("img").length > 1 ){
      $(this).addClass("editable")
    }
  });
  $(".attackCooldownContainer").mousemove(function(event) {
    let player = getPlayer(event)
    if ($(this).hasClass("editable") && $(this).find("img").length > 1) {
      var offset = $(this).offset();
      var mouseLeft = event.pageX - offset.left
      var mouseTop = event.pageY - offset.top
      // console.log(mouseLeft + " "+ mouseTop)
      var hoveredImage = (mouseLeft / 26) <<0
      hoveredImage += 10 * (((6 + mouseTop) / 36) << 0)
      hoveredImage = hoveredImage > 149 ? 149 : hoveredImage
      var interval = hoveredImage >= 5 ? hoveredImage * 2 + 1 + (mouseTop % 36 <= 16) : 10
      weapons[player].attackInterval = interval / 20
      weapons[player].useInterval = true
      updateHTML(event)
      var imagesLength = $(this).find("img:not(.extraImage)").length
      var extraImages = 1 + hoveredImage - imagesLength
      $(this).find("img.extraImage").remove()
      for (i=0; i<extraImages; i++) {     
        $(this).find("span").eq(0).append("<img class='extraImage' height='32px' width='26px' >");
      }
      if (hoveredImage < 5) {
        $(".immunityInfo").addClass("show")
        hoveredImage = 4
      } else {
        $(".immunityInfo").removeClass("show")
      }
      var $img = $(this).find("img")
      if (extraImages < 0 && imagesLength > 5) {
        $img.slice(0, hoveredImage).attr("src", redCooldownImage)
        $img.slice(hoveredImage, imagesLength - 1).attr("src", cooldownImage)    
        if ((mouseTop % 36) <= 16 || hoveredImage == 4) {
          $img.eq(hoveredImage).attr("src", redCooldownImage)
        } else {
          $img.eq(hoveredImage).attr("src", bottomRedCooldownImage)
        }
        if (weapons[player].attackCooldown * 20 % 2) {
          $img.eq(imagesLength - 1).attr("src", halfCooldownImage)
        } else {
          $img.eq(imagesLength - 1).attr("src", cooldownImage)
        }
      }
      else if ( extraImages == 0 && imagesLength > 5){
        $img.slice(0, imagesLength - 1).attr("src", cooldownImage)    
        if (weapons[player].attackCooldown * 20 % 2) {
          if ((mouseTop % 36) <= 16) {
            $img.eq(hoveredImage).attr("src", topRedCooldownImage)
          } else {
            $img.eq(hoveredImage).attr("src", halfCooldownImage)
          }
        } else {
          if ((mouseTop % 36) <= 16) {
            $img.eq(hoveredImage).attr("src", cooldownImage)
          } else {
            $img.slice(0, hoveredImage).attr("src", redCooldownImage)
            $img.eq(hoveredImage).attr("src", bottomRedCooldownImage)
          }

        }
      }
      else if ( extraImages > 0){
       $img.slice(0, imagesLength).attr("src", cooldownImage)  
        if (weapons[player].attackCooldown * 20 % 2) {
         $img.eq(imagesLength - 1).attr("src", topRedCooldownImage)
        }
       $img.slice(imagesLength).attr("src", redCooldownImage)
        if ((mouseTop % 36) >= 16) {
         $img.eq(hoveredImage).attr("src", halfRedCooldownImage)
        }
      }
    }
  });
  $(".resultsContainer .resultsAttackerIcon .flyingArrow").on("animationend webkitAnimationEnd", function(event) {
    event.stopPropagation()
  });
  $(".resultsContainer .resultsAttackerIcon").on("animationend webkitAnimationEnd", function() {
    $(this).on("mouseleave", function() {
      let $flyingArrow = $(this).find(".flyingArrow")
      if (random(10) == 0) {
        $flyingArrow.css("background-image", "url("+goldenArrowImage+")")
      } else {
        $flyingArrow.css("background-image", "url("+arrowImage+")")
      }
      let randomMaxHeight = 150
      let randomMaxDistance = 800

      let randomHeight = random(randomMaxHeight)
      let height = 150 + randomHeight
      let randomDistance = random(randomMaxDistance)
      let distance = 500 + random(randomDistance)
      let angle = (randomMaxHeight - randomHeight )/ 10 << 0
      angle = angle + (randomMaxDistance/2 - randomDistance)/20
      $flyingArrow.css("--flying-arrow-height",height)
      $flyingArrow.css("--flying-arrow-angle",angle+"deg")
      $flyingArrow.css("--flying-arrow-distance",distance+"px")
      $flyingArrow.removeClass("animate")
      $(this).width()
      $flyingArrow.addClass("animate")
      $(this).off("mouseleave");
    });
  });
  updateProfiles()
  updateHTML()

  loadModalHandlers()
  // defaultProfiles()
});
function getPlayer(event) {
  if ($(event.target).parents("#player1").length > 0) {
    return 0
  }
  else if ($(event.target).parents("#player2").length > 0) {
    return 1
  }
}

function updateHTML(event) {
  var $context = $(document)
  var player = 0
  if (event) {
    player = getPlayer(event)
    if ($(event.target).parents("#player1").length > 0) {
      $context = $("#player1")
    }
    else if ($(event.target).parents("#player2").length > 0) {
      $context = $("#player2")
    }
  }

  if (weapons[player].useInterval == false) {
    $(".attackCooldownContainer").removeClass("editable")
  }
  $context.find(".effect").each(function() {
    let effectName = $(this).attr('class').split(' ')[0];
    let value = effects[player][effectName]
    $(this).find("input").val(value);

    let description = effects[player].description(effectName)
    let description2 = effects[player].description(effectName, true)
    if (description == description2) {
      $(this).attr("title", camelToTitle(effectName) +"\n"+ description)
    } else {
      $(this).attr("title", camelToTitle(effectName) +"\n"+description +"\n"+ description2)
    }
    let numeral = romanNumeral(value).length <= 6 ? romanNumeral(value) : value
    $(this).parent().attr("data-before", numeral);
    if (!$(this).parent().parent().hasClass("effectTable")) {
      $context.find(".effectTable ."+effectName+ " .inputValue").val(value)
      $context.find(".effectTable ."+effectName).attr("data-before", numeral);
    }

    if ($(this).find(".inputValue").val() == 0) {
      $(this).addClass("off")
    } else {
      $(this).removeClass("off")
      if ($(this).parent().hasClass("effectTable")) {
        $(this).clone(true).appendTo($context.find(".effectLine"));
      }

    }
    if ($(this).parent().hasClass("effectLine")) {
      $(this).remove()
    }
  });
  // $("#dice1").attr("title", "Left click for random weapon \nRight click to reset all")
  // $("#dice2").attr("title", "Left click for random armour \nRight click to reset all")
  $context.find(".selectTool0").css("background-image", "url(" +  swords[weapons[player].material][0] + ")")
  $context.find(".selectTool1").css("background-image", "url(" +  axes[weapons[player].material][0] + ")")
  $context.find(".selectTool2").css("background-image", "url(" +  pickaxes[weapons[player].material][0] + ")")
  $context.find(".selectTool3").css("background-image", "url(" +  shovels[weapons[player].material][0] + ")")
  $context.find(".selectTool4").css("background-image", "url(" +  hoes[weapons[player].material][0] + ")")
  $context.find(".selectTool5").css("background-image", "url(" +  trident[0] + ")")
  $context.find(".selectTool"+(weapons[player].tool)).css("background-image", "url(" + barrierImage + ")")


  $context.find("#toolMaterial").css("background-image", "url(" + weapons[player].materialImage + ")");
  //Damage
  let weaponDamageTitle = ""
  if (effects[player].strength > 0 || effects[player].weakness > 0 || weapons[player].crit == true || weapons[player].sharpness > 0) {
    weaponDamageTitle += weapons[player].baseDamage + " base damage"

    if (effects[player].strength > 0) {
      weaponDamageTitle += "\nStrength: " + effects[player].bonus("strength", false, true)
    }
    if (effects[player].weakness > 0) {
      weaponDamageTitle += "\nWeakness: " + effects[player].bonus("weakness", false, true)
    }
    if (weapons[player].crit == true) {
      weaponDamageTitle += "\n1.5x crit bonus" 
    }
    if (weapons[player].sharpness > 0) {
      weaponDamageTitle += "\nSharpness: +"+weapons[player].sharpnessBonus
    }
    weaponDamageTitle += "\nTotal: "+weapons[player].damage+" damage"
  } else {
    weaponDamageTitle += weapons[player].damage+" damage"
  }
  $context.find(".toolDescription").text(weapons[player].name);
  $context.find(".toolDamage").text(round(weapons[player].damage, 4));
  $context.find(".weaponDamage").empty().append(damagePointImages(weapons[player].damage, weapons[player].maxDamage)).attr("title", weaponDamageTitle);
  $context.find(".attackSpeed").text(round(weapons[player].attackSpeed,3))
  let attackCooldownTitle = ""
  if (isFinite(weapons[player].attackCooldown)) {
    if (weapons[player].useInterval) {
      attackCooldownTitle += weapons[player].attackInterval + "s attack interval \n"
    }
    attackCooldownTitle += weapons[player].attackCooldown + "s attack cooldown"
    if (effects[player].haste > 0) {
      attackCooldownTitle += "\nHaste: ÷ "+effects[player].bonus("haste",false,false,8)
    }
    if (effects[player].miningFatigue > 0) {
      attackCooldownTitle += "\nMining Fatigue: ÷ "+effects[player].bonus("miningFatigue",false,false,8)
    }
  } else {
    attackCooldownTitle = "Infinite attack cooldown \nMining Fatigue: ÷ 0 \n(Always deal 20% damage)";
  }
  $context.find(".attackCooldown").attr("title", attackCooldownTitle)
  if (weapons[player].useInterval == false) {
    $context.find(".attackCooldown").empty().append(cooldownPointImages(weapons[player].attackCooldown))
  }

  //Crit
  if (weapons[player].crit == true){
    $context.find(".crit").addClass("on")
    $context.find(".crit").attr("title", "Critical hit\n x1.5 base damage");
  } else {
    $context.find(".crit").removeClass("on")
    $context.find(".crit").attr("title", "No crit");
  }

  //Sharpness
  if (weapons[player].sharpness > 0) {
    $context.find(".tool").css("background-image", "url(" + weapons[player].enchantedToolImage + ")");
    $context.find(".sharpness .inputValue").addClass("levelled");
  } else {
    $context.find(".tool").css("background-image", "url(" + weapons[player].toolImage + ")");
    $context.find(".sharpness .inputValue").removeClass("levelled");
  }
  $context.find(".sharpness .inputValue").val(weapons[player].sharpness);

  //Tooltip for sharpness setter
  if (weapons[player].tool != 6 || weapons[player].sharpness == 0) {
    $context.find(".sharpness .inputValue, .sharpness").attr("title", "Sharpness\n+"+ weapons[player].sharpnessBonus+" damage")
  } else {
    $context.find(".sharpness .inputValue, .sharpness").attr("title", "Sharpness "+weapons[player].sharpness +" emptiness \n+"+ weapons[player].sharpnessBonus+" damage \n(in theory)")
  }

  //Damage
  $context.find("#attackDamage").text(weapons[player].damage)
  if (weapons[player].attackSpeed > 2) {
    $context.find(".immunityInfo").addClass("show")
  } else {
    $context.find(".immunityInfo").removeClass("show")
  }
  // (weapons[player].attackSpeed > 2) ? $context.find("#immunityInfo").text("Damage immunity limits DPS") : $context.find("#immunityInfo").text("");
  $context.find("#damagePerSecond").text(round(weapons[player].DPS, 3));



  //Helmet
  if (armours[player].helmetProtection > 0) {
    $context.find(".helmet").css("background-image", "url(" + armours[player].enchantedHelmetImage + ")");
    $context.find(".helmetProtection .inputValue").addClass("levelled");
  } else {
    $context.find(".helmet").css("background-image", "url(" + armours[player].helmetImage + ")");
    $context.find(".helmetProtection .inputValue").removeClass("levelled");
  }
  $context.find(".helmetDefence").empty().append(armourPointImages(armours[player].helmetDefence)).attr("title", pluralise(armours[player].helmetDefence / 2, "armour point"));
  $context.find(".helmetToughness").empty().append(toughnessPointImages(armours[player].helmetToughness)).attr("title", pluralise(armours[player].helmetToughness / 2, "toughness point"));
  //Chestplate
  if (armours[player].chestplateProtection > 0) {
    $context.find(".chestplate").css("background-image", "url(" + armours[player].enchantedChestplateImage + ")");
    $context.find(".chestplateProtection .inputValue").addClass("levelled");
  } else {
    $context.find(".chestplate").css("background-image", "url(" + armours[player].chestplateImage + ")");
    $context.find(".chestplateProtection .inputValue").removeClass("levelled");
  }
  $context.find(".chestplateDefence").empty().append(armourPointImages(armours[player].chestplateDefence)).attr("title", pluralise(armours[player].chestplateDefence / 2, "armour point"));
  $context.find(".chestplateToughness").empty().append(toughnessPointImages(armours[player].chestplateToughness)).attr("title", pluralise(armours[player].chestplateToughness / 2, "toughness point"));
  //Leggings
  if (armours[player].leggingsProtection > 0) {
    $context.find(".leggings").css("background-image", "url(" + armours[player].enchantedLeggingsImage + ")");
    $context.find(".leggingsProtection .inputValue").addClass("levelled");
  } else {
    $context.find(".leggings").css("background-image", "url(" + armours[player].leggingsImage + ")");
    $context.find(".leggingsProtection .inputValue").removeClass("levelled");
  }
  $context.find(".leggingsDefence").empty().append(armourPointImages(armours[player].leggingsDefence)).attr("title", pluralise(armours[player].leggingsDefence / 2, "armour point"));
  $context.find(".leggingsToughness").empty().append(toughnessPointImages(armours[player].leggingsToughness)).attr("title", pluralise(armours[player].leggingsToughness / 2, "toughness point"));
  //Boots
  if (armours[player].bootsProtection > 0) {
    $context.find(".boots").css("background-image", "url(" + armours[player].enchantedBootsImage + ")");
    $context.find(".bootsProtection .inputValue").addClass("levelled");
  } else {
    $context.find(".boots").css("background-image", "url(" + armours[player].bootsImage + ")");
    $context.find(".bootsProtection .inputValue").removeClass("levelled");
  }
  $context.find(".bootsDefence").empty().append(armourPointImages(armours[player].bootsDefence)).attr("title", pluralise(armours[player].bootsDefence / 2, "armour point"));
  $context.find(".bootsToughness").empty().append(toughnessPointImages(armours[player].bootsToughness)).attr("title", pluralise(armours[player].bootsToughness / 2, "toughness point"));
  //Armour
  $context.find(".totalDefence").empty().append(armourPointImages(armours[player].defence)).attr("title", pluralise(armours[player].defence / 2, "armour point"));
  $context.find(".totalToughness").empty().append(toughnessPointImages(armours[player].toughness)).attr("title", pluralise(armours[player].toughness / 2, "toughness point"));
  //Protection
  $context.find("#protectionLevel").text(armours[player].protection);
  $context.find("#protectionBonus").text(armours[player].protectionBonus);
  $context.find(".helmetProtection .protectionValue").val(armours[player].helmetProtection);
  $context.find(".chestplateProtection .protectionValue").val(armours[player].chestplateProtection);
  $context.find(".leggingsProtection .protectionValue").val(armours[player].leggingsProtection);
  $context.find(".bootsProtection .protectionValue").val( armours[player].bootsProtection);

  //Resistance
  $context.find("#resistanceLevel").text(armours[player].resistance);
  $context.find("#resistanceBonus").text(armours[player].resistanceBonus);
  //Hitpoints
  $context.find(".totalHitpoints").empty().append(hitpointImages(armours[player].hitpoints)).attr("title", pluralise(armours[player].hitpoints, "hitpoint"));
  $context.find(".hitpointsValue").val(armours[player].hitpoints);
  $context.find(".hitpointBreak").css( "margin-top", Math.min(8,(armours[player].hitpoints-1)/20 << 0)*-2 + 1+"px"); //Clump lines of hearts closer where there are more

  //Tooltips for protection setters
  if (armours[player].helmet > 0) {
    $context.find(".helmetProtection .inputValue").attr("title", "Protection "+armours[player].helmetProtection+" "+armours[player].helmetName.toLowerCase()+" helmet \n"+ armours[player].helmetProtection*4+"% extra damage reduction")
  } else {
    $context.find(".helmetProtection .inputValue").attr("title", "Protection "+armours[player].helmetProtection+" emptiness \n"+ armours[player].helmetProtection*4+"% damage reduction \n(in theory)")
  }
  if (armours[player].chestplate > 0) {
    $context.find(".chestplateProtection .inputValue").attr("title", "Protection "+armours[player].chestplateProtection+" "+armours[player].chestplateName.toLowerCase()+" chestplate \n"+ armours[player].chestplateProtection*4+"% extra damage reduction")
  } else {
    $context.find(".chestplateProtection .inputValue").attr("title", "Protection "+armours[player].chestplateProtection+" emptiness \n"+ armours[player].chestplateProtection*4+"% damage reduction \n(in theory)")
  }
  if (armours[player].leggings > 0) {
    $context.find(".leggingsProtection .inputValue").attr("title", "Protection "+armours[player].leggingsProtection+" "+armours[player].leggingsName.toLowerCase()+" leggings \n"+ armours[player].leggingsProtection*4+"% extra damage reduction")
  } else {
    $context.find(".leggingsProtection .inputValue").attr("title", "Protection "+armours[player].leggingsProtection+" emptiness \n"+ armours[player].leggingsProtection*4+"% damage reduction \n(in theory)")
  }
  if (armours[player].boots > 0) {
    $context.find(".bootsProtection .inputValue").attr("title", "Protection "+armours[player].bootsProtection+" "+armours[player].bootsName.toLowerCase()+" boots \n"+ armours[player].bootsProtection*4+"% extra damage reduction")
  } else {
    $context.find(".bootsProtection .inputValue").attr("title", "Protection "+armours[player].bootsProtection+" emptiness \n"+ armours[player].bootsProtection*4+"% damage reduction \n(in theory)")
  }
  $(".gearContainer").each(function() {
    if ($(this).height() > 553) {
      $(this).addClass("tallContainer")
    } else {
      $(this).removeClass("tallContainer")
    }
  });
  
  //Results

  for (let i=0; i<=1; i++) {
    if (i == 0) {
      var $result = $("#results1")
    } else {
      var $result = $("#results2")
    }


    let defencePercentage = 0
    if (results[i].defenceReduction) {
      defencePercentage = results[i].defenceReduction * results[i].defenceReduction / results[i].armourReduction
      defencePercentage = defencePercentage > 1 ? defencePercentage : 1
      $result.find(".defenceComposition").css("border-right-width", "2px")
    } else {
      $result.find(".defenceComposition").css("border-right-width", "0px")
    }
    $result.find(".defenceComposition").css("width", defencePercentage +"%")

    let toughnessPercentage = 0
    if (results[i].toughnessReduction) {
      toughnessPercentage = results[i].toughnessReduction * results[i].toughnessReduction / results[i].armourReduction
      toughnessPercentage = toughnessPercentage > 1 ? toughnessPercentage : 1
      $result.find(".toughnessComposition").css("border-right-width", "2px")
    } else {
      $result.find(".toughnessComposition").css("border-right-width", "0px")
    }
    $result.find(".toughnessComposition").css("width", toughnessPercentage +"%")

    if (armours[player].protection) {
      $result.find(".protectionComposition").css("border-right-width", "2px")
    } else {
      $result.find(".protectionComposition").css("border-right-width", "0px")
    }
    $result.find(".protectionComposition").css("width", armours[player].protectionBonus +"%")

    if (effects[player].resistance) {
      $result.find(".resistanceComposition").css("border-right-width", "2px")
    } else {
      $result.find(".resistanceComposition").css("border-right-width", "0px")
    }
    $result.find(".resistanceComposition").css("width", 100 - effects[player].bonus("resistance")*100 +"%")

    $result.find(".armourReduction").text(round(results[i].armourReduction, 2));
    $result.find(".defenceReduction").text(round(results[i].defenceReduction, 2));
    $result.find(".toughnessReduction").text(round(results[i].toughnessReduction, 2));
    $result.find(".resistanceReduction").text(round(100 - 100 *effects[player].bonus("resistance")));
    $result.find(".protectionReduction").text(armours[player].protectionBonus);
    $result.find(".damageDealt").text(round(results[i].damageDealt, 3));
    $result.find(".damageDealtIcons").empty().append(damagePointImages(results[i].damageDealt));
    $result.find(".percentDamageDealt").text(round(100 -results[i].percentDamageDealt, 2));
    $result.find(".damageDealtPerSecond").text(round(results[i].DPS, 3));
    $result.find(".hitsToKill").text(results[i].hitsToKill);
    let time = round(results[i].timeToKill,8)
    if (time >= 60) {
      let h = (time/3600 <<0)
      let m = (time%3600 /60 <<0)
      let s = (time%3600 %60 <<0)

      s = s >= 10 ? s : "0"+s
      time = m +":"+ s
      if (h) {
        m = m >= 10 ? m : "0"+m
        time = h +":"+ m +":"+ s
      }
    } else {
      time += "s"
    }
    $result.find(".timeToKill").text(time);
  }
  let timeToKill0 = results[0].timeToKill //time to kill player 2
  let timeToKill1 = results[1].timeToKill //time to kill player 1
  $("#player1Name span").empty()
  $("#player2Name span").empty()
  $("#results1").find(".timeToKill").parent().removeClass("highlight")
  $("#results2").find(".timeToKill").parent().removeClass("highlight")
  if (timeToKill0 < timeToKill1) {
    $("#player1Name span").append("👑")
    $("#results1").find(".timeToKill").parent().addClass("highlight")
  }
  else if (timeToKill0 > timeToKill1) {
    $("#player2Name span").append("👑")
    $("#results2").find(".timeToKill").parent().addClass("highlight")
  }
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
function damagePointImages(num, max=num) {
  let span = $("<span>");
  if (num > 0) {
    let full = (num / 2) << 0;
    let fraction = num % 2;
    let quarter = fraction < 1 && fraction >= 0.5;
    let half = fraction < 1.5 && fraction >= 1;
    let threeQuarter = fraction < 2 && fraction >= 1.5;
    let total = full + quarter + half + threeQuarter

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
    let totalMax = Math.ceil(max / 2)
    let extraImages = totalMax - total
    for (let i = 0; i < extraImages; i++) {
      span.append("<img class='lostDamage' src=" + emptyDamageImage + " height='18px' width='18px' >");
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
      effect[player] = $(this).data("strength");
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
      $(".helmet").trigger("mousedown", false);
      $(".chestplate").trigger("mousedown", false);
      $(".leggings").trigger("mousedown", false);
      $(".boots").trigger("mousedown", false);

      //Set resistance value
      effect[2] = $(this).data("resistance");
      $("#resistance").trigger("mousedown", false);

      //Set protection value
      $("#protectionValue").val($(this).data("protection")).trigger("change");
      $(".hitpointsValue").val($(this).data("hitpoints")).trigger("change");

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
    if (i <= 3 && i!= 2) {
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
    effectDiv.appendTo(".effectTable")
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

  $(".helmet").trigger("mousedown", false);
  $(".chestplate").trigger("mousedown", false);
  $(".leggings").trigger("mousedown", false);
  $(".boots").trigger("mousedown", false);

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
  $(".hitpointsValue").val(hitpoints).trigger("change");

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