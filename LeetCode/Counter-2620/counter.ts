function createCounter(n: number): () => number {
    let num = n;
    return function () {
        return num++;
    };
}

const counter = createCounter(3);
counter();
counter();
counter();

// В задаче требовалось возвращать число ,которое становится на 1 больше с каждым вызовом ,это значит, что нужно запоминать именно последнее число,для этого я использовал замыкание
