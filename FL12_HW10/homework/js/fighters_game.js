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
        console.log("attack");
        const defenderStrength = parseInt(defender.getStrength());
        const defenderAgility = parseInt(defender.getAgility());
        const successAttackPercent = 100 - (defenderStrength + defenderAgility);
        const isSuccessfull = successAttackPercent > (defenderStrength + defenderAgility);
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

        if (hpSum > 100) {
            this._hp = 100;
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
        this._losses -= 1;
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




const myFighter = new Fighter('Maximus', 20, 100, 20, 15);
const myFighter2 = new Fighter("Commodus", 25, 90, 25, 20);
console.log(battle(myFighter, myFighter2));
console.log(myFighter2.getHealth());
console.log(myFighter.getHealth());
console.log(battle(myFighter, myFighter2));
console.log(myFighter.heal(50));
console.log(myFighter.getHealth());
console.log(myFighter2.logCombatHistory());
console.log(myFighter.getStrength());
console.log(battle(myFighter, myFighter2));
/*console.log(myFighter);
console.log(myFighter.getName());
console.log(myFighter.getDamage());
console.log(myFighter.getStrength());
console.log(myFighter.getAgility());
console.log(myFighter.getHealth());
console.log(myFighter.attack(myFighter2));
console.log(myFighter2.attack(myFighter));
console.log(myFighter.logCombatHistory());
myFighter.heal(50);
myFighter.dealDamage(50);
console.log(myFighter.addWin());
console.log(myFighter.addLoss());*/