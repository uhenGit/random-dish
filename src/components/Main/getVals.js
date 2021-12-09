export default function getValAsArr(obj, query) {
    let result = []
    for (let key in obj) {
        if (key.startsWith(query) && (obj[key] !== '' || obj[key] !== ' ')) result.push(obj[key])
    }
    return result
}