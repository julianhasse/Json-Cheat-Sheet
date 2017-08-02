(function()
{
 "use strict";
 var ForDevelopers,Helpers,Lazy,Model,SC$1,Route,ClientEndPoint,Kind,EP,SC$2,SectionsAndPages,ConfigurationPageType,ConfigurationPage,ConfigurationSection,Configuration,SectionsAndPagesNew,Client,Page,Section,Client$1,Types,Sites,SC$3,ForDevelopers_Templates,WebSharper,Lazy$1,Date,UI,Next,Var,Strings,Arrays,IntelliFactory,Runtime,FPish,Api,Client$2,AuthenticationServer,Api$1,Endpoint,List,Seq,Unchecked,Operators,View,Collections,Map,String,PrintfHelpers,Doc,AttrProxy,AttrModule,$,Concurrency,JavaScript,JSModule,Json,JSON,Markup,Markdown,Common,Client$3,UI$1,Next$1,OAuth2Client,ClientSide,UI$2,Forms,Form,Pervasives,User,RegisterData,Validation,console,CodeMirror,FSharp,CodeMirror$1;
 ForDevelopers=window.ForDevelopers=window.ForDevelopers||{};
 Helpers=ForDevelopers.Helpers=ForDevelopers.Helpers||{};
 Lazy=ForDevelopers.Lazy=ForDevelopers.Lazy||{};
 Model=ForDevelopers.Model=ForDevelopers.Model||{};
 SC$1=window.StartupCode$ForDevelopers$Helpers=window.StartupCode$ForDevelopers$Helpers||{};
 Route=ForDevelopers.Route=ForDevelopers.Route||{};
 ClientEndPoint=ForDevelopers.ClientEndPoint=ForDevelopers.ClientEndPoint||{};
 Kind=ClientEndPoint.Kind=ClientEndPoint.Kind||{};
 EP=ClientEndPoint.EP=ClientEndPoint.EP||{};
 SC$2=window.StartupCode$ForDevelopers$ClientEndPoint=window.StartupCode$ForDevelopers$ClientEndPoint||{};
 SectionsAndPages=ForDevelopers.SectionsAndPages=ForDevelopers.SectionsAndPages||{};
 ConfigurationPageType=SectionsAndPages.ConfigurationPageType=SectionsAndPages.ConfigurationPageType||{};
 ConfigurationPage=SectionsAndPages.ConfigurationPage=SectionsAndPages.ConfigurationPage||{};
 ConfigurationSection=SectionsAndPages.ConfigurationSection=SectionsAndPages.ConfigurationSection||{};
 Configuration=SectionsAndPages.Configuration=SectionsAndPages.Configuration||{};
 SectionsAndPagesNew=ForDevelopers.SectionsAndPagesNew=ForDevelopers.SectionsAndPagesNew||{};
 Client=SectionsAndPagesNew.Client=SectionsAndPagesNew.Client||{};
 Page=Client.Page=Client.Page||{};
 Section=Client.Section=Client.Section||{};
 Client$1=ForDevelopers.Client=ForDevelopers.Client||{};
 Types=ForDevelopers.Types=ForDevelopers.Types||{};
 Sites=Types.Sites=Types.Sites||{};
 SC$3=window.StartupCode$ForDevelopers$Client=window.StartupCode$ForDevelopers$Client||{};
 ForDevelopers_Templates=window.ForDevelopers_Templates=window.ForDevelopers_Templates||{};
 WebSharper=window.WebSharper;
 Lazy$1=WebSharper&&WebSharper.Lazy;
 Date=window.Date;
 UI=WebSharper&&WebSharper.UI;
 Next=UI&&UI.Next;
 Var=Next&&Next.Var;
 Strings=WebSharper&&WebSharper.Strings;
 Arrays=WebSharper&&WebSharper.Arrays;
 IntelliFactory=window.IntelliFactory;
 Runtime=IntelliFactory&&IntelliFactory.Runtime;
 FPish=IntelliFactory&&IntelliFactory.FPish;
 Api=FPish&&FPish.Api;
 Client$2=Api&&Api.Client;
 AuthenticationServer=IntelliFactory&&IntelliFactory.AuthenticationServer;
 Api$1=AuthenticationServer&&AuthenticationServer.Api;
 Endpoint=Api$1&&Api$1.Endpoint;
 List=WebSharper&&WebSharper.List;
 Seq=WebSharper&&WebSharper.Seq;
 Unchecked=WebSharper&&WebSharper.Unchecked;
 Operators=WebSharper&&WebSharper.Operators;
 View=Next&&Next.View;
 Collections=WebSharper&&WebSharper.Collections;
 Map=Collections&&Collections.Map;
 String=window.String;
 PrintfHelpers=WebSharper&&WebSharper.PrintfHelpers;
 Doc=Next&&Next.Doc;
 AttrProxy=Next&&Next.AttrProxy;
 AttrModule=Next&&Next.AttrModule;
 $=window.jQuery;
 Concurrency=WebSharper&&WebSharper.Concurrency;
 JavaScript=WebSharper&&WebSharper.JavaScript;
 JSModule=JavaScript&&JavaScript.JSModule;
 Json=WebSharper&&WebSharper.Json;
 JSON=window.JSON;
 Markup=IntelliFactory&&IntelliFactory.Markup;
 Markdown=Markup&&Markup.Markdown;
 Common=Markdown&&Markdown.Common;
 Client$3=Markdown&&Markdown.Client;
 UI$1=Markdown&&Markdown.UI;
 Next$1=UI$1&&UI$1.Next;
 OAuth2Client=IntelliFactory&&IntelliFactory.OAuth2Client;
 ClientSide=OAuth2Client&&OAuth2Client.ClientSide;
 UI$2=ClientSide&&ClientSide.UI;
 Forms=WebSharper&&WebSharper.Forms;
 Form=Forms&&Forms.Form;
 Pervasives=Forms&&Forms.Pervasives;
 User=Api&&Api.User;
 RegisterData=User&&User.RegisterData;
 Validation=Forms&&Forms.Validation;
 console=window.console;
 CodeMirror=WebSharper&&WebSharper.CodeMirror;
 FSharp=CodeMirror&&CodeMirror.FSharp;
 CodeMirror$1=window.CodeMirror;
 Helpers.Loading=function()
 {
  SC$1.$cctor();
  return SC$1.Loading;
 };
 Lazy.Map=function(f,l)
 {
  return Lazy$1.Create(function()
  {
   return f(l.f());
  });
 };
 Model.SetFPishTokenCustom=function(t,user)
 {
  window.allCookies.setItem("fpish_token",user.username+"|||"+t,new window.Date(Date.now()+24*60*60*1000),"/");
  Var.Set(Model.LoggedInUser(),{
   $:1,
   $0:[{
    Token:t,
    State:null
   },user]
  });
 };
 Model.SetFPishToken=function(t,user)
 {
  window.allCookies.setItem("fpish_token",user.username+"|||"+t.Token,new Date(Date.now()+24*60*60*1000),"/");
  Var.Set(Model.LoggedInUser(),{
   $:1,
   $0:[t,user]
  });
 };
 Model.LoggedInUser=function()
 {
  SC$1.$cctor();
  return SC$1.LoggedInUser;
 };
 Model.FPishClient=function()
 {
  SC$1.$cctor();
  return SC$1.FPishClient;
 };
 Model.TryGetCurrentFPishToken=function()
 {
  var cookie,i;
  cookie=window.allCookies.getItem("fpish_token");
  return cookie?(i=Strings.SplitStrings(cookie,["|||"],0),{
   $:1,
   $0:[{
    Token:Arrays.get(i,1),
    State:null
   },Arrays.get(i,0)]
  }):null;
 };
 Model.FPishCookie=function()
 {
  SC$1.$cctor();
  return SC$1.FPishCookie;
 };
 Model.IfAuthBaseUrl=function()
 {
  SC$1.$cctor();
  return SC$1.IfAuthBaseUrl;
 };
 SC$1.$cctor=Runtime.Cctor(function()
 {
  SC$1.Loading=Var.Create$1(false);
  SC$1.IfAuthBaseUrl="https://fpish.net";
  SC$1.FPishCookie="fpish_token";
  SC$1.FPishClient=new Client$2.New(Endpoint.ClientSide("https://fpish.net"));
  SC$1.LoggedInUser=Var.Create$1(null);
  SC$1.$cctor=window.ignore;
 });
 Route.Install=function(initAction,show,parse,hasher)
 {
  var _parse,_show,_var,o,x,shown;
  _parse=function(s)
  {
   return parse(List.ofArray(Arrays.map(function(a)
   {
    return window.decodeURIComponent(a);
   },Strings.SplitChars(Strings.TrimStart(Strings.Replace(s,"#","/"),[47]),[47],0))));
  };
  _show=function(x$1)
  {
   return"/"+Strings.concat("/",Seq.map(function(a)
   {
    return window.encodeURIComponent(a);
   },show(x$1)));
  };
  _var=Var.Create$1(initAction);
  try
  {
   o=_parse(Strings.Replace(window.location.hash,"#","")===""?window.location.pathname:window.location.hash);
   o==null?null:(x=o.$0,(Var.Set(_var,x),shown=_show(x),window.location.pathname!==shown?window.history.replaceState(x,"",shown):null));
  }
  catch(m)
  {
   null;
  }
  window.addEventListener("popstate",function()
  {
   var path,v,v$1;
   path=window.location.pathname;
   v=_parse(Strings.Replace(path==="/"?window.location.hash:path,"#","/"));
   return v==null?window.history.replaceState(_var.c,"",_show(_var.c)):(v$1=v.$0,!Unchecked.Equals(v$1,_var.c)?Var.Set(_var,v$1):null);
  },false);
  window.addEventListener("hashchange",function()
  {
   return Var.Set(_var,hasher(Strings.Replace(window.location.hash,"#",""),_var.c));
  },false);
  return Var.Lens(_var,window.id,function(a,x$1)
  {
   window.history.pushState(x$1,"",_show(x$1));
   return x$1;
  });
 };
 Kind=ClientEndPoint.Kind=Runtime.Class({
  toString:function()
  {
   return this.$==1?"docs":"tutorials";
  }
 },null,Kind);
 Kind.D=new Kind({
  $:1
 });
 Kind.T=new Kind({
  $:0
 });
 Kind.FromString=function(str)
 {
  return str==="tutorials"?Kind.T:str==="docs"?Kind.D:Operators.FailWith("404");
 };
 EP=ClientEndPoint.EP=Runtime.Class({
  GetPageUrl:function()
  {
   var x,o;
   return this.$==1?"/"+window.String(this.$0)+"/"+this.$1+"/"+this.$2+(x=(o=this.$3,o==null?null:{
    $:1,
    $0:"/"+o.$0
   }),x==null?"":x.$0):"";
  }
 },null,EP);
 EP.Extensions=new EP({
  $:5
 });
 EP.Videos=new EP({
  $:4
 });
 EP.Books=new EP({
  $:3
 });
 EP.Tutorials=new EP({
  $:2
 });
 EP.Docs=new EP({
  $:0
 });
 ClientEndPoint.Router=function()
 {
  SC$2.$cctor();
  return SC$2.Router;
 };
 SC$2.$cctor=Runtime.Cctor(function()
 {
  SC$2.Router=Route.Install(EP.Docs,function(a)
  {
   var t1,sect,pg,k;
   return a.$==1?(t1=a.$3,(sect=a.$1,(pg=a.$2,(k=a.$0,List.ofSeq(Seq.delay(function()
   {
    return Seq.append([window.String(k)],Seq.delay(function()
    {
     return Seq.append([sect],Seq.delay(function()
     {
      return Seq.append([pg],Seq.delay(function()
      {
       return t1==null?[]:[t1.$0];
      }));
     }));
    }));
   })))))):a.$==2?List.ofArray(["tutorials"]):a.$==3?List.ofArray(["books"]):a.$==4?List.ofArray(["videos"]):a.$==5?List.ofArray(["extensions"]):List.ofArray(["docs"]);
  },function(a)
  {
   var $1;
   switch(a.$==1?a.$0==="docs"?a.$1.$==1?a.$1.$1.$==1?a.$1.$1.$1.$==1?a.$1.$1.$1.$1.$==0?($1=[a.$0,a.$1.$0,a.$1.$1.$0,a.$1.$1.$1.$0],2):($1=a,7):($1=[a.$0,a.$1.$0,a.$1.$1.$0],1):($1=a,7):0:a.$0==="tutorials"?a.$1.$==0?3:a.$1.$1.$==1?a.$1.$1.$1.$==1?a.$1.$1.$1.$1.$==0?($1=[a.$0,a.$1.$0,a.$1.$1.$0,a.$1.$1.$1.$0],2):($1=a,7):($1=[a.$0,a.$1.$0,a.$1.$1.$0],1):($1=a,7):a.$0==="books"?a.$1.$==0?4:a.$1.$1.$==1?a.$1.$1.$1.$==1?a.$1.$1.$1.$1.$==0?($1=[a.$0,a.$1.$0,a.$1.$1.$0,a.$1.$1.$1.$0],2):($1=a,7):($1=[a.$0,a.$1.$0,a.$1.$1.$0],1):($1=a,7):a.$0==="videos"?a.$1.$==0?5:a.$1.$1.$==1?a.$1.$1.$1.$==1?a.$1.$1.$1.$1.$==0?($1=[a.$0,a.$1.$0,a.$1.$1.$0,a.$1.$1.$1.$0],2):($1=a,7):($1=[a.$0,a.$1.$0,a.$1.$1.$0],1):($1=a,7):a.$0==="extensions"?a.$1.$==0?6:a.$1.$1.$==1?a.$1.$1.$1.$==1?a.$1.$1.$1.$1.$==0?($1=[a.$0,a.$1.$0,a.$1.$1.$0,a.$1.$1.$1.$0],2):($1=a,7):($1=[a.$0,a.$1.$0,a.$1.$1.$0],1):($1=a,7):a.$1.$==1?a.$1.$1.$==1?a.$1.$1.$1.$==1?a.$1.$1.$1.$1.$==0?($1=[a.$0,a.$1.$0,a.$1.$1.$0,a.$1.$1.$1.$0],2):($1=a,7):($1=[a.$0,a.$1.$0,a.$1.$1.$0],1):($1=a,7):($1=a,7):0)
   {
    case 0:
     return{
      $:1,
      $0:EP.Docs
     };
     break;
    case 1:
     return{
      $:1,
      $0:new EP({
       $:1,
       $0:Kind.FromString($1[0]),
       $1:$1[1],
       $2:$1[2],
       $3:null
      })
     };
     break;
    case 2:
     return{
      $:1,
      $0:new EP({
       $:1,
       $0:Kind.FromString($1[0]),
       $1:$1[1],
       $2:$1[2],
       $3:{
        $:1,
        $0:$1[3]
       }
      })
     };
     break;
    case 3:
     return{
      $:1,
      $0:EP.Tutorials
     };
     break;
    case 4:
     return{
      $:1,
      $0:EP.Books
     };
     break;
    case 5:
     return{
      $:1,
      $0:EP.Videos
     };
     break;
    case 6:
     return{
      $:1,
      $0:EP.Extensions
     };
     break;
    case 7:
     return null;
     break;
   }
  },function($1,$2)
  {
   return $2.$==1?new EP({
    $:1,
    $0:$2.$0,
    $1:$2.$1,
    $2:$2.$2,
    $3:$1===""?null:{
     $:1,
     $0:$1
    }
   }):$2;
  });
  SC$2.$cctor=window.ignore;
 });
 ConfigurationPageType.Render={
  $:2
 };
 ConfigurationPageType.Html={
  $:1
 };
 ConfigurationPage=SectionsAndPages.ConfigurationPage=Runtime.Class({
  get_SourceIsHtml:function()
  {
   return this.Type.$==1||Strings.EndsWith(this.Source.toLowerCase(),".html");
  },
  get_SourceIsMarkdown:function()
  {
   return this.Type.$==0||Strings.EndsWith(this.Source.toLowerCase(),".md");
  }
 },null,ConfigurationPage);
 ConfigurationPage.New=function(Key,Title,Source,Commenting,Description,Type,SectionTitle,Language,TryWsUrl,GhUrl)
 {
  return new ConfigurationPage({
   Key:Key,
   Title:Title,
   Source:Source,
   Commenting:Commenting,
   Description:Description,
   Type:Type,
   SectionTitle:SectionTitle,
   Language:Language,
   TryWsUrl:TryWsUrl,
   GhUrl:GhUrl
  });
 };
 ConfigurationSection.New=function(Title,Pages)
 {
  return{
   Title:Title,
   Pages:Pages
  };
 };
 Configuration.New=function(Sections,RootPageTitle,HomePage)
 {
  return{
   Sections:Sections,
   RootPageTitle:RootPageTitle,
   HomePage:HomePage
  };
 };
 Page.FromConfig=function(cfg,cp,go,t,redirects,red,tff)
 {
  var sect,pg,afterContentRender,hasHeader,page;
  sect=Client.urlify(cfg.SectionTitle);
  pg=Client.urlify(cfg.Title);
  afterContentRender=[function(v)
  {
  }];
  hasHeader=cfg.GhUrl!=null||cfg.TryWsUrl!=null;
  page=Lazy$1.Create(function()
  {
   return Client.getPage(t,cfg.Source,cfg.Type,cfg.Language,sect,pg,cp,afterContentRender,redirects,go,hasHeader,red,tff);
  });
  return Page.New(Var.Create$1(false),cfg.Title,pg,Lazy.Map(function(t$1)
  {
   return t$1[1];
  },page),Lazy.Map(function(t$1)
  {
   return t$1[0];
  },page),afterContentRender,cfg.GhUrl,cfg.TryWsUrl);
 };
 Page.New=function(Open,Title,UrlPart,Toc,Content,AfterContentRender,GhUrl,TryWsUrl)
 {
  return{
   Open:Open,
   Title:Title,
   UrlPart:UrlPart,
   Toc:Toc,
   Content:Content,
   AfterContentRender:AfterContentRender,
   GhUrl:GhUrl,
   TryWsUrl:TryWsUrl
  };
 };
 Section.New$1=function(title,pages)
 {
  return Section.New(Var.Create$1(false),title,Client.urlify(title),pages);
 };
 Section.New=function(Open,Title,UrlPart,Pages)
 {
  return{
   Open:Open,
   Title:Title,
   UrlPart:UrlPart,
   Pages:Pages
  };
 };
 Client.page=function(sections,t)
 {
  var w,cw,openTree,closeTree,isMobileResView,isMobileRes,go,home,m,isActiveSection,isActivePage,extractPage,redirects,tryFindFor,redirectsBasedOnUri,model,pageExists,scrollToElement,jumpToHeading,renderPage,lastPage,headerCreator,searchQuery,matches;
  openTree=function()
  {
   var tree;
   tree=window.jQuery("#docs .tree");
   tree.get(0).getBoundingClientRect().width;
   tree.animate({
    left:0
   },400);
  };
  closeTree=function()
  {
   var tree,width;
   tree=window.jQuery("#docs .tree");
   width=tree.get(0).getBoundingClientRect().width;
   tree.animate({
    left:(function($1)
    {
     return function($2)
     {
      return $1($2.toFixed(6)+"px");
     };
    }(window.id))(-width)
   },400);
  };
  isMobileResView=View.Map(function(x)
  {
   return x<=992;
  },(w=function()
  {
   return window.document.body.clientWidth<<0;
  },(cw=Var.Create$1(w()),(window.addEventListener("resize",function()
  {
   return Var.Set(cw,w());
  },false),cw.v))));
  isMobileRes=function()
  {
   return window.document.body.clientWidth<<0<=992;
  };
  go=function(pg)
  {
   ClientEndPoint.Router().set_RVal(pg);
  };
  home=sections.length==0?null:(m=Arrays.get(sections,0).Pages,m.$==1?{
   $:1,
   $0:[Client.urlify(Arrays.get(sections,0).Title),Client.urlify(m.$0.Title)]
  }:null);
  isActiveSection=function(page,sect)
  {
   return page.$==0?home!=null&&home.$==1&&home.$0[0]===sect:page.$==2?home!=null&&home.$==1&&home.$0[0]===sect:page.$==1&&page.$1===sect;
  };
  isActivePage=function(page,sect,pg)
  {
   return page.$==0?home!=null&&home.$==1&&(sect===home.$0[0]&&pg===home.$0[1]):page.$==2?home!=null&&home.$==1&&(sect===home.$0[0]&&pg===home.$0[1]):page.$==1&&(sect===page.$1&&pg===page.$2);
  };
  extractPage=function(p)
  {
   var $1;
   switch(p.$==0?home!=null&&home.$==1?0:3:p.$==2?home!=null&&home.$==1?1:3:p.$==1?2:3)
   {
    case 0:
     return[home.$0[0],home.$0[1],null];
     break;
    case 1:
     return[home.$0[0],home.$0[1],null];
     break;
    case 2:
     return[p.$1,p.$2,p.$3];
     break;
    case 3:
     return["","",null];
     break;
   }
  };
  redirects=Map.OfArray(Arrays.ofSeq(Seq.delay(function()
  {
   return Seq.collect(function(s)
   {
    return Seq.collect(function(p)
    {
     var a;
     a=new EP({
      $:1,
      $0:t,
      $1:Client.urlify(s.Title),
      $2:Client.urlify(p.Title),
      $3:null
     });
     return Seq.append([[p.Key,a]],Seq.delay(function()
     {
      return[[p.Source.substring(p.Source.lastIndexOf(String.fromCharCode(47))+1),a]];
     }));
    },s.Pages);
   },sections);
  })));
  tryFindFor=function(str,currSection,currentPage)
  {
   var currPage,f,g,o;
   currPage=Arrays.tryFind((f=function(x)
   {
    return Client.urlify(x.Title)!==currSection?null:Seq.tryFind(function(p)
    {
     return Client.urlify(p.Title)===currentPage;
    },x.Pages);
   },(g=function(o$1)
   {
    return o$1!=null;
   },function(x)
   {
    return g(f(x));
   })),sections);
   return currPage!=null&&currPage.$==1?(o=Seq.tryFind(function(o$1)
   {
    return o$1!=null;
   },Seq.delay(function()
   {
    return Seq.collect(function(s)
    {
     return Seq.map(function(p)
     {
      return Strings.Substring(p.Source,p.Source.length-str.length,str.length)===str&&Client.urlify(s.Title)===currSection?{
       $:1,
       $0:new EP({
        $:1,
        $0:t,
        $1:Client.urlify(s.Title),
        $2:Client.urlify(p.Title),
        $3:null
       })
      }:null;
     },s.Pages);
    },sections);
   })),o==null?null:o.$0):null;
  };
  redirectsBasedOnUri=Map.OfArray(Arrays.ofSeq(Seq.delay(function()
  {
   return Seq.collect(function(s)
   {
    return Seq.collect(function(p)
    {
     var a;
     a=new EP({
      $:1,
      $0:t,
      $1:Client.urlify(s.Title),
      $2:Client.urlify(p.Title),
      $3:null
     });
     return[[Strings.Replace(p.Source,"raw.githubusercontent","github"),a]];
    },s.Pages);
   },sections);
  })));
  model=Arrays.map(function(s)
  {
   return Section.New$1(s.Title,List.map(function(cp)
   {
    return Page.FromConfig(cp,View.Map(extractPage,ClientEndPoint.Router().RView()),go,t,redirects,redirectsBasedOnUri,tryFindFor);
   },s.Pages));
  },sections);
  pageExists=function(sect,pg)
  {
   var m$1;
   m$1=Arrays.tryFind(function(x)
   {
    return x.UrlPart===sect;
   },model);
   return m$1!=null&&m$1.$==1&&List.exists(function(x)
   {
    return x.UrlPart===pg;
   },m$1.$0.Pages);
  };
  scrollToElement=function(elem)
  {
   if(elem.length>0)
    window.jQuery("#docs .content.nano").nanoScroller({
     scrollTo:elem,
     animateDuration:200
    });
  };
  jumpToHeading=function(heading,root)
  {
   var heading$1;
   return scrollToElement(heading!=null&&heading.$==1?(heading$1=heading.$0,window.jQuery(root).find((((Runtime.Curried3(function($1,$2,$3)
   {
    return $1("#"+PrintfHelpers.toSafe($2)+",a[name='"+PrintfHelpers.toSafe($3)+"']");
   }))(window.id))(heading$1))(heading$1))):window.jQuery("empty"));
  };
  renderPage=(lastPage=[null],(headerCreator=function(p)
  {
   var t$1,t$2;
   return p.GhUrl==null&&p.TryWsUrl==null?Doc.Empty():ForDevelopers_Templates.docheader((t$1=(t$2=new List.T({
    $:1,
    $0:{
     $:1,
     $0:"gh-ticket",
     $1:p.Title
    },
    $1:List.T.Empty
   }),new List.T({
    $:1,
    $0:{
     $:3,
     $0:"ghlink",
     $1:AttrProxy.Concat(List.ofArray([AttrModule.Class(p.GhUrl==null?"hidden":""),AttrProxy.Create("href",p.GhUrl!=null?p.GhUrl.$0:""),AttrProxy.Create("target","_blank")]))
    },
    $1:t$2
   })),new List.T({
    $:1,
    $0:{
     $:3,
     $0:"trywslink",
     $1:AttrProxy.Concat(List.ofArray([AttrModule.Class(p.TryWsUrl==null?"hidden":""),AttrProxy.Create("href",p.TryWsUrl!=null?p.TryWsUrl.$0:""),AttrProxy.Create("target","_blank")]))
    },
    $1:t$1
   })));
  },Runtime.Curried3(function(sect,pg,heading)
  {
   var m$1,$1,root,s,page,elt;
   m$1=lastPage[0];
   return m$1!=null&&m$1.$==1&&(m$1.$0[0]===sect&&m$1.$0[1]===pg&&($1=[m$1.$0[1],m$1.$0[0],m$1.$0[2]],true))?(root=$1[2],(jumpToHeading(heading,root.elt),root)):(s=Arrays.find(function(s$1)
   {
    return s$1.UrlPart===sect;
   },model),(page=Seq.find(function(x)
   {
    return x.UrlPart===pg;
   },s.Pages),(Var.Set(s.Open,true),Var.Set(page.Open,true),elt=page.Content.c?Doc.Element("div",[AttrModule.OnAfterRender(function($2)
   {
    return jumpToHeading(heading,$2);
   })],[page.Content.f()]):(page.AfterContentRender[0]=function($2)
   {
    return jumpToHeading(heading,$2);
   },Doc.Element("div",[],[page.Content.f()])),lastPage[0]={
    $:1,
    $0:[sect,pg,elt]
   },Doc.Concat(List.ofArray([headerCreator(page),elt])))));
  })));
  searchQuery=Var.Create$1("");
  matches=function(title,query)
  {
   var m$1;
   m$1=Strings.Trim(query);
   return m$1===""||title.toLowerCase().indexOf(m$1.toLowerCase())!=-1;
  };
  return Doc.Element("div",[AttrProxy.Create("id","docs"),AttrProxy.Create("class","container-wide block-buzz row"),AttrModule.OnAfterRender(function(el)
  {
   window.jQuery(el).find(".nano").nanoScroller();
  })],[Doc.Element("div",List.ofSeq(Seq.delay(function()
  {
   return Seq.append([AttrProxy.Create("class","col-md-3 tree nano")],Seq.delay(function()
   {
    return Seq.append(isMobileRes()?[AttrProxy.Create("style","visibility: hidden")]:[],Seq.delay(function()
    {
     return[AttrModule.OnAfterRender(function(el)
     {
      var tree,width;
      if(isMobileRes())
       {
        tree=window.jQuery(el);
        width=tree.get(0).getBoundingClientRect().width;
        tree.css("left",(function($1)
        {
         return function($2)
         {
          return $1($2.toFixed(6)+"px");
         };
        }(window.id))(-width)).css("visibility","visible");
        tree.addClass("mobile-scroller");
       }
     })];
    }));
   }));
  })),[Doc.Element("div",[AttrModule.Class("search-holder")],[Doc.Input([AttrProxy.Create("placeholder","Search..."),AttrProxy.Create("class","search-query")],searchQuery)]),Doc.Element("div",[AttrProxy.Create("class","nano-content")],[Client.renderWhen(isMobileResView,Doc.Element("i",[AttrModule.Class("fa fa-chevron-left close-toc"),AttrModule.Handler("click",function(el)
  {
   return function()
   {
    window.jQuery(el).parent(".tree").toggleClass("open-scroller");
    return closeTree();
   };
  })],[])),Doc.Element("ul",[],List.ofSeq(Seq.delay(function()
  {
   return Seq.append(Seq.map(function(section)
   {
    return Doc.BindView(function(q)
    {
     var pages,isOpen;
     pages=List.filter(function(p)
     {
      return matches(p.Title,q);
     },section.Pages);
     isOpen=View.Map(function(o)
     {
      return o||Strings.Trim(q)!=="";
     },section.Open.v);
     return pages.$==0?Doc.Empty():Doc.Element("li",List.ofSeq(Seq.delay(function()
     {
      return Seq.append([AttrModule.Class("section")],Seq.delay(function()
      {
       return Seq.append([AttrModule.DynamicClass("open",isOpen,window.id)],Seq.delay(function()
       {
        return Seq.append([AttrModule.DynamicClass("active",ClientEndPoint.Router().RView(),function(pg)
        {
         return isActiveSection(pg,section.UrlPart);
        })],Seq.delay(function()
        {
         return[AttrModule.Handler("click",function()
         {
          return function(ev)
          {
           var o;
           o=section.Open;
           Var.Set(o,!o.c);
           return ev.stopPropagation();
          };
         })];
        }));
       }));
      }));
     })),[Doc.Element("span",[],[Doc.TextNode(section.Title)]),Doc.Element("ul",[],List.ofSeq(Seq.delay(function()
     {
      return Seq.collect(function(page)
      {
       var isOpen$1;
       isOpen$1=View.Map(function(o)
       {
        return o||Strings.Trim(q)!=="";
       },page.Open.v);
       return[Doc.Element("li",List.ofSeq(Seq.delay(function()
       {
        return Seq.append([AttrModule.Class("page")],Seq.delay(function()
        {
         return Seq.append([AttrModule.DynamicClass("open",isOpen$1,window.id)],Seq.delay(function()
         {
          return Seq.append([AttrModule.DynamicClass("active",ClientEndPoint.Router().RView(),function(pg)
          {
           return isActivePage(pg,section.UrlPart,page.UrlPart);
          })],Seq.delay(function()
          {
           return[AttrModule.Handler("click",function()
           {
            return function(ev)
            {
             var o;
             o=page.Open;
             Var.Set(o,!o.c);
             return ev.stopPropagation();
            };
           })];
          }));
         }));
        }));
       })),[Doc.Link(page.Title,[AttrProxy.Create("href","#"+section.UrlPart+"/"+page.UrlPart)],function()
       {
        Var.Set(Helpers.Loading(),true);
        go(new EP({
         $:1,
         $0:t,
         $1:section.UrlPart,
         $2:page.UrlPart,
         $3:null
        }));
       }),Doc.BindView(function(o)
       {
        return o?page.Toc.f():Doc.Element("span",[AttrProxy.Create("style","display: none"),AttrModule.OnAfterRender(function(e)
        {
         Client.becomeNanoScroller(e);
        })],[]);
       },page.Open.v)])];
      },pages);
     })))]);
    },searchQuery.v);
   },model),Seq.delay(function()
   {
    return[Doc.Element("div",[AttrProxy.Create("style","height: 50px")],[])];
   }));
  })))])]),Doc.Element("div",[AttrProxy.Create("class","col-md-9 content nano")],[Doc.Element("div",[AttrProxy.Create("class","nano-content")],[Client.renderWhen(isMobileResView,Doc.Element("i",[AttrModule.Class("fa fa-chevron-right open-toc"),AttrModule.Handler("click",function()
  {
   return function()
   {
    return openTree();
   };
  })],[])),Doc.BindView(function(a)
  {
   var sect,pg;
   return a.$==0?home==null?Doc.Empty():((renderPage(home.$0[0]))(home.$0[1]))(null):a.$==2?home==null?Doc.Empty():((renderPage(home.$0[0]))(home.$0[1]))(null):a.$==1?(sect=a.$1,(pg=a.$2,pageExists(sect,pg)?((renderPage(sect))(pg))(a.$3):Doc.Element("div",[],[Doc.TextNode("404")]))):Doc.Element("div",[],[Doc.TextNode("404")]);
  },ClientEndPoint.Router().RView())])])]);
 };
 Client.renderWhen=function(cond,doc)
 {
  return Doc.BindView(function(a)
  {
   return a?doc:Doc.Empty();
  },cond);
 };
 Client.getPage=function(t,url,docType,lang,sect,pg,currentRoute,afterContentRender,redirects,go,hasHeader,red,tff)
 {
  var content,a,tocAndDoc;
  content=View.ConstAsync((a=function(ok,ko)
  {
   var r;
   $.ajax((r={},r.dataType="text",r.type="GET",r.success=function(data)
   {
    return ok(data);
   },r.error=function(a$1,a$2,err)
   {
    return ko(window.Error(err));
   },r.url=url,r));
  },Concurrency.FromContinuations(function($1,$2,$3)
  {
   return a.apply(null,[$1,$2,$3]);
  })));
  tocAndDoc=docType.$==2?View.Map(function(content$1)
  {
   return[Doc.Element("div",[AttrModule.OnAfterRender(function(el)
   {
    var meta;
    meta=$(el).find("#websharper-data");
    meta?$(el).ready(function()
    {
     var a$1;
     a$1=function(k,v)
     {
      v.Body().ReplaceInDom(window.document.getElementById(k));
     };
     return Arrays.iter(function($1)
     {
      return a$1($1[0],$1[1]);
     },JSModule.GetFields(Json.Activate(JSON.parse(meta.attr("content")))));
    }):void 0;
   })],[Doc.Verbatim(content$1)]),Doc.Element("div",[],[])];
  },content):docType.$==0?View.Map(function(content$1)
  {
   var p,strippedContent,m,htmlContent,htmlDom,internalLinks,externalOuterLink,externalLinks,externalLinksWithHash,htmlToc,url$1;
   p=(strippedContent=hasHeader?(m=content$1.match(new window.RegExp("^(\\s*)^[#]([^(\n|\r)])*")),Unchecked.Equals(void 0,m)||Unchecked.Equals(m,null)?content$1:m.length>0?Arrays.get(m,0)===Strings.Substring(content$1,0,Arrays.get(m,0).length)?content$1.substring(Arrays.get(m,0).length):content$1:content$1):content$1,Common.GetTableOfContentsWithTitle(Client$3.Parse(Client.docRoot(url),strippedContent),""));
   htmlContent=Doc.Element("div",[],[Next$1.ToDoc(lang!=null&&lang.$==1?lang.$0:url.toLowerCase().indexOf("-csharp")!=-1?"csharp":"fsharp",p[1])]);
   htmlDom=$(htmlContent.elt);
   internalLinks=htmlDom.find("a[href^='#']");
   externalOuterLink=htmlDom.find("a[href$='.md']").filter("a[href*='http']");
   externalLinks=htmlDom.find("a[href$='.md']").filter(":not(a[href*='http'])");
   externalLinksWithHash=htmlDom.find("a[href*='.md#']").filter(":not(a[href*='http'])");
   internalLinks.attr("href",function($1,$2)
   {
    return"#"+$2.substring(1);
   }).removeAttr("target");
   externalOuterLink.each(function($1,eltp)
   {
    var oldurl,url$2;
    oldurl=$(eltp).attr("href");
    url$2=Strings.Replace(oldurl,"/blob","");
    $(eltp).removeAttr("href").click(function(ev)
    {
     var m$1;
     m$1=red.TryFind(url$2);
     return m$1!=null&&m$1.$==1?(ev.preventDefault(),ev.stopPropagation(),Var.Set(Helpers.Loading(),true),go(m$1.$0)):window.location.replace(oldurl);
    });
   });
   externalLinks.each(function($1,eltp)
   {
    var url$2;
    url$2=$(eltp).attr("href");
    $(eltp).removeAttr("href").click(function(ev)
    {
     var m$1,m$2;
     m$1=redirects.TryFind(url$2);
     return m$1!=null&&m$1.$==1?(ev.preventDefault(),ev.stopPropagation(),Var.Set(Helpers.Loading(),true),go(m$1.$0)):(m$2=tff(url$2,sect,pg),m$2==null?window.location.replace(url$2):(ev.preventDefault(),ev.stopPropagation(),Var.Set(Helpers.Loading(),true),go(m$2.$0)));
    });
   });
   externalLinksWithHash.each(function($1,eltp)
   {
    var url$2;
    url$2=$(eltp).attr("href");
    $(eltp).removeAttr("href").click(function(ev)
    {
     var p$1,k,url$3,m$1,a$1;
     p$1=(k=Strings.SplitChars(url$2,[35],0),[Arrays.get(k,0),Arrays.get(k,1)]);
     url$3=p$1[0];
     m$1=redirects.TryFind(url$3);
     return m$1!=null&&m$1.$==1?(a$1=m$1.$0,(ev.preventDefault(),ev.stopPropagation(),Var.Set(Helpers.Loading(),true),a$1.$==1?go(new EP({
      $:1,
      $0:a$1.$0,
      $1:a$1.$1,
      $2:a$1.$2,
      $3:{
       $:1,
       $0:p$1[1]
      }
     })):go(a$1))):window.location.replace(url$3);
    });
   });
   htmlToc=Doc.Element("div",[],[Next$1.ToDoc("fsharp",p[0])]);
   url$1=function(jqo)
   {
    var url$2;
    url$2=jqo.prop("href");
    return url$2.substring(url$2.lastIndexOf(String.fromCharCode(47))+1);
   };
   $(htmlToc.elt).find("a").each(function(a$1,el)
   {
    var e;
    e=$(el);
    return e.attr("id",url$1(e));
   }).attr("href",function($1,a$1)
   {
    return a$1.substring(a$1.lastIndexOf(String.fromCharCode(35))+1);
   }).click(function(ev)
   {
    var lastPart;
    lastPart=url$1($(this));
    ev.preventDefault();
    ev.stopPropagation();
    return go(new EP({
     $:1,
     $0:t,
     $1:sect,
     $2:pg,
     $3:{
      $:1,
      $0:lastPart
     }
    }));
   });
   $(htmlToc.elt).find("#table-of-contents").removeAttr("id").addClass("table-of-contents");
   return[Doc.Element("div",[AttrProxy.Create("class","md-rendered"),AttrModule.OnAfterRender(function(el)
   {
    Client.becomeNanoScroller(el);
    afterContentRender[0](el);
   })],[htmlContent]),Doc.Element("div",[AttrModule.OnAfterRender(function(el)
   {
    Client.becomeNanoScroller(el);
   }),AttrModule.DynamicCustom(function(el)
   {
    return function(t$1)
    {
     var h,root,$1;
     h=t$1[2];
     root=$("#docs .tree");
     return h!=null&&h.$==1&&(t$1[0]===sect&&t$1[1]===pg&&($1=h.$0,true))?Client.setActiveTocElem(root,$(el).find("#"+$1).parent("li")):h==null?Client.removeActiveElems(root):null;
    };
   },currentRoute)],[htmlToc])];
  },content):View.Const([Doc.Element("span",[],[]),Doc.Element("span",[],[])]);
  return[Doc.EmbedView(View.Map(function(t$1)
  {
   return t$1[0];
  },tocAndDoc)),Doc.EmbedView(View.Map(function(t$1)
  {
   return t$1[1];
  },tocAndDoc))];
 };
 Client.becomeNanoScroller=function(el)
 {
  $(el).parents(".nano").first().nanoScroller();
 };
 Client.setActiveTocElem=function(root,el)
 {
  Client.removeActiveElems(root);
  el.addClass("active");
 };
 Client.removeActiveElems=function(root)
 {
  root.find(".table-of-contents .active").removeClass("active");
 };
 Client.urlify=function(urlPart)
 {
  return Strings.Replace(Strings.Replace(urlPart.toLowerCase()," ","_"),"#","-sharp");
 };
 Client.docRoot=function(uri)
 {
  return Strings.StartsWith(uri,"http://")||Strings.StartsWith(uri,"https://")?Strings.Substring(uri,0,uri.lastIndexOf("/")+1):"";
 };
 Client$1.Loader=function()
 {
  return Doc.BindView(function(loading)
  {
   return ForDevelopers_Templates.loadertemplate(new List.T({
    $:1,
    $0:{
     $:1,
     $0:"ishidden",
     $1:loading?"":"hidden"
    },
    $1:List.T.Empty
   })).OnAfterRender(function()
   {
    window.componentHandler.upgradeDom();
   });
  },Helpers.Loading().v);
 };
 Client$1.LoginButton=function(authurl)
 {
  var container,a,panel;
  container=(a=List.ofArray([AttrModule.Class("login-dropdown dropdown")]),function(c)
  {
   return Doc.Element("div",a,c);
  });
  panel=Doc.Element("div",[AttrProxy.Create("id","fpish-panel"),AttrModule.OnAfterRender(function()
  {
   $(".dropdown-menu").click(function(ev)
   {
    return ev.stopPropagation();
   });
  })],[Doc.EmbedView(Client$1.LoginFrame(authurl))]);
  return container(List.ofArray([Doc.Element("button",[AttrModule.Class("mdl-button mdl-js-button about-button mdl-button--icon mdl-js-ripple-effect"),AttrProxy.Create("data-"+"toggle","dropdown"),AttrModule.Style("aria-haspopup","true"),AttrModule.Style("aria-expanded","false")],[Doc.Element("span",[AttrModule.Class("material-icons")],[Doc.TextNode("person")])]),Doc.Element("div",[AttrModule.Class("dropdown-menu")],[panel])]));
 };
 Client$1.LoginFrame=function(authurl)
 {
  var logout;
  logout=function()
  {
   var b;
   Concurrency.Start((b=null,Concurrency.Delay(function()
   {
    var backlink;
    backlink=window.location.protocol+"//"+window.location.host;
    return Concurrency.Bind(UI$2.IFrameAuthenticate2(Strings.Replace("https://fpish.net","https","http")+"/logout"+"?backlink="+backlink+"/logout-cleanup"),function(a)
    {
     var f;
     f=Doc.Element("div",[AttrProxy.Create("style","position: absolute; left: 100vw"),AttrProxy.Create("id","logout-frame")],[a[0]]);
     $(f.elt).appendTo("#pageBody");
     return Concurrency.Bind(a[1](),function()
     {
      $(f.elt).remove();
      window.allCookies.setItem("fpish_token","",new Date(Date.now()+-1*1000),"/");
      Var.Set(Model.LoggedInUser(),null);
      window.location.reload();
      return Concurrency.Zero();
     });
    });
   })),null);
  };
  return View.Map(function(u)
  {
   var container,a,d,b;
   return u!=null&&u.$==1?Doc.Element("div",[],[Doc.TextNode("Logged in as "),Doc.Element("b",[],[Doc.TextNode(u.$0[1].username)]),Doc.TextNode(". "),Doc.Element("a",[AttrModule.Class("pointed-cursor"),AttrModule.Handler("click",function(el)
   {
    return function()
    {
     var x;
     x=Doc.Element("div",[AttrModule.Class("mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active custom-spinner")],[]);
     logout();
     $(el).replaceWith(x.elt);
     return window.componentHandler.upgradeDom();
    };
   })],[Doc.TextNode("Log out")])]):(container=(a=List.ofArray([AttrProxy.Create("id","fpish-login-frame-container")]),function(c)
   {
    return Doc.Element("span",a,c);
   }),(d=Var.Create$1(Doc.Element("div",[],[])),(Concurrency.Start((b=null,Concurrency.Delay(function()
   {
    return Concurrency.Bind(UI$2.IFrameAuthenticate(authurl),function(a$1)
    {
     Var.Set(d,container(List.ofArray([a$1[0]])));
     return Concurrency.Bind(a$1[1],function(a$2)
     {
      return Concurrency.Bind(Model.FPishClient().GetUserData(a$2),function(a$3)
      {
       Model.SetFPishToken(a$2,a$3);
       return Concurrency.Zero();
      });
     });
    });
   })),null),Doc.BindView(window.id,d.v))));
  },Model.LoggedInUser().v);
 };
 Client$1.RegistrationForm=function()
 {
  var r;
  r=function(username,email,password,firstname,lastname,submitter)
  {
   return Doc.Element("div",[],[Doc.Input([],username),Doc.Input([],email),Doc.Input([],password),Doc.Input([],firstname),Doc.Input([],lastname),Doc.Button("Register",[],function()
   {
    submitter.Trigger();
   })]);
  };
  return Form.Render(Runtime.Curried(r,6),Form.Run(function(d)
  {
   var b;
   Concurrency.Start((b=null,Concurrency.Delay(function()
   {
    return Concurrency.Bind(Model.FPishClient().RegisterUser(d),function()
    {
     return Concurrency.Zero();
    });
   })),null);
  },Form.WithSubmit(Pervasives.op_LessMultiplyGreater(Pervasives.op_LessMultiplyGreater(Pervasives.op_LessMultiplyGreater(Pervasives.op_LessMultiplyGreater(Pervasives.op_LessMultiplyGreater(Form.Return(Runtime.Curried(RegisterData.New,5)),Validation.IsNotEmpty("The username must not be empty",Form.Yield(""))),Validation.IsNotEmpty("The email must not be empty",Form.Yield(""))),Validation.IsNotEmpty("The password must not be empty",Form.Yield(""))),Validation.IsNotEmpty("The first name must not be empty",Form.Yield(""))),Validation.IsNotEmpty("The last name must not be empty",Form.Yield(""))))));
 };
 Client$1.frame=function()
 {
  SC$3.$cctor();
  return SC$3.frame;
 };
 Client$1.Submenubar=function()
 {
  return Doc.BindView(function(ep)
  {
   var navigateTo,rvName,t,f,f$1,$1,t$1,f$2,$2,t$2,f$3,$3,t$3,f$4,$4,t$4,f$5,$5,view,T;
   function active(e)
   {
    return Unchecked.Equals(ep,e)?"active link":"link";
   }
   navigateTo=function(ep$1)
   {
    Var.Set(Helpers.Loading(),true);
    return ClientEndPoint.Router().RSet(ep$1);
   };
   rvName=Var.Create$1("MyProject");
   return ForDevelopers_Templates.submenu((T=function(el,ev)
   {
    var target;
    target=ev.target;
    return el===target?window.innerWidth>=768?$(el).toggleClass("vis-dl"):null:window.$(target).parent(".secondary-navbar__list-item.navigation__dropdown").length>0?Unchecked.Equals(window.$(target).parent(".secondary-navbar__list-item.navigation__dropdown").get(0),el)?window.$(target).hasClass("columns row")?null:window.innerWidth>=768?$(el).toggleClass("vis-dl"):null:null:window.$(target).closest(".secondary-navbar__list-item.navigation__dropdown").length>0?null:$(el).removeClass("vis-dl");
   },new List.T({
    $:1,
    $0:{
     $:4,
     $0:"toggledd",
     $1:function($6)
     {
      return function($7)
      {
       return T($6,$7);
      };
     }
    },
    $1:(t=new List.T({
     $:1,
     $0:{
      $:4,
      $0:"download",
      $1:(f=function()
      {
       View.Get(function(name)
       {
        var urlpath;
        if((new window.RegExp("^([a-zA-Z0-9])(([a-zA-Z0-9]|[.])*)$","gi")).test(name))
         {
          urlpath="/template/"+String($("#plainSelect select").val())+"/"+name;
          console.log(window.location.origin+urlpath);
          window.open(window.location.origin+urlpath);
          console.log("Donwloading tempalte...");
         }
        else
         window.alert("Invalid name");
       },rvName.v);
      },function()
      {
       return function()
       {
        return f();
       };
      })
     },
     $1:new List.T({
      $:1,
      $0:{
       $:6,
       $0:"applicationname",
       $1:rvName
      },
      $1:new List.T({
       $:1,
       $0:{
        $:4,
        $0:"tobooks",
        $1:(f$1=($1=EP.Books,function($6)
        {
         return navigateTo($1,$6);
        }),function()
        {
         return function()
         {
          return f$1();
         };
        })
       },
       $1:(t$1=new List.T({
        $:1,
        $0:{
         $:4,
         $0:"tovideos",
         $1:(f$2=($2=EP.Videos,function($6)
         {
          return navigateTo($2,$6);
         }),function()
         {
          return function()
          {
           return f$2();
          };
         })
        },
        $1:(t$2=new List.T({
         $:1,
         $0:{
          $:4,
          $0:"toextensions",
          $1:(f$3=($3=EP.Extensions,function($6)
          {
           return navigateTo($3,$6);
          }),function()
          {
           return function()
           {
            return f$3();
           };
          })
         },
         $1:(t$3=new List.T({
          $:1,
          $0:{
           $:4,
           $0:"totutorials",
           $1:(f$4=($4=EP.Tutorials,function($6)
           {
            return navigateTo($4,$6);
           }),function()
           {
            return function()
            {
             return f$4();
            };
           })
          },
          $1:(t$4=new List.T({
           $:1,
           $0:{
            $:4,
            $0:"todocumentation",
            $1:(f$5=($5=EP.Docs,function($6)
            {
             return navigateTo($5,$6);
            }),function()
            {
             return function()
             {
              return f$5();
             };
            })
           },
           $1:new List.T({
            $:1,
            $0:{
             $:1,
             $0:"documentationclass",
             $1:ep.$==0?"active link":ep.$==1?Unchecked.Equals(ep.$0,Kind.D)?"active link":"link":"link"
            },
            $1:List.T.Empty
           })
          }),new List.T({
           $:1,
           $0:{
            $:1,
            $0:"tutorialsclass",
            $1:ep.$==2?"active link":ep.$==1?Unchecked.Equals(ep.$0,Kind.T)?"active link":"link":"link"
           },
           $1:t$4
          }))
         }),new List.T({
          $:1,
          $0:{
           $:1,
           $0:"extensionsclass",
           $1:active(EP.Extensions)
          },
          $1:t$3
         }))
        }),new List.T({
         $:1,
         $0:{
          $:1,
          $0:"videosclass",
          $1:active(EP.Videos)
         },
         $1:t$2
        }))
       }),new List.T({
        $:1,
        $0:{
         $:1,
         $0:"booksclass",
         $1:active(EP.Books)
        },
        $1:t$1
       }))
      })
     })
    }),new List.T({
     $:1,
     $0:{
      $:3,
      $0:"dlattr",
      $1:AttrProxy.Concat(List.ofArray([(view=View.Const("disabled"),AttrModule.DynamicPred("disabled",View.Map(function(x)
      {
       var testres;
       testres=x.match(new window.RegExp("^([a-zA-Z0-9])(([a-zA-Z0-9]|[.]|[']|[+]|[-]|[@])*)$","gi"));
       return Unchecked.Equals(testres,null)||(testres.length===1?Arrays.get(testres,0)!==x:true);
      },rvName.v),view))]))
     },
     $1:t
    }))
   }))).OnAfterRender(function()
   {
    $("body").click(function(ev)
    {
     return ev.target.parentElement.id==="dl-drop"?null:$(ev.target).closest("#dl-drop").length>0?null:$("#dl-drop").get(0)===$(ev.target).get(0)||$("#dl-drop").has(ev.target.parentNode).length>0?null:$("#dl-drop").removeClass("vis-dl");
    });
   });
  },ClientEndPoint.Router().RView());
 };
 Client$1.InnerLinks=function()
 {
  var navigateTo,f,$1,f$1,$2,f$2,$3,f$3,$4,f$4,$5,C;
  navigateTo=function(ep)
  {
   Var.Set(Helpers.Loading(),true);
   return ClientEndPoint.Router().RSet(ep);
  };
  return ForDevelopers_Templates.innerlinks((C=function()
  {
   Doc.RunAfterById("pageBody",Client$1.Modal());
   return window.$("#md-help").modal("show");
  },new List.T({
   $:1,
   $0:{
    $:4,
    $0:"cp",
    $1:function($6)
    {
     return function($7)
     {
      return C($6,$7);
     };
    }
   },
   $1:new List.T({
    $:1,
    $0:{
     $:4,
     $0:"tobooks",
     $1:(f=($1=EP.Books,function($6)
     {
      return navigateTo($1,$6);
     }),function()
     {
      return function()
      {
       return f();
      };
     })
    },
    $1:new List.T({
     $:1,
     $0:{
      $:4,
      $0:"toext",
      $1:(f$1=($2=EP.Extensions,function($6)
      {
       return navigateTo($2,$6);
      }),function()
      {
       return function()
       {
        return f$1();
       };
      })
     },
     $1:new List.T({
      $:1,
      $0:{
       $:4,
       $0:"tovideos",
       $1:(f$2=($3=EP.Videos,function($6)
       {
        return navigateTo($3,$6);
       }),function()
       {
        return function()
        {
         return f$2();
        };
       })
      },
      $1:new List.T({
       $:1,
       $0:{
        $:4,
        $0:"totutorials",
        $1:(f$3=($4=EP.Tutorials,function($6)
        {
         return navigateTo($4,$6);
        }),function()
        {
         return function()
         {
          return f$3();
         };
        })
       },
       $1:new List.T({
        $:1,
        $0:{
         $:4,
         $0:"todocs",
         $1:(f$4=($5=EP.Docs,function($6)
         {
          return navigateTo($5,$6);
         }),function()
         {
          return function()
          {
           return f$4();
          };
         })
        },
        $1:List.T.Empty
       })
      })
     })
    })
   })
  })));
 };
 Client$1.Modal=function()
 {
  var rvName,t,f,view;
  rvName=Var.Create$1("MyProject");
  return ForDevelopers_Templates.mdhelp((t=new List.T({
   $:1,
   $0:{
    $:4,
    $0:"download",
    $1:(f=function()
    {
     View.Get(function(name)
     {
      var urlpath;
      if((new window.RegExp("^([a-zA-Z0-9])(([a-zA-Z0-9]|[.]|[']|[+]|[-]|[@])*)$","gi")).test(name))
       {
        urlpath="/template/"+String($("#mobileSelect select").val())+"/"+name;
        console.log(window.location.origin+urlpath);
        window.open(window.location.origin+urlpath);
        console.log("Donwloading tempalte...");
       }
      else
       window.alert("Invalid name");
     },rvName.v);
    },function()
    {
     return function()
     {
      return f();
     };
    })
   },
   $1:new List.T({
    $:1,
    $0:{
     $:6,
     $0:"applicationname",
     $1:rvName
    },
    $1:List.T.Empty
   })
  }),new List.T({
   $:1,
   $0:{
    $:3,
    $0:"dlattr",
    $1:AttrProxy.Concat(List.ofArray([(view=View.Const("disabled"),AttrModule.DynamicPred("disabled",View.Map(function(x)
    {
     var testres;
     testres=x.match(new window.RegExp("^([a-zA-Z0-9])(([a-zA-Z0-9]|[.]|[']|[+]|[-]|[@])*)$","gi"));
     console.log(testres);
     return Unchecked.Equals(testres,null)||(testres.length===1?Arrays.get(testres,0)!==x:true);
    },rvName.v),view))]))
   },
   $1:t
  }))).OnAfterRender(function()
  {
   var f$1;
   window.componentHandler.upgradeDom();
   f$1=function()
   {
    $("#md-help").remove();
   };
   window.$("#md-help").on("hidden.bs.modal",function()
   {
    f$1();
   });
  });
 };
 Client$1.Main=function(conf,tutorial,epo)
 {
  ClientEndPoint.Router().RSet(epo==null?EP.Docs:epo.$0);
  (FSharp.DefineFSharpMode())();
  CodeMirror$1.defineMIME("csharp",CodeMirror$1.mimeModes["text/x-csharp"]);
  return Doc.BindView(function(a)
  {
   var t;
   return a.$==1?(t=a.$0,t.$==0?Client.page(tutorial,t).OnAfterRender(function()
   {
    Var.Set(Helpers.Loading(),false);
   }):Client.page(conf,t).OnAfterRender(function()
   {
    Var.Set(Helpers.Loading(),false);
   })):a.$==2?Client.page(tutorial,Kind.T).OnAfterRender(function()
   {
    Var.Set(Helpers.Loading(),false);
   }):a.$==3?ForDevelopers_Templates.books(List.T.Empty).OnAfterRender(function()
   {
    Var.Set(Helpers.Loading(),false);
   }):a.$==4?ForDevelopers_Templates.videos(List.T.Empty).OnAfterRender(function()
   {
    Var.Set(Helpers.Loading(),false);
   }):a.$==5?ForDevelopers_Templates.extensions(List.T.Empty).OnAfterRender(function()
   {
    Var.Set(Helpers.Loading(),false);
   }):Client.page(conf,Kind.D).OnAfterRender(function()
   {
    Var.Set(Helpers.Loading(),false);
   });
  },ClientEndPoint.Router().RView());
 };
 Sites.New=function(Examples,MainSite,TryWsSite)
 {
  return{
   Examples:Examples,
   MainSite:MainSite,
   TryWsSite:TryWsSite
  };
 };
 SC$3.$cctor=Runtime.Cctor(function()
 {
  SC$3.frame=Var.Create$1(null);
  SC$3.$cctor=window.ignore;
 });
 ForDevelopers_Templates.docheader=function(h)
 {
  return h?Doc.GetOrLoadTemplate("docheader",{
   $:1,
   $0:"docheader"
  },function()
  {
   return $.parseHTML("<div class=\"mdl-card custom-card\">\r\n    <div class=\"mdl-card__title\">\r\n        <h2 class=\"mdl-card__title-text\">${Gh-ticket}</h2>\r\n    </div>\r\n    <div class=\"mdl-card__actions mdl-card--border\">\r\n        <a class=\"mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--colored\" ws-attr=\"TryWsLink\">\r\n            Try it live!\r\n        </a>\r\n        <a class=\"mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--colored\" ws-attr=\"GHLink\">\r\n            Source code\r\n        </a>\r\n    </div>\r\n</div>");
  },h):Doc.PrepareTemplate("docheader",{
   $:1,
   $0:"docheader"
  },function()
  {
   return $.parseHTML("<div class=\"mdl-card custom-card\">\r\n    <div class=\"mdl-card__title\">\r\n        <h2 class=\"mdl-card__title-text\">${Gh-ticket}</h2>\r\n    </div>\r\n    <div class=\"mdl-card__actions mdl-card--border\">\r\n        <a class=\"mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--colored\" ws-attr=\"TryWsLink\">\r\n            Try it live!\r\n        </a>\r\n        <a class=\"mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--colored\" ws-attr=\"GHLink\">\r\n            Source code\r\n        </a>\r\n    </div>\r\n</div>");
  });
 };
 ForDevelopers_Templates.loadertemplate=function(h)
 {
  return h?Doc.GetOrLoadTemplate("main",{
   $:1,
   $0:"loadertemplate"
  },function()
  {
   return $.parseHTML("<div id=\"loader\" class=\"mdl-progress mdl-js-progress mdl-progress__indeterminate ${IsHidden} pageloader\"></div>");
  },h):Doc.PrepareTemplate("main",{
   $:1,
   $0:"loadertemplate"
  },function()
  {
   return $.parseHTML("<div id=\"loader\" class=\"mdl-progress mdl-js-progress mdl-progress__indeterminate ${IsHidden} pageloader\"></div>");
  });
 };
 ForDevelopers_Templates.submenu=function(h)
 {
  return h?Doc.GetOrLoadTemplate("submenubar",{
   $:1,
   $0:"submenu"
  },function()
  {
   return $.parseHTML("<div class=\"secondary-navbar\">\r\n    <div class=\"secondary-navbar-inner\">\r\n        <div class=\"clearfix flex-nav\">\r\n            <ul class=\"secondary-navbar__list-items secondary-navbar__list-items--left clearfix\">\r\n                <li class=\"secondary-navbar__list-item navigation__dropdown ${DocumentationClass}\" ws-onclick=\"ToDocumentation\">\r\n                    <a class=\"mdl-js-button mdl-js-ripple-effect\">\r\n                        <span class=\"mdi mdi-file-document\"></span> Documentation\r\n                    </a>\r\n                </li>\r\n                <li class=\"secondary-navbar__list-item navigation__dropdown ${TutorialsClass}\" ws-onclick=\"ToTutorials\">\r\n                    <a class=\"mdl-js-button mdl-js-ripple-effect\">\r\n                        <span class=\"mdi mdi-school\"></span> Tutorials\r\n                    </a>\r\n                </li>\r\n                <li class=\"secondary-navbar__list-item navigation__dropdown ${VideosClass}\" ws-onclick=\"ToVideos\">\r\n                    <a class=\"mdl-js-button mdl-js-ripple-effect\">\r\n                        <span class=\"mdi mdi-video\"></span> Videos\r\n                    </a>\r\n                </li>\r\n                <li class=\"secondary-navbar__list-item navigation__dropdown ${ExtensionsClass}\" ws-onclick=\"ToExtensions\">\r\n                    <a class=\"mdl-js-button mdl-js-ripple-effect\">\r\n                        <span class=\"mdi mdi-airplay\"></span> Extensions\r\n                    </a>\r\n                </li>\r\n                <li class=\"secondary-navbar__list-item navigation__dropdown ${BooksClass}\" ws-onclick=\"ToBooks\">\r\n                    <a class=\"mdl-js-button mdl-js-ripple-effect\">\r\n                        <span class=\"mdi mdi-book-open-page-variant\"></span> Books\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n            <ul class=\"secondary-navbar__list-items secondary-navbar__list-items--right clearfix\">\r\n                <li id=\"dl-drop\" class=\"secondary-navbar__list-item navigation__dropdown navigation__dropdown--arrow\" ws-onclick=\"ToggleDD\">\r\n                    <a>\r\n                        Create a Project\r\n                    </a>\r\n                    <div class=\"columns row\">\r\n                        <div class=\"mdl-textfield mdl-js-textfield\">\r\n                            <input class=\"mdl-textfield__input\" type=\"text\" id=\"sample1\" ws-var=\"ApplicationName\">\r\n                            <label class=\"mdl-textfield__label\" for=\"sample1\">Application Name</label>\r\n                        </div>\r\n                        <div class=\"mdl-selectfield mdl-js-selectfield\" id=\"plainSelect\">\r\n                            <select id=\"myselect\" name=\"myselect\" class=\"mdl-selectfield__select\">\r\n                                <option value=\"clientserverfsharp\">Client-Server Application F#\r\n                                <option value=\"spafsharp\">Single Page Application F#\r\n                                <option value=\"extensionfsharp\">Extension F#\r\n                                <option value=\"libraryfsharp\">Library F#\r\n                                <option value=\"offlinefsharp\">HTML Application F#\r\n                                <option value=\"owinfsharp\">Owin F#\r\n                                <option value=\"clientserverfsharp\">Client-Server Application C#\r\n                                <option value=\"spacsharp\">Single Page Application C#\r\n                                <option value=\"librarycsharp\">Library C#\r\n                                <option value=\"offlinecsharp\">HTML Application C#\r\n                            </select>\r\n                            <label class=\"mdl-selectfield__label\" for=\"myselect\">Available templates</label>\r\n                        </div>\r\n                        <div class=\"mdl-selectfield mdl-js-selectfield\" id=\"plainIdeSelect\">\r\n                            <select id=\"myselect\" name=\"myselect\" class=\"mdl-selectfield__select\">\r\n                                <option value=\"vs2017\">Visual Studio 2017\r\n                            </select>\r\n                            <label class=\"mdl-selectfield__label\" for=\"myselect\">Your IDE</label>\r\n                        </div>\r\n                        <button class=\"mdl-button mdl-js-button mdl-button--raised mdl-button--colored dl-button\" ws-attr=\"DLAttr\" ws-onclick=\"Download\">\r\n                            Download\r\n                        </button>\r\n                    </div>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</div>");
  },h):Doc.PrepareTemplate("submenubar",{
   $:1,
   $0:"submenu"
  },function()
  {
   return $.parseHTML("<div class=\"secondary-navbar\">\r\n    <div class=\"secondary-navbar-inner\">\r\n        <div class=\"clearfix flex-nav\">\r\n            <ul class=\"secondary-navbar__list-items secondary-navbar__list-items--left clearfix\">\r\n                <li class=\"secondary-navbar__list-item navigation__dropdown ${DocumentationClass}\" ws-onclick=\"ToDocumentation\">\r\n                    <a class=\"mdl-js-button mdl-js-ripple-effect\">\r\n                        <span class=\"mdi mdi-file-document\"></span> Documentation\r\n                    </a>\r\n                </li>\r\n                <li class=\"secondary-navbar__list-item navigation__dropdown ${TutorialsClass}\" ws-onclick=\"ToTutorials\">\r\n                    <a class=\"mdl-js-button mdl-js-ripple-effect\">\r\n                        <span class=\"mdi mdi-school\"></span> Tutorials\r\n                    </a>\r\n                </li>\r\n                <li class=\"secondary-navbar__list-item navigation__dropdown ${VideosClass}\" ws-onclick=\"ToVideos\">\r\n                    <a class=\"mdl-js-button mdl-js-ripple-effect\">\r\n                        <span class=\"mdi mdi-video\"></span> Videos\r\n                    </a>\r\n                </li>\r\n                <li class=\"secondary-navbar__list-item navigation__dropdown ${ExtensionsClass}\" ws-onclick=\"ToExtensions\">\r\n                    <a class=\"mdl-js-button mdl-js-ripple-effect\">\r\n                        <span class=\"mdi mdi-airplay\"></span> Extensions\r\n                    </a>\r\n                </li>\r\n                <li class=\"secondary-navbar__list-item navigation__dropdown ${BooksClass}\" ws-onclick=\"ToBooks\">\r\n                    <a class=\"mdl-js-button mdl-js-ripple-effect\">\r\n                        <span class=\"mdi mdi-book-open-page-variant\"></span> Books\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n            <ul class=\"secondary-navbar__list-items secondary-navbar__list-items--right clearfix\">\r\n                <li id=\"dl-drop\" class=\"secondary-navbar__list-item navigation__dropdown navigation__dropdown--arrow\" ws-onclick=\"ToggleDD\">\r\n                    <a>\r\n                        Create a Project\r\n                    </a>\r\n                    <div class=\"columns row\">\r\n                        <div class=\"mdl-textfield mdl-js-textfield\">\r\n                            <input class=\"mdl-textfield__input\" type=\"text\" id=\"sample1\" ws-var=\"ApplicationName\">\r\n                            <label class=\"mdl-textfield__label\" for=\"sample1\">Application Name</label>\r\n                        </div>\r\n                        <div class=\"mdl-selectfield mdl-js-selectfield\" id=\"plainSelect\">\r\n                            <select id=\"myselect\" name=\"myselect\" class=\"mdl-selectfield__select\">\r\n                                <option value=\"clientserverfsharp\">Client-Server Application F#\r\n                                <option value=\"spafsharp\">Single Page Application F#\r\n                                <option value=\"extensionfsharp\">Extension F#\r\n                                <option value=\"libraryfsharp\">Library F#\r\n                                <option value=\"offlinefsharp\">HTML Application F#\r\n                                <option value=\"owinfsharp\">Owin F#\r\n                                <option value=\"clientserverfsharp\">Client-Server Application C#\r\n                                <option value=\"spacsharp\">Single Page Application C#\r\n                                <option value=\"librarycsharp\">Library C#\r\n                                <option value=\"offlinecsharp\">HTML Application C#\r\n                            </select>\r\n                            <label class=\"mdl-selectfield__label\" for=\"myselect\">Available templates</label>\r\n                        </div>\r\n                        <div class=\"mdl-selectfield mdl-js-selectfield\" id=\"plainIdeSelect\">\r\n                            <select id=\"myselect\" name=\"myselect\" class=\"mdl-selectfield__select\">\r\n                                <option value=\"vs2017\">Visual Studio 2017\r\n                            </select>\r\n                            <label class=\"mdl-selectfield__label\" for=\"myselect\">Your IDE</label>\r\n                        </div>\r\n                        <button class=\"mdl-button mdl-js-button mdl-button--raised mdl-button--colored dl-button\" ws-attr=\"DLAttr\" ws-onclick=\"Download\">\r\n                            Download\r\n                        </button>\r\n                    </div>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</div>");
  });
 };
 ForDevelopers_Templates.innerlinks=function(h)
 {
  return h?Doc.GetOrLoadTemplate("main",{
   $:1,
   $0:"innerlinks"
  },function()
  {
   return $.parseHTML("<div class=\"innerlinks\">\r\n                        <a class=\"mdl-navigation__link nav-menu-link\" ws-onclick=\"ToDocs\">Documentation</a>\r\n                        <a class=\"mdl-navigation__link nav-menu-link\" ws-onclick=\"ToTutorials\">Tutorials</a>\r\n                        <a class=\"mdl-navigation__link nav-menu-link\" ws-onclick=\"ToVideos\">Videos</a>\r\n                        <a class=\"mdl-navigation__link nav-menu-link\" ws-onclick=\"ToExt\">Extensions</a>\r\n                        <a class=\"mdl-navigation__link nav-menu-link\" ws-onclick=\"ToBooks\">Books</a>\r\n                        <a class=\"mdl-navigation__link nav-menu-link\" ws-onclick=\"CP\">Create a Project</a>\r\n                    </div>");
  },h):Doc.PrepareTemplate("main",{
   $:1,
   $0:"innerlinks"
  },function()
  {
   return $.parseHTML("<div class=\"innerlinks\">\r\n                        <a class=\"mdl-navigation__link nav-menu-link\" ws-onclick=\"ToDocs\">Documentation</a>\r\n                        <a class=\"mdl-navigation__link nav-menu-link\" ws-onclick=\"ToTutorials\">Tutorials</a>\r\n                        <a class=\"mdl-navigation__link nav-menu-link\" ws-onclick=\"ToVideos\">Videos</a>\r\n                        <a class=\"mdl-navigation__link nav-menu-link\" ws-onclick=\"ToExt\">Extensions</a>\r\n                        <a class=\"mdl-navigation__link nav-menu-link\" ws-onclick=\"ToBooks\">Books</a>\r\n                        <a class=\"mdl-navigation__link nav-menu-link\" ws-onclick=\"CP\">Create a Project</a>\r\n                    </div>");
  });
 };
 ForDevelopers_Templates.mdhelp=function(h)
 {
  return h?Doc.GetOrLoadTemplate("docheader",{
   $:1,
   $0:"mdhelp"
  },function()
  {
   return $.parseHTML("<div class=\"modal fade\" id=\"md-help\">\r\n    <div class=\"modal-dialog\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h4 class=\"modal-title\" id=\"md-help-label\">Create a project</h4>\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">x</button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <div class=\"mdl-textfield mdl-js-textfield\">\r\n                    <input class=\"mdl-textfield__input\" type=\"text\" id=\"sample1\" ws-var=\"ApplicationName\">\r\n                    <label class=\"mdl-textfield__label\" for=\"sample1\">Application Name</label>\r\n                </div>\r\n                <div class=\"mdl-selectfield mdl-js-selectfield\" id=\"mobileSelect\">\r\n                    <select id=\"myselect\" name=\"myselect\" class=\"mdl-selectfield__select\">\r\n                        <option value=\"clientserverfsharp\">Client-Server Application F#\r\n                        <option value=\"spafsharp\">Single Page Application F#\r\n                        <option value=\"extensionfsharp\">Extension F#\r\n                        <option value=\"libraryfsharp\">Library F#\r\n                        <option value=\"offlinefsharp\">HTML Application F#\r\n                        <option value=\"owinfsharp\">Owin F#\r\n                        <option value=\"clientserverfsharp\">Client-Server Application C#\r\n                        <option value=\"spacsharp\">Single Page Application C#\r\n                        <option value=\"librarycsharp\">Library C#\r\n                        <option value=\"offlinecsharp\">HTML Application C#\r\n                    </select>\r\n                    <label class=\"mdl-selectfield__label\" for=\"myselect\">Available templates</label>\r\n                </div>\r\n                <div class=\"mdl-selectfield mdl-js-selectfield\" id=\"modalIdeSelect\">\r\n                    <select id=\"myselect\" name=\"myselect\" class=\"mdl-selectfield__select\">\r\n                        <option value=\"vs2017\">Visual Studio 2017\r\n                    </select>\r\n                    <label class=\"mdl-selectfield__label\" for=\"myselect\">Your IDE</label>\r\n                </div>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button class=\"mdl-button mdl-js-button mdl-button--raised mdl-button--colored dl-button\" ws-attr=\"DLAttr\" ws-onclick=\"Download\">\r\n                    Download\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");
  },h):Doc.PrepareTemplate("docheader",{
   $:1,
   $0:"mdhelp"
  },function()
  {
   return $.parseHTML("<div class=\"modal fade\" id=\"md-help\">\r\n    <div class=\"modal-dialog\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h4 class=\"modal-title\" id=\"md-help-label\">Create a project</h4>\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">x</button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <div class=\"mdl-textfield mdl-js-textfield\">\r\n                    <input class=\"mdl-textfield__input\" type=\"text\" id=\"sample1\" ws-var=\"ApplicationName\">\r\n                    <label class=\"mdl-textfield__label\" for=\"sample1\">Application Name</label>\r\n                </div>\r\n                <div class=\"mdl-selectfield mdl-js-selectfield\" id=\"mobileSelect\">\r\n                    <select id=\"myselect\" name=\"myselect\" class=\"mdl-selectfield__select\">\r\n                        <option value=\"clientserverfsharp\">Client-Server Application F#\r\n                        <option value=\"spafsharp\">Single Page Application F#\r\n                        <option value=\"extensionfsharp\">Extension F#\r\n                        <option value=\"libraryfsharp\">Library F#\r\n                        <option value=\"offlinefsharp\">HTML Application F#\r\n                        <option value=\"owinfsharp\">Owin F#\r\n                        <option value=\"clientserverfsharp\">Client-Server Application C#\r\n                        <option value=\"spacsharp\">Single Page Application C#\r\n                        <option value=\"librarycsharp\">Library C#\r\n                        <option value=\"offlinecsharp\">HTML Application C#\r\n                    </select>\r\n                    <label class=\"mdl-selectfield__label\" for=\"myselect\">Available templates</label>\r\n                </div>\r\n                <div class=\"mdl-selectfield mdl-js-selectfield\" id=\"modalIdeSelect\">\r\n                    <select id=\"myselect\" name=\"myselect\" class=\"mdl-selectfield__select\">\r\n                        <option value=\"vs2017\">Visual Studio 2017\r\n                    </select>\r\n                    <label class=\"mdl-selectfield__label\" for=\"myselect\">Your IDE</label>\r\n                </div>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button class=\"mdl-button mdl-js-button mdl-button--raised mdl-button--colored dl-button\" ws-attr=\"DLAttr\" ws-onclick=\"Download\">\r\n                    Download\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");
  });
 };
 ForDevelopers_Templates.books=function(h)
 {
  return h?Doc.GetOrLoadTemplate("books",{
   $:1,
   $0:"books"
  },function()
  {
   return $.parseHTML("<div class=\"scrollable-content\">\r\n    <section class=\"block-large\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-xs-6 col-sm-3\">\r\n                    <img src=\"/img/FSharpBook-ExpertFSharp3-small.png\" style=\"width: 100%;\">\r\n                </div>\r\n                <div class=\"col-xs-6 col-sm-9\">\r\n                    <h2>Expert F# 3.0. <span class=\"muted\">Don Syme, Adam Granicz, Antonio Cisternino</span></h2>\r\n                    <p class=\"lead\">Everything you ever wanted to know about using F#, with nearly 80 pages of WebSharper content.</p>\r\n                    <a href=\"http://www.amazon.com/Expert-F-3-0-Don-Syme/dp/1430246502\" class=\"btn btn-large btn-info\">On Amazon.com</a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </section>\r\n\r\n    <section class=\"block-large bg-alt\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-xs-6 col-sm-3\">\r\n                    <img src=\"/img/FSharpBook-BuildingWebCloudAndMobileSolutions-small.png\" style=\"width: 100%;\">\r\n                </div>\r\n                <div class=\"col-xs-6 col-sm-9\">\r\n                    <h2>Building Web, Cloud &amp; Mobile Solutions with F#. <span class=\"muted\">Dan Mohl.</span></h2>\r\n                    <p class=\"lead\">\r\n                    <a href=\"http://www.amazon.com/Building-Web-Cloud-Mobile-Solutions/dp/1449333761\" class=\"btn btn-large btn-info\">On Amazon.com</a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </section>\r\n\r\n    <section class=\"block-large\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-xs-6 col-sm-3\">\r\n                    <img src=\"/img/FSharpBook-FSharpForCSharpDevelopers-small.png\" style=\"width: 100%;\">\r\n                </div>\r\n                <div class=\"col-xs-6 col-sm-9\">\r\n                    <h2>F# for C# Developers. <span class=\"muted\">Tao Liu</span></h2>\r\n                    <p class=\"lead\">\r\n                    <a href=\"http://www.amazon.com/F-C-Developers-Tao-Liu/dp/0735670269\" class=\"btn btn-large btn-info\">On Amazon.com</a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </section>\r\n</div>");
  },h):Doc.PrepareTemplate("books",{
   $:1,
   $0:"books"
  },function()
  {
   return $.parseHTML("<div class=\"scrollable-content\">\r\n    <section class=\"block-large\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-xs-6 col-sm-3\">\r\n                    <img src=\"/img/FSharpBook-ExpertFSharp3-small.png\" style=\"width: 100%;\">\r\n                </div>\r\n                <div class=\"col-xs-6 col-sm-9\">\r\n                    <h2>Expert F# 3.0. <span class=\"muted\">Don Syme, Adam Granicz, Antonio Cisternino</span></h2>\r\n                    <p class=\"lead\">Everything you ever wanted to know about using F#, with nearly 80 pages of WebSharper content.</p>\r\n                    <a href=\"http://www.amazon.com/Expert-F-3-0-Don-Syme/dp/1430246502\" class=\"btn btn-large btn-info\">On Amazon.com</a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </section>\r\n\r\n    <section class=\"block-large bg-alt\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-xs-6 col-sm-3\">\r\n                    <img src=\"/img/FSharpBook-BuildingWebCloudAndMobileSolutions-small.png\" style=\"width: 100%;\">\r\n                </div>\r\n                <div class=\"col-xs-6 col-sm-9\">\r\n                    <h2>Building Web, Cloud &amp; Mobile Solutions with F#. <span class=\"muted\">Dan Mohl.</span></h2>\r\n                    <p class=\"lead\">\r\n                    <a href=\"http://www.amazon.com/Building-Web-Cloud-Mobile-Solutions/dp/1449333761\" class=\"btn btn-large btn-info\">On Amazon.com</a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </section>\r\n\r\n    <section class=\"block-large\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-xs-6 col-sm-3\">\r\n                    <img src=\"/img/FSharpBook-FSharpForCSharpDevelopers-small.png\" style=\"width: 100%;\">\r\n                </div>\r\n                <div class=\"col-xs-6 col-sm-9\">\r\n                    <h2>F# for C# Developers. <span class=\"muted\">Tao Liu</span></h2>\r\n                    <p class=\"lead\">\r\n                    <a href=\"http://www.amazon.com/F-C-Developers-Tao-Liu/dp/0735670269\" class=\"btn btn-large btn-info\">On Amazon.com</a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </section>\r\n</div>");
  });
 };
 ForDevelopers_Templates.extensions=function(h)
 {
  return h?Doc.GetOrLoadTemplate("extensions",{
   $:1,
   $0:"extensions"
  },function()
  {
   return $.parseHTML("<div class=\"scrollable-content\">\r\n    <section class=\"block-small\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <h1>Browse available extensions</h1>\r\n                <p>\r\n                    Below you can find all extensions currently available for WebSharper on Nuget or in our Insider program.\r\n                    <b>Core extensions</b> are bundled with WebSharper, and no separate downloads are necessary.\r\n                    <b>Public extensions</b> are available freely on Nuget and most of them are also open source.\r\n                    <b>Insider extensions</b> are available on a subscription, and you can use them even if your\r\n                    subscription expires. To learn about the Insider program and its benefits, visit the\r\n                    <a href=\"/support\">Subscriptions</a> page.\r\n                </p>\r\n            </div>\r\n        </div>\r\n    </section>\r\n\r\n    <section class=\"block-buzz\" style=\"border-top:0px solid #ddd;border-bottom:0px solid #ddd;\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-1 col-xs-2\">\r\n                    <img src=\"/img/icons/appharbor.png\" class=\"img-responsive\">\r\n                </div>\r\n                <div class=\"col-sm-1 col-xs-2\">\r\n                    <img src=\"/img/icons/babylonjs.png\" class=\"img-responsive\">\r\n                </div>\r\n                <div class=\"col-sm-1 col-xs-2\">\r\n                    <img src=\"/img/icons/bing.maps.png\" class=\"img-responsive\">\r\n                </div>\r\n                <div class=\"col-sm-1 col-xs-2\">\r\n                    <img src=\"/img/icons/codemirror.png\" class=\"img-responsive\">\r\n                </div>\r\n                <div class=\"col-sm-1 col-xs-2\">\r\n                    <img src=\"/img/icons/d3.png\" class=\"img-responsive\">\r\n                </div>\r\n                <div class=\"col-sm-1 col-xs-2\">\r\n                    <img src=\"/img/icons/dojo.png\" class=\"img-responsive\">\r\n                </div>\r\n                <div class=\"col-sm-1 col-xs-2\">\r\n                    <img src=\"/img/icons/dom.png\" class=\"img-responsive\">\r\n                </div>\r\n                <div class=\"col-sm-1 col-xs-2\">\r\n                    <img src=\"/img/icons/ecma-262.png\" class=\"img-responsive\">\r\n                </div>\r\n                <div class=\"col-sm-1 col-xs-2\">\r\n                    <img src=\"/img/icons/extjs.png\" class=\"img-responsive\">\r\n                </div>\r\n                <div class=\"col-sm-1 col-xs-2\">\r\n                    <img src=\"/img/icons/glmatrix.png\" class=\"img-responsive\">\r\n                </div>\r\n                <div class=\"col-sm-1 col-xs-2\">\r\n                    <img src=\"/img/icons/google.maps.png\" class=\"img-responsive\">\r\n                </div>\r\n                <div class=\"col-sm-1 col-xs-2\">\r\n                    <img src=\"/img/icons/google.visualization.png\" class=\"img-responsive\">\r\n                </div>\r\n                <div class=\"col-sm-1 col-xs-2\">\r\n                    <img src=\"/img/icons/highcharts.png\" class=\"img-responsive\">\r\n                </div>\r\n                <div class=\"col-sm-1 col-xs-2\">\r\n                    <img src=\"/img/icons/iio.png\" class=\"img-responsive\">\r\n                </div>\r\n                <div class=\"col-sm-1 col-xs-2\">\r\n                    <img src=\"/img/icons/jquery.png\" class=\"img-responsive\">\r\n                </div>\r\n                <div class=\"col-sm-1 col-xs-2\">\r\n                    <img src=\"/img/icons/jquerymobile.png\" class=\"img-responsive\">\r\n                </div>\r\n                <div class=\"col-sm-1 col-xs-2\">\r\n                    <img src=\"/img/icons/jqueryui.png\" class=\"img-responsive\">\r\n                </div>\r\n                <div class=\"col-sm-1 col-xs-2\">\r\n                    <img src=\"/img/icons/kendoui.png\" class=\"img-responsive\">\r\n                </div>\r\n                <div class=\"col-sm-1 col-xs-2\">\r\n                    <img src=\"/img/icons/o3d.png\" class=\"img-responsive\">\r\n                </div>\r\n                <div class=\"col-sm-1 col-xs-2\">\r\n                    <img src=\"/img/icons/oauth.png\" class=\"img-responsive\">\r\n                </div>\r\n                <div class=\"col-sm-1 col-xs-2\">\r\n                    <img src=\"/img/icons/phonegap.png\" class=\"img-responsive\">\r\n                </div>\r\n                <div class=\"col-sm-1 col-xs-2\">\r\n                    <img src=\"/img/icons/protovis.png\" class=\"img-responsive\">\r\n                </div>\r\n                <div class=\"col-sm-1 col-xs-2\">\r\n                    <img src=\"/img/icons/raphael.png\" class=\"img-responsive\">\r\n                </div>\r\n                <div class=\"col-sm-1 col-xs-2\">\r\n                    <img src=\"/img/icons/sencha-touch.png\" class=\"img-responsive\">\r\n                </div>\r\n                <div class=\"col-sm-1 col-xs-2\">\r\n                    <img src=\"/img/icons/threejs.png\" class=\"img-responsive\">\r\n                </div>\r\n                <div class=\"col-sm-1 col-xs-2\">\r\n                    <img src=\"/img/icons/tinymce.png\" class=\"img-responsive\">\r\n                </div>\r\n                <div class=\"col-sm-1 col-xs-2\">\r\n                    <img src=\"/img/icons/twitter.png\" class=\"img-responsive\">\r\n                </div>\r\n                <div class=\"col-sm-1 col-xs-2\">\r\n                    <img src=\"/img/icons/webaudio.png\" class=\"img-responsive\">\r\n                </div>\r\n                <div class=\"col-sm-1 col-xs-2\">\r\n                    <img src=\"/img/icons/webgl.png\" class=\"img-responsive\">\r\n                </div>\r\n                <div class=\"col-sm-1 col-xs-2\">\r\n                    <img src=\"/img/icons/webrtc.png\" class=\"img-responsive\">\r\n                </div>\r\n                <div class=\"col-sm-1 col-xs-2\">\r\n                    <img src=\"/img/icons/webspeech.png\" class=\"img-responsive\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </section>\r\n\r\n    <section class=\"bg-alt block-small\">\r\n        <div class=\"container\">\r\n            <div class=\"row\" style=\"margin:10px 0 20px 0;\">\r\n                <div class=\"col-sm-4 text-center\">\r\n                    <span class=\"fa fa-search\" style=\"font-size:250%;color:#aaa;\"></span>\r\n                    <h4 style=\"display:inline;margin-left:1em;vertical-align:super;\">Looking for an extension?</h4><br>\r\n                    There are a host of extensions ready and available for your use. Grab them here!<br>\r\n                    <a href=\"http://websharper.com/downloads\" class=\"btn btn-info\">Downloads</a>\r\n                </div>\r\n                <div class=\"col-sm-4 text-center\">\r\n                    <span class=\"fa fa-code\" style=\"font-size:250%;color:#aaa;\"></span>\r\n                    <h4 style=\"display:inline;margin-left:1em;vertical-align:super;\">Want to develop your own?</h4><br>\r\n                    It's easy to interface with new JavaScript libraries. Learn how here.<br>\r\n                    <a href=\"#D/working_with_javascript/websharper_interface_generator\" class=\"btn btn-info\">Learn WebSharper IG</a>\r\n                </div>\r\n                <div class=\"col-sm-4 text-center\">\r\n                    <span class=\"fa fa-bolt\" style=\"font-size:250%;color:#aaa;\"></span>\r\n                    <h4 style=\"display:inline;margin-left:1em;vertical-align:super;\">Interface with TypeScript?</h4><br>\r\n                    You have TypeScript code to work with?  Get in touch for our services.<br>\r\n                    <a href=\"http://websharper.com/contact\" class=\"btn btn-info\">Contact us</a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </section>\r\n</div>");
  },h):Doc.PrepareTemplate("extensions",{
   $:1,
   $0:"extensions"
  },function()
  {
   return $.parseHTML("<div class=\"scrollable-content\">\r\n    <section class=\"block-small\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <h1>Browse available extensions</h1>\r\n                <p>\r\n                    Below you can find all extensions currently available for WebSharper on Nuget or in our Insider program.\r\n                    <b>Core extensions</b> are bundled with WebSharper, and no separate downloads are necessary.\r\n                    <b>Public extensions</b> are available freely on Nuget and most of them are also open source.\r\n                    <b>Insider extensions</b> are available on a subscription, and you can use them even if your\r\n                    subscription expires. To learn about the Insider program and its benefits, visit the\r\n                    <a href=\"/support\">Subscriptions</a> page.\r\n                </p>\r\n            </div>\r\n        </div>\r\n    </section>\r\n\r\n    <section class=\"block-buzz\" style=\"border-top:0px solid #ddd;border-bottom:0px solid #ddd;\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-1 col-xs-2\">\r\n                    <img src=\"/img/icons/appharbor.png\" class=\"img-responsive\">\r\n                </div>\r\n                <div class=\"col-sm-1 col-xs-2\">\r\n                    <img src=\"/img/icons/babylonjs.png\" class=\"img-responsive\">\r\n                </div>\r\n                <div class=\"col-sm-1 col-xs-2\">\r\n                    <img src=\"/img/icons/bing.maps.png\" class=\"img-responsive\">\r\n                </div>\r\n                <div class=\"col-sm-1 col-xs-2\">\r\n                    <img src=\"/img/icons/codemirror.png\" class=\"img-responsive\">\r\n                </div>\r\n                <div class=\"col-sm-1 col-xs-2\">\r\n                    <img src=\"/img/icons/d3.png\" class=\"img-responsive\">\r\n                </div>\r\n                <div class=\"col-sm-1 col-xs-2\">\r\n                    <img src=\"/img/icons/dojo.png\" class=\"img-responsive\">\r\n                </div>\r\n                <div class=\"col-sm-1 col-xs-2\">\r\n                    <img src=\"/img/icons/dom.png\" class=\"img-responsive\">\r\n                </div>\r\n                <div class=\"col-sm-1 col-xs-2\">\r\n                    <img src=\"/img/icons/ecma-262.png\" class=\"img-responsive\">\r\n                </div>\r\n                <div class=\"col-sm-1 col-xs-2\">\r\n                    <img src=\"/img/icons/extjs.png\" class=\"img-responsive\">\r\n                </div>\r\n                <div class=\"col-sm-1 col-xs-2\">\r\n                    <img src=\"/img/icons/glmatrix.png\" class=\"img-responsive\">\r\n                </div>\r\n                <div class=\"col-sm-1 col-xs-2\">\r\n                    <img src=\"/img/icons/google.maps.png\" class=\"img-responsive\">\r\n                </div>\r\n                <div class=\"col-sm-1 col-xs-2\">\r\n                    <img src=\"/img/icons/google.visualization.png\" class=\"img-responsive\">\r\n                </div>\r\n                <div class=\"col-sm-1 col-xs-2\">\r\n                    <img src=\"/img/icons/highcharts.png\" class=\"img-responsive\">\r\n                </div>\r\n                <div class=\"col-sm-1 col-xs-2\">\r\n                    <img src=\"/img/icons/iio.png\" class=\"img-responsive\">\r\n                </div>\r\n                <div class=\"col-sm-1 col-xs-2\">\r\n                    <img src=\"/img/icons/jquery.png\" class=\"img-responsive\">\r\n                </div>\r\n                <div class=\"col-sm-1 col-xs-2\">\r\n                    <img src=\"/img/icons/jquerymobile.png\" class=\"img-responsive\">\r\n                </div>\r\n                <div class=\"col-sm-1 col-xs-2\">\r\n                    <img src=\"/img/icons/jqueryui.png\" class=\"img-responsive\">\r\n                </div>\r\n                <div class=\"col-sm-1 col-xs-2\">\r\n                    <img src=\"/img/icons/kendoui.png\" class=\"img-responsive\">\r\n                </div>\r\n                <div class=\"col-sm-1 col-xs-2\">\r\n                    <img src=\"/img/icons/o3d.png\" class=\"img-responsive\">\r\n                </div>\r\n                <div class=\"col-sm-1 col-xs-2\">\r\n                    <img src=\"/img/icons/oauth.png\" class=\"img-responsive\">\r\n                </div>\r\n                <div class=\"col-sm-1 col-xs-2\">\r\n                    <img src=\"/img/icons/phonegap.png\" class=\"img-responsive\">\r\n                </div>\r\n                <div class=\"col-sm-1 col-xs-2\">\r\n                    <img src=\"/img/icons/protovis.png\" class=\"img-responsive\">\r\n                </div>\r\n                <div class=\"col-sm-1 col-xs-2\">\r\n                    <img src=\"/img/icons/raphael.png\" class=\"img-responsive\">\r\n                </div>\r\n                <div class=\"col-sm-1 col-xs-2\">\r\n                    <img src=\"/img/icons/sencha-touch.png\" class=\"img-responsive\">\r\n                </div>\r\n                <div class=\"col-sm-1 col-xs-2\">\r\n                    <img src=\"/img/icons/threejs.png\" class=\"img-responsive\">\r\n                </div>\r\n                <div class=\"col-sm-1 col-xs-2\">\r\n                    <img src=\"/img/icons/tinymce.png\" class=\"img-responsive\">\r\n                </div>\r\n                <div class=\"col-sm-1 col-xs-2\">\r\n                    <img src=\"/img/icons/twitter.png\" class=\"img-responsive\">\r\n                </div>\r\n                <div class=\"col-sm-1 col-xs-2\">\r\n                    <img src=\"/img/icons/webaudio.png\" class=\"img-responsive\">\r\n                </div>\r\n                <div class=\"col-sm-1 col-xs-2\">\r\n                    <img src=\"/img/icons/webgl.png\" class=\"img-responsive\">\r\n                </div>\r\n                <div class=\"col-sm-1 col-xs-2\">\r\n                    <img src=\"/img/icons/webrtc.png\" class=\"img-responsive\">\r\n                </div>\r\n                <div class=\"col-sm-1 col-xs-2\">\r\n                    <img src=\"/img/icons/webspeech.png\" class=\"img-responsive\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </section>\r\n\r\n    <section class=\"bg-alt block-small\">\r\n        <div class=\"container\">\r\n            <div class=\"row\" style=\"margin:10px 0 20px 0;\">\r\n                <div class=\"col-sm-4 text-center\">\r\n                    <span class=\"fa fa-search\" style=\"font-size:250%;color:#aaa;\"></span>\r\n                    <h4 style=\"display:inline;margin-left:1em;vertical-align:super;\">Looking for an extension?</h4><br>\r\n                    There are a host of extensions ready and available for your use. Grab them here!<br>\r\n                    <a href=\"http://websharper.com/downloads\" class=\"btn btn-info\">Downloads</a>\r\n                </div>\r\n                <div class=\"col-sm-4 text-center\">\r\n                    <span class=\"fa fa-code\" style=\"font-size:250%;color:#aaa;\"></span>\r\n                    <h4 style=\"display:inline;margin-left:1em;vertical-align:super;\">Want to develop your own?</h4><br>\r\n                    It's easy to interface with new JavaScript libraries. Learn how here.<br>\r\n                    <a href=\"#D/working_with_javascript/websharper_interface_generator\" class=\"btn btn-info\">Learn WebSharper IG</a>\r\n                </div>\r\n                <div class=\"col-sm-4 text-center\">\r\n                    <span class=\"fa fa-bolt\" style=\"font-size:250%;color:#aaa;\"></span>\r\n                    <h4 style=\"display:inline;margin-left:1em;vertical-align:super;\">Interface with TypeScript?</h4><br>\r\n                    You have TypeScript code to work with?  Get in touch for our services.<br>\r\n                    <a href=\"http://websharper.com/contact\" class=\"btn btn-info\">Contact us</a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </section>\r\n</div>");
  });
 };
 ForDevelopers_Templates.videos=function(h)
 {
  return h?Doc.GetOrLoadTemplate("videos",{
   $:1,
   $0:"videos"
  },function()
  {
   return $.parseHTML("<div class=\"scrollable-content\">\r\n    <section class=\"block-buzz\">\r\n        <div class=\"container\">\r\n            <div class=\"row text-center\">\r\n                <div class=\"col-12\">\r\n                    <h2>Getting Started</h2>\r\n                    <p>Coming soon...</p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </section>\r\n\r\n    <section class=\"block-buzz\">\r\n        <div class=\"container\">\r\n            <div class=\"row text-center\">\r\n                <div class=\"col-12\">\r\n                    <h2>Conference videos</h2>\r\n                    <p>More coming soon...</p>\r\n                    <div class=\"videos\">\r\n                        <div class=\"col-sm-4 col-xs-6\">\r\n                            <a href=\"https://vimeo.com/71892894\">\r\n                                <img src=\"https://i.vimeocdn.com/video/445588790_295x166.webp\" class=\"img-responsive\">\r\n                            </a>\r\n                            <a href=\"https://vimeo.com/71892894\">\r\n                                <p class=\"title text-left\">Developing and Integrating WebSharper applications with Facebook</p>\r\n                            </a>\r\n                            <p class=\"info text-center\">Tech Mesh 2012</p>\r\n                        </div>\r\n                        <div class=\"col-sm-4 col-xs-6\">\r\n                            <a href=\"https://vimeo.com/67191052\">\r\n                                <img src=\"https://i.vimeocdn.com/video/438977359_295x166.webp\" class=\"img-responsive\">\r\n                            </a>\r\n                            <a href=\"https://vimeo.com/67191052\">\r\n                                <p class=\"title text-left\">Developing for Windows 8 with F# and WebSharper</p>\r\n                            </a>\r\n                            <p class=\"info text-center\">IT Camp 2013</p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </section>\r\n\r\n</div>");
  },h):Doc.PrepareTemplate("videos",{
   $:1,
   $0:"videos"
  },function()
  {
   return $.parseHTML("<div class=\"scrollable-content\">\r\n    <section class=\"block-buzz\">\r\n        <div class=\"container\">\r\n            <div class=\"row text-center\">\r\n                <div class=\"col-12\">\r\n                    <h2>Getting Started</h2>\r\n                    <p>Coming soon...</p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </section>\r\n\r\n    <section class=\"block-buzz\">\r\n        <div class=\"container\">\r\n            <div class=\"row text-center\">\r\n                <div class=\"col-12\">\r\n                    <h2>Conference videos</h2>\r\n                    <p>More coming soon...</p>\r\n                    <div class=\"videos\">\r\n                        <div class=\"col-sm-4 col-xs-6\">\r\n                            <a href=\"https://vimeo.com/71892894\">\r\n                                <img src=\"https://i.vimeocdn.com/video/445588790_295x166.webp\" class=\"img-responsive\">\r\n                            </a>\r\n                            <a href=\"https://vimeo.com/71892894\">\r\n                                <p class=\"title text-left\">Developing and Integrating WebSharper applications with Facebook</p>\r\n                            </a>\r\n                            <p class=\"info text-center\">Tech Mesh 2012</p>\r\n                        </div>\r\n                        <div class=\"col-sm-4 col-xs-6\">\r\n                            <a href=\"https://vimeo.com/67191052\">\r\n                                <img src=\"https://i.vimeocdn.com/video/438977359_295x166.webp\" class=\"img-responsive\">\r\n                            </a>\r\n                            <a href=\"https://vimeo.com/67191052\">\r\n                                <p class=\"title text-left\">Developing for Windows 8 with F# and WebSharper</p>\r\n                            </a>\r\n                            <p class=\"info text-center\">IT Camp 2013</p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </section>\r\n\r\n</div>");
  });
 };
}());
