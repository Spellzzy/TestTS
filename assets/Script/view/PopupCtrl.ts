import ViewGroup from "./ViewGroup";
import ViewCtrl from "./ViewCtrl";

export enum PopupLayerEnum {
    CONTENT = 0,    // 主页面
    TIPS,           // 提示
    GUIDE,          // 引导
    ALERT,          // 弹窗
    LOADING,        // 加载进度
}
 
const {ccclass, property} = cc._decorator;

@ccclass
export default class PopupCtrl extends cc.Component {
    // 记录各层页面
    private static groupArr: Array<ViewGroup> = [];

    start () {
        console.log("POpupCtrl   Start");
    }

    onLoad(){

        PopupCtrl.groupArr[PopupLayerEnum.CONTENT] = new ViewGroup;
        PopupCtrl.groupArr[PopupLayerEnum.TIPS] = new ViewGroup;
        PopupCtrl.groupArr[PopupLayerEnum.GUIDE] = new ViewGroup;
        PopupCtrl.groupArr[PopupLayerEnum.ALERT] = new ViewGroup;
        PopupCtrl.groupArr[PopupLayerEnum.LOADING] = new ViewGroup;

        for (let index = 0; index < 5; index++) {
            var cur_node = new cc.Node("layer_" + index.toString());
            PopupCtrl.groupArr[index].viewLayer = cur_node;
            this.node.addChild(cur_node);
        }

        console.log("创建 UI各层记录管理 完成 ----->" + this.node.childrenCount.toString());
    }

    // 打开页面
    public static pushView(layer: PopupLayerEnum, ctrl: ViewCtrl, hideold: boolean): void {
        PopupCtrl.groupArr[layer].pushView(ctrl, hideold);
    }

    // 打开多个页面
    public static pushViews(layer: PopupLayerEnum, ctrlS: Array<ViewCtrl>, hideold: boolean): void {
        PopupCtrl.groupArr[layer].pushViews(ctrlS, hideold);
    }

    // 移除当前层最上方页面
    public static popView(layer: PopupLayerEnum, cleanup: boolean): void {
        PopupCtrl.groupArr[layer].popView(cleanup);
    }

}
