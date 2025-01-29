
class rectange{
    constructor(width, height){
        this.width = width;
        this.height = height;
    }
    set width(newWidth){
        if(newWidth > 0){
            this._width = newWidth;
        }
        else{
            console.error('Width should be greater than 0');
        }
    }
    get width(){
        return this._width;
    }
    set height(newHeight){
        if(newHeight > 0){
            this._Height = newHeight;
        }
        else{
            console.error('Height should be greater than 0');
        }
    }
    get height(){
        return this._Height;
    }
}

const rectange1 = new rectange("teja", "manchala");
console.log(rectange1.width);
console.log(rectange1.height);