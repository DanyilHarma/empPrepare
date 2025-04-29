declare var Promise: any;

function sleep(millis: number): Promise<void> {
    return new Promise((res) => {
        setTimeout(res, millis);
    });
}

let t = Date.now();
sleep(100).then(() => console.log(Date.now() - t)); // 100

// сорян за костыль в самом верху файла,компилятор ругался на Promise,не хотел tsconfig создавать,тоже самое будет касать и других задач с похожими проблемами,если важно сделаю ,как надо
