<template>
	<view class="container">
		<!-- <div class="tooltip">
			<span class="tooltiptext" id="tooltiptext" style="visibility:{{tooltipVisible}}">{{ tooltipText }} </span>
		</div> -->
		<view class="date">{{ date }}</view>
		<view class="prices">
			<view :key="i" v-for="(item, i) in priceTypes" class="price-type">
				<view class="price-type-color" :style="{ backgroundColor: item.color }"></view>
				<text class="price-type-price">¥{{ item.price }}</text>
			</view>
		</view>
		<!-- <view class="prices">
      <text class="price-type-price" @click="smaller()">减小</text>
      <text class="price-type-price" @click="bigger()">增加</text>
    </view> -->
		<view class="sites" id="sites" @touchstart="canvasTouchstart" @mousemove="mousemove" @mousewheel="mousewheel"
			@touchmove="canvasTouchmove" @touchend="canvasTouchend">
			<canvas :style="{ width: canvasSize.width + 'px', height: canvasSize.height + 'px' }" canvas-id="siteCanvas"
				id="siteCanvas"></canvas>
		</view>

		</div>
		<view class="selected-sites">
			<view :key="i" v-for="(item, i) in selectedSites" class="selected-site">
				<view class="selected-site-color" :style="{ backgroundColor: item.color }"></view>
				<text class="selected-site-text">¥{{ item.c['business.seat'] }}</text>
				<image mode="aspectFit" @click="clickClose(i)" class="selected-site-close" src="../../static/close.png">
				</image>
			</view>
		</view>

		<view class="bottom">
			<view class="total">
				<text class="total-price">¥{{ totalPrice }}</text>
				<text class="total-desc">已省{{ leave }}元</text>
			</view>
			<view class="total-detail">
				<text class="total-detail-text">价格明细</text>
			</view>
			<view class="confirm-button" @click="confirm">确认选座</view>
		</view>
		<view class="zoom-img" v-show="showZoomFlagView"
			:style="{ width: zoomImgWidth + 'px', height: zoomImgHeight + 'px' }">
			<img :src="canvasImg" />
			<view class="zoom-flag" v-if="zoomFlagWidth != 0"
				:style="{ left: zoomFlagLeft + 'px', top: zoomFlagTop + 'px', width: zoomFlagWidth + 'px', height: zoomFlagHeight + 'px' }">
			</view>
		</view>
		<view class="tooltip" v-show="showTooltipFlag"
			:style="{ width: zoomImgWidth + 'px', height: zoomImgHeight + 'px' }">
			<img src="../../static/shijiao.jpg" />
			<!-- <img :src="../../static/shijiao.png">  </img> -->
			<!-- <view class="zoom-flag" v-if="zoomFlagWidth != 0"
				:style="{ left: zoomFlagLeft - 100  + 'px', top: zoomFlagTop + 'px', width: zoomFlagWidth + 'px', height: zoomFlagHeight + 'px' }">
			</view> -->
		</view>
	</view>
</template>

<script>
import { xuanzuo } from '@/utils/request.js';
import seats from "./datas.js"
let endTimeout;

export default {
	onInit() {
		console.log("Life cycle: onInit");
	},
	onLoad() {
		console.log("Life cycle: OnLoad");
	},
	onShow() {
		console.log("Life cycle: onShow");
	},
	onReady() {
		console.log("Life cycle: OnReady");
		this.context = uni.createCanvasContext('siteCanvas')
		const query = uni.createSelectorQuery().in(this);
		// https://developers.weixin.qq.com/miniprogram/dev/api/wxml/NodesRef.boundingClientRect.html
		query.select('#sites').boundingClientRect(rect => {
			this.canvasSize = {
				width: rect.width,
				height: rect.height
			};
			this.$nextTick(() => {
				console.log(rect);
				this.zoomImgWidth = rect.width * 0.3;
				this.zoomImgHeight = rect.height * 0.3;
				this.initData();
				this.draw();
				setTimeout(() => {
					uni.canvasToTempFilePath({
						x: 0, // 起点坐标
						y: 0,
						width: rect.width, // canvas 宽
						height: rect.height, // canvas 高
						canvasId: 'siteCanvas', // canvas id
						success: (res) => {
							console.log(res);
							const savedFilePath = res.tempFilePath //相对路径
							this.canvasImg = savedFilePath;
						}
					})
				}, 100)
			});
		}).exec();
	},
	onHide() {
		console.log("Life cycle: onHide");
	},
	onUnload() {
		console.log("Life cycle: onUnload");
	},
	onResize() {
		console.log("Life cycle: onResize");
	},
	onPullDownRefresh() {
		console.log("Life cycle: onPullDownRefresh");
	},
	onReachBottom() {
		console.log("Life cycle: onReachBottom");
	},
	onPageScroll() {
		console.log("Life cycle: onPageScroll");
	},
	onShareTimeline() {
		console.log("Life cycle: onShareTimeline");
	},
	created() {
		console.log("Life cycle: Created");
	},
	methods: {
		clickClose(i) {
			console.log(i);
			this.selectedSites.splice(i, 1);
		},
		handleOK() {
			console.log("handleOK");
			const context = uni.createCanvasContext("siteCanvas");
			context.setStrokeStyle("#00ff00");
			context.setLineWidth(5);
			context.rect(0, 0, 200, 200);
			context.stroke();
			context.setStrokeStyle("#ff0000");
			context.setLineWidth(2);
			context.moveTo(160, 100);
			context.arc(100, 100, 60, 0, 2 * Math.PI, true);
			context.moveTo(140, 100);
			context.arc(100, 100, 40, 0, Math.PI, false);
			context.moveTo(85, 80);
			context.arc(80, 80, 5, 0, 2 * Math.PI, true);
			context.moveTo(125, 80);
			context.arc(120, 80, 5, 0, 2 * Math.PI, true);
			context.stroke();
			context.draw();
		},
		async confirm() {
			// console.log("selectedSites", this.selectedSites);
			if (this.selectedSites.length === 0) {
				uni.showToast({
					title: "请选择座位",
					icon: "none",
					duration: 10000
				})
				return
			}
			let data = this.selectedSites.map((site) => site.c);
			uni.showToast({
				title: "提交的座位数据" + JSON.stringify(data),
				icon: "none",
				duration: 10000
			});
			// todo api
			let res = await xuanzuo(data);
		},
		//清理数据
		bigger() {
			this.canvasScale = this.canvasScale + 2;
			this.draw();
		},
		smaller() {
			this.canvasScale = this.canvasScale - 2;
			this.draw();
		},
		mousemove() {
			console.log("window222======");
		},
		mousewheel() {
			console.log("window222======");
		},
		initData() {
			let minX;
			let minY;
			let maxX;
			let maxY;
			seats.datas.forEach((item, i) => {
				if (item.p.location) {
					// context.font="30px";
					let x = item.p.location.x;
					let y = item.p.location.y;
					if (i == 0) {
						minX = maxX = x;
						minY = maxY = y;
					} else {
						if (x > maxX) {
							maxX = x;
						}
						if (x < minX) {
							minX = x;
						}
						if (y > maxY) {
							maxY = y;
						}
						if (y < minY) {
							minY = y;
						}
					}
				}
				if (item.p.points) {
					item.p.points.forEach((p, j) => {
						let x = p.x;
						let y = p.y;
						if (x > maxX) {
							maxX = x;
						}
						if (x < minX) {
							minX = x;
						}
						if (y > maxY) {
							maxY = y;
						}
						if (y < minY) {
							minY = y;
						}
					});
				}
			});

			console.log(`minX:${minX}, minY: ${minY}, maxX: ${maxX}, maxY:${maxY} `);

			let ofy = 50;
			let scale = this.canvasSize.width / (maxX - minX);
			seats.datas.forEach((item, i) => {
				if (item.p.location) {
					item.p.location.x = item.p.location.x - minX;
					item.p.location.y = item.p.location.y - minY + ofy;
					item.p.location.x = item.p.location.x * scale;
					item.p.location.y = item.p.location.y * scale + ofy;
				}
				if (item.p.width) {
					item.p.width = item.p.width * scale;
					item.p.height = item.p.height * scale;
				}
				if (item.p.points) {
					item.p.points.forEach((p, j) => {
						p.x = p.x - minX;
						p.y = p.y - minY + ofy;
						p.x = p.x * scale;
						p.y = p.y * scale + ofy;
					});
				}
				if(item.s['label.xoffset']) {
					item.s['label.xoffset'] *= scale; 
				}
				if(item.s['label.yoffset']) {
					item.s['label.yoffset'] *= scale; 
				}
			});
		},
		draw() {
			let context = this.context;
			if (!context) return;

			context.setStrokeStyle("#00ff00");
			context.setLineWidth(1);
			context.globalAlpha = 1.0;

			seats.datas.forEach((item, i) => {
				if (item.class === "b2.StageNode") {
					let { x, y } = this.getPoint(item.p.location.x, item.p.location.y);
					let { width, height } = {
						width: item.p.width * this.canvasScale,
						height: item.p.height * this.canvasScale
					}
					context.beginPath();
					context.setStrokeStyle('#000000');
					context.setLineWidth(1);
					// context.setFillStyle('#000000');
					context.rect(x, y, width, height);
					context.stroke();
					context.closePath();

					console.log("item.p.name=", item.p.name, x, y);
					context.font = "8px Microsoft YaHei";
					context.fillStyle = "#000000";
					context.fillText(item.p.name, x + width / 2, y + height / 2);

					if (item.p.points) {
						this.drawShape(context, item.p.points);
					}

				} else if (item.class === "b2.RegionNode") {
					let { x, y } = this.getPoint(item.p.location.x, item.p.location.y);
					let { width, height } = {
						width: item.p.width * this.canvasScale,
						height: item.p.height * this.canvasScale
					}
					context.beginPath();
					context.setStrokeStyle('#000000');
					context.setLineWidth(1);
					context.globalAlpha = 0.5; 
					context.setFillStyle('#bacac6');
					context.fillRect(x, y, width, height);
					context.stroke();
					context.closePath();

					console.log("item.p.name=", item.p.name, x, y);
					context.globalAlpha = 1.0; 
					context.font = "8px Microsoft YaHei";
					context.fillStyle = "#000000";
					context.fillText(item.p.name, x + width / 2 + item.s['label.xoffset'] * this.canvasScale , y + height / 2 + item.s['label.yoffset'] * this.canvasScale);

				} else if (item.class === "b2.SeatNode") {
					let { x, y } = this.getPoint(item.p.location.x, item.p.location.y);
					let { width, height } = {
						width: item.p.width * this.canvasScale,
						height: item.p.height * this.canvasScale
					}

					if (item.selected) {
						// context.beginPath();
						// context.setStrokeStyle('#00ff00');
						// context.setLineWidth(1);
						// context.setFillStyle('#00ff00');
						// context.rect(x, y, width, height);
						// context.stroke();
						// context.closePath();
						context.translate(x, y);
						context.drawImage('../../static/selected.png', 0, 0, width, height);
						context.translate(-x, -y);
					} else {

						// console.log("item.p.name=", item.p.name, x, y);
						// context.font = "8px Microsoft YaHei";
						// context.fillStyle = "#000000";
						// context.fillText(item.p.name, x + width / 2, y + height / 2);

						context.beginPath();
						context.setStrokeStyle('#000000');
						context.setLineWidth(1);
						context.arc(x + width / 2, y + height / 2, width / 2, 0, 2 * Math.PI);
						context.stroke();
						context.closePath();
					}

					// context.fillStyle = "#000000";
					// //context.rotate(item.p.angle*Math.PI/180);
					// if (item.selected) {
					// 	context.drawImage('../../static/selected.png', 0, 0, item.p.width * this
					// 		.canvasScale, item.p.height * this.canvasScale);
					// 	context.translate(-x, -y);
					// 	context.draw();
					// } else {
					// 	// context.drawImage('../../static/unselected.png', 0, 0, item.p.width * this
					// 	// 	.canvasScale, item.p.height * this.canvasScale);
					// }
					// //context.rotate(-item.p.angle*Math.PI/180);
					// if (!item.selected) {
					// 	context.beginPath();
					// 	context.setStrokeStyle("#ff0000");
					// 	context.setLineWidth(1);
					// 	context.arc(x + width / 2, y + height / 2, width / 2, 0, 2 * Math.PI, true);
					// 	context.stroke();
					// 	context.closePath();
					// 	context.setFillStyle('#000000');
					// 	context.fillText(item.p.name, x, y);
					// 	context.draw();
					// }
					//context.rotate(0);
				}
			});
			context.draw();
			this.showZoomFlag();
		},
		handleTouchMove(e) {
			// if(this.istouch){
			//   return;
			// }
			let touch = this.touchStart;
			// console.log("touch", touch);
			let clientX = touch.clientX;
			let clientY = touch.clientY - 75;

			// console.log("e===",e);
			// let clientX = e.detail.x;
			// let clientY = e.detail.y-e.currentTarget.offsetTop;

			seats.datas.forEach((item, i) => {
				if (item.class === "b2.SeatNode") {
					let {
						x,
						y
					} = this.getPoint(item.p.location.x, item.p.location.y);

					if (this.isIn(clientX, clientY, x, y, item.p.width * this.canvasScale, item.p.height * this
						.canvasScale)) {
						item.selected = !item.selected;
						if (item.selected) {
							if (!this.selectedSites.includes(item)) {
								this.selectedSites.push(item);
							}
							this.showTooltip();
						} else {
							this.selectedSites.splice(this.selectedSites.indexOf(item), 1);
						}
						// console.log("selectedSites===", this.selectedSites, item.selected);
					}
				}

			});
			if (this.canvasScale < this.maxCanvasScale) {
				let sx = clientX * (this.maxCanvasScale / this.canvasScale);
				let sy = clientY * (this.maxCanvasScale / this.canvasScale);
				let mx = (sx - this.canvasSize.width / 2) / (this.maxCanvasScale / this.canvasScale);
				let my = (sy - this.canvasSize.height / 2) / (this.maxCanvasScale / this.canvasScale);

				this.canvasScale = this.maxCanvasScale;
				this.canvasOffset.x = this.canvasOffset.x + mx;
				this.canvasOffset.y = this.canvasOffset.y + my;
			}
			this.draw();
		},
		getZoomFlag() {
			this.zoomFlagWidth = this.zoomImgWidth / this.canvasScale;
			this.zoomFlagHeight = this.zoomImgHeight / this.canvasScale;
			this.zoomFlagLeft = (this.canvasOffset.x / this.canvasSize.width) * this.zoomImgWidth;
			this.zoomFlagTop = (this.canvasOffset.y / this.canvasSize.height) * this.zoomImgHeight;
			return {
				x: this.zoomFlagLeft,
				y: this.zoomFlagTop,
				width: this.zoomFlagWidth,
				height: this.zoomFlagHeight
			};
		},
		showZoomFlag() {
			let zoom = this.getZoomFlag();
			this.zoomFlagWidth = this.zoomFlagWidth;
			this.zoomFlagHeight = this.zoomFlagHeight;
			this.zoomFlagLeft = this.zoomFlagLeft;
			this.zoomFlagTop = this.zoomFlagTop;
			// if(this.canvasScale==1){
			//   this.zoomFlagWidth = 0;
			//   this.zoomFlagHeight = 0;
			// }
			console.log(zoom);
		},
		// 点是否在矩形内部
		isIn(x, y, xo, yo, width, height) {
			return x <= xo + width && x >= xo && y <= yo + height && y >= yo
		},
		canvasTouchstart(e) {
			this.touchmove = false;
			if (e.touches.length >= 2) { //判断是否有两个点在屏幕上
				this.istouch = true;
				this.start = e.touches; //得到第一组两个点

			} else {
				let touch = e.touches[0]
				this.touch.x = touch.clientX;
				this.touch.y = touch.clientY;
				this.touchStart = touch;
			}

			this.showZoomFlagView = true;

			this.lastTouches = e.touches;
		},
		getDistance(p1, p2) {
			var x = p2.pageX - p1.pageX,
				y = p2.pageY - p1.pageY;
			return Math.sqrt((x * x) + (y * y));
		},
		canvasTouchmove(e) {
			e.stopPropagation();
			this.touchmove = true;
			// uni.showToast({
			//   title:"touchmove"+ this.touchmove
			// })
			var start = [];
			var now = e.touches; //得到第二组两个点
			var dis = this.getDistance(now[0], this.lastTouches[0]);
			if (dis > 10) {
				if (e.touches.length >= 2 && this.istouch) {
					// 缩放
					var scale = this.getDistance(now[0], now[1]) / this.getDistance(this.start[0], this.start[
						1]); //得到缩放比例，getDistance是勾股定理的一个方法
					this.canvasScale = this.canvasScale + (scale > 1 ? 0.15 : -0.15);
					if (this.canvasScale > this.maxCanvasScale) {
						this.canvasScale = this.maxCanvasScale;
					} else if (this.canvasScale < 1) {
						this.canvasScale = 1;
						this.canvasOffset.x = 0;
						this.canvasOffset.y = 0;
					}

					this.draw();



				} else {
					// 移动
					let touch = e.touches[0];


					let sx = this.canvasOffset.x;
					let sy = this.canvasOffset.y;

					this.canvasOffset.x = this.canvasOffset.x + (this.touch.x - touch.clientX) / this.canvasScale;
					this.canvasOffset.y = this.canvasOffset.y + (this.touch.y - touch.clientY) / this.canvasScale;

					let zoom = this.getZoomFlag();
					// console.log("zoom====", zoom, this.canvasOffset, this.zoomImgHeight);
					if (zoom.x < 0 || zoom.x > (this.zoomImgWidth - zoom.width) || zoom.y < 0 || (zoom.y + zoom
						.height) > (this.zoomImgHeight)) {
						this.canvasOffset.x = sx;
						this.canvasOffset.y = sy;
					} else {
						this.draw();
					}
					this.touch.x = touch.clientX;
					this.touch.y = touch.clientY;


				}

				this.lastTouches = now;
			}
			// if(this.drawEnd){
			//   this.drawEnd = false;

			// }
			// setTimeout(()=>{
			//   this.drawEnd = true;
			// },800)

		},
		canvasTouchend(e) {
			e.stopPropagation();
			if (this.istouch) {
				this.istouch = false;
			}
			// uni.showToast({
			//   title:"结束"+this.touchmove
			// })
			if (!this.touchmove) {
				this.handleTouchMove(e);
			}

			if (endTimeout) {
				clearTimeout(endTimeout);
				endTimeout = null;
			}
			endTimeout = setTimeout(() => {
				this.showZoomFlagView = false;
			}, 1000);

			//this.draw();
		},
		drawShape(context, points) {
			context.stroke()
			context.setStrokeStyle("#FF5A5F")
			context.setLineWidth(1)
			let bes = false;
			for (let i = 0; i < points.length; i++) {

				let p = points[i];
				let {
					x,
					y
				} = this.getPoint(p.x, p.y);
				if (i === 0) {
					context.moveTo(x, y)
				} else {
					if (bes) {
						context.lineTo(x, y);
						bes = false;
					} else {
						bes = true;
						let nextPoint;
						if (i + 1 < points.length) {
							nextPoint = points[i + 1];
						} else {
							nextPoint = points[0];
						}

						let lastPoint = points[i - 1];

						let {
							x: lastx,
							y: lasty
						} = this.getPoint(lastPoint.x, lastPoint.y);

						// context.moveTo(lastx, lasty)


						let {
							x: lx,
							y: ly
						} = this.getPoint(nextPoint.x, nextPoint.y);


						i++;
						context.quadraticCurveTo(x, y, lx, ly)
					}

				}

			}
			context.closePath();
			context.stroke()
		},
		getPoint(x, y) {
			return {
				x: (x - this.canvasOffset.x) * this.canvasScale,
				y: (y - this.canvasOffset.y) * this.canvasScale
			}
		},
		clickClose(i) {
			let item = this.selectedSites[i];
			item.selected = false;
			this.selectedSites.splice(i, 1);
			this.draw();
		},
		showTooltip() {
			this.showTooltipFlag = true;
			this.hideTooltip();
		},
		hideTooltip() {
			if (endTimeout) {
				clearTimeout(endTimeout);
				endTimeout = null;
			}
			endTimeout = setTimeout(() => {
				this.showTooltipFlag = false;
			}, 1000);
		},
	},
	data() {
		return {
			date: "2021-11-11 17:00:00",
			zoomImgWidth: 0,
			zoomImgHeight: 0,
			totalPrice: 300,
			leave: 290,
			context: null,
			canvasImg: "",
			zoomFlagLeft: 0,
			zoomFlagTop: 0,
			zoomFlagWidth: 0,
			zoomFlagHeight: 0,
			touchmove: false,
			touchStart: null,
			drawEnd: true,
			showZoomFlagView: false,
			showTooltipFlag: false,
			lastTouches: [],
			canvasOffset: {
				x: 0,
				y: 0
			},
			touch: {
				x: 0,
				y: 0
			},
			canvasSize: {
				width: 0,
				height: 0,
			},
			istouch: false,
			start: [],
			canvasScale: 1,
			maxCanvasScale: 5,
			priceTypes: [{
				color: "#A68F4F",
				price: "180",
				type: 1,
			},
			{
				color: "#2AC5FF",
				price: "280",
				type: 1,
			},
			{
				color: "#A7571B",
				price: "380",
				type: 1,
			}, {
				color: "#F68F08",
				price: "480",
				type: 1,
			},
			{
				color: "#00AE5C",
				price: "580",
				type: 1,
			}
			],
			selectedSites: [],
			
		}
	},
};
</script>

<style lang="scss">
.container {
	height: 100%;

	.date {
		margin-top: 5px;
		padding: 5px 10px;
		color: #666;
		font-size: 15px;
	}

	.prices {
		display: flex;
		flex-direction: row;
		background-color: #FFFFFF;
		padding: 5px 10px;
		overflow: auto;
		width: 100%;
		flex-wrap: nowrap;
		margin-top: 2px;

		.price-type {
			background: #F5F5F5;
			opacity: 1;
			border-radius: 78px;
			padding: 5px 6px;
			margin-right: 12px;
			display: flex;
			flex-direction: row;
			align-items: center;

			.price-type-color {
				width: 13px;
				height: 13px;
				border-radius: 3px;
			}

			.price-type-price {
				margin-left: 10px;
				line-height: 17px;
				font-size: 13px;
				color: #666666;
			}
		}
	}

	.sites {
		height: calc(100% - 210px);
		background-color: #F5F5F5;
	}

	.selected-sites {
		display: flex;
		flex-direction: row;
		background-color: #FFFFFF;
		overflow: auto;
		width: 100%;
		flex-wrap: nowrap;
		height: 30px;
		margin-top: 10px;
		margin-left: 10px;

		.selected-site {
			background: #F5F5F5;
			opacity: 1;
			border-radius: 78px;
			padding: 2px 2px;
			margin-right: 10px;
			display: flex;
			flex-direction: row;
			align-items: center;

			.selected-site-color {
				margin-left: 5px;
				width: 12px;
				height: 12px;
				border-radius: 3px;
				background-color: #FF5A5F;
			}

			.selected-site-text {
				margin-left: 5px;
				line-height: 17px;
				font-size: 13px;
				white-space: nowrap;
				color: #666666;
			}

			.selected-site-close {
				margin-left: 5px;
				width: 16px;
				height: 16px;
			}
		}
	}

	.bottom {
		display: flex;
		flex-direction: row;
		padding: 10px 10px 30px 10px;
		height: 70px;

		.total {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: flex-start;

			.total-price {
				color: #FF4E00;
				font-size: 25px;
				font-weight: bold;
				line-height: 50px;
			}

			.total-desc {
				font-size: 12px;
				color: #999999;
			}
		}

		.total-detail {
			margin-left: 10px;
			flex: 1;

			.total-detail-text {
				font-size: 12px;
				color: #999999;
				line-height: 50px;
			}
		}

		.confirm-button {
			width: 110px;
			height: 43px;
			background: #FF4E00;
			opacity: 1;
			border-radius: 22px;
			text-align: center;
			color: #FFFFFF;
			line-height: 43px;
		}
	}

	.zoom-img {
		position: absolute;
		top: 75px;
		right: 10px;
		z-index: 10000;
		background-color: rgba(0, 0, 0, 0.6);
		border-radius: 10px;
		overflow: hidden;

		image {
			width: 100%;
			height: 100%;
		}

		.zoom-flag {
			position: absolute;
			border: 1px solid #5454ff;
			box-sizing: border-box;
		}
	}

	.tooltip {
		position: absolute;
		top: 75px;
		left: 10px;
		z-index: 10000;
		background-color: rgba(0, 0, 0, 0.6);
		border-radius: 10px;
		overflow: hidden;

		image {
			width: 100%;
			height: 100%;
		}

		// .zoom-flag {
		// 	position: absolute;
		// 	border: 1px solid #5454ff;
		// 	box-sizing: border-box;
		// }
	}

	// .tooltip {
	// 	position: relative;
	// 	display: inline-block;
	// 	cursor: pointer;
	// }

	// .tooltiptext {
	// 	position: absolute;
	// 	top: 100px;
	// 	left: 100px;
	// 	// margin-left: 50%;
	// 	z-index: 99999;
	// 	width: 120px;
	// 	height:120px;
	// 	background-color: #333;
	// 	color: #fff;
	// 	text-align: center;
	// 	border-radius: 4px;
	// 	padding: 5px;
	// 	opacity: 0.6;
	// 	transition: opacity 0.3s;
	// }

	// .tooltip:hover .tooltiptext {
	// 	visibility: visible;
	// 	opacity: 1;
	// }


}
</style>
