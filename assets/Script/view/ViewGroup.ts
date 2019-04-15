import ViewCtrl from "./ViewCtrl";

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

@ccclass    // 弹窗层
export default class ViewGroup extends cc.Component {
    // 其Node 可以添加到 PopupCtrl的node上 来展示该弹窗层

    // 半透遮罩层
    private maskLayer: cc.Node = null;
    // 屏蔽操作层
    private blockLayer: cc.Node = null;

    public viewLayer: cc.Node = null ;

    // 用来记录一层的弹窗
    private viewArray: Array<ViewCtrl> = [];

    // 添加窗口
    // @param(窗口, 是否要隐藏前一项)
    public pushView(ctrl: ViewCtrl, hideOld: boolean): void {
        if (hideOld) {
            // 移除前一页
            this.popView(true);
        }
        // 加入新页
        this.insertView(ctrl);

        ctrl.onPlayShowAni();

        console.log("JIa zai ~~~~~~~~~~~~~~");
    }

    // 移除最上层窗口
    // @param(是否清除)
    public popView(cleanup: boolean = true): void {
        var ctrl = this.viewArray.pop();

        this.removeView(ctrl);

        ctrl.onPlayHideAni();
    }


    // 插入窗口
    public insertView(ctrl: ViewCtrl): void {
        // 添加新入窗口
        this.viewArray.push(ctrl);

        // todo 加入节点页面
        this.viewLayer.addChild(ctrl.node);
        // 页面加入事件
        ctrl.onAddToStack();
    }

    // 移除窗口
    public removeView(ctrl: ViewCtrl): void {
        // todo 从节点删除页面
        this.viewLayer.removeChild(ctrl.node);
        
        // 页面移除事件
        ctrl.onRemoveFromStack();
    }


    // 增加多个窗口
    public pushViews(ctrls: Array<ViewCtrl>, hideOld: boolean): void {
        for (let index = 0; index < ctrls.length; index++) {
            this.pushView(ctrls[index], hideOld);
        }
    }

    // 移除所有窗口
    public removeAllViews(cleanup: boolean): void {
        for (let index = 0; index < this.viewArray.length; index++) {
            this.popView(cleanup);
        }
    }


    // 获取最上层
    public lastView(): ViewCtrl {
        if (this.viewArray.length) {
            return this.viewArray[this.viewArray.length - 1];
        }
        return null;
    }

    // 根据名称获取窗口
    public getViewByName(name: string): ViewCtrl {
        var i = 0;
        while (this.viewArray[i]) {
            if (this.viewArray[i].name == name) {
                return this.viewArray[i];
            }
            i++;
        }
    }

    // 获取当前窗口数量
    public getViewCount(): number {
        return this.viewArray.length;
    }

    // 获取当前是否有窗口存在
    public isEmpty(): boolean {
        return this.viewArray.length == 0;
    }

    // 设置最上层页面显隐
    public setLastViewVisible(visible: boolean): void {
        this.setViewVisible(this.lastView(), visible);
    }

    // 隐藏该页面
    public setViewVisible(ctrl: ViewCtrl, visible: boolean): void {
        //todo 设置visible
    }

}
