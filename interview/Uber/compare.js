//string a, string b

function parse(str) {
    let res = [];

    for(let i=0; i<str.length; i++) {
        if(str[i] >= "a" && str[i] <= "z") {
            res.push(str[i]);
        } else if(str[i] >= "0" && str[i] <= "9") {
            let start = i;
            while(str[i] >= "0" && str[i] <= "9") {
                i++;
            }
            res.push(parseInt(str.slice(start, i)));
            i--;
        }
    }
    console.log(res);
    return res;
}


function compare(a, b) {
    const arrA = parse(a);
    const arrB = parse(b);

    const lenA = arrA.length;
    const lenB = arrB.length;
    const minLen = Math.min(lenA, lenB);

    for(let i=0; i<minLen; i++) {
        const typeA = typeof(arrA[i]);
        const typeB = typeof(arrB[i]);

        if(arrA[i] === arrB[i]) continue;

        else if (typeA === "number" && typeB === "string") return -1;
        else if (typeA === "string" && typeB === "number") return 1;

        else return arrA[i] > arrB[i] ? 1 : -1;
    }

    if(lenA > minLen) return 1;
    else if (lenB > minLen) return -1;
    else return 0;
}
//"abc","bbc",-1,
    //"bbc" ,"abc",1
    //"1bc',"2bc",-1
    //"11bc","2bc",1
    //"1bc","abc",-1
    //"","1afd",-1

//  console.log(parse("a22b"));
//  console.log(parse("a22b"));

//  console.log(compare("abc","bbc"));
//  console.log(compare("bbc", "abc"));
//  console.log(compare("1bc","2bc"));
//console.log(compare("11bc","2bc"));
//  console.log(compare("1bc","abc"));
//console.log(compare("","1afd"));
console.log(compare("01234","1234"));