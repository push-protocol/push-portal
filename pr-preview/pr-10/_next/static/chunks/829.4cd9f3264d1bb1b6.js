"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[829],{24918:function(t,e,r){var n=r(57437);r(2265);var a=r(24606),u=r(92180);e.Z=()=>(0,n.jsxs)(u.xuv,{display:"flex",flexDirection:{ml:"column",initial:"row"},justifyContent:"space-between",alignItems:"center",margin:"spacing-lg spacing-none spacing-none spacing-none",gap:{ml:"spacing-md"},children:[(0,n.jsxs)(u.xuv,{display:"flex",flexDirection:"row",gap:"spacing-md",children:[(0,n.jsx)(u.rUS,{to:"https://x.com/PushChain",title:"Push Twitter",target:"_blank",children:(0,n.jsx)(a.AMt,{size:30})}),(0,n.jsx)(u.rUS,{to:"https://github.com/push-protocol/",title:"Push Github",target:"_blank",children:(0,n.jsx)(a.rFR,{size:30})}),(0,n.jsx)(u.rUS,{to:"https://discord.gg/pushprotocol",title:"Push Discord",target:"_blank",children:(0,n.jsx)(a.KpZ,{size:30})})]}),(0,n.jsxs)(u.xuv,{display:"flex",flexDirection:"row",gap:"spacing-lg",children:[(0,n.jsx)(u.rUS,{to:"/tos",title:"Terms of Service",target:"_blank",children:"Terms of Service"}),(0,n.jsx)(u.rUS,{to:"/privacy",title:"Privacy Policy",target:"_blank",children:"Privacy Policy"})]})]})},1529:function(t,e,r){r.d(e,{vK:function(){return d},id:function(){return p},$7:function(){return y},qo:function(){return i},hK:function(){return o},ol:function(){return g},gi:function(){return m},Zt:function(){return c},Q4:function(){return f},zE:function(){return x},BM:function(){return P}});var n=r(23629),a=r(53781),u=r(1575);let i=()=>(0,n.a)({queryKey:[a.HE],queryFn:u.E8}),o=(t,e)=>{let{userId:r,activityTypes:i}=t;return(0,n.a)({queryKey:[a.cY,r,i],queryFn:()=>(0,u.hg)(r,i),...e})},c=t=>{let e=(0,n.a)({queryKey:[a.O1,t],queryFn:()=>(0,u.IV)(t),enabled:!!t});return e};var s=r(14685),l=r(37471);let d=()=>(0,s.D)({mutationKey:[a.YY],mutationFn:l.Kz}),f=t=>(0,n.a)({queryKey:[a.fz,t.caip10WalletAddress],queryFn:()=>(0,l.sx)(t),retry:!1,enabled:!("eip155:0x0000000000000000000000000000000000000001"===t.caip10WalletAddress||!t.caip10WalletAddress)}),p=()=>(0,s.D)({mutationKey:[a.ph],mutationFn:l.GE});var h=r(67130);let y=(t,e)=>(0,n.a)({queryKey:[h.VU,null==t?void 0:t.userId,null==t?void 0:t.activities],queryFn:()=>(0,l.Pc)(t),enabled:e});var v=r(84173);let g=t=>{let{order:e,pageSize:r}=t;return(0,v.N)({queryKey:[a.rR],initialPageParam:1,queryFn:t=>{let{pageParam:n}=t;return(0,l.GQ)({order:e,pageSize:r,pageNumber:n})},getNextPageParam:t=>{let{page:e,total:r,pageSize:n}=t;return n*e>=r?null:e+1}})},m=t=>{let{order:e,pageSize:r}=t;return(0,v.N)({queryKey:[a.eB],initialPageParam:1,queryFn:t=>{let{pageParam:n}=t;return(0,l.SX)({order:e,pageSize:r,pageNumber:n})},getNextPageParam:t=>{let{page:e,total:r,pageSize:n}=t;return n*e>=r?null:e+1}})},x=t=>{let{userId:e}=t;return(0,n.a)({queryKey:[a.ix,e],queryFn:()=>(0,l.rN)(e),enabled:!!e})},P=()=>(0,s.D)({mutationKey:[a.sF],mutationFn:l.U$})},67130:function(t,e,r){r.d(e,{$7:function(){return n.$7},BM:function(){return n.BM},Q4:function(){return n.Q4},VU:function(){return a.VU},Zt:function(){return n.Zt},gi:function(){return n.gi},hK:function(){return n.hK},ol:function(){return n.ol},qo:function(){return n.qo},vK:function(){return n.vK},zE:function(){return n.zE}});var n=r(1529);r(37471);var a=r(53781)},53781:function(t,e,r){r.d(e,{HE:function(){return n},O1:function(){return i},VU:function(){return s},YY:function(){return a},cY:function(){return l},eB:function(){return f},fz:function(){return p},ix:function(){return o},ph:function(){return u},rR:function(){return d},sF:function(){return c}});let n="allActivities",a="claimRewards",u="createUserRewardsDetails",i="discordDetails",o="userXP",c="refreshUserXp",s="rewardActivityStatus",l="rewardsActivity",d="rewardsLeaderboardS1",f="rewardsLeaderboardS1",p="userRewardsDetails"},37471:function(t,e,r){r.d(e,{GE:function(){return n.GE},GQ:function(){return n.GQ},Kz:function(){return n.Kz},Pc:function(){return n.Pc},SX:function(){return n.SX},U$:function(){return n.U$},rN:function(){return n.rN},sx:function(){return n.sx}});var n=r(1575)},1575:function(t,e,r){r.d(e,{Kz:function(){return h},GE:function(){return m},Pc:function(){return P},E8:function(){return c},hg:function(){return l},GQ:function(){return E},SX:function(){return K},IV:function(){return f},sx:function(){return v},rN:function(){return z},U$:function(){return w}});var n=r(54829);let a=t=>({activities:t.activities,page:t.page,size:t.size,total:t.total});var u=r(2456);let i=u.Z.APP_ENV,o=()=>{switch(i){case"prod":return"https://us-east1-push-prod-apps.cloudfunctions.net/pushpointsrewardsystem";case"staging":return"https://us-east1-push-stage-apps.cloudfunctions.net/pushpointsrewardsystem";default:return"https://us-east1-push-dev-apps.cloudfunctions.net/helloWorld"}},c=()=>(0,n.default)({method:"GET",url:"".concat("".concat(o()),"/v2/activities/all"),params:{pageSize:300}}).then(t=>a(t.data)),s=t=>t,l=(t,e)=>{let r=e.join(",");return(0,n.default)({method:"GET",url:"".concat(o(),"/v2/users/").concat(t,"/activities/bytype?types=").concat(r)}).then(t=>s(t.data))},d=t=>t,f=t=>(0,n.default)({method:"GET",url:"https://discord.com/api/users/@me",headers:{Authorization:"Bearer ".concat(t)}}).then(t=>d(t.data)),p=t=>t,h=t=>(0,n.default)({method:"POST",url:"".concat(o(),"/v2/users/").concat(t.userId,"/activity/").concat(t.activityTypeId),data:{data:t.data,verificationProof:t.verificationProof},headers:{"Content-Type":"application/json"}}).then(t=>p(t.data)),y=t=>t,v=t=>{let{caip10WalletAddress:e}=t;return(0,n.default)({method:"GET",url:"".concat(o(),"/v2/users/wallet/").concat(e)}).then(t=>y(t.data))},g=t=>t,m=t=>(0,n.default)({method:"POST",url:"".concat(o(),"/v2/users/"),data:{userWallet:t.userWallet,data:t.data,verificationProof:t.verificationProof,refPrimary:t.refPrimary},headers:{"Content-Type":"application/json"}}).then(t=>g(t.data)),x=t=>t,P=t=>{let e=t.activities.join(",");return(0,n.default)({method:"GET",url:"".concat(o(),"/v2/users/").concat(t.userId,"/recent-activities/v2?types=").concat(e),headers:{"Content-Type":"application/json"}}).then(t=>x(t.data))},b=t=>({users:t.users.map(t=>({userId:t.userId,userWallet:t.userWallet,totalPoints:t.totalPoints,rank:t.rank})),page:t.page,pageSize:t.pageSize,total:t.total}),E=async t=>{let{order:e,pageSize:r,pageNumber:a}=t;return(0,n.default)({method:"GET",url:"".concat(o(),"/users/leaderboard"),params:{order:e||"desc",pageSize:r||20,pageNumber:a||1}}).then(t=>b(t.data))},K=async t=>{let{order:e,pageSize:r,pageNumber:a}=t;return(0,n.default)({method:"GET",url:"".concat(o(),"/v2/users/leaderboard"),params:{order:e||"desc",pageSize:r||20,pageNumber:a||1}}).then(t=>b(t.data))},S=t=>t,z=async t=>(0,n.default)({method:"GET",url:"".concat(o(),"/v2/user-app-xp/user/").concat(t,"/xp")}).then(t=>S(t.data)),q=t=>t,w=async t=>(0,n.default)({method:"PUT",url:"".concat(o(),"/v2/user-app-xp/user/").concat(null==t?void 0:t.userId,"/xp/refresh")}).then(t=>q(t.data))}}]);