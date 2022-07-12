import{_ as s,c as a,o as n,a as l}from"./app.5ab62c1a.js";var p="/vue-module-loader-doc/group.jpg",o="/vue-module-loader-doc/alipay.png",e="/vue-module-loader-doc/wechat.jpg",t="/vue-module-loader-doc/assets/vml01.891f4a1d.png",c="/vue-module-loader-doc/assets/dynamic-import-error.bf9ddf03.png";const f=JSON.parse('{"title":"\u6559\u7A0B","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u8FD9\u662F\u4EC0\u4E48\u73A9\u610F\u513F\uFF1F","slug":"\u8FD9\u662F\u4EC0\u4E48\u73A9\u610F\u513F\uFF1F"},{"level":2,"title":"\u91CD\u8981\u7684\u4E8C\u7EF4\u7801","slug":"\u91CD\u8981\u7684\u4E8C\u7EF4\u7801"},{"level":2,"title":"\u5FEB\u901F\u4E0A\u624B","slug":"\u5FEB\u901F\u4E0A\u624B"},{"level":3,"title":"\u6A21\u677F\u5DE5\u7A0B","slug":"\u6A21\u677F\u5DE5\u7A0B"},{"level":3,"title":"\u624B\u52A8\u914D\u7F6E","slug":"\u624B\u52A8\u914D\u7F6E"},{"level":3,"title":"\u6253\u5305\u53D1\u5E03","slug":"\u6253\u5305\u53D1\u5E03"},{"level":2,"title":"\u6A21\u5757\u4ECB\u7ECD","slug":"\u6A21\u5757\u4ECB\u7ECD"},{"level":3,"title":"\u8FD0\u884C\u5305\u5165\u53E3","slug":"\u8FD0\u884C\u5305\u5165\u53E3"},{"level":3,"title":"\u6A21\u5757\u5305\u5165\u53E3","slug":"\u6A21\u5757\u5305\u5165\u53E3"},{"level":3,"title":"\u6784\u5EFA\u914D\u7F6E","slug":"\u6784\u5EFA\u914D\u7F6E"},{"level":3,"title":"\u6A21\u5757\u90E8\u7F72","slug":"\u6A21\u5757\u90E8\u7F72"},{"level":3,"title":"\u6CE8\u610F\u4E8B\u9879","slug":"\u6CE8\u610F\u4E8B\u9879"}],"relativePath":"guide/index.md","lastUpdated":1657611112000}'),r={name:"guide/index.md"},D=l('<h1 id="\u6559\u7A0B" tabindex="-1">\u6559\u7A0B <a class="header-anchor" href="#\u6559\u7A0B" aria-hidden="true">#</a></h1><h2 id="\u8FD9\u662F\u4EC0\u4E48\u73A9\u610F\u513F\uFF1F" tabindex="-1">\u8FD9\u662F\u4EC0\u4E48\u73A9\u610F\u513F\uFF1F <a class="header-anchor" href="#\u8FD9\u662F\u4EC0\u4E48\u73A9\u610F\u513F\uFF1F" aria-hidden="true">#</a></h2><p>vue-module-loader \u662F\u4E13\u6CE8\u4E8E Vue \u751F\u6001\u7684\u5FAE\u524D\u7AEF\u6A21\u5757\u52A0\u8F7D\u5668\uFF0Cvue-module-loader \u652F\u6301\u52A0\u8F7D\u4F7F\u7528 vite \u6784\u5EFA\u51FA\u7684<a href="#%E6%A8%A1%E5%9D%97%E4%BB%8B%E7%BB%8D">\u7B26\u5408\u89C4\u8303\u7684\u5FAE\u524D\u7AEF\u6A21\u5757</a>\uFF0C\u8BA9\u4F60\u8F7B\u677E\u5B9E\u73B0\u5FAE\u524D\u7AEF\u67B6\u6784\u3002</p><h2 id="\u91CD\u8981\u7684\u4E8C\u7EF4\u7801" tabindex="-1">\u91CD\u8981\u7684\u4E8C\u7EF4\u7801 <a class="header-anchor" href="#\u91CD\u8981\u7684\u4E8C\u7EF4\u7801" aria-hidden="true">#</a></h2><table><thead><tr><th>qq \u7FA4\u4EA4\u6D41</th><th>\u5F00\u6E90\u4E0D\u6613</th><th>\u914C\u60C5\u652F\u6301</th></tr></thead><tbody><tr><td><img src="'+p+'" height="200" width="auto"></td><td><img src="'+o+'" height="200" width="auto"></td><td><img src="'+e+`" height="200" width="auto"></td></tr></tbody></table><h2 id="\u5FEB\u901F\u4E0A\u624B" tabindex="-1">\u5FEB\u901F\u4E0A\u624B <a class="header-anchor" href="#\u5FEB\u901F\u4E0A\u624B" aria-hidden="true">#</a></h2><h3 id="\u6A21\u677F\u5DE5\u7A0B" tabindex="-1">\u6A21\u677F\u5DE5\u7A0B <a class="header-anchor" href="#\u6A21\u677F\u5DE5\u7A0B" aria-hidden="true">#</a></h3><p>\u5F3A\u70C8\u63A8\u8350\u4F7F\u7528 <a href="https://github.com/mqhe2007/vue-module-creator" target="_blank" rel="noopener noreferrer">vue-module-creator</a> \u521B\u5EFA\u6A21\u677F\u5DE5\u7A0B\u3002</p><div class="tip custom-block"><p class="custom-block-title">\u63D0\u793A</p><p>\u6A21\u677F\u9879\u76EE\u662F\u975E\u5178\u578B vite \u5DE5\u7A0B\uFF0C\u5E76\u4E3B\u8981\u4F7F\u7528 vite \u7684 <a href="https://cn.vitejs.dev/guide/build.html#library-mode" target="_blank" rel="noopener noreferrer">\u5E93\u6A21\u5F0F</a></p></div><ol><li><p>\u5B89\u88C5\u547D\u4EE4\u884C\u5DE5\u5177</p><div class="language-bash"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">npm install -g vue-module-creator</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u6216\u4F7F\u7528yarn</span></span>
<span class="line"><span style="color:#A6ACCD;">yarn global add vue-module-creator</span></span>
<span class="line"></span></code></pre></div></li><li><p>\u521B\u5EFA\u5DE5\u7A0B</p><div class="language-bash"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">vml create</span></span>
<span class="line"></span></code></pre></div></li><li><p>\u8DDF\u968F\u5F15\u5BFC\u64CD\u4F5C</p><p><img src="`+t+`" alt="\u5F15\u5BFC"></p></li></ol><h3 id="\u624B\u52A8\u914D\u7F6E" tabindex="-1">\u624B\u52A8\u914D\u7F6E <a class="header-anchor" href="#\u624B\u52A8\u914D\u7F6E" aria-hidden="true">#</a></h3><ol><li><p>\u5B89\u88C5</p><div class="language-bash"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">yarn add vue-module-loader</span></span>
<span class="line"></span></code></pre></div></li><li><p>\u4F7F\u7528</p><p>\u60A8\u6709\u591A\u79CD\u5F00\u59CB\u4F7F\u7528\u7684\u65B9\u5F0F\uFF1A</p><ul><li>\u5148\u4F7F\u7528<code>use</code>\u65B9\u6CD5\u6CE8\u518C\u63D2\u4EF6</li></ul><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">// main.js</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> vml </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vue-module-loader</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> app </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> vue</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">createApp</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">use</span><span style="color:#A6ACCD;">(vml</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">/**\u4E0A\u4E0B\u6587\u5BF9\u8C61*/</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><ul><li>\u76F4\u63A5\u4F7F\u7528 VML \u7684<code>useModule</code>\u65B9\u6CD5\u52A0\u8F7D\u672C\u5730\u6A21\u5757</li></ul><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">useModule</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vue-module-loader</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// \u6A21\u5757\u5BFC\u51FA</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> localModule </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./module</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#82AAFF;">useModule</span><span style="color:#A6ACCD;">(localModule)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><ul><li>\u76F4\u63A5\u4F7F\u7528 VML \u7684<code>useModule</code>\u65B9\u6CD5\u52A0\u8F7D\u8FDC\u7A0B\u6A21\u5757</li></ul><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">useModule</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vue-module-loader</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">as</span><span style="color:#A6ACCD;"> Vue </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// \u52A0\u8F7D\u8FDC\u7A0B\u6A21\u5757\u65F6\u9700\u8981\u5728\u4E0A\u4E0B\u6587\u5BF9\u8C61\u4E2D\u6DFB\u52A0\u5B8C\u6574Vue\u5BF9\u8C61\u4F9B\u8FDC\u7A0B\u6A21\u5757\u4F7F\u7528\u3002</span></span>
<span class="line"><span style="color:#82AAFF;">useModule</span><span style="color:#A6ACCD;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">http://static.mengqinghe.com/vml/module/vue-module-module.iife.js</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> Vue </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>\u66F4\u591A\u4FE1\u606F\u89C1\uFF1A<a href="/vue-module-loader-doc/api/#\u5177\u540D\u65B9\u6CD5">API \u7528\u6CD5</a></p></li></ol><h3 id="\u6253\u5305\u53D1\u5E03" tabindex="-1">\u6253\u5305\u53D1\u5E03 <a class="header-anchor" href="#\u6253\u5305\u53D1\u5E03" aria-hidden="true">#</a></h3><h4 id="\u8FD0\u884C\u5305" tabindex="-1">\u8FD0\u884C\u5305 <a class="header-anchor" href="#\u8FD0\u884C\u5305" aria-hidden="true">#</a></h4><p>\u7B49\u4E8E\u666E\u901A vite \u9879\u76EE\u4F7F\u7528\u201Cbuild\u201D\u547D\u4EE4\u6784\u5EFA\u51FA\u7684\u4EE3\u7801\u5305\uFF0C\u50A8\u5B58\u5728 dist \u76EE\u5F55\u4E2D\uFF0C\u90E8\u7F72 web \u670D\u52A1\u5668\u540E\u53EF\u4EE5\u76F4\u63A5\u901A\u8FC7\u6D4F\u89C8\u5668\u8FD0\u884C\u3002</p><p>\u7EC8\u7AEF\u5B9A\u4F4D\u5230\u9879\u76EE\u6839\u76EE\u5F55\uFF0C\u6267\u884C\u547D\u4EE4\uFF1A</p><div class="language-bash"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">npm run build</span></span>
<span class="line"></span></code></pre></div><h4 id="\u6A21\u5757\u5305" tabindex="-1">\u6A21\u5757\u5305 <a class="header-anchor" href="#\u6A21\u5757\u5305" aria-hidden="true">#</a></h4><p>\u4F7F\u7528\u201Cbuild:module\u201D\u547D\u4EE4\u6784\u5EFA\u51FA\u7684\u4EE3\u7801\u5305\uFF0C\u50A8\u5B58\u5728 dist/module \u76EE\u5F55\u4E2D\uFF0C\u90E8\u7F72 web \u670D\u52A1\u5668\u540E\u53EF\u4EE5\u901A\u8FC7 &lt;\u6A21\u5757\u540D&gt;.iife.js \u6587\u4EF6\u5730\u5740\u8BBF\u95EE\u5230\u9759\u6001\u8D44\u6E90\u3002</p><p>\u7EC8\u7AEF\u5B9A\u4F4D\u5230\u9879\u76EE\u6839\u76EE\u5F55\uFF0C\u6267\u884C\u547D\u4EE4\uFF1A</p><div class="language-bash"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">npm run build:module</span></span>
<span class="line"></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">\u63D0\u793A\uFF1A</p><p>\u5F53\u9700\u8981\u4E00\u6B21\u6027\u6784\u5EFA\u8FD0\u884C\u5305\u548C\u6A21\u5757\u5305\u7684\u65F6\u5019\uFF0C\u4E00\u5B9A\u8981\u6309\u7167\u5148\u8FD0\u884C\u5305\u540E\u6A21\u5757\u5305\u7684\u987A\u5E8F\u6267\u884C\u6784\u5EFA\u547D\u4EE4\uFF0C\u65B9\u53EF\u540C\u65F6\u4F7F\u7528<code>dist</code>\u76EE\u5F55\u3002</p></div><h2 id="\u6A21\u5757\u4ECB\u7ECD" tabindex="-1">\u6A21\u5757\u4ECB\u7ECD <a class="header-anchor" href="#\u6A21\u5757\u4ECB\u7ECD" aria-hidden="true">#</a></h2><p>\u6A21\u5757\u76EE\u5F55\u7ED3\u6784\u548C vite \u5B98\u65B9 Vue \u9879\u76EE\u51E0\u4E4E\u4E00\u81F4\uFF0C\u53EA\u662F\u5728\u8FD0\u884C\u5305\u5165\u53E3\uFF0C\u6A21\u5757\u5305\u5165\u53E3\u548C\u6784\u5EFA\u914D\u7F6E\u6709\u4E9B\u8BB8\u5DEE\u522B\uFF0C\u4E0B\u9762\u4E00\u4E00\u4ECB\u7ECD\u3002</p><h3 id="\u8FD0\u884C\u5305\u5165\u53E3" tabindex="-1">\u8FD0\u884C\u5305\u5165\u53E3 <a class="header-anchor" href="#\u8FD0\u884C\u5305\u5165\u53E3" aria-hidden="true">#</a></h3><p><strong>/src/main.js</strong></p><p><code>src/main.js</code>\u4F9D\u7136\u662F\u6784\u5EFA\u5E94\u7528\u7A0B\u5E8F\uFF08\u8FD0\u884C\u5305\uFF09\u548C\u672C\u5730\u5F00\u53D1\u670D\u52A1\u7684\u5165\u53E3\u6587\u4EF6\u3002\u4E0D\u540C\u7684\u662F\u8981\u628A\u5F53\u524D\u6A21\u5757\u7684<code>\u6A21\u5757\u5305</code>\u5165\u53E3<code>src/module.js</code>\u5BFC\u5165\u8FDB\u6765\u3002</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">useModule</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vue-module-loader</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// \u672C\u5730\u6A21\u5757\u5305\u5165\u53E3</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> localModule </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./module</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// \u52A0\u8F7D\u8FDC\u7A0B\u6A21\u5757\u65F6\u9700\u8981\u5728\u4E0A\u4E0B\u6587\u5BF9\u8C61\u4E2D\u6DFB\u52A0\u5B8C\u6574Vue\u5BF9\u8C61\u4F9B\u8FDC\u7A0B\u6A21\u5757\u4F7F\u7528\u3002</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">as</span><span style="color:#A6ACCD;"> Vue </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// \u672C\u4F8B\u4F18\u5148\u52A0\u8F7D\u4E86vue-module-frame\u6A21\u5757\uFF08\u4E3B\u6846\u67B6\uFF09\u4F5C\u4E3A\u5F53\u524D\u6A21\u5757\u7684\u57FA\u5EA7</span></span>
<span class="line"><span style="color:#82AAFF;">useModule</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">http://static.mengqinghe.com/vml/frame/vue-module-frame.iife.js</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  Vue</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">then</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#82AAFF;">useModule</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">localModule</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">\u6CE8\u610F\uFF1A</p><p>\u518D\u6B21\u63D0\u9192\uFF0C<code>src/main.js</code>\u6587\u4EF6\u53EA\u5728\u6784\u5EFA\u8FD0\u884C\u5305\u548C\u672C\u5730\u5F00\u53D1\u670D\u52A1\u65F6\u6709\u6548\uFF0C\u6784\u5EFA\u6210\u6A21\u5757\u5305\u65F6\u65E0\u6548\u3002\u6240\u4EE5\u5F53\u4F60\u7684\u4EE3\u7801\u9700\u8981\u5305\u542B\u5728\u5FAE\u524D\u7AEF\u6A21\u5757\u4E2D\u65F6\uFF0C\u5E94\u8BE5\u6700\u7EC8\u5BFC\u5165<code>src/module.js</code>\u6587\u4EF6\uFF0C\u5E76\u968F\u7740\u6A21\u5757\u5BF9\u8C61\u5BFC\u51FA\u3002</p></div><h3 id="\u6A21\u5757\u5305\u5165\u53E3" tabindex="-1">\u6A21\u5757\u5305\u5165\u53E3 <a class="header-anchor" href="#\u6A21\u5757\u5305\u5165\u53E3" aria-hidden="true">#</a></h3><p><strong>/src/module.js</strong></p><p>\u6211\u4EEC\u7EA6\u5B9A\u65B0\u589E\u4E86<code>/src/module.js</code>\u6587\u4EF6\u4F5C\u4E3A\u6253\u6A21\u5757\u5305\u5165\u53E3\u6587\u4EF6\uFF0C\u6B64\u6587\u4EF6\u9ED8\u8BA4\u5BFC\u51FA\u4E00\u4E2A<a href="/vue-module-loader-doc/api/#\u6A21\u5757\u5BF9\u8C61">\u6A21\u5757\u5BF9\u8C61</a>\u3002</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">name</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">../package.json</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> routes </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./routes</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// \u5BFC\u51FA\u6A21\u5757\u5B9A\u4E49\u5BF9\u8C61</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  name</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// \u6A21\u5757\u540D\u79F0</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// \u6A21\u5757\u5B89\u88C5\u65F6\u94A9\u5B50</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">install</span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     * \u4F7F\u7528jsdoc\u914D\u5408IDE\u652F\u6301\u7C7B\u578B\u63D0\u793A</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     * </span><span style="color:#89DDFF;font-style:italic;">@</span><span style="color:#C792EA;font-style:italic;">type</span><span style="color:#676E95;font-style:italic;"> </span><span style="color:#89DDFF;font-style:italic;">{</span><span style="color:#FFCB6B;font-style:italic;">import(&#39;vue-module-loader/src/interfaces&#39;).Context</span><span style="color:#89DDFF;font-style:italic;">}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     */</span></span>
<span class="line"><span style="color:#A6ACCD;">    context</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// \u6F14\u793A\u4E1A\u52A1\uFF1A\u52A8\u6001\u6DFB\u52A0\u8DEF\u7531</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">routes</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">forEach</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">item</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">context</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">config</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">globalProperties</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">$router</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">addRoute</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">item</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// \u6A21\u5757\u5378\u8F7D\u65F6\u94A9\u5B50</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">uninstall</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// \u5378\u8F7D\u65F6\u9700\u8981\u6E05\u7406\u7684\u903B\u8F91</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span></code></pre></div><h3 id="\u6784\u5EFA\u914D\u7F6E" tabindex="-1">\u6784\u5EFA\u914D\u7F6E <a class="header-anchor" href="#\u6784\u5EFA\u914D\u7F6E" aria-hidden="true">#</a></h3><h4 id="\u914D\u7F6E-vite-config-js" tabindex="-1">\u914D\u7F6E vite.config.js <a class="header-anchor" href="#\u914D\u7F6E-vite-config-js" aria-hidden="true">#</a></h4><p>\u8FD0\u884C\u5305\u65E0\u9700\u7279\u6B8A\u914D\u7F6E\uFF0C\u7B26\u5408 vite \u914D\u7F6E\u5373\u53EF\u3002</p><p>\u6A21\u5757\u5305\u9700\u5982\u4E0B\u914D\u7F6E\uFF1A</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">config</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">build </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">outDir</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./dist/module/</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">sourcemap</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">inline</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">lib</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">entry</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">resolve</span><span style="color:#A6ACCD;">(__dirname</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">src/module.js</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// \u683C\u5F0F\u5FC5\u987B\u4E3Aiife</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">formats</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">iife</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">moduleName</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">rollupOptions</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// \u4E3A\u4E86\u4F7F\u591A\u6A21\u5757\u4F7F\u7528\u552F\u4E00Vue\u5BF9\u8C61\uFF0C\u5FC5\u987B\u5916\u7F6E\u5316Vue</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">external</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">output</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">globals</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">vue</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span></code></pre></div><h4 id="\u914D\u7F6E-package-json" tabindex="-1">\u914D\u7F6E package.json <a class="header-anchor" href="#\u914D\u7F6E-package-json" aria-hidden="true">#</a></h4><div class="language-json"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">scripts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">// \u542F\u52A8\u672C\u5730\u5F00\u53D1\u670D\u52A1</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">dev</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vite</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">// \u6253\u8FD0\u884C\u5305\uFF0C\u4E3B\u6846\u67B6\u6A21\u5757\u9700\u8981\uFF0C\u5176\u4ED6\u5B50\u6A21\u5757\u4E0D\u9700\u8981</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">build</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vite build</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">// \u6253\u6A21\u5757\u5305\uFF0C\u6CE8\u610F\u4E0D\u8981\u6F0F\u6389 BUILD_MODULE=1 \u73AF\u5883\u53D8\u91CF</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">build:module</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">cross-env BUILD_MODULE=1 vite build</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="\u6A21\u5757\u90E8\u7F72" tabindex="-1">\u6A21\u5757\u90E8\u7F72 <a class="header-anchor" href="#\u6A21\u5757\u90E8\u7F72" aria-hidden="true">#</a></h3><p>\u6A21\u5757\u6253\u5305\u540E\u7686\u4E3A\u9759\u6001\u8D44\u6E90\u6587\u4EF6\uFF0C\u90E8\u7F72\u6CA1\u6709\u7EDF\u4E00\u6D41\u7A0B\uFF0C\u80FD\u901A\u8FC7 url \u8BBF\u95EE\u5230\u6253\u5305\u540E\u6587\u4EF6\u5373\u53EF\u3002</p><h3 id="\u6CE8\u610F\u4E8B\u9879" tabindex="-1">\u6CE8\u610F\u4E8B\u9879 <a class="header-anchor" href="#\u6CE8\u610F\u4E8B\u9879" aria-hidden="true">#</a></h3><ol><li>\u7531\u4E8E Rollup \u6253\u5305\u4E3A IIFE \u683C\u5F0F\u65F6\u4E0D\u652F\u6301\u4EE3\u7801\u62C6\u5206\uFF0C\u6240\u4EE5\u6A21\u5757\u7F16\u5199 vue-router \u8DEF\u7531\u914D\u7F6E\u65F6\uFF0C\u7EC4\u4EF6\u4E0D\u53EF\u4F7F\u7528<code>import()</code>\u52A8\u6001\u5BFC\u5165\uFF0C\u5426\u5219\u4F1A\u6536\u5230\u5982\u4E0B\u9519\u8BEF\u3002 <img src="`+c+'" alt="\u52A8\u6001\u5BFC\u5165\u9519\u8BEF"></li></ol>',44),y=[D];function i(F,d,C,A,u,h){return n(),a("div",null,y)}var v=s(r,[["render",i]]);export{f as __pageData,v as default};
