const name = "Zara Darkbane";
const characterClass = "Hechicera";
let level = 7;
let health = 80;
let currentMana = 120;
const attack = 45;
const defense = 30;

const enemyDefense = 15;
const spellCost = 30;
let isStunned = false;

// FUNCIONES 

function calculateDamage(attack, defense) {
  const damage = attack - defense;
  return damage > 0 ? damage : 0;
}

const isAlive = (health) => health > 0;

const canCastSpell = (currentMana, spellCost, isStunned) => {
  return currentMana >= spellCost && !isStunned;
};

function getPresentation(name, characterClass, level) {
  return `${name} — ${characterClass} (Nivel ${level})`;
}

console.log("--- RESULTADOS DEL PERSONAJE ---");
console.log(getPresentation(name, characterClass, level));
console.log("Daño realizado:", calculateDamage(attack, enemyDefense));
console.log("¿Está vivo?:", isAlive(health));
console.log("¿Puede lanzar hechizo?:", canCastSpell(currentMana, spellCost, isStunned));