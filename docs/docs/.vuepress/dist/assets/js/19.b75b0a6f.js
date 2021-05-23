(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{365:function(v,_,l){"use strict";l.r(_);var i=l(41),t=Object(i.a)({},(function(){var v=this,_=v.$createElement,l=v._self._c||_;return l("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[l("h1",{attrs:{id:"简介"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[v._v("#")]),v._v(" 简介")]),v._v(" "),l("h2",{attrs:{id:"技术选型"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#技术选型"}},[v._v("#")]),v._v(" 技术选型")]),v._v(" "),l("blockquote",[l("p",[v._v("基于Springcloud 和Vue.js的前后端分离的分布式在线评测系统")])]),v._v(" "),l("ul",[l("li",[l("p",[v._v("前端：")]),v._v(" "),l("ul",[l("li",[v._v("技术以Vue为主，element-ui为主要框架，网站风格样式模仿qdoj")]),v._v(" "),l("li",[v._v("支持手机端，响应式布局")]),v._v(" "),l("li",[v._v("以CodeMirror作为在线代码编辑器")]),v._v(" "),l("li",[v._v("以Mavon-Editor作为富文本编辑器")]),v._v(" "),l("li",[v._v("支持用户头像上传，可选择性获取用户Codeforces分数")]),v._v(" "),l("li",[v._v("定时获取例如Codeforces等其它知名OJ的近期比赛数据")]),v._v(" "),l("li",[v._v("当前支持HDU的Virtual Judge（远程虚拟判题）与题目获取")]),v._v(" "),l("li",[v._v("题目支持特别判题")]),v._v(" "),l("li",[v._v("题目支持可选择性去除提交代码的末尾空白符（会影响CE判定）")]),v._v(" "),l("li",[v._v("题目支持可选择性允许用户查看各个测试点结果（状态，运行时间，运行空间，OI题目的测试点得分），暂不支持测试点数据公开。")]),v._v(" "),l("li",[v._v("题目讨论")]),v._v(" "),l("li",[v._v("管理后台支持题目数据以ZIP上传或手动输入上传")]),v._v(" "),l("li",[v._v("管理后台支持监控服务系统的状态及各判题服务的状态")]),v._v(" "),l("li",[v._v("管理后台支持动态修改网站配置，例如邮件系统配置，数据库配置等")]),v._v(" "),l("li",[v._v("比赛支持封榜，支持ACM与OI模式")]),v._v(" "),l("li",[v._v("比赛支持私有赛（需要密码才可查看与提交），保护赛（每个用户都可查看，提交需要密码），公开赛（每个用户都可查看与提交）三种模式")]),v._v(" "),l("li",[v._v("用户提交失败时可重新提交，管理员支持提交重判与比赛题目所有提交重判")]),v._v(" "),l("li",[v._v("公共讨论区")]),v._v(" "),l("li",[v._v("比赛讨论")])])]),v._v(" "),l("li",[l("p",[v._v("后端：")]),v._v(" "),l("ul",[l("li",[v._v("Web框架技术以Springboot为主")]),v._v(" "),l("li",[v._v("以Nacos为分布式注册中心及分布式配置中心，支持配置文件动态刷新，支持判题服务Ribbon的负载均衡")]),v._v(" "),l("li",[v._v("以Mybatis-Plus为数据库中间件，负责数据实体类与数据库数据的转化与获取。")]),v._v(" "),l("li",[v._v("以Jsoup为爬虫框架，负责远程虚拟OJ的题目获取及提交结果获取，同时定时获取各用户的Codeforces分数以及其它知名OJ的近期比赛。")]),v._v(" "),l("li",[v._v("以Shiro为安全框架，支持用户角色权限管理，支持token刷新")]),v._v(" "),l("li",[v._v("以redis的发布订阅者作为判题服务的消息提醒，以此调用判题服务")]),v._v(" "),l("li",[v._v("后端分为数据后台服务（DataBackup）及判题服务（JudgeServer）\n"),l("ul",[l("li",[l("p",[v._v("数据后台服务：负责提供接口，提供相关数据给前端等")])]),v._v(" "),l("li",[l("p",[v._v("判题服务：只负责获取数据后台服务传输过来的判题的提交，调用VJ判题或调用判题机（Go-Judge）进行评测，将对应结果写回数据库")])])])])])]),v._v(" "),l("li",[l("p",[v._v("判题机：")]),v._v(" "),l("ul",[l("li",[v._v("支持HDU的VJ判题")]),v._v(" "),l("li",[v._v("支持Codefoces的VJ判题")]),v._v(" "),l("li",[v._v("以HttpAPI的形式调用Go-Jugde(高性能可复用的判题沙盒)判题安全沙盒进行提交程序的评测（调用线程池多线程跑评测）")])])]),v._v(" "),l("li",[l("p",[v._v("数据库")]),v._v(" "),l("ul",[l("li",[v._v("Mysql")])])]),v._v(" "),l("li",[l("p",[v._v("缓存中间件")]),v._v(" "),l("ul",[l("li",[v._v("Redis")])])])]),v._v(" "),l("blockquote",[l("p",[v._v("HOJ基本逻辑架构图")])]),v._v(" "),l("p",[l("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/HimitZH/CDN/images/hoj.png",alt:"image-20201030234527577"}})]),v._v(" "),l("h2",{attrs:{id:"判题逻辑"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#判题逻辑"}},[v._v("#")]),v._v(" 判题逻辑")]),v._v(" "),l("ol",[l("li",[l("p",[v._v("前端用户提交数据。")])]),v._v(" "),l("li",[l("p",[v._v("后端数据服务（DataBackup）获取到数据，先将提交数据初始化，同时将该提交的状态变成等待中，写入数据库。")])]),v._v(" "),l("li",[l("p",[v._v("通过Redis，写入"),l("strong",[v._v("等待判题队列")])])]),v._v(" "),l("li",[l("p",[v._v("调用work处理者，初始化传输数据，使用springcloud alibaba通过nacos注册中心调用判题微服务。")])]),v._v(" "),l("li",[l("p",[v._v("若是调用判题服务失败（没有空闲的判题服务器），则重新通过发布者将该提交信息发布到对应"),l("strong",[v._v("等待判题队列")]),v._v("，重回3。")])]),v._v(" "),l("li",[l("p",[v._v("若是调用失败超过30次，则将提交的状态修改为提交失败，不再进行判题服务的调用。")])]),v._v(" "),l("li",[l("p",[v._v("前端用户可看到提交变成提交失败，可点击状态进行重新提交，重回2（注：重新提交不影响提交时间等数据）")])]),v._v(" "),l("li",[l("p",[v._v("判题微服务获取到提交数据：")]),v._v(" "),l("ul",[l("li",[l("p",[v._v("若是远程调用，进行远程提交，获取对应的提交ID，若是获取失败则判为提交失败，若是获取成功，就启用线程定时器每2秒根据提交ID获取判题结果。")]),v._v(" "),l("p",[v._v("定时尝试30次，获取成功，写回数据库，获取失败就修改此次提交为提交失败。")])]),v._v(" "),l("li",[l("p",[v._v("若是自家题目提交，则启用线程池多线程使用Http将对应测试点数据与代码提交给Go-Judge判题沙盒进行编译与评测，最后获取各个评测点结果，进行结果计算写回数据库。")])])])])])])}),[],!1,null,null,null);_.default=t.exports}}]);