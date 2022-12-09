## lucky-done-skeleton
##### 绘制小程序骨架屏

## 使用

1 安装和引入

```
 npm i lucky-bone-skeleton
```

2 引入自定义组件

```
 "usingComponents": {
    "Lb-skeleton": "lucky-bone-skeleton",
  },
```

3 小程序中构建npm

*  在微信开发者工具中，设置 —> 项目设置—> 勾选使用npm模块。
*  在微信开发者工具中，工具 —> 构建npm，构建完成会生成 miniprogram_npm 文件夹，项目用到的npm包都在这里
*  按照页面的使用路径，从 miniprogram_npm 引入需要的包

4 在wxml页面中使用骨架屏

```
 <Lb-skeleton selectClass = 'sk' 
 	showLBSk = '{{true}}'/>
 	
 <view class = 'sk' style = 'padding:0rpx 	40rpx;box-sizing:border-box;opacity:0;'>
  
  <swiper class = 'sk_rect' style = 	'height:150rpx;border:1px solid red;margin-	top:10rpx;border-radius:40rpx;'>
    <block wx:for="{{swiperArr}}" > 
      <swiper-item>
        <image src = '{{item}}'></image>
      </swiper-item>
    </block>
  </swiper>
  <view bindtap="_tap" class = 'sk_rect'  style = 'width: 100rpx;height: 100rpx;margin-top:100rpx;'>安妮钮</view>
  <view style='margin-top:10rpx;'><text class = 'sk_rect'>我是一行文字我是一行文字我是一行文字我是一行文字我是一行文字我是一行文字我是一行文字我是一行文字我是一行文字我是一行文字我是一行文字我是一行文字我是一行文字</text></view>
  <view class = 'sk_rect'>
    <input type="text" placeholder="请输入" style = 'border-radius:10rpx;'/>
  </view>
</view>
```

5 js中

```
 showLBSk 对这个参数传递true或者false
```

6 API

|Options|Type|Required|Default|Description|
|----|----|----|----|----|
| selectClass | String | Yes| ''| 渲染节点的标识前缀，比如selectClass = 'lb_sk' 那么页面根节点就是class = 'lb_sk' 绘制出的骨架屏就是 class = 'lb_sk_rect'
| showLBSk | Boolean | Yes | false|

#### 备注
* 如果组件样式未加载过来，去npm构建到的组件中，找到wxss,保存一下就行