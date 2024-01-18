export function merge(collection_1: number[],collection_2: number[]): number[] {
    let i = 0, j = 0;
    let resultCollection: number[] = [];
    while (i < collection_1.length && j < collection_2.length) {
        if (collection_1[i] < collection_2[j]) {
            resultCollection.push(collection_1[i])
            i++;
        }
        else {
            resultCollection.push(collection_2[j]);
            j++;
        }
    }
    while (i < collection_1.length) {
        resultCollection.push(collection_1[i])
        i++;
    }
    while (j < collection_2.length) {
        resultCollection.push(collection_2[j])
        j++;
    }
    return resultCollection;
}