module.exports = (order) => {

    try {
        order = JSON.parse(order);
    }
    catch (error) {
        return {spells: []};
    }

    let a = false;
    order.spells.forEach(s => {
        if (typeof s === 'object')
            a = true;
    });

    let spells = [];

    if(!a) {
        order.spells.forEach(s => {
            let spell = {};
            spells.push(spell['spell'] = s)
        });
    } else {
        spells = constructSpells(order.spells)
    }



    return {
        damage: parseInt(order.damage),
        speed: parseFloat(order.speed),
        spells: spells
    }


};

function constructSpells (spells) {
    let spellsToReturn = [];
    spells.forEach((sp) => {
        let singleSpell = {};
        singleSpell.spell = Object.keys(sp)[0];
        singleSpell.trigger = {};

        var convertedArray = [];

        for(var i = 0; i < sp[Object.keys(sp)[0]].length; ++i)
        {
            convertedArray.push(sp[Object.keys(sp)[0]][i]);
        }

        singleSpell.trigger.spell = convertedArray.join(' ');
        spellsToReturn.push(singleSpell)
    });
    return spellsToReturn;
}