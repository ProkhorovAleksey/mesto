import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
    constructor( popup ) {
        super(popup)
        this.popupCaption = this._popup.querySelector('.popup__caption');
        this.popupCardImage = this._popup.querySelector('.popup__card-image')
    }
    open(item){
        super.open();
        this.popupCaption.textContent = item.name;
        this.popupCardImage.alt = item.name;
        this.popupCardImage.src = item.link;
    }
}