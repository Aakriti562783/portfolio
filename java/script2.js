

console.log('First Day 11: JavaScript Classes - Part1');

async function fetchUser(){
    const response = await fetch('https://jsonplaceholder.tyicoed.com/users');
    console.log(await respoponse);
    const data= await response.json();
    return data;
}

console.log(fetchUser();)


funName();

console.log('Second Day 11: JavaScript - Part1')';