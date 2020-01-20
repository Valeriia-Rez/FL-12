const totalHp = 100;
const twenty = 20;
const fifteen = 15;
const twentyFive = 25;
const ninety = 90;
const fifty = 50;

class Fighter {
    constructor(name, damage, hp, strength, agility) {
        this._name = name;
        this._damage = damage;
        this._hp = hp;
        this._strength = strength;
        this._agility = agility;
        this._wins = 0;
        this._losses = 0;
    }
    getName() {
        return `${this._name}`;
    }
    getDamage() {
        return `${this._damage}`;
    }
    getStrength() {
        return `${this._strength}`;
    }
    getAgility() {
        return `${this._agility}`;
    }
    getHealth() {
        return `${this._hp}`;
    }
    attack(defender) {
        const defenderStrength = parseInt(defender.getStrength());
        const defenderAgility = parseInt(defender.getAgility());
        const randomNumber = Math.floor(Math.random() * totalHp + 1);
        const successAttackPercent = totalHp - (defenderStrength + defenderAgility);
        const isSuccessfull = successAttackPercent > randomNumber;
        const nameFighter = this._name;
        if (isSuccessfull) {
            const damageFighter = this._damage;
            const nameDefender = defender.getName();
            defender.dealDamage(damageFighter);
            console.log(`${nameFighter} makes ${damageFighter} damage to ${nameDefender}
            `);
        } else {
            console.log(`${nameFighter} missed attack`);
        }

    }
    logCombatHistory() {
        console.log(`Name: ${this._name}, Wins: ${this._wins}, Losses: ${this._losses}`);
    }
    heal(hp) {
        const hpSum = this._hp + hp;

        if (hpSum > totalHp) {
            this._hp = totalHp;
        } else {
            this._hp = hpSum;
        }
    }
    dealDamage(hp) {
        const hpDeal = this._hp - hp;
        if (hpDeal < 0) {
            this._hp = 0;
        } else {
            this._hp = hpDeal;
        }
    }
    addWin() {
        this._wins += 1;
    }
    addLoss() {
        this._losses += 1;
    }
}

function battle(fighter1, fighter2) {
    let isGame = true;
    let hpFighter1 = parseInt(fighter1.getHealth());
    let hpFighter2 = parseInt(fighter2.getHealth());
    const nameFighter1 = fighter1.getName();
    const nameFighter2 = fighter2.getName();
    if (hpFighter1 === 0) {
        isGame = false;
        console.log(`${nameFighter1} is dead and can't fight`);
    } else if (hpFighter2 === 0) {
        isGame = false;
        console.log(`${nameFighter2} is dead and can't fight`);
    }
    while (isGame) {
        fighter1.attack(fighter2);
        fighter2.attack(fighter1);
        hpFighter1 = parseInt(fighter1.getHealth());
        hpFighter2 = parseInt(fighter2.getHealth());
        if (hpFighter1 === 0) {
            isGame = false;
            fighter1.addLoss();
            fighter2.addWin();
            console.log(`${nameFighter2} has won!`);
        } else if (hpFighter2 === 0) {
            isGame = false;
            fighter2.addLoss();
            fighter1.addWin();
            console.log(`${nameFighter1} has won!`);
        }
    }
}




const myFighter = new Fighter('Maximus', twenty, totalHp, twenty, fifteen);
const myFighter2 = new Fighter('Commodus', twentyFive, ninety, twentyFive, twenty);
battle(myFighter, myFighter2);
myFighter2.getHealth();
myFighter.getHealth();
battle(myFighter, myFighter2);
myFighter.heal(fifty);
myFighter.getHealth();
myFighter2.logCombatHistory();
myFighter.getStrength();
battle(myFighter, myFighter2);
myFighter.getName();
myFighter.getDamage();
myFighter.getStrength();
myFighter.getAgility();
myFighter.getHealth();
myFighter.attack(myFighter2);
myFighter2.attack(myFighter);
myFighter.logCombatHistory();
myFighter.heal(fifty);
myFighter.dealDamage(fifty);
myFighter.addWin();
myFighter.addLoss();