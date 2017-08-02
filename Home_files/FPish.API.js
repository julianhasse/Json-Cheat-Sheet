(function()
{
 "use strict";
 var IntelliFactory,FPish,Api,User,Data,PasswordedUserLogin,LoginResult,RegisterData,RegisterResult,RequestResult,Blog,BlogListFilter,Client,Runtime,WebSharper,Strings,Seq;
 IntelliFactory=window.IntelliFactory=window.IntelliFactory||{};
 FPish=IntelliFactory.FPish=IntelliFactory.FPish||{};
 Api=FPish.Api=FPish.Api||{};
 User=Api.User=Api.User||{};
 Data=User.Data=User.Data||{};
 PasswordedUserLogin=User.PasswordedUserLogin=User.PasswordedUserLogin||{};
 LoginResult=User.LoginResult=User.LoginResult||{};
 RegisterData=User.RegisterData=User.RegisterData||{};
 RegisterResult=User.RegisterResult=User.RegisterResult||{};
 RequestResult=User.RequestResult=User.RequestResult||{};
 Blog=Api.Blog=Api.Blog||{};
 BlogListFilter=Blog.BlogListFilter=Blog.BlogListFilter||{};
 Client=Api.Client=Api.Client||{};
 Runtime=IntelliFactory&&IntelliFactory.Runtime;
 WebSharper=window.WebSharper;
 Strings=WebSharper&&WebSharper.Strings;
 Seq=WebSharper&&WebSharper.Seq;
 Data.New=function(username,email,emailIsVerified)
 {
  return{
   username:username,
   email:email,
   emailIsVerified:emailIsVerified
  };
 };
 PasswordedUserLogin.BadPassword={
  $:1
 };
 PasswordedUserLogin.NotExisting={
  $:0
 };
 LoginResult.Failure={
  $:1
 };
 RegisterData.New=function(username,email,password,firstname,lastname)
 {
  return{
   username:username,
   email:email,
   password:password,
   firstname:firstname,
   lastname:lastname
  };
 };
 RegisterResult.Success={
  $:0
 };
 RequestResult.Success={
  $:0
 };
 BlogListFilter=Blog.BlogListFilter=Runtime.Class({
  get_ToUrl:function()
  {
   return this.$==1?"/author/"+this.$0:this.$==2?"/range/"+window.String(this.$0)+"/"+window.String(this.$1):this.$==3?"/titlepart/"+this.$0:"/tag/"+this.$0;
  }
 },null,BlogListFilter);
 Client=Api.Client=Runtime.Class({
  EditBlogAtricle:function(token,args)
  {
   return this.e.Put("/api/blog/entry",args,{
    $:1,
    $0:token
   },null);
  },
  PostBlogAtricle:function(token,args)
  {
   return this.e.Post("/api/blog/entry",args,{
    $:1,
    $0:token
   },null);
  },
  UnmarkAsAnswer:function(token,commentId)
  {
   return this.e.Post("/api/answers/unmarkanswer/"+window.String(commentId),"",{
    $:1,
    $0:token
   },null);
  },
  MarkAsAnswer:function(token,commentId)
  {
   return this.e.Post("/api/answers/markanswer/"+window.String(commentId),"",{
    $:1,
    $0:token
   },null);
  },
  EditComment:function(token,args)
  {
   return this.e.Put("/api/answers/comment",args,{
    $:1,
    $0:token
   },null);
  },
  PostComment:function(token,args)
  {
   return this.e.Post("/api/answers/comment",args,{
    $:1,
    $0:token
   },null);
  },
  EditTopic:function(token,args)
  {
   return this.e.Put("/api/answers/topic",args,{
    $:1,
    $0:token
   },null);
  },
  PostTopic:function(token,args)
  {
   return this.e.Post("/api/answers/topic",args,{
    $:1,
    $0:token
   },null);
  },
  GetBlogTags:function()
  {
   return this.e.Get("/api/blog/tags/",null,null);
  },
  GetPopularBlogTags:function(count)
  {
   return this.e.Get("/api/blog/populartags/"+window.String(count)+"/",null,null);
  },
  GetTopics:function(filter)
  {
   return this.e.Get("/api/answers/list"+Strings.concat("",Seq.map(function(f)
   {
    return f.get_ToUrl();
   },filter))+"/",null,null);
  },
  GetTopic:function(id)
  {
   return this.e.GetOption("/api/answers/topic/"+window.String(id),null,null);
  },
  GetBlogArticles:function(filter)
  {
   return this.e.Get("/api/blog/list"+Strings.concat("",Seq.map(function(f)
   {
    return f.get_ToUrl();
   },filter))+"/",null,null);
  },
  GetBlogArticle:function(id)
  {
   return this.e.GetOption("/api/blog/entry/"+window.String(id),null,null);
  },
  LoginUser:function(username,password)
  {
   return this.e.Post("/api/login",{
    username:username,
    password:password
   },null,{
    $:1,
    $0:function(o)
    {
     return o.$===2?{
      $:2,
      $0:Data.New(o.username,o.email,o.emailIsVerified)
     }:o.$===1?PasswordedUserLogin.BadPassword:PasswordedUserLogin.NotExisting;
    }
   });
  },
  RegisterUser:function(data)
  {
   return this.e.Post("/api/registerUser",data,null,{
    $:1,
    $0:function(o)
    {
     return o.$===0?RegisterResult.Success:{
      $:1,
      $0:o.errmsg
     };
    }
   });
  },
  RequestPasswordReset:function(email)
  {
   return this.e.Post("/api/request-reset",email,null,{
    $:1,
    $0:function(o)
    {
     return o.$===0?RequestResult.Success:{
      $:1,
      $0:o.errmsg
     };
    }
   });
  },
  GetUserDataWithoutToken:function()
  {
   return this.e.Get("/api/getloggedin",null,{
    $:1,
    $0:function(o)
    {
     return o.$===0?{
      $:0,
      $0:Data.New(o.username,o.email,o.emailIsVerified)
     }:LoginResult.Failure;
    }
   });
  },
  GetUserData:function(token)
  {
   return this.e.Get("/api/userdata",{
    $:1,
    $0:token
   },null);
  }
 },null,Client);
 Client.New=Runtime.Ctor(function(e)
 {
  this.e=e;
 },Client);
}());
