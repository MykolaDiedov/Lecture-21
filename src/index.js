const number = [1, 2, [1.1, 1.2, 1.3], 3];
function generateList(arr) {

    const $arrayList = document.createElement('ul');
    const $inlineArrayList = document.createElement('ul');

    return arr.forEach(el => {
        if (!Array.isArray(el)) {
            const $li = document.createElement('li');
            $li.innerHTML = el;
            $arrayList.append($li);
            document.body.append($arrayList);
        } else {
            const $li2 = document.createElement('li');
            document.querySelector('body > ul').append($li2);
            el.forEach(element => {
                const $inlineArrayLi = document.createElement('li');
                $inlineArrayLi.innerHTML = element;
                $inlineArrayList.append($inlineArrayLi);
            });
            $li2.append($inlineArrayList);
        }
    });
}
generateList(number);


const $table = document.createElement('table');
document.body.append($table);
let num = 0;
for (let i = 1; i <= 10; i++) {
    const $tr = document.createElement('tr');
    $table.append($tr);
    for (let j = 0; j < 10; j++) {
        const $td = document.createElement('td');
        num ++;
        $td.innerHTML = num;
        $tr.append($td);
        $tr.append($td);
    }
}