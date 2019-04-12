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
    propertyLayer: cc.Node = null;

    @property(cc.Node)
    sceneLayer: cc.Node = null;
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        console.log("ininin");
        cc.loader.loadRes('prefabs/TestView', cc.Prefab, (err, result) => {
            if (err)
            {
                console.log("has error  ---> " + err.message);
                return;            
            }
            let prefab = result as cc.Prefab;
            let view = cc.instantiate(prefab);

            this.propertyLayer.addChild(view);
        });
    }

    // update (dt) {}
}
