declare var Map: any;

//Цель задачи было написать класс,который внутри себя создавал бы объект с ключом ,внутри которого было бы значение,но при этом ключ небесконечный и имеет срок годности
//внутри класса у нас сть 3 публичных метода

class TimeLimitedCache {
    private cache: any;

    constructor() {
        // для создания объектов решил выбрать Map ,так как под нашу задачу (манипуляции со свойствами внутри объекта и самим ключом) он подойдет идеально,засчет наличия удобных методов
        this.cache = new Map();
    }

    // логика создания объекта(set)
    set(key: number, value: number, duration: number): boolean {
        const exist = this.cache.has(key) && this.cache.get(key).expiresAt > Date.now();

        this.cache.set(key, { value, duration, expiresAt: Date.now() + duration });
        return exist;
    }

    //метод,который определяет истек ли срок годности ключа (get) и в случае,если истек или просто его нет возвращать -1 ,а в случае если порядок - возвращать value из этого объекта
    get(key: number): number {
        const entry = this.cache.get(key);
        if (!entry || entry.expiresAt <= Date.now()) {
            return -1;
        } else {
            return entry.value;
        }
    }

    //третий метод возвращает количество просроченных ключей
    count(): number {
        let count = 0;
        for (const [key, entry] of this.cache) {
            if (entry.expiresAt > Date.now()) {
                count++;
            }
        }
        return count;
    }
}
