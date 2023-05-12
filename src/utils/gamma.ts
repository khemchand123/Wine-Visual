import wines from "./wine-data.json";
import { CalculateMeanMediamMode, clusterClassBaseWine } from "./common";
import wineInterface from "./../contract/wineInterface";

const gamma = () => {
  let gammaMatrix: string[][] = [
    ["Measure"],
    ["Gamma Mean"],
    ["Gamma Median"],
    ["Gamma Mode"],
  ];

  let classBaseWine: any = clusterClassBaseWine(wines);
 

  for (let key in classBaseWine) {
    let gammaValue: number[] = [];
    let wines: wineInterface[] = classBaseWine[key];

    for (let wine of wines) {
      const { Ash, Hue, Magnesium }  = wine;
      gammaValue.push( parseFloat( ((Ash * Hue) / Magnesium).toFixed(3) ));
    }

    let [mean, median, mode] = CalculateMeanMediamMode(gammaValue);
    gammaMatrix[0].push(`Class ${key}`);
    gammaMatrix[1].push(mean.toString());
    gammaMatrix[2].push(median.toString());
    gammaMatrix[3].push(mode.toString());
  }
  console.log(gammaMatrix);
  return gammaMatrix;
};

export default gamma;
