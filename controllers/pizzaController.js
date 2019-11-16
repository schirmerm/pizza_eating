const db = require('../config')

module.exports = {
        getPizzas(cb){
            db.query('SELECT * FROM pizzas', (e,pizzas) => {
                if(e){
                    console.log(e)
                }
                cb(pizzas)
            })
            
        },

    addPizza(name, eaten, cb){
        db.query(`INSERT INTO pizzas(name, eaten) VALUES( "${name}", ${eaten})`, e => {
            if(e){
                console.log(e)
            }
            cb()
        })
        
    },
    eatPizza(id, cb){
        db.query(`UPDATE pizzas SET eaten = true WHERE id = ${id}`, e => {
            if (e){
                console.log(e)
            }
            cb()
        })
        
    },
    removePizza(id,cb){
        db.query(`DELETE FROM pizzas WHERE id = ${id}`, e => {
            if(e){
                console.log(e)
            }
            cb()
        })
        
    }

}