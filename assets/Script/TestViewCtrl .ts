import ViewCtrl from "./ViewCtrl";
import PopupCtrl, { PopupLayerEnum } from "./PopupCtrl";

// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class TestViewCtrl  extends ViewCtrl {

    @property(cc.Label)
    label: cc.Label = null;

    @property(cc.Button)
    click_btn: cc.Button = null;

    start () {
        this.label.string = "zzzzz";
        
        PopupCtrl.pushView(PopupLayerEnum.CONTENT, this, false);
        
    }


    // update (dt) {}
}
