import PopupCtrl from "./PopupCtrl";

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

@ccclass    // 弹窗管理
export default class ViewCtrl extends cc.Component {

    @property
    hasMask: boolean = false;   //是否有半透遮罩

    @property
    touchOutClose: boolean = false; // 是否点击弹窗外关闭

    @property
    panel: cc.Node = null;

    // 将该页添加到栈中
    public onAddToStack():void {

    }

    // 从栈中移除该页
    public onRemoveFromStack():void {

    }

    // 实现统一的弹窗动画
    public onPlayShowAni():void {

    }

    public onPlayHideAni():void {
        
    }

    public OnShown(): void {
    }

}
