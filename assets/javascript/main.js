const {createApp} = Vue

createApp ({
    data () {
        return {
            lista: [ 
                {
                    text: "Fare la spesa al supermercato",
                    done: "tre",
                },

                {
                    text: "Comprare le medicine in farmacia",
                    done: "false",
                },

                {
                    text: "Studiare storia medievale, capitolo 10 e 11",
                    todo: "true",
                },

                {
                    text: "Andare in palestra",
                    todo: "false",
                },

                {
                    text: "Guardare una serie tv su Netflix",
                    todo: "true",
                },
              
            ]
        }
    }
}).mount ('#app')
