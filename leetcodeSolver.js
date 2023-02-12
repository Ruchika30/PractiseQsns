var isIsomorphic = function (s, t) {

    let dic = {}

    const first = s.split('')
    const second = t.split('')

    for (let i = 0; i < first.length; i++) {
        if (!(first[i] in dic)) {
            dic[first[i]] = t[i]
        }


        else {
            if (dic[first[i]] != second[i]) {
                return false
            }
        }

    }

    console.log("dic--", dic)

    return true

};



console.log(isIsomorphic("badc", "baba"))