const map = (arr = [], func = (item)=> item) => {

    let newArr = []
    arr.forEach((item, index) =>{
        newArr.push(func(item, index, arr))
    })

    return newArr
}

export default map