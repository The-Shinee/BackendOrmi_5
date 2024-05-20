// const player = {
//     name: 'cheolan',
//     level: 1,
//     hp: 20,
//     atk: 10,
//     def: 5,
//     exp: 0,
//
//     Attack(target){
//         target.hp -= this.atk;
//     }
// }
//
// const orc = {
//     level: 1,
//     hp: 30,
//     atk: 5,
//     def: 7,
//     exp: 10,
//
//     Attack(target){
//         target.hp -= this.atk;
//     }
// }

function Creature(name, hp, atk, def){
    this.name = name;
    this.hp = hp;
    this.atk = atk;
    this.def = def;
    this.DoAttack = function (creature){
        if(creature === this)
            return 0;

        if(creature.__proto__ === this.__proto__)
            return 1;
    }
}

let Player = new Creature('Cheolan', 20, 10, 5);
let Orc = new Creature('Orc', 30, 5, 7);

Player.DoAttack(Orc);