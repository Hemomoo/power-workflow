import BaseNode from './BaseNode';
import nodeStyle from '../../defaultStyle/nodeStyle';

export default class FlowNode extends BaseNode {
  name = 'strategy-node'
  constructor(Grid) {
    super(Grid, true);
    this.register();
  }
  draw(cfg, group, inc) {
    this.size = this.computeNodeSize(cfg);
    console.log(">>>>>>>>>>", this.size)

    const keyShape = this.drawKeyShape(cfg, group);
    // this.drawAnchor(group);

    this.drawTitleText(cfg, group);

    this.drawIcon(cfg.icon1, group, 6);

    this.drawIcon(cfg.icon2, group, this.size.width - 24);


    this.drawStatusShape(cfg, group);

    this.addShapeApi(cfg, group);

    return keyShape;
  }

  afterDraw(cfg, group) {
    if (cfg.taskStatusValue === 3) {
      this.drawStatusAnimateShape(cfg, group);
    }
    if (cfg.lineDashAnimate) {
      this.drawBorderAnimateShape(cfg, group);
    }
  }

  /** 更改节点内图形的方法 */
  addShapeApi(cfg, group) {

    // 通用的改变属性的方法
    const updateShape = ({ index, ...props }) => {
      const currentShape = group.getChildByIndex(index);
      currentShape.attr(props);
    }

    // 主题边框
    const updateKeyShape = (props) => {
      updateShape({ index: 0, ...props });
      return group;
    }

   

    // 主题文字
    const updateText = (props) => {
      console.log('props: ', props);
      updateShape({ index: 1, ...props });
      return group;
    }

    // 右下角文字
    const updateRightText = (props) => {
      updateShape({ index: 5, ...props });
      return group;
    }

    // 图标
    const updateIcon = (props) => {
      updateShape({ index: 3, ...props });
    }

    // 这样写类的时候是一个类去做的，没有闭包存在，所有所有的组件都是公用的同一个size，
    const size = this.size;

    const textWidthToEllipsis = ({ text, threshold = 4, width = size.width - 40, fontSize = 14 }) => {
      return this.textWidthToEllipsis({ text, threshold, width, fontSize });
    }

    group.updateKeyShape = updateKeyShape;
    group.updateText = updateText;
    group.updateIcon = updateIcon;
    // 添加自动计算宽度的
    group.textWidthToEllipsis = textWidthToEllipsis;
  }


  /** 绘制左上角的文字 */
  drawLeftText(cfg, group) {
    const { leftText, leftTextStyle = {} } = cfg;

    if (!leftText) return;

    const attrs = {
      ...nodeStyle.leftText.origin,
      text: leftText,
      ...leftTextStyle
    }
    return group.addShape('text', {
      attrs: attrs,
      name: 'power-left-text',
      className: 'node-left-text'
    });
  }


  /** 绘制主题文字 */
  drawTitleText(cfg, group) {

    // eslint-disable-next-line prefer-const
    let { titleText, titleTextStyle = {} } = cfg;

    if (!titleText) return;

    const width = this.size.width;
    const height = this.size.height;

    // 可以容纳多少字符
    titleText = this.textWidthToEllipsis({ text: titleText, fontSize: 14, width: this.size.width });
    if(titleText.length > 25) {
      titleText = titleText.slice(0, 24) + '...'
    }
    const attrs = {
      ...nodeStyle.titleText.origin,
      text: titleText,
      x: width / 2,
      y: height / 2,
      fontWeight: 100,
      ...titleTextStyle
    }

    return group.addShape('text', {
      attrs,
      name: 'power-title-text',
      className: 'node-title-text',
      capture: true,
      draggable: true
    })
  }

  /** 判断样式 */
  getStatusStyle(cfg) {
    let { taskStatusValue } = cfg;

    const statusArr = [3, 4, 5, 10]

    const style = {
      3: nodeStyle.statusShape.underway,
      1: nodeStyle.statusShape.waiting,
      5: nodeStyle.statusShape.success,
      4: nodeStyle.statusShape.faild,
      10: nodeStyle.statusShape.stop
    }

    if (!taskStatusValue || statusArr.indexOf(taskStatusValue) < 0) taskStatusValue = 1;

    return style[taskStatusValue]
  }

  /** 
   * 绘制状态点 三种状态：进行中 排队中 已完成
   */
  drawStatusShape(cfg, group) {
    const width = this.size.width;
    // const height = this.size.height;
    const { taskStatus } = cfg;

    if (!taskStatus) return;

    const selfStyle = this.getStatusStyle(cfg);

    // if(!taskStatus || !style[taskStatus]) return;


    this.drawStatusText(cfg, group);

    const attrs = {
      ...selfStyle,
      r: nodeStyle.statusShape.r,
      // x: width - this.getTextWidth1('14px', taskStatus) - 10,
      x: width - this.getTextWidth2(12, taskStatus) - 10,
      y: 12
    };
    group.addShape('circle', {
      attrs,
      name: 'power-status-text',
      className: 'status-text',
      capture: true,
      draggable: true
    });
  }

  /** 绘制状态文字 */
  drawStatusText(cfg, group) {
    const width = this.size.width;

    const { taskStatus, taskStatusStyle = {} } = cfg;

    // const style = {
    //   '进行中': nodeStyle.statusShape.underway,
    //   '排队中': nodeStyle.statusShape.waiting,
    //   '已完成': nodeStyle.statusShape.success
    // }

    const selfStyle = this.getStatusStyle(cfg);

    const attrs = {
      ...selfStyle,
      ...nodeStyle.statusShape.text,
      text: taskStatus,
      // x: width - this.getTextWidth1('14px', taskStatus) / 2 - 4,
      x: width - this.getTextWidth2(12, taskStatus) / 2 - 4,
      y: 12,
      ...taskStatusStyle
    };
    group.addShape('text', {
      attrs,
      name: 'power-status-node',
      className: 'status-node',
      capture: true,
      draggable: true
    });
  }

  /** 绘制图标 */
  drawIcon(icon, group, x = 6) {
    const { height } = this.size;
    // icon = typeof icon === 'string' ? require(icon) : icon;
    group.addShape("image", {
      attrs: {
        img: icon,
        x: x,
        y: height / 2 - 20,
        width: 40,
        height: 40,
        shadowColor: '#E6E6E6',
        shadowBlur: 4,
      },
      name: "image-shape"
    });
  }

  /** 绘制状态动画图形 */
  drawStatusAnimateShape(cfg, group) {
    const { width } = this.size;
    const x = width - 52;
    const y = 12;
    const r = nodeStyle.statusShape.r;

    // const back0 = this.createStatusAnimateShape(cfg, group, 'back0-shaoe', 0, 1);
    const back1 = this.createStatusAnimateShape(cfg, group, 'back1-shaoe', -3, 0.6);
    const back2 = this.createStatusAnimateShape(cfg, group, 'back1-shaoe', -2, 0.6);
    const back3 = this.createStatusAnimateShape(cfg, group, 'back1-shaoe', -1, 0.6);
    this.createStatusAnimate(r, back1, 0);
    this.createStatusAnimate(r, back2, 1000);
    this.createStatusAnimate(r, back3, 2000);
  }

  /** 绘制边框动画 */
  drawBorderAnimateShape(cfg, group) {
    const keyShape = group.getChildByIndex(0);
    let index = 0;
    const lineDash = [6, 2, 1, 2];
    keyShape.animate(() => {
      index++;
      if (index > 9) {
        index = 0;
      }
      return {
        lineDash,
        lineDashOffset: -index
      }
    }, {
      repeat: true, // whether executes the animation repeatly
      duration: 4000, // the duration for executing once
    })
  }

  /** 创建动画 */
  createStatusAnimate(r, shape, delay) {
    shape.animate(
      {
        // Magnifying and disappearing
        r: r + 5,
        opacity: 0.1
      },
      {
        duration: 3000,
        easing: "easeCubic",
        delay,
        repeat: true // repeat
      }
    );
  }

  /** 创建动画图形 */
  createStatusAnimateShape(cfg, group, name, zIndex, opacity) {
    const { width } = this.size;
    // const x = width - this.getTextWidth1('14px', cfg.taskStatus) - 10;
    const x = width - this.getTextWidth2(12, cfg.taskStatus) - 10;
    const y = 12;
    return group.addShape("circle", {
      zIndex: zIndex,
      attrs: {
        x,
        y,
        r: nodeStyle.statusShape.r,
        fill: nodeStyle.statusShape.underway.fill,
        opacity
      },
      name: name
    });
  }
}