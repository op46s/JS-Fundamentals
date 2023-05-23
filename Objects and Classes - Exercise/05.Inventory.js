function inventory(input) {

    let sortedByLevel = [];

    class Register {
        constructor(hero, level, items) {
            this.hero = hero,
                this.level = level,
                this.items = items
        }
        printer() {
            console.log(`Hero: ${this.hero}\nlevel => ${this.level}\nitems => ${this.items}`);
        }
    }

    for (let i = 0; i < input.length; i++) {
        let heroData = input[i].split(' / ');
        sortedByLevel.push(heroData)

    }
    sortArray(sortedByLevel);

    for (let i = 0; i < sortedByLevel.length; i++) {
        let hero = sortedByLevel[i][0];
        let level = Number(sortedByLevel[i][1])
        let items = sortedByLevel[i][2]

        let newHero = new Register(hero, level, items)
        newHero.printer()
    }

    function sortArray(array) {

        array.sort((a, b) => {
            const levelA = parseInt(a[1]);
            const levelB = parseInt(b[1]);
            return levelA - levelB;
        });
    }
}
inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]);
inventory([
    'Batman / 2 / Banana, Gun',
    'Superman / 18 / Sword',
    'Poppy / 28 / Sentinel, Antara'
]);