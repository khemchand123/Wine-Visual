/**
 * 
 * @param List
 * @returns mean, medium and mode
 */
export function CalculateMeanMediamMode(list : number[]){
    
    let sum : number = 0;
    for(let i = 0; i < list.length; i++){
        sum += list[i];
    }
    let length : number =  list.length;
    list.sort();
    let mean : number = sum / length;
    let median : number;

    //checking list is even or odd for medium
    if(length % 2 == 0){
        median = (list[(length/2)-1] +  list[length/2]) / 2;
    } else {
        median = list[Math.floor(length/2)];
    }
    let mode : number = modeHelper(list);
    return [mean.toFixed(3), median.toFixed(3), mode.toFixed(3)];
}

/**
 * 
 * @param sorted list
 * @returns mode of list
 */
export function modeHelper(list : number[]){
    let maxMode : number = list[0];
    let maxModeCount : number = 1;

    let prev : number = list[0];
    let count : number = 1;

    for(let i = 1; i < list.length; i++){
        if(prev == list[i]){
            count++;
           if(count >= maxModeCount){
               maxModeCount = count;
               maxMode = list[i];
           }
        } else {
            prev = list[i];
            count = 1;
        }
    }
    return maxMode;
}

/**
 * 
 * @param array of wine
 * @returns object of array wine based on class 1,2,3
 */
export function clusterClassBaseWine(wines : any){
    let classBaseWine: any = {};
    for (let wine of wines) {
        if (wine.Alcohol in classBaseWine) {
            classBaseWine[wine.Alcohol] = [
            ...classBaseWine[wine.Alcohol],
            wine,
          ];
        } else {
            classBaseWine[wine.Alcohol] = [wine];
        }
      }
    return classBaseWine;
}