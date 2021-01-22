export class Product {

    private _id:number;
    private _title:string;
    private _author:string;
    private _desc:string;
    private _status:string;

    constructor(id:number,
        title:string,
        author:string,
        desc:string,
        status:string){
            this._id = id;
            this._title = title;
            this._author = author;
            this._desc = desc;
            this._status = status
        }

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get title() {
        return this._title;
    }

    set title(value) {
        this._title = value;
    }

    get author() {
        return this._author;
    }

    set author(value) {
        this._author = value;
    }

    get desc() {
        return this._desc;
    }

    set desc(value) {
        this._desc = value;
    }
    
    get status() {
        return this._status; 
        
    }

    set status(value) {
        this._status = value;
    }
    set Status(status: string) {
        if(status === 'rupture') {
          this._status = status;
        }
        else {
          this._status = 'en stock';
        }
      }
}