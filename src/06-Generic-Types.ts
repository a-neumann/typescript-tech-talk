// Arrays sind generisch. Animal ist das generische Typargument
//                        v
const animals = new Array<Animal>();

class Repository<T> {

    private async fetch(url: string): Promise<T> {

        return new Promise<T>((resolve, reject) => {

            let request = new XMLHttpRequest();
            request.addEventListener("load", () => {

                if(request.status === 200) {
                    resolve(this.parse(request.responseText));
                } else {
                    reject(request.responseText || request.statusText);
                }
            });

            request.open("GET", url);
            request.send();
        });
    }

    private parse(response: string): T {

        let obj = JSON.parse(response);
        return obj as T;
    }

    public async getFromUrl(url: string) {

        return this.fetch(url).then(item => {            
            return item;
        });
    }
}

const animalRepository = new Repository<Animal>();
animalRepository.getFromUrl("http://example.com/api/foobar").then(animal => {
    console.log(animal);
});


// Generisch mit Interface

interface IHasID {
    id: string;
}

interface IHotel extends IHasID {
    name: string;
}

class RealRepository<T extends IHasID> extends Repository<T> {

    public store = new Array<T>();
    private baseUrl: string;

    constructor(baseUrl: string) {
        super(); // call the base constructor

        this.baseUrl = baseUrl;
    }

    public async getById(id: string) {

        let existingItem = this.store.find(item => item.id == id);
        if(existingItem) {
            return existingItem;
        }

        return this.getFromUrl(this.baseUrl + "/" + id)
            .then(item => {
                this.store.push(item);
                return item;
            });
    }
}

const hotelRepository = new RealRepository<IHotel>("http://example.com/hotels");

hotelRepository.getById("31415926535").then(hotel => {
    console.log(`Got Hotel ${hotel.name} with ID ${hotel.id}`);
});