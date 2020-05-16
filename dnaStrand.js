function DNAtoRNA(dna) {
    let value = "";
    for (let x = 0; x < dna.length; x++) {
        if (dna[x] === "A") {
            value += "T";
        } else if (dna[x] === "T") {
            value += "A";
        }
        if (dna[x] === "C") {
            value += "G";
        } else if (dna[x] === "G") {
            value += "C";
        } else {
            value += dna[x];
        }
    }
    return value;
}