webpackJsonp([89875045807844],{336:function(n,s){n.exports={data:{markdownRemark:{html:'<h1>Modules &#x26; Styles</h1>\n<p>Now that we have learnt how to build a component. we could start <strong><em>flooding our index file with components</em></strong>, or we can learn how to better structure our components using modules. Along with learning how to structure our components, we will be learning how to write our styles as modules too.</p>\n<h2>Structuring Our Components</h2>\n<p>To structure our components we will create a folder called Components. Inside that, we will create a folder specific to each component. the folder will then contain an <code class="language-text">index.jsx</code> (where the definition of the react component will be exported) and a <code class="language-text">styles.css</code> (where our styles specific to this component will live). The structure should look like this.</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">source/\n  |- Component/\n    |- Article/\n      |- index.jsx\n      |- styles.css\n  |- index.jsx</code></pre>\n      </div>\n<h2>Modules</h2>\n<p>React components are designed to be used just like any standard export in javascript.</p>\n<p>how to export a component:</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token comment">// source/Component/SpicyHot/index.jsx</span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">SpicyHot</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>🌶<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>how to import a component from another file and use it:</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token comment">// source/index.jsx</span>\n<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> ReactDom <span class="token keyword">from</span> <span class="token string">"react-dom"</span><span class="token punctuation">;</span>\n\n<span class="token keyword">import</span> SpicyHot <span class="token keyword">from</span> <span class="token string">"./Component/SpicyHot"</span><span class="token punctuation">;</span>\n\nReactDom<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SpicyHot</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>\n  document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">\'root\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<h2>Exercise</h2>\n<p>Lets try and refactor <code class="language-text">Article</code> out of <code class="language-text">source/index.js</code> and into <code class="language-text">source/Components/Article/index.jsx</code></p>\n<h2>Modular Styles</h2>\n<p>So far we have made a pretty plain <code class="language-text">Article</code> component. To make it look a little neater we will be adding some styles 💅. To do this we will be writing our css as modules. This is setup in the <a href="../webpack.config.js">webpack</a> configuration. However configuring webpack is out of the scope of this lesson. The way css modules works is you write plain css and then import it into your component like you would with js. you can then access your class names as if they were members of the import.</p>\n<div class="gatsby-highlight">\n      <pre class="language-css"><code class="language-css"><span class="token comment">/* source/Components/Article/styles.css */</span>\n<span class="token selector">.myClass</span> <span class="token punctuation">{</span>\n  <span class="token property">border</span><span class="token punctuation">:</span> 0.125rem dashed red<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token comment">// source/Components/Article/index.jsx</span>\n<span class="token keyword">import</span> styles <span class="token keyword">from</span> <span class="token string">\'./styles.css\'</span><span class="token punctuation">;</span>\n\n<span class="token comment">// we can now set our components classes using our class</span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Article</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>myClass<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n      <span class="token operator">...</span>rest <span class="token keyword">of</span> <span class="token template-string"><span class="token string">`Article`</span></span>\'s definition\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h2>Exercise</h2>\n<p>Build out the styles for the article component. the article should look something like one of these (or not really up to you 💅):</p>\n<p><img src="../images/article-design.png" alt="article-design"></p>\n<p><strong><em>Additional Excercise</em></strong></p>\n<p>Render three artciles with unique content like in the image above (just make the content up 💩)</p>',frontmatter:{date:"March 22, 2018",path:"/chapters/modules-and-styles",title:"Modules & Styles"}}},pathContext:{}}}});
//# sourceMappingURL=path---chapters-modules-and-styles-0cfb8f88d3ae40b82640.js.map