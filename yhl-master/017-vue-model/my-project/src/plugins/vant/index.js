// 引入vant

import Vue from 'vue'
import { Tabbar, TabbarItem } from 'vant'
Vue.use(Tabbar).use(TabbarItem)

//加载全局tag标签组件
import { Tag } from 'vant';
Vue.use(Tag);

//加载全局swipe组件
import { Swipe, SwipeItem } from 'vant';
Vue.use(Swipe);
Vue.use(SwipeItem);

//图片懒加载
import { Lazyload } from 'vant';
Vue.use(Lazyload);

//加载全局sticky粘性布局组件
import { Sticky } from 'vant';
Vue.use(Sticky);

//加载全局Search组件
import { Search } from 'vant';
Vue.use(Search);


//加载全局layout组件
import { Col, Row } from 'vant';
Vue.use(Col);
Vue.use(Row);


//加载全局image组件
import { Image as VanImage } from 'vant';
Vue.use(VanImage);


//加载全局icon组件
import { Icon } from 'vant';
Vue.use(Icon);


//加载全局goodsaction组件
import { GoodsAction, GoodsActionIcon, GoodsActionButton } from 'vant';
Vue.use(GoodsAction);
Vue.use(GoodsActionButton);
Vue.use(GoodsActionIcon);

//加载全局grid宫格组件
import { Grid, GridItem } from 'vant';
Vue.use(Grid);
Vue.use(GridItem);


//加载全局Collapse组件
import { Collapse, CollapseItem } from 'vant';
Vue.use(Collapse);
Vue.use(CollapseItem);


//加载选项卡 表单 按钮 输入框 提示
import { Tab, Tabs, Form, Field, Button, NumberKeyboard, Toast } from 'vant';
Vue.use(Form);
Vue.use(Button);
Vue.use(Field);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(NumberKeyboard);
Vue.use(Toast);


//加载列表单元格
import { List, Cell } from 'vant';
Vue.use(List);
Vue.use(Cell);

//导航
import { NavBar } from 'vant';
Vue.use(NavBar);

//分割线
import { Divider } from 'vant';
Vue.use(Divider);

//遮罩层
import { Overlay } from 'vant';
Vue.use(Overlay);

//商品规格
import { Sku } from 'vant';

Vue.use(Sku);