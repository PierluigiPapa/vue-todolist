const {createApp} = Vue

createApp ({
    data () {
        return {
            newList: '',
            lista: [ 
                {
                    text: "Fare la spesa al supermercato",
                    done: "true",
                },

                {
                    text: "Comprare le medicine in farmacia",
                    done: "false",
                },

                {
                    text: "Studiare storia medievale, capitolo 10 e 11",
                    done: "true",
                },

                {
                    text: "Andare in palestra",
                    done: "false",
                },

                {
                    text: "Guardare una serie tv su Netflix",
                    done: "true",
                },
              
            ]
        }
    },
    methods : {
        checkStatus(check) {
            if(check === true) return 'text-decoration-line-through';
          },

        addList (){
            if (this.newList.trim() !== '') {
                this.lista.push({
                  text: this.newList,
                  done: false,
                }),
              this.newList = ''};
        },
        deleteList (index) {
            this.lista.splice(index, 1);
            console.log('Cancella dalla lista', index);
        },
        doneTask (index) {
            (this.lista[index].done) ? (this.lista[index].done = false) : (this.lista[index].done = true);
        }
    }
}).mount ('#app')
