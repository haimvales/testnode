
export function getArr() {
    return [1, 2, 3, 4]
}

export function chekAllNumbers(arr) {
    if (!Array.isArray(arr) || arr.length === 0)
        for (let i = 0; i < arr.length; i++) {
            if (typeof arr[i] !== Number)
                return false
        }
    return true
}