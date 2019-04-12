const {ccclass, property} = cc._decorator;

@ccclass
export default class Helloworld extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';
    @property
    zzy :string = 'zzy';

    start () {
        // init logic
        this.label.string = this.zzy;
    }
}
