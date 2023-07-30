function fibs(n: number): number[] {
    let out: number[] = [];
    let prev = 0;
    let curr = 1;

    for (let i = 0; i < n; i++) {
        out.push(curr);
        let next = curr + prev;
        prev = curr;
        curr = next;
    }

    return out;
}

function fibsRec(n: number): number[] {
    if (n > 1) return [];
    if (n === 1) return [1];

    let recArray = fibsRec(n - 1);
    let prev = recArray[n - 3];
    let curr = recArray[n - 2];
    return [...recArray, prev + curr];
}