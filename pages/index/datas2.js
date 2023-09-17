export default {
  "version": "5.8.4",
  "platform": "html5",
  "images": {},
  "dataBox": {
    "class": "b2.ElementBox",
    "layers": [{
      "id": "bottom",
      "name": "Default",
      "visible": true,
      "editable": true,
      "movable": true
    }, {
      "id": "center",
      "name": "Default",
      "visible": true,
      "editable": true,
      "movable": true
    }, {
      "id": "top",
      "name": "Default",
      "visible": true,
      "editable": true,
      "movable": true
    }, {
      "name": "Default",
      "visible": true,
      "editable": true,
      "movable": true
    }]
  },
  "datas": [{
    "class": "b2.ShapeNode",
    "ref": 0,
    "p": {
      "name": "岳池",
      "layerId": "bottom",
      "location": {
        "x": 422.47560999999996,
        "y": -21.038700000000034
      },
      "width": 844.7997354545457,
      "height": 470.2205363636365,
      "points": [{
        "x": 425.67965450867683,
        "y": 195.19410139349725
      }, {
        "x": 422.47560999999996,
        "y": -16.46234441495248
      }, {
        "x": 589.0859244512123,
        "y": -18.75052220747626
      }, {
        "x": 1094.2569419859783,
        "y": -17.606433311214367
      }, {
        "x": 1267.2753454545445,
        "y": -21.038700000000034
      }, {
        "x": 1267.2753454545445,
        "y": 178.03276794956847
      }, {
        "x": 1264.0713009458682,
        "y": 212.35543483742558
      }, {
        "x": 846.4774999816111,
        "y": 449.18183636363756
      }, {
        "x": 426.74766934490293,
        "y": 224.94041269630608
      }],
      "segments": ["moveto", "quadto", "lineto", "quadto", "lineto", "quadto"]
    },
    "s": {
      "shapenode.closed": true,
      "vector.fill.color": "rgba(255,255,255,0.4)",
      "vector.outline.width": 2,
      "vector.outline.color": "#000000",
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.yoffset": -256.9999999999999,
      "vector.fill": true
    },
    "c": {
      "movable": false
    }
  }, {
    "class": "b2.ShapeNode",
    "ref": 1,
    "p": {
      "name": "池座低区",
      "layerId": "bottom",
      "location": {
        "x": 298.060048013182,
        "y": 256.3905406609521
      },
      "width": 1101.0563300000001,
      "height": 794.7723299999996,
      "points": [{
        "x": 379.4163780131821,
        "y": 280.5905406609521
      }, {
        "x": 840.3163780131822,
        "y": 520.3905406609522
      }, {
        "x": 1329.8163780131815,
        "y": 256.3905406609521
      }, {
        "x": 1398.5117799999996,
        "y": 536.7738700000002
      }, {
        "x": 1399.1163780131812,
        "y": 536.8905406609522
      }, {
        "x": 1324.3163780131815,
        "y": 660.0905406609522
      }, {
        "x": 1226.4163780131814,
        "y": 815.1905406609527
      }, {
        "x": 868.1805880131823,
        "y": 1051.1628706609522
      }, {
        "x": 486.96421801318206,
        "y": 838.5647306609527
      }, {
        "x": 385.96421801318206,
        "y": 720.564730660952
      }, {
        "x": 385.96421801318206,
        "y": 721.564730660952
      }, {
        "x": 298.060048013182,
        "y": 606.6621106609521
      }, {
        "x": 349.596368013182,
        "y": 387.63275066095196
      }],
      "segments": ["moveto", "quadto", "lineto", "quadto", "lineto", "quadto", "lineto", "quadto", "lineto"]
    },
    "s": {
      "shapenode.closed": true,
      "vector.fill.color": "#F536E8",
      "vector.outline.width": 2,
      "vector.outline.color": "#000000",
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "vector.fill": false,
      "label.yoffset": -276.8
    },
    "c": {
      "movable": false
    }
  }, {
    "class": "b2.Group",
    "ref": 2,
    "p": {
      "name": "岳池1排",
      "layerId": "center",
      "location": {
        "x": 874.31485,
        "y": 39.09067924140094
      },
      "expanded": true
    },
    "s": {
      "group.fill": false,
      "group.fill.color": "#f5f3f3",
      "group.shape": "roundrect",
      "group.outline.width": 0,
      "group.outline.color": "#000000",
      "group.padding": 0,
      "vector.outline.pattern": [2, 2],
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "label.position": "left.left",
      "vector.fill.color": "#4242a0"
    },
    "c": {
      "movable": true,
      "row.number": 1,
      "row.name": "1排",
      "business.region": "岳池",
      "business.tier": "1层",
      "business.row": "1排"
    }
  }, {
    "class": "b2.Seat",
    "ref": 3,
    "p": {
      "name": "岳池1排",
      "angle": 6,
      "parent": 2,
      "layerId": "center",
      "location": {
        "x": 556.4556,
        "y": 38.2096426162719
      },
      "width": 120,
      "height": 20
    },
    "s": {
      "grid.border": 1,
      "grid.deep": 1,
      "grid.deep.color": "rgba(0,0,0,0.2)",
      "grid.padding": 2,
      "grid.column.count": 6,
      "grid.row.count": 1,
      "grid.fill": false,
      "grid.fill.color": "rgba(0,0,0,0.4)",
      "label.position": "left.left",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "shadow.blur": 0,
      "select.padding": 0,
      "select.width": 2,
      "select.style": "border"
    },
    "c": {
      "movable": true,
      "business.region": "岳池",
      "business.tier": "1层",
      "business.row": "1排"
    }
  }, {
    "class": "b2.Follower",
    "ref": 4,
    "p": {
      "name": 8,
      "angle": 6,
      "parent": 3,
      "layerId": "top",
      "location": {
        "x": 657.5195931889401,
        "y": 46.348958726931556
      },
      "width": 15.666666666666668,
      "height": 14,
      "host": 3
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 6,
      "follower.column.index": 5
    },
    "c": {
      "column.number": 8,
      "column.name": "8号",
      "row.column.name": "1排8号",
      "seat.stats": "未售",
      "seat.price": 100,
      "business.region": "岳池",
      "business.tier": "1层",
      "business.row": "1排",
      "business.seat": "8号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 5,
    "p": {
      "name": 10,
      "angle": 6,
      "parent": 3,
      "layerId": "top",
      "location": {
        "x": 637.9606625800307,
        "y": 44.29323228266769
      },
      "width": 15.666666666666668,
      "height": 14,
      "host": 3
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 6,
      "follower.column.index": 4
    },
    "c": {
      "column.number": 10,
      "column.name": "10号",
      "row.column.name": "1排10号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "岳池",
      "business.tier": "1层",
      "business.row": "1排",
      "business.seat": "10号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 6,
    "p": {
      "name": 12,
      "angle": 6,
      "parent": 3,
      "layerId": "top",
      "location": {
        "x": 618.4017319711213,
        "y": 42.23750583840385
      },
      "width": 15.666666666666668,
      "height": 14,
      "host": 3
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 6,
      "follower.column.index": 3
    },
    "c": {
      "column.number": 12,
      "column.name": "12号",
      "row.column.name": "1排12号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "岳池",
      "business.tier": "1层",
      "business.row": "1排",
      "business.seat": "12号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 7,
    "p": {
      "name": 14,
      "angle": 6,
      "parent": 3,
      "layerId": "top",
      "location": {
        "x": 598.8428013622121,
        "y": 40.181779394139994
      },
      "width": 15.666666666666668,
      "height": 14,
      "host": 3
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 6,
      "follower.column.index": 2
    },
    "c": {
      "column.number": 14,
      "column.name": "14号",
      "row.column.name": "1排14号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "岳池",
      "business.tier": "1层",
      "business.row": "1排",
      "business.seat": "14号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 8,
    "p": {
      "name": 16,
      "angle": 6,
      "parent": 3,
      "layerId": "top",
      "location": {
        "x": 579.2838707533026,
        "y": 38.12605294987614
      },
      "width": 15.666666666666668,
      "height": 14,
      "host": 3
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 6,
      "follower.column.index": 1
    },
    "c": {
      "column.number": 16,
      "column.name": "16号",
      "row.column.name": "1排16号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "岳池",
      "business.tier": "1层",
      "business.row": "1排",
      "business.seat": "16号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 9,
    "p": {
      "name": 18,
      "angle": 6,
      "parent": 3,
      "layerId": "top",
      "location": {
        "x": 559.7249401443933,
        "y": 36.070326505612286
      },
      "width": 15.666666666666668,
      "height": 14,
      "host": 3
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 6,
      "follower.column.index": 0
    },
    "c": {
      "column.number": 18,
      "column.name": "18号",
      "row.column.name": "1排18号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "岳池",
      "business.tier": "1层",
      "business.row": "1排",
      "business.seat": "18号"
    }
  }, {
    "class": "b2.Seat",
    "ref": 10,
    "p": {
      "name": "岳池1排",
      "parent": 2,
      "layerId": "center",
      "location": {
        "x": 805.9794,
        "y": 50.18864261627191
      },
      "width": 160,
      "height": 20
    },
    "s": {
      "grid.border": 1,
      "grid.deep": 1,
      "grid.deep.color": "rgba(0,0,0,0.2)",
      "grid.padding": 2,
      "grid.column.count": 8,
      "grid.row.count": 1,
      "grid.fill": false,
      "grid.fill.color": "rgba(0,0,0,0.4)",
      "label.position": "left.left",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "shadow.blur": 0,
      "select.padding": 0,
      "select.width": 2,
      "select.style": "border"
    },
    "c": {
      "movable": true,
      "business.region": "岳池",
      "business.tier": "1层",
      "business.row": "1排"
    }
  }, {
    "class": "b2.Follower",
    "ref": 11,
    "p": {
      "name": 1,
      "parent": 10,
      "layerId": "top",
      "location": {
        "x": 868.2294,
        "y": 53.18864261627191
      },
      "width": 15.75,
      "height": 14,
      "host": 10
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 0,
      "follower.column.index": 3
    },
    "c": {
      "column.number": 1,
      "column.name": "1号",
      "row.column.name": "1排1号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "岳池",
      "business.tier": "1层",
      "business.row": "1排",
      "business.seat": "1号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 12,
    "p": {
      "name": 2,
      "parent": 10,
      "layerId": "top",
      "location": {
        "x": 848.4794,
        "y": 53.18864261627191
      },
      "width": 15.75,
      "height": 14,
      "host": 10
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 0,
      "follower.column.index": 2
    },
    "c": {
      "column.number": 2,
      "column.name": "2号",
      "row.column.name": "1排2号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "岳池",
      "business.tier": "1层",
      "business.row": "1排",
      "business.seat": "2号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 13,
    "p": {
      "name": 4,
      "parent": 10,
      "layerId": "top",
      "location": {
        "x": 828.7294,
        "y": 53.18864261627191
      },
      "width": 15.75,
      "height": 14,
      "host": 10
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 0,
      "follower.column.index": 1
    },
    "c": {
      "column.number": 4,
      "column.name": "4号",
      "row.column.name": "1排4号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "岳池",
      "business.tier": "1层",
      "business.row": "1排",
      "business.seat": "4号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 14,
    "p": {
      "name": 6,
      "parent": 10,
      "layerId": "top",
      "location": {
        "x": 808.9794,
        "y": 53.18864261627191
      },
      "width": 15.75,
      "height": 14,
      "host": 10
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 0,
      "follower.column.index": 0
    },
    "c": {
      "column.number": 6,
      "column.name": "6号",
      "row.column.name": "1排6号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "岳池",
      "business.tier": "1层",
      "business.row": "1排",
      "business.seat": "6号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 15,
    "p": {
      "name": 3,
      "parent": 10,
      "layerId": "top",
      "location": {
        "x": 887.9794,
        "y": 53.18864261627191
      },
      "width": 15.75,
      "height": 14,
      "host": 10
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 0,
      "follower.column.index": 4
    },
    "c": {
      "column.number": 3,
      "column.name": "3号",
      "row.column.name": "1排3号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "岳池",
      "business.tier": "1层",
      "business.row": "1排",
      "business.seat": "3号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 16,
    "p": {
      "name": 5,
      "parent": 10,
      "layerId": "top",
      "location": {
        "x": 907.7294,
        "y": 53.18864261627191
      },
      "width": 15.75,
      "height": 14,
      "host": 10
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 0,
      "follower.column.index": 5
    },
    "c": {
      "column.number": 5,
      "column.name": "5号",
      "row.column.name": "1排5号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "岳池",
      "business.tier": "1层",
      "business.row": "1排",
      "business.seat": "5号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 17,
    "p": {
      "name": 7,
      "parent": 10,
      "layerId": "top",
      "location": {
        "x": 927.4794,
        "y": 53.18864261627191
      },
      "width": 15.75,
      "height": 14,
      "host": 10
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 0,
      "follower.column.index": 6
    },
    "c": {
      "column.number": 7,
      "column.name": "7号",
      "row.column.name": "1排7号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "岳池",
      "business.tier": "1层",
      "business.row": "1排",
      "business.seat": "7号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 18,
    "p": {
      "name": 9,
      "parent": 10,
      "layerId": "top",
      "location": {
        "x": 947.2294,
        "y": 53.18864261627191
      },
      "width": 15.75,
      "height": 14,
      "host": 10
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 0,
      "follower.column.index": 7
    },
    "c": {
      "column.number": 9,
      "column.name": "9号",
      "row.column.name": "1排9号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "岳池",
      "business.tier": "1层",
      "business.row": "1排",
      "business.seat": "9号"
    }
  }, {
    "class": "b2.Seat",
    "ref": 19,
    "p": {
      "name": "岳池1排",
      "angle": -6,
      "parent": 2,
      "layerId": "center",
      "location": {
        "x": 1104.1741,
        "y": 38.2096426162719
      },
      "width": 120,
      "height": 20
    },
    "s": {
      "grid.border": 1,
      "grid.deep": 1,
      "grid.deep.color": "rgba(0,0,0,0.2)",
      "grid.padding": 2,
      "grid.column.count": 6,
      "grid.row.count": 1,
      "grid.fill": false,
      "grid.fill.color": "rgba(0,0,0,0.4)",
      "label.position": "left.left",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "shadow.blur": 0,
      "select.padding": 0,
      "select.width": 2,
      "select.style": "border"
    },
    "c": {
      "movable": true,
      "business.region": "岳池",
      "business.tier": "1层",
      "business.row": "1排"
    }
  }, {
    "class": "b2.Follower",
    "ref": 20,
    "p": {
      "name": 11,
      "angle": -6,
      "parent": 19,
      "layerId": "top",
      "location": {
        "x": 1107.443440144393,
        "y": 46.34895872693154
      },
      "width": 15.666666666666668,
      "height": 14,
      "host": 19
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": -6,
      "follower.column.index": 0
    },
    "c": {
      "column.number": 11,
      "column.name": "11号",
      "row.column.name": "1排11号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "岳池",
      "business.tier": "1层",
      "business.row": "1排",
      "business.seat": "11号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 21,
    "p": {
      "name": 13,
      "angle": -6,
      "parent": 19,
      "layerId": "top",
      "location": {
        "x": 1127.0023707533026,
        "y": 44.293232282667674
      },
      "width": 15.666666666666668,
      "height": 14,
      "host": 19
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": -6,
      "follower.column.index": 1
    },
    "c": {
      "column.number": 13,
      "column.name": "13号",
      "row.column.name": "1排13号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "岳池",
      "business.tier": "1层",
      "business.row": "1排",
      "business.seat": "13号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 22,
    "p": {
      "name": 15,
      "angle": -6,
      "parent": 19,
      "layerId": "top",
      "location": {
        "x": 1146.5613013622117,
        "y": 42.23750583840385
      },
      "width": 15.666666666666668,
      "height": 14,
      "host": 19
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": -6,
      "follower.column.index": 2
    },
    "c": {
      "column.number": 15,
      "column.name": "15号",
      "row.column.name": "1排15号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "岳池",
      "business.tier": "1层",
      "business.row": "1排",
      "business.seat": "15号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 23,
    "p": {
      "name": 17,
      "angle": -6,
      "parent": 19,
      "layerId": "top",
      "location": {
        "x": 1166.1202319711213,
        "y": 40.18177939413998
      },
      "width": 15.666666666666668,
      "height": 14,
      "host": 19
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": -6,
      "follower.column.index": 3
    },
    "c": {
      "column.number": 17,
      "column.name": "17号",
      "row.column.name": "1排17号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "岳池",
      "business.tier": "1层",
      "business.row": "1排",
      "business.seat": "17号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 24,
    "p": {
      "name": 19,
      "angle": -6,
      "parent": 19,
      "layerId": "top",
      "location": {
        "x": 1185.6791625800306,
        "y": 38.126052949876126
      },
      "width": 15.666666666666668,
      "height": 14,
      "host": 19
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": -6,
      "follower.column.index": 4
    },
    "c": {
      "column.number": 19,
      "column.name": "19号",
      "row.column.name": "1排19号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "岳池",
      "business.tier": "1层",
      "business.row": "1排",
      "business.seat": "19号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 25,
    "p": {
      "name": 21,
      "angle": -6,
      "parent": 19,
      "layerId": "top",
      "location": {
        "x": 1205.23809318894,
        "y": 36.070326505612286
      },
      "width": 15.666666666666668,
      "height": 14,
      "host": 19
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": -6,
      "follower.column.index": 5
    },
    "c": {
      "column.number": 21,
      "column.name": "21号",
      "row.column.name": "1排21号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "岳池",
      "business.tier": "1层",
      "business.row": "1排",
      "business.seat": "21号"
    }
  }, {
    "class": "b2.Group",
    "ref": 26,
    "p": {
      "name": "岳池2排",
      "layerId": "center",
      "location": {
        "x": 874.31485,
        "y": 91.19192924140107
      },
      "expanded": true
    },
    "s": {
      "group.fill": false,
      "group.fill.color": "#FFFFFF",
      "group.shape": "roundrect",
      "group.outline.width": 0,
      "group.outline.color": "#000000",
      "group.padding": 0,
      "vector.outline.pattern": [2, 2],
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "label.position": "left.left"
    },
    "c": {
      "movable": true,
      "row.number": 1,
      "row.name": "1排",
      "business.region": "岳池",
      "business.tier": "1层",
      "business.row": "2排"
    }
  }, {
    "class": "b2.Seat",
    "ref": 27,
    "p": {
      "name": "岳池2排",
      "angle": 6,
      "parent": 26,
      "layerId": "center",
      "location": {
        "x": 556.4556,
        "y": 90.31089261627204
      },
      "width": 120,
      "height": 20
    },
    "s": {
      "grid.border": 1,
      "grid.deep": 1,
      "grid.deep.color": "rgba(0,0,0,0.2)",
      "grid.padding": 2,
      "grid.column.count": 6,
      "grid.row.count": 1,
      "grid.fill": false,
      "grid.fill.color": "rgba(0,0,0,0.4)",
      "label.position": "left.left",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "shadow.blur": 0,
      "select.padding": 0,
      "select.width": 2,
      "select.style": "border"
    },
    "c": {
      "movable": true,
      "business.region": "岳池",
      "business.tier": "1层",
      "business.row": "2排"
    }
  }, {
    "class": "b2.Follower",
    "ref": 28,
    "p": {
      "name": 8,
      "angle": 6,
      "parent": 27,
      "layerId": "top",
      "location": {
        "x": 657.5195931889401,
        "y": 98.45020872693169
      },
      "width": 15.666666666666668,
      "height": 14,
      "host": 27
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 6,
      "follower.column.index": 5
    },
    "c": {
      "column.number": 8,
      "column.name": "8号",
      "row.column.name": "1排8号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "岳池",
      "business.tier": "1层",
      "business.row": "2排",
      "business.seat": "8号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 29,
    "p": {
      "name": 10,
      "angle": 6,
      "parent": 27,
      "layerId": "top",
      "location": {
        "x": 637.9606625800307,
        "y": 96.39448228266784
      },
      "width": 15.666666666666668,
      "height": 14,
      "host": 27
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 6,
      "follower.column.index": 4
    },
    "c": {
      "column.number": 10,
      "column.name": "10号",
      "row.column.name": "1排10号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "岳池",
      "business.tier": "1层",
      "business.row": "2排",
      "business.seat": "10号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 30,
    "p": {
      "name": 12,
      "angle": 6,
      "parent": 27,
      "layerId": "top",
      "location": {
        "x": 618.4017319711213,
        "y": 94.33875583840398
      },
      "width": 15.666666666666668,
      "height": 14,
      "host": 27
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 6,
      "follower.column.index": 3
    },
    "c": {
      "column.number": 12,
      "column.name": "12号",
      "row.column.name": "1排12号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "岳池",
      "business.tier": "1层",
      "business.row": "2排",
      "business.seat": "12号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 31,
    "p": {
      "name": 14,
      "angle": 6,
      "parent": 27,
      "layerId": "top",
      "location": {
        "x": 598.8428013622121,
        "y": 92.28302939414016
      },
      "width": 15.666666666666668,
      "height": 14,
      "host": 27
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 6,
      "follower.column.index": 2
    },
    "c": {
      "column.number": 14,
      "column.name": "14号",
      "row.column.name": "1排14号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "岳池",
      "business.tier": "1层",
      "business.row": "2排",
      "business.seat": "14号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 32,
    "p": {
      "name": 16,
      "angle": 6,
      "parent": 27,
      "layerId": "top",
      "location": {
        "x": 579.2838707533026,
        "y": 90.22730294987628
      },
      "width": 15.666666666666668,
      "height": 14,
      "host": 27
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 6,
      "follower.column.index": 1
    },
    "c": {
      "column.number": 16,
      "column.name": "16号",
      "row.column.name": "1排16号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "岳池",
      "business.tier": "1层",
      "business.row": "2排",
      "business.seat": "16号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 33,
    "p": {
      "name": 18,
      "angle": 6,
      "parent": 27,
      "layerId": "top",
      "location": {
        "x": 559.7249401443933,
        "y": 88.17157650561245
      },
      "width": 15.666666666666668,
      "height": 14,
      "host": 27
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 6,
      "follower.column.index": 0
    },
    "c": {
      "column.number": 18,
      "column.name": "18号",
      "row.column.name": "1排18号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "岳池",
      "business.tier": "1层",
      "business.row": "2排",
      "business.seat": "18号"
    }
  }, {
    "class": "b2.Seat",
    "ref": 34,
    "p": {
      "name": "岳池2排",
      "parent": 26,
      "layerId": "center",
      "location": {
        "x": 805.9794,
        "y": 102.28989261627206
      },
      "width": 160,
      "height": 20
    },
    "s": {
      "grid.border": 1,
      "grid.deep": 1,
      "grid.deep.color": "rgba(0,0,0,0.2)",
      "grid.padding": 2,
      "grid.column.count": 8,
      "grid.row.count": 1,
      "grid.fill": false,
      "grid.fill.color": "rgba(0,0,0,0.4)",
      "label.position": "left.left",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "shadow.blur": 0,
      "select.padding": 0,
      "select.width": 2,
      "select.style": "border"
    },
    "c": {
      "movable": true,
      "business.region": "岳池",
      "business.tier": "1层",
      "business.row": "2排"
    }
  }, {
    "class": "b2.Follower",
    "ref": 35,
    "p": {
      "name": 1,
      "parent": 34,
      "layerId": "top",
      "location": {
        "x": 868.2294,
        "y": 105.28989261627206
      },
      "width": 15.75,
      "height": 14,
      "host": 34
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 0,
      "follower.column.index": 3
    },
    "c": {
      "column.number": 1,
      "column.name": "1号",
      "row.column.name": "1排1号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "岳池",
      "business.tier": "1层",
      "business.row": "2排",
      "business.seat": "1号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 36,
    "p": {
      "name": 2,
      "parent": 34,
      "layerId": "top",
      "location": {
        "x": 848.4794,
        "y": 105.28989261627206
      },
      "width": 15.75,
      "height": 14,
      "host": 34
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 0,
      "follower.column.index": 2
    },
    "c": {
      "column.number": 2,
      "column.name": "2号",
      "row.column.name": "1排2号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "岳池",
      "business.tier": "1层",
      "business.row": "2排",
      "business.seat": "2号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 37,
    "p": {
      "name": 4,
      "parent": 34,
      "layerId": "top",
      "location": {
        "x": 828.7294,
        "y": 105.28989261627206
      },
      "width": 15.75,
      "height": 14,
      "host": 34
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 0,
      "follower.column.index": 1
    },
    "c": {
      "column.number": 4,
      "column.name": "4号",
      "row.column.name": "1排4号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "岳池",
      "business.tier": "1层",
      "business.row": "2排",
      "business.seat": "4号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 38,
    "p": {
      "name": 6,
      "parent": 34,
      "layerId": "top",
      "location": {
        "x": 808.9794,
        "y": 105.28989261627206
      },
      "width": 15.75,
      "height": 14,
      "host": 34
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 0,
      "follower.column.index": 0
    },
    "c": {
      "column.number": 6,
      "column.name": "6号",
      "row.column.name": "1排6号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "岳池",
      "business.tier": "1层",
      "business.row": "2排",
      "business.seat": "6号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 39,
    "p": {
      "name": 3,
      "parent": 34,
      "layerId": "top",
      "location": {
        "x": 887.9794,
        "y": 105.28989261627206
      },
      "width": 15.75,
      "height": 14,
      "host": 34
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 0,
      "follower.column.index": 4
    },
    "c": {
      "column.number": 3,
      "column.name": "3号",
      "row.column.name": "1排3号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "岳池",
      "business.tier": "1层",
      "business.row": "2排",
      "business.seat": "3号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 40,
    "p": {
      "name": 5,
      "parent": 34,
      "layerId": "top",
      "location": {
        "x": 907.7294,
        "y": 105.28989261627206
      },
      "width": 15.75,
      "height": 14,
      "host": 34
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 0,
      "follower.column.index": 5
    },
    "c": {
      "column.number": 5,
      "column.name": "5号",
      "row.column.name": "1排5号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "岳池",
      "business.tier": "1层",
      "business.row": "2排",
      "business.seat": "5号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 41,
    "p": {
      "name": 7,
      "parent": 34,
      "layerId": "top",
      "location": {
        "x": 927.4794,
        "y": 105.28989261627206
      },
      "width": 15.75,
      "height": 14,
      "host": 34
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 0,
      "follower.column.index": 6
    },
    "c": {
      "column.number": 7,
      "column.name": "7号",
      "row.column.name": "1排7号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "岳池",
      "business.tier": "1层",
      "business.row": "2排",
      "business.seat": "7号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 42,
    "p": {
      "name": 9,
      "parent": 34,
      "layerId": "top",
      "location": {
        "x": 947.2294,
        "y": 105.28989261627206
      },
      "width": 15.75,
      "height": 14,
      "host": 34
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 0,
      "follower.column.index": 7
    },
    "c": {
      "column.number": 9,
      "column.name": "9号",
      "row.column.name": "1排9号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "岳池",
      "business.tier": "1层",
      "business.row": "2排",
      "business.seat": "9号"
    }
  }, {
    "class": "b2.Seat",
    "ref": 43,
    "p": {
      "name": "岳池2排",
      "angle": -6,
      "parent": 26,
      "layerId": "center",
      "location": {
        "x": 1104.1741,
        "y": 90.31089261627204
      },
      "width": 120,
      "height": 20
    },
    "s": {
      "grid.border": 1,
      "grid.deep": 1,
      "grid.deep.color": "rgba(0,0,0,0.2)",
      "grid.padding": 2,
      "grid.column.count": 6,
      "grid.row.count": 1,
      "grid.fill": false,
      "grid.fill.color": "rgba(0,0,0,0.4)",
      "label.position": "left.left",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "shadow.blur": 0,
      "select.padding": 0,
      "select.width": 2,
      "select.style": "border"
    },
    "c": {
      "movable": true,
      "business.region": "岳池",
      "business.tier": "1层",
      "business.row": "2排"
    }
  }, {
    "class": "b2.Follower",
    "ref": 44,
    "p": {
      "name": 11,
      "angle": -6,
      "parent": 43,
      "layerId": "top",
      "location": {
        "x": 1107.4434401443932,
        "y": 98.45020872693168
      },
      "width": 15.666666666666668,
      "height": 14,
      "host": 43
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": -6,
      "follower.column.index": 0
    },
    "c": {
      "column.number": 11,
      "column.name": "11号",
      "row.column.name": "1排11号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "岳池",
      "business.tier": "1层",
      "business.row": "2排",
      "business.seat": "11号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 45,
    "p": {
      "name": 13,
      "angle": -6,
      "parent": 43,
      "layerId": "top",
      "location": {
        "x": 1127.0023707533028,
        "y": 96.39448228266781
      },
      "width": 15.666666666666668,
      "height": 14,
      "host": 43
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": -6,
      "follower.column.index": 1
    },
    "c": {
      "column.number": 13,
      "column.name": "13号",
      "row.column.name": "1排13号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "岳池",
      "business.tier": "1层",
      "business.row": "2排",
      "business.seat": "13号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 46,
    "p": {
      "name": 15,
      "angle": -6,
      "parent": 43,
      "layerId": "top",
      "location": {
        "x": 1146.561301362212,
        "y": 94.33875583840398
      },
      "width": 15.666666666666668,
      "height": 14,
      "host": 43
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": -6,
      "follower.column.index": 2
    },
    "c": {
      "column.number": 15,
      "column.name": "15号",
      "row.column.name": "1排15号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "岳池",
      "business.tier": "1层",
      "business.row": "2排",
      "business.seat": "15号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 47,
    "p": {
      "name": 17,
      "angle": -6,
      "parent": 43,
      "layerId": "top",
      "location": {
        "x": 1166.1202319711215,
        "y": 92.28302939414012
      },
      "width": 15.666666666666668,
      "height": 14,
      "host": 43
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": -6,
      "follower.column.index": 3
    },
    "c": {
      "column.number": 17,
      "column.name": "17号",
      "row.column.name": "1排17号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "岳池",
      "business.tier": "1层",
      "business.row": "2排",
      "business.seat": "17号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 48,
    "p": {
      "name": 19,
      "angle": -6,
      "parent": 43,
      "layerId": "top",
      "location": {
        "x": 1185.6791625800308,
        "y": 90.22730294987626
      },
      "width": 15.666666666666668,
      "height": 14,
      "host": 43
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": -6,
      "follower.column.index": 4
    },
    "c": {
      "column.number": 19,
      "column.name": "19号",
      "row.column.name": "1排19号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "岳池",
      "business.tier": "1层",
      "business.row": "2排",
      "business.seat": "19号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 49,
    "p": {
      "name": 21,
      "angle": -6,
      "parent": 43,
      "layerId": "top",
      "location": {
        "x": 1205.2380931889402,
        "y": 88.17157650561242
      },
      "width": 15.666666666666668,
      "height": 14,
      "host": 43
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": -6,
      "follower.column.index": 5
    },
    "c": {
      "column.number": 21,
      "column.name": "21号",
      "row.column.name": "1排21号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "岳池",
      "business.tier": "1层",
      "business.row": "2排",
      "business.seat": "21号"
    }
  }, {
    "class": "b2.Group",
    "ref": 50,
    "p": {
      "name": "岳池3排",
      "layerId": "center",
      "location": {
        "x": 874.31485,
        "y": 142.42399400885705
      },
      "expanded": true
    },
    "s": {
      "group.fill": false,
      "group.fill.color": "#FFFFFF",
      "group.shape": "roundrect",
      "group.outline.width": 0,
      "group.outline.color": "#000000",
      "group.padding": 0,
      "vector.outline.pattern": [2, 2],
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "label.position": "left.left"
    },
    "c": {
      "movable": true,
      "row.number": 1,
      "row.name": "1排",
      "business.region": "岳池",
      "business.tier": "1层",
      "business.row": "3排"
    }
  }, {
    "class": "b2.Seat",
    "ref": 51,
    "p": {
      "name": "岳池3排",
      "angle": 6,
      "parent": 50,
      "layerId": "center",
      "location": {
        "x": 556.4556,
        "y": 141.542957383728
      },
      "width": 120,
      "height": 20
    },
    "s": {
      "grid.border": 1,
      "grid.deep": 1,
      "grid.deep.color": "rgba(0,0,0,0.2)",
      "grid.padding": 2,
      "grid.column.count": 6,
      "grid.row.count": 1,
      "grid.fill": false,
      "grid.fill.color": "rgba(0,0,0,0.4)",
      "label.position": "left.left",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "shadow.blur": 0,
      "select.padding": 0,
      "select.width": 2,
      "select.style": "border"
    },
    "c": {
      "movable": true,
      "business.region": "岳池",
      "business.tier": "1层",
      "business.row": "3排"
    }
  }, {
    "class": "b2.Follower",
    "ref": 52,
    "p": {
      "name": 8,
      "angle": 6,
      "parent": 51,
      "layerId": "top",
      "location": {
        "x": 657.5195931889401,
        "y": 149.68227349438766
      },
      "width": 15.666666666666668,
      "height": 14,
      "host": 51
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 6,
      "follower.column.index": 5
    },
    "c": {
      "column.number": 8,
      "column.name": "8号",
      "row.column.name": "1排8号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "岳池",
      "business.tier": "1层",
      "business.row": "3排",
      "business.seat": "8号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 53,
    "p": {
      "name": 10,
      "angle": 6,
      "parent": 51,
      "layerId": "top",
      "location": {
        "x": 637.9606625800307,
        "y": 147.6265470501238
      },
      "width": 15.666666666666668,
      "height": 14,
      "host": 51
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 6,
      "follower.column.index": 4
    },
    "c": {
      "column.number": 10,
      "column.name": "10号",
      "row.column.name": "1排10号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "岳池",
      "business.tier": "1层",
      "business.row": "3排",
      "business.seat": "10号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 54,
    "p": {
      "name": 12,
      "angle": 6,
      "parent": 51,
      "layerId": "top",
      "location": {
        "x": 618.4017319711213,
        "y": 145.57082060585995
      },
      "width": 15.666666666666668,
      "height": 14,
      "host": 51
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 6,
      "follower.column.index": 3
    },
    "c": {
      "column.number": 12,
      "column.name": "12号",
      "row.column.name": "1排12号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "岳池",
      "business.tier": "1层",
      "business.row": "3排",
      "business.seat": "12号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 55,
    "p": {
      "name": 14,
      "angle": 6,
      "parent": 51,
      "layerId": "top",
      "location": {
        "x": 598.8428013622121,
        "y": 143.5150941615961
      },
      "width": 15.666666666666668,
      "height": 14,
      "host": 51
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 6,
      "follower.column.index": 2
    },
    "c": {
      "column.number": 14,
      "column.name": "14号",
      "row.column.name": "1排14号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "岳池",
      "business.tier": "1层",
      "business.row": "3排",
      "business.seat": "14号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 56,
    "p": {
      "name": 16,
      "angle": 6,
      "parent": 51,
      "layerId": "top",
      "location": {
        "x": 579.2838707533026,
        "y": 141.45936771733224
      },
      "width": 15.666666666666668,
      "height": 14,
      "host": 51
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 6,
      "follower.column.index": 1
    },
    "c": {
      "column.number": 16,
      "column.name": "16号",
      "row.column.name": "1排16号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "岳池",
      "business.tier": "1层",
      "business.row": "3排",
      "business.seat": "16号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 57,
    "p": {
      "name": 18,
      "angle": 6,
      "parent": 51,
      "layerId": "top",
      "location": {
        "x": 559.7249401443933,
        "y": 139.4036412730684
      },
      "width": 15.666666666666668,
      "height": 14,
      "host": 51
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 6,
      "follower.column.index": 0
    },
    "c": {
      "column.number": 18,
      "column.name": "18号",
      "row.column.name": "1排18号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "岳池",
      "business.tier": "1层",
      "business.row": "3排",
      "business.seat": "18号"
    }
  }, {
    "class": "b2.Seat",
    "ref": 58,
    "p": {
      "name": "岳池3排",
      "parent": 50,
      "layerId": "center",
      "location": {
        "x": 805.9794,
        "y": 153.52195738372802
      },
      "width": 160,
      "height": 20
    },
    "s": {
      "grid.border": 1,
      "grid.deep": 1,
      "grid.deep.color": "rgba(0,0,0,0.2)",
      "grid.padding": 2,
      "grid.column.count": 8,
      "grid.row.count": 1,
      "grid.fill": false,
      "grid.fill.color": "rgba(0,0,0,0.4)",
      "label.position": "left.left",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "shadow.blur": 0,
      "select.padding": 0,
      "select.width": 2,
      "select.style": "border"
    },
    "c": {
      "movable": true,
      "business.region": "岳池",
      "business.tier": "1层",
      "business.row": "3排"
    }
  }, {
    "class": "b2.Follower",
    "ref": 59,
    "p": {
      "name": 1,
      "parent": 58,
      "layerId": "top",
      "location": {
        "x": 868.2294,
        "y": 156.52195738372802
      },
      "width": 15.75,
      "height": 14,
      "host": 58
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 0,
      "follower.column.index": 3
    },
    "c": {
      "column.number": 1,
      "column.name": "1号",
      "row.column.name": "1排1号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "岳池",
      "business.tier": "1层",
      "business.row": "3排",
      "business.seat": "1号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 60,
    "p": {
      "name": 2,
      "parent": 58,
      "layerId": "top",
      "location": {
        "x": 848.4794,
        "y": 156.52195738372802
      },
      "width": 15.75,
      "height": 14,
      "host": 58
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 0,
      "follower.column.index": 2
    },
    "c": {
      "column.number": 2,
      "column.name": "2号",
      "row.column.name": "1排2号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "岳池",
      "business.tier": "1层",
      "business.row": "3排",
      "business.seat": "2号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 61,
    "p": {
      "name": 4,
      "parent": 58,
      "layerId": "top",
      "location": {
        "x": 828.7294,
        "y": 156.52195738372802
      },
      "width": 15.75,
      "height": 14,
      "host": 58
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 0,
      "follower.column.index": 1
    },
    "c": {
      "column.number": 4,
      "column.name": "4号",
      "row.column.name": "1排4号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "岳池",
      "business.tier": "1层",
      "business.row": "3排",
      "business.seat": "4号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 62,
    "p": {
      "name": 6,
      "parent": 58,
      "layerId": "top",
      "location": {
        "x": 808.9794,
        "y": 156.52195738372802
      },
      "width": 15.75,
      "height": 14,
      "host": 58
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 0,
      "follower.column.index": 0
    },
    "c": {
      "column.number": 6,
      "column.name": "6号",
      "row.column.name": "1排6号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "岳池",
      "business.tier": "1层",
      "business.row": "3排",
      "business.seat": "6号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 63,
    "p": {
      "name": 3,
      "parent": 58,
      "layerId": "top",
      "location": {
        "x": 887.9794,
        "y": 156.52195738372802
      },
      "width": 15.75,
      "height": 14,
      "host": 58
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 0,
      "follower.column.index": 4
    },
    "c": {
      "column.number": 3,
      "column.name": "3号",
      "row.column.name": "1排3号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "岳池",
      "business.tier": "1层",
      "business.row": "3排",
      "business.seat": "3号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 64,
    "p": {
      "name": 5,
      "parent": 58,
      "layerId": "top",
      "location": {
        "x": 907.7294,
        "y": 156.52195738372802
      },
      "width": 15.75,
      "height": 14,
      "host": 58
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 0,
      "follower.column.index": 5
    },
    "c": {
      "column.number": 5,
      "column.name": "5号",
      "row.column.name": "1排5号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "岳池",
      "business.tier": "1层",
      "business.row": "3排",
      "business.seat": "5号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 65,
    "p": {
      "name": 7,
      "parent": 58,
      "layerId": "top",
      "location": {
        "x": 927.4794,
        "y": 156.52195738372802
      },
      "width": 15.75,
      "height": 14,
      "host": 58
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 0,
      "follower.column.index": 6
    },
    "c": {
      "column.number": 7,
      "column.name": "7号",
      "row.column.name": "1排7号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "岳池",
      "business.tier": "1层",
      "business.row": "3排",
      "business.seat": "7号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 66,
    "p": {
      "name": 9,
      "parent": 58,
      "layerId": "top",
      "location": {
        "x": 947.2294,
        "y": 156.52195738372802
      },
      "width": 15.75,
      "height": 14,
      "host": 58
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 0,
      "follower.column.index": 7
    },
    "c": {
      "column.number": 9,
      "column.name": "9号",
      "row.column.name": "1排9号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "岳池",
      "business.tier": "1层",
      "business.row": "3排",
      "business.seat": "9号"
    }
  }, {
    "class": "b2.Seat",
    "ref": 67,
    "p": {
      "name": "岳池3排",
      "angle": -6,
      "parent": 50,
      "layerId": "center",
      "location": {
        "x": 1104.1740999999997,
        "y": 141.542957383728
      },
      "width": 120,
      "height": 20
    },
    "s": {
      "grid.border": 1,
      "grid.deep": 1,
      "grid.deep.color": "rgba(0,0,0,0.2)",
      "grid.padding": 2,
      "grid.column.count": 6,
      "grid.row.count": 1,
      "grid.fill": false,
      "grid.fill.color": "rgba(0,0,0,0.4)",
      "label.position": "left.left",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "shadow.blur": 0,
      "select.padding": 0,
      "select.width": 2,
      "select.style": "border"
    },
    "c": {
      "movable": true,
      "business.region": "岳池",
      "business.tier": "1层",
      "business.row": "3排"
    }
  }, {
    "class": "b2.Follower",
    "ref": 68,
    "p": {
      "name": 11,
      "angle": -6,
      "parent": 67,
      "layerId": "top",
      "location": {
        "x": 1107.443440144393,
        "y": 149.68227349438763
      },
      "width": 15.666666666666668,
      "height": 14,
      "host": 67
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": -6,
      "follower.column.index": 0
    },
    "c": {
      "column.number": 11,
      "column.name": "11号",
      "row.column.name": "1排11号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "岳池",
      "business.tier": "1层",
      "business.row": "3排",
      "business.seat": "11号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 69,
    "p": {
      "name": 13,
      "angle": -6,
      "parent": 67,
      "layerId": "top",
      "location": {
        "x": 1127.0023707533026,
        "y": 147.6265470501238
      },
      "width": 15.666666666666668,
      "height": 14,
      "host": 67
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": -6,
      "follower.column.index": 1
    },
    "c": {
      "column.number": 13,
      "column.name": "13号",
      "row.column.name": "1排13号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "岳池",
      "business.tier": "1层",
      "business.row": "3排",
      "business.seat": "13号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 70,
    "p": {
      "name": 15,
      "angle": -6,
      "parent": 67,
      "layerId": "top",
      "location": {
        "x": 1146.5613013622117,
        "y": 145.57082060585995
      },
      "width": 15.666666666666668,
      "height": 14,
      "host": 67
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": -6,
      "follower.column.index": 2
    },
    "c": {
      "column.number": 15,
      "column.name": "15号",
      "row.column.name": "1排15号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "岳池",
      "business.tier": "1层",
      "business.row": "3排",
      "business.seat": "15号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 71,
    "p": {
      "name": 17,
      "angle": -6,
      "parent": 67,
      "layerId": "top",
      "location": {
        "x": 1166.1202319711213,
        "y": 143.5150941615961
      },
      "width": 15.666666666666668,
      "height": 14,
      "host": 67
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": -6,
      "follower.column.index": 3
    },
    "c": {
      "column.number": 17,
      "column.name": "17号",
      "row.column.name": "1排17号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "岳池",
      "business.tier": "1层",
      "business.row": "3排",
      "business.seat": "17号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 72,
    "p": {
      "name": 19,
      "angle": -6,
      "parent": 67,
      "layerId": "top",
      "location": {
        "x": 1185.6791625800306,
        "y": 141.45936771733224
      },
      "width": 15.666666666666668,
      "height": 14,
      "host": 67
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": -6,
      "follower.column.index": 4
    },
    "c": {
      "column.number": 19,
      "column.name": "19号",
      "row.column.name": "1排19号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "岳池",
      "business.tier": "1层",
      "business.row": "3排",
      "business.seat": "19号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 73,
    "p": {
      "name": 21,
      "angle": -6,
      "parent": 67,
      "layerId": "top",
      "location": {
        "x": 1205.23809318894,
        "y": 139.4036412730684
      },
      "width": 15.666666666666668,
      "height": 14,
      "host": 67
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": -6,
      "follower.column.index": 5
    },
    "c": {
      "column.number": 21,
      "column.name": "21号",
      "row.column.name": "1排21号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "岳池",
      "business.tier": "1层",
      "business.row": "3排",
      "business.seat": "21号"
    }
  }, {
    "class": "b2.Group",
    "ref": 74,
    "p": {
      "name": "岳池4排",
      "layerId": "center",
      "location": {
        "x": 874.31485,
        "y": 191.53273662512908
      },
      "expanded": true
    },
    "s": {
      "group.fill": false,
      "group.fill.color": "#FFFFFF",
      "group.shape": "roundrect",
      "group.outline.width": 0,
      "group.outline.color": "#000000",
      "group.padding": 0,
      "vector.outline.pattern": [2, 2],
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "label.position": "left.left"
    },
    "c": {
      "movable": true,
      "row.number": 1,
      "row.name": "1排",
      "business.region": "岳池",
      "business.tier": "1层",
      "business.row": "4排"
    }
  }, {
    "class": "b2.Seat",
    "ref": 75,
    "p": {
      "name": "岳池4排",
      "angle": 6,
      "parent": 74,
      "layerId": "center",
      "location": {
        "x": 556.4556,
        "y": 190.65170000000006
      },
      "width": 120,
      "height": 20
    },
    "s": {
      "grid.border": 1,
      "grid.deep": 1,
      "grid.deep.color": "rgba(0,0,0,0.2)",
      "grid.padding": 2,
      "grid.column.count": 6,
      "grid.row.count": 1,
      "grid.fill": false,
      "grid.fill.color": "rgba(0,0,0,0.4)",
      "label.position": "left.left",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "shadow.blur": 0,
      "select.padding": 0,
      "select.width": 2,
      "select.style": "border"
    },
    "c": {
      "movable": true,
      "business.region": "岳池",
      "business.tier": "1层",
      "business.row": "4排"
    }
  }, {
    "class": "b2.Follower",
    "ref": 76,
    "p": {
      "name": 8,
      "angle": 6,
      "parent": 75,
      "layerId": "top",
      "location": {
        "x": 657.5195931889401,
        "y": 198.7910161106597
      },
      "width": 15.666666666666668,
      "height": 14,
      "host": 75
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 6,
      "follower.column.index": 5
    },
    "c": {
      "column.number": 8,
      "column.name": "8号",
      "row.column.name": "1排8号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "岳池",
      "business.tier": "1层",
      "business.row": "4排",
      "business.seat": "8号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 77,
    "p": {
      "name": 10,
      "angle": 6,
      "parent": 75,
      "layerId": "top",
      "location": {
        "x": 637.9606625800307,
        "y": 196.73528966639583
      },
      "width": 15.666666666666668,
      "height": 14,
      "host": 75
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 6,
      "follower.column.index": 4
    },
    "c": {
      "column.number": 10,
      "column.name": "10号",
      "row.column.name": "1排10号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "岳池",
      "business.tier": "1层",
      "business.row": "4排",
      "business.seat": "10号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 78,
    "p": {
      "name": 12,
      "angle": 6,
      "parent": 75,
      "layerId": "top",
      "location": {
        "x": 618.4017319711213,
        "y": 194.679563222132
      },
      "width": 15.666666666666668,
      "height": 14,
      "host": 75
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 6,
      "follower.column.index": 3
    },
    "c": {
      "column.number": 12,
      "column.name": "12号",
      "row.column.name": "1排12号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "岳池",
      "business.tier": "1层",
      "business.row": "4排",
      "business.seat": "12号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 79,
    "p": {
      "name": 14,
      "angle": 6,
      "parent": 75,
      "layerId": "top",
      "location": {
        "x": 598.8428013622121,
        "y": 192.62383677786812
      },
      "width": 15.666666666666668,
      "height": 14,
      "host": 75
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 6,
      "follower.column.index": 2
    },
    "c": {
      "column.number": 14,
      "column.name": "14号",
      "row.column.name": "1排14号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "岳池",
      "business.tier": "1层",
      "business.row": "4排",
      "business.seat": "14号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 80,
    "p": {
      "name": 16,
      "angle": 6,
      "parent": 75,
      "layerId": "top",
      "location": {
        "x": 579.2838707533026,
        "y": 190.5681103336043
      },
      "width": 15.666666666666668,
      "height": 14,
      "host": 75
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 6,
      "follower.column.index": 1
    },
    "c": {
      "column.number": 16,
      "column.name": "16号",
      "row.column.name": "1排16号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "岳池",
      "business.tier": "1层",
      "business.row": "4排",
      "business.seat": "16号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 81,
    "p": {
      "name": 18,
      "angle": 6,
      "parent": 75,
      "layerId": "top",
      "location": {
        "x": 559.7249401443933,
        "y": 188.51238388934047
      },
      "width": 15.666666666666668,
      "height": 14,
      "host": 75
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 6,
      "follower.column.index": 0
    },
    "c": {
      "column.number": 18,
      "column.name": "18号",
      "row.column.name": "1排18号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "岳池",
      "business.tier": "1层",
      "business.row": "4排",
      "business.seat": "18号"
    }
  }, {
    "class": "b2.Seat",
    "ref": 82,
    "p": {
      "name": "岳池4排",
      "parent": 74,
      "layerId": "center",
      "location": {
        "x": 805.9794,
        "y": 202.63070000000008
      },
      "width": 160,
      "height": 20
    },
    "s": {
      "grid.border": 1,
      "grid.deep": 1,
      "grid.deep.color": "rgba(0,0,0,0.2)",
      "grid.padding": 2,
      "grid.column.count": 8,
      "grid.row.count": 1,
      "grid.fill": false,
      "grid.fill.color": "rgba(0,0,0,0.4)",
      "label.position": "left.left",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "shadow.blur": 0,
      "select.padding": 0,
      "select.width": 2,
      "select.style": "border"
    },
    "c": {
      "movable": true,
      "business.region": "岳池",
      "business.tier": "1层",
      "business.row": "4排"
    }
  }, {
    "class": "b2.Follower",
    "ref": 83,
    "p": {
      "name": 1,
      "parent": 82,
      "layerId": "top",
      "location": {
        "x": 868.2294,
        "y": 205.63070000000008
      },
      "width": 15.75,
      "height": 14,
      "host": 82
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 0,
      "follower.column.index": 3
    },
    "c": {
      "column.number": 1,
      "column.name": "1号",
      "row.column.name": "1排1号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "岳池",
      "business.tier": "1层",
      "business.row": "4排",
      "business.seat": "1号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 84,
    "p": {
      "name": 2,
      "parent": 82,
      "layerId": "top",
      "location": {
        "x": 848.4794,
        "y": 205.63070000000008
      },
      "width": 15.75,
      "height": 14,
      "host": 82
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 0,
      "follower.column.index": 2
    },
    "c": {
      "column.number": 2,
      "column.name": "2号",
      "row.column.name": "1排2号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "岳池",
      "business.tier": "1层",
      "business.row": "4排",
      "business.seat": "2号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 85,
    "p": {
      "name": 4,
      "parent": 82,
      "layerId": "top",
      "location": {
        "x": 828.7294,
        "y": 205.63070000000008
      },
      "width": 15.75,
      "height": 14,
      "host": 82
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 0,
      "follower.column.index": 1
    },
    "c": {
      "column.number": 4,
      "column.name": "4号",
      "row.column.name": "1排4号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "岳池",
      "business.tier": "1层",
      "business.row": "4排",
      "business.seat": "4号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 86,
    "p": {
      "name": 6,
      "parent": 82,
      "layerId": "top",
      "location": {
        "x": 808.9794,
        "y": 205.63070000000008
      },
      "width": 15.75,
      "height": 14,
      "host": 82
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 0,
      "follower.column.index": 0
    },
    "c": {
      "column.number": 6,
      "column.name": "6号",
      "row.column.name": "1排6号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "岳池",
      "business.tier": "1层",
      "business.row": "4排",
      "business.seat": "6号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 87,
    "p": {
      "name": 3,
      "parent": 82,
      "layerId": "top",
      "location": {
        "x": 887.9794,
        "y": 205.63070000000008
      },
      "width": 15.75,
      "height": 14,
      "host": 82
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 0,
      "follower.column.index": 4
    },
    "c": {
      "column.number": 3,
      "column.name": "3号",
      "row.column.name": "1排3号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "岳池",
      "business.tier": "1层",
      "business.row": "4排",
      "business.seat": "3号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 88,
    "p": {
      "name": 5,
      "parent": 82,
      "layerId": "top",
      "location": {
        "x": 907.7294,
        "y": 205.63070000000008
      },
      "width": 15.75,
      "height": 14,
      "host": 82
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 0,
      "follower.column.index": 5
    },
    "c": {
      "column.number": 5,
      "column.name": "5号",
      "row.column.name": "1排5号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "岳池",
      "business.tier": "1层",
      "business.row": "4排",
      "business.seat": "5号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 89,
    "p": {
      "name": 7,
      "parent": 82,
      "layerId": "top",
      "location": {
        "x": 927.4794,
        "y": 205.63070000000008
      },
      "width": 15.75,
      "height": 14,
      "host": 82
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 0,
      "follower.column.index": 6
    },
    "c": {
      "column.number": 7,
      "column.name": "7号",
      "row.column.name": "1排7号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "岳池",
      "business.tier": "1层",
      "business.row": "4排",
      "business.seat": "7号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 90,
    "p": {
      "name": 9,
      "parent": 82,
      "layerId": "top",
      "location": {
        "x": 947.2294,
        "y": 205.63070000000008
      },
      "width": 15.75,
      "height": 14,
      "host": 82
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 0,
      "follower.column.index": 7
    },
    "c": {
      "column.number": 9,
      "column.name": "9号",
      "row.column.name": "1排9号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "岳池",
      "business.tier": "1层",
      "business.row": "4排",
      "business.seat": "9号"
    }
  }, {
    "class": "b2.Seat",
    "ref": 91,
    "p": {
      "name": "岳池4排",
      "angle": -6,
      "parent": 74,
      "layerId": "center",
      "location": {
        "x": 1104.1741000000002,
        "y": 190.65170000000006
      },
      "width": 120,
      "height": 20
    },
    "s": {
      "grid.border": 1,
      "grid.deep": 1,
      "grid.deep.color": "rgba(0,0,0,0.2)",
      "grid.padding": 2,
      "grid.column.count": 6,
      "grid.row.count": 1,
      "grid.fill": false,
      "grid.fill.color": "rgba(0,0,0,0.4)",
      "label.position": "left.left",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "shadow.blur": 0,
      "select.padding": 0,
      "select.width": 2,
      "select.style": "border"
    },
    "c": {
      "movable": true,
      "business.region": "岳池",
      "business.tier": "1层",
      "business.row": "4排"
    }
  }, {
    "class": "b2.Follower",
    "ref": 92,
    "p": {
      "name": 11,
      "angle": -6,
      "parent": 91,
      "layerId": "top",
      "location": {
        "x": 1107.4434401443932,
        "y": 198.7910161106597
      },
      "width": 15.666666666666668,
      "height": 14,
      "host": 91
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": -6,
      "follower.column.index": 0
    },
    "c": {
      "column.number": 11,
      "column.name": "11号",
      "row.column.name": "1排11号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "岳池",
      "business.tier": "1层",
      "business.row": "4排",
      "business.seat": "11号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 93,
    "p": {
      "name": 13,
      "angle": -6,
      "parent": 91,
      "layerId": "top",
      "location": {
        "x": 1127.0023707533028,
        "y": 196.73528966639583
      },
      "width": 15.666666666666668,
      "height": 14,
      "host": 91
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": -6,
      "follower.column.index": 1
    },
    "c": {
      "column.number": 13,
      "column.name": "13号",
      "row.column.name": "1排13号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "岳池",
      "business.tier": "1层",
      "business.row": "4排",
      "business.seat": "13号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 94,
    "p": {
      "name": 15,
      "angle": -6,
      "parent": 91,
      "layerId": "top",
      "location": {
        "x": 1146.561301362212,
        "y": 194.679563222132
      },
      "width": 15.666666666666668,
      "height": 14,
      "host": 91
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": -6,
      "follower.column.index": 2
    },
    "c": {
      "column.number": 15,
      "column.name": "15号",
      "row.column.name": "1排15号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "岳池",
      "business.tier": "1层",
      "business.row": "4排",
      "business.seat": "15号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 95,
    "p": {
      "name": 17,
      "angle": -6,
      "parent": 91,
      "layerId": "top",
      "location": {
        "x": 1166.1202319711215,
        "y": 192.62383677786815
      },
      "width": 15.666666666666668,
      "height": 14,
      "host": 91
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": -6,
      "follower.column.index": 3
    },
    "c": {
      "column.number": 17,
      "column.name": "17号",
      "row.column.name": "1排17号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "岳池",
      "business.tier": "1层",
      "business.row": "4排",
      "business.seat": "17号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 96,
    "p": {
      "name": 19,
      "angle": -6,
      "parent": 91,
      "layerId": "top",
      "location": {
        "x": 1185.6791625800308,
        "y": 190.5681103336043
      },
      "width": 15.666666666666668,
      "height": 14,
      "host": 91
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": -6,
      "follower.column.index": 4
    },
    "c": {
      "column.number": 19,
      "column.name": "19号",
      "row.column.name": "1排19号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "岳池",
      "business.tier": "1层",
      "business.row": "4排",
      "business.seat": "19号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 97,
    "p": {
      "name": 21,
      "angle": -6,
      "parent": 91,
      "layerId": "top",
      "location": {
        "x": 1205.2380931889402,
        "y": 188.51238388934044
      },
      "width": 15.666666666666668,
      "height": 14,
      "host": 91
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": -6,
      "follower.column.index": 5
    },
    "c": {
      "column.number": 21,
      "column.name": "21号",
      "row.column.name": "1排21号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "岳池",
      "business.tier": "1层",
      "business.row": "4排",
      "business.seat": "21号"
    }
  }, {
    "class": "b2.Group",
    "ref": 98,
    "p": {
      "name": "池座低区1排",
      "layerId": "center",
      "location": {
        "x": 842.0595088447269,
        "y": 381.6720405579971
      },
      "expanded": true
    },
    "s": {
      "group.fill": false,
      "group.fill.color": "#FFFFFF",
      "group.shape": "roundrect",
      "group.outline.width": 0,
      "group.outline.color": "#000000",
      "group.padding": 0,
      "vector.outline.pattern": [2, 2],
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "label.position": "left.left"
    },
    "c": {
      "movable": true,
      "row.number": 1,
      "row.name": "1排",
      "business.region": "池座地区",
      "business.tier": "2层",
      "business.row": "1排"
    }
  }, {
    "class": "b2.Seat",
    "ref": 99,
    "p": {
      "name": "池座低区1排",
      "angle": 24,
      "parent": 98,
      "layerId": "center",
      "location": {
        "x": 385.50586000000004,
        "y": 380.3997000000001
      },
      "width": 200,
      "height": 20
    },
    "s": {
      "grid.border": 1,
      "grid.deep": 1,
      "grid.deep.color": "rgba(0,0,0,0.2)",
      "grid.padding": 2,
      "grid.column.count": 10,
      "grid.row.count": 1,
      "grid.fill": false,
      "grid.fill.color": "rgba(0,0,0,0.4)",
      "label.position": "left.left",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "shadow.blur": 0,
      "select.padding": 0,
      "select.width": 2,
      "select.style": "border",
      "label.yoffset": -53.30000000000001,
      "label.xoffset": 3.3000000000000025,
      "label.rotate.angle": 26
    },
    "c": {
      "movable": true,
      "business.region": "池座地区",
      "business.tier": "2层",
      "business.row": "1排"
    }
  }, {
    "class": "b2.Follower",
    "ref": 100,
    "p": {
      "name": 20,
      "angle": 24,
      "parent": 99,
      "layerId": "top",
      "location": {
        "x": 559.0027602759558,
        "y": 419.63993489805387
      },
      "width": 15.8,
      "height": 14,
      "host": 99
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 24,
      "follower.column.index": 9
    },
    "c": {
      "column.number": 20,
      "column.name": "20号",
      "row.column.name": "1排20号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "池座地区",
      "business.tier": "2层",
      "business.row": "1排",
      "business.seat": "20号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 101,
    "p": {
      "name": 22,
      "angle": 24,
      "parent": 99,
      "layerId": "top",
      "location": {
        "x": 540.9145602146323,
        "y": 411.586549365153
      },
      "width": 15.8,
      "height": 14,
      "host": 99
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 24,
      "follower.column.index": 8
    },
    "c": {
      "column.number": 22,
      "column.name": "22号",
      "row.column.name": "1排22号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "池座地区",
      "business.tier": "2层",
      "business.row": "1排",
      "business.seat": "22号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 102,
    "p": {
      "name": 24,
      "angle": 24,
      "parent": 99,
      "layerId": "top",
      "location": {
        "x": 522.8263601533088,
        "y": 403.53316383225217
      },
      "width": 15.8,
      "height": 14,
      "host": 99
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 24,
      "follower.column.index": 7
    },
    "c": {
      "column.number": 24,
      "column.name": "24号",
      "row.column.name": "1排24号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "池座地区",
      "business.tier": "2层",
      "business.row": "1排",
      "business.seat": "24号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 103,
    "p": {
      "name": 26,
      "angle": 24,
      "parent": 99,
      "layerId": "top",
      "location": {
        "x": 504.73816009198526,
        "y": 395.4797782993513
      },
      "width": 15.8,
      "height": 14,
      "host": 99
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 24,
      "follower.column.index": 6
    },
    "c": {
      "column.number": 26,
      "column.name": "26号",
      "row.column.name": "1排26号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "池座地区",
      "business.tier": "2层",
      "business.row": "1排",
      "business.seat": "26号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 104,
    "p": {
      "name": 28,
      "angle": 24,
      "parent": 99,
      "layerId": "top",
      "location": {
        "x": 486.64996003066176,
        "y": 387.4263927664505
      },
      "width": 15.8,
      "height": 14,
      "host": 99
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 24,
      "follower.column.index": 5
    },
    "c": {
      "column.number": 28,
      "column.name": "28号",
      "row.column.name": "1排28号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "池座地区",
      "business.tier": "2层",
      "business.row": "1排",
      "business.seat": "28号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 105,
    "p": {
      "name": 30,
      "angle": 24,
      "parent": 99,
      "layerId": "top",
      "location": {
        "x": 468.56175996933825,
        "y": 379.37300723354963
      },
      "width": 15.8,
      "height": 14,
      "host": 99
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 24,
      "follower.column.index": 4
    },
    "c": {
      "column.number": 30,
      "column.name": "30号",
      "row.column.name": "1排30号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "池座地区",
      "business.tier": "2层",
      "business.row": "1排",
      "business.seat": "30号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 106,
    "p": {
      "name": 32,
      "angle": 24,
      "parent": 99,
      "layerId": "top",
      "location": {
        "x": 450.47355990801486,
        "y": 371.3196217006489
      },
      "width": 15.8,
      "height": 14,
      "host": 99
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 24,
      "follower.column.index": 3
    },
    "c": {
      "column.number": 32,
      "column.name": "32号",
      "row.column.name": "1排32号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "池座地区",
      "business.tier": "2层",
      "business.row": "1排",
      "business.seat": "32号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 107,
    "p": {
      "name": 34,
      "angle": 24,
      "parent": 99,
      "layerId": "top",
      "location": {
        "x": 432.38535984669136,
        "y": 363.26623616774805
      },
      "width": 15.8,
      "height": 14,
      "host": 99
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 24,
      "follower.column.index": 2
    },
    "c": {
      "column.number": 34,
      "column.name": "34号",
      "row.column.name": "1排34号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "池座地区",
      "business.tier": "2层",
      "business.row": "1排",
      "business.seat": "34号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 108,
    "p": {
      "name": 36,
      "angle": 24,
      "parent": 99,
      "layerId": "top",
      "location": {
        "x": 414.29715978536785,
        "y": 355.2128506348472
      },
      "width": 15.8,
      "height": 14,
      "host": 99
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 24,
      "follower.column.index": 1
    },
    "c": {
      "column.number": 36,
      "column.name": "36号",
      "row.column.name": "1排36号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "池座地区",
      "business.tier": "2层",
      "business.row": "1排",
      "business.seat": "36号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 109,
    "p": {
      "name": 38,
      "angle": 24,
      "parent": 99,
      "layerId": "top",
      "location": {
        "x": 396.20895972404435,
        "y": 347.15946510194635
      },
      "width": 15.8,
      "height": 14,
      "host": 99
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 24,
      "follower.column.index": 0
    },
    "c": {
      "column.number": 38,
      "column.name": "38号",
      "row.column.name": "1排38号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "池座地区",
      "business.tier": "2层",
      "business.row": "1排",
      "business.seat": "38号"
    }
  }, {
    "class": "b2.Seat",
    "ref": 110,
    "p": {
      "name": "池座低区1排",
      "parent": 98,
      "layerId": "center",
      "location": {
        "x": 672.3498576894528,
        "y": 434.3227000000001
      },
      "width": 380,
      "height": 20
    },
    "s": {
      "grid.border": 1,
      "grid.deep": 1,
      "grid.deep.color": "rgba(0,0,0,0.2)",
      "grid.padding": 2,
      "grid.column.count": 19,
      "grid.row.count": 1,
      "grid.fill": false,
      "grid.fill.color": "rgba(0,0,0,0.4)",
      "label.position": "left.left",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "shadow.blur": 0,
      "select.padding": 0,
      "select.width": 2,
      "select.style": "border"
    },
    "c": {
      "movable": true,
      "business.region": "池座地区",
      "business.tier": "2层",
      "business.row": "1排"
    }
  }, {
    "class": "b2.Follower",
    "ref": 111,
    "p": {
      "name": 1,
      "parent": 110,
      "layerId": "top",
      "location": {
        "x": 854.4024892684002,
        "y": 437.3227000000001
      },
      "width": 15.894736842105264,
      "height": 14,
      "host": 110
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 0,
      "follower.column.index": 9
    },
    "c": {
      "column.number": 1,
      "column.name": "1号",
      "row.column.name": "1排1号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "池座地区",
      "business.tier": "2层",
      "business.row": "1排",
      "business.seat": "1号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 112,
    "p": {
      "name": 2,
      "parent": 110,
      "layerId": "top",
      "location": {
        "x": 834.5077524262949,
        "y": 437.3227000000001
      },
      "width": 15.894736842105264,
      "height": 14,
      "host": 110
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 0,
      "follower.column.index": 8
    },
    "c": {
      "column.number": 2,
      "column.name": "2号",
      "row.column.name": "1排2号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "池座地区",
      "business.tier": "2层",
      "business.row": "1排",
      "business.seat": "2号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 113,
    "p": {
      "name": 4,
      "parent": 110,
      "layerId": "top",
      "location": {
        "x": 814.6130155841897,
        "y": 437.3227000000001
      },
      "width": 15.894736842105264,
      "height": 14,
      "host": 110
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 0,
      "follower.column.index": 7
    },
    "c": {
      "column.number": 4,
      "column.name": "4号",
      "row.column.name": "1排4号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "池座地区",
      "business.tier": "2层",
      "business.row": "1排",
      "business.seat": "4号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 114,
    "p": {
      "name": 6,
      "parent": 110,
      "layerId": "top",
      "location": {
        "x": 794.7182787420844,
        "y": 437.3227000000001
      },
      "width": 15.894736842105264,
      "height": 14,
      "host": 110
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 0,
      "follower.column.index": 6
    },
    "c": {
      "column.number": 6,
      "column.name": "6号",
      "row.column.name": "1排6号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "池座地区",
      "business.tier": "2层",
      "business.row": "1排",
      "business.seat": "6号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 115,
    "p": {
      "name": 8,
      "parent": 110,
      "layerId": "top",
      "location": {
        "x": 774.8235418999792,
        "y": 437.3227000000001
      },
      "width": 15.894736842105264,
      "height": 14,
      "host": 110
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 0,
      "follower.column.index": 5
    },
    "c": {
      "column.number": 8,
      "column.name": "8号",
      "row.column.name": "1排8号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "池座地区",
      "business.tier": "2层",
      "business.row": "1排",
      "business.seat": "8号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 116,
    "p": {
      "name": 10,
      "parent": 110,
      "layerId": "top",
      "location": {
        "x": 754.9288050578739,
        "y": 437.3227000000001
      },
      "width": 15.894736842105264,
      "height": 14,
      "host": 110
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 0,
      "follower.column.index": 4
    },
    "c": {
      "column.number": 10,
      "column.name": "10号",
      "row.column.name": "1排10号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "池座地区",
      "business.tier": "2层",
      "business.row": "1排",
      "business.seat": "10号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 117,
    "p": {
      "name": 12,
      "parent": 110,
      "layerId": "top",
      "location": {
        "x": 735.0340682157687,
        "y": 437.3227000000001
      },
      "width": 15.894736842105264,
      "height": 14,
      "host": 110
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 0,
      "follower.column.index": 3
    },
    "c": {
      "column.number": 12,
      "column.name": "12号",
      "row.column.name": "1排12号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "池座地区",
      "business.tier": "2层",
      "business.row": "1排",
      "business.seat": "12号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 118,
    "p": {
      "name": 14,
      "parent": 110,
      "layerId": "top",
      "location": {
        "x": 715.1393313736634,
        "y": 437.3227000000001
      },
      "width": 15.894736842105264,
      "height": 14,
      "host": 110
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 0,
      "follower.column.index": 2
    },
    "c": {
      "column.number": 14,
      "column.name": "14号",
      "row.column.name": "1排14号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "池座地区",
      "business.tier": "2层",
      "business.row": "1排",
      "business.seat": "14号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 119,
    "p": {
      "name": 16,
      "parent": 110,
      "layerId": "top",
      "location": {
        "x": 695.2445945315582,
        "y": 437.3227000000001
      },
      "width": 15.894736842105264,
      "height": 14,
      "host": 110
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 0,
      "follower.column.index": 1
    },
    "c": {
      "column.number": 16,
      "column.name": "16号",
      "row.column.name": "1排16号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "池座地区",
      "business.tier": "2层",
      "business.row": "1排",
      "business.seat": "16号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 120,
    "p": {
      "name": 18,
      "parent": 110,
      "layerId": "top",
      "location": {
        "x": 675.3498576894528,
        "y": 437.3227000000001
      },
      "width": 15.894736842105264,
      "height": 14,
      "host": 110
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 0,
      "follower.column.index": 0
    },
    "c": {
      "column.number": 18,
      "column.name": "18号",
      "row.column.name": "1排18号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "池座地区",
      "business.tier": "2层",
      "business.row": "1排",
      "business.seat": "18号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 121,
    "p": {
      "name": 3,
      "parent": 110,
      "layerId": "top",
      "location": {
        "x": 874.2972261105054,
        "y": 437.3227000000001
      },
      "width": 15.894736842105264,
      "height": 14,
      "host": 110
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 0,
      "follower.column.index": 10
    },
    "c": {
      "column.number": 3,
      "column.name": "3号",
      "row.column.name": "1排3号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "池座地区",
      "business.tier": "2层",
      "business.row": "1排",
      "business.seat": "3号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 122,
    "p": {
      "name": 5,
      "parent": 110,
      "layerId": "top",
      "location": {
        "x": 894.1919629526108,
        "y": 437.3227000000001
      },
      "width": 15.894736842105264,
      "height": 14,
      "host": 110
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 0,
      "follower.column.index": 11
    },
    "c": {
      "column.number": 5,
      "column.name": "5号",
      "row.column.name": "1排5号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "池座地区",
      "business.tier": "2层",
      "business.row": "1排",
      "business.seat": "5号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 123,
    "p": {
      "name": 7,
      "parent": 110,
      "layerId": "top",
      "location": {
        "x": 914.086699794716,
        "y": 437.3227000000001
      },
      "width": 15.894736842105264,
      "height": 14,
      "host": 110
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 0,
      "follower.column.index": 12
    },
    "c": {
      "column.number": 7,
      "column.name": "7号",
      "row.column.name": "1排7号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "池座地区",
      "business.tier": "2层",
      "business.row": "1排",
      "business.seat": "7号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 124,
    "p": {
      "name": 9,
      "parent": 110,
      "layerId": "top",
      "location": {
        "x": 933.9814366368213,
        "y": 437.3227000000001
      },
      "width": 15.894736842105264,
      "height": 14,
      "host": 110
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 0,
      "follower.column.index": 13
    },
    "c": {
      "column.number": 9,
      "column.name": "9号",
      "row.column.name": "1排9号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "池座地区",
      "business.tier": "2层",
      "business.row": "1排",
      "business.seat": "9号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 125,
    "p": {
      "name": 11,
      "parent": 110,
      "layerId": "top",
      "location": {
        "x": 953.8761734789266,
        "y": 437.3227000000001
      },
      "width": 15.894736842105264,
      "height": 14,
      "host": 110
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 0,
      "follower.column.index": 14
    },
    "c": {
      "column.number": 11,
      "column.name": "11号",
      "row.column.name": "1排11号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "池座地区",
      "business.tier": "2层",
      "business.row": "1排",
      "business.seat": "11号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 126,
    "p": {
      "name": 13,
      "parent": 110,
      "layerId": "top",
      "location": {
        "x": 973.7709103210318,
        "y": 437.3227000000001
      },
      "width": 15.894736842105264,
      "height": 14,
      "host": 110
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 0,
      "follower.column.index": 15
    },
    "c": {
      "column.number": 13,
      "column.name": "13号",
      "row.column.name": "1排13号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "池座地区",
      "business.tier": "2层",
      "business.row": "1排",
      "business.seat": "13号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 127,
    "p": {
      "name": 15,
      "parent": 110,
      "layerId": "top",
      "location": {
        "x": 993.665647163137,
        "y": 437.3227000000001
      },
      "width": 15.894736842105264,
      "height": 14,
      "host": 110
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 0,
      "follower.column.index": 16
    },
    "c": {
      "column.number": 15,
      "column.name": "15号",
      "row.column.name": "1排15号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "池座地区",
      "business.tier": "2层",
      "business.row": "1排",
      "business.seat": "15号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 128,
    "p": {
      "name": 17,
      "parent": 110,
      "layerId": "top",
      "location": {
        "x": 1013.5603840052423,
        "y": 437.3227000000001
      },
      "width": 15.894736842105264,
      "height": 14,
      "host": 110
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 0,
      "follower.column.index": 17
    },
    "c": {
      "column.number": 17,
      "column.name": "17号",
      "row.column.name": "1排17号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "池座地区",
      "business.tier": "2层",
      "business.row": "1排",
      "business.seat": "17号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 129,
    "p": {
      "name": 19,
      "parent": 110,
      "layerId": "top",
      "location": {
        "x": 1033.4551208473476,
        "y": 437.3227000000001
      },
      "width": 15.894736842105264,
      "height": 14,
      "host": 110
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 0,
      "follower.column.index": 18
    },
    "c": {
      "column.number": 19,
      "column.name": "19号",
      "row.column.name": "1排19号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "池座地区",
      "business.tier": "2层",
      "business.row": "1排",
      "business.seat": "19号"
    }
  }, {
    "class": "b2.Seat",
    "ref": 130,
    "p": {
      "name": "池座低区1排",
      "angle": -24,
      "parent": 98,
      "layerId": "center",
      "location": {
        "x": 1130.6131576894536,
        "y": 372.83050000000014
      },
      "width": 200,
      "height": 20
    },
    "s": {
      "grid.border": 1,
      "grid.deep": 1,
      "grid.deep.color": "rgba(0,0,0,0.2)",
      "grid.padding": 2,
      "grid.column.count": 10,
      "grid.row.count": 1,
      "grid.fill": false,
      "grid.fill.color": "rgba(0,0,0,0.4)",
      "label.position": "left.left",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "shadow.blur": 0,
      "select.padding": 0,
      "select.width": 2,
      "select.style": "border",
      "label.yoffset": 60.29999999999998,
      "label.xoffset": 4,
      "label.rotate.angle": -31
    },
    "c": {
      "movable": true,
      "business.region": "池座地区",
      "business.tier": "2层",
      "business.row": "1排"
    }
  }, {
    "class": "b2.Follower",
    "ref": 131,
    "p": {
      "name": 21,
      "angle": -24,
      "parent": 130,
      "layerId": "top",
      "location": {
        "x": 1141.3162574134979,
        "y": 412.07073489805384
      },
      "width": 15.8,
      "height": 14,
      "host": 130
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": -24,
      "follower.column.index": 0
    },
    "c": {
      "column.number": 21,
      "column.name": "21号",
      "row.column.name": "1排21号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "池座地区",
      "business.tier": "2层",
      "business.row": "1排",
      "business.seat": "21号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 132,
    "p": {
      "name": 23,
      "angle": -24,
      "parent": 130,
      "layerId": "top",
      "location": {
        "x": 1159.4044574748214,
        "y": 404.01734936515305
      },
      "width": 15.8,
      "height": 14,
      "host": 130
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": -24,
      "follower.column.index": 1
    },
    "c": {
      "column.number": 23,
      "column.name": "23号",
      "row.column.name": "1排23号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "池座地区",
      "business.tier": "2层",
      "business.row": "1排",
      "business.seat": "23号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 133,
    "p": {
      "name": 25,
      "angle": -24,
      "parent": 130,
      "layerId": "top",
      "location": {
        "x": 1177.4926575361449,
        "y": 395.9639638322522
      },
      "width": 15.8,
      "height": 14,
      "host": 130
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": -24,
      "follower.column.index": 2
    },
    "c": {
      "column.number": 25,
      "column.name": "25号",
      "row.column.name": "1排25号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "池座地区",
      "business.tier": "2层",
      "business.row": "1排",
      "business.seat": "25号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 134,
    "p": {
      "name": 27,
      "angle": -24,
      "parent": 130,
      "layerId": "top",
      "location": {
        "x": 1195.5808575974684,
        "y": 387.9105782993513
      },
      "width": 15.8,
      "height": 14,
      "host": 130
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": -24,
      "follower.column.index": 3
    },
    "c": {
      "column.number": 27,
      "column.name": "27号",
      "row.column.name": "1排27号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "池座地区",
      "business.tier": "2层",
      "business.row": "1排",
      "business.seat": "27号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 135,
    "p": {
      "name": 29,
      "angle": -24,
      "parent": 130,
      "layerId": "top",
      "location": {
        "x": 1213.6690576587919,
        "y": 379.85719276645045
      },
      "width": 15.8,
      "height": 14,
      "host": 130
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": -24,
      "follower.column.index": 4
    },
    "c": {
      "column.number": 29,
      "column.name": "29号",
      "row.column.name": "1排29号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "池座地区",
      "business.tier": "2层",
      "business.row": "1排",
      "business.seat": "29号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 136,
    "p": {
      "name": 31,
      "angle": -24,
      "parent": 130,
      "layerId": "top",
      "location": {
        "x": 1231.7572577201154,
        "y": 371.80380723354966
      },
      "width": 15.8,
      "height": 14,
      "host": 130
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": -24,
      "follower.column.index": 5
    },
    "c": {
      "column.number": 31,
      "column.name": "31号",
      "row.column.name": "1排31号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "池座地区",
      "business.tier": "2层",
      "business.row": "1排",
      "business.seat": "31号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 137,
    "p": {
      "name": 33,
      "angle": -24,
      "parent": 130,
      "layerId": "top",
      "location": {
        "x": 1249.8454577814389,
        "y": 363.7504217006489
      },
      "width": 15.8,
      "height": 14,
      "host": 130
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": -24,
      "follower.column.index": 6
    },
    "c": {
      "column.number": 33,
      "column.name": "33号",
      "row.column.name": "1排33号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "池座地区",
      "business.tier": "2层",
      "business.row": "1排",
      "business.seat": "33号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 138,
    "p": {
      "name": 35,
      "angle": -24,
      "parent": 130,
      "layerId": "top",
      "location": {
        "x": 1267.9336578427624,
        "y": 355.697036167748
      },
      "width": 15.8,
      "height": 14,
      "host": 130
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": -24,
      "follower.column.index": 7
    },
    "c": {
      "column.number": 35,
      "column.name": "35号",
      "row.column.name": "1排35号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "池座地区",
      "business.tier": "2层",
      "business.row": "1排",
      "business.seat": "35号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 139,
    "p": {
      "name": 37,
      "angle": -24,
      "parent": 130,
      "layerId": "top",
      "location": {
        "x": 1286.021857904086,
        "y": 347.64365063484706
      },
      "width": 15.8,
      "height": 14,
      "host": 130
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": -24,
      "follower.column.index": 8
    },
    "c": {
      "column.number": 37,
      "column.name": "37号",
      "row.column.name": "1排37号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "池座地区",
      "business.tier": "2层",
      "business.row": "1排",
      "business.seat": "37号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 140,
    "p": {
      "name": 39,
      "angle": -24,
      "parent": 130,
      "layerId": "top",
      "location": {
        "x": 1304.1100579654094,
        "y": 339.5902651019462
      },
      "width": 15.8,
      "height": 14,
      "host": 130
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": -24,
      "follower.column.index": 9
    },
    "c": {
      "column.number": 39,
      "column.name": "39号",
      "row.column.name": "1排39号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "池座地区",
      "business.tier": "2层",
      "business.row": "1排",
      "business.seat": "39号"
    }
  }, {
    "class": "b2.Group",
    "ref": 141,
    "p": {
      "name": "池座低区2排",
      "layerId": "center",
      "location": {
        "x": 841.3732100000002,
        "y": 435.0110405579968
      },
      "expanded": true
    },
    "s": {
      "group.fill": false,
      "group.fill.color": "#FFFFFF",
      "group.shape": "roundrect",
      "group.outline.width": 0,
      "group.outline.color": "#000000",
      "group.padding": 0,
      "vector.outline.pattern": [2, 2],
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "label.position": "left.left"
    },
    "c": {
      "movable": false,
      "row.number": 1,
      "row.name": "1排",
      "business.region": "池座地区",
      "business.tier": "2层",
      "business.row": "2排"
    }
  }, {
    "class": "b2.Seat",
    "ref": 142,
    "p": {
      "name": "池座低区2排",
      "angle": 24,
      "parent": 141,
      "layerId": "center",
      "location": {
        "x": 385.50586,
        "y": 433.7386999999998
      },
      "width": 200,
      "height": 20
    },
    "s": {
      "grid.border": 1,
      "grid.deep": 1,
      "grid.deep.color": "rgba(0,0,0,0.2)",
      "grid.padding": 2,
      "grid.column.count": 10,
      "grid.row.count": 1,
      "grid.fill": false,
      "grid.fill.color": "rgba(0,0,0,0.4)",
      "label.position": "left.left",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "shadow.blur": 0,
      "select.padding": 0,
      "select.width": 2,
      "select.style": "border",
      "label.yoffset": -53.30000000000001,
      "label.xoffset": 3.3000000000000025,
      "label.rotate.angle": 26
    },
    "c": {
      "movable": true,
      "business.region": "池座地区",
      "business.tier": "2层",
      "business.row": "2排"
    }
  }, {
    "class": "b2.Follower",
    "ref": 143,
    "p": {
      "name": 20,
      "angle": 24,
      "parent": 142,
      "layerId": "top",
      "location": {
        "x": 559.0027602759557,
        "y": 472.9789348980536
      },
      "width": 15.8,
      "height": 14,
      "host": 142
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 24,
      "follower.column.index": 9
    },
    "c": {
      "column.number": 20,
      "column.name": "20号",
      "row.column.name": "1排20号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "池座地区",
      "business.tier": "2层",
      "business.row": "2排",
      "business.seat": "20号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 144,
    "p": {
      "name": 22,
      "angle": 24,
      "parent": 142,
      "layerId": "top",
      "location": {
        "x": 540.9145602146322,
        "y": 464.92554936515273
      },
      "width": 15.8,
      "height": 14,
      "host": 142
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 24,
      "follower.column.index": 8
    },
    "c": {
      "column.number": 22,
      "column.name": "22号",
      "row.column.name": "1排22号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "池座地区",
      "business.tier": "2层",
      "business.row": "2排",
      "business.seat": "22号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 145,
    "p": {
      "name": 24,
      "angle": 24,
      "parent": 142,
      "layerId": "top",
      "location": {
        "x": 522.8263601533087,
        "y": 456.8721638322519
      },
      "width": 15.8,
      "height": 14,
      "host": 142
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 24,
      "follower.column.index": 7
    },
    "c": {
      "column.number": 24,
      "column.name": "24号",
      "row.column.name": "1排24号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "池座地区",
      "business.tier": "2层",
      "business.row": "2排",
      "business.seat": "24号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 146,
    "p": {
      "name": 26,
      "angle": 24,
      "parent": 142,
      "layerId": "top",
      "location": {
        "x": 504.7381600919854,
        "y": 448.81877829935104
      },
      "width": 15.8,
      "height": 14,
      "host": 142
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 24,
      "follower.column.index": 6
    },
    "c": {
      "column.number": 26,
      "column.name": "26号",
      "row.column.name": "1排26号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "池座地区",
      "business.tier": "2层",
      "business.row": "2排",
      "business.seat": "26号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 147,
    "p": {
      "name": 28,
      "angle": 24,
      "parent": 142,
      "layerId": "top",
      "location": {
        "x": 486.6499600306617,
        "y": 440.7653927664502
      },
      "width": 15.8,
      "height": 14,
      "host": 142
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 24,
      "follower.column.index": 5
    },
    "c": {
      "column.number": 28,
      "column.name": "28号",
      "row.column.name": "1排28号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "池座地区",
      "business.tier": "2层",
      "business.row": "2排",
      "business.seat": "28号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 148,
    "p": {
      "name": 30,
      "angle": 24,
      "parent": 142,
      "layerId": "top",
      "location": {
        "x": 468.56175996933825,
        "y": 432.71200723354934
      },
      "width": 15.8,
      "height": 14,
      "host": 142
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 24,
      "follower.column.index": 4
    },
    "c": {
      "column.number": 30,
      "column.name": "30号",
      "row.column.name": "1排30号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "池座地区",
      "business.tier": "2层",
      "business.row": "2排",
      "business.seat": "30号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 149,
    "p": {
      "name": 32,
      "angle": 24,
      "parent": 142,
      "layerId": "top",
      "location": {
        "x": 450.47355990801475,
        "y": 424.6586217006485
      },
      "width": 15.8,
      "height": 14,
      "host": 142
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 24,
      "follower.column.index": 3
    },
    "c": {
      "column.number": 32,
      "column.name": "32号",
      "row.column.name": "1排32号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "池座地区",
      "business.tier": "2层",
      "business.row": "2排",
      "business.seat": "32号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 150,
    "p": {
      "name": 34,
      "angle": 24,
      "parent": 142,
      "layerId": "top",
      "location": {
        "x": 432.38535984669124,
        "y": 416.60523616774765
      },
      "width": 15.8,
      "height": 14,
      "host": 142
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 24,
      "follower.column.index": 2
    },
    "c": {
      "column.number": 34,
      "column.name": "34号",
      "row.column.name": "1排34号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "池座地区",
      "business.tier": "2层",
      "business.row": "2排",
      "business.seat": "34号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 151,
    "p": {
      "name": 36,
      "angle": 24,
      "parent": 142,
      "layerId": "top",
      "location": {
        "x": 414.29715978536774,
        "y": 408.5518506348468
      },
      "width": 15.8,
      "height": 14,
      "host": 142
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 24,
      "follower.column.index": 1
    },
    "c": {
      "column.number": 36,
      "column.name": "36号",
      "row.column.name": "1排36号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "池座地区",
      "business.tier": "2层",
      "business.row": "2排",
      "business.seat": "36号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 152,
    "p": {
      "name": 38,
      "angle": 24,
      "parent": 142,
      "layerId": "top",
      "location": {
        "x": 396.20895972404423,
        "y": 400.49846510194595
      },
      "width": 15.8,
      "height": 14,
      "host": 142
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 24,
      "follower.column.index": 0
    },
    "c": {
      "column.number": 38,
      "column.name": "38号",
      "row.column.name": "1排38号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "池座地区",
      "business.tier": "2层",
      "business.row": "2排",
      "business.seat": "38号"
    }
  }, {
    "class": "b2.Seat",
    "ref": 153,
    "p": {
      "name": "池座低区2排",
      "parent": 141,
      "layerId": "center",
      "location": {
        "x": 670.9772599999999,
        "y": 487.6616999999999
      },
      "width": 380,
      "height": 20
    },
    "s": {
      "grid.border": 1,
      "grid.deep": 1,
      "grid.deep.color": "rgba(0,0,0,0.2)",
      "grid.padding": 2,
      "grid.column.count": 19,
      "grid.row.count": 1,
      "grid.fill": false,
      "grid.fill.color": "rgba(0,0,0,0.4)",
      "label.position": "left.left",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "shadow.blur": 0,
      "select.padding": 0,
      "select.width": 2,
      "select.style": "border"
    },
    "c": {
      "movable": true,
      "business.region": "池座地区",
      "business.tier": "2层",
      "business.row": "2排"
    }
  }, {
    "class": "b2.Follower",
    "ref": 154,
    "p": {
      "name": 1,
      "parent": 153,
      "layerId": "top",
      "location": {
        "x": 853.0298915789473,
        "y": 490.6616999999999
      },
      "width": 15.894736842105264,
      "height": 14,
      "host": 153
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 0,
      "follower.column.index": 9
    },
    "c": {
      "column.number": 1,
      "column.name": "1号",
      "row.column.name": "1排1号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "池座地区",
      "business.tier": "2层",
      "business.row": "2排",
      "business.seat": "1号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 155,
    "p": {
      "name": 2,
      "parent": 153,
      "layerId": "top",
      "location": {
        "x": 833.135154736842,
        "y": 490.6616999999999
      },
      "width": 15.894736842105264,
      "height": 14,
      "host": 153
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 0,
      "follower.column.index": 8
    },
    "c": {
      "column.number": 2,
      "column.name": "2号",
      "row.column.name": "1排2号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "池座地区",
      "business.tier": "2层",
      "business.row": "2排",
      "business.seat": "2号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 156,
    "p": {
      "name": 4,
      "parent": 153,
      "layerId": "top",
      "location": {
        "x": 813.2404178947368,
        "y": 490.6616999999999
      },
      "width": 15.894736842105264,
      "height": 14,
      "host": 153
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 0,
      "follower.column.index": 7
    },
    "c": {
      "column.number": 4,
      "column.name": "4号",
      "row.column.name": "1排4号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "池座地区",
      "business.tier": "2层",
      "business.row": "2排",
      "business.seat": "4号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 157,
    "p": {
      "name": 6,
      "parent": 153,
      "layerId": "top",
      "location": {
        "x": 793.3456810526314,
        "y": 490.6616999999999
      },
      "width": 15.894736842105264,
      "height": 14,
      "host": 153
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 0,
      "follower.column.index": 6
    },
    "c": {
      "column.number": 6,
      "column.name": "6号",
      "row.column.name": "1排6号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "池座地区",
      "business.tier": "2层",
      "business.row": "2排",
      "business.seat": "6号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 158,
    "p": {
      "name": 8,
      "parent": 153,
      "layerId": "top",
      "location": {
        "x": 773.4509442105262,
        "y": 490.6616999999999
      },
      "width": 15.894736842105264,
      "height": 14,
      "host": 153
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 0,
      "follower.column.index": 5
    },
    "c": {
      "column.number": 8,
      "column.name": "8号",
      "row.column.name": "1排8号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "池座地区",
      "business.tier": "2层",
      "business.row": "2排",
      "business.seat": "8号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 159,
    "p": {
      "name": 10,
      "parent": 153,
      "layerId": "top",
      "location": {
        "x": 753.5562073684209,
        "y": 490.6616999999999
      },
      "width": 15.894736842105264,
      "height": 14,
      "host": 153
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 0,
      "follower.column.index": 4
    },
    "c": {
      "column.number": 10,
      "column.name": "10号",
      "row.column.name": "1排10号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "池座地区",
      "business.tier": "2层",
      "business.row": "2排",
      "business.seat": "10号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 160,
    "p": {
      "name": 12,
      "parent": 153,
      "layerId": "top",
      "location": {
        "x": 733.6614705263157,
        "y": 490.6616999999999
      },
      "width": 15.894736842105264,
      "height": 14,
      "host": 153
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 0,
      "follower.column.index": 3
    },
    "c": {
      "column.number": 12,
      "column.name": "12号",
      "row.column.name": "1排12号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "池座地区",
      "business.tier": "2层",
      "business.row": "2排",
      "business.seat": "12号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 161,
    "p": {
      "name": 14,
      "parent": 153,
      "layerId": "top",
      "location": {
        "x": 713.7667336842104,
        "y": 490.6616999999999
      },
      "width": 15.894736842105264,
      "height": 14,
      "host": 153
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 0,
      "follower.column.index": 2
    },
    "c": {
      "column.number": 14,
      "column.name": "14号",
      "row.column.name": "1排14号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "池座地区",
      "business.tier": "2层",
      "business.row": "2排",
      "business.seat": "14号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 162,
    "p": {
      "name": 16,
      "parent": 153,
      "layerId": "top",
      "location": {
        "x": 693.8719968421052,
        "y": 490.6616999999999
      },
      "width": 15.894736842105264,
      "height": 14,
      "host": 153
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 0,
      "follower.column.index": 1
    },
    "c": {
      "column.number": 16,
      "column.name": "16号",
      "row.column.name": "1排16号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "池座地区",
      "business.tier": "2层",
      "business.row": "2排",
      "business.seat": "16号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 163,
    "p": {
      "name": 18,
      "parent": 153,
      "layerId": "top",
      "location": {
        "x": 673.9772599999999,
        "y": 490.6616999999999
      },
      "width": 15.894736842105264,
      "height": 14,
      "host": 153
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 0,
      "follower.column.index": 0
    },
    "c": {
      "column.number": 18,
      "column.name": "18号",
      "row.column.name": "1排18号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "池座地区",
      "business.tier": "2层",
      "business.row": "2排",
      "business.seat": "18号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 164,
    "p": {
      "name": 3,
      "parent": 153,
      "layerId": "top",
      "location": {
        "x": 872.9246284210525,
        "y": 490.6616999999999
      },
      "width": 15.894736842105264,
      "height": 14,
      "host": 153
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 0,
      "follower.column.index": 10
    },
    "c": {
      "column.number": 3,
      "column.name": "3号",
      "row.column.name": "1排3号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "池座地区",
      "business.tier": "2层",
      "business.row": "2排",
      "business.seat": "3号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 165,
    "p": {
      "name": 5,
      "parent": 153,
      "layerId": "top",
      "location": {
        "x": 892.8193652631578,
        "y": 490.6616999999999
      },
      "width": 15.894736842105264,
      "height": 14,
      "host": 153
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 0,
      "follower.column.index": 11
    },
    "c": {
      "column.number": 5,
      "column.name": "5号",
      "row.column.name": "1排5号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "池座地区",
      "business.tier": "2层",
      "business.row": "2排",
      "business.seat": "5号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 166,
    "p": {
      "name": 7,
      "parent": 153,
      "layerId": "top",
      "location": {
        "x": 912.714102105263,
        "y": 490.6616999999999
      },
      "width": 15.894736842105264,
      "height": 14,
      "host": 153
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 0,
      "follower.column.index": 12
    },
    "c": {
      "column.number": 7,
      "column.name": "7号",
      "row.column.name": "1排7号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "池座地区",
      "business.tier": "2层",
      "business.row": "2排",
      "business.seat": "7号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 167,
    "p": {
      "name": 9,
      "parent": 153,
      "layerId": "top",
      "location": {
        "x": 932.6088389473683,
        "y": 490.6616999999999
      },
      "width": 15.894736842105264,
      "height": 14,
      "host": 153
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 0,
      "follower.column.index": 13
    },
    "c": {
      "column.number": 9,
      "column.name": "9号",
      "row.column.name": "1排9号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "池座地区",
      "business.tier": "2层",
      "business.row": "2排",
      "business.seat": "9号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 168,
    "p": {
      "name": 11,
      "parent": 153,
      "layerId": "top",
      "location": {
        "x": 952.5035757894736,
        "y": 490.6616999999999
      },
      "width": 15.894736842105264,
      "height": 14,
      "host": 153
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 0,
      "follower.column.index": 14
    },
    "c": {
      "column.number": 11,
      "column.name": "11号",
      "row.column.name": "1排11号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "池座地区",
      "business.tier": "2层",
      "business.row": "2排",
      "business.seat": "11号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 169,
    "p": {
      "name": 13,
      "parent": 153,
      "layerId": "top",
      "location": {
        "x": 972.3983126315788,
        "y": 490.6616999999999
      },
      "width": 15.894736842105264,
      "height": 14,
      "host": 153
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 0,
      "follower.column.index": 15
    },
    "c": {
      "column.number": 13,
      "column.name": "13号",
      "row.column.name": "1排13号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "池座地区",
      "business.tier": "2层",
      "business.row": "2排",
      "business.seat": "13号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 170,
    "p": {
      "name": 15,
      "parent": 153,
      "layerId": "top",
      "location": {
        "x": 992.293049473684,
        "y": 490.6616999999999
      },
      "width": 15.894736842105264,
      "height": 14,
      "host": 153
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 0,
      "follower.column.index": 16
    },
    "c": {
      "column.number": 15,
      "column.name": "15号",
      "row.column.name": "1排15号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "池座地区",
      "business.tier": "2层",
      "business.row": "2排",
      "business.seat": "15号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 171,
    "p": {
      "name": 17,
      "parent": 153,
      "layerId": "top",
      "location": {
        "x": 1012.1877863157894,
        "y": 490.6616999999999
      },
      "width": 15.894736842105264,
      "height": 14,
      "host": 153
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 0,
      "follower.column.index": 17
    },
    "c": {
      "column.number": 17,
      "column.name": "17号",
      "row.column.name": "1排17号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "池座地区",
      "business.tier": "2层",
      "business.row": "2排",
      "business.seat": "17号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 172,
    "p": {
      "name": 19,
      "parent": 153,
      "layerId": "top",
      "location": {
        "x": 1032.0825231578947,
        "y": 490.6616999999999
      },
      "width": 15.894736842105264,
      "height": 14,
      "host": 153
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 0,
      "follower.column.index": 18
    },
    "c": {
      "column.number": 19,
      "column.name": "19号",
      "row.column.name": "1排19号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "池座地区",
      "business.tier": "2层",
      "business.row": "2排",
      "business.seat": "19号"
    }
  }, {
    "class": "b2.Seat",
    "ref": 173,
    "p": {
      "name": "池座低区2排",
      "angle": -24,
      "parent": 141,
      "layerId": "center",
      "location": {
        "x": 1129.2405600000004,
        "y": 426.16949999999986
      },
      "width": 200,
      "height": 20
    },
    "s": {
      "grid.border": 1,
      "grid.deep": 1,
      "grid.deep.color": "rgba(0,0,0,0.2)",
      "grid.padding": 2,
      "grid.column.count": 10,
      "grid.row.count": 1,
      "grid.fill": false,
      "grid.fill.color": "rgba(0,0,0,0.4)",
      "label.position": "left.left",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "shadow.blur": 0,
      "select.padding": 0,
      "select.width": 2,
      "select.style": "border",
      "label.yoffset": 60.29999999999998,
      "label.xoffset": 4,
      "label.rotate.angle": -31
    },
    "c": {
      "movable": true,
      "business.region": "池座地区",
      "business.tier": "2层",
      "business.row": "2排"
    }
  }, {
    "class": "b2.Follower",
    "ref": 174,
    "p": {
      "name": 21,
      "angle": -24,
      "parent": 173,
      "layerId": "top",
      "location": {
        "x": 1139.9436597240444,
        "y": 465.40973489805367
      },
      "width": 15.8,
      "height": 14,
      "host": 173
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": -24,
      "follower.column.index": 0
    },
    "c": {
      "column.number": 21,
      "column.name": "21号",
      "row.column.name": "1排21号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "池座地区",
      "business.tier": "2层",
      "business.row": "2排",
      "business.seat": "21号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 175,
    "p": {
      "name": 23,
      "angle": -24,
      "parent": 173,
      "layerId": "top",
      "location": {
        "x": 1158.031859785368,
        "y": 457.3563493651529
      },
      "width": 15.8,
      "height": 14,
      "host": 173
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": -24,
      "follower.column.index": 1
    },
    "c": {
      "column.number": 23,
      "column.name": "23号",
      "row.column.name": "1排23号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "池座地区",
      "business.tier": "2层",
      "business.row": "2排",
      "business.seat": "23号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 176,
    "p": {
      "name": 25,
      "angle": -24,
      "parent": 173,
      "layerId": "top",
      "location": {
        "x": 1176.1200598466914,
        "y": 449.30296383225203
      },
      "width": 15.8,
      "height": 14,
      "host": 173
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": -24,
      "follower.column.index": 2
    },
    "c": {
      "column.number": 25,
      "column.name": "25号",
      "row.column.name": "1排25号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "池座地区",
      "business.tier": "2层",
      "business.row": "2排",
      "business.seat": "25号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 177,
    "p": {
      "name": 27,
      "angle": -24,
      "parent": 173,
      "layerId": "top",
      "location": {
        "x": 1194.2082599080152,
        "y": 441.2495782993511
      },
      "width": 15.8,
      "height": 14,
      "host": 173
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": -24,
      "follower.column.index": 3
    },
    "c": {
      "column.number": 27,
      "column.name": "27号",
      "row.column.name": "1排27号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "池座地区",
      "business.tier": "2层",
      "business.row": "2排",
      "business.seat": "27号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 178,
    "p": {
      "name": 29,
      "angle": -24,
      "parent": 173,
      "layerId": "top",
      "location": {
        "x": 1212.2964599693385,
        "y": 433.1961927664503
      },
      "width": 15.8,
      "height": 14,
      "host": 173
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": -24,
      "follower.column.index": 4
    },
    "c": {
      "column.number": 29,
      "column.name": "29号",
      "row.column.name": "1排29号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "池座地区",
      "business.tier": "2层",
      "business.row": "2排",
      "business.seat": "29号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 179,
    "p": {
      "name": 31,
      "angle": -24,
      "parent": 173,
      "layerId": "top",
      "location": {
        "x": 1230.384660030662,
        "y": 425.1428072335495
      },
      "width": 15.8,
      "height": 14,
      "host": 173
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": -24,
      "follower.column.index": 5
    },
    "c": {
      "column.number": 31,
      "column.name": "31号",
      "row.column.name": "1排31号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "池座地区",
      "business.tier": "2层",
      "business.row": "2排",
      "business.seat": "31号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 180,
    "p": {
      "name": 33,
      "angle": -24,
      "parent": 173,
      "layerId": "top",
      "location": {
        "x": 1248.4728600919855,
        "y": 417.08942170064864
      },
      "width": 15.8,
      "height": 14,
      "host": 173
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": -24,
      "follower.column.index": 6
    },
    "c": {
      "column.number": 33,
      "column.name": "33号",
      "row.column.name": "1排33号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "池座地区",
      "business.tier": "2层",
      "business.row": "2排",
      "business.seat": "33号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 181,
    "p": {
      "name": 35,
      "angle": -24,
      "parent": 173,
      "layerId": "top",
      "location": {
        "x": 1266.561060153309,
        "y": 409.0360361677478
      },
      "width": 15.8,
      "height": 14,
      "host": 173
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": -24,
      "follower.column.index": 7
    },
    "c": {
      "column.number": 35,
      "column.name": "35号",
      "row.column.name": "1排35号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "池座地区",
      "business.tier": "2层",
      "business.row": "2排",
      "business.seat": "35号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 182,
    "p": {
      "name": 37,
      "angle": -24,
      "parent": 173,
      "layerId": "top",
      "location": {
        "x": 1284.6492602146325,
        "y": 400.98265063484695
      },
      "width": 15.8,
      "height": 14,
      "host": 173
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": -24,
      "follower.column.index": 8
    },
    "c": {
      "column.number": 37,
      "column.name": "37号",
      "row.column.name": "1排37号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "池座地区",
      "business.tier": "2层",
      "business.row": "2排",
      "business.seat": "37号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 183,
    "p": {
      "name": 39,
      "angle": -24,
      "parent": 173,
      "layerId": "top",
      "location": {
        "x": 1302.737460275956,
        "y": 392.9292651019461
      },
      "width": 15.8,
      "height": 14,
      "host": 173
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": -24,
      "follower.column.index": 9
    },
    "c": {
      "column.number": 39,
      "column.name": "39号",
      "row.column.name": "1排39号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "池座地区",
      "business.tier": "2层",
      "business.row": "2排",
      "business.seat": "39号"
    }
  }, {
    "class": "b2.Group",
    "ref": 184,
    "p": {
      "name": "池座低区3排",
      "layerId": "center",
      "location": {
        "x": 841.3732100000002,
        "y": 501.67204055799715
      },
      "expanded": true
    },
    "s": {
      "group.fill": false,
      "group.fill.color": "#FFFFFF",
      "group.shape": "roundrect",
      "group.outline.width": 0,
      "group.outline.color": "#000000",
      "group.padding": 0,
      "vector.outline.pattern": [2, 2],
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "label.position": "left.left"
    },
    "c": {
      "movable": false,
      "row.number": 1,
      "row.name": "1排",
      "business.region": "池座低区",
      "business.tier": "2层",
      "business.row": "3排"
    }
  }, {
    "class": "b2.Seat",
    "ref": 185,
    "p": {
      "name": "池座低区3排",
      "angle": 24,
      "parent": 184,
      "layerId": "center",
      "location": {
        "x": 385.50586,
        "y": 500.3997000000001
      },
      "width": 200,
      "height": 20
    },
    "s": {
      "grid.border": 1,
      "grid.deep": 1,
      "grid.deep.color": "rgba(0,0,0,0.2)",
      "grid.padding": 2,
      "grid.column.count": 10,
      "grid.row.count": 1,
      "grid.fill": false,
      "grid.fill.color": "rgba(0,0,0,0.4)",
      "label.position": "left.left",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "shadow.blur": 0,
      "select.padding": 0,
      "select.width": 2,
      "select.style": "border",
      "label.yoffset": -53.30000000000001,
      "label.xoffset": 3.3000000000000025,
      "label.rotate.angle": 26
    },
    "c": {
      "movable": true,
      "business.region": "池座低区",
      "business.tier": "2层",
      "business.row": "3排"
    }
  }, {
    "class": "b2.Follower",
    "ref": 186,
    "p": {
      "name": 20,
      "angle": 24,
      "parent": 185,
      "layerId": "top",
      "location": {
        "x": 559.0027602759558,
        "y": 539.6399348980539
      },
      "width": 15.8,
      "height": 14,
      "host": 185
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 24,
      "follower.column.index": 9
    },
    "c": {
      "column.number": 20,
      "column.name": "20号",
      "row.column.name": "1排20号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "池座低区",
      "business.tier": "2层",
      "business.row": "3排",
      "business.seat": "20号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 187,
    "p": {
      "name": 22,
      "angle": 24,
      "parent": 185,
      "layerId": "top",
      "location": {
        "x": 540.9145602146322,
        "y": 531.586549365153
      },
      "width": 15.8,
      "height": 14,
      "host": 185
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 24,
      "follower.column.index": 8
    },
    "c": {
      "column.number": 22,
      "column.name": "22号",
      "row.column.name": "1排22号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "池座低区",
      "business.tier": "2层",
      "business.row": "3排",
      "business.seat": "22号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 188,
    "p": {
      "name": 24,
      "angle": 24,
      "parent": 185,
      "layerId": "top",
      "location": {
        "x": 522.8263601533088,
        "y": 523.5331638322522
      },
      "width": 15.8,
      "height": 14,
      "host": 185
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 24,
      "follower.column.index": 7
    },
    "c": {
      "column.number": 24,
      "column.name": "24号",
      "row.column.name": "1排24号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "池座低区",
      "business.tier": "2层",
      "business.row": "3排",
      "business.seat": "24号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 189,
    "p": {
      "name": 26,
      "angle": 24,
      "parent": 185,
      "layerId": "top",
      "location": {
        "x": 504.73816009198526,
        "y": 515.4797782993514
      },
      "width": 15.8,
      "height": 14,
      "host": 185
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 24,
      "follower.column.index": 6
    },
    "c": {
      "column.number": 26,
      "column.name": "26号",
      "row.column.name": "1排26号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "池座低区",
      "business.tier": "2层",
      "business.row": "3排",
      "business.seat": "26号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 190,
    "p": {
      "name": 28,
      "angle": 24,
      "parent": 185,
      "layerId": "top",
      "location": {
        "x": 486.64996003066176,
        "y": 507.4263927664505
      },
      "width": 15.8,
      "height": 14,
      "host": 185
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 24,
      "follower.column.index": 5
    },
    "c": {
      "column.number": 28,
      "column.name": "28号",
      "row.column.name": "1排28号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "池座低区",
      "business.tier": "2层",
      "business.row": "3排",
      "business.seat": "28号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 191,
    "p": {
      "name": 30,
      "angle": 24,
      "parent": 185,
      "layerId": "top",
      "location": {
        "x": 468.56175996933825,
        "y": 499.37300723354963
      },
      "width": 15.8,
      "height": 14,
      "host": 185
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 24,
      "follower.column.index": 4
    },
    "c": {
      "column.number": 30,
      "column.name": "30号",
      "row.column.name": "1排30号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "池座低区",
      "business.tier": "2层",
      "business.row": "3排",
      "business.seat": "30号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 192,
    "p": {
      "name": 32,
      "angle": 24,
      "parent": 185,
      "layerId": "top",
      "location": {
        "x": 450.47355990801475,
        "y": 491.3196217006488
      },
      "width": 15.8,
      "height": 14,
      "host": 185
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 24,
      "follower.column.index": 3
    },
    "c": {
      "column.number": 32,
      "column.name": "32号",
      "row.column.name": "1排32号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "池座低区",
      "business.tier": "2层",
      "business.row": "3排",
      "business.seat": "32号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 193,
    "p": {
      "name": 34,
      "angle": 24,
      "parent": 185,
      "layerId": "top",
      "location": {
        "x": 432.38535984669124,
        "y": 483.26623616774805
      },
      "width": 15.8,
      "height": 14,
      "host": 185
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 24,
      "follower.column.index": 2
    },
    "c": {
      "column.number": 34,
      "column.name": "34号",
      "row.column.name": "1排34号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "池座低区",
      "business.tier": "2层",
      "business.row": "3排",
      "business.seat": "34号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 194,
    "p": {
      "name": 36,
      "angle": 24,
      "parent": 185,
      "layerId": "top",
      "location": {
        "x": 414.29715978536774,
        "y": 475.2128506348472
      },
      "width": 15.8,
      "height": 14,
      "host": 185
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 24,
      "follower.column.index": 1
    },
    "c": {
      "column.number": 36,
      "column.name": "36号",
      "row.column.name": "1排36号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "池座低区",
      "business.tier": "2层",
      "business.row": "3排",
      "business.seat": "36号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 195,
    "p": {
      "name": 38,
      "angle": 24,
      "parent": 185,
      "layerId": "top",
      "location": {
        "x": 396.20895972404423,
        "y": 467.15946510194635
      },
      "width": 15.8,
      "height": 14,
      "host": 185
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 24,
      "follower.column.index": 0
    },
    "c": {
      "column.number": 38,
      "column.name": "38号",
      "row.column.name": "1排38号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "池座低区",
      "business.tier": "2层",
      "business.row": "3排",
      "business.seat": "38号"
    }
  }, {
    "class": "b2.Seat",
    "ref": 196,
    "p": {
      "name": "池座低区3排",
      "parent": 184,
      "layerId": "center",
      "location": {
        "x": 670.9772599999999,
        "y": 554.3227000000002
      },
      "width": 380,
      "height": 20
    },
    "s": {
      "grid.border": 1,
      "grid.deep": 1,
      "grid.deep.color": "rgba(0,0,0,0.2)",
      "grid.padding": 2,
      "grid.column.count": 19,
      "grid.row.count": 1,
      "grid.fill": false,
      "grid.fill.color": "rgba(0,0,0,0.4)",
      "label.position": "left.left",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "shadow.blur": 0,
      "select.padding": 0,
      "select.width": 2,
      "select.style": "border"
    },
    "c": {
      "movable": true,
      "business.region": "池座低区",
      "business.tier": "2层",
      "business.row": "3排"
    }
  }, {
    "class": "b2.Follower",
    "ref": 197,
    "p": {
      "name": 1,
      "parent": 196,
      "layerId": "top",
      "location": {
        "x": 853.0298915789473,
        "y": 557.3227000000002
      },
      "width": 15.894736842105264,
      "height": 14,
      "host": 196
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 0,
      "follower.column.index": 9
    },
    "c": {
      "column.number": 1,
      "column.name": "1号",
      "row.column.name": "1排1号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "池座低区",
      "business.tier": "2层",
      "business.row": "3排",
      "business.seat": "1号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 198,
    "p": {
      "name": 2,
      "parent": 196,
      "layerId": "top",
      "location": {
        "x": 833.135154736842,
        "y": 557.3227000000002
      },
      "width": 15.894736842105264,
      "height": 14,
      "host": 196
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 0,
      "follower.column.index": 8
    },
    "c": {
      "column.number": 2,
      "column.name": "2号",
      "row.column.name": "1排2号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "池座低区",
      "business.tier": "2层",
      "business.row": "3排",
      "business.seat": "2号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 199,
    "p": {
      "name": 4,
      "parent": 196,
      "layerId": "top",
      "location": {
        "x": 813.2404178947368,
        "y": 557.3227000000002
      },
      "width": 15.894736842105264,
      "height": 14,
      "host": 196
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 0,
      "follower.column.index": 7
    },
    "c": {
      "column.number": 4,
      "column.name": "4号",
      "row.column.name": "1排4号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "池座低区",
      "business.tier": "2层",
      "business.row": "3排",
      "business.seat": "4号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 200,
    "p": {
      "name": 6,
      "parent": 196,
      "layerId": "top",
      "location": {
        "x": 793.3456810526314,
        "y": 557.3227000000002
      },
      "width": 15.894736842105264,
      "height": 14,
      "host": 196
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 0,
      "follower.column.index": 6
    },
    "c": {
      "column.number": 6,
      "column.name": "6号",
      "row.column.name": "1排6号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "池座低区",
      "business.tier": "2层",
      "business.row": "3排",
      "business.seat": "6号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 201,
    "p": {
      "name": 8,
      "parent": 196,
      "layerId": "top",
      "location": {
        "x": 773.4509442105262,
        "y": 557.3227000000002
      },
      "width": 15.894736842105264,
      "height": 14,
      "host": 196
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 0,
      "follower.column.index": 5
    },
    "c": {
      "column.number": 8,
      "column.name": "8号",
      "row.column.name": "1排8号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "池座低区",
      "business.tier": "2层",
      "business.row": "3排",
      "business.seat": "8号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 202,
    "p": {
      "name": 10,
      "parent": 196,
      "layerId": "top",
      "location": {
        "x": 753.5562073684209,
        "y": 557.3227000000002
      },
      "width": 15.894736842105264,
      "height": 14,
      "host": 196
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 0,
      "follower.column.index": 4
    },
    "c": {
      "column.number": 10,
      "column.name": "10号",
      "row.column.name": "1排10号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "池座低区",
      "business.tier": "2层",
      "business.row": "3排",
      "business.seat": "10号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 203,
    "p": {
      "name": 12,
      "parent": 196,
      "layerId": "top",
      "location": {
        "x": 733.6614705263157,
        "y": 557.3227000000002
      },
      "width": 15.894736842105264,
      "height": 14,
      "host": 196
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 0,
      "follower.column.index": 3
    },
    "c": {
      "column.number": 12,
      "column.name": "12号",
      "row.column.name": "1排12号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "池座低区",
      "business.tier": "2层",
      "business.row": "3排",
      "business.seat": "12号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 204,
    "p": {
      "name": 14,
      "parent": 196,
      "layerId": "top",
      "location": {
        "x": 713.7667336842104,
        "y": 557.3227000000002
      },
      "width": 15.894736842105264,
      "height": 14,
      "host": 196
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 0,
      "follower.column.index": 2
    },
    "c": {
      "column.number": 14,
      "column.name": "14号",
      "row.column.name": "1排14号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "池座低区",
      "business.tier": "2层",
      "business.row": "3排",
      "business.seat": "14号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 205,
    "p": {
      "name": 16,
      "parent": 196,
      "layerId": "top",
      "location": {
        "x": 693.8719968421052,
        "y": 557.3227000000002
      },
      "width": 15.894736842105264,
      "height": 14,
      "host": 196
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 0,
      "follower.column.index": 1
    },
    "c": {
      "column.number": 16,
      "column.name": "16号",
      "row.column.name": "1排16号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "池座低区",
      "business.tier": "2层",
      "business.row": "3排",
      "business.seat": "16号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 206,
    "p": {
      "name": 18,
      "parent": 196,
      "layerId": "top",
      "location": {
        "x": 673.9772599999999,
        "y": 557.3227000000002
      },
      "width": 15.894736842105264,
      "height": 14,
      "host": 196
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 0,
      "follower.column.index": 0
    },
    "c": {
      "column.number": 18,
      "column.name": "18号",
      "row.column.name": "1排18号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "池座低区",
      "business.tier": "2层",
      "business.row": "3排",
      "business.seat": "18号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 207,
    "p": {
      "name": 3,
      "parent": 196,
      "layerId": "top",
      "location": {
        "x": 872.9246284210525,
        "y": 557.3227000000002
      },
      "width": 15.894736842105264,
      "height": 14,
      "host": 196
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 0,
      "follower.column.index": 10
    },
    "c": {
      "column.number": 3,
      "column.name": "3号",
      "row.column.name": "1排3号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "池座低区",
      "business.tier": "2层",
      "business.row": "3排",
      "business.seat": "3号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 208,
    "p": {
      "name": 5,
      "parent": 196,
      "layerId": "top",
      "location": {
        "x": 892.8193652631578,
        "y": 557.3227000000002
      },
      "width": 15.894736842105264,
      "height": 14,
      "host": 196
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 0,
      "follower.column.index": 11
    },
    "c": {
      "column.number": 5,
      "column.name": "5号",
      "row.column.name": "1排5号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "池座低区",
      "business.tier": "2层",
      "business.row": "3排",
      "business.seat": "5号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 209,
    "p": {
      "name": 7,
      "parent": 196,
      "layerId": "top",
      "location": {
        "x": 912.714102105263,
        "y": 557.3227000000002
      },
      "width": 15.894736842105264,
      "height": 14,
      "host": 196
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 0,
      "follower.column.index": 12
    },
    "c": {
      "column.number": 7,
      "column.name": "7号",
      "row.column.name": "1排7号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "池座低区",
      "business.tier": "2层",
      "business.row": "3排",
      "business.seat": "7号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 210,
    "p": {
      "name": 9,
      "parent": 196,
      "layerId": "top",
      "location": {
        "x": 932.6088389473683,
        "y": 557.3227000000002
      },
      "width": 15.894736842105264,
      "height": 14,
      "host": 196
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 0,
      "follower.column.index": 13
    },
    "c": {
      "column.number": 9,
      "column.name": "9号",
      "row.column.name": "1排9号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "池座低区",
      "business.tier": "2层",
      "business.row": "3排",
      "business.seat": "9号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 211,
    "p": {
      "name": 11,
      "parent": 196,
      "layerId": "top",
      "location": {
        "x": 952.5035757894736,
        "y": 557.3227000000002
      },
      "width": 15.894736842105264,
      "height": 14,
      "host": 196
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 0,
      "follower.column.index": 14
    },
    "c": {
      "column.number": 11,
      "column.name": "11号",
      "row.column.name": "1排11号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "池座低区",
      "business.tier": "2层",
      "business.row": "3排",
      "business.seat": "11号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 212,
    "p": {
      "name": 13,
      "parent": 196,
      "layerId": "top",
      "location": {
        "x": 972.3983126315788,
        "y": 557.3227000000002
      },
      "width": 15.894736842105264,
      "height": 14,
      "host": 196
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 0,
      "follower.column.index": 15
    },
    "c": {
      "column.number": 13,
      "column.name": "13号",
      "row.column.name": "1排13号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "池座低区",
      "business.tier": "2层",
      "business.row": "3排",
      "business.seat": "13号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 213,
    "p": {
      "name": 15,
      "parent": 196,
      "layerId": "top",
      "location": {
        "x": 992.293049473684,
        "y": 557.3227000000002
      },
      "width": 15.894736842105264,
      "height": 14,
      "host": 196
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 0,
      "follower.column.index": 16
    },
    "c": {
      "column.number": 15,
      "column.name": "15号",
      "row.column.name": "1排15号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "池座低区",
      "business.tier": "2层",
      "business.row": "3排",
      "business.seat": "15号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 214,
    "p": {
      "name": 17,
      "parent": 196,
      "layerId": "top",
      "location": {
        "x": 1012.1877863157894,
        "y": 557.3227000000002
      },
      "width": 15.894736842105264,
      "height": 14,
      "host": 196
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 0,
      "follower.column.index": 17
    },
    "c": {
      "column.number": 17,
      "column.name": "17号",
      "row.column.name": "1排17号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "池座低区",
      "business.tier": "2层",
      "business.row": "3排",
      "business.seat": "17号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 215,
    "p": {
      "name": 19,
      "parent": 196,
      "layerId": "top",
      "location": {
        "x": 1032.0825231578947,
        "y": 557.3227000000002
      },
      "width": 15.894736842105264,
      "height": 14,
      "host": 196
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 0,
      "follower.column.index": 18
    },
    "c": {
      "column.number": 19,
      "column.name": "19号",
      "row.column.name": "1排19号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "池座低区",
      "business.tier": "2层",
      "business.row": "3排",
      "business.seat": "19号"
    }
  }, {
    "class": "b2.Seat",
    "ref": 216,
    "p": {
      "name": "池座低区3排",
      "angle": -24,
      "parent": 184,
      "layerId": "center",
      "location": {
        "x": 1129.2405600000004,
        "y": 492.83050000000014
      },
      "width": 200,
      "height": 20
    },
    "s": {
      "grid.border": 1,
      "grid.deep": 1,
      "grid.deep.color": "rgba(0,0,0,0.2)",
      "grid.padding": 2,
      "grid.column.count": 10,
      "grid.row.count": 1,
      "grid.fill": false,
      "grid.fill.color": "rgba(0,0,0,0.4)",
      "label.position": "left.left",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "shadow.blur": 0,
      "select.padding": 0,
      "select.width": 2,
      "select.style": "border",
      "label.yoffset": 60.29999999999998,
      "label.xoffset": 4,
      "label.rotate.angle": -31
    },
    "c": {
      "movable": true,
      "business.region": "池座低区",
      "business.tier": "2层",
      "business.row": "3排"
    }
  }, {
    "class": "b2.Follower",
    "ref": 217,
    "p": {
      "name": 21,
      "angle": -24,
      "parent": 216,
      "layerId": "top",
      "location": {
        "x": 1139.9436597240447,
        "y": 532.0707348980538
      },
      "width": 15.8,
      "height": 14,
      "host": 216
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": -24,
      "follower.column.index": 0
    },
    "c": {
      "column.number": 21,
      "column.name": "21号",
      "row.column.name": "1排21号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "池座低区",
      "business.tier": "2层",
      "business.row": "3排",
      "business.seat": "21号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 218,
    "p": {
      "name": 23,
      "angle": -24,
      "parent": 216,
      "layerId": "top",
      "location": {
        "x": 1158.031859785368,
        "y": 524.017349365153
      },
      "width": 15.8,
      "height": 14,
      "host": 216
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": -24,
      "follower.column.index": 1
    },
    "c": {
      "column.number": 23,
      "column.name": "23号",
      "row.column.name": "1排23号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "池座低区",
      "business.tier": "2层",
      "business.row": "3排",
      "business.seat": "23号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 219,
    "p": {
      "name": 25,
      "angle": -24,
      "parent": 216,
      "layerId": "top",
      "location": {
        "x": 1176.1200598466917,
        "y": 515.9639638322521
      },
      "width": 15.8,
      "height": 14,
      "host": 216
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": -24,
      "follower.column.index": 2
    },
    "c": {
      "column.number": 25,
      "column.name": "25号",
      "row.column.name": "1排25号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "池座低区",
      "business.tier": "2层",
      "business.row": "3排",
      "business.seat": "25号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 220,
    "p": {
      "name": 27,
      "angle": -24,
      "parent": 216,
      "layerId": "top",
      "location": {
        "x": 1194.2082599080154,
        "y": 507.9105782993513
      },
      "width": 15.8,
      "height": 14,
      "host": 216
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": -24,
      "follower.column.index": 3
    },
    "c": {
      "column.number": 27,
      "column.name": "27号",
      "row.column.name": "1排27号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "池座低区",
      "business.tier": "2层",
      "business.row": "3排",
      "business.seat": "27号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 221,
    "p": {
      "name": 29,
      "angle": -24,
      "parent": 216,
      "layerId": "top",
      "location": {
        "x": 1212.2964599693387,
        "y": 499.85719276645045
      },
      "width": 15.8,
      "height": 14,
      "host": 216
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": -24,
      "follower.column.index": 4
    },
    "c": {
      "column.number": 29,
      "column.name": "29号",
      "row.column.name": "1排29号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "池座低区",
      "business.tier": "2层",
      "business.row": "3排",
      "business.seat": "29号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 222,
    "p": {
      "name": 31,
      "angle": -24,
      "parent": 216,
      "layerId": "top",
      "location": {
        "x": 1230.384660030662,
        "y": 491.80380723354966
      },
      "width": 15.8,
      "height": 14,
      "host": 216
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": -24,
      "follower.column.index": 5
    },
    "c": {
      "column.number": 31,
      "column.name": "31号",
      "row.column.name": "1排31号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "池座低区",
      "business.tier": "2层",
      "business.row": "3排",
      "business.seat": "31号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 223,
    "p": {
      "name": 33,
      "angle": -24,
      "parent": 216,
      "layerId": "top",
      "location": {
        "x": 1248.4728600919857,
        "y": 483.7504217006488
      },
      "width": 15.8,
      "height": 14,
      "host": 216
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": -24,
      "follower.column.index": 6
    },
    "c": {
      "column.number": 33,
      "column.name": "33号",
      "row.column.name": "1排33号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "池座低区",
      "business.tier": "2层",
      "business.row": "3排",
      "business.seat": "33号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 224,
    "p": {
      "name": 35,
      "angle": -24,
      "parent": 216,
      "layerId": "top",
      "location": {
        "x": 1266.561060153309,
        "y": 475.69703616774797
      },
      "width": 15.8,
      "height": 14,
      "host": 216
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": -24,
      "follower.column.index": 7
    },
    "c": {
      "column.number": 35,
      "column.name": "35号",
      "row.column.name": "1排35号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "池座低区",
      "business.tier": "2层",
      "business.row": "3排",
      "business.seat": "35号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 225,
    "p": {
      "name": 37,
      "angle": -24,
      "parent": 216,
      "layerId": "top",
      "location": {
        "x": 1284.6492602146327,
        "y": 467.6436506348471
      },
      "width": 15.8,
      "height": 14,
      "host": 216
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": -24,
      "follower.column.index": 8
    },
    "c": {
      "column.number": 37,
      "column.name": "37号",
      "row.column.name": "1排37号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "池座低区",
      "business.tier": "2层",
      "business.row": "3排",
      "business.seat": "37号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 226,
    "p": {
      "name": 39,
      "angle": -24,
      "parent": 216,
      "layerId": "top",
      "location": {
        "x": 1302.737460275956,
        "y": 459.5902651019463
      },
      "width": 15.8,
      "height": 14,
      "host": 216
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#2A7FFF",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": -24,
      "follower.column.index": 9
    },
    "c": {
      "column.number": 39,
      "column.name": "39号",
      "row.column.name": "1排39号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "business.region": "池座低区",
      "business.tier": "2层",
      "business.row": "3排",
      "business.seat": "39号"
    }
  }, {
    "class": "b2.Group",
    "ref": 227,
    "p": {
      "name": "池座低区4排",
      "layerId": "center",
      "location": {
        "x": 841.3732100000002,
        "y": 565.0110405579967
      },
      "expanded": true
    },
    "s": {
      "group.fill": false,
      "group.fill.color": "#FFFFFF",
      "group.shape": "roundrect",
      "group.outline.width": 0,
      "group.outline.color": "#000000",
      "group.padding": 0,
      "vector.outline.pattern": [2, 2],
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "label.position": "left.left"
    },
    "c": {
      "movable": false,
      "row.number": 1,
      "row.name": "1排"
    }
  }, {
    "class": "b2.Seat",
    "ref": 228,
    "p": {
      "name": "池座低区4排",
      "angle": 24,
      "parent": 227,
      "layerId": "center",
      "location": {
        "x": 385.50586,
        "y": 563.7386999999998
      },
      "width": 200,
      "height": 20
    },
    "s": {
      "grid.border": 1,
      "grid.deep": 1,
      "grid.deep.color": "rgba(0,0,0,0.2)",
      "grid.padding": 2,
      "grid.column.count": 10,
      "grid.row.count": 1,
      "grid.fill": false,
      "grid.fill.color": "rgba(0,0,0,0.4)",
      "label.position": "left.left",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "shadow.blur": 0,
      "select.padding": 0,
      "select.width": 2,
      "select.style": "border",
      "label.yoffset": -53.30000000000001,
      "label.xoffset": 3.3000000000000025,
      "label.rotate.angle": 26
    },
    "c": {
      "movable": true
    }
  }, {
    "class": "b2.Seat",
    "ref": 229,
    "p": {
      "name": "池座低区4排",
      "parent": 227,
      "layerId": "center",
      "location": {
        "x": 670.9772599999999,
        "y": 617.6616999999998
      },
      "width": 380,
      "height": 20
    },
    "s": {
      "grid.border": 1,
      "grid.deep": 1,
      "grid.deep.color": "rgba(0,0,0,0.2)",
      "grid.padding": 2,
      "grid.column.count": 19,
      "grid.row.count": 1,
      "grid.fill": false,
      "grid.fill.color": "rgba(0,0,0,0.4)",
      "label.position": "left.left",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "shadow.blur": 0,
      "select.padding": 0,
      "select.width": 2,
      "select.style": "border"
    },
    "c": {
      "movable": true
    }
  }, {
    "class": "b2.Seat",
    "ref": 230,
    "p": {
      "name": "池座低区4排",
      "angle": -24,
      "parent": 227,
      "layerId": "center",
      "location": {
        "x": 1129.2405600000004,
        "y": 556.1694999999997
      },
      "width": 200,
      "height": 20
    },
    "s": {
      "grid.border": 1,
      "grid.deep": 1,
      "grid.deep.color": "rgba(0,0,0,0.2)",
      "grid.padding": 2,
      "grid.column.count": 10,
      "grid.row.count": 1,
      "grid.fill": false,
      "grid.fill.color": "rgba(0,0,0,0.4)",
      "label.position": "left.left",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "shadow.blur": 0,
      "select.padding": 0,
      "select.width": 2,
      "select.style": "border",
      "label.yoffset": 60.29999999999998,
      "label.xoffset": 4,
      "label.rotate.angle": -31
    },
    "c": {
      "movable": true
    }
  }, {
    "class": "b2.Group",
    "ref": 231,
    "p": {
      "name": "池座低区5排",
      "layerId": "center",
      "location": {
        "x": 841.3732100000002,
        "y": 620.6720405579972
      },
      "expanded": true
    },
    "s": {
      "group.fill": false,
      "group.fill.color": "#FFFFFF",
      "group.shape": "roundrect",
      "group.outline.width": 0,
      "group.outline.color": "#000000",
      "group.padding": 0,
      "vector.outline.pattern": [2, 2],
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "label.position": "left.left"
    },
    "c": {
      "movable": false,
      "row.number": 1,
      "row.name": "1排"
    }
  }, {
    "class": "b2.Seat",
    "ref": 232,
    "p": {
      "name": "池座低区5排",
      "angle": 24,
      "parent": 231,
      "layerId": "center",
      "location": {
        "x": 385.50586,
        "y": 619.3997000000003
      },
      "width": 200,
      "height": 20
    },
    "s": {
      "grid.border": 1,
      "grid.deep": 1,
      "grid.deep.color": "rgba(0,0,0,0.2)",
      "grid.padding": 2,
      "grid.column.count": 10,
      "grid.row.count": 1,
      "grid.fill": false,
      "grid.fill.color": "rgba(0,0,0,0.4)",
      "label.position": "left.left",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "shadow.blur": 0,
      "select.padding": 0,
      "select.width": 2,
      "select.style": "border",
      "label.yoffset": -53.30000000000001,
      "label.xoffset": 3.3000000000000025,
      "label.rotate.angle": 26
    },
    "c": {
      "movable": true
    }
  }, {
    "class": "b2.Seat",
    "ref": 233,
    "p": {
      "name": "池座低区5排",
      "parent": 231,
      "layerId": "center",
      "location": {
        "x": 670.9772599999999,
        "y": 673.3227000000003
      },
      "width": 380,
      "height": 20
    },
    "s": {
      "grid.border": 1,
      "grid.deep": 1,
      "grid.deep.color": "rgba(0,0,0,0.2)",
      "grid.padding": 2,
      "grid.column.count": 19,
      "grid.row.count": 1,
      "grid.fill": false,
      "grid.fill.color": "rgba(0,0,0,0.4)",
      "label.position": "left.left",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "shadow.blur": 0,
      "select.padding": 0,
      "select.width": 2,
      "select.style": "border"
    },
    "c": {
      "movable": true
    }
  }, {
    "class": "b2.Seat",
    "ref": 234,
    "p": {
      "name": "池座低区5排",
      "angle": -24,
      "parent": 231,
      "layerId": "center",
      "location": {
        "x": 1129.2405600000004,
        "y": 611.8305000000003
      },
      "width": 200,
      "height": 20
    },
    "s": {
      "grid.border": 1,
      "grid.deep": 1,
      "grid.deep.color": "rgba(0,0,0,0.2)",
      "grid.padding": 2,
      "grid.column.count": 10,
      "grid.row.count": 1,
      "grid.fill": false,
      "grid.fill.color": "rgba(0,0,0,0.4)",
      "label.position": "left.left",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "shadow.blur": 0,
      "select.padding": 0,
      "select.width": 2,
      "select.style": "border",
      "label.yoffset": 60.29999999999998,
      "label.xoffset": 4,
      "label.rotate.angle": -31
    },
    "c": {
      "movable": true
    }
  }, {
    "class": "b2.Group",
    "ref": 235,
    "p": {
      "name": "池座低区6排",
      "layerId": "center",
      "location": {
        "x": 829.3732100000002,
        "y": 685.6277675797536
      },
      "expanded": true
    },
    "s": {
      "group.fill": false,
      "group.fill.color": "#FFFFFF",
      "group.shape": "roundrect",
      "group.outline.width": 0,
      "group.outline.color": "#000000",
      "group.padding": 0,
      "vector.outline.pattern": [2, 2],
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "label.position": "left.left"
    },
    "c": {
      "movable": false,
      "row.number": 1,
      "row.name": "1排"
    }
  }, {
    "class": "b2.Seat",
    "ref": 236,
    "p": {
      "name": "池座低区6排",
      "angle": 24,
      "parent": 235,
      "layerId": "center",
      "location": {
        "x": 373.50586,
        "y": 684.9721540435135
      },
      "width": 200,
      "height": 20
    },
    "s": {
      "grid.border": 1,
      "grid.deep": 1,
      "grid.deep.color": "rgba(0,0,0,0.2)",
      "grid.padding": 2,
      "grid.column.count": 10,
      "grid.row.count": 1,
      "grid.fill": false,
      "grid.fill.color": "rgba(0,0,0,0.4)",
      "label.position": "left.left",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "shadow.blur": 0,
      "select.padding": 0,
      "select.width": 2,
      "select.style": "border",
      "label.yoffset": -53.30000000000001,
      "label.xoffset": 3.3000000000000025,
      "label.rotate.angle": 26
    },
    "c": {
      "movable": true
    }
  }, {
    "class": "b2.Seat",
    "ref": 237,
    "p": {
      "name": "池座低区6排",
      "parent": 235,
      "layerId": "center",
      "location": {
        "x": 658.9772600000003,
        "y": 737.6616999999998
      },
      "width": 380,
      "height": 20
    },
    "s": {
      "grid.border": 1,
      "grid.deep": 1,
      "grid.deep.color": "rgba(0,0,0,0.2)",
      "grid.padding": 2,
      "grid.column.count": 19,
      "grid.row.count": 1,
      "grid.fill": false,
      "grid.fill.color": "rgba(0,0,0,0.4)",
      "label.position": "left.left",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "shadow.blur": 0,
      "select.padding": 0,
      "select.width": 2,
      "select.style": "border"
    },
    "c": {
      "movable": true
    }
  }, {
    "class": "b2.Seat",
    "ref": 238,
    "p": {
      "name": "池座低区6排",
      "angle": -24,
      "parent": 235,
      "layerId": "center",
      "location": {
        "x": 1117.2405600000002,
        "y": 677.4029540435134
      },
      "width": 200,
      "height": 20
    },
    "s": {
      "grid.border": 1,
      "grid.deep": 1,
      "grid.deep.color": "rgba(0,0,0,0.2)",
      "grid.padding": 2,
      "grid.column.count": 10,
      "grid.row.count": 1,
      "grid.fill": false,
      "grid.fill.color": "rgba(0,0,0,0.4)",
      "label.position": "left.left",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "shadow.blur": 0,
      "select.padding": 0,
      "select.width": 2,
      "select.style": "border",
      "label.yoffset": 60.29999999999998,
      "label.xoffset": 4,
      "label.rotate.angle": -31
    },
    "c": {
      "movable": true
    }
  }, {
    "class": "b2.ShapeNode",
    "ref": 239,
    "p": {
      "name": "curve",
      "layerId": "bottom",
      "location": {
        "x": 87.66444179999957,
        "y": 368.0150269999996
      },
      "width": 246.16989076755448,
      "height": 687.7594740253328,
      "points": [{
        "x": 99.55882842501816,
        "y": 488.7850777510814
      }, {
        "x": 139.59557320739486,
        "y": 675.8784521472485
      }, {
        "x": 134.3694406540816,
        "y": 758.7536689614346
      }, {
        "x": 133.73912163284484,
        "y": 758.7536689614346
      }, {
        "x": 87.66444179999957,
        "y": 915.4694177009968
      }, {
        "x": 246.14280960019147,
        "y": 1055.7745010253325
      }, {
        "x": 333.8343325675543,
        "y": 896.973299893827
      }, {
        "x": 252.8544465383206,
        "y": 816.469903306855
      }, {
        "x": 231.04162648940144,
        "y": 687.8436820331726
      }, {
        "x": 208.99039079197576,
        "y": 368.0150269999996
      }, {
        "x": 148.69136663059095,
        "y": 437.0264845720468
      }],
      "segments": ["moveto", "quadto", "lineto", "quadto", "lineto", "quadto", "lineto", "lineto"]
    },
    "s": {
      "shapenode.closed": true,
      "vector.fill.color": "rgba(255,255,255,0.4)",
      "vector.outline.width": 2,
      "vector.outline.color": "#000000",
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0
    },
    "c": {
      "movable": true
    }
  }, {
    "class": "b2.ShapeNode",
    "ref": 240,
    "p": {
      "name": "curve",
      "layerId": "bottom",
      "location": {
        "x": 1322.4424588000004,
        "y": 368.0150269999996
      },
      "width": 246.16989076755476,
      "height": 687.7594740253329,
      "points": [{
        "x": 1556.7179629425366,
        "y": 488.7850777510814
      }, {
        "x": 1516.6812181601597,
        "y": 675.8784521472485
      }, {
        "x": 1521.9073507134729,
        "y": 758.7536689614346
      }, {
        "x": 1522.5376697347099,
        "y": 758.7536689614346
      }, {
        "x": 1568.612349567555,
        "y": 915.4694177009967
      }, {
        "x": 1410.1339817673631,
        "y": 1055.7745010253323
      }, {
        "x": 1322.4424588000004,
        "y": 896.973299893827
      }, {
        "x": 1403.422344829234,
        "y": 816.469903306855
      }, {
        "x": 1425.235164878153,
        "y": 687.8436820331726
      }, {
        "x": 1447.286400575579,
        "y": 368.0150269999996
      }, {
        "x": 1507.5854247369637,
        "y": 437.0264845720468
      }],
      "segments": ["moveto", "quadto", "lineto", "quadto", "lineto", "quadto", "lineto", "lineto"]
    },
    "s": {
      "shapenode.closed": true,
      "vector.fill.color": "rgba(255,255,255,0.4)",
      "vector.outline.width": 2,
      "vector.outline.color": "#000000",
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0
    },
    "c": {
      "movable": true
    }
  }, {
    "class": "b2.ShapeNode",
    "ref": 241,
    "p": {
      "name": "",
      "layerId": "bottom",
      "location": {
        "x": 295.374966567554,
        "y": 914.6111820253324
      },
      "width": 325.4522480000003,
      "height": 311.55297800000005,
      "points": [{
        "x": 385.2096015675541,
        "y": 914.6111820253324
      }, {
        "x": 295.374966567554,
        "y": 1087.0141600253323
      }, {
        "x": 525.2749665675541,
        "y": 1226.1641600253324
      }, {
        "x": 620.8272145675543,
        "y": 1049.2498180253324
      }]
    },
    "s": {
      "shapenode.closed": true,
      "vector.fill.color": "rgba(255,255,255,0.4)",
      "vector.outline.width": 2,
      "vector.outline.color": "#000000",
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0
    },
    "c": {
      "movable": true
    }
  }, {
    "class": "b2.ShapeNode",
    "ref": 242,
    "p": {
      "name": "",
      "layerId": "bottom",
      "location": {
        "x": 1059.8911178675542,
        "y": 914.6111820253324
      },
      "width": 325.4522480000003,
      "height": 311.55297800000005,
      "points": [{
        "x": 1295.5087308675543,
        "y": 914.6111820253324
      }, {
        "x": 1385.3433658675544,
        "y": 1087.0141600253323
      }, {
        "x": 1155.4433658675543,
        "y": 1226.1641600253324
      }, {
        "x": 1059.8911178675542,
        "y": 1049.2498180253324
      }]
    },
    "s": {
      "shapenode.closed": true,
      "vector.fill.color": "rgba(255,255,255,0.4)",
      "vector.outline.width": 2,
      "vector.outline.color": "#000000",
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0
    },
    "c": {
      "movable": true
    }
  }, {
    "class": "b2.ShapeNode",
    "ref": 243,
    "p": {
      "name": "池座高区",
      "layerId": "bottom",
      "location": {
        "x": 568.642669166137,
        "y": 1062.5987247414882
      },
      "width": 531.9941334925973,
      "height": 318.7903777035792,
      "points": [{
        "x": 656.9699394215874,
        "y": 1062.5987247414882
      }, {
        "x": 855.9601114913374,
        "y": 1133.6666433378275
      }, {
        "x": 1018.4010682829702,
        "y": 1068.6902606211745
      }, {
        "x": 1100.6368026587343,
        "y": 1232.1464733927548
      }, {
        "x": 857.9906234512329,
        "y": 1381.3891024450675
      }, {
        "x": 572.7036930859279,
        "y": 1234.1769853526503
      }, {
        "x": 569.6579251460847,
        "y": 1234.1769853526503
      }, {
        "x": 568.642669166137,
        "y": 1234.1769853526503
      }, {
        "x": 570.6731811260324,
        "y": 1233.1617293727027
      }],
      "segments": ["moveto", "quadto", "lineto", "quadto", "lineto", "quadto"]
    },
    "s": {
      "shapenode.closed": true,
      "vector.fill.color": "rgba(255,255,255,0.4)",
      "vector.outline.width": 2,
      "vector.outline.color": "#000000",
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.yoffset": -139.6
    },
    "c": {
      "movable": true
    }
  }, {
    "class": "b2.Group",
    "ref": 244,
    "p": {
      "name": "池座高区1排",
      "layerId": "center",
      "location": {
        "x": 824.0565075049176,
        "y": 1052.0353531008366
      },
      "expanded": true
    },
    "s": {
      "group.fill": false,
      "group.fill.color": "#FFFFFF",
      "group.shape": "roundrect",
      "group.outline.width": 0,
      "group.outline.color": "#000000",
      "group.padding": 0,
      "vector.outline.pattern": [2, 2],
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "label.position": "left.left"
    },
    "c": {
      "movable": true,
      "row.number": 1,
      "row.name": "1排",
      "business.region": "池座高区",
      "business.tier": "3层",
      "business.row": "1排"
    }
  }, {
    "class": "b2.Seat",
    "ref": 245,
    "p": {
      "name": "池座高区1排",
      "angle": -29,
      "parent": 244,
      "layerId": "center",
      "location": {
        "x": 1074.0974107828356,
        "y": 1011.5488536356245
      },
      "width": 240,
      "height": 20
    },
    "s": {
      "grid.border": 1,
      "grid.deep": 1,
      "grid.deep.color": "rgba(0,0,0,0.2)",
      "grid.padding": 2,
      "grid.column.count": 12,
      "grid.row.count": 1,
      "grid.fill": false,
      "grid.fill.color": "rgba(0,0,0,0.4)",
      "label.position": "left.left",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "shadow.blur": 0,
      "select.padding": 0,
      "select.width": 2,
      "select.style": "border",
      "label.xoffset": -5,
      "label.yoffset": 55.599999999999966
    },
    "c": {
      "business.region": "池座高区",
      "business.tier": "3层",
      "business.row": "1排"
    }
  }, {
    "class": "b2.Follower",
    "ref": 246,
    "p": {
      "name": 31,
      "angle": -29,
      "parent": 245,
      "layerId": "top",
      "location": {
        "x": 1090.7743110623799,
        "y": 1067.4335030441625
      },
      "width": 15.833333333333332,
      "height": 14,
      "host": 245
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#E3E3E3",
      "vector.outline.width": 1,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 1],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": -29,
      "follower.column.index": 0
    },
    "c": {
      "column.number": 31,
      "column.name": "31号",
      "row.column.name": "1排31号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "movable": false,
      "rect.select": true,
      "business.region": "池座高区",
      "business.tier": "3层",
      "business.row": "1排",
      "business.seat": "31号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 247,
    "p": {
      "name": 32,
      "angle": -29,
      "parent": 245,
      "layerId": "top",
      "location": {
        "x": 1108.120935253978,
        "y": 1057.81811224261
      },
      "width": 15.833333333333332,
      "height": 14,
      "host": 245
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#E3E3E3",
      "vector.outline.width": 1,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 1],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": -29,
      "follower.column.index": 1
    },
    "c": {
      "column.number": 32,
      "column.name": "32号",
      "row.column.name": "1排32号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "movable": false,
      "rect.select": true,
      "business.region": "池座高区",
      "business.tier": "3层",
      "business.row": "1排",
      "business.seat": "32号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 248,
    "p": {
      "name": 33,
      "angle": -29,
      "parent": 245,
      "layerId": "top",
      "location": {
        "x": 1125.467559445576,
        "y": 1048.2027214410577
      },
      "width": 15.833333333333332,
      "height": 14,
      "host": 245
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#E3E3E3",
      "vector.outline.width": 1,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 1],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": -29,
      "follower.column.index": 2
    },
    "c": {
      "column.number": 33,
      "column.name": "33号",
      "row.column.name": "1排33号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "movable": false,
      "rect.select": true,
      "business.region": "池座高区",
      "business.tier": "3层",
      "business.row": "1排",
      "business.seat": "33号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 249,
    "p": {
      "name": 34,
      "angle": -29,
      "parent": 245,
      "layerId": "top",
      "location": {
        "x": 1142.814183637174,
        "y": 1038.5873306395054
      },
      "width": 15.833333333333332,
      "height": 14,
      "host": 245
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#E3E3E3",
      "vector.outline.width": 1,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 1],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": -29,
      "follower.column.index": 3
    },
    "c": {
      "column.number": 34,
      "column.name": "34号",
      "row.column.name": "1排34号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "movable": false,
      "rect.select": true,
      "business.region": "池座高区",
      "business.tier": "3层",
      "business.row": "1排",
      "business.seat": "34号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 250,
    "p": {
      "name": 35,
      "angle": -29,
      "parent": 245,
      "layerId": "top",
      "location": {
        "x": 1160.160807828772,
        "y": 1028.971939837953
      },
      "width": 15.833333333333332,
      "height": 14,
      "host": 245
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#E3E3E3",
      "vector.outline.width": 1,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 1],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": -29,
      "follower.column.index": 4
    },
    "c": {
      "column.number": 35,
      "column.name": "35号",
      "row.column.name": "1排35号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "movable": false,
      "rect.select": true,
      "business.region": "池座高区",
      "business.tier": "3层",
      "business.row": "1排",
      "business.seat": "35号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 251,
    "p": {
      "name": 36,
      "angle": -29,
      "parent": 245,
      "layerId": "top",
      "location": {
        "x": 1177.50743202037,
        "y": 1019.3565490364006
      },
      "width": 15.833333333333332,
      "height": 14,
      "host": 245
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#E3E3E3",
      "vector.outline.width": 1,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 1],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": -29,
      "follower.column.index": 5
    },
    "c": {
      "column.number": 36,
      "column.name": "36号",
      "row.column.name": "1排36号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "movable": false,
      "rect.select": true,
      "business.region": "池座高区",
      "business.tier": "3层",
      "business.row": "1排",
      "business.seat": "36号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 252,
    "p": {
      "name": 37,
      "angle": -29,
      "parent": 245,
      "layerId": "top",
      "location": {
        "x": 1194.854056211968,
        "y": 1009.7411582348483
      },
      "width": 15.833333333333332,
      "height": 14,
      "host": 245
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#E3E3E3",
      "vector.outline.width": 1,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 1],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": -29,
      "follower.column.index": 6
    },
    "c": {
      "column.number": 37,
      "column.name": "37号",
      "row.column.name": "1排37号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "movable": false,
      "rect.select": true,
      "business.region": "池座高区",
      "business.tier": "3层",
      "business.row": "1排",
      "business.seat": "37号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 253,
    "p": {
      "name": 38,
      "angle": -29,
      "parent": 245,
      "layerId": "top",
      "location": {
        "x": 1212.2006804035657,
        "y": 1000.125767433296
      },
      "width": 15.833333333333332,
      "height": 14,
      "host": 245
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#E3E3E3",
      "vector.outline.width": 1,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 1],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": -29,
      "follower.column.index": 7
    },
    "c": {
      "column.number": 38,
      "column.name": "38号",
      "row.column.name": "1排38号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "movable": false,
      "rect.select": true,
      "business.region": "池座高区",
      "business.tier": "3层",
      "business.row": "1排",
      "business.seat": "38号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 254,
    "p": {
      "name": 39,
      "angle": -29,
      "parent": 245,
      "layerId": "top",
      "location": {
        "x": 1229.5473045951642,
        "y": 990.5103766317435
      },
      "width": 15.833333333333332,
      "height": 14,
      "host": 245
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#E3E3E3",
      "vector.outline.width": 1,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 1],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": -29,
      "follower.column.index": 8
    },
    "c": {
      "column.number": 39,
      "column.name": "39号",
      "row.column.name": "1排39号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "movable": false,
      "rect.select": true,
      "business.region": "池座高区",
      "business.tier": "3层",
      "business.row": "1排",
      "business.seat": "39号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 255,
    "p": {
      "name": 40,
      "angle": -29,
      "parent": 245,
      "layerId": "top",
      "location": {
        "x": 1246.8939287867618,
        "y": 980.8949858301912
      },
      "width": 15.833333333333332,
      "height": 14,
      "host": 245
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#E3E3E3",
      "vector.outline.width": 1,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 1],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": -29,
      "follower.column.index": 9
    },
    "c": {
      "column.number": 40,
      "column.name": "40号",
      "row.column.name": "1排40号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "movable": false,
      "rect.select": true,
      "business.region": "池座高区",
      "business.tier": "3层",
      "business.row": "1排",
      "business.seat": "40号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 256,
    "p": {
      "name": 41,
      "angle": -29,
      "parent": 245,
      "layerId": "top",
      "location": {
        "x": 1264.2405529783598,
        "y": 971.2795950286389
      },
      "width": 15.833333333333332,
      "height": 14,
      "host": 245
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#E3E3E3",
      "vector.outline.width": 1,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 1],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": -29,
      "follower.column.index": 10
    },
    "c": {
      "column.number": 41,
      "column.name": "41号",
      "row.column.name": "1排41号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "movable": false,
      "rect.select": true,
      "business.region": "池座高区",
      "business.tier": "3层",
      "business.row": "1排",
      "business.seat": "41号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 257,
    "p": {
      "name": 42,
      "angle": -29,
      "parent": 245,
      "layerId": "top",
      "location": {
        "x": 1281.5871771699583,
        "y": 961.6642042270864
      },
      "width": 15.833333333333332,
      "height": 14,
      "host": 245
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#E3E3E3",
      "vector.outline.width": 1,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 1],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": -29,
      "follower.column.index": 11
    },
    "c": {
      "column.number": 42,
      "column.name": "42号",
      "row.column.name": "1排42号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "movable": false,
      "rect.select": true,
      "business.region": "池座高区",
      "business.tier": "3层",
      "business.row": "1排",
      "business.seat": "42号"
    }
  }, {
    "class": "b2.Seat",
    "ref": 258,
    "p": {
      "name": "池座高区1排",
      "angle": -24,
      "parent": 244,
      "layerId": "center",
      "location": {
        "x": 918.3788544094893,
        "y": 1118.6439805538919
      },
      "width": 120,
      "height": 20
    },
    "s": {
      "grid.border": 1,
      "grid.deep": 1,
      "grid.deep.color": "rgba(0,0,0,0.2)",
      "grid.padding": 2,
      "grid.column.count": 6,
      "grid.row.count": 1,
      "grid.fill": false,
      "grid.fill.color": "rgba(0,0,0,0.4)",
      "label.position": "left.left",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "shadow.blur": 0,
      "select.padding": 0,
      "select.width": 2,
      "select.style": "border"
    },
    "c": {
      "business.region": "池座高区",
      "business.tier": "3层",
      "business.row": "1排"
    }
  }, {
    "class": "b2.Follower",
    "ref": 259,
    "p": {
      "name": "",
      "angle": -24,
      "parent": 258,
      "layerId": "top",
      "image": "lock",
      "location": {
        "x": 925.6295360753949,
        "y": 1141.6418655051189
      },
      "width": 15.666666666666668,
      "height": 14,
      "host": 258
    },
    "s": {
      "body.type": "default.vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#E3E3E3",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": -24,
      "follower.column.index": 0
    },
    "c": {
      "column.number": 25,
      "column.name": "25号",
      "row.column.name": "1排25号",
      "seat.stats": "锁座",
      "seat.price": 100,
      "movable": false,
      "rect.select": true,
      "business.region": "池座高区",
      "business.tier": "3层",
      "business.row": "1排",
      "business.seat": "25号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 260,
    "p": {
      "name": "",
      "angle": -24,
      "parent": 258,
      "layerId": "top",
      "image": "lock",
      "location": {
        "x": 943.5959300756991,
        "y": 1133.6427115246279
      },
      "width": 15.666666666666668,
      "height": 14,
      "host": 258
    },
    "s": {
      "body.type": "default.vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#E3E3E3",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": -24,
      "follower.column.index": 1
    },
    "c": {
      "column.number": 26,
      "column.name": "26号",
      "row.column.name": "1排26号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "movable": false,
      "rect.select": true,
      "business.region": "池座高区",
      "business.tier": "3层",
      "business.row": "1排",
      "business.seat": "26号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 261,
    "p": {
      "name": "",
      "angle": -24,
      "parent": 258,
      "layerId": "top",
      "image": "lock",
      "location": {
        "x": 961.5623240760038,
        "y": 1125.6435575441374
      },
      "width": 15.666666666666668,
      "height": 14,
      "host": 258
    },
    "s": {
      "body.type": "default.vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#E3E3E3",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": -24,
      "follower.column.index": 2
    },
    "c": {
      "column.number": 27,
      "column.name": "27号",
      "row.column.name": "1排27号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "movable": false,
      "rect.select": true,
      "business.region": "池座高区",
      "business.tier": "3层",
      "business.row": "1排",
      "business.seat": "27号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 262,
    "p": {
      "name": "",
      "angle": -24,
      "parent": 258,
      "layerId": "top",
      "image": "lock",
      "location": {
        "x": 979.5287180763083,
        "y": 1117.6444035636464
      },
      "width": 15.666666666666668,
      "height": 14,
      "host": 258
    },
    "s": {
      "body.type": "default.vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#E3E3E3",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": -24,
      "follower.column.index": 3
    },
    "c": {
      "column.number": 28,
      "column.name": "28号",
      "row.column.name": "1排28号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "movable": false,
      "rect.select": true,
      "business.region": "池座高区",
      "business.tier": "3层",
      "business.row": "1排",
      "business.seat": "28号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 263,
    "p": {
      "name": "",
      "angle": -24,
      "parent": 258,
      "layerId": "top",
      "image": "lock",
      "location": {
        "x": 997.4951120766126,
        "y": 1109.6452495831559
      },
      "width": 15.666666666666668,
      "height": 14,
      "host": 258
    },
    "s": {
      "body.type": "default.vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#E3E3E3",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": -24,
      "follower.column.index": 4
    },
    "c": {
      "column.number": 29,
      "column.name": "29号",
      "row.column.name": "1排29号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "movable": false,
      "rect.select": true,
      "business.region": "池座高区",
      "business.tier": "3层",
      "business.row": "1排",
      "business.seat": "29号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 264,
    "p": {
      "name": "",
      "angle": -24,
      "parent": 258,
      "layerId": "top",
      "image": "lock",
      "location": {
        "x": 1015.4615060769173,
        "y": 1101.646095602665
      },
      "width": 15.666666666666668,
      "height": 14,
      "host": 258
    },
    "s": {
      "body.type": "default.vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#E3E3E3",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": -24,
      "follower.column.index": 5
    },
    "c": {
      "column.number": 30,
      "column.name": "30号",
      "row.column.name": "1排30号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "movable": false,
      "rect.select": true,
      "business.region": "池座高区",
      "business.tier": "3层",
      "business.row": "1排",
      "business.seat": "30号"
    }
  }, {
    "class": "b2.Seat",
    "ref": 265,
    "p": {
      "name": "池座高区1排",
      "parent": 244,
      "layerId": "center",
      "location": {
        "x": 772.4749942839825,
        "y": 1156.5825785166269
      },
      "width": 120,
      "height": 20
    },
    "s": {
      "grid.border": 1,
      "grid.deep": 1,
      "grid.deep.color": "rgba(0,0,0,0.2)",
      "grid.padding": 2,
      "grid.column.count": 6,
      "grid.row.count": 1,
      "grid.fill": false,
      "grid.fill.color": "rgba(0,0,0,0.4)",
      "label.position": "left.left",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "shadow.blur": 0,
      "select.padding": 0,
      "select.width": 2,
      "select.style": "border"
    },
    "c": {
      "business.region": "池座高区",
      "business.tier": "3层",
      "business.row": "1排"
    }
  }, {
    "class": "b2.Follower",
    "ref": 266,
    "p": {
      "name": "",
      "parent": 265,
      "layerId": "top",
      "image": "lock",
      "location": {
        "x": 775.4749942839825,
        "y": 1159.5825785166269
      },
      "width": 15.666666666666668,
      "height": 14,
      "host": 265
    },
    "s": {
      "body.type": "default.vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#E3E3E3",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 0,
      "follower.column.index": 0
    },
    "c": {
      "column.number": 19,
      "column.name": "19号",
      "row.column.name": "1排19号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "movable": false,
      "rect.select": true,
      "business.region": "池座高区",
      "business.tier": "3层",
      "business.row": "1排",
      "business.seat": "19号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 267,
    "p": {
      "name": "",
      "parent": 265,
      "layerId": "top",
      "image": "lock",
      "location": {
        "x": 795.1416609506491,
        "y": 1159.5825785166269
      },
      "width": 15.666666666666668,
      "height": 14,
      "host": 265
    },
    "s": {
      "body.type": "default.vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#E3E3E3",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 0,
      "follower.column.index": 1
    },
    "c": {
      "column.number": 20,
      "column.name": "20号",
      "row.column.name": "1排20号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "movable": false,
      "rect.select": true,
      "business.region": "池座高区",
      "business.tier": "3层",
      "business.row": "1排",
      "business.seat": "20号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 268,
    "p": {
      "name": "",
      "parent": 265,
      "layerId": "top",
      "image": "lock",
      "location": {
        "x": 814.8083276173159,
        "y": 1159.5825785166269
      },
      "width": 15.666666666666668,
      "height": 14,
      "host": 265
    },
    "s": {
      "body.type": "default.vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#E3E3E3",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 0,
      "follower.column.index": 2
    },
    "c": {
      "column.number": 21,
      "column.name": "21号",
      "row.column.name": "1排21号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "movable": false,
      "rect.select": true,
      "business.region": "池座高区",
      "business.tier": "3层",
      "business.row": "1排",
      "business.seat": "21号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 269,
    "p": {
      "name": "",
      "parent": 265,
      "layerId": "top",
      "image": "lock",
      "location": {
        "x": 834.4749942839825,
        "y": 1159.5825785166269
      },
      "width": 15.666666666666668,
      "height": 14,
      "host": 265
    },
    "s": {
      "body.type": "default.vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#E3E3E3",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 0,
      "follower.column.index": 3
    },
    "c": {
      "column.number": 22,
      "column.name": "22号",
      "row.column.name": "1排22号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "movable": false,
      "rect.select": true,
      "business.region": "池座高区",
      "business.tier": "3层",
      "business.row": "1排",
      "business.seat": "22号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 270,
    "p": {
      "name": "",
      "parent": 265,
      "layerId": "top",
      "image": "lock",
      "location": {
        "x": 854.1416609506491,
        "y": 1159.5825785166269
      },
      "width": 15.666666666666668,
      "height": 14,
      "host": 265
    },
    "s": {
      "body.type": "default.vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#E3E3E3",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 0,
      "follower.column.index": 4
    },
    "c": {
      "column.number": 23,
      "column.name": "23号",
      "row.column.name": "1排23号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "movable": false,
      "rect.select": true,
      "business.region": "池座高区",
      "business.tier": "3层",
      "business.row": "1排",
      "business.seat": "23号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 271,
    "p": {
      "name": "",
      "parent": 265,
      "layerId": "top",
      "image": "lock",
      "location": {
        "x": 873.8083276173159,
        "y": 1159.5825785166269
      },
      "width": 15.666666666666668,
      "height": 14,
      "host": 265
    },
    "s": {
      "body.type": "default.vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#E3E3E3",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 0,
      "follower.column.index": 5
    },
    "c": {
      "column.number": 24,
      "column.name": "24号",
      "row.column.name": "1排24号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "movable": false,
      "rect.select": true,
      "business.region": "池座高区",
      "business.tier": "3层",
      "business.row": "1排",
      "business.seat": "24号"
    }
  }, {
    "class": "b2.Seat",
    "ref": 272,
    "p": {
      "name": "池座高区1排",
      "angle": 27,
      "parent": 244,
      "layerId": "center",
      "location": {
        "x": 646.4293077639031,
        "y": 1127.76115956854
      },
      "width": 120,
      "height": 20
    },
    "s": {
      "grid.border": 1,
      "grid.deep": 1,
      "grid.deep.color": "rgba(0,0,0,0.2)",
      "grid.padding": 2,
      "grid.column.count": 6,
      "grid.row.count": 1,
      "grid.fill": false,
      "grid.fill.color": "rgba(0,0,0,0.4)",
      "label.position": "left.left",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "shadow.blur": 0,
      "select.padding": 0,
      "select.width": 2,
      "select.style": "border"
    },
    "c": {
      "business.region": "池座高区",
      "business.tier": "3层",
      "business.row": "1排"
    }
  }, {
    "class": "b2.Follower",
    "ref": 273,
    "p": {
      "name": "",
      "angle": 27,
      "parent": 272,
      "layerId": "top",
      "image": "lock",
      "location": {
        "x": 654.788153657975,
        "y": 1108.4399599980122
      },
      "width": 15.666666666666668,
      "height": 14,
      "host": 272
    },
    "s": {
      "body.type": "default.vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#E3E3E3",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 27,
      "follower.column.index": 0
    },
    "c": {
      "column.number": 13,
      "column.name": "13号",
      "row.column.name": "1排13号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "movable": false,
      "rect.select": true,
      "business.region": "池座高区",
      "business.tier": "3层",
      "business.row": "1排",
      "business.seat": "13号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 274,
    "p": {
      "name": "",
      "angle": 27,
      "parent": 272,
      "layerId": "top",
      "image": "lock",
      "location": {
        "x": 672.3112819670129,
        "y": 1117.3684398262235
      },
      "width": 15.666666666666668,
      "height": 14,
      "host": 272
    },
    "s": {
      "body.type": "default.vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#E3E3E3",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 27,
      "follower.column.index": 1
    },
    "c": {
      "column.number": 14,
      "column.name": "14号",
      "row.column.name": "1排14号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "movable": false,
      "rect.select": true,
      "business.region": "池座高区",
      "business.tier": "3层",
      "business.row": "1排",
      "business.seat": "14号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 275,
    "p": {
      "name": "",
      "angle": 27,
      "parent": 272,
      "layerId": "top",
      "image": "lock",
      "location": {
        "x": 689.8344102760509,
        "y": 1126.2969196544345
      },
      "width": 15.666666666666668,
      "height": 14,
      "host": 272
    },
    "s": {
      "body.type": "default.vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#E3E3E3",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 27,
      "follower.column.index": 2
    },
    "c": {
      "column.number": 15,
      "column.name": "15号",
      "row.column.name": "1排15号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "movable": false,
      "rect.select": true,
      "business.region": "池座高区",
      "business.tier": "3层",
      "business.row": "1排",
      "business.seat": "15号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 276,
    "p": {
      "name": "",
      "angle": 27,
      "parent": 272,
      "layerId": "top",
      "image": "lock",
      "location": {
        "x": 707.3575385850887,
        "y": 1135.2253994826456
      },
      "width": 15.666666666666668,
      "height": 14,
      "host": 272
    },
    "s": {
      "body.type": "default.vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#E3E3E3",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 27,
      "follower.column.index": 3
    },
    "c": {
      "column.number": 16,
      "column.name": "16号",
      "row.column.name": "1排16号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "movable": false,
      "rect.select": true,
      "business.region": "池座高区",
      "business.tier": "3层",
      "business.row": "1排",
      "business.seat": "16号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 277,
    "p": {
      "name": "",
      "angle": 27,
      "parent": 272,
      "layerId": "top",
      "image": "lock",
      "location": {
        "x": 724.8806668941265,
        "y": 1144.1538793108566
      },
      "width": 15.666666666666668,
      "height": 14,
      "host": 272
    },
    "s": {
      "body.type": "default.vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#E3E3E3",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 27,
      "follower.column.index": 4
    },
    "c": {
      "column.number": 17,
      "column.name": "17号",
      "row.column.name": "1排17号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "movable": false,
      "rect.select": true,
      "business.region": "池座高区",
      "business.tier": "3层",
      "business.row": "1排",
      "business.seat": "17号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 278,
    "p": {
      "name": "",
      "angle": 27,
      "parent": 272,
      "layerId": "top",
      "image": "lock",
      "location": {
        "x": 742.4037952031646,
        "y": 1153.0823591390676
      },
      "width": 15.666666666666668,
      "height": 14,
      "host": 272
    },
    "s": {
      "body.type": "default.vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#E3E3E3",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 27,
      "follower.column.index": 5
    },
    "c": {
      "column.number": 18,
      "column.name": "18号",
      "row.column.name": "1排18号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "movable": false,
      "rect.select": true,
      "business.region": "池座高区",
      "business.tier": "3层",
      "business.row": "1排",
      "business.seat": "18号"
    }
  }, {
    "class": "b2.Seat",
    "ref": 279,
    "p": {
      "name": "池座高区1排",
      "angle": 29,
      "parent": 244,
      "layerId": "center",
      "location": {
        "x": 366.01560422700004,
        "y": 1008.4114791860005
      },
      "width": 240,
      "height": 20
    },
    "s": {
      "grid.border": 1,
      "grid.deep": 1,
      "grid.deep.color": "rgba(0,0,0,0.2)",
      "grid.padding": 2,
      "grid.column.count": 12,
      "grid.row.count": 1,
      "grid.fill": false,
      "grid.fill.color": "rgba(0,0,0,0.4)",
      "label.position": "left.left",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "shadow.blur": 0,
      "select.padding": 0,
      "select.width": 2,
      "select.style": "border",
      "label.xoffset": -5,
      "label.yoffset": -53.40000000000003
    },
    "c": {
      "business.region": "池座高区",
      "business.tier": "3层",
      "business.row": "1排"
    }
  }, {
    "class": "b2.Follower",
    "ref": 280,
    "p": {
      "name": 1,
      "angle": 29,
      "parent": 279,
      "layerId": "top",
      "location": {
        "x": 382.69250450654425,
        "y": 958.5268297774626
      },
      "width": 15.833333333333332,
      "height": 14,
      "host": 279
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#E3E3E3",
      "vector.outline.width": 1,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 1],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 29,
      "follower.column.index": 0
    },
    "c": {
      "column.number": 1,
      "column.name": "1号",
      "row.column.name": "1排1号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "movable": false,
      "rect.select": true,
      "business.region": "池座高区",
      "business.tier": "3层",
      "business.row": "1排",
      "business.seat": "1号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 281,
    "p": {
      "name": 2,
      "angle": 29,
      "parent": 279,
      "layerId": "top",
      "location": {
        "x": 400.03912869814224,
        "y": 968.142220579015
      },
      "width": 15.833333333333332,
      "height": 14,
      "host": 279
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#E3E3E3",
      "vector.outline.width": 1,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 1],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 29,
      "follower.column.index": 1
    },
    "c": {
      "column.number": 2,
      "column.name": "2号",
      "row.column.name": "1排2号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "movable": false,
      "rect.select": true,
      "business.region": "池座高区",
      "business.tier": "3层",
      "business.row": "1排",
      "business.seat": "2号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 282,
    "p": {
      "name": 3,
      "angle": 29,
      "parent": 279,
      "layerId": "top",
      "location": {
        "x": 417.38575288974033,
        "y": 977.7576113805674
      },
      "width": 15.833333333333332,
      "height": 14,
      "host": 279
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#E3E3E3",
      "vector.outline.width": 1,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 1],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 29,
      "follower.column.index": 2
    },
    "c": {
      "column.number": 3,
      "column.name": "3号",
      "row.column.name": "1排3号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "movable": false,
      "rect.select": true,
      "business.region": "池座高区",
      "business.tier": "3层",
      "business.row": "1排",
      "business.seat": "3号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 283,
    "p": {
      "name": 4,
      "angle": 29,
      "parent": 279,
      "layerId": "top",
      "location": {
        "x": 434.7323770813383,
        "y": 987.3730021821198
      },
      "width": 15.833333333333332,
      "height": 14,
      "host": 279
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#E3E3E3",
      "vector.outline.width": 1,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 1],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 29,
      "follower.column.index": 3
    },
    "c": {
      "column.number": 4,
      "column.name": "4号",
      "row.column.name": "1排4号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "movable": false,
      "rect.select": true,
      "business.region": "池座高区",
      "business.tier": "3层",
      "business.row": "1排",
      "business.seat": "4号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 284,
    "p": {
      "name": 5,
      "angle": 29,
      "parent": 279,
      "layerId": "top",
      "location": {
        "x": 452.0790012729363,
        "y": 996.9883929836719
      },
      "width": 15.833333333333332,
      "height": 14,
      "host": 279
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#E3E3E3",
      "vector.outline.width": 1,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 1],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 29,
      "follower.column.index": 4
    },
    "c": {
      "column.number": 5,
      "column.name": "5号",
      "row.column.name": "1排5号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "movable": false,
      "rect.select": true,
      "business.region": "池座高区",
      "business.tier": "3层",
      "business.row": "1排",
      "business.seat": "5号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 285,
    "p": {
      "name": 6,
      "angle": 29,
      "parent": 279,
      "layerId": "top",
      "location": {
        "x": 469.4256254645343,
        "y": 1006.6037837852243
      },
      "width": 15.833333333333332,
      "height": 14,
      "host": 279
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#E3E3E3",
      "vector.outline.width": 1,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 1],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 29,
      "follower.column.index": 5
    },
    "c": {
      "column.number": 6,
      "column.name": "6号",
      "row.column.name": "1排6号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "movable": false,
      "rect.select": true,
      "business.region": "池座高区",
      "business.tier": "3层",
      "business.row": "1排",
      "business.seat": "6号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 286,
    "p": {
      "name": 7,
      "angle": 29,
      "parent": 279,
      "layerId": "top",
      "location": {
        "x": 486.7722496561324,
        "y": 1016.2191745867767
      },
      "width": 15.833333333333332,
      "height": 14,
      "host": 279
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#E3E3E3",
      "vector.outline.width": 1,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 1],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 29,
      "follower.column.index": 6
    },
    "c": {
      "column.number": 7,
      "column.name": "7号",
      "row.column.name": "1排7号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "movable": false,
      "rect.select": true,
      "business.region": "池座高区",
      "business.tier": "3层",
      "business.row": "1排",
      "business.seat": "7号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 287,
    "p": {
      "name": 8,
      "angle": 29,
      "parent": 279,
      "layerId": "top",
      "location": {
        "x": 504.1188738477304,
        "y": 1025.834565388329
      },
      "width": 15.833333333333332,
      "height": 14,
      "host": 279
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#E3E3E3",
      "vector.outline.width": 1,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 1],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 29,
      "follower.column.index": 7
    },
    "c": {
      "column.number": 8,
      "column.name": "8号",
      "row.column.name": "1排8号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "movable": false,
      "rect.select": true,
      "business.region": "池座高区",
      "business.tier": "3层",
      "business.row": "1排",
      "business.seat": "8号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 288,
    "p": {
      "name": 9,
      "angle": 29,
      "parent": 279,
      "layerId": "top",
      "location": {
        "x": 521.4654980393283,
        "y": 1035.4499561898815
      },
      "width": 15.833333333333332,
      "height": 14,
      "host": 279
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#E3E3E3",
      "vector.outline.width": 1,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 1],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 29,
      "follower.column.index": 8
    },
    "c": {
      "column.number": 9,
      "column.name": "9号",
      "row.column.name": "1排9号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "movable": false,
      "rect.select": true,
      "business.region": "池座高区",
      "business.tier": "3层",
      "business.row": "1排",
      "business.seat": "9号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 289,
    "p": {
      "name": 10,
      "angle": 29,
      "parent": 279,
      "layerId": "top",
      "location": {
        "x": 538.8121222309264,
        "y": 1045.0653469914337
      },
      "width": 15.833333333333332,
      "height": 14,
      "host": 279
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#E3E3E3",
      "vector.outline.width": 1,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 1],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 29,
      "follower.column.index": 9
    },
    "c": {
      "column.number": 10,
      "column.name": "10号",
      "row.column.name": "1排10号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "movable": false,
      "rect.select": true,
      "business.region": "池座高区",
      "business.tier": "3层",
      "business.row": "1排",
      "business.seat": "10号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 290,
    "p": {
      "name": 11,
      "angle": 29,
      "parent": 279,
      "layerId": "top",
      "location": {
        "x": 556.1587464225244,
        "y": 1054.680737792986
      },
      "width": 15.833333333333332,
      "height": 14,
      "host": 279
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#E3E3E3",
      "vector.outline.width": 1,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 1],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 29,
      "follower.column.index": 10
    },
    "c": {
      "column.number": 11,
      "column.name": "11号",
      "row.column.name": "1排11号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "movable": false,
      "rect.select": true,
      "business.region": "池座高区",
      "business.tier": "3层",
      "business.row": "1排",
      "business.seat": "11号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 291,
    "p": {
      "name": 12,
      "angle": 29,
      "parent": 279,
      "layerId": "top",
      "location": {
        "x": 573.5053706141224,
        "y": 1064.2961285945385
      },
      "width": 15.833333333333332,
      "height": 14,
      "host": 279
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#E3E3E3",
      "vector.outline.width": 1,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 1],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 29,
      "follower.column.index": 11
    },
    "c": {
      "column.number": 12,
      "column.name": "12号",
      "row.column.name": "1排12号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "movable": false,
      "rect.select": true,
      "business.region": "池座高区",
      "business.tier": "3层",
      "business.row": "1排",
      "business.seat": "12号"
    }
  }, {
    "class": "b2.Group",
    "ref": 292,
    "p": {
      "name": "池座高区2排",
      "layerId": "center",
      "location": {
        "x": 829.6550367964968,
        "y": 1097.5191648485268
      },
      "expanded": true
    },
    "s": {
      "group.fill": false,
      "group.fill.color": "#FFFFFF",
      "group.shape": "roundrect",
      "group.outline.width": 0,
      "group.outline.color": "#000000",
      "group.padding": 0,
      "vector.outline.pattern": [2, 2],
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "label.position": "left.left"
    },
    "c": {
      "movable": true,
      "row.number": 2,
      "row.name": "2排",
      "business.region": "池座高区",
      "business.tier": "3层",
      "business.row": "2排"
    }
  }, {
    "class": "b2.Seat",
    "ref": 293,
    "p": {
      "name": "池座高区2排",
      "angle": 29,
      "parent": 292,
      "layerId": "center",
      "location": {
        "x": 348.200614227,
        "y": 1051.2901491860002
      },
      "width": 240,
      "height": 20
    },
    "s": {
      "grid.border": 1,
      "grid.deep": 1,
      "grid.deep.color": "rgba(0,0,0,0.2)",
      "grid.padding": 2,
      "grid.column.count": 12,
      "grid.row.count": 1,
      "grid.fill": false,
      "grid.fill.color": "rgba(0,0,0,0.4)",
      "label.position": "left.left",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "shadow.blur": 0,
      "select.padding": 0,
      "select.width": 2,
      "select.style": "border",
      "label.yoffset": -54.30000000000006
    },
    "c": {
      "business.region": "池座高区",
      "business.tier": "3层",
      "business.row": "2排"
    }
  }, {
    "class": "b2.Follower",
    "ref": 294,
    "p": {
      "name": 1,
      "angle": 29,
      "parent": 293,
      "layerId": "top",
      "location": {
        "x": 364.87751450654423,
        "y": 1001.4054997774624
      },
      "width": 15.833333333333332,
      "height": 14,
      "host": 293
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#E3E3E3",
      "vector.outline.width": 1,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 1],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 29,
      "follower.column.index": 0
    },
    "c": {
      "column.number": 1,
      "column.name": "1号",
      "row.column.name": "2排1号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "movable": false,
      "rect.select": true,
      "business.region": "池座高区",
      "business.tier": "3层",
      "business.row": "2排",
      "business.seat": "1号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 295,
    "p": {
      "name": 2,
      "angle": 29,
      "parent": 293,
      "layerId": "top",
      "location": {
        "x": 382.2241386981422,
        "y": 1011.0208905790148
      },
      "width": 15.833333333333332,
      "height": 14,
      "host": 293
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#E3E3E3",
      "vector.outline.width": 1,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 1],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 29,
      "follower.column.index": 1
    },
    "c": {
      "column.number": 2,
      "column.name": "2号",
      "row.column.name": "2排2号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "movable": false,
      "rect.select": true,
      "business.region": "池座高区",
      "business.tier": "3层",
      "business.row": "2排",
      "business.seat": "2号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 296,
    "p": {
      "name": 3,
      "angle": 29,
      "parent": 293,
      "layerId": "top",
      "location": {
        "x": 399.57076288974025,
        "y": 1020.636281380567
      },
      "width": 15.833333333333332,
      "height": 14,
      "host": 293
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#E3E3E3",
      "vector.outline.width": 1,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 1],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 29,
      "follower.column.index": 2
    },
    "c": {
      "column.number": 3,
      "column.name": "3号",
      "row.column.name": "2排3号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "movable": false,
      "rect.select": true,
      "business.region": "池座高区",
      "business.tier": "3层",
      "business.row": "2排",
      "business.seat": "3号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 297,
    "p": {
      "name": 4,
      "angle": 29,
      "parent": 293,
      "layerId": "top",
      "location": {
        "x": 416.9173870813383,
        "y": 1030.2516721821194
      },
      "width": 15.833333333333332,
      "height": 14,
      "host": 293
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#E3E3E3",
      "vector.outline.width": 1,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 1],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 29,
      "follower.column.index": 3
    },
    "c": {
      "column.number": 4,
      "column.name": "4号",
      "row.column.name": "2排4号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "movable": false,
      "rect.select": true,
      "business.region": "池座高区",
      "business.tier": "3层",
      "business.row": "2排",
      "business.seat": "4号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 298,
    "p": {
      "name": 5,
      "angle": 29,
      "parent": 293,
      "layerId": "top",
      "location": {
        "x": 434.2640112729363,
        "y": 1039.8670629836718
      },
      "width": 15.833333333333332,
      "height": 14,
      "host": 293
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#E3E3E3",
      "vector.outline.width": 1,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 1],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 29,
      "follower.column.index": 4
    },
    "c": {
      "column.number": 5,
      "column.name": "5号",
      "row.column.name": "2排5号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "movable": false,
      "rect.select": true,
      "business.region": "池座高区",
      "business.tier": "3层",
      "business.row": "2排",
      "business.seat": "5号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 299,
    "p": {
      "name": 6,
      "angle": 29,
      "parent": 293,
      "layerId": "top",
      "location": {
        "x": 451.6106354645343,
        "y": 1049.4824537852242
      },
      "width": 15.833333333333332,
      "height": 14,
      "host": 293
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#E3E3E3",
      "vector.outline.width": 1,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 1],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 29,
      "follower.column.index": 5
    },
    "c": {
      "column.number": 6,
      "column.name": "6号",
      "row.column.name": "2排6号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "movable": false,
      "rect.select": true,
      "business.region": "池座高区",
      "business.tier": "3层",
      "business.row": "2排",
      "business.seat": "6号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 300,
    "p": {
      "name": 7,
      "angle": 29,
      "parent": 293,
      "layerId": "top",
      "location": {
        "x": 468.95725965613235,
        "y": 1059.0978445867765
      },
      "width": 15.833333333333332,
      "height": 14,
      "host": 293
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#E3E3E3",
      "vector.outline.width": 1,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 1],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 29,
      "follower.column.index": 6
    },
    "c": {
      "column.number": 7,
      "column.name": "7号",
      "row.column.name": "2排7号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "movable": false,
      "rect.select": true,
      "business.region": "池座高区",
      "business.tier": "3层",
      "business.row": "2排",
      "business.seat": "7号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 301,
    "p": {
      "name": 8,
      "angle": 29,
      "parent": 293,
      "layerId": "top",
      "location": {
        "x": 486.30388384773033,
        "y": 1068.7132353883287
      },
      "width": 15.833333333333332,
      "height": 14,
      "host": 293
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#E3E3E3",
      "vector.outline.width": 1,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 1],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 29,
      "follower.column.index": 7
    },
    "c": {
      "column.number": 8,
      "column.name": "8号",
      "row.column.name": "2排8号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "movable": false,
      "rect.select": true,
      "business.region": "池座高区",
      "business.tier": "3层",
      "business.row": "2排",
      "business.seat": "8号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 302,
    "p": {
      "name": 9,
      "angle": 29,
      "parent": 293,
      "layerId": "top",
      "location": {
        "x": 503.6505080393283,
        "y": 1078.328626189881
      },
      "width": 15.833333333333332,
      "height": 14,
      "host": 293
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#E3E3E3",
      "vector.outline.width": 1,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 1],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 29,
      "follower.column.index": 8
    },
    "c": {
      "column.number": 9,
      "column.name": "9号",
      "row.column.name": "2排9号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "movable": false,
      "rect.select": true,
      "business.region": "池座高区",
      "business.tier": "3层",
      "business.row": "2排",
      "business.seat": "9号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 303,
    "p": {
      "name": 10,
      "angle": 29,
      "parent": 293,
      "layerId": "top",
      "location": {
        "x": 520.9971322309264,
        "y": 1087.9440169914335
      },
      "width": 15.833333333333332,
      "height": 14,
      "host": 293
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#E3E3E3",
      "vector.outline.width": 1,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 1],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 29,
      "follower.column.index": 9
    },
    "c": {
      "column.number": 10,
      "column.name": "10号",
      "row.column.name": "2排10号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "movable": false,
      "rect.select": true,
      "business.region": "池座高区",
      "business.tier": "3层",
      "business.row": "2排",
      "business.seat": "10号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 304,
    "p": {
      "name": 11,
      "angle": 29,
      "parent": 293,
      "layerId": "top",
      "location": {
        "x": 538.3437564225244,
        "y": 1097.559407792986
      },
      "width": 15.833333333333332,
      "height": 14,
      "host": 293
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#E3E3E3",
      "vector.outline.width": 1,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 1],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 29,
      "follower.column.index": 10
    },
    "c": {
      "column.number": 11,
      "column.name": "11号",
      "row.column.name": "2排11号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "movable": false,
      "rect.select": true,
      "business.region": "池座高区",
      "business.tier": "3层",
      "business.row": "2排",
      "business.seat": "11号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 305,
    "p": {
      "name": 12,
      "angle": 29,
      "parent": 293,
      "layerId": "top",
      "location": {
        "x": 555.6903806141224,
        "y": 1107.1747985945383
      },
      "width": 15.833333333333332,
      "height": 14,
      "host": 293
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#E3E3E3",
      "vector.outline.width": 1,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 1],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 29,
      "follower.column.index": 11
    },
    "c": {
      "column.number": 12,
      "column.name": "12号",
      "row.column.name": "2排12号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "movable": false,
      "rect.select": true,
      "business.region": "池座高区",
      "business.tier": "3层",
      "business.row": "2排",
      "business.seat": "12号"
    }
  }, {
    "class": "b2.Seat",
    "ref": 306,
    "p": {
      "name": "池座高区2排",
      "angle": 27,
      "parent": 292,
      "layerId": "center",
      "location": {
        "x": 643.4018745626001,
        "y": 1173.0506406630411
      },
      "width": 120,
      "height": 20
    },
    "s": {
      "grid.border": 1,
      "grid.deep": 1,
      "grid.deep.color": "rgba(0,0,0,0.2)",
      "grid.padding": 2,
      "grid.column.count": 6,
      "grid.row.count": 1,
      "grid.fill": false,
      "grid.fill.color": "rgba(0,0,0,0.4)",
      "label.position": "left.left",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "shadow.blur": 0,
      "select.padding": 0,
      "select.width": 2,
      "select.style": "border"
    },
    "c": {
      "business.region": "池座高区",
      "business.tier": "3层",
      "business.row": "2排"
    }
  }, {
    "class": "b2.Follower",
    "ref": 307,
    "p": {
      "name": "",
      "angle": 27,
      "parent": 306,
      "layerId": "top",
      "image": "lock",
      "location": {
        "x": 651.7607204566721,
        "y": 1153.7294410925135
      },
      "width": 15.666666666666668,
      "height": 14,
      "host": 306
    },
    "s": {
      "body.type": "default.vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#E3E3E3",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 27,
      "follower.column.index": 0
    },
    "c": {
      "column.number": 13,
      "column.name": "13号",
      "row.column.name": "2排13号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "movable": false,
      "rect.select": true,
      "business.region": "池座高区",
      "business.tier": "3层",
      "business.row": "2排",
      "business.seat": "13号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 308,
    "p": {
      "name": "",
      "angle": 27,
      "parent": 306,
      "layerId": "top",
      "image": "lock",
      "location": {
        "x": 669.28384876571,
        "y": 1162.6579209207246
      },
      "width": 15.666666666666668,
      "height": 14,
      "host": 306
    },
    "s": {
      "body.type": "default.vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#E3E3E3",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 27,
      "follower.column.index": 1
    },
    "c": {
      "column.number": 14,
      "column.name": "14号",
      "row.column.name": "2排14号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "movable": false,
      "rect.select": true,
      "business.region": "池座高区",
      "business.tier": "3层",
      "business.row": "2排",
      "business.seat": "14号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 309,
    "p": {
      "name": "",
      "angle": 27,
      "parent": 306,
      "layerId": "top",
      "image": "lock",
      "location": {
        "x": 686.8069770747479,
        "y": 1171.5864007489356
      },
      "width": 15.666666666666668,
      "height": 14,
      "host": 306
    },
    "s": {
      "body.type": "default.vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#E3E3E3",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 27,
      "follower.column.index": 2
    },
    "c": {
      "column.number": 15,
      "column.name": "15号",
      "row.column.name": "2排15号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "movable": false,
      "rect.select": true,
      "business.region": "池座高区",
      "business.tier": "3层",
      "business.row": "2排",
      "business.seat": "15号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 310,
    "p": {
      "name": "",
      "angle": 27,
      "parent": 306,
      "layerId": "top",
      "image": "lock",
      "location": {
        "x": 704.3301053837857,
        "y": 1180.5148805771466
      },
      "width": 15.666666666666668,
      "height": 14,
      "host": 306
    },
    "s": {
      "body.type": "default.vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#E3E3E3",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 27,
      "follower.column.index": 3
    },
    "c": {
      "column.number": 16,
      "column.name": "16号",
      "row.column.name": "2排16号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "movable": false,
      "rect.select": true,
      "business.region": "池座高区",
      "business.tier": "3层",
      "business.row": "2排",
      "business.seat": "16号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 311,
    "p": {
      "name": "",
      "angle": 27,
      "parent": 306,
      "layerId": "top",
      "image": "lock",
      "location": {
        "x": 721.8532336928237,
        "y": 1189.4433604053577
      },
      "width": 15.666666666666668,
      "height": 14,
      "host": 306
    },
    "s": {
      "body.type": "default.vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#E3E3E3",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 27,
      "follower.column.index": 4
    },
    "c": {
      "column.number": 17,
      "column.name": "17号",
      "row.column.name": "2排17号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "movable": false,
      "rect.select": true,
      "business.region": "池座高区",
      "business.tier": "3层",
      "business.row": "2排",
      "business.seat": "17号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 312,
    "p": {
      "name": "",
      "angle": 27,
      "parent": 306,
      "layerId": "top",
      "image": "lock",
      "location": {
        "x": 739.3763620018616,
        "y": 1198.371840233569
      },
      "width": 15.666666666666668,
      "height": 14,
      "host": 306
    },
    "s": {
      "body.type": "default.vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#E3E3E3",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 27,
      "follower.column.index": 5
    },
    "c": {
      "column.number": 18,
      "column.name": "18号",
      "row.column.name": "2排18号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "movable": false,
      "rect.select": true,
      "business.region": "池座高区",
      "business.tier": "3层",
      "business.row": "2排",
      "business.seat": "18号"
    }
  }, {
    "class": "b2.Seat",
    "ref": 313,
    "p": {
      "name": "池座高区2排",
      "parent": 292,
      "layerId": "center",
      "location": {
        "x": 779.0749942839823,
        "y": 1204.6715320120077
      },
      "width": 120,
      "height": 20
    },
    "s": {
      "grid.border": 1,
      "grid.deep": 1,
      "grid.deep.color": "rgba(0,0,0,0.2)",
      "grid.padding": 2,
      "grid.column.count": 6,
      "grid.row.count": 1,
      "grid.fill": false,
      "grid.fill.color": "rgba(0,0,0,0.4)",
      "label.position": "left.left",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "shadow.blur": 0,
      "select.padding": 0,
      "select.width": 2,
      "select.style": "border"
    },
    "c": {
      "business.region": "池座高区",
      "business.tier": "3层",
      "business.row": "2排"
    }
  }, {
    "class": "b2.Follower",
    "ref": 314,
    "p": {
      "name": "",
      "parent": 313,
      "layerId": "top",
      "image": "lock",
      "location": {
        "x": 782.0749942839823,
        "y": 1207.6715320120077
      },
      "width": 15.666666666666668,
      "height": 14,
      "host": 313
    },
    "s": {
      "body.type": "default.vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#E3E3E3",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 0,
      "follower.column.index": 0
    },
    "c": {
      "column.number": 19,
      "column.name": "19号",
      "row.column.name": "2排19号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "movable": false,
      "rect.select": true,
      "business.region": "池座高区",
      "business.tier": "3层",
      "business.row": "2排",
      "business.seat": "19号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 315,
    "p": {
      "name": "",
      "parent": 313,
      "layerId": "top",
      "image": "lock",
      "location": {
        "x": 801.7416609506489,
        "y": 1207.6715320120077
      },
      "width": 15.666666666666668,
      "height": 14,
      "host": 313
    },
    "s": {
      "body.type": "default.vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#E3E3E3",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 0,
      "follower.column.index": 1
    },
    "c": {
      "column.number": 20,
      "column.name": "20号",
      "row.column.name": "2排20号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "movable": false,
      "rect.select": true,
      "business.region": "池座高区",
      "business.tier": "3层",
      "business.row": "2排",
      "business.seat": "20号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 316,
    "p": {
      "name": "",
      "parent": 313,
      "layerId": "top",
      "image": "lock",
      "location": {
        "x": 821.4083276173156,
        "y": 1207.6715320120077
      },
      "width": 15.666666666666668,
      "height": 14,
      "host": 313
    },
    "s": {
      "body.type": "default.vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#E3E3E3",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 0,
      "follower.column.index": 2
    },
    "c": {
      "column.number": 21,
      "column.name": "21号",
      "row.column.name": "2排21号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "movable": false,
      "rect.select": true,
      "business.region": "池座高区",
      "business.tier": "3层",
      "business.row": "2排",
      "business.seat": "21号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 317,
    "p": {
      "name": "",
      "parent": 313,
      "layerId": "top",
      "image": "lock",
      "location": {
        "x": 841.0749942839823,
        "y": 1207.6715320120077
      },
      "width": 15.666666666666668,
      "height": 14,
      "host": 313
    },
    "s": {
      "body.type": "default.vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#E3E3E3",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 0,
      "follower.column.index": 3
    },
    "c": {
      "column.number": 22,
      "column.name": "22号",
      "row.column.name": "2排22号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "movable": false,
      "rect.select": true,
      "business.region": "池座高区",
      "business.tier": "3层",
      "business.row": "2排",
      "business.seat": "22号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 318,
    "p": {
      "name": "",
      "parent": 313,
      "layerId": "top",
      "image": "lock",
      "location": {
        "x": 860.7416609506489,
        "y": 1207.6715320120077
      },
      "width": 15.666666666666668,
      "height": 14,
      "host": 313
    },
    "s": {
      "body.type": "default.vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#E3E3E3",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 0,
      "follower.column.index": 4
    },
    "c": {
      "column.number": 23,
      "column.name": "23号",
      "row.column.name": "2排23号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "movable": false,
      "rect.select": true,
      "business.region": "池座高区",
      "business.tier": "3层",
      "business.row": "2排",
      "business.seat": "23号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 319,
    "p": {
      "name": "",
      "parent": 313,
      "layerId": "top",
      "image": "lock",
      "location": {
        "x": 880.4083276173156,
        "y": 1207.6715320120077
      },
      "width": 15.666666666666668,
      "height": 14,
      "host": 313
    },
    "s": {
      "body.type": "default.vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#E3E3E3",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": 0,
      "follower.column.index": 5
    },
    "c": {
      "column.number": 24,
      "column.name": "24号",
      "row.column.name": "2排24号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "movable": false,
      "rect.select": true,
      "business.region": "池座高区",
      "business.tier": "3层",
      "business.row": "2排",
      "business.seat": "24号"
    }
  }, {
    "class": "b2.Seat",
    "ref": 320,
    "p": {
      "name": "池座高区2排",
      "angle": -24,
      "parent": 292,
      "layerId": "center",
      "location": {
        "x": 913.5985333534175,
        "y": 1177.6454178257995
      },
      "width": 120,
      "height": 20
    },
    "s": {
      "grid.border": 1,
      "grid.deep": 1,
      "grid.deep.color": "rgba(0,0,0,0.2)",
      "grid.padding": 2,
      "grid.column.count": 6,
      "grid.row.count": 1,
      "grid.fill": false,
      "grid.fill.color": "rgba(0,0,0,0.4)",
      "label.position": "left.left",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "shadow.blur": 0,
      "select.padding": 0,
      "select.width": 2,
      "select.style": "border"
    },
    "c": {
      "business.region": "池座高区",
      "business.tier": "3层",
      "business.row": "2排"
    }
  }, {
    "class": "b2.Follower",
    "ref": 321,
    "p": {
      "name": "",
      "angle": -24,
      "parent": 320,
      "layerId": "top",
      "image": "lock",
      "location": {
        "x": 920.849215019323,
        "y": 1200.6433027770263
      },
      "width": 15.666666666666668,
      "height": 14,
      "host": 320
    },
    "s": {
      "body.type": "default.vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#E3E3E3",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": -24,
      "follower.column.index": 0
    },
    "c": {
      "column.number": 25,
      "column.name": "25号",
      "row.column.name": "2排25号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "movable": false,
      "rect.select": true,
      "business.region": "池座高区",
      "business.tier": "3层",
      "business.row": "2排",
      "business.seat": "25号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 322,
    "p": {
      "name": "",
      "angle": -24,
      "parent": 320,
      "layerId": "top",
      "image": "lock",
      "location": {
        "x": 938.8156090196275,
        "y": 1192.6441487965358
      },
      "width": 15.666666666666668,
      "height": 14,
      "host": 320
    },
    "s": {
      "body.type": "default.vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#E3E3E3",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": -24,
      "follower.column.index": 1
    },
    "c": {
      "column.number": 26,
      "column.name": "26号",
      "row.column.name": "2排26号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "movable": false,
      "rect.select": true,
      "business.region": "池座高区",
      "business.tier": "3层",
      "business.row": "2排",
      "business.seat": "26号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 323,
    "p": {
      "name": "",
      "angle": -24,
      "parent": 320,
      "layerId": "top",
      "image": "lock",
      "location": {
        "x": 956.782003019932,
        "y": 1184.6449948160448
      },
      "width": 15.666666666666668,
      "height": 14,
      "host": 320
    },
    "s": {
      "body.type": "default.vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#E3E3E3",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": -24,
      "follower.column.index": 2
    },
    "c": {
      "column.number": 27,
      "column.name": "27号",
      "row.column.name": "2排27号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "movable": false,
      "rect.select": true,
      "business.region": "池座高区",
      "business.tier": "3层",
      "business.row": "2排",
      "business.seat": "27号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 324,
    "p": {
      "name": "",
      "angle": -24,
      "parent": 320,
      "layerId": "top",
      "image": "lock",
      "location": {
        "x": 974.7483970202364,
        "y": 1176.6458408355543
      },
      "width": 15.666666666666668,
      "height": 14,
      "host": 320
    },
    "s": {
      "body.type": "default.vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#E3E3E3",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": -24,
      "follower.column.index": 3
    },
    "c": {
      "column.number": 28,
      "column.name": "28号",
      "row.column.name": "2排28号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "movable": false,
      "rect.select": true,
      "business.region": "池座高区",
      "business.tier": "3层",
      "business.row": "2排",
      "business.seat": "28号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 325,
    "p": {
      "name": "",
      "angle": -24,
      "parent": 320,
      "layerId": "top",
      "image": "lock",
      "location": {
        "x": 992.7147910205409,
        "y": 1168.6466868550635
      },
      "width": 15.666666666666668,
      "height": 14,
      "host": 320
    },
    "s": {
      "body.type": "default.vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#E3E3E3",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": -24,
      "follower.column.index": 4
    },
    "c": {
      "column.number": 29,
      "column.name": "29号",
      "row.column.name": "2排29号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "movable": false,
      "rect.select": true,
      "business.region": "池座高区",
      "business.tier": "3层",
      "business.row": "2排",
      "business.seat": "29号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 326,
    "p": {
      "name": "",
      "angle": -24,
      "parent": 320,
      "layerId": "top",
      "image": "lock",
      "location": {
        "x": 1010.6811850208454,
        "y": 1160.6475328745728
      },
      "width": 15.666666666666668,
      "height": 14,
      "host": 320
    },
    "s": {
      "body.type": "default.vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#E3E3E3",
      "vector.outline.width": 0,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 0],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": -24,
      "follower.column.index": 5
    },
    "c": {
      "column.number": 30,
      "column.name": "30号",
      "row.column.name": "2排30号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "movable": false,
      "rect.select": true,
      "business.region": "池座高区",
      "business.tier": "3层",
      "business.row": "2排",
      "business.seat": "30号"
    }
  }, {
    "class": "b2.Seat",
    "ref": 327,
    "p": {
      "name": "池座高区2排",
      "angle": -29,
      "parent": 292,
      "layerId": "center",
      "location": {
        "x": 1103.1094593659939,
        "y": 1058.101159711921
      },
      "width": 240,
      "height": 20
    },
    "s": {
      "grid.border": 1,
      "grid.deep": 1,
      "grid.deep.color": "rgba(0,0,0,0.2)",
      "grid.padding": 2,
      "grid.column.count": 12,
      "grid.row.count": 1,
      "grid.fill": false,
      "grid.fill.color": "rgba(0,0,0,0.4)",
      "label.position": "left.left",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "shadow.blur": 0,
      "select.padding": 0,
      "select.width": 2,
      "select.style": "border",
      "label.xoffset": -5,
      "label.yoffset": 55.599999999999966
    },
    "c": {
      "business.region": "池座高区",
      "business.tier": "3层",
      "business.row": "2排"
    }
  }, {
    "class": "b2.Follower",
    "ref": 328,
    "p": {
      "name": 31,
      "angle": -29,
      "parent": 327,
      "layerId": "top",
      "location": {
        "x": 1119.7863596455381,
        "y": 1113.9858091204587
      },
      "width": 15.833333333333332,
      "height": 14,
      "host": 327
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#E3E3E3",
      "vector.outline.width": 1,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 1],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": -29,
      "follower.column.index": 0
    },
    "c": {
      "column.number": 31,
      "column.name": "31号",
      "row.column.name": "2排31号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "movable": false,
      "rect.select": true,
      "business.region": "池座高区",
      "business.tier": "3层",
      "business.row": "2排",
      "business.seat": "31号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 329,
    "p": {
      "name": 32,
      "angle": -29,
      "parent": 327,
      "layerId": "top",
      "location": {
        "x": 1137.1329838371362,
        "y": 1104.3704183189066
      },
      "width": 15.833333333333332,
      "height": 14,
      "host": 327
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#E3E3E3",
      "vector.outline.width": 1,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 1],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": -29,
      "follower.column.index": 1
    },
    "c": {
      "column.number": 32,
      "column.name": "32号",
      "row.column.name": "2排32号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "movable": false,
      "rect.select": true,
      "business.region": "池座高区",
      "business.tier": "3层",
      "business.row": "2排",
      "business.seat": "32号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 330,
    "p": {
      "name": 33,
      "angle": -29,
      "parent": 327,
      "layerId": "top",
      "location": {
        "x": 1154.4796080287342,
        "y": 1094.755027517354
      },
      "width": 15.833333333333332,
      "height": 14,
      "host": 327
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#E3E3E3",
      "vector.outline.width": 1,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 1],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": -29,
      "follower.column.index": 2
    },
    "c": {
      "column.number": 33,
      "column.name": "33号",
      "row.column.name": "2排33号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "movable": false,
      "rect.select": true,
      "business.region": "池座高区",
      "business.tier": "3层",
      "business.row": "2排",
      "business.seat": "33号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 331,
    "p": {
      "name": 34,
      "angle": -29,
      "parent": 327,
      "layerId": "top",
      "location": {
        "x": 1171.826232220332,
        "y": 1085.1396367158018
      },
      "width": 15.833333333333332,
      "height": 14,
      "host": 327
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#E3E3E3",
      "vector.outline.width": 1,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 1],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": -29,
      "follower.column.index": 3
    },
    "c": {
      "column.number": 34,
      "column.name": "34号",
      "row.column.name": "2排34号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "movable": false,
      "rect.select": true,
      "business.region": "池座高区",
      "business.tier": "3层",
      "business.row": "2排",
      "business.seat": "34号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 332,
    "p": {
      "name": 35,
      "angle": -29,
      "parent": 327,
      "layerId": "top",
      "location": {
        "x": 1189.17285641193,
        "y": 1075.5242459142494
      },
      "width": 15.833333333333332,
      "height": 14,
      "host": 327
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#E3E3E3",
      "vector.outline.width": 1,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 1],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": -29,
      "follower.column.index": 4
    },
    "c": {
      "column.number": 35,
      "column.name": "35号",
      "row.column.name": "2排35号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "movable": false,
      "rect.select": true,
      "business.region": "池座高区",
      "business.tier": "3层",
      "business.row": "2排",
      "business.seat": "35号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 333,
    "p": {
      "name": 36,
      "angle": -29,
      "parent": 327,
      "layerId": "top",
      "location": {
        "x": 1206.519480603528,
        "y": 1065.908855112697
      },
      "width": 15.833333333333332,
      "height": 14,
      "host": 327
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#E3E3E3",
      "vector.outline.width": 1,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 1],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": -29,
      "follower.column.index": 5
    },
    "c": {
      "column.number": 36,
      "column.name": "36号",
      "row.column.name": "2排36号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "movable": false,
      "rect.select": true,
      "business.region": "池座高区",
      "business.tier": "3层",
      "business.row": "2排",
      "business.seat": "36号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 334,
    "p": {
      "name": 37,
      "angle": -29,
      "parent": 327,
      "layerId": "top",
      "location": {
        "x": 1223.8661047951261,
        "y": 1056.2934643111448
      },
      "width": 15.833333333333332,
      "height": 14,
      "host": 327
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#E3E3E3",
      "vector.outline.width": 1,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 1],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": -29,
      "follower.column.index": 6
    },
    "c": {
      "column.number": 37,
      "column.name": "37号",
      "row.column.name": "2排37号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "movable": false,
      "rect.select": true,
      "business.region": "池座高区",
      "business.tier": "3层",
      "business.row": "2排",
      "business.seat": "37号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 335,
    "p": {
      "name": 38,
      "angle": -29,
      "parent": 327,
      "layerId": "top",
      "location": {
        "x": 1241.2127289867242,
        "y": 1046.6780735095922
      },
      "width": 15.833333333333332,
      "height": 14,
      "host": 327
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#E3E3E3",
      "vector.outline.width": 1,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 1],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": -29,
      "follower.column.index": 7
    },
    "c": {
      "column.number": 38,
      "column.name": "38号",
      "row.column.name": "2排38号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "movable": false,
      "rect.select": true,
      "business.region": "池座高区",
      "business.tier": "3层",
      "business.row": "2排",
      "business.seat": "38号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 336,
    "p": {
      "name": 39,
      "angle": -29,
      "parent": 327,
      "layerId": "top",
      "location": {
        "x": 1258.5593531783222,
        "y": 1037.06268270804
      },
      "width": 15.833333333333332,
      "height": 14,
      "host": 327
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#E3E3E3",
      "vector.outline.width": 1,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 1],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": -29,
      "follower.column.index": 8
    },
    "c": {
      "column.number": 39,
      "column.name": "39号",
      "row.column.name": "2排39号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "movable": false,
      "rect.select": true,
      "business.region": "池座高区",
      "business.tier": "3层",
      "business.row": "2排",
      "business.seat": "39号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 337,
    "p": {
      "name": 40,
      "angle": -29,
      "parent": 327,
      "layerId": "top",
      "location": {
        "x": 1275.9059773699203,
        "y": 1027.4472919064876
      },
      "width": 15.833333333333332,
      "height": 14,
      "host": 327
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#E3E3E3",
      "vector.outline.width": 1,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 1],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": -29,
      "follower.column.index": 9
    },
    "c": {
      "column.number": 40,
      "column.name": "40号",
      "row.column.name": "2排40号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "movable": false,
      "rect.select": true,
      "business.region": "池座高区",
      "business.tier": "3层",
      "business.row": "2排",
      "business.seat": "40号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 338,
    "p": {
      "name": 41,
      "angle": -29,
      "parent": 327,
      "layerId": "top",
      "location": {
        "x": 1293.252601561518,
        "y": 1017.8319011049352
      },
      "width": 15.833333333333332,
      "height": 14,
      "host": 327
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#E3E3E3",
      "vector.outline.width": 1,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 1],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": -29,
      "follower.column.index": 10
    },
    "c": {
      "column.number": 41,
      "column.name": "41号",
      "row.column.name": "2排41号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "movable": false,
      "rect.select": true,
      "business.region": "池座高区",
      "business.tier": "3层",
      "business.row": "2排",
      "business.seat": "41号"
    }
  }, {
    "class": "b2.Follower",
    "ref": 339,
    "p": {
      "name": 42,
      "angle": -29,
      "parent": 327,
      "layerId": "top",
      "location": {
        "x": 1310.5992257531163,
        "y": 1008.2165103033828
      },
      "width": 15.833333333333332,
      "height": 14,
      "host": 327
    },
    "s": {
      "body.type": "vector",
      "vector.shape": "roundrect",
      "vector.fill.color": "#E3E3E3",
      "vector.outline.width": 1,
      "vector.outline.color": "#000000",
      "vector.outline.pattern": [1, 1],
      "label.position": "center",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "select.padding": 0,
      "label.rotate.angle": -29,
      "follower.column.index": 11
    },
    "c": {
      "column.number": 42,
      "column.name": "42号",
      "row.column.name": "2排42号",
      "seat.stats": "未分配",
      "seat.price": 100,
      "movable": false,
      "rect.select": true,
      "business.region": "池座高区",
      "business.tier": "3层",
      "business.row": "2排",
      "business.seat": "42号"
    }
  }, {
    "class": "b2.Group",
    "ref": 340,
    "p": {
      "name": "池座高区3排",
      "layerId": "center",
      "location": {
        "x": 829.6762117964968,
        "y": 1146.4167661800793
      },
      "expanded": true
    },
    "s": {
      "group.fill": false,
      "group.fill.color": "#FFFFFF",
      "group.shape": "roundrect",
      "group.outline.width": 0,
      "group.outline.color": "#000000",
      "group.padding": 0,
      "vector.outline.pattern": [2, 2],
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "label.position": "left.left"
    },
    "c": {
      "movable": true,
      "row.number": 3,
      "row.name": "3排"
    }
  }, {
    "class": "b2.Seat",
    "ref": 341,
    "p": {
      "name": "池座高区3排",
      "angle": 29,
      "parent": 340,
      "layerId": "center",
      "location": {
        "x": 324.04296422699997,
        "y": 1096.3844291860005
      },
      "width": 240,
      "height": 20
    },
    "s": {
      "grid.border": 1,
      "grid.deep": 1,
      "grid.deep.color": "rgba(0,0,0,0.2)",
      "grid.padding": 2,
      "grid.column.count": 12,
      "grid.row.count": 1,
      "grid.fill": false,
      "grid.fill.color": "rgba(0,0,0,0.4)",
      "label.position": "left.left",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "shadow.blur": 0,
      "select.padding": 0,
      "select.width": 2,
      "select.style": "border",
      "label.yoffset": -49.1,
      "label.xoffset": -11
    }
  }, {
    "class": "b2.Seat",
    "ref": 342,
    "p": {
      "name": "池座高区3排",
      "angle": 27,
      "parent": 340,
      "layerId": "center",
      "location": {
        "x": 645.4974541196167,
        "y": 1225.7515633261462
      },
      "width": 120,
      "height": 20
    },
    "s": {
      "grid.border": 1,
      "grid.deep": 1,
      "grid.deep.color": "rgba(0,0,0,0.2)",
      "grid.padding": 2,
      "grid.column.count": 6,
      "grid.row.count": 1,
      "grid.fill": false,
      "grid.fill.color": "rgba(0,0,0,0.4)",
      "label.position": "left.left",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "shadow.blur": 0,
      "select.padding": 0,
      "select.width": 2,
      "select.style": "border"
    }
  }, {
    "class": "b2.Seat",
    "ref": 343,
    "p": {
      "name": "池座高区3排",
      "parent": 340,
      "layerId": "center",
      "location": {
        "x": 779.0749942839823,
        "y": 1257.3724546751127
      },
      "width": 120,
      "height": 20
    },
    "s": {
      "grid.border": 1,
      "grid.deep": 1,
      "grid.deep.color": "rgba(0,0,0,0.2)",
      "grid.padding": 2,
      "grid.column.count": 6,
      "grid.row.count": 1,
      "grid.fill": false,
      "grid.fill.color": "rgba(0,0,0,0.4)",
      "label.position": "left.left",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "shadow.blur": 0,
      "select.padding": 0,
      "select.width": 2,
      "select.style": "border"
    }
  }, {
    "class": "b2.Seat",
    "ref": 344,
    "p": {
      "name": "池座高区3排",
      "angle": -24,
      "parent": 340,
      "layerId": "center",
      "location": {
        "x": 913.5985333534176,
        "y": 1230.3463404889046
      },
      "width": 120,
      "height": 20
    },
    "s": {
      "grid.border": 1,
      "grid.deep": 1,
      "grid.deep.color": "rgba(0,0,0,0.2)",
      "grid.padding": 2,
      "grid.column.count": 6,
      "grid.row.count": 1,
      "grid.fill": false,
      "grid.fill.color": "rgba(0,0,0,0.4)",
      "label.position": "left.left",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "shadow.blur": 0,
      "select.padding": 0,
      "select.width": 2,
      "select.style": "border"
    }
  }, {
    "class": "b2.Seat",
    "ref": 345,
    "p": {
      "name": "池座高区3排",
      "angle": -29,
      "parent": 340,
      "layerId": "center",
      "location": {
        "x": 1127.3094593659935,
        "y": 1107.6011597119207
      },
      "width": 240,
      "height": 20
    },
    "s": {
      "grid.border": 1,
      "grid.deep": 1,
      "grid.deep.color": "rgba(0,0,0,0.2)",
      "grid.padding": 2,
      "grid.column.count": 12,
      "grid.row.count": 1,
      "grid.fill": false,
      "grid.fill.color": "rgba(0,0,0,0.4)",
      "label.position": "left.left",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "shadow.blur": 0,
      "select.padding": 0,
      "select.width": 2,
      "select.style": "border",
      "label.xoffset": -5,
      "label.yoffset": 55.599999999999966
    }
  }, {
    "class": "b2.Group",
    "ref": 346,
    "p": {
      "name": "侧翼15排",
      "layerId": "center",
      "location": {
        "x": 811.9228728895605,
        "y": 726.5088098143785
      },
      "expanded": true
    },
    "s": {
      "group.fill": false,
      "group.fill.color": "#FFFFFF",
      "group.shape": "roundrect",
      "group.outline.width": 0,
      "group.outline.color": "#000000",
      "group.padding": 0,
      "vector.outline.pattern": [2, 2],
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "label.position": "left.left",
      "label.rotate.angle": 81
    },
    "c": {
      "movable": true,
      "row.number": 4,
      "row.name": "4排"
    }
  }, {
    "class": "b2.Seat",
    "ref": 347,
    "p": {
      "name": "侧翼15排",
      "angle": 80,
      "parent": 346,
      "layerId": "center",
      "location": {
        "x": -58.58035511043997,
        "y": 735.9097368143784
      },
      "width": 480,
      "height": 20
    },
    "s": {
      "grid.border": 1,
      "grid.deep": 1,
      "grid.deep.color": "rgba(0,0,0,0.2)",
      "grid.padding": 2,
      "grid.column.count": 24,
      "grid.row.count": 1,
      "grid.fill": false,
      "grid.fill.color": "rgba(0,0,0,0.4)",
      "label.position": "left.left",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "shadow.blur": 0,
      "select.padding": 0,
      "select.width": 2,
      "select.style": "border"
    }
  }, {
    "class": "b2.Seat",
    "ref": 348,
    "p": {
      "name": "侧翼15排",
      "angle": -80,
      "parent": 346,
      "layerId": "center",
      "location": {
        "x": 1234.426100889561,
        "y": 721.1078828143786
      },
      "width": 480,
      "height": 20
    },
    "s": {
      "grid.border": 1,
      "grid.deep": 1,
      "grid.deep.color": "rgba(0,0,0,0.2)",
      "grid.padding": 2,
      "grid.column.count": 24,
      "grid.row.count": 1,
      "grid.fill": false,
      "grid.fill.color": "rgba(0,0,0,0.4)",
      "label.position": "left.left",
      "shadow.xoffset": 0,
      "shadow.yoffset": 0,
      "shadow.blur": 0,
      "select.padding": 0,
      "select.width": 2,
      "select.style": "border"
    }
  }, {
    "class": "b2.Follower",
    "ref": 349,
    "p": {
      "name": "剧在文化",
      "layerId": "top",
      "location": {
        "x": 828.9583362688669,
        "y": -103.49259022919027
      }
    },
    "s": {
      "body.type": "none",
      "label.position": "center",
      "label.font": "30px arial"
    },
    "c": {
      "movable": true
    }
  }]
}
