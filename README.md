# Excelsior!
Forgerons et Enchanteurs doivent travailler en équipe pour développer les meilleurs équipements possible.

Hélas les commandes qui leurs sont faites ne sont pas toujours simples,  parfois même impossible!

Votre objectif est de concevoir la formule universelle pour répondre à tout type de commande!



## Règles 

Format attendu d'une arme :

```javascript
{
    speed: Float,
    damage: Int,
    spells: [Spell]
}
```

Format d'un spell :

```javascript
{
    spell: String,
    trigger: Spell 
}
```
--
>### Attention
>La particularité d'un `Spell` est qu'il peut déclencher d'autres `Spell`. Il est donc nécessaire de bien prévoir les relations entre les spells pour éviter une catastrophe!

### Ci-dessous, des examples de commandes avec le résultat attendu: 

Commande:

```json
{
    "damage": "10",
    "speed": "3.55",
    "spells": ["fireball", "haste"]
}
```
Résultat: 

```javascript
{
    damage: 10,
    speed: 3.55,
    spells: [
        { spell: "fireball" },
        { spell: "haste" }
    ]
}
```

Commande:

```json
{
    "damage": "4",
    "speed": "7.28",
    "spells": [
        {
            "cold_weaknesses": ["frozen_ground", "ice_bolt", "added_cold_damage"]
        }
    ]
}
```

Résultat:   

```javascript
{
    damage: 4,
    speed: 7.28,
    spells: [
        { 
            spell: "cold_weaknesses",
            trigger: {
                spell: "frozen_ground ice_bolt added_cold_damage"
            }
        }
    ]
}
```


Commande:

```json
{
    "damage": "100",
    "speed": "0.22",
    "spells": [
        {
            "cast_on_critical_strike": ["stun"]
        },
        "haste",
        {
            "cast_on_hit": {
                "vulnerability": {
                    "cast_on_curse": ["ignite", "burning_ground"]
                }
            }
        }
    ]
}
```


Résultat:   

```javascript
{
    damage: 100,
    speed: 0.22,
    spells: [
        { 
            spell: "cast_on_critical_strike",
            trigger: {
                spell: "stun"
            }
        },
        {
            spell: "haste"
        },
        {
            spell: "cast_on_hit",
		      trigger: {
		          spell: "vulnerability",
		          trigger: {
		              spell: "cast_on_curse",
		              trigger: {
		                  spell: "ignite burning_ground"
		              }
		          }
		      }
        }
    ]
}
```



