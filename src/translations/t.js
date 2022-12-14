import { dictionary } from "./dictionary"

const language = "pl";

export const t = (word) => {
    let wordInDictionary = dictionary[word];
    
    if (!!!wordInDictionary)
        return word;

    return wordInDictionary[language] || word;
}