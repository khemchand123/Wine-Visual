import wines from "./wine-data.json";
import { CalculateMeanMediamMode } from "./common";
import wineInterface from "./../contract/wineInterface";

const flavanoids = () => {
  let flavanoidsMatrix: string[][] = [
    ["Measure"],
    ["Flavanoids Mean"],
    ["Flavanoids Median"],
    ["Flavanoids Mode"],
  ];

  let measureCaluation: any = {};

  for (let wine of wines) {
    if (wine.Alcohol in measureCaluation) {
      measureCaluation[wine.Alcohol] = [
        ...measureCaluation[wine.Alcohol],
        wine,
      ];
    } else {
      measureCaluation[wine.Alcohol] = [wine];
    }
  }

  for (let key in measureCaluation) {
    let list: number[] = [];
    let wines: wineInterface[] = measureCaluation[key];
    for (let wine of wines) {
      list.push(
        typeof wine.Flavanoids == "string"
          ? parseFloat(wine.Flavanoids)
          : wine.Flavanoids
      );
    }

    let [mean, median, mode] = CalculateMeanMediamMode(list);
    flavanoidsMatrix[0].push(`Class ${key}`);
    flavanoidsMatrix[1].push(mean.toString());
    flavanoidsMatrix[2].push(median.toString());
    flavanoidsMatrix[3].push(mode.toString());
  }
  console.log(flavanoidsMatrix);
  return flavanoidsMatrix;
};

export default flavanoids;
