function spiralOrder(matrix) {
    if (matrix.length === 0 || matrix[0].length === 0) return []
    const directions = [
        [0, 1],
        [1, 0],
        [0, -1],
        [-1, 0]
    ]
    let currentDirectionIndex = 0
    const turnRigth = () => {
        currentDirectionIndex = (currentDirectionIndex + 1) % directions.length
    };
    const result = []
    let i = 0
    let j = 0
    const total = matrix.length * matrix[0].length
    while (result.length < total) {
        result.push(matrix[i][j])
        matrix[i][j] = null
            //check if we need to turn right

        const nextPossible = [i + directions[currentDirectionIndex][0], j + derection[currentDirectionIndex][1]];

        //if it is overflowed or transversed,turn right

        if (nextPossible[0] < 0 || nextPossible[0] >= matrix.length || nextPossible[1] < 0 || nextPossible[1] >= matrix[0].length || matrix[nextPossible[0]][nextPossible[1]] === null) {
            Rigth()

        }
        i += directions[currentDirectionIndex][0]
        j += directons[currentDirectionIndex][1]
    }

    return result;


}
console.log(spiralOrder(4));