
export class InsertionSortService {

    static sort(input){

        for(let j = 1; j < input.items.length; j++){

            (function(j){
                setTimeout(() => {
                    let key = input.items[j].val;

                    let i = j - 1;

                    while(i >= 0 && input.items[i].val > key){
                        input.items[i + 1].val = input.items[i].val;
                        i = i - 1;
                    } 

                    input.items[i + 1].val = key;
                    input.setCurrent(input.items[i + 1]);

                },1000 * j);
            })(j);
        }
    }

}