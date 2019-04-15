import ViewCtrl from "./view/ViewCtrl";
import UIMain from "./UI/UIMain";
import PopupCtrl, { PopupLayerEnum } from "./view/PopupCtrl";

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
export default class StartCtrl extends cc.Component {

    @property(cc.Node)
    popupLayer: cc.Node = null;

    @property(cc.Node)
    sceneLayer: cc.Node = null;

    ui_main:UIMain = null;

    start () {
        console.log("ininin");
        this.AddPropuCtrl();        
    }

    private AddPropuCtrl(): void {
        cc.loader.loadRes('prefabs/PopupCtrl', cc.Prefab, (err, result) => {
            if (err)
            {
                console.log("has error  ---> " + err.message);
                return;            
            }
            let prefab = result as cc.Prefab;
            let propuCtrl = cc.instantiate(prefab);

            this.popupLayer.addChild(propuCtrl);

            this.OpenMainUI();
        });
    }

    private OpenMainUI():void {
        // 打开主UI

        //  先加载主UI 预设体 设置好信息后 
        // 加入显示层的结点之下
        cc.loader.loadRes('prefabs/MainUI', cc.Prefab, (err, result) => {
            if (err)
            {
                console.log("has error  ---> " + err.message);
                return;            
            }
            let prefab = result as cc.Prefab;
            let main_ui = cc.instantiate(prefab);

            var ctrl = main_ui.getComponent("UIMain");
            console.log("ui main == child  - > ");
            PopupCtrl.pushView(PopupLayerEnum.CONTENT, ctrl, false);
        });
    }

}
