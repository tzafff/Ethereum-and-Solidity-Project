(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[597],{3544:function(e,n,t){"use strict";t.d(n,{Z:function(){return p}});var s=t(5893),a=(t(7294),t(5712)),i=t(9008),r=t.n(i),u=t(3272),d=t(6215),c=function(){return(0,s.jsxs)(u.Z,{style:{marginTop:"10px"},children:[(0,s.jsx)(d.Link,{route:"/",children:(0,s.jsx)("a",{className:"item",children:"CrowdCoin"})}),(0,s.jsxs)(u.Z.Menu,{position:"right",children:[(0,s.jsx)(d.Link,{route:"/",children:(0,s.jsx)("a",{className:"item",children:"Campaigns"})}),(0,s.jsx)(d.Link,{route:"/campaigns/new",children:(0,s.jsx)("a",{className:"item",children:"+"})})]})]})},p=function(e){return(0,s.jsxs)(a.Z,{children:[(0,s.jsx)(r(),{children:(0,s.jsx)("link",{rel:"stylesheet",href:"//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"})}),(0,s.jsx)(c,{}),e.children]})}},2889:function(e,n,t){"use strict";t.d(n,{Z:function(){return i}});var s=t(1508),a=JSON.parse('{"Mt":[{"inputs":[{"internalType":"uint256","name":"minimum","type":"uint256"}],"name":"createCampaign","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"deployedCampaigns","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getDeployedCampaigns","outputs":[{"internalType":"address payable[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"}]}'),i=new s.Z.eth.Contract(a.Mt,"0x885aAdACCBeAbaB27aF973f2758817f41BB09D7A")},1508:function(e,n,t){"use strict";var s,a=t(1085);if("undefined"!==typeof window.ethereum)window.ethereum.request({method:"eth_requestAccounts"}),s=new a.ZPm(window.ethereum);else{var i=new a.ZPm.providers.HttpProvider("https://goerli.infura.io/v3/462e973ff6644e94b9130bda4b5bf2e6");s=new a.ZPm(i)}n.Z=s},6215:function(e,n,t){"use strict";var s=t(7018)();s.add("/campaigns/new","/campaigns/new").add("/campaigns/:address","/campaigns/show").add("/campaigns/:address/requests","/campaigns/requests/index").add("/campaigns/:address/requests/new","/campaigns/requests/new"),e.exports=s},6601:function(){}}]);