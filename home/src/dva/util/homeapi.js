let url = " https://www.easy-mock.com/mock/5bd1a7a2532cbd205ac6525d/banner"
export function getBaner(){
    return fetch(`${url}/banner`).then(res=>res.json()).then(res=>res)
}

export function getBrandList(){
    return fetch(`${url}/drandlist`).then(res=>res.json()).then(res=>res)
}

