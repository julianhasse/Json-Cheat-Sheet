(function()
{
 "use strict";
 var IntelliFactory,OAuth2Client,ClientSide,UI,Controls,EndAuthControl,WebSharper,Concurrency,UI$1,Next,Doc,AttrProxy,Html,Client,Attr,Tags,Lazy,Unchecked,Arrays,Runtime,Operators,Web;
 IntelliFactory=window.IntelliFactory=window.IntelliFactory||{};
 OAuth2Client=IntelliFactory.OAuth2Client=IntelliFactory.OAuth2Client||{};
 ClientSide=OAuth2Client.ClientSide=OAuth2Client.ClientSide||{};
 UI=ClientSide.UI=ClientSide.UI||{};
 Controls=OAuth2Client.Controls=OAuth2Client.Controls||{};
 EndAuthControl=Controls.EndAuthControl=Controls.EndAuthControl||{};
 WebSharper=window.WebSharper;
 Concurrency=WebSharper&&WebSharper.Concurrency;
 UI$1=WebSharper&&WebSharper.UI;
 Next=UI$1&&UI$1.Next;
 Doc=Next&&Next.Doc;
 AttrProxy=Next&&Next.AttrProxy;
 Html=WebSharper&&WebSharper.Html;
 Client=Html&&Html.Client;
 Attr=Client&&Client.Attr;
 Tags=Client&&Client.Tags;
 Lazy=WebSharper&&WebSharper.Lazy;
 Unchecked=WebSharper&&WebSharper.Unchecked;
 Arrays=WebSharper&&WebSharper.Arrays;
 Runtime=IntelliFactory&&IntelliFactory.Runtime;
 Operators=Client&&Client.Operators;
 Web=WebSharper&&WebSharper.Web;
 UI.IFrameAuthenticate2=function(authRequestUrl)
 {
  var b;
  b=null;
  return Concurrency.Delay(function()
  {
   return Concurrency.Return([Doc.Element("iframe",[AttrProxy.Create("src",authRequestUrl)],[]),function()
   {
    var b$1;
    b$1=null;
    return Concurrency.Delay(function()
    {
     return Concurrency.Bind(ClientSide.WaitForReturn(),function(a)
     {
      return a!=null&&a.$==1?Concurrency.Return({
       $:1,
       $0:{
        Token:a.$0,
        State:null
       }
      }):Concurrency.Return(null);
     });
    });
   }]);
  });
 };
 UI.IFrameAuthenticate=function(authRequestUrl)
 {
  var b;
  b=null;
  return Concurrency.Delay(function()
  {
   var frame;
   function loop()
   {
    var b$1;
    b$1=null;
    return Concurrency.Delay(function()
    {
     return Concurrency.Bind(ClientSide.WaitForReturn(),function(a)
     {
      return a!=null&&a.$==1?Concurrency.Return({
       Token:a.$0,
       State:null
      }):(frame.src=authRequestUrl,loop());
     });
    });
   }
   frame=Doc.Element("iframe",[AttrProxy.Create("src",authRequestUrl)],[]);
   return Concurrency.Return([frame,loop()]);
  });
 };
 ClientSide.IFrameAuthenticate2=function(authRequestUrl)
 {
  var b;
  b=null;
  return Concurrency.Delay(function()
  {
   var a;
   return Concurrency.Return([(a=[Attr.Attr().NewAttr("src",authRequestUrl)],Tags.Tags().NewTag("iframe",a)),function()
   {
    var b$1;
    b$1=null;
    return Concurrency.Delay(function()
    {
     return Concurrency.Bind(ClientSide.WaitForReturn(),function(a$1)
     {
      return a$1!=null&&a$1.$==1?Concurrency.Return({
       $:1,
       $0:{
        Token:a$1.$0,
        State:null
       }
      }):Concurrency.Return(null);
     });
    });
   }]);
  });
 };
 ClientSide.IFrameAuthenticate=function(authRequestUrl)
 {
  var b;
  b=null;
  return Concurrency.Delay(function()
  {
   var frame,a;
   function loop()
   {
    var b$1;
    b$1=null;
    return Concurrency.Delay(function()
    {
     return Concurrency.Bind(ClientSide.WaitForReturn(),function(a$1)
     {
      return a$1!=null&&a$1.$==1?Concurrency.Return({
       Token:a$1.$0,
       State:null
      }):(frame.src=authRequestUrl,loop());
     });
    });
   }
   frame=(a=[Attr.Attr().NewAttr("src",authRequestUrl)],Tags.Tags().NewTag("iframe",a));
   return Concurrency.Return([frame,loop()]);
  });
 };
 ClientSide.PopupAuthenticate=function(authRequestUrl)
 {
  var b;
  b=null;
  return Concurrency.Delay(function()
  {
   window.open(authRequestUrl);
   return Concurrency.Bind(ClientSide.WaitForReturn(),function(a)
   {
    return Concurrency.Return(a==null?null:{
     $:1,
     $0:{
      Token:a.$0,
      State:null
     }
    });
   });
  });
 };
 ClientSide.WaitForReturn=function()
 {
  var a;
  a=function(ok)
  {
   var i,interval;
   function i$1()
   {
    return window.setInterval(function()
    {
     var m;
     m=window.localStorage.getItem("IntelliFactory.OAuth2Client.Token");
     m===null?void 0:(window.clearInterval(Lazy.Force(i)),ok(m===""?null:{
      $:1,
      $0:m
     }));
    },1000);
   }
   window.localStorage.removeItem("IntelliFactory.OAuth2Client.Token");
   i=Lazy.Create(i$1);
   interval=Lazy.Force(i);
  };
  return Concurrency.FromContinuations(function($1,$2,$3)
  {
   return a.apply(null,[$1,$2,$3]);
  });
 };
 ClientSide.ClosePopupAfterLogin=function(token)
 {
  var token$1,m;
  token$1=token==null?(m=(new window.RegExp("access_token=([^#&]+)")).exec(window.location.href),Unchecked.Equals(m,null)?"":window.decodeURIComponent(Arrays.get(m,1))):token.$0;
  window.localStorage.setItem("IntelliFactory.OAuth2Client.Token",token$1);
  window.close();
 };
 EndAuthControl=Controls.EndAuthControl=Runtime.Class({
  get_Body:function()
  {
   var $this,x,a,f;
   $this=this;
   x=(a=[Tags.Tags().text("Redirecting..")],Tags.Tags().NewTag("div",a));
   f=function()
   {
    ClientSide.ClosePopupAfterLogin($this.token);
   };
   (function(w)
   {
    Operators.OnAfterRender(f,w);
   }(x));
   return x;
  }
 },Web.Control,EndAuthControl);
}());
