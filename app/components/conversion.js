import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class ConversionComponent extends Component {
    constructor(...args) {
        super(...args);
        this.isLarge = false;
        this.currencies = [
            {
                'USA (Dollar)': 1, 
                'PKR': 170, 
                'INR': 84, 
            }
        ]
        this.number = 0;
        this.result = 0
    }

    @action calculate() {
        console.log('Button Clicked');
        for(var key in Object.keys(this.currencies)){
            var value = this.currencies[key];
        }

        if(value){
            this.result = this.number * value
        }
    }
}
