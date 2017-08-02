(function()
{
 "use strict";
 var Global,WebSharper,Html,Client,Pagelet,Text,Attribute,Element,DeprecatedTagBuilder,TagBuilder,DeprecatedAttributeBuilder,AttributeBuilder,Operators,Implementation,JQueryHtmlProvider,Default,Tags,Attr,SC$1,Events,JQueryEventSupport,EventsPervasives,SC$2,IntelliFactory,Runtime,Enumerator;
 Global=window;
 WebSharper=Global.WebSharper=Global.WebSharper||{};
 Html=WebSharper.Html=WebSharper.Html||{};
 Client=Html.Client=Html.Client||{};
 Pagelet=Client.Pagelet=Client.Pagelet||{};
 Text=Client.Text=Client.Text||{};
 Attribute=Client.Attribute=Client.Attribute||{};
 Element=Client.Element=Client.Element||{};
 DeprecatedTagBuilder=Client.DeprecatedTagBuilder=Client.DeprecatedTagBuilder||{};
 TagBuilder=Client.TagBuilder=Client.TagBuilder||{};
 DeprecatedAttributeBuilder=Client.DeprecatedAttributeBuilder=Client.DeprecatedAttributeBuilder||{};
 AttributeBuilder=Client.AttributeBuilder=Client.AttributeBuilder||{};
 Operators=Client.Operators=Client.Operators||{};
 Implementation=Client.Implementation=Client.Implementation||{};
 JQueryHtmlProvider=Implementation.JQueryHtmlProvider=Implementation.JQueryHtmlProvider||{};
 Default=Client.Default=Client.Default||{};
 Tags=Client.Tags=Client.Tags||{};
 Attr=Client.Attr=Client.Attr||{};
 SC$1=Global.StartupCode$WebSharper_Html_Client$Html=Global.StartupCode$WebSharper_Html_Client$Html||{};
 Events=Client.Events=Client.Events||{};
 JQueryEventSupport=Events.JQueryEventSupport=Events.JQueryEventSupport||{};
 EventsPervasives=Client.EventsPervasives=Client.EventsPervasives||{};
 SC$2=Global.StartupCode$WebSharper_Html_Client$Events=Global.StartupCode$WebSharper_Html_Client$Events||{};
 IntelliFactory=Global.IntelliFactory;
 Runtime=IntelliFactory&&IntelliFactory.Runtime;
 Enumerator=WebSharper&&WebSharper.Enumerator;
 Pagelet=Client.Pagelet=Runtime.Class({
  Render:function()
  {
  },
  AppendTo:function(targetId)
  {
   var v;
   v=Global.document.getElementById(targetId).appendChild(this.get_Body());
   this.Render();
  },
  ReplaceInDom:function(node)
  {
   var v;
   v=node.parentNode.replaceChild(this.get_Body(),node);
   this.Render();
  }
 },null,Pagelet);
 Pagelet.New=Runtime.Ctor(function()
 {
 },Pagelet);
 Text=Client.Text=Runtime.Class({
  get_Body:function()
  {
   return Global.document.createTextNode(this.text);
  }
 },Pagelet,Text);
 Text.New=Runtime.Ctor(function(text)
 {
  Pagelet.New.call(this);
  this.text=text;
 },Text);
 Attribute=Client.Attribute=Runtime.Class({
  get_Body:function()
  {
   var attr;
   attr=this.HtmlProvider.CreateAttribute(this.Name);
   attr.value=this.Value;
   return attr;
  }
 },Pagelet,Attribute);
 Attribute.New=function(htmlProvider,name,value)
 {
  var a;
  a=new Attribute.New$1(htmlProvider);
  a.Name=name;
  a.Value=value;
  return a;
 };
 Attribute.New$1=Runtime.Ctor(function(HtmlProvider)
 {
  Pagelet.New.call(this);
  this.HtmlProvider=HtmlProvider;
 },Attribute);
 Element=Client.Element=Runtime.Class({
  AppendN:function(node)
  {
   this.HtmlProvider.AppendNode(this.get_Body(),node);
  },
  AppendI:function(pl)
  {
   var body,r;
   body=pl.get_Body();
   body.nodeType===2?this.HtmlProvider.AppendAttribute(this.get_Body(),body):this.HtmlProvider.AppendNode(this.get_Body(),pl.get_Body());
   this.IsRendered?pl.Render():(r=this.RenderInternal,this.RenderInternal=function()
   {
    r();
    pl.Render();
   });
  },
  set_Item:function(name,value)
  {
   this.HtmlProvider.SetAttribute(this.get_Body(),name,value);
  },
  get_Item:function(name)
  {
   var prop;
   prop=this.HtmlProvider.GetAttribute(this.get_Body(),name);
   return this.HtmlProvider.GetAttribute(this.get_Body(),name);
  },
  get_HtmlProvider:function()
  {
   return this.HtmlProvider;
  },
  OnLoad:function(f)
  {
   this.HtmlProvider.OnLoad(this.get_Body(),f);
  },
  get_Id:function()
  {
   var id,newId;
   id=this.HtmlProvider.GetProperty(this.get_Body(),"id");
   return(id===void 0?true:id==="")?(newId="id"+Global.Math.round(Global.Math.random()*100000000),(this.HtmlProvider.SetProperty(this.get_Body(),"id",newId),newId)):id;
  },
  set_Value:function(x)
  {
   this.HtmlProvider.SetValue(this.get_Body(),x);
  },
  get_Value:function()
  {
   return this.HtmlProvider.GetValue(this.get_Body());
  },
  set_Html:function(x)
  {
   this.HtmlProvider.SetHtml(this.get_Body(),x);
  },
  get_Html:function()
  {
   return this.HtmlProvider.GetHtml(this.get_Body());
  },
  set_Text:function(x)
  {
   this.HtmlProvider.SetText(this.get_Body(),x);
  },
  get_Text:function()
  {
   return this.HtmlProvider.GetText(this.get_Body());
  },
  get_Body:function()
  {
   return this.Dom;
  },
  Render:function()
  {
   if(!this.IsRendered)
    {
     this.RenderInternal();
     this.IsRendered=true;
    }
  }
 },Pagelet,Element);
 Element.New=function(html,name)
 {
  var el,dom;
  el=new Element.New$1(html);
  dom=Global.document.createElement(name);
  el.RenderInternal=function()
  {
  };
  el.Dom=dom;
  el.IsRendered=false;
  return el;
 };
 Element.New$1=Runtime.Ctor(function(HtmlProvider)
 {
  Pagelet.New.call(this);
  this.HtmlProvider=HtmlProvider;
 },Element);
 DeprecatedTagBuilder=Client.DeprecatedTagBuilder=Runtime.Class({
  NewTag:function(name,children)
  {
   var el,e;
   el=Element.New(this.HtmlProvider,name);
   e=Enumerator.Get(children);
   try
   {
    while(e.MoveNext())
     el.AppendI(e.Current());
   }
   finally
   {
    if("Dispose"in e)
     e.Dispose();
   }
   return el;
  }
 },null,DeprecatedTagBuilder);
 DeprecatedTagBuilder.New=Runtime.Ctor(function(HtmlProvider)
 {
  this.HtmlProvider=HtmlProvider;
 },DeprecatedTagBuilder);
 TagBuilder=Client.TagBuilder=Runtime.Class({
  text:function(data)
  {
   return new Text.New(data);
  },
  NewTag:function(name,children)
  {
   var el,e;
   el=Element.New(this.HtmlProvider,name);
   e=Enumerator.Get(children);
   try
   {
    while(e.MoveNext())
     el.AppendI(e.Current());
   }
   finally
   {
    if("Dispose"in e)
     e.Dispose();
   }
   return el;
  }
 },null,TagBuilder);
 TagBuilder.New=Runtime.Ctor(function(HtmlProvider)
 {
  this.HtmlProvider=HtmlProvider;
 },TagBuilder);
 DeprecatedAttributeBuilder=Client.DeprecatedAttributeBuilder=Runtime.Class({
  NewAttr:function(name,value)
  {
   return Attribute.New(this.HtmlProvider,name,value);
  }
 },null,DeprecatedAttributeBuilder);
 DeprecatedAttributeBuilder.New=Runtime.Ctor(function(HtmlProvider)
 {
  this.HtmlProvider=HtmlProvider;
 },DeprecatedAttributeBuilder);
 AttributeBuilder=Client.AttributeBuilder=Runtime.Class({
  NewAttr:function(name,value)
  {
   return Attribute.New(this.HtmlProvider,name,value);
  }
 },null,AttributeBuilder);
 AttributeBuilder.New=Runtime.Ctor(function(HtmlProvider)
 {
  this.HtmlProvider=HtmlProvider;
 },AttributeBuilder);
 Operators.add=function(el,inner)
 {
  var e;
  e=Enumerator.Get(inner);
  try
  {
   while(e.MoveNext())
    el.AppendI(e.Current());
  }
  finally
  {
   if("Dispose"in e)
    e.Dispose();
  }
  return el;
 };
 Operators.OnBeforeRender=function(f,w)
 {
  var r;
  r=w.Render;
  w.Render=function()
  {
   f(w);
   r.apply(w);
  };
 };
 Operators.OnAfterRender=function(f,w)
 {
  var r;
  r=w.Render;
  w.Render=function()
  {
   r.apply(w);
   f(w);
  };
 };
 JQueryHtmlProvider=Implementation.JQueryHtmlProvider=Runtime.Class({
  OnDocumentReady:function(f)
  {
   var element;
   (element=Global.document,Global.jQuery(element)).ready(function()
   {
    return f();
   });
  },
  OnLoad:function(node,f)
  {
   Global.jQuery(node).ready(function()
   {
    return f();
   });
  },
  RemoveClass:function(node,cls)
  {
   Global.jQuery(node).removeClass(cls);
  },
  SetStyle:function(node,style)
  {
   Global.jQuery(node).attr("style",style);
  },
  SetCss:function(node,name,prop)
  {
   Global.jQuery(node).css(name,prop);
  },
  RemoveAttribute:function(node,name)
  {
   Global.jQuery(node).removeAttr(name);
  },
  SetProperty:function(node,name,value)
  {
   Global.jQuery(node).prop(name,value);
  },
  GetProperty:function(node,name)
  {
   return Global.jQuery(node).prop(name);
  },
  GetAttribute:function(node,name)
  {
   return Global.jQuery(node).attr(name);
  },
  HasAttribute:function(node,name)
  {
   return Global.jQuery(node).attr(name)!=null;
  },
  SetAttribute:function(node,name,value)
  {
   Global.jQuery(node).attr(name,value);
  },
  Remove:function(node)
  {
   Global.jQuery(node).remove();
  },
  SetValue:function(node,value)
  {
   Global.jQuery(node).val(value);
  },
  GetValue:function(node)
  {
   return Global.jQuery(node).val();
  },
  SetHtml:function(node,text)
  {
   Global.jQuery(node).html(text);
  },
  GetHtml:function(node)
  {
   return Global.jQuery(node).html();
  },
  Clear:function(node)
  {
   Global.jQuery(node).contents().detach();
  },
  AddClass:function(node,cls)
  {
   Global.jQuery(node).addClass(cls);
  },
  SetText:function(node,text)
  {
   node.textContent=text;
  },
  GetText:function(node)
  {
   return node.textContent;
  },
  AppendNode:function(node,el)
  {
   var _this;
   _this=Global.jQuery(node);
   _this.append.apply(_this,[Global.jQuery(el)].concat([]));
  },
  AppendAttribute:function(node,attr)
  {
   this.SetAttribute(node,attr.nodeName,attr.value);
  },
  CreateElement:function(name)
  {
   return Global.document.createElement(name);
  },
  CreateAttribute:function(str)
  {
   return Global.document.createAttribute(str);
  },
  CreateTextNode:function(str)
  {
   return Global.document.createTextNode(str);
  }
 },null,JQueryHtmlProvider);
 JQueryHtmlProvider.New=Runtime.Ctor(function()
 {
 },JQueryHtmlProvider);
 Implementation.DeprecatedHtml=function()
 {
  SC$1.$cctor();
  return SC$1.DeprecatedHtml;
 };
 Implementation.Tags=function()
 {
  SC$1.$cctor();
  return SC$1.Tags;
 };
 Implementation.Attr=function()
 {
  SC$1.$cctor();
  return SC$1.Attr;
 };
 Implementation.HtmlProvider=function()
 {
  SC$1.$cctor();
  return SC$1.HtmlProvider;
 };
 Default.OnLoad=function(init)
 {
  Implementation.HtmlProvider().OnDocumentReady(init);
 };
 Tags.Deprecated=function()
 {
  SC$1.$cctor();
  return SC$1.Deprecated;
 };
 Tags.Tags=function()
 {
  SC$1.$cctor();
  return SC$1.Tags$1;
 };
 Attr.Attr=function()
 {
  SC$1.$cctor();
  return SC$1.Attr$1;
 };
 SC$1.$cctor=Runtime.Cctor(function()
 {
  SC$1.HtmlProvider=new JQueryHtmlProvider.New();
  SC$1.Attr=new AttributeBuilder.New(Implementation.HtmlProvider());
  SC$1.Tags=new TagBuilder.New(Implementation.HtmlProvider());
  SC$1.DeprecatedHtml=new DeprecatedTagBuilder.New(Implementation.HtmlProvider());
  SC$1.Tags$1=Implementation.Tags();
  SC$1.Deprecated=Implementation.DeprecatedHtml();
  SC$1.Attr$1=Implementation.Attr();
  SC$1.$cctor=Global.ignore;
 });
 JQueryEventSupport=Events.JQueryEventSupport=Runtime.Class({
  OnMouse:function(name,f,el)
  {
   var _this,element;
   _this=(element=el.get_Body(),Global.jQuery(element));
   _this.on(name,function(ev)
   {
    return f(el,{
     X:ev.pageX,
     Y:ev.pageY,
     Event:ev
    });
   });
  },
  OnError:function(f,el)
  {
   var _this,element;
   _this=(element=el.get_Body(),Global.jQuery(element));
   _this.on("error",function(ev)
   {
    return(f(el))(ev);
   });
  },
  OnSubmit:function(f,el)
  {
   var _this,element;
   _this=(element=el.get_Body(),Global.jQuery(element));
   _this.on("submit",function(ev)
   {
    return(f(el))(ev);
   });
  },
  OnSelect:function(f,el)
  {
   var _this,element;
   _this=(element=el.get_Body(),Global.jQuery(element));
   _this.on("select",function(ev)
   {
    return(f(el))(ev);
   });
  },
  OnScroll:function(f,el)
  {
   var _this,element;
   _this=(element=el.get_Body(),Global.jQuery(element));
   _this.on("scroll",function(ev)
   {
    return(f(el))(ev);
   });
  },
  OnResize:function(f,el)
  {
   var _this,element;
   _this=(element=el.get_Body(),Global.jQuery(element));
   _this.on("resize",function(ev)
   {
    return(f(el))(ev);
   });
  },
  OnUnLoad:function(f,el)
  {
   var _this,element;
   _this=(element=el.get_Body(),Global.jQuery(element));
   _this.on("unload",function(ev)
   {
    return(f(el))(ev);
   });
  },
  OnLoad:function(f,el)
  {
   var _this,element;
   _this=(element=el.get_Body(),Global.jQuery(element));
   _this.on("load",function(ev)
   {
    return(f(el))(ev);
   });
  },
  OnFocus:function(f,el)
  {
   var _this,element;
   _this=(element=el.get_Body(),Global.jQuery(element));
   _this.on("focus",function(ev)
   {
    return(f(el))(ev);
   });
  },
  OnKeyUp:function(f,el)
  {
   var _this,element;
   _this=(element=el.get_Body(),Global.jQuery(element));
   _this.on("keyup",function(ev)
   {
    return(f(el))({
     KeyCode:ev.keyCode,
     Event:ev
    });
   });
  },
  OnKeyPress:function(f,el)
  {
   var _this,element,a;
   _this=(element=el.get_Body(),Global.jQuery(element));
   a=function(a$1,ev)
   {
    return(f(el))({
     CharacterCode:ev.which,
     Event:ev
    });
   };
   _this.keypress(function($1)
   {
    return a(this,$1);
   });
  },
  OnKeyDown:function(f,el)
  {
   var _this,element;
   _this=(element=el.get_Body(),Global.jQuery(element));
   _this.on("keydown",function(ev)
   {
    return(f(el))({
     KeyCode:ev.keyCode,
     Event:ev
    });
   });
  },
  OnMouseUp:function(f,el)
  {
   this.OnMouse("mouseup",function($1,$2)
   {
    return(f($1))($2);
   },el);
  },
  OnMouseOut:function(f,el)
  {
   this.OnMouse("mouseout",function($1,$2)
   {
    return(f($1))($2);
   },el);
  },
  OnMouseMove:function(f,el)
  {
   this.OnMouse("mousemove",function($1,$2)
   {
    return(f($1))($2);
   },el);
  },
  OnMouseLeave:function(f,el)
  {
   this.OnMouse("mouseleave",function($1,$2)
   {
    return(f($1))($2);
   },el);
  },
  OnMouseEnter:function(f,el)
  {
   this.OnMouse("mouseenter",function($1,$2)
   {
    return(f($1))($2);
   },el);
  },
  OnMouseDown:function(f,el)
  {
   this.OnMouse("mousedown",function($1,$2)
   {
    return(f($1))($2);
   },el);
  },
  OnDoubleClick:function(f,el)
  {
   this.OnMouse("dblclick",function($1,$2)
   {
    return(f($1))($2);
   },el);
  },
  OnClick:function(f,el)
  {
   this.OnMouse("click",function($1,$2)
   {
    return(f($1))($2);
   },el);
  },
  OnChange:function(f,el)
  {
   var _this,element;
   _this=(element=el.get_Body(),Global.jQuery(element));
   _this.on("change",function(ev)
   {
    return(f(el))(ev);
   });
  },
  OnBlur:function(f,el)
  {
   var _this,element;
   _this=(element=el.get_Body(),Global.jQuery(element));
   _this.on("blur",function(ev)
   {
    return(f(el))(ev);
   });
  },
  OnEvent:function(ev,f,el)
  {
   var _this,element;
   _this=(element=el.get_Body(),Global.jQuery(element));
   _this.on(ev,function(ev$1)
   {
    return(f(el))(ev$1);
   });
  }
 },null,JQueryEventSupport);
 JQueryEventSupport.New=Runtime.Ctor(function()
 {
 },JQueryEventSupport);
 EventsPervasives.Events=function()
 {
  SC$2.$cctor();
  return SC$2.Events;
 };
 SC$2.$cctor=Runtime.Cctor(function()
 {
  SC$2.Events=new JQueryEventSupport.New();
  SC$2.$cctor=Global.ignore;
 });
}());
