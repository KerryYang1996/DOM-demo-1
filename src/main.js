const div = dom.create("<div>newDiv</div>");
const div2 = dom.create("<div>childNode</div>");
const div3 = dom.create("<div id ='parent'></div>");
const div4 = dom.create("<div id ='find'></div>");
const div5 = dom.create("<div id ='find'></div>");

console.log(div);
//增
dom.after(test, div);
dom.before(test, div); //div添加到前面后面的就消失了，只能在一个位置显示
dom.append(test, div2);
dom.wrap(test, div3);
//删
dom.remove(div2);
const e = dom.empty(div3);
console.log(e); //输出删除的子元素
//改
dom.attr(div3, "title", "kerry"); //改属性
const title = dom.attr(div3, "title");
console.log(`title:${title}`);
dom.text(div, "我是新的text"); //改文本内容
const text = dom.text(div); //显示文本内容
console.log(text);
//改style样式的两种方式
dom.style(div, "color", "red");
dom.style(div, { color: "green" });
const color = dom.style(div, "color");
console.log(color);
//改class属性
dom.class.add(div3, "red");
dom.class.remove(div3, "red");
const class1 = dom.class.has(div3, "red");
console.log(`class1:${class1}`);

const fn = () => {
  console.log("点击了");
};
dom.on(div, "click", fn);
dom.off(div, "click", fn);

const parentDiv = dom.find("#parent")[0]; //这个[0]千万别忘
console.log(parentDiv);
//查元素
dom.append(div, div4);
dom.append(div3, div5);
const f = dom.find("#find", div)[0];
console.log(f);
//查找兄弟元素
const s2 = dom.find("#s2")[0];
console.log(dom.siblings(s2));
//查找下一个节点
console.log(dom.next(s2));
//找上一个节点
console.log(dom.previous(s2));
//遍历节点
const t = dom.find("#travel")[0];
console.log(
  dom.each(dom.children(t), (n) => {
    dom.style(n, "color", "red");
  })
);
//查看子元素在所有子元素中的位置
console.log(dom.index(s2));
