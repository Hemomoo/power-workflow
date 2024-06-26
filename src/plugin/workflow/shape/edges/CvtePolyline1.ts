const uniqBy = (arr, key) => {
  const result = [];
  arr.forEach(i => {
    if (!result.find(r => r[key] === i[key]))
      result.push(i)
  });
  return result;
};

const stateList = {
  /** 控制锚点的显示 */
  hoverEdge: function (item, value) {
    const group = item.getContainer();
    const current = group.getChildByIndex(0);
    if (value) {
      current.attr("stroke", '#60A1DE')
    } else {
      current.attr("stroke", '#164979')
    }
  },
  /** 选中锚点 */
  selectEdge: function (item, value) {
    const group = item.getContainer();
    const current = group.getChildByIndex(0);
    if (value) {
      current.attr({
        "opacity": 1,
        "lineWidth": 2
      });
    } else {
      current.attr({
        "opacity": 0.6,
        "lineWidth": 1
      });
    }
  }
}

export default function (G6) {
  G6.registerEdge('cvte-polyline', {
    drawShape(cfg, group) {
      this.group = group;
      this.label = null;

      // 获取到开始的点
      const startPoint = cfg.startPoint;
      // 获取的结束的点
      const endPoint = cfg.endPoint;
      const shape = group.addShape('path', {
        className: 'edge-shape',
        attrs: {
          stroke: '#164979',
          lineWidth: 1,
          lineAppendWidth: 8,
          path: this.computePath(cfg),
          opacity: 0.6,
          endArrow: {
            path: 'M 0,0 L 6,-2 Q 5 0,6 2 Z',
            lineDash: [0, 0],
            fill: '#164979',
          }
        },
        name: 'edge-shape',
      });
      // this.drawText(cfg, group)

      // this.label = this.drawText(cfg, group)

      return shape;
    },

    /** 计算线型 */
    computePath(cfg) {
      const startPoint = cfg.startPoint;
      const endPoint = cfg.endPoint;
      const controlPoints = this.getControlPoints(cfg);
      let points = [startPoint];
      if (controlPoints) {
        points = points.concat(controlPoints);
      }
      points.push(endPoint);
      return this.getPath(points);
    },

    /** 绘制文字 */
    drawLabel(cfg, group) {
      const labelCfg = cfg.labelCfg || {};
      const labelStyle = this.getLabelStyle(cfg, labelCfg, group);
      const label = group.addShape('text', {
        attrs: {
          ...labelStyle,
        }
      });
      const labelBBox = label.getBBox();
      group.addShape('rect', {
        attrs: {
          x: labelBBox.x - 4 / 2,
          y: labelBBox.y - 4 / 2,
          width: labelBBox.width + 4,
          height: labelBBox.height + 4,
          fill: '#fff',
          stroke: '#fff',
        },
        name: 'edge-labelRect',
        className: 'edge-labelRect',
      });
      group.toBack();
      label.toFront();
      return label;
    },

    afterUpdate(cfg, item){
      const label = item.getContainer().findByClassName('edge-label');
      const labelRect = item.getContainer().findByClassName('edge-labelRect');
      if(label) {
        const labelBBox = label.getBBox();
        labelRect.attr({
          x: labelBBox.x - 4 / 2,
          y: labelBBox.y - 4 / 2,
          width: labelBBox.width + 4,
          height: labelBBox.height + 4,
        });
      }
    },

    /** 计算终点的位置 */
    getControlPoints(cfg) {
      if (!cfg.sourceNode) {
        return cfg.controlPoints;
      }

      let obj = {
        sNode: cfg.sourceNode,
        tNode: cfg.targetNode,
        sPort: cfg.startPoint,
        tPort: cfg.endPoint,
        offset: 15
      }
      return this.polylineFinding(obj);
    },

    /** 计算折线 */
    polylineFinding({ sNode, tNode, sPort, tPort, offset }) {
      const sourceBBox = sNode && sNode.getBBox() ? sNode.getBBox() : this.getPointBBox(sPort);
      const targetBBox = tNode && tNode.getBBox() ? tNode.getBBox() : this.getPointBBox(tPort);
      const sBBox = this.getExpandedBBox(sourceBBox, offset);
      const tBBox = this.getExpandedBBox(targetBBox, offset);
      const sPoint = this.getExpandedPort(sBBox, sPort);
      const tPoint = this.getExpandedPort(tBBox, tPort);
      let points = this.getConnectablePoints(sBBox, tBBox, sPoint, tPoint);
      points = this.filterConnectablePoints(points, sBBox);
      points = this.filterConnectablePoints(points, tBBox);
      const polylinePoints = this.AStar(points, sPoint, tPoint, sBBox, tBBox);
      return polylinePoints;
    },

    getPointBBox(t) {
      return { centerX: t.x, centerY: t.y, minX: t.x, minY: t.y, maxX: t.x, maxY: t.y, height: 0, width: 0 };
    },

    /** 获取扩大后的盒子位置 */
    getExpandedBBox(bbox, offset) {
      return 0 === bbox.width && 0 === bbox.height ? bbox : {
        centerX: bbox.centerX,
        centerY: bbox.centerY,
        minX: bbox.minX - offset,
        minY: bbox.minY - offset,
        maxX: bbox.maxX + offset,
        maxY: bbox.maxY + offset,
        height: bbox.height + 2 * offset,
        width: bbox.width + 2 * offset,
      };
    },

    /** 获取扩大后的连接点位置 */
    getExpandedPort(bbox, point) {
      return Math.abs(point.x - bbox.centerX) / bbox.width > Math.abs(point.y - bbox.centerY) / bbox.height
        ? { x: point.x > bbox.centerX ? bbox.maxX : bbox.minX, y: point.y }
        : { x: point.x, y: point.y > bbox.centerY ? bbox.maxY : bbox.minY };
    },

    /**  */
    getConnectablePoints(sBBox, tBBox, sPoint, tPoint) {
      const lineBBox = this.getBBoxFromVertexes(sPoint, tPoint);
      const outerBBox = this.combineBBoxes(sBBox, tBBox);
      const sLineBBox = this.combineBBoxes(sBBox, lineBBox);
      const tLineBBox = this.combineBBoxes(tBBox, lineBBox);
      let points = [];
      points = points.concat(this.vertexOfBBox(sLineBBox), this.vertexOfBBox(tLineBBox), this.vertexOfBBox(outerBBox));
      const centerPoint = { x: outerBBox.centerX, y: outerBBox.centerY };
      [outerBBox, sLineBBox, tLineBBox, lineBBox].forEach(bbox => {
        points = points.concat(this.crossPointsByLineAndBBox(bbox, centerPoint))
      });
      points.push({ x: sPoint.x, y: tPoint.y });
      points.push({ x: tPoint.x, y: sPoint.y });
      return points
    },

    combineBBoxes(sBBox, tBBox) {
      const minX = Math.min(sBBox.minX, tBBox.minX), minY = Math.min(sBBox.minY, tBBox.minY),
        maxX = Math.max(sBBox.maxX, tBBox.maxX), maxY = Math.max(sBBox.maxY, tBBox.maxY);
      return {
        centerX: (minX + maxX) / 2,
        centerY: (minY + maxY) / 2,
        minX: minX,
        minY: minY,
        maxX: maxX,
        maxY: maxY,
        height: maxY - minY,
        width: maxX - minX,
      };
    },

    vertexOfBBox(bbox) {
      return [{ x: bbox.minX, y: bbox.minY }, { x: bbox.maxX, y: bbox.minY }, { x: bbox.maxX, y: bbox.maxY }, { x: bbox.minX, y: bbox.maxY }];
    },

    crossPointsByLineAndBBox(bbox, centerPoint) {
      let crossPoints = [];
      if (!(centerPoint.x < bbox.minX || centerPoint.x > bbox.maxX))
        crossPoints = crossPoints.concat([{ x: centerPoint.x, y: bbox.minY }, { x: centerPoint.x, y: bbox.maxY }]);
      if (!(centerPoint.y < bbox.minY || centerPoint.y > bbox.maxY))
        crossPoints = crossPoints.concat([{ x: bbox.minX, y: centerPoint.y }, { x: bbox.maxX, y: centerPoint.y }]);
      return crossPoints;
    },

    getBBoxFromVertexes(sPoint, tPoint) {
      const minX = Math.min(sPoint.x, tPoint.x), maxX = Math.max(sPoint.x, tPoint.x),
        minY = Math.min(sPoint.y, tPoint.y), maxY = Math.max(sPoint.y, tPoint.y);
      return {
        centerX: (minX + maxX) / 2,
        centerY: (minY + maxY) / 2,
        maxX: maxX,
        maxY: maxY,
        minX: minX,
        minY: minY,
        height: maxY - minY,
        width: maxX - minX,
      };
    },

    /**  */
    filterConnectablePoints(points, bbox) {
      return points.filter(point => point.x <= bbox.minX || point.x >= bbox.maxX || point.y <= bbox.minY || point.y >= bbox.maxY)
    },

    AStar(points, sPoint, tPoint, sBBox, tBBox) {
      const openList = [sPoint];
      const closeList = [];
      points = uniqBy(this.fillId(points), 'id');
      points.push(tPoint);
      let endPoint;
      while (openList.length > 0) {
        let minCostPoint;
        openList.forEach((p, i) => {
          if (!p.parent)
            p.f = 0;
          if (!minCostPoint)
            minCostPoint = p;
          if (p.f < minCostPoint.f)
            minCostPoint = p;
        });
        if (minCostPoint.x === tPoint.x && minCostPoint.y === tPoint.y) {
          endPoint = minCostPoint;
          break;
        }
        const index = openList.findIndex(o => o.x === minCostPoint.x && o.y === minCostPoint.y);
        openList.splice(index === -1 ? 0 : index , 1);
        closeList.push(minCostPoint);
        const neighbor = points.filter(p => (p.x === minCostPoint.x || p.y === minCostPoint.y)
          && !(p.x === minCostPoint.x && p.y === minCostPoint.y)
          && !this.crossBBox([sBBox, tBBox], minCostPoint, p));
        neighbor.forEach(p => {
          const inOpen = openList.find(o => o.x === p.x && o.y === p.y);
          const currentG = this.getCost(p, minCostPoint);
          if (closeList.find(o => o.x === p.x && o.y === p.y)) {

          } else if (inOpen) {
            if (p.g > currentG) {
              p.parent = minCostPoint;
              p.g = currentG;
              p.f = p.g + p.h;
            }
          } else {
            p.parent = minCostPoint;
            p.g = currentG;
            let h = this.getCost(p, tPoint);
            if (this.crossBBox([tBBox], p, tPoint)) {
              h += (tBBox.width / 2 + tBBox.height / 2); //如果穿过bbox则增加该点的预估代价为bbox周长的一半
            }
            p.h = h;
            p.f = p.g + p.h;
            openList.push(p)
          }
        });
      }
      if (endPoint) {
        const result = [];
        result.push({ x: endPoint.x, y: endPoint.y });
        while (endPoint.parent) {
          endPoint = endPoint.parent;
          result.push({ x: endPoint.x, y: endPoint.y });
        }
        return result.reverse();
      }
      return [];
    },

    fillId(points) {
      points.forEach(p => {
        p.id = p.x + '-' + p.y;
      });
      return points;
    },

    crossBBox(bboxes, p1, p2) {
      for (let i = 0; i < bboxes.length; i++) {
        const bbox = bboxes[i];
        if (p1.x === p2.x && bbox.minX < p1.x && bbox.maxX > p1.x) {
          if (p1.y < bbox.maxY && p2.y >= bbox.maxY || p2.y < bbox.maxY && p1.y >= bbox.maxY)
            return true
        } else if (p1.y === p2.y && bbox.minY < p1.y && bbox.maxY > p1.y) {
          if (p1.x < bbox.maxX && p2.x >= bbox.maxX || p2.x < bbox.maxX && p1.x >= bbox.maxX)
            return true
        }
      }
      return false;
    },

    getCost(p1, p2) {
      return Math.abs(p1.x - p2.x) + Math.abs(p1.y - p2.y);
    },

    /** 获取画的线型 */
    getPath(points) {
      const path = [];
      for (let i = 0; i < points.length; i++) {
        const point = points[i];
        if (i === 0) {
          path.push(['M', point.x, point.y]);
        } else if (i === points.length - 1) {
          path.push(['L', point.x, point.y]);
        } else {
          const prevPoint = points[i - 1];
          let nextPoint = points[i + 1];
          let cornerLen = 5;
          if (Math.abs(point.y - prevPoint.y) > cornerLen || Math.abs(point.x - prevPoint.x) > cornerLen) {
            if (prevPoint.x === point.x) {
              path.push(['L', point.x, point.y > prevPoint.y ? point.y - cornerLen : point.y + cornerLen]);
            } else if (prevPoint.y === point.y) {
              path.push(['L', point.x > prevPoint.x ? point.x - cornerLen : point.x + cornerLen, point.y]);
            }
          }
          const yLen = Math.abs(point.y - nextPoint.y);
          const xLen = Math.abs(point.x - nextPoint.x);
          if (yLen > 0 && yLen < cornerLen) {
            cornerLen = yLen;
          } else if (xLen > 0 && xLen < cornerLen) {
            cornerLen = xLen;
          }
          if (prevPoint.x !== nextPoint.x && nextPoint.x === point.x) {
            path.push(['Q', point.x, point.y, point.x, point.y > nextPoint.y ? point.y - cornerLen : point.y + cornerLen]);
          } else if (prevPoint.y !== nextPoint.y && nextPoint.y === point.y) {
            path.push(['Q', point.x, point.y, point.x > nextPoint.x ? point.x - cornerLen : point.x + cornerLen, point.y]);
          }
        }
      }
      return path;
    },

    setState(name, value, item) {
      stateList[name] && stateList[name].call(this, item, value);
    }
  }, 'polyline')
}