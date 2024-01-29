const {createApp} = Vue

createApp ({
    data () {
        return {
            newList: '',
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
    },
    created (){
    },
    methods : {
        addList (){
            if (this.newList.trim() !== '') {
                this.lista.push({
                  text: this.newList,
                  done: false
                }),
              this.newList = ''};
        },
        deleteList (index) {
            this.list.splice(index,1);
            console.log('Cancella dalla lista', index);
        },
        doneTask (index) {
            (this.list[index].todo) ? (this.list[index].todo = false) : (this.list[index].todo = true);
        }
    }
}).mount ('#app')
