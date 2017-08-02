(function()
{
 "use strict";
 var IntelliFactory,AuthenticationServer,Api,Endpoint,ClientSide,ClientEndpoint,Client,Runtime,JSON,console,$,WebSharper,JavaScript,Pervasives,List,Seq,Concurrency;
 IntelliFactory=window.IntelliFactory=window.IntelliFactory||{};
 AuthenticationServer=IntelliFactory.AuthenticationServer=IntelliFactory.AuthenticationServer||{};
 Api=AuthenticationServer.Api=AuthenticationServer.Api||{};
 Endpoint=Api.Endpoint=Api.Endpoint||{};
 ClientSide=Api.ClientSide=Api.ClientSide||{};
 ClientEndpoint=ClientSide.ClientEndpoint=ClientSide.ClientEndpoint||{};
 Client=Api.Client=Api.Client||{};
 Runtime=IntelliFactory&&IntelliFactory.Runtime;
 JSON=window.JSON;
 console=window.console;
 $=window.jQuery;
 WebSharper=window.WebSharper;
 JavaScript=WebSharper&&WebSharper.JavaScript;
 Pervasives=JavaScript&&JavaScript.Pervasives;
 List=WebSharper&&WebSharper.List;
 Seq=WebSharper&&WebSharper.Seq;
 Concurrency=WebSharper&&WebSharper.Concurrency;
 Endpoint=Api.Endpoint=Runtime.Class({},null,Endpoint);
 Endpoint.ClientSide=function(baseUri)
 {
  return new ClientEndpoint.New(baseUri);
 };
 Endpoint.New=Runtime.Ctor(function()
 {
 },Endpoint);
 ClientEndpoint=ClientSide.ClientEndpoint=Runtime.Class({
  setResultError:function(ok,s)
  {
   s.error=function($1)
   {
    var $2;
    try
    {
     $2=JSON.parse($1.responseText);
    }
    catch(e)
    {
     $2=(console.log(e),{
      $:0,
      $0:"Request failed and could not read error message"
     });
    }
    return ok($2);
   };
  },
  allowCredentials:function(s)
  {
   s.xhrFields={
    withCredentials:true
   };
  },
  setBody:function(method,args,s)
  {
   s.type=method;
   s.contentType="application/json";
   s.data=JSON.stringify(args);
  },
  SendWithBody:function(method,url,args,token)
  {
   var $this;
   $this=this;
   return this.Send(url,token,window.id,function()
   {
    return function(s)
    {
     return $this.setBody(method,args,s);
    };
   });
  },
  Send:function(url,token,onOk,mk)
  {
   var $this,a;
   $this=this;
   a=function(ok,ko)
   {
    var x;
    $.ajax($this.baseUri+url,(x=Pervasives.NewFromSeq(List.ofSeq(Seq.delay(function()
    {
     return Seq.append([["dataType","json"]],Seq.delay(function()
     {
      return Seq.append(token!=null&&token.$==1?[["headers",{
       Authorization:"BEARER "+token.$0.Token
      }]]:[],Seq.delay(function()
      {
       return Seq.append([["success",function($1)
       {
        ok(onOk($1));
       }]],Seq.delay(function()
       {
        return[["error",function($1,$2,$3)
        {
         ko(window.Error($3));
        }]];
       }));
      }));
     }));
    }))),((mk(ok))(x),x)));
   };
   return Concurrency.FromContinuations(function($1,$2,$3)
   {
    return a.apply(null,[$1,$2,$3]);
   });
  },
  PutResult:function(url,args,token,parse)
  {
   var $this,x;
   $this=this;
   return this.Send(url,token,(x=parse==null?null:{
    $:1,
    $0:parse.$0
   },x==null?window.id:x.$0),function(ok)
   {
    return function(s)
    {
     $this.setBody("PUT",args,s);
     return $this.setResultError(ok,s);
    };
   });
  },
  Put:function(url,args,token,parse)
  {
   var $this,x;
   $this=this;
   return this.Send(url,token,(x=parse==null?null:{
    $:1,
    $0:parse.$0
   },x==null?window.id:x.$0),function()
   {
    return function(s)
    {
     $this.setBody("PUT",args,s);
    };
   });
  },
  PostResult:function(url,args,token,parse)
  {
   var $this,x;
   $this=this;
   return this.Send(url,token,(x=parse==null?null:{
    $:1,
    $0:parse.$0
   },x==null?window.id:x.$0),function(ok)
   {
    return function(s)
    {
     $this.setBody("POST",args,s);
     return $this.setResultError(ok,s);
    };
   });
  },
  Post:function(url,args,token,parse)
  {
   var $this,x;
   $this=this;
   return this.Send(url,token,(x=parse==null?null:{
    $:1,
    $0:parse.$0
   },x==null?window.id:x.$0),function()
   {
    return function(s)
    {
     $this.allowCredentials(s);
     return $this.setBody("POST",args,s);
    };
   });
  },
  GetResult:function(url,token,parse)
  {
   var $this,x;
   $this=this;
   return this.Send(url,token,(x=parse==null?null:{
    $:1,
    $0:parse.$0
   },x==null?window.id:x.$0),function(o)
   {
    return function(s)
    {
     return $this.setResultError(o,s);
    };
   });
  },
  GetOption:function(url,token,parse)
  {
   var f,x,g;
   return this.Send(url,token,(f=(x=parse==null?null:{
    $:1,
    $0:parse.$0
   },x==null?window.id:x.$0),(g=function(a)
   {
    return{
     $:1,
     $0:a
    };
   },function(x$1)
   {
    return g(f(x$1));
   })),function(ok)
   {
    return function(s)
    {
     s.statusCode={
      "404":function()
      {
       ok(null);
      }
     };
    };
   });
  },
  Get:function(url,token,parse)
  {
   var x;
   return this.Send(url,token,(x=parse==null?null:{
    $:1,
    $0:parse.$0
   },x==null?window.id:x.$0),function()
   {
    return function()
    {
     return null;
    };
   });
  }
 },Endpoint,ClientEndpoint);
 ClientEndpoint.New=Runtime.Ctor(function(baseUri)
 {
  Endpoint.New.call(this);
  this.baseUri=baseUri;
 },ClientEndpoint);
 Client=Api.Client=Runtime.Class({
  ofRes:function(d,o)
  {
   return o.result==="success"?{
    $:1,
    $0:d(o.data)
   }:{
    $:0,
    $0:o.message
   };
  },
  EditUser:function(args,token)
  {
   var $this,d;
   $this=this;
   return this.e.PutResult("/api/user",args,{
    $:1,
    $0:token
   },{
    $:1,
    $0:(d=window.id,function(o)
    {
     return $this.ofRes(d,o);
    })
   });
  },
  NewUser:function(args,token)
  {
   var $this,d;
   $this=this;
   return this.e.PostResult("/api/user",args,{
    $:1,
    $0:token
   },{
    $:1,
    $0:(d=window.id,function(o)
    {
     return $this.ofRes(d,o);
    })
   });
  },
  GetMyUserData:function(token)
  {
   var $this,d;
   $this=this;
   return this.e.GetResult("/api/user",{
    $:1,
    $0:token
   },{
    $:1,
    $0:(d=function(o)
    {
     return o.hasOwnProperty("registeredWithOAuthProvider")?{
      $:1,
      $0:o.registeredWithOAuthProvider,
      $1:o.username,
      $2:o.displayName
     }:{
      $:0,
      $0:o
     };
    },function(o)
    {
     return $this.ofRes(d,o);
    })
   });
  }
 },null,Client);
 Client.New=Runtime.Ctor(function(e)
 {
  this.e=e;
 },Client);
}());
