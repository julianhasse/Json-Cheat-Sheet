(function()
{
 "use strict";
 var FSharp,Collections,List,Tree,Patterns,String,List$1,Lines,SC$1,Markdown,Matching,Parser,ParsingContext,SC$2,WebSharper,CodeMirror,FSharp$1,Internal,Mode,SC$3,IntelliFactory,Markup,CodeBlocks,Internal$1,Common,Client,CodeBlock,UI,Next,Client$1,UI$1,Next$1,SC$4,Markdown$1,Common$1,RE,Client$2,UI$2,Next$2,FPishMarkup,Common$2,Matching$1,SC$5,Client$3,UI$3,Next$3,Seq,List$2,Unchecked,Operators,Strings,String$1,Arrays,Runtime,Slice,Char,Lazy,CodeMirror$1,Html,Client$4,Tags,Operators$1,Web,Attr,UI$4,Next$4,Doc,AttrProxy,AttrModule,Option,Collections$1,Dictionary,Attrs;
 FSharp=window.FSharp=window.FSharp||{};
 Collections=FSharp.Collections=FSharp.Collections||{};
 List=Collections.List=Collections.List||{};
 Tree=Collections.Tree=Collections.Tree||{};
 Patterns=FSharp.Patterns=FSharp.Patterns||{};
 String=Patterns.String=Patterns.String||{};
 List$1=Patterns.List=Patterns.List||{};
 Lines=Patterns.Lines=Patterns.Lines||{};
 SC$1=window.StartupCode$IntelliFactory_Markup$StringParsing=window.StartupCode$IntelliFactory_Markup$StringParsing||{};
 Markdown=FSharp.Markdown=FSharp.Markdown||{};
 Matching=Markdown.Matching=Markdown.Matching||{};
 Parser=Markdown.Parser=Markdown.Parser||{};
 ParsingContext=Parser.ParsingContext=Parser.ParsingContext||{};
 SC$2=window.StartupCode$IntelliFactory_Markup$MarkdownParser=window.StartupCode$IntelliFactory_Markup$MarkdownParser||{};
 WebSharper=window.WebSharper=window.WebSharper||{};
 CodeMirror=WebSharper.CodeMirror=WebSharper.CodeMirror||{};
 FSharp$1=CodeMirror.FSharp=CodeMirror.FSharp||{};
 Internal=FSharp$1.Internal=FSharp$1.Internal||{};
 Mode=FSharp$1.Mode=FSharp$1.Mode||{};
 SC$3=window.StartupCode$IntelliFactory_Markup$CodeMirror_FSharp=window.StartupCode$IntelliFactory_Markup$CodeMirror_FSharp||{};
 IntelliFactory=window.IntelliFactory=window.IntelliFactory||{};
 Markup=IntelliFactory.Markup=IntelliFactory.Markup||{};
 CodeBlocks=Markup.CodeBlocks=Markup.CodeBlocks||{};
 Internal$1=CodeBlocks.Internal=CodeBlocks.Internal||{};
 Common=Internal$1.Common=Internal$1.Common||{};
 Client=Internal$1.Client=Internal$1.Client||{};
 CodeBlock=Client.CodeBlock=Client.CodeBlock||{};
 UI=Internal$1.UI=Internal$1.UI||{};
 Next=UI.Next=UI.Next||{};
 Client$1=CodeBlocks.Client=CodeBlocks.Client||{};
 UI$1=CodeBlocks.UI=CodeBlocks.UI||{};
 Next$1=UI$1.Next=UI$1.Next||{};
 SC$4=window.StartupCode$IntelliFactory_Markup$CodeBlocks=window.StartupCode$IntelliFactory_Markup$CodeBlocks||{};
 Markdown$1=Markup.Markdown=Markup.Markdown||{};
 Common$1=Markdown$1.Common=Markdown$1.Common||{};
 RE=Common$1.RE=Common$1.RE||{};
 Client$2=Markdown$1.Client=Markdown$1.Client||{};
 UI$2=Markdown$1.UI=Markdown$1.UI||{};
 Next$2=UI$2.Next=UI$2.Next||{};
 FPishMarkup=Markup.FPishMarkup=Markup.FPishMarkup||{};
 Common$2=FPishMarkup.Common=FPishMarkup.Common||{};
 Matching$1=Common$2.Matching=Common$2.Matching||{};
 SC$5=window.StartupCode$IntelliFactory_Markup$FPishMarkup_Common=window.StartupCode$IntelliFactory_Markup$FPishMarkup_Common||{};
 Client$3=FPishMarkup.Client=FPishMarkup.Client||{};
 UI$3=FPishMarkup.UI=FPishMarkup.UI||{};
 Next$3=UI$3.Next=UI$3.Next||{};
 Seq=WebSharper&&WebSharper.Seq;
 List$2=WebSharper&&WebSharper.List;
 Unchecked=WebSharper&&WebSharper.Unchecked;
 Operators=WebSharper&&WebSharper.Operators;
 Strings=WebSharper&&WebSharper.Strings;
 String$1=window.String;
 Arrays=WebSharper&&WebSharper.Arrays;
 Runtime=IntelliFactory&&IntelliFactory.Runtime;
 Slice=WebSharper&&WebSharper.Slice;
 Char=WebSharper&&WebSharper.Char;
 Lazy=WebSharper&&WebSharper.Lazy;
 CodeMirror$1=window.CodeMirror;
 Html=WebSharper&&WebSharper.Html;
 Client$4=Html&&Html.Client;
 Tags=Client$4&&Client$4.Tags;
 Operators$1=Client$4&&Client$4.Operators;
 Web=WebSharper&&WebSharper.Web;
 Attr=Client$4&&Client$4.Attr;
 UI$4=WebSharper&&WebSharper.UI;
 Next$4=UI$4&&UI$4.Next;
 Doc=Next$4&&Next$4.Doc;
 AttrProxy=Next$4&&Next$4.AttrProxy;
 AttrModule=Next$4&&Next$4.AttrModule;
 Option=WebSharper&&WebSharper.Option;
 Collections$1=WebSharper&&WebSharper.Collections;
 Dictionary=Collections$1&&Collections$1.Dictionary;
 Attrs=Next$4&&Next$4.Attrs;
 List.nestUnderLastMatching=function(f,input)
 {
  function loop(input$1)
  {
   return Seq.delay(function()
   {
    var p,other,m,last;
    p=List.partitionUntil(f,input$1);
    other=p[1];
    m=List$2.rev(p[0]);
    return m.$==0?other.$===0?[]:(List.invalidArg("","Should start with true"),[]):(last=m.$0,Seq.append(Seq.map(function(p$1)
    {
     return[p$1,List$2.T.Empty];
    },List$2.rev(m.$1)),Seq.delay(function()
    {
     var p$1,g,rest;
     p$1=List.partitionUntil((g=function(v)
     {
      return!v;
     },function(x)
     {
      return g(f(x));
     }),other);
     rest=p$1[1];
     return Seq.append([[last,p$1[0]]],Seq.delay(function()
     {
      return loop(rest);
     }));
    })));
   });
  }
  return List$2.ofSeq(loop(input));
 };
 List.partitionUntilEquals=function(endl,input)
 {
  var acc,xs,x;
  acc=List$2.T.Empty;
  while(true)
   if(List.startsWith(endl,input))
    return{
     $:1,
     $0:[List$2.rev(acc),input]
    };
   else
    if(input.$==0)
     return null;
    else
     {
      xs=input.$1;
      x=input.$0;
      acc=new List$2.T({
       $:1,
       $0:x,
       $1:acc
      });
      input=xs;
     }
 };
 List.startsWith=function(start,list)
 {
  var $1,$2,$3;
  while(true)
   {
    $2=start;
    $3=list;
    if($2.$==1&&($3.$==1&&(Unchecked.Equals($2.$0,$3.$0)&&($1=[$2.$0,$2.$1,$3.$0,$3.$1],true))))
     {
      start=$1[1];
      list=$1[3];
     }
    else
     return $2.$==0&&true;
   }
 };
 List.iterInterleaved=function(f,g,input)
 {
  var tl,x,y;
  while(true)
   if(input.$==0)
    return null;
   else
    if(input.$1.$==0)
     return f(input.$0);
    else
     {
      tl=input.$1.$1;
      x=input.$0;
      y=input.$1.$0;
      f(x);
      g();
      input=new List$2.T({
       $:1,
       $0:y,
       $1:tl
      });
     }
 };
 List.partitionUntil=function(p,input)
 {
  var g;
  return List.partitionWhile((g=function(v)
  {
   return!v;
  },function(x)
  {
   return g(p(x));
  }),input);
 };
 List.partitionWhileLookahead=function(p,input)
 {
  var acc,$1;
  acc=List$2.T.Empty;
  while(true)
   {
    if(input.$==1&&(p(new List$2.T({
     $:1,
     $0:input.$0,
     $1:input.$1
    }))&&($1=[input.$0,input.$1],true)))
     {
      acc=new List$2.T({
       $:1,
       $0:$1[0],
       $1:acc
      });
      input=$1[1];
     }
    else
     return[List$2.rev(acc),input];
   }
 };
 List.partitionWhile=function(p,input)
 {
  var acc,$1;
  acc=List$2.T.Empty;
  while(true)
   {
    if(input.$==1&&(p(input.$0)&&($1=[input.$0,input.$1],true)))
     {
      acc=new List$2.T({
       $:1,
       $0:$1[0],
       $1:acc
      });
      input=$1[1];
     }
    else
     return[List$2.rev(acc),input];
   }
 };
 List.skipWhile=function(p,a)
 {
  var $1;
  while(true)
   {
    if(a.$==1&&(p(a.$0)&&($1=[a.$0,a.$1],true)))
     a=$1[1];
    else
     return a;
   }
 };
 List.skip=function(count,a)
 {
  var $1;
  return count===0?a:a.$==1&&(count>0&&($1=a.$1,true))?List.skip(count-1,$1):List.invalidArg("","Insufficient length");
 };
 List.singleton=function(v)
 {
  return List$2.ofArray([v]);
 };
 List.invalidArg=function(arg,msg)
 {
  return Operators.FailWith(arg+": "+msg);
 };
 Tree.ofIndentedList=function(input)
 {
  var p;
  p=Tree.takeAtLevel(0,input);
  p[1].$!==0?Operators.FailWith("Wrong indentation"):void 0;
  return p[0];
 };
 Tree.takeDeeperThan=function(indent,tail)
 {
  var $1,i,p,p$1;
  return tail.$==1&&(Unchecked.Compare(tail.$0[0],indent)===1&&($1=[tail.$0[0],tail.$1,tail.$0[1]],true))?(i=$1[0],(p=Tree.takeDeeperThan(i,$1[1]),(p$1=Tree.takeAtLevel(i,p[1]),[new List$2.T({
   $:1,
   $0:{
    $:0,
    $0:$1[2],
    $1:p[0]
   },
   $1:p$1[0]
  }),p$1[1]]))):[List$2.T.Empty,tail];
 };
 Tree.takeAtLevel=function(indent,tail)
 {
  var $1,p,p$1;
  return tail.$==1&&(Unchecked.Compare(tail.$0[0],indent)>=0&&($1=[tail.$0[0],tail.$1,tail.$0[1]],true))?(p=Tree.takeDeeperThan($1[0],$1[1]),(p$1=Tree.takeAtLevel(indent,p[1]),[new List$2.T({
   $:1,
   $0:{
    $:0,
    $0:$1[2],
    $1:p[0]
   },
   $1:p$1[0]
  }),p$1[1]])):[List$2.T.Empty,tail];
 };
 String.EqualsRepeated=function(repeated,a)
 {
  var $1,a$1;
  return(a$1=String.StartsWithRepeated(repeated,a),a$1!=null&&a$1.$==1&&(a$1.$0[1]===""&&($1=a$1.$0[0],true)))?{
   $:1,
   $0:null
  }:null;
 };
 String.StartsWithWrapped=function(starts,ends,text)
 {
  var id;
  return Strings.StartsWith(text,starts)?(id=text.indexOf(ends,starts.length),id>=0?{
   $:1,
   $0:[Strings.Substring(text,starts.length,id-starts.length),Strings.Substring(text,id+ends.length,text.length-id-ends.length)]
  }:null):null;
 };
 String.StartsWithRepeated=function(repeated,text)
 {
  var n;
  n=function(i)
  {
   while(true)
    if(i===text.length)
     return i;
    else
     if(text.charCodeAt(i)!==repeated.charCodeAt(i%repeated.length))
      return i;
     else
      i=i+1;
  }(0);
  return n===0||n%repeated.length!==0?null:{
   $:1,
   $0:[n/repeated.length>>0,Strings.Substring(text,n,text.length-n)]
  };
 };
 String.StartsAndEndsWithTrim=function(a,a$1,a$2)
 {
  var a$3;
  a$3=String.StartsAndEndsWith(a,a$1,a$2);
  return a$3!=null&&a$3.$==1?{
   $:1,
   $0:Strings.Trim(a$3.$0)
  }:null;
 };
 String.StartsAndEndsWith=function(starts,ends,s)
 {
  return Strings.StartsWith(s,starts)&&Strings.EndsWith(s,ends)&&s.length>=starts.length+ends.length?{
   $:1,
   $0:Strings.Substring(s,starts.length,s.length-starts.length-ends.length)
  }:null;
 };
 String.StartsWithTrim=function(start,text)
 {
  return Strings.StartsWith(text,start)?{
   $:1,
   $0:Strings.Trim(text.substring(start.length))
  }:null;
 };
 String.StartsWith=function(start,text)
 {
  return Strings.StartsWith(text,start)?{
   $:1,
   $0:text.substring(start.length)
  }:null;
 };
 String.StartsWithAny=function(starts,text)
 {
  return Seq.exists(function(a)
  {
   return Strings.StartsWith(text,a);
  },starts)?{
   $:1,
   $0:null
  }:null;
 };
 String.TrimStartAndCount=function(text)
 {
  var trimmed;
  trimmed=text.replace(new window.RegExp("^\\s+"),"");
  return[text.length-trimmed.length,trimmed];
 };
 String.TrimEndUsing=function(_char,text)
 {
  return text.replace(new window.RegExp(String$1.fromCharCode(_char)+"+$"),"");
 };
 String.TrimStartUsing=function(_char,text)
 {
  return text.replace(new window.RegExp("^"+String$1.fromCharCode(_char)+"+"),"");
 };
 String.Unindented=function(s)
 {
  return!(s==null||(new window.RegExp("^\\s*$")).test(s))&&s.replace(new window.RegExp("^\\s+"),"")===s?{
   $:1,
   $0:null
  }:null;
 };
 String.WhiteSpace=function(s)
 {
  return s==null||(new window.RegExp("^\\s*$")).test(s)?{
   $:1,
   $0:null
  }:null;
 };
 List$1.AsString=function(chars)
 {
  return String$1.fromCharCode.apply(void 0,Arrays.ofList(chars));
 };
 List$1.BracketDelimited=function(startc,endc,input)
 {
  var $1;
  return input.$==1&&(input.$0===startc&&($1=[input.$0,input.$1],true))?function(acc,count,a)
  {
   var $2,$3,$4,$5,xs,x;
   while(true)
    {
     if(a.$==1&&(a.$0===92&&(a.$1.$==1&&(a.$1.$0===endc&&($2=[a.$1.$0,a.$1.$1],true)))))
      {
       acc=new List$2.T({
        $:1,
        $0:$2[0],
        $1:acc
       });
       a=$2[1];
      }
     else
      if(a.$==1&&(a.$0===endc&&count===0&&($3=[a.$0,a.$1],true)))
       return{
        $:1,
        $0:[List$2.rev(acc),$3[1]]
       };
      else
       if(a.$==1&&(a.$0===endc&&($4=[a.$0,a.$1],true)))
        {
         acc=new List$2.T({
          $:1,
          $0:$4[0],
          $1:acc
         });
         count=count-1;
         a=$4[1];
        }
       else
        if(a.$==1&&(a.$0===startc&&($5=[a.$0,a.$1],true)))
         {
          acc=new List$2.T({
           $:1,
           $0:$5[0],
           $1:acc
          });
          count=count+1;
          a=$5[1];
         }
        else
         if(a.$==0)
          return null;
         else
          {
           xs=a.$1;
           x=a.$0;
           acc=new List$2.T({
            $:1,
            $0:x,
            $1:acc
           });
           a=xs;
          }
    }
  }(List$2.T.Empty,0,$1[1]):null;
 };
 List$1.LinkStartsWith=function(startl,input)
 {
  return List$1.customStartWith(startl,input)?{
   $:1,
   $0:input
  }:null;
 };
 List$1.StartsWith=function(startl,input)
 {
  return List.startsWith(startl,input)?{
   $:1,
   $0:input
  }:null;
 };
 List$1.Delimited=function(str)
 {
  return function(i)
  {
   return List$1.DelimitedWith(str,str,i);
  };
 };
 List$1.LinkDelimitedWith=function(startl,endl,input)
 {
  var m;
  return List$1.customStartWith(startl,input)?(m=List.partitionUntilEquals(endl,List.skip(startl.get_Length(),input)),m==null?null:{
   $:1,
   $0:[m.$0[0],List.skip(endl.get_Length(),m.$0[1])]
  }):null;
 };
 List$1.DelimitedWith=function(startl,endl,input)
 {
  var m;
  return List.startsWith(startl,input)?(m=List.partitionUntilEquals(endl,List.skip(startl.get_Length(),input)),m==null?null:{
   $:1,
   $0:[m.$0[0],List.skip(endl.get_Length(),m.$0[1])]
  }):null;
 };
 List$1.customStartWith=function(ptrn,inp)
 {
  var $1,$2;
  while(true)
   {
    $1=ptrn;
    $2=inp;
    if($1.$==1)
    {
     if($2.$==1)
     {
      if(String$1.fromCharCode($1.$0).toLowerCase()===String$1.fromCharCode($2.$0).toLowerCase())
       {
        ptrn=$1.$1;
        inp=$2.$1;
       }
      else
       return false;
     }
     else
      return false;
    }
    else
     return $2.$==0||true;
   }
 };
 Lines.TrimBlankStart=function()
 {
  SC$1.$cctor();
  return SC$1["|TrimBlankStart|"];
 };
 Lines.TakeStartingWithOrBlank=function(start,input)
 {
  var m;
  m=List.partitionWhile(function(s)
  {
   return s==null||(new window.RegExp("^\\s*$")).test(s)||Strings.StartsWith(s,start);
  },input);
  return m[0].$!==0?{
   $:1,
   $0:[m[0],m[1]]
  }:null;
 };
 Lines.TrimBlank=function(lines)
 {
  return List$2.rev(List.skipWhile(function(s)
  {
   return s==null||(new window.RegExp("^\\s*$")).test(s);
  },List$2.rev(List.skipWhile(function(s)
  {
   return s==null||(new window.RegExp("^\\s*$")).test(s);
  },lines))));
 };
 SC$1.$cctor=Runtime.Cctor(function()
 {
  SC$1["|TrimBlankStart|"]=function(a)
  {
   return List.skipWhile(function(s)
   {
    return s==null||(new window.RegExp("^\\s*$")).test(s);
   },a);
  };
  SC$1.$cctor=window.ignore;
 });
 Matching.ParagraphNested=function(a,pars)
 {
  var par,alignments,rows,n;
  par=a.$0;
  return par.$==4?{
   $:4,
   $0:par.$0,
   $1:pars
  }:par.$==5?{
   $:5,
   $0:List$2.concat(pars)
  }:par.$==8?(alignments=par.$1,(rows=(n=alignments.get_Length(),function(n$1,left,ansList,curList,items)
  {
   while(true)
    if(items.$==0&&curList.$==0)
     return List$2.rev(ansList);
    else
     if(left===0||items.$==0)
      {
       left=n$1;
       ansList=new List$2.T({
        $:1,
        $0:List$2.rev(curList),
        $1:ansList
       });
       curList=List$2.T.Empty;
      }
     else
      {
       left=left-1;
       curList=new List$2.T({
        $:1,
        $0:List$2.head(items),
        $1:curList
       });
       items=List$2.tail(items);
      }
  }(n,n,List$2.T.Empty,List$2.T.Empty,pars)),rows.$==0||par.$0==null?{
   $:8,
   $0:null,
   $1:alignments,
   $2:rows
  }:{
   $:8,
   $0:{
    $:1,
    $0:List$2.head(rows)
   },
   $1:alignments,
   $2:List$2.tail(rows)
  })):Operators.FailWith("Incorrect ParagraphNestedInfo.");
 };
 Matching.ParagraphLeaf=function(a)
 {
  return a.$0;
 };
 Matching.ParagraphSpans=function(a,spans)
 {
  var par;
  par=a.$0;
  return par.$==0?{
   $:0,
   $0:par.$0,
   $1:spans
  }:par.$==1?{
   $:1,
   $0:spans
  }:par.$==6?{
   $:6,
   $0:spans
  }:Operators.FailWith("Incorrect ParagraphSpansInfo.");
 };
 Matching.ParagraphLeaf$1=function(par)
 {
  var $1,headers;
  switch(par.$==1?($1=par.$0,0):par.$==6?($1=par.$0,0):par.$==2?1:par.$==3?1:par.$==7?1:par.$==4?2:par.$==5?3:par.$==8?4:($1=par.$1,0))
  {
   case 0:
    return{
     $:2,
     $0:[{
      $:0,
      $0:par
     },$1]
    };
    break;
   case 1:
    return{
     $:0,
     $0:{
      $:0,
      $0:par
     }
    };
    break;
   case 2:
    return{
     $:1,
     $0:[{
      $:0,
      $0:par
     },par.$1]
    };
    break;
   case 3:
    return{
     $:1,
     $0:[{
      $:0,
      $0:par
     },List$2.ofArray([par.$0])]
    };
    break;
   case 4:
    headers=par.$0;
    return headers!=null&&headers.$==1?{
     $:1,
     $0:[{
      $:0,
      $0:par
     },List$2.concat(new List$2.T({
      $:1,
      $0:headers.$0,
      $1:par.$2
     }))]
    }:{
     $:1,
     $0:[{
      $:0,
      $0:par
     },List$2.concat(par.$2)]
    };
    break;
  }
 };
 Matching.SpanNode=function(a,spans)
 {
  var span;
  span=a.$0;
  return span.$==2?{
   $:2,
   $0:spans
  }:span.$==3?{
   $:3,
   $0:spans
  }:span.$==4?{
   $:4,
   $0:spans,
   $1:span.$1
  }:span.$==5?{
   $:5,
   $0:spans,
   $1:span.$1,
   $2:span.$2
  }:Operators.FailWith("Incorrect SpanNodeInfo");
 };
 Matching.SpanLeaf=function(a)
 {
  return a.$0;
 };
 Matching.SpanLeaf$1=function(span)
 {
  var $1;
  return span.$==1||(span.$==6||(span.$==7||(span.$==8||(span.$==2?($1=span.$0,false):span.$==3?($1=span.$0,false):span.$==4?($1=span.$0,false):span.$==5?($1=span.$0,false):true))))?{
   $:0,
   $0:{
    $:0,
    $0:span
   }
  }:{
   $:1,
   $0:[{
    $:0,
    $0:span
   },$1]
  };
 };
 ParsingContext.New=function(RootDocUrl,Links,Newline)
 {
  return{
   RootDocUrl:RootDocUrl,
   Links:Links,
   Newline:Newline
  };
 };
 Parser.parseParagraphs=function(ctx,lines)
 {
  var tagStack;
  function loop(ctx$1,lines$1)
  {
   return Seq.delay(function()
   {
    var a,lines$2,a$1,lines$3,a$2,rest,$1,a$3,a$4,headers,rest$1,m,$2,$3,a$5,rest$2,a$6,lines$4,a$7,lines$5,a$8,rest$3;
    function formatTree(nodes)
    {
     return{
      $:4,
      $0:nodes.$==1?nodes.$0.$0[1]:{
       $:1
      },
      $1:List$2.ofSeq(Seq.delay(function()
      {
       return Seq.collect(function(m$1)
       {
        var simple,nested,body;
        simple=m$1.$0[0];
        nested=m$1.$1;
        body=m$1.$0[2];
        return[List$2.ofSeq(Seq.delay(function()
        {
         return Seq.append(!simple?loop(ctx$1,body):[{
          $:6,
          $0:Parser.parseSpans(Strings.concat(ctx$1.Newline,body))
         }],Seq.delay(function()
         {
          return nested.$!==0?[formatTree(nested)]:[];
         }));
        }))];
       },nodes);
      }))
     };
    }
    a=Parser.LinkDefinition(lines$1);
    return a!=null&&a.$==1?(lines$2=(Lines.TrimBlankStart())(a.$0[1]),(ctx$1.Links.Add(a.$0[0][0],Parser.getLinkAndTitle(a.$0[0][1])),loop(ctx$1,lines$2))):(a$1=Parser.CodeBlockType(lines$1),a$1!=null&&a$1.$==1?(lines$3=(Lines.TrimBlankStart())(a$1.$0[1]),Seq.append([{
     $:2,
     $0:a$1.$0[0]
    }],Seq.delay(function()
    {
     return loop(ctx$1,lines$3);
    }))):(a$2=Parser.Blockquote(lines$1),a$2!=null&&a$2.$==1?(rest=(Lines.TrimBlankStart())(a$2.$0[1]),Seq.append([{
     $:5,
     $0:List$2.ofSeq(loop(ctx$1,a$2.$0[0]))
    }],Seq.delay(function()
    {
     return loop(ctx$1,rest);
    }))):(a$3=Parser.EmacsTableBlock(lines$1),a$3!=null&&a$3.$==1?($1=[a$3.$0[0][1],a$3.$0[0][0],(Lines.TrimBlankStart())(a$3.$0[1]),a$3.$0[0][2]],true):(a$4=Parser.PipeTableBlock(lines$1),a$4!=null&&a$4.$==1&&($1=[a$4.$0[0][1],a$4.$0[0][0],(Lines.TrimBlankStart())(a$4.$0[1]),a$4.$0[0][2]],true)))?(headers=$1[1],(rest$1=$1[2],Seq.append([{
     $:8,
     $0:headers==null?null:{
      $:1,
      $0:List$2.map(function(i)
      {
       return List$2.ofSeq(loop(ctx$1,i));
      },headers.$0)
     },
     $1:$1[0],
     $2:List$2.map((m=function(i)
     {
      return List$2.ofSeq(loop(ctx$1,i));
     },function(l)
     {
      return List$2.map(m,l);
     }),$1[3])
    }],Seq.delay(function()
    {
     return loop(ctx$1,rest$1);
    })))):lines$1.$==1&&(($3=Parser.HorizontalRule(lines$1.$0),$3!=null&&$3.$==1)&&($2=(Lines.TrimBlankStart())(lines$1.$1),true))?Seq.append([{
     $:7
    }],Seq.delay(function()
    {
     return loop(ctx$1,$2);
    })):(a$5=Parser.ListItems(true,lines$1),a$5!=null&&a$5.$==1?(rest$2=(Lines.TrimBlankStart())(a$5.$0[1]),Seq.append([formatTree(Tree.ofIndentedList(a$5.$0[0]))],Seq.delay(function()
    {
     return loop(ctx$1,rest$2);
    }))):(a$6=Parser.Heading(lines$1),a$6!=null&&a$6.$==1?(lines$4=(Lines.TrimBlankStart())(a$6.$0[2]),Seq.append([{
     $:0,
     $0:a$6.$0[0],
     $1:Parser.parseSpans(a$6.$0[1])
    }],Seq.delay(function()
    {
     return loop(ctx$1,lines$4);
    }))):(a$7=Parser.HtmlBlock(lines$1),a$7!=null&&a$7.$==1?(lines$5=(Lines.TrimBlankStart())(a$7.$0[1]),Seq.append([{
     $:3,
     $0:Strings.concat(ctx$1.Newline,a$7.$0[0]).replace(new window.RegExp("<[^<>]+>","gi"),function(s)
     {
      return Parser.parseTag(tagStack,Slice.string(s,{
       $:1,
       $0:1
      },{
       $:1,
       $0:s.length-2
      }));
     })
    }],Seq.delay(function()
    {
     return loop(ctx$1,lines$5);
    }))):(a$8=Parser.TakeParagraphLines(lines$1),a$8!=null&&a$8.$==1?(rest$3=(Lines.TrimBlankStart())(a$8.$0[1]),Seq.append([{
     $:1,
     $0:Parser.parseSpans(Strings.concat(ctx$1.Newline,a$8.$0[0]))
    }],Seq.delay(function()
    {
     return loop(ctx$1,rest$3);
    }))):(Lines.TrimBlankStart())(lines$1).$==0?tagStack.length>0?[{
     $:6,
     $0:List$2.ofSeq(Seq.delay(function()
     {
      return Seq.enumWhile(function()
      {
       return tagStack.length>0;
      },Seq.delay(function()
      {
       return[{
        $:0,
        $0:"</"+tagStack.shift()+">"
       }];
      }));
     }))
    }]:[]:(Operators.FailWith("Unexpectedly stopped!\n"+Strings.concat("\n",lines$1)),[])))))));
   });
  }
  tagStack=[];
  return loop(ctx,(Lines.TrimBlankStart())(lines));
 };
 Parser.LinkDefinition=function(a)
 {
  var $1,a$1,a$2,a$3,a$4;
  return a.$==1&&(a$1=String.StartsWithWrapped("[","]:",a.$0),a$1!=null&&a$1.$==1?($1=[Strings.Trim(a$1.$0[1]),a.$1,a$1.$0[0]],true):(a$2=String.StartsWithWrapped(" [","]:",a.$0),a$2!=null&&a$2.$==1?($1=[Strings.Trim(a$2.$0[1]),a.$1,a$2.$0[0]],true):(a$3=String.StartsWithWrapped("  [","]:",a.$0),a$3!=null&&a$3.$==1?($1=[Strings.Trim(a$3.$0[1]),a.$1,a$3.$0[0]],true):(a$4=String.StartsWithWrapped("   [","]:",a.$0),a$4!=null&&a$4.$==1&&($1=[Strings.Trim(a$4.$0[1]),a.$1,a$4.$0[0]],true)))))?{
   $:1,
   $0:[[$1[2],$1[0]],$1[1]]
  }:null;
 };
 Parser.Blockquote=function(a)
 {
  var $1,a$1,a$2,rest,p,a$3;
  return a.$==1&&(a$1=Parser.BlockquoteStart(a.$0),a$1!=null&&a$1.$==1&&(a$2=(Parser.LinesUntilBlockquoteOrWhite())(a.$1),($1=[a$2[0],a$1.$0,(Lines.TrimBlankStart())(a$2[1])],true)))?(rest=$1[2],(p=(a$3=Parser.Blockquote(rest),a$3!=null&&a$3.$==1?[a$3.$0[0],a$3.$0[1]]:[List$2.T.Empty,rest]),{
   $:1,
   $0:[List$2.append(new List$2.T({
    $:1,
    $0:$1[1],
    $1:$1[0]
   }),p[0]),p[1]]
  })):null;
 };
 Parser.LinesUntilBlockquoteOrWhite=function()
 {
  SC$2.$cctor();
  return SC$2["|LinesUntilBlockquoteOrWhite|"];
 };
 Parser.HtmlBlock=function(a)
 {
  var $1,$2,a$1;
  return a.$==1&&(($2=Parser.StartsWithHtmlTag(a.$0),$2!=null&&$2.$==1)&&(a$1=Parser.TakeParagraphLines(a),a$1!=null&&a$1.$==1&&($1=[a$1.$0[0],a$1.$0[1]],true)))?{
   $:1,
   $0:[$1[0],$1[1]]
  }:null;
 };
 Parser.StartsWithHtmlTag=function(a)
 {
  var l;
  function loop(i)
  {
   while(true)
    if(i>=l.length)
     return null;
    else
     if(Char.IsLetterOrDigit(l.charCodeAt(i)))
      i=i+1;
     else
      return Char.IsWhiteSpace(l.charCodeAt(i))||l.charCodeAt(i)===62?{
       $:1,
       $0:null
      }:null;
  }
  l=a.replace(new window.RegExp("^\\s+"),"");
  return Strings.StartsWith(l,"<")?l.length<=1?null:l.charCodeAt(1)===47?loop(2):loop(1):null;
 };
 Parser.TakeParagraphLines=function(input)
 {
  var m;
  m=List.partitionWhileLookahead(function(a)
  {
   var $1,$2,$3,$4;
   return($1=Parser.Heading(a),$1!=null&&$1.$==1)?false:a.$==1?($2=Parser.BlockquoteStart(a.$0),$2!=null&&$2.$==1)?false:($3=Parser.FencedCodeStart(a.$0),$3!=null&&$3.$==1)?false:($4=String.WhiteSpace(a.$0),$4!=null&&$4.$==1)?false:true:true;
  },input);
  return m[0].$!==0?{
   $:1,
   $0:[m[0],m[1]]
  }:null;
 };
 Parser.BlockquoteStart=function(line)
 {
  var i;
  i=0;
  while(true)
   if(i===4||i===line.length)
    return null;
   else
    if(line.charCodeAt(i)===62)
     return{
      $:1,
      $0:line.substring(i+1===line.length||line.charCodeAt(i+1)!==32?i+1:i+2)
     };
    else
     if(line.charCodeAt(i)===32)
      i=i+1;
     else
      return null;
 };
 Parser.EmacsTableBlock=function(input)
 {
  var isCellSep,f,g,isHeadCellSep,f$1,g$1,isText,$1,a,g$2,grid,alignments,emptyCur;
  isCellSep=(f=function(a$1)
  {
   return String.EqualsRepeated("-",a$1);
  },(g=function(o)
  {
   return o!=null;
  },function(x)
  {
   return g(f(x));
  }));
  isHeadCellSep=(f$1=function(a$1)
  {
   return String.EqualsRepeated("=",a$1);
  },(g$1=function(o)
  {
   return o!=null;
  },function(x)
  {
   return g$1(f$1(x));
  }));
  isText=function()
  {
   return true;
  };
  return input.$==1&&(a=Parser.EmacsTableLine(null,43,(g$2=function(o)
  {
   return o!=null;
  },function(x)
  {
   return g$2(Parser.TableCellSeparator(x));
  }),input.$0),a!=null&&a.$==1&&($1=[a.$0[0],a.$0[1],input.$1],true))?(grid=$1[0],(alignments=List$2.choose(Parser.TableCellSeparator,$1[1]),(emptyCur=List$2.replicate(Arrays.length(grid)-1,List$2.T.Empty),function(flag,headers,prevRows,cur,a$1)
  {
   var $2,a$2,x,m,$3,$4,$5,$6;
   while(true)
    {
     if(a$1.$==1&&(a$2=Parser.EmacsTableLine({
      $:1,
      $0:grid
     },124,isText,a$1.$0),a$2!=null&&a$2.$==1&&($2=[a$1.$1,a$2.$0[1]],true)))
      {
       flag=false;
       cur=(x=List$2.zip($2[1],cur),m=function(a$3,t)
       {
        return new List$2.T({
         $:1,
         $0:a$3.replace(new window.RegExp("\\s+$"),""),
         $1:t
        });
       },(function(m$1)
       {
        return function(l)
        {
         return List$2.map(m$1,l);
        };
       }(function($7)
       {
        return m($7[0],$7[1]);
       }))(x));
       a$1=$2[0];
      }
     else
      if(a$1.$==1&&(($4=Parser.EmacsTableLine({
       $:1,
       $0:grid
      },43,isCellSep,a$1.$0),$4!=null&&$4.$==1)&&($3=a$1.$1,true)))
       {
        flag=true;
        prevRows=new List$2.T({
         $:1,
         $0:List$2.map(List$2.rev,cur),
         $1:prevRows
        });
        cur=emptyCur;
        a$1=$3;
       }
      else
       if(a$1.$==1&&(($6=Parser.EmacsTableLine({
        $:1,
        $0:grid
       },43,isHeadCellSep,a$1.$0),$6!=null&&$6.$==1)&&(headers==null&&($5=a$1.$1,true))))
        {
         flag=true;
         headers={
          $:1,
          $0:List$2.map(List$2.rev,cur)
         };
         cur=emptyCur;
         a$1=$5;
        }
       else
        return flag?{
         $:1,
         $0:[[headers,alignments,List$2.rev(prevRows)],a$1]
        }:null;
    }
  }(true,null,List$2.T.Empty,emptyCur,$1[2])))):null;
 };
 Parser.EmacsTableLine=function(grid,c,check,line)
 {
  var p,n,parts;
  p=grid!=null?grid.$0:Arrays.filter(function(i)
  {
   return line.charCodeAt(i)===c;
  },Arrays.ofSeq(Operators.range(0,line.length-1)));
  n=Arrays.length(p)-1;
  return n<2||line.length<=Arrays.get(p,n)||Arrays.exists(function(i)
  {
   return line.charCodeAt(i)!==c;
  },p)?null:(parts=List$2.map(function(i)
  {
   return Strings.Substring(line,Arrays.get(p,i-1)+1,Arrays.get(p,i)-Arrays.get(p,i-1)-1);
  },List$2.ofSeq(Operators.range(1,n))),List$2.forAll(check,parts)?{
   $:1,
   $0:[p,parts]
  }:null);
 };
 Parser.PipeTableBlock=function(input)
 {
  var $1,a,alignments,p,$2,a$1,headers,rest,$3,a$2,p$1;
  function getTableRows(size,acc,a$3)
  {
   var $4,a$4;
   while(true)
    {
     if(a$3.$==1&&(a$4=Parser.PipeTableRow(size,[124],a$3.$0),a$4!=null&&a$4.$==1&&($4=[a$4.$0,a$3.$1],true)))
      {
       acc=new List$2.T({
        $:1,
        $0:List$2.map(function(l)
        {
         return List$2.ofArray([l]);
        },$4[0]),
        $1:acc
       });
       a$3=$4[1];
      }
     else
      return[List$2.rev(acc),a$3];
    }
  }
  return input.$==1&&(a=Parser.PipeSeparatorRow(null,input.$0),a!=null&&a.$==1&&($1=[a.$0,input.$1],true))?(alignments=$1[0],(p=getTableRows({
   $:1,
   $0:alignments.get_Length()
  },List$2.T.Empty,$1[1]),{
   $:1,
   $0:[[null,alignments,p[0]],p[1]]
  })):input.$==1&&(a$1=Parser.PipeTableRow(null,[124],input.$0),a$1!=null&&a$1.$==1&&($2=[a$1.$0,input.$1],true))?(headers=$2[0],(rest=$2[1],rest.$==1&&(a$2=Parser.PipeSeparatorRow({
   $:1,
   $0:headers.get_Length()
  },rest.$0),a$2!=null&&a$2.$==1&&($3=[a$2.$0,rest.$1],true))?(p$1=getTableRows({
   $:1,
   $0:headers.get_Length()
  },List$2.T.Empty,$3[1]),{
   $:1,
   $0:[[{
    $:1,
    $0:List$2.map(function(l)
    {
     return List$2.ofArray([l]);
    },headers)
   },$3[0],p$1[0]],p$1[1]]
  }):null)):null;
 };
 Parser.PipeSeparatorRow=function(size,a)
 {
  var a$1,parts,alignments;
  a$1=Parser.PipeTableRow(size,[124,43],a);
  return a$1!=null&&a$1.$==1?(parts=a$1.$0,(alignments=List$2.choose(Parser.TableCellSeparator,parts),parts.get_Length()!==alignments.get_Length()?null:{
   $:1,
   $0:alignments
  })):null;
 };
 Parser.PipeTableRow=function(size,delimiters,line)
 {
  var parts,n,m,x,y;
  parts=Arrays.map(Strings.Trim,Strings.SplitChars(line,delimiters,0));
  return Arrays.length(parts)===0?null:(n=Arrays.length(parts),(m=size==null?1:size.$0,(x=Strings.IsNullOrEmpty(Arrays.get(parts,0))&&n>m?1:0,(y=Strings.IsNullOrEmpty(Arrays.get(parts,n-1))&&n-x>m?n-2:n-1,n===1||size!=null&&y-x+1!==m?null:{
   $:1,
   $0:List$2.ofArray(Slice.array(parts,{
    $:1,
    $0:x
   },{
    $:1,
    $0:y
   }))
  }))));
 };
 Parser.TableCellSeparator=function(a)
 {
  var $1,a$1,$2,$3,a$2,$4,$5,a$3,$6,$7;
  return(a$1=String.StartsAndEndsWith(":",":",a),a$1!=null&&a$1.$==1&&(($2=String.EqualsRepeated("-",a$1.$0),$2!=null&&$2.$==1)&&true))?{
   $:1,
   $0:{
    $:2
   }
  }:(a$2=String.StartsWith(":",a),a$2!=null&&a$2.$==1&&(($4=String.EqualsRepeated("-",a$2.$0),$4!=null&&$4.$==1)&&true))?{
   $:1,
   $0:{
    $:0
   }
  }:(a$3=String.StartsAndEndsWith("",":",a),a$3!=null&&a$3.$==1&&(($6=String.EqualsRepeated("-",a$3.$0),$6!=null&&$6.$==1)&&true))?{
   $:1,
   $0:{
    $:1
   }
  }:($7=String.EqualsRepeated("-",a),$7!=null&&$7.$==1)?{
   $:1,
   $0:{
    $:3
   }
  }:null;
 };
 Parser.ListItems=function(prevSimple,a)
 {
  var a$1,indent,info,rest,$1,$2,a$2;
  a$1=Parser.ListItem(prevSimple,a);
  return a$1!=null&&a$1.$==1?(indent=a$1.$0[0],(info=a$1.$0[1],(rest=a$1.$0[2],rest.$==1&&(($2=Parser.HorizontalRule(rest.$0),$2!=null&&$2.$==1)&&true)?{
   $:1,
   $0:[List$2.ofArray([[indent,info]]),rest]
  }:(a$2=Parser.ListItems(a$1.$0[1][0],rest),a$2!=null&&a$2.$==1?{
   $:1,
   $0:[new List$2.T({
    $:1,
    $0:[indent,info],
    $1:a$2.$0[0]
   }),a$2.$0[1]]
  }:{
   $:1,
   $0:[List$2.ofArray([[indent,info]]),rest]
  })))):null;
 };
 Parser.ListItem=function(prevSimple,a)
 {
  var $1,a$1,a$2,a$3,continued,item,more,rest,$2,$3,$4,$5,$6,$7,$8;
  return a.$==1&&(a$1=Parser.ListStart(a.$0),a$1!=null&&a$1.$==1&&(a$2=(Parser.LinesUntilListOrWhite())(a.$1),(a$3=(Parser.LinesUntilListOrUnindented())(a$2[1]),($1=[a$2[0],a$1.$0[1],a$1.$0[2],a$1.$0[0],a$3[0],a$2[1],a$3[1]],true))))?(continued=$1[0],(item=$1[2],(more=$1[4],(rest=$1[6],{
   $:1,
   $0:[$1[1],[($2=$1[5],$2.$==1&&(($4=String.WhiteSpace($2.$0),$4!=null&&$4.$==1)&&(rest.$==1&&(($5=Parser.ListStart(rest.$0),$5!=null&&$5.$==1)&&true)))?false:$2.$==1&&(($7=Parser.ListStart($2.$0),$7!=null&&$7.$==1)&&true)||($2.$==0||rest.$==1&&(($8=String.Unindented(rest.$0),$8!=null&&$8.$==1)&&prevSimple))),$1[3],List$2.ofSeq(Seq.delay(function()
   {
    return Seq.append([item],Seq.delay(function()
    {
     return Seq.append(Seq.map(Strings.Trim,continued),Seq.delay(function()
     {
      return Seq.collect(function(line)
      {
       var trimmed;
       trimmed=line.replace(new window.RegExp("^\\s+"),"");
       return trimmed.length>=line.length-4?[trimmed]:[line.substring(4)];
      },more);
     }));
    }));
   }))],rest]
  })))):null;
 };
 Parser.LinesUntilListOrUnindented=function()
 {
  SC$2.$cctor();
  return SC$2["|LinesUntilListOrUnindented|"];
 };
 Parser.LinesUntilListOrWhite=function()
 {
  SC$2.$cctor();
  return SC$2["|LinesUntilListOrWhite|"];
 };
 Parser.ListStart=function(a)
 {
  var a$1,$1,$2,a$2,a$3;
  a$1=String.TrimStartAndCount(a);
  return($1=String.StartsWithAny(List$2.ofArray(["+ ","* ","- "]),a$1[1]),$1!=null&&$1.$==1)?{
   $:1,
   $0:[{
    $:1
   },a$1[0],a$1[1].substring(1)]
  }:(a$2=String.TrimStartAndCount(a),(a$3=Parser.SkipSomeNumbers(a$2[1]),a$3!=null&&a$3.$==1&&(a$3.$0.$==1&&(a$3.$0.$0===46&&(a$3.$0.$1.$==1&&(a$3.$0.$1.$0===32&&($2=[a$2[0],List$1.AsString(a$3.$0.$1.$1)],true)))))))?{
   $:1,
   $0:[{
    $:0
   },$2[0],$2[1]]
  }:null;
 };
 Parser.SkipSomeNumbers=function(input)
 {
  var m,$1,g;
  m=List$2.ofSeq(input);
  return m.$==1&&(Char.IsDigit(m.$0)&&($1=[m.$0,m.$1],true))?{
   $:1,
   $0:(List.partitionUntil((g=function(v)
   {
    return!v;
   },function(x)
   {
    return g(Char.IsDigit(x));
   }),$1[1]))[1]
  }:null;
 };
 Parser.CodeBlockType=function(a)
 {
  var $1,a$1,a$2,lines,$2,a$3,a$4,lang,rest;
  return(a$1=Lines.TakeStartingWithOrBlank("    ",a),a$1!=null&&a$1.$==1&&(a$2=Lines.TrimBlank(a$1.$0[0]),a$2.$!==0&&($1=[a$2,a$1.$0[1]],true)))?(lines=$1[0],{
   $:1,
   $0:[Parser.MakeCodeBlock(null,List$2.ofSeq(Seq.delay(function()
   {
    return Seq.map(function(l)
    {
     return l==null||(new window.RegExp("^\\s*$")).test(l)?"":l.length>4?Strings.Substring(l,4,l.length-4):l;
    },lines);
   }))),$1[1]]
  }):a.$==1&&(a$3=Parser.FencedCodeStart(a.$0),a$3!=null&&a$3.$==1&&(a$4=Parser.LinesUntilFencedCodeEnd(a.$1),($2=[a$4[0],a$3.$0,a$4[1]],true)))?(lang=$2[1],(rest=$2[2],Strings.IsNullOrEmpty(lang)?{
   $:1,
   $0:[Parser.MakeCodeBlock(null,$2[0]),rest]
  }:{
   $:1,
   $0:[Parser.MakeCodeBlock({
    $:1,
    $0:lang
   },$2[0]),rest]
  })):null;
 };
 Parser.LinesUntilFencedCodeEnd=function(lines)
 {
  var m;
  m=List.partitionUntil(function(a)
  {
   return Strings.StartsWith(a.replace(new window.RegExp("^\\s+"),""),"```");
  },lines);
  return m[1].$==1?[m[0],m[1].$1]:m;
 };
 Parser.FencedCodeStart=function(line)
 {
  var a;
  a=String.StartsWith("```",line.replace(new window.RegExp("^\\s+"),""));
  return a!=null&&a.$==1?{
   $:1,
   $0:Strings.Trim(String.TrimStartUsing(96,a.$0))
  }:null;
 };
 Parser.MakeCodeBlock=function(lang,body)
 {
  var p,$1,a;
  p=body.$==1&&(a=String.StartsWith("// line ",body.$0.replace(new window.RegExp("^\\s+"),"")),a!=null&&a.$==1&&($1=[body.$1,a.$0],true))?[$1[1]<<0,$1[0]]:[1,body];
  return{
   Body:p[1],
   Lang:lang,
   StartNumber:p[0]
  };
 };
 Parser.HorizontalRule=function(line)
 {
  var a,i,arg,u,h,a$1;
  a=[0,0,0];
  i=0;
  while(true)
   {
    arg=a;
    u=arg[2];
    h=arg[0];
    a$1=arg[1];
    if((h>=3||a$1>=3||u>=3)&&i===line.length)
     return{
      $:1,
      $0:null
     };
    else
     if(i===line.length)
      return null;
     else
      if(Char.IsWhiteSpace(line.charCodeAt(i)))
       {
        a=arg;
        i=i+1;
       }
      else
       if(line.charCodeAt(i)===45&&a$1===0&&u===0)
        {
         a=[h+1,a$1,u];
         i=i+1;
        }
       else
        if(line.charCodeAt(i)===42&&h===0&&u===0)
         {
          a=[h,a$1+1,u];
          i=i+1;
         }
        else
         if(line.charCodeAt(i)===95&&a$1===0&&h===0)
          {
           a=[h,a$1,u+1];
           i=i+1;
          }
         else
          return null;
   }
 };
 Parser.Heading=function(a)
 {
  var $1,a$1,$2,$3,a$2,$4,$5,a$3;
  return a.$==1&&(a$1=Strings.Trim(a.$0),a.$1.$==1&&(($2=String.EqualsRepeated("=",a.$1.$0.replace(new window.RegExp("\\s+$"),"")),$2!=null&&$2.$==1)&&($1=[a$1,a.$1.$1],true)))?{
   $:1,
   $0:[1,$1[0],$1[1]]
  }:a.$==1&&(a$2=Strings.Trim(a.$0),a.$1.$==1&&(($4=String.EqualsRepeated("-",a.$1.$0.replace(new window.RegExp("\\s+$"),"")),$4!=null&&$4.$==1)&&($3=[a$2,a.$1.$1],true)))?{
   $:1,
   $0:[2,$3[0],$3[1]]
  }:a.$==1&&(a$3=String.StartsWithRepeated("#",a.$0),a$3!=null&&a$3.$==1&&($5=[String.TrimEndUsing(35,a$3.$0[1]),a$3.$0[0],a.$1],true))?{
   $:1,
   $0:[$5[1],$5[0],$5[2]]
  }:null;
 };
 Parser.parseSpans=function(a)
 {
  var tagStack;
  tagStack=[];
  return List$2.append(List$2.ofSeq(Parser.parseChars(tagStack,List$2.T.Empty,List$2.ofArray(Strings.ToCharArray(Strings.Trim(a))))),List$2.ofSeq(Seq.delay(function()
  {
   return Seq.map(function(x)
   {
    return{
     $:0,
     $0:"</"+x+">"
    };
   },tagStack);
  })));
 };
 Parser.parseChars=function(tagStack,acc,input)
 {
  return Seq.delay(function()
  {
   var $1,accLiteral,a,a$1,a$2,a$3,a$4,a$5,a$6,a$7,a$8,a$9,a$10,a$11,a$12,a$13,a$14,a$15,body,rest,$2,a$16,a$17,link,rest$1,a$18,a$19,body$1,link$1,rest$2,a$20,body$2,link$2,original,rest$3,a$21,link$3,rest$4,$3,a$22,body$3,link$4,rest$5,$4,a$23,body$4,link$5,original$1,rest$6,a$24,body$5,f,rest$7;
   accLiteral=Lazy.Create(function()
   {
    return{
     $:0,
     $0:String$1.fromCharCode.apply(void 0,Arrays.ofList(List$2.rev(acc)))
    };
   });
   switch(input.$==1?input.$0===32?input.$1.$==1?input.$1.$0===32?input.$1.$1.$==1?input.$1.$1.$0===10?($1=input.$1.$1.$1,0):input.$1.$1.$0===13?($1=input.$1.$1.$1,0):(a=(List$1.Delimited(List$2.ofArray([96,96])))(input),a!=null&&a.$==1?($1=[a.$0[0],a.$0[1]],3):(a$1=(List$1.Delimited(List$2.ofArray([96])))(input),a$1!=null&&a$1.$==1?($1=[a$1.$0[0],a$1.$0[1]],3):4)):(a$2=(List$1.Delimited(List$2.ofArray([96,96])))(input),a$2!=null&&a$2.$==1?($1=[a$2.$0[0],a$2.$0[1]],3):(a$3=(List$1.Delimited(List$2.ofArray([96])))(input),a$3!=null&&a$3.$==1?($1=[a$3.$0[0],a$3.$0[1]],3):4)):(a$4=(List$1.Delimited(List$2.ofArray([96,96])))(input),a$4!=null&&a$4.$==1?($1=[a$4.$0[0],a$4.$0[1]],3):(a$5=(List$1.Delimited(List$2.ofArray([96])))(input),a$5!=null&&a$5.$==1?($1=[a$5.$0[0],a$5.$0[1]],3):4)):(a$6=(List$1.Delimited(List$2.ofArray([96,96])))(input),a$6!=null&&a$6.$==1?($1=[a$6.$0[0],a$6.$0[1]],3):(a$7=(List$1.Delimited(List$2.ofArray([96])))(input),a$7!=null&&a$7.$==1?($1=[a$7.$0[0],a$7.$0[1]],3):4)):input.$0===38?input.$1.$==1?input.$1.$0===97?input.$1.$1.$==1?input.$1.$1.$0===109?input.$1.$1.$1.$==1?input.$1.$1.$1.$0===112?input.$1.$1.$1.$1.$==1?input.$1.$1.$1.$1.$0===59?($1=input.$1.$1.$1.$1.$1,1):($1=input.$1,1):($1=input.$1,1):($1=input.$1,1):($1=input.$1,1):($1=input.$1,1):($1=input.$1,1):($1=input.$1,1):($1=input.$1,1):input.$0===92?input.$1.$==1?input.$1.$0===33?($1=[input.$1.$0,input.$1.$1],2):input.$1.$0===35?($1=[input.$1.$0,input.$1.$1],2):input.$1.$0===40?($1=[input.$1.$0,input.$1.$1],2):input.$1.$0===41?($1=[input.$1.$0,input.$1.$1],2):input.$1.$0===42?($1=[input.$1.$0,input.$1.$1],2):input.$1.$0===43?($1=[input.$1.$0,input.$1.$1],2):input.$1.$0===45?($1=[input.$1.$0,input.$1.$1],2):input.$1.$0===46?($1=[input.$1.$0,input.$1.$1],2):input.$1.$0===62?($1=[input.$1.$0,input.$1.$1],2):input.$1.$0===91?($1=[input.$1.$0,input.$1.$1],2):input.$1.$0===92?($1=[input.$1.$0,input.$1.$1],2):input.$1.$0===93?($1=[input.$1.$0,input.$1.$1],2):input.$1.$0===95?($1=[input.$1.$0,input.$1.$1],2):input.$1.$0===96?($1=[input.$1.$0,input.$1.$1],2):input.$1.$0===123?($1=[input.$1.$0,input.$1.$1],2):input.$1.$0===125?($1=[input.$1.$0,input.$1.$1],2):(a$8=(List$1.Delimited(List$2.ofArray([96,96])))(input),a$8!=null&&a$8.$==1?($1=[a$8.$0[0],a$8.$0[1]],3):(a$9=(List$1.Delimited(List$2.ofArray([96])))(input),a$9!=null&&a$9.$==1?($1=[a$9.$0[0],a$9.$0[1]],3):4)):(a$10=(List$1.Delimited(List$2.ofArray([96,96])))(input),a$10!=null&&a$10.$==1?($1=[a$10.$0[0],a$10.$0[1]],3):(a$11=(List$1.Delimited(List$2.ofArray([96])))(input),a$11!=null&&a$11.$==1?($1=[a$11.$0[0],a$11.$0[1]],3):4)):(a$12=(List$1.Delimited(List$2.ofArray([96,96])))(input),a$12!=null&&a$12.$==1?($1=[a$12.$0[0],a$12.$0[1]],3):(a$13=(List$1.Delimited(List$2.ofArray([96])))(input),a$13!=null&&a$13.$==1?($1=[a$13.$0[0],a$13.$0[1]],3):4)):(a$14=(List$1.Delimited(List$2.ofArray([96,96])))(input),a$14!=null&&a$14.$==1?($1=[a$14.$0[0],a$14.$0[1]],3):(a$15=(List$1.Delimited(List$2.ofArray([96])))(input),a$15!=null&&a$15.$==1?($1=[a$15.$0[0],a$15.$0[1]],3):4)))
   {
    case 0:
     return Seq.append([accLiteral.f()],Seq.delay(function()
     {
      return Seq.append([{
       $:8
      }],Seq.delay(function()
      {
       return Parser.parseChars(tagStack,List$2.T.Empty,$1);
      }));
     }));
     break;
    case 1:
     return Parser.parseChars(tagStack,new List$2.T({
      $:1,
      $0:59,
      $1:new List$2.T({
       $:1,
       $0:112,
       $1:new List$2.T({
        $:1,
        $0:109,
        $1:new List$2.T({
         $:1,
         $0:97,
         $1:new List$2.T({
          $:1,
          $0:38,
          $1:acc
         })
        })
       })
      })
     }),$1);
     break;
    case 2:
     return Parser.parseChars(tagStack,new List$2.T({
      $:1,
      $0:$1[0],
      $1:acc
     }),$1[1]);
     break;
    case 3:
     body=$1[0];
     rest=$1[1];
     return Seq.append([accLiteral.f()],Seq.delay(function()
     {
      return Seq.append([{
       $:1,
       $0:Strings.Trim(String$1.fromCharCode.apply(void 0,Arrays.ofList(body)))
      }],Seq.delay(function()
      {
       return Parser.parseChars(tagStack,List$2.T.Empty,rest);
      }));
     }));
     break;
    case 4:
     return(a$16=List$1.DelimitedWith(List$2.ofArray([60]),List$2.ofArray([62]),input),a$16!=null&&a$16.$==1&&(a$17=List$1.AsString(a$16.$0[0]),(a$17.indexOf("@")!=-1||a$17.indexOf("://")!=-1)&&($2=[a$17,a$16.$0[1]],true)))?(link=$2[0],rest$1=$2[1],Seq.append([accLiteral.f()],Seq.delay(function()
     {
      return Seq.append([{
       $:4,
       $0:List$2.ofArray([{
        $:0,
        $0:link
       }]),
       $1:[link,null]
      }],Seq.delay(function()
      {
       return Parser.parseChars(tagStack,List$2.T.Empty,rest$1);
      }));
     }))):(a$18=List$1.DelimitedWith(List$2.ofArray([60]),List$2.ofArray([62]),input),a$18!=null&&a$18.$==1?Parser.parseChars(tagStack,List$2.append(List$2.rev(List$2.ofSeq(Parser.parseTag(tagStack,String$1.fromCharCode.apply(void 0,Arrays.ofList(a$18.$0[0]))))),acc),a$18.$0[1]):(a$19=Parser.DirectLink(input),a$19!=null&&a$19.$==1?(body$1=a$19.$0[0],link$1=a$19.$0[1],rest$2=a$19.$0[2],Seq.append([accLiteral.f()],Seq.delay(function()
     {
      var info;
      info=Parser.getLinkAndTitle(String$1.fromCharCode.apply(void 0,Arrays.ofList(link$1)));
      return Seq.append([{
       $:4,
       $0:List$2.ofSeq(Parser.parseChars(tagStack,List$2.T.Empty,body$1)),
       $1:info
      }],Seq.delay(function()
      {
       return Parser.parseChars(tagStack,List$2.T.Empty,rest$2);
      }));
     }))):(a$20=Parser.IndirectLink(input),a$20!=null&&a$20.$==1?(body$2=a$20.$0[0],link$2=a$20.$0[1],original=a$20.$0[2],rest$3=a$20.$0[3],Seq.append([accLiteral.f()],Seq.delay(function()
     {
      var key;
      key=Strings.IsNullOrEmpty(link$2)?String$1.fromCharCode.apply(void 0,Arrays.ofSeq(body$2)):link$2;
      return Seq.append([{
       $:5,
       $0:List$2.ofSeq(Parser.parseChars(tagStack,List$2.T.Empty,body$2)),
       $1:original,
       $2:key
      }],Seq.delay(function()
      {
       return Parser.parseChars(tagStack,List$2.T.Empty,rest$3);
      }));
     }))):(a$21=Parser.AutoLink(input),a$21!=null&&a$21.$==1?(link$3=a$21.$0[0],rest$4=a$21.$0[1],Seq.append([accLiteral.f()],Seq.delay(function()
     {
      return Seq.append([{
       $:4,
       $0:List$2.ofArray([{
        $:0,
        $0:link$3
       }]),
       $1:[link$3,null]
      }],Seq.delay(function()
      {
       return Parser.parseChars(tagStack,List$2.T.Empty,rest$4);
      }));
     }))):input.$==1&&(input.$0===33&&(a$22=Parser.DirectLink(input.$1),a$22!=null&&a$22.$==1&&($3=[a$22.$0[0],a$22.$0[1],a$22.$0[2]],true)))?(body$3=$3[0],link$4=$3[1],rest$5=$3[2],Seq.append([accLiteral.f()],Seq.delay(function()
     {
      return Seq.append([{
       $:6,
       $0:String$1.fromCharCode.apply(void 0,Arrays.ofList(body$3)),
       $1:Parser.getLinkAndTitle(String$1.fromCharCode.apply(void 0,Arrays.ofList(link$4)))
      }],Seq.delay(function()
      {
       return Parser.parseChars(tagStack,List$2.T.Empty,rest$5);
      }));
     }))):input.$==1&&(input.$0===33&&(a$23=Parser.IndirectLink(input.$1),a$23!=null&&a$23.$==1&&($4=[a$23.$0[0],a$23.$0[1],a$23.$0[2],a$23.$0[3]],true)))?(body$4=$4[0],link$5=$4[1],original$1=$4[2],rest$6=$4[3],Seq.append([accLiteral.f()],Seq.delay(function()
     {
      var key;
      key=Strings.IsNullOrEmpty(link$5)?String$1.fromCharCode.apply(void 0,Arrays.ofSeq(body$4)):link$5;
      return Seq.append([{
       $:7,
       $0:String$1.fromCharCode.apply(void 0,Arrays.ofList(body$4)),
       $1:original$1,
       $2:key
      }],Seq.delay(function()
      {
       return Parser.parseChars(tagStack,List$2.T.Empty,rest$6);
      }));
     }))):(a$24=Parser.Emphasised(input),a$24!=null&&a$24.$==1?(body$5=a$24.$0[0],f=a$24.$0[1],rest$7=a$24.$0[2],Seq.append([accLiteral.f()],Seq.delay(function()
     {
      return Seq.append([f(List$2.ofSeq(Parser.parseChars(tagStack,List$2.T.Empty,body$5)))],Seq.delay(function()
      {
       return Parser.parseChars(tagStack,List$2.T.Empty,rest$7);
      }));
     }))):input.$==0?[accLiteral.f()]:input.$0===60?Parser.parseChars(tagStack,new List$2.T({
      $:1,
      $0:59,
      $1:new List$2.T({
       $:1,
       $0:116,
       $1:new List$2.T({
        $:1,
        $0:108,
        $1:new List$2.T({
         $:1,
         $0:38,
         $1:acc
        })
       })
      })
     }),input.$1):Parser.parseChars(tagStack,new List$2.T({
      $:1,
      $0:input.$0,
      $1:acc
     }),input.$1))))));
     break;
   }
  });
 };
 Parser.parseTag=function(tagStack,_tag)
 {
  var tag,tagname,p,m,tagname$1,m$1;
  tag=Strings.Trim(_tag);
  return Strings.IsNullOrEmpty(tag)?tag:tag.charCodeAt(0)===47?(tagname=Slice.string(tag,{
   $:1,
   $0:1
  },null).toLowerCase(),tagStack.length>0&&tagStack[0]===tagname?(tagStack.shift(),Parser.inTag(tag)):Parser.inEscapedTag(tag)):(p=(m=tag.indexOf(String$1.fromCharCode(32)),m===-1?[tag,""]:[Slice.string(tag,null,{
   $:1,
   $0:m-1
  }),Slice.string(tag,{
   $:1,
   $0:m
  },null).replace(new window.RegExp("\\bon[a-z0-9]+ *= *(\"[^\"]*\"|'[^']*'|\\S*)","gi"),"")]),(tagname$1=p[0],(m$1=Parser.isLegalTag(tagname$1),m$1!=null&&m$1.$==1?(!m$1.$0?tagStack.unshift(tagname$1):void 0,Parser.inTag(tagname$1+" "+p[1])):Parser.inEscapedTag(tag))));
 };
 Parser.inEscapedTag=function(s)
 {
  return"&lt;"+s+"&gt;";
 };
 Parser.inTag=function(s)
 {
  return"<"+s+">";
 };
 Parser.isLegalTag=function(s)
 {
  var $1,m;
  m=s.toLowerCase();
  switch(m)
  {
   case"iframe":
   case"details":
   case"summary":
   case"textarea":
   case"select":
   case"progress":
   case"output":
   case"option":
   case"optgroup":
   case"meter":
   case"legend":
   case"label":
   case"input":
   case"form":
   case"fieldset":
   case"datalist":
   case"button":
   case"tr":
   case"thead":
   case"th":
   case"tfoot":
   case"td":
   case"tbody":
   case"table":
   case"colgroup":
   case"caption":
   case"ins":
   case"del":
   case"noscript":
   case"video":
   case"map":
   case"audio":
   case"var":
   case"u":
   case"time":
   case"sup":
   case"sub":
   case"strong":
   case"span":
   case"small":
   case"samp":
   case"s":
   case"rtc":
   case"rt":
   case"rp":
   case"q":
   case"mark":
   case"kbd":
   case"i":
   case"em":
   case"dfn":
   case"data":
   case"code":
   case"cite":
   case"bdo":
   case"bdi":
   case"b":
   case"abbr":
   case"a":
   case"ul":
   case"pre":
   case"p":
   case"ol":
   case"main":
   case"li":
   case"figure":
   case"figcaption":
   case"dt":
   case"dl":
   case"div":
   case"dd":
   case"blockquote":
   case"section":
   case"nav":
   case"hgroup":
   case"header":
   case"h6":
   case"h5":
   case"h4":
   case"h3":
   case"h2":
   case"h1":
   case"footer":
   case"aside":
   case"article":
   case"address":
    return{
     $:1,
     $0:false
    };
    break;
   case"wbr":
   case"track":
   case"source":
   case"param":
   case"meta":
   case"keygen":
   case"img":
   case"hr":
   case"embed":
   case"command":
   case"col":
   case"br":
   case"base":
   case"area":
    return{
     $:1,
     $0:true
    };
    break;
   default:
    return null;
    break;
  }
 };
 Parser.Emphasised=function(a)
 {
  var $1,input,$2,a$1,a$2,f,f$1,g,$3,a$3,a$4,$4,a$5,a$6;
  return a.$==1&&(a.$0===42?($1=[a,a.$1],true):a.$0===95&&($1=[a,a.$1],true))?(input=$1[0],(a$1=(List$1.Delimited(List$2.ofArray([95,95,95])))(input),a$1!=null&&a$1.$==1?($2=[a$1.$0[0],a$1.$0[1]],true):(a$2=(List$1.Delimited(List$2.ofArray([42,42,42])))(input),a$2!=null&&a$2.$==1&&($2=[a$2.$0[0],a$2.$0[1]],true)))?{
   $:1,
   $0:[$2[0],(f=(f$1=function(a$7)
   {
    return{
     $:3,
     $0:a$7
    };
   },function(x)
   {
    return List.singleton(f$1(x));
   }),(g=function(a$7)
   {
    return{
     $:2,
     $0:a$7
    };
   },function(x)
   {
    return g(f(x));
   })),$2[1]]
  }:(a$3=(List$1.Delimited(List$2.ofArray([95,95])))(input),a$3!=null&&a$3.$==1?($3=[a$3.$0[0],a$3.$0[1]],true):(a$4=(List$1.Delimited(List$2.ofArray([42,42])))(input),a$4!=null&&a$4.$==1&&($3=[a$4.$0[0],a$4.$0[1]],true)))?{
   $:1,
   $0:[$3[0],function(a$7)
   {
    return{
     $:2,
     $0:a$7
    };
   },$3[1]]
  }:(a$5=(List$1.Delimited(List$2.ofArray([95])))(input),a$5!=null&&a$5.$==1?($4=[a$5.$0[0],a$5.$0[1]],true):(a$6=(List$1.Delimited(List$2.ofArray([42])))(input),a$6!=null&&a$6.$==1&&($4=[a$6.$0[0],a$6.$0[1]],true)))?{
   $:1,
   $0:[$4[0],function(a$7)
   {
    return{
     $:3,
     $0:a$7
    };
   },$4[1]]
  }:null):null;
 };
 Parser.AutoLink=function(input)
 {
  return Seq.tryPick(function(scheme)
  {
   var prefix,a,a$1;
   prefix=List$2.ofArray(Strings.ToCharArray(scheme));
   a=List$1.LinkDelimitedWith(prefix,List$2.ofArray([32]),input);
   return a!=null&&a.$==1?{
    $:1,
    $0:[scheme+List$1.AsString(a.$0[0]),new List$2.T({
     $:1,
     $0:32,
     $1:a.$0[1]
    })]
   }:(a$1=List$1.LinkStartsWith(prefix,input),a$1!=null&&a$1.$==1?{
    $:1,
    $0:[List$1.AsString(a$1.$0),List$2.T.Empty]
   }:null);
  },List$2.ofArray(["http://","https://","ftp://"]));
 };
 Parser.DirectLink=function(a)
 {
  var $1,a$1,a$2;
  return(a$1=List$1.BracketDelimited(91,93,a),a$1!=null&&a$1.$==1&&(a$2=List$1.BracketDelimited(40,41,a$1.$0[1]),a$2!=null&&a$2.$==1&&($1=[a$1.$0[0],a$2.$0[0],a$2.$0[1]],true)))?{
   $:1,
   $0:[$1[0],$1[1],$1[2]]
  }:null;
 };
 Parser.IndirectLink=function(a)
 {
  var $1,a$1,a$2,link,$2,a$3,a$4,a$5,link$1,$3,a$6,a$7,link$2,a$8;
  return(a$1=List$1.BracketDelimited(91,93,a),a$1!=null&&a$1.$==1&&(a$1.$0[1].$==1&&(a$1.$0[1].$0===13&&(a$1.$0[1].$1.$==1&&(a$1.$0[1].$1.$0===10&&(a$2=List$1.BracketDelimited(91,93,a$1.$0[1].$1.$1),a$2!=null&&a$2.$==1&&($1=[a$1.$0[0],List$1.AsString(a$2.$0[0]),a$2.$0[1]],true)))))))?(link=$1[1],{
   $:1,
   $0:[$1[0],link,"\r\n["+link+"]",$1[2]]
  }):(a$3=List$1.BracketDelimited(91,93,a),a$3!=null&&a$3.$==1&&(a$3.$0[1].$==1&&(a$3.$0[1].$0===10?(a$4=List$1.BracketDelimited(91,93,a$3.$0[1].$1),a$4!=null&&a$4.$==1&&($2=[a$3.$0[0],a$3.$0[1].$0,List$1.AsString(a$4.$0[0]),a$4.$0[1]],true)):a$3.$0[1].$0===32&&(a$5=List$1.BracketDelimited(91,93,a$3.$0[1].$1),a$5!=null&&a$5.$==1&&($2=[a$3.$0[0],a$3.$0[1].$0,List$1.AsString(a$5.$0[0]),a$5.$0[1]],true)))))?(link$1=$2[2],{
   $:1,
   $0:[$2[0],link$1,String$1($2[1])+"["+link$1+"]",$2[3]]
  }):(a$6=List$1.BracketDelimited(91,93,a),a$6!=null&&a$6.$==1&&(a$7=List$1.BracketDelimited(91,93,a$6.$0[1]),a$7!=null&&a$7.$==1&&($3=[a$6.$0[0],List$1.AsString(a$7.$0[0]),a$7.$0[1]],true)))?(link$2=$3[1],{
   $:1,
   $0:[$3[0],link$2,"["+link$2+"]",$3[2]]
  }):(a$8=List$1.BracketDelimited(91,93,a),a$8!=null&&a$8.$==1?{
   $:1,
   $0:[a$8.$0[0],"","",a$8.$0[1]]
  }:null);
 };
 Parser.getLinkAndTitle=function(a)
 {
  var input,p,c,start;
  input=Strings.Trim(a);
  p=input.length===0?["",null]:(c=input.charCodeAt(input.length-1),c===39||c===34?(start=input.indexOf(String$1.fromCharCode(c)),start===input.length-1?[Strings.Trim(Strings.Substring(input,0,input.length-1)),null]:[Strings.Trim(Strings.Substring(input,0,start)),{
   $:1,
   $0:Strings.Trim(Strings.Substring(input,start+1,input.length-2-start))
  }]):[input,null]);
  return[p[0].replace(new window.RegExp("^"+String$1.fromCharCode(60)+"+"),"").replace(new window.RegExp(String$1.fromCharCode(62)+"+$"),""),p[1]];
 };
 SC$2.$cctor=Runtime.Cctor(function()
 {
  var p,p$1,p$2;
  SC$2["|LinesUntilListOrWhite|"]=(p=function(a)
  {
   var $1,$2;
   return($1=Parser.ListStart(a),$1!=null&&$1.$==1)||($2=String.WhiteSpace(a),$2!=null&&$2.$==1)&&true;
  },function(i)
  {
   return List.partitionUntil(p,i);
  });
  SC$2["|LinesUntilListOrUnindented|"]=(p$1=function(a)
  {
   var $1,$2;
   return($1=Parser.ListStart(a),$1!=null&&$1.$==1)||($2=String.Unindented(a),$2!=null&&$2.$==1)&&true;
  },function(i)
  {
   return List.partitionUntil(p$1,i);
  });
  SC$2["|LinesUntilBlockquoteOrWhite|"]=(p$2=function(a)
  {
   var $1,$2;
   return($1=Parser.BlockquoteStart(a),$1!=null&&$1.$==1)||($2=String.WhiteSpace(a),$2!=null&&$2.$==1)&&true;
  },function(i)
  {
   return List.partitionUntil(p$2,i);
  });
  SC$2.$cctor=window.ignore;
 });
 Internal.Token=function(hasCommentary,stream,state)
 {
  var $1;
  function get(a)
  {
   var $2,m,$3,$4,$5,$6,a$1,a$2,m$1,$7,a$3,o,m$2,$8,$9,$10,a$4,a$5,a$6,a$7,a$8,a$9,m$3,a$10,a$11,a$12,a$13,a$14,a$15,o$1,m$4,m$5,d,d$1,m$6;
   a$4=Internal.STR_EAT("#",a);
   if(a$4!=null&&a$4.$==1)
    return stream.sol()?(stream.skipToEnd(),"meta"):null;
   else
    {
     a$5=Internal.STR_EAT("//",a);
     if(a$5!=null&&a$5.$==1)
      {
       stream.skipToEnd();
       return"comment";
      }
     else
      {
       a$6=Internal.RE_EAT(Internal.startMlCommentRE(),a);
       if(a$6!=null&&a$6.$==1)
        {
         state.commentDepth=state.commentDepth+1;
         Internal.parseInnerComment(state,stream);
         return"comment";
        }
       else
        {
         a$7=Internal.RE_EAT(Internal.memberDeclKeywordRE(),a);
         if(a$7!=null&&a$7.$==1)
          {
           state.CtxState={
            $:6
           };
           return"keyword";
          }
         else
          {
           a$8=Internal.RE_EAT(Internal.declKeywordRE(),a);
           if(a$8!=null&&a$8.$==1)
            {
             state.CtxState={
              $:5
             };
             return"keyword";
            }
           else
            {
             a$9=Internal.RE_EAT(Internal.pipeRE(),a);
             if(a$9!=null&&a$9.$==1)
              {
               m$3=state.CtxState;
               switch(m$3.$==3?m$3.$0===0?0:1:m$3.$==4?0:m$3.$==7?1:2)
               {
                case 0:
                 state.CtxState={
                  $:5
                 };
                 break;
                case 1:
                 break;
                case 2:
                 state.CtxState={
                  $:7,
                  $0:0
                 };
                 break;
               }
               return"operator";
              }
             else
              {
               a$10=Internal.RE_EAT(Internal.argsKeywordRE(),a);
               if(a$10!=null&&a$10.$==1)
                {
                 state.CtxState={
                  $:7,
                  $0:0
                 };
                 return"keyword";
                }
               else
                {
                 a$11=Internal.RE_EAT(Internal.keywordRE(),a);
                 if(a$11!=null&&a$11.$==1)
                  {
                   m=Arrays.get(a$11.$0,0);
                   m==="when"||(m==="of"||m==="in"&&true)?state.CtxState={
                    $:0
                   }:void 0;
                   return"keyword";
                  }
                 else
                  {
                   a$12=Internal.RE_EAT(new window.RegExp("^@?\""),a);
                   if(a$12!=null&&a$12.$==1)
                    {
                     Arrays.get(a$12.$0,0).indexOf("@")!=-1?(state.CtxState={
                      $:2
                     },Internal.parseInnerAtString(state,stream)):(state.CtxState={
                      $:1
                     },Internal.parseInnerString(state,stream));
                     return"string";
                    }
                   else
                    {
                     a$13=Internal.RE_EAT(Internal.charRE(),a);
                     if(a$13!=null&&a$13.$==1)
                      return"string";
                     else
                      {
                       a$14=Internal.RE_EAT(Internal.numberRE(),a);
                       if(a$14!=null&&a$14.$==1)
                        return"number";
                       else
                        {
                         a$15=Internal.RE_EAT(Internal.operatorRE(),a);
                         if(a$15!=null&&a$15.$==1)
                          {
                           o$1=a$15.$0;
                           m$4=state.CtxState;
                           if(m$4.$==5)
                            {
                             Arrays.get(o$1,1)!==void 0?state.CtxState={
                              $:3,
                              $0:1
                             }:void 0;
                             return"operator";
                            }
                           else
                            if(m$4.$==4)
                             {
                              if(Arrays.get(o$1,1)!==void 0)
                               state.CtxState={
                                $:7,
                                $0:1
                               };
                              else
                               {
                                m$5=Arrays.get(o$1,0);
                                switch(m$5)
                                {
                                 case"=":
                                  state.CtxState={
                                   $:0
                                  };
                                  break;
                                 case";":
                                 case".":
                                 case",":
                                  state.CtxState={
                                   $:3,
                                   $0:0
                                  };
                                  break;
                                 default:
                                  state.CtxState={
                                   $:4
                                  };
                                  break;
                                }
                               }
                              return"operator";
                             }
                            else
                             if(m$4.$==3)
                              {
                               d=m$4.$0;
                               d$1=Arrays.get(o$1,1)!==void 0?d+1:Arrays.get(o$1,2)!==void 0?d-1:d;
                               if(d$1===0)
                                {
                                 m$6=Arrays.get(o$1,0);
                                 switch(m$6)
                                 {
                                  case"=":
                                   state.CtxState={
                                    $:0
                                   };
                                   break;
                                  case";":
                                  case".":
                                  case",":
                                   state.CtxState={
                                    $:3,
                                    $0:d$1
                                   };
                                   break;
                                  default:
                                   state.CtxState={
                                    $:4
                                   };
                                   break;
                                 }
                                 return"operator";
                                }
                               else
                                return($6=Internal.RE_LA(Internal.closingParenRE(),stream),$6!=null&&$6.$==1)?"def":"operator";
                              }
                             else
                              return m$4.$==7?(a$1=m$4.$0,a$2=Arrays.get(o$1,1)!==void 0?a$1+1:Arrays.get(o$1,2)!==void 0?a$1-1:a$1,state.CtxState={
                               $:7,
                               $0:a$2
                              },a$2===0?(m$1=Arrays.get(o$1,0),m$1==="="||m$1==="->"&&true?state.CtxState={
                               $:0
                              }:void 0):void 0,"operator"):"operator";
                          }
                         else
                          {
                           a$3=Internal.RE_EAT(Internal.identRE(),a);
                           return a$3!=null&&a$3.$==1?(o=a$3.$0,m$2=state.CtxState,m$2.$==6?(state.CtxState={
                            $:5
                           },($8=Internal.RE_LA(Internal.dotRE(),stream),$8!=null&&$8.$==1)?"variable":"def"):m$2.$==5?(state.CtxState={
                            $:4
                           },"def"):m$2.$==3?Char.IsUpper(Arrays.get(o,0).charCodeAt(0))?null:m$2.$0===0?(state.CtxState={
                            $:4
                           },"def"):($9=Internal.RE_LA(Internal.dotOrEqualRE(),stream),$9!=null&&$9.$==1)?null:"def":m$2.$==4?Char.IsUpper(Arrays.get(o,0).charCodeAt(0))?null:(state.CtxState={
                            $:7,
                            $0:0
                           },"variable"):m$2.$==7?Char.IsUpper(Arrays.get(o,0).charCodeAt(0))?null:m$2.$0===0?"variable":($10=Internal.RE_LA(Internal.dotOrEqualRE(),stream),$10!=null&&$10.$==1)?null:"variable":null):(stream.next(),null);
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  return state.commentDepth>0?(Internal.parseInnerComment(state,stream),"comment"):Unchecked.Equals(state.CtxState,{
   $:1
  })?(Internal.parseInnerString(state,stream),"string"):Unchecked.Equals(state.CtxState,{
   $:2
  })?(Internal.parseInnerAtString(state,stream),"string"):stream.eatSpace()?null:hasCommentary?($1=Internal.RE_EAT(Internal.commentaryRE(),stream),$1!=null&&$1.$==1)?"commentary":get(stream):get(stream);
 };
 Internal.parseInnerAtString=function(state,stream)
 {
  stream.eatWhile(function(c)
  {
   return c!=="\"";
  });
  stream.eat("\"")?state.CtxState={
   $:0
  }:void 0;
 };
 Internal.parseInnerString=function(state,stream)
 {
  var $1,$2;
  while(Unchecked.Equals(state.CtxState,{
   $:1
  })&&!stream.eol())
   {
    if($1=Internal.RE_EAT(new window.RegExp("^\"B?"),stream),$1!=null&&$1.$==1)
     state.CtxState={
      $:0
     };
    else
     {
      if($2=Internal.RE_EAT(new window.RegExp("^(\\\\.|[^\\\"])*"),stream),$2!=null&&$2.$==1)
       ;
     }
   }
 };
 Internal.parseInnerComment=function(state,stream)
 {
  var $1,$2,$3;
  while(state.commentDepth>0&&!stream.eol())
   {
    if($1=Internal.STR_EAT("*)",stream),$1!=null&&$1.$==1)
     state.commentDepth=state.commentDepth-1;
    else
     {
      if($2=Internal.RE_EAT(Internal.startMlCommentRE(),stream),$2!=null&&$2.$==1)
       state.commentDepth=state.commentDepth+1;
      else
       {
        if($3=Internal.RE_EAT(new window.RegExp("^(\\(\\*\\)|[(*]?)[^*(]*"),stream),$3!=null&&$3.$==1)
         ;
       }
     }
   }
 };
 Internal.commentaryRE=function()
 {
  SC$3.$cctor();
  return SC$3.commentaryRE;
 };
 Internal.identRE=function()
 {
  SC$3.$cctor();
  return SC$3.identRE;
 };
 Internal.closingParenRE=function()
 {
  SC$3.$cctor();
  return SC$3.closingParenRE;
 };
 Internal.operatorRE=function()
 {
  SC$3.$cctor();
  return SC$3.operatorRE;
 };
 Internal.charRE=function()
 {
  SC$3.$cctor();
  return SC$3.charRE;
 };
 Internal.numberRE=function()
 {
  SC$3.$cctor();
  return SC$3.numberRE;
 };
 Internal.startMlCommentRE=function()
 {
  SC$3.$cctor();
  return SC$3.startMlCommentRE;
 };
 Internal.dotOrEqualRE=function()
 {
  SC$3.$cctor();
  return SC$3.dotOrEqualRE;
 };
 Internal.dotRE=function()
 {
  SC$3.$cctor();
  return SC$3.dotRE;
 };
 Internal.keywordRE=function()
 {
  SC$3.$cctor();
  return SC$3.keywordRE;
 };
 Internal.pipeRE=function()
 {
  SC$3.$cctor();
  return SC$3.pipeRE;
 };
 Internal.argsKeywordRE=function()
 {
  SC$3.$cctor();
  return SC$3.argsKeywordRE;
 };
 Internal.declKeywordRE=function()
 {
  SC$3.$cctor();
  return SC$3.declKeywordRE;
 };
 Internal.memberDeclKeywordRE=function()
 {
  SC$3.$cctor();
  return SC$3.memberDeclKeywordRE;
 };
 Internal.STR_LA=function(s,stream)
 {
  return Internal.MatchStr(false,s,stream);
 };
 Internal.STR_EAT=function(s,stream)
 {
  return Internal.MatchStr(true,s,stream);
 };
 Internal.MatchStr=function(consume,s,stream)
 {
  return stream.match(s,consume)?{
   $:1,
   $0:null
  }:null;
 };
 Internal.RE_LA=function(re,stream)
 {
  return Internal.MatchRE(false,re,stream);
 };
 Internal.RE_EAT=function(re,stream)
 {
  return Internal.MatchRE(true,re,stream);
 };
 Internal.MatchRE=function(consume,re,stream)
 {
  var keywordMatch;
  keywordMatch=stream.match(re,consume);
  return keywordMatch?{
   $:1,
   $0:keywordMatch
  }:null;
 };
 Mode.Make=function(hasCommentary)
 {
  return Mode.New("fsharp",hasCommentary);
 };
 Mode.New=function(name,hasCommentary)
 {
  return{
   name:name,
   hasCommentary:hasCommentary
  };
 };
 FSharp$1.DefineFSharpMode=function()
 {
  SC$3.$cctor();
  return SC$3.DefineFSharpMode;
 };
 SC$3.$cctor=Runtime.Cctor(function()
 {
  var defined;
  SC$3.memberDeclKeywordRE=new window.RegExp("^(member|override)(\\s+(inline|mutable|private|public))*\\b");
  SC$3.declKeywordRE=new window.RegExp("^(and|exception|for|let|let!|module|namespace|type|use|use!|val)(\\s+(inline|mutable|private|public|rec))*\\b");
  SC$3.argsKeywordRE=new window.RegExp("^(fun|function)\\b");
  SC$3.pipeRE=new window.RegExp("^\\|(?=\\b|\\s)");
  SC$3.keywordRE=new window.RegExp("^(abstract|and|as|assert|base|begin|class|default|delegate|do|done|downcast|downto|elif|else|end|exception|extern|false|finally|for|fun|function|global|if|in|inherit|inline|interface|internal|lazy|let|match|member|module|mutable|namespace|new|null|of|open|override|private|public|rec|return|static|struct|then|to|true|try|type|upcast|use|val|void|when|while|with|yield)\\b");
  SC$3.dotRE=new window.RegExp("\\s*\\.");
  SC$3.dotOrEqualRE=new window.RegExp("\\s*[.=]");
  SC$3.startMlCommentRE=new window.RegExp("^\\(\\*(?!\\))");
  SC$3.numberRE=new window.RegExp("^[+-]?(0b[01]+|0o[0-7]+|0x[0-9a-fA-F]+|[0-9]+)(\\.[0-9]*([eE][+-]?[0-9]+)?([mMfF]|lf|LF)?|u[ysl]|UL|[uyslIL])?");
  SC$3.charRE=new window.RegExp("^'([^\\\\']|\\\\(u....|x..|U........|[^uUx]))'B?");
  SC$3.operatorRE=new window.RegExp("^[-!=#$%&*+,<>./:?|@~^;]+|\\(\\||\\|\\)|([({\\[])|([})\\]])");
  SC$3.closingParenRE=new window.RegExp("^\\s*\\)");
  SC$3.identRE=new window.RegExp("^(``.*``|(\\w|')+)");
  SC$3.commentaryRE=new window.RegExp("^{{[^:]+:((?!}}).)+}}");
  SC$3.DefineFSharpMode=(defined=[false],function()
  {
   if(!defined[0])
    {
     defined[0]=true;
     CodeMirror$1.defineMode("fsharp",function($1,$2)
     {
      var r,h;
      r={
       token:Runtime.CreateFuncWithArgs((h=$2.hasCommentary,function(t)
       {
        return Internal.Token(h,t[0],t[1]);
       }))
      };
      r.blockCommentStart="(*";
      r.blockCommentEnd="*)";
      r.blockCommentLead=" *";
      r.lineComment="//";
      r.startState=function()
      {
       return{
        commentDepth:0,
        CtxState:{
         $:0
        }
       };
      };
      return r;
     });
     CodeMirror$1.defineMode("fsharp-commentary",Runtime.CreateFuncWithArgs(function()
     {
      var r;
      r={
       token:function($1,$2)
       {
        return Internal.Token(true,$1,$2);
       }
      };
      r.blockCommentStart="(*";
      r.blockCommentEnd="*)";
      r.blockCommentLead=" *";
      r.lineComment="//";
      r.startState=function()
      {
       return{
        commentDepth:0,
        CtxState:{
         $:0
        }
       };
      };
      return r;
     }));
    }
  });
  SC$3.$cctor=window.ignore;
 });
 Common.mkId=function()
 {
  SC$4.$cctor();
  return SC$4.mkId;
 };
 CodeBlock=Client.CodeBlock=Runtime.Class({
  get_Body:function()
  {
   var $this,x,f;
   $this=this;
   x=Tags.Tags().NewTag("div",[]);
   f=function()
   {
    Strings.StartsWith($this.lang,"fsharp")?(FSharp$1.DefineFSharpMode())():void 0;
    CodeMirror$1.runMode($this.text,$this.lang,window.jQuery("#"+$this.ident).get(0));
   };
   (function(w)
   {
    Operators$1.OnAfterRender(f,w);
   }(x));
   return x;
  }
 },Web.Control,CodeBlock);
 Client.CodeBlock$1=function(lang,content,numlines,startnumber)
 {
  var ident,a,a$1,x,a$2,f;
  ident=(Common.mkId())("codeblock-client--");
  Strings.StartsWith(lang,"fsharp")?(FSharp$1.DefineFSharpMode())():void 0;
  return Operators$1.add((a=[Attr.Attr().NewAttr("class","pre-container")],Tags.Tags().NewTag("div",a)),[Operators$1.add((a$1=[Attr.Attr().NewAttr("style","float: left; text-align: right")],Tags.Tags().NewTag("pre",a$1)),Arrays.init(numlines,function(i)
  {
   return Tags.Tags().text(String$1(i+startnumber)+"\n");
  })),(x=Operators$1.add((a$2=[Attr.Attr().NewAttr("id",ident)],Tags.Tags().NewTag("pre",a$2)),[Tags.Tags().text(content)]),(f=function(pre)
  {
   CodeMirror$1.runMode(content,lang,pre.Dom);
  },function(w)
  {
   Operators$1.OnAfterRender(f,w);
  }(x),x))]);
 };
 Next.CodeBlock=function(lang,content,numlines,startnumber)
 {
  var ident;
  ident=(Common.mkId())("codeblock-client--");
  return Doc.Element("div",[AttrProxy.Create("class","pre-container")],[Doc.Element("pre",[AttrProxy.Create("style","float:left; text-align: right")],Arrays.init(numlines,function(i)
  {
   return Doc.TextNode(String$1(i+startnumber)+"\n");
  })),Doc.Element("pre",[AttrProxy.Create("id",ident)],[Doc.TextNode(content)]),Next.CodeBlockAfterRender(content,lang,ident)]);
 };
 Next.CodeBlockAfterRender=function(content,lang,ident)
 {
  return Doc.Element("span",[AttrModule.OnAfterRender(function()
  {
   CodeMirror$1.runMode(content,lang,window.document.getElementById(ident));
  })],[]);
 };
 Client$1.CodeBlock=function(lang,content,startNumber)
 {
  return Client.CodeBlock$1(lang,content,1+Seq.length(Seq.filter(function(y)
  {
   return 10===y;
  },content)),startNumber);
 };
 Next$1.CodeBlock=function(lang,content,startNumber)
 {
  return Next.CodeBlock(lang,content,1+Seq.length(Seq.filter(function(y)
  {
   return 10===y;
  },content)),startNumber);
 };
 SC$4.$cctor=Runtime.Cctor(function()
 {
  var cur;
  SC$4.mkId=(cur=[0],function(prefix)
  {
   cur[0]++;
   return prefix+String$1(cur[0]);
  });
  SC$4.$cctor=window.ignore;
 });
 RE.Replace=function(re,repl,input)
 {
  return input.replace(new window.RegExp(re),repl);
 };
 Common$1.TranslateToString=function(content)
 {
  return Common$1.ParseContent("","\n",content);
 };
 Common$1.GetTableOfContentsWithTitle=function(doc,linkRoot)
 {
  var p;
  p=Common$1.getTableOfContents(doc,linkRoot);
  return[{
   Content:List$2.ofArray([p[1]]),
   Context:doc.Context
  },{
   Content:List$2.append(Option.toList(p[0]),p[2]),
   Context:doc.Context
  }];
 };
 Common$1.GetTableOfContents=function(doc,linkRoot)
 {
  var p;
  p=Common$1.getTableOfContents(doc,linkRoot);
  return[{
   Content:List$2.ofArray([p[1]]),
   Context:doc.Context
  },{
   Content:p[2],
   Context:doc.Context
  }];
 };
 Common$1.WithTableOfContents=function(doc,linkRoot)
 {
  var p,title;
  p=Common$1.getTableOfContents(doc,linkRoot);
  title=p[0];
  return{
   Content:title==null?new List$2.T({
    $:1,
    $0:p[1],
    $1:p[2]
   }):new List$2.T({
    $:1,
    $0:title.$0,
    $1:new List$2.T({
     $:1,
     $0:p[1],
     $1:p[2]
    })
   }),
   Context:doc.Context
  };
 };
 Common$1.getTableOfContents=function(doc,linkRoot)
 {
  var p,m,$1,first,content;
  function scan(level,ix,ixStack,pars)
  {
   var id,n,p$1,children,p$2,_id,m$1,content$1;
   return pars.$==1?pars.$0[0].$==0?(id=pars.$0[1],(n=pars.$0[0].$0,n<level?[List$2.T.Empty,pars]:(p$1=scan(n+1,1,new List$2.T({
    $:1,
    $0:ix,
    $1:ixStack
   }),pars.$1),(children=p$1[0],(p$2=scan(level,ix+1,ixStack,p$1[1]),(_id=(m$1=id[0],m$1==null?"heading-"+Strings.concat("-",Seq.map(String$1,List$2.rev(new List$2.T({
    $:1,
    $0:ix,
    $1:ixStack
   })))):m$1.$0),(id[0]={
    $:1,
    $0:_id
   },content$1={
    $:6,
    $0:List$2.ofArray([{
     $:4,
     $0:pars.$0[0].$1,
     $1:[linkRoot+"#"+_id,null]
    }])
   },[new List$2.T({
    $:1,
    $0:children.$==0?List$2.ofArray([content$1]):List$2.ofArray([content$1,{
     $:4,
     $0:{
      $:0
     },
     $1:children
    }]),
    $1:p$2[0]
   }),p$2[1]]))))))):scan(level,ix,ixStack,pars.$1):[List$2.T.Empty,List$2.T.Empty];
  }
  p=(m=doc.Content,m.$==1&&((first=m.$0,Common$1.isH1(first[0],first[1])&&!List$2.exists(function(t)
  {
   return Common$1.isH1(t[0],t[1]);
  },m.$1))&&($1=[m.$0,m.$1],true))?[{
   $:1,
   $0:$1[0]
  },$1[1]]:[null,m]);
  content=p[1];
  return[p[0],[{
   $:4,
   $0:{
    $:0
   },
   $1:(scan(1,1,List$2.T.Empty,content))[0]
  },[{
   $:1,
   $0:"table-of-contents"
  }]],content];
 };
 Common$1.isH1=function(a,a$1)
 {
  return a.$==0&&(a.$0===1&&true);
 };
 Common$1.ParseContent=function(docRoot,newline,content)
 {
  var doc,getId,m;
  function ParagraphToText(id,p)
  {
   var align,header,mkAlign,mkTD,mkTR;
   return p.$==2?"<pre"+getId(id)+">"+Strings.concat(newline,p.$0.Body)+"</pre>":p.$==7?"<hr"+getId(id)+"/>":p.$==3?p.$0:p.$==4?p.$0.$==1?"<ul"+getId(id)+">"+Strings.concat("",List$2.map(mkLI,p.$1))+"</ul>":"<ol"+getId(id)+">"+Strings.concat("",List$2.map(mkLI,p.$1))+"</ol>":p.$==1?"<p"+getId(id)+">"+Common$1.SpansToText(p.$0,doc.Context)+"</p>":p.$==5?"<blockquote"+getId(id)+">"+ParagraphsToText(p.$0)+"</blockquote>":p.$==6?"<span"+getId(id)+">"+Common$1.SpansToText(p.$0,doc.Context)+"</span>":p.$==8?(align=p.$1,(header=p.$0,(mkAlign=function(align$1)
   {
    return align$1.$==3?"left":align$1.$==1?"right":align$1.$==2?"center":"left";
   },(mkTD=function(isTH,cell,align$1)
   {
    return"<"+(isTH?"th":"td")+" style=\"text-align:"+mkAlign(align$1)+"\">"+ParagraphsToText(cell)+"</"+(isTH?"th":"td")+">";
   },(mkTR=function(isTH,row)
   {
    return"<tr>"+Strings.concat("",List$2.map2(function($1,$2)
    {
     return mkTD(isTH,$1,$2);
    },row,align))+"</tr>";
   },"<table"+getId(id)+"><tbody>"+(header!=null&&header.$==1?mkTR(true,header.$0):"")+Strings.concat("",List$2.map(function($1)
   {
    return mkTR(false,$1);
   },p.$2))+"</tbody></table>"))))):"<h"+String$1(p.$0)+getId(id)+">"+Common$1.SpansToText(p.$1,doc.Context)+"</h1>";
  }
  function ParagraphsToText(ps)
  {
   return Strings.concat("",List$2.map(function($1)
   {
    return ParagraphToText(null,$1);
   },ps));
  }
  function mkLI(pars)
  {
   return"<li>"+ParagraphsToText(pars)+"</li>";
  }
  doc=Common$1.Parse(docRoot,content);
  getId=function(id)
  {
   return id!=null&&id.$==1?" id=\""+id.$0+"\"":"";
  };
  return Strings.concat("",(m=function(p,id)
  {
   return ParagraphToText(id[0],p);
  },Seq.map(function($1)
  {
   return m($1[0],$1[1]);
  },doc.Content)));
 };
 Common$1.SpansToText=function(spans,ctx)
 {
  return Strings.concat("",List$2.map(function(span)
  {
   var url,title,title$1,m,o,title$2;
   return span.$==1?"<code>"+Common$1.EscapeHtml(span.$0)+"</code>":span.$==2?"<strong>"+Common$1.SpansToText(span.$0,ctx)+"</strong>":span.$==3?"<em>"+Common$1.SpansToText(span.$0,ctx)+"</em>":span.$==4?(url=span.$1[0],(title=span.$1[1],"<a "+(Strings.StartsWith(url,"#")?"":"target=\"_blank\" ")+"url=\""+url+(title!=null&&title.$==1?"\" title=\""+title.$0:"")+"\">"+Common$1.SpansToText(span.$0,ctx)+"</a>")):span.$==5?(title$1=span.$2,"<a target=\"_blank\" url=\""+(m=(o=null,[ctx.Links.TryGetValue(title$1,{
    get:function()
    {
     return o;
    },
    set:function(v)
    {
     o=v;
    }
   }),o]),m[0]?m[1][0]:title$1)+"\" title=\""+title$1+"\">"+Common$1.SpansToText(span.$0,ctx)+"</a>"):span.$==6?(title$2=span.$1[1],"<img src=\""+span.$1[0]+(title$2!=null&&title$2.$==1?"\" title=\""+title$2.$0:"")+"\" />"):span.$==7?"<img src=\""+span.$1+"\" title=\""+span.$2+"\" />":span.$==8?"<br/>":span.$0;
  },spans));
 };
 Common$1.EscapeHtml=function(s)
 {
  return Strings.Replace(Strings.Replace(Strings.Replace(s,"&","&amp;"),"<","&lt;"),">","&gt;");
 };
 Common$1.Parse=function(docRoot,content)
 {
  var ctx,lines;
  ctx=ParsingContext.New(docRoot,new Dictionary.New$5(),"\n");
  lines=Strings.SplitStrings(content,["\r\n","\n"],0);
  return{
   Content:List$2.ofSeq(Seq.delay(function()
   {
    return Seq.map(function(p)
    {
     return[p,[null]];
    },Parser.parseParagraphs(ctx,List$2.ofArray(lines)));
   })),
   Context:ctx
  };
 };
 Client$2.Translate=function(content)
 {
  return Client$2.ParseContent("text","",content);
 };
 Client$2.ParseContent=function(lang,docRoot,content)
 {
  return Client$2.ToPagelets(lang,Client$2.Parse(docRoot,content));
 };
 Client$2.ToPagelets=function(lang,doc)
 {
  var ctx,withId;
  function _ParagraphToElements(id,p)
  {
   var block,x,b,x$1,f,a,f$1,g,a$1,f$2,g$1,a$2,a$3,align,header,main,x$2,a$4,f$3,g$2,a$5;
   return p.$==2?(block=p.$0,List$2.ofArray([withId(id,Client.CodeBlock$1((x=block.Lang,x==null?lang:x.$0),Strings.concat(ctx.Newline,block.Body),List$2.length(block.Body),block.StartNumber))])):p.$==7?List$2.ofArray([withId(id,Tags.Tags().NewTag("hr",[]))]):p.$==3?(b=p.$0,List$2.ofArray([withId(id,(x$1=Tags.Tags().NewTag("div",[]),(f=function(d)
   {
    d.get_Body().outerHTML=b;
   },function(w)
   {
    Operators$1.OnAfterRender(f,w);
   }(x$1),x$1)))])):p.$==4?p.$0.$==1?List$2.ofArray([withId(id,(a=List$2.map((f$1=function(x$3)
   {
    return Tags.Tags().NewTag("li",x$3);
   },(g=function(l)
   {
    return List$2.collect(ParagraphToElements,l);
   },function(x$3)
   {
    return f$1(g(x$3));
   })),p.$1),Tags.Tags().NewTag("ul",a)))]):List$2.ofArray([withId(id,(a$1=List$2.map((f$2=function(x$3)
   {
    return Tags.Tags().NewTag("li",x$3);
   },(g$1=function(l)
   {
    return List$2.collect(ParagraphToElements,l);
   },function(x$3)
   {
    return f$2(g$1(x$3));
   })),p.$1),Tags.Tags().NewTag("ol",a$1)))]):p.$==1?List$2.ofArray([withId(id,(a$2=List$2.map(function(s)
   {
    return Client$2.SpanToElement(ctx,s);
   },p.$0),Tags.Tags().NewTag("p",a$2)))]):p.$==5?List$2.ofArray([withId(id,(a$3=List$2.collect(ParagraphToElements,p.$0),Tags.Tags().NewTag("blockquote",a$3)))]):p.$==6?List$2.map(function(s)
   {
    return Client$2.SpanToElement(ctx,s);
   },p.$0):p.$==8?(align=p.$1,(header=p.$0,(main=List$2.map(function(row)
   {
    var x$3,m;
    x$3=((m=function(cell,align$1)
    {
     var a$6;
     return Operators$1.add((a$6=[Attr.Attr().NewAttr("style","text-align: "+(align$1.$==3?"left":align$1.$==1?"right":align$1.$==2?"center":"left"))],Tags.Tags().NewTag("td",a$6)),List$2.collect(ParagraphToElements,cell));
    },(Runtime.Curried3(List$2.map2))(m))(row))(align);
    return Tags.Tags().NewTag("tr",x$3);
   },p.$2),List$2.ofArray([withId(id,(x$2=header!=null&&header.$==1?new List$2.T({
    $:1,
    $0:(a$4=List$2.map((f$3=function(x$3)
    {
     return Tags.Tags().NewTag("td",x$3);
    },(g$2=function(l)
    {
     return List$2.collect(ParagraphToElements,l);
    },function(x$3)
    {
     return f$3(g$2(x$3));
    })),header.$0),Tags.Tags().NewTag("tr",a$4)),
    $1:main
   }):main,Tags.Tags().NewTag("table",x$2)))])))):List$2.ofArray([withId(id,(a$5=List$2.map(function(s)
   {
    return Client$2.SpanToElement(ctx,s);
   },p.$1),Tags.Tags().NewTag("h"+String$1(p.$0),a$5)))]);
  }
  function ParagraphToElements($1)
  {
   return _ParagraphToElements(null,$1);
  }
  ctx=doc.Context;
  withId=function(id,e)
  {
   return Operators$1.add(e,List$2.ofSeq(Seq.delay(function()
   {
    return id==null?[]:[Attr.Attr().NewAttr("id",id.$0)];
   })));
  };
  return Seq.collect(function(t)
  {
   return _ParagraphToElements(t[1][0],t[0]);
  },doc.Content);
 };
 Client$2.Parse=function(docRoot,content)
 {
  return Common$1.Parse(docRoot,content);
 };
 Client$2.SpanToElement=function(ctx,span)
 {
  var a,a$1,url,title,a$2,title$1,url$1,m,o,a$3,title$2,a$4,a$5,s,a$6,s$1,x,f;
  return span.$==1?(a=[Tags.Tags().text(span.$0)],Tags.Tags().NewTag("code",a)):span.$==2?Tags.Tags().NewTag("strong",List$2.map(function(s$2)
  {
   return Client$2.SpanToElement(ctx,s$2);
  },span.$0)):span.$==3?(a$1=List$2.map(function(s$2)
  {
   return Client$2.SpanToElement(ctx,s$2);
  },span.$0),Tags.Tags().NewTag("em",a$1)):span.$==4?(url=span.$1[0],(title=span.$1[1],Operators$1.add(Operators$1.add((a$2=List$2.ofSeq(Seq.delay(function()
  {
   return Seq.append([Attr.Attr().NewAttr("href",url)],Seq.delay(function()
   {
    return!Strings.StartsWith(url,"#")?[Attr.Attr().NewAttr("target","_blank")]:[];
   }));
  })),Tags.Tags().NewTag("a",a$2)),List$2.map(function(s$2)
  {
   return Client$2.SpanToElement(ctx,s$2);
  },span.$0)),title!=null&&title.$==1?List$2.ofArray([Attr.Attr().NewAttr("title",title.$0)]):List$2.T.Empty))):span.$==5?(title$1=span.$2,(url$1=(m=(o=null,[ctx.Links.TryGetValue(title$1,{
   get:function()
   {
    return o;
   },
   set:function(v)
   {
    o=v;
   }
  }),o]),m[0]?m[1][0]:title$1),Operators$1.add((a$3=[Attr.Attr().NewAttr("title",title$1),Attr.Attr().NewAttr("href",url$1),Attr.Attr().NewAttr("target","_blank")],Tags.Tags().NewTag("a",a$3)),List$2.map(function(s$2)
  {
   return Client$2.SpanToElement(ctx,s$2);
  },span.$0)))):span.$==6?(title$2=span.$1[1],Operators$1.add((a$4=[(a$5=(s=span.$1[0],Strings.StartsWith(s,"/")||s.indexOf("://")!=-1?s:ctx.RootDocUrl+s),Attr.Attr().NewAttr("src",a$5)),Tags.Tags().text(span.$0)],Tags.Tags().NewTag("img",a$4)),title$2!=null&&title$2.$==1?List$2.ofArray([Attr.Attr().NewAttr("title",title$2.$0)]):List$2.T.Empty)):span.$==7?(a$6=[Attr.Attr().NewAttr("src",span.$1),Tags.Tags().text(span.$0),Attr.Attr().NewAttr("title",span.$2)],Tags.Tags().NewTag("img",a$6)):span.$==8?Tags.Tags().NewTag("br",[]):(s$1=span.$0,(x=Tags.Tags().NewTag("span",[]),(f=function(e)
  {
   e.get_Body().outerHTML=s$1;
  },function(w)
  {
   Operators$1.OnAfterRender(f,w);
  }(x),x)));
 };
 Next$2.Translate=function(content)
 {
  return Next$2.ParseContent("text","",content);
 };
 Next$2.ParseContent=function(lang,docRoot,content)
 {
  return Next$2.ToDoc(lang,Next$2.Parse(docRoot,content));
 };
 Next$2.ToDoc=function(lang,doc)
 {
  var ctx,withId;
  function _ParagraphToDoc(id,p)
  {
   var block,x,f,g,f$1,g$1,align,header,main,f$2,g$2;
   return p.$==2?(block=p.$0,Next.CodeBlock((x=block.Lang,x==null?lang:x.$0),Strings.concat(ctx.Newline,block.Body),List$2.length(block.Body),block.StartNumber)):p.$==7?Doc.Element("hr",[withId(id)],[]):p.$==3?Doc.Verbatim(p.$0):p.$==4?p.$0.$==1?Doc.Element("ul",[withId(id)],List$2.map((f=function(c)
   {
    return Doc.Element("li",[],c);
   },(g=function(l)
   {
    return List$2.map(ParagraphToDoc,l);
   },function(x$1)
   {
    return f(g(x$1));
   })),p.$1)):Doc.Element("ol",[withId(id)],List$2.map((f$1=function(c)
   {
    return Doc.Element("li",[],c);
   },(g$1=function(l)
   {
    return List$2.map(ParagraphToDoc,l);
   },function(x$1)
   {
    return f$1(g$1(x$1));
   })),p.$1)):p.$==1?Doc.Element("p",List$2.ofArray([withId(id)]),List$2.map(function(s)
   {
    return Next$2.SpanToDoc(ctx,s);
   },p.$0)):p.$==5?Doc.Element("blockquote",[withId(id)],List$2.map(ParagraphToDoc,p.$0)):p.$==6?Doc.Concat(List$2.map(function(s)
   {
    return Next$2.SpanToDoc(ctx,s);
   },p.$0)):p.$==8?(align=p.$1,(header=p.$0,(main=List$2.map(function(row)
   {
    var m;
    return Doc.Element("tr",[],((m=function(cell,align$1)
    {
     return Doc.Element("td",[AttrProxy.Create("style","text-align: "+(align$1.$==3?"left":align$1.$==1?"right":align$1.$==2?"center":"left"))],List$2.map(ParagraphToDoc,cell));
    },(Runtime.Curried3(List$2.map2))(m))(row))(align));
   },p.$2),Doc.Element("table",[],header!=null&&header.$==1?new List$2.T({
    $:1,
    $0:Doc.Element("tr",[],List$2.map((f$2=function(c)
    {
     return Doc.Element("td",[],c);
    },(g$2=function(l)
    {
     return List$2.map(ParagraphToDoc,l);
    },function(x$1)
    {
     return f$2(g$2(x$1));
    })),header.$0)),
    $1:main
   }):main)))):Doc.Element("h"+String$1(p.$0),List$2.ofArray([withId(id)]),List$2.map(function(s)
   {
    return Next$2.SpanToDoc(ctx,s);
   },p.$1));
  }
  function ParagraphToDoc($1)
  {
   return _ParagraphToDoc(null,$1);
  }
  ctx=doc.Context;
  withId=function(id)
  {
   return id==null?Attrs.EmptyAttr():AttrProxy.Create("id",id.$0);
  };
  return Doc.Concat(Seq.map(function(t)
  {
   return _ParagraphToDoc(t[1][0],t[0]);
  },doc.Content));
 };
 Next$2.Parse=function(docRoot,content)
 {
  return Common$1.Parse(docRoot,content);
 };
 Next$2.SpanToDoc=function(ctx,span)
 {
  var LIFT,url,title,title$1,url$1,m,o,url$2,title$2;
  LIFT=function(s)
  {
   return Strings.StartsWith(s,"/")||s.indexOf("://")!=-1?s:ctx.RootDocUrl+s;
  };
  return span.$==1?Doc.Element("code",[],[Doc.TextNode(span.$0)]):span.$==2?Doc.Element("strong",[],List$2.map(function(s)
  {
   return Next$2.SpanToDoc(ctx,s);
  },span.$0)):span.$==3?Doc.Element("em",[],List$2.map(function(s)
  {
   return Next$2.SpanToDoc(ctx,s);
  },span.$0)):span.$==4?(url=span.$1[0],(title=span.$1[1],Doc.Element("a",List$2.ofSeq(Seq.delay(function()
  {
   return Seq.append([AttrProxy.Create("href",url)],Seq.delay(function()
   {
    return Seq.append(!Strings.StartsWith(url,"#")?[AttrProxy.Create("target","_blank")]:[],Seq.delay(function()
    {
     return title!=null&&title.$==1?[AttrProxy.Create("title",title.$0)]:[];
    }));
   }));
  })),List$2.map(function(s)
  {
   return Next$2.SpanToDoc(ctx,s);
  },span.$0)))):span.$==5?(title$1=span.$2,(url$1=(m=(o=null,[ctx.Links.TryGetValue(title$1,{
   get:function()
   {
    return o;
   },
   set:function(v)
   {
    o=v;
   }
  }),o]),m[0]?m[1][0]:title$1),Doc.Element("a",[AttrProxy.Create("title",title$1),AttrProxy.Create("href",url$1),AttrProxy.Create("target","_blank")],List$2.map(function(s)
  {
   return Next$2.SpanToDoc(ctx,s);
  },span.$0)))):span.$==6?(url$2=span.$1[0],(title$2=span.$1[1],Doc.Element("img",List$2.ofSeq(Seq.delay(function()
  {
   return Seq.append([AttrProxy.Create("src",LIFT(url$2))],Seq.delay(function()
   {
    return title$2!=null&&title$2.$==1?[AttrProxy.Create("title",title$2.$0)]:[];
   }));
  })),[Doc.TextNode(span.$0)]))):span.$==7?Doc.Element("img",[AttrProxy.Create("src",span.$1),AttrProxy.Create("title",span.$2)],[Doc.TextNode(span.$0)]):span.$==8?Doc.Element("br",[],[]):Doc.Verbatim(span.$0);
 };
 Matching$1.NonBlockTag=function(e)
 {
  var $1;
  switch(e.$==2?0:e.$==3?0:e.$==4?0:e.$==5?0:e.$==6?0:e.$==20?0:e.$==22?0:e.$==1?1:e.$==12?2:e.$==13?2:e.$==14?2:e.$==15?2:e.$==16?2:e.$==17?2:e.$==18?2:e.$==19?2:e.$==9?2:e.$==10?2:e.$==21?2:e.$==11?2:e.$==7?2:e.$==8?2:0)
  {
   case 0:
    return{
     $:0,
     $0:null
    };
    break;
   case 1:
    return{
     $:1,
     $0:null
    };
    break;
   case 2:
    return{
     $:2,
     $0:null
    };
    break;
  }
 };
 Matching$1.PP_NoMarkup=function(e)
 {
  var $1;
  switch(e.$==1?1:e.$==2?($1=e.$1,2):e.$==3?($1=e.$0,2):e.$==4?($1=e.$0,2):e.$==5?($1=e.$0,2):e.$==6?($1=e.$0,2):e.$==12?($1=e.$0,2):e.$==13?($1=e.$0,2):e.$==14?($1=e.$0,2):e.$==15?($1=e.$0,2):e.$==16?($1=e.$0,2):e.$==17?($1=e.$0,2):e.$==18?($1=e.$0,2):e.$==19?($1=e.$0,2):e.$==9?($1=e.$0,2):e.$==10?($1=e.$0,2):e.$==21?($1=e.$0,2):e.$==22?($1=e.$0,2):e.$==20?($1=e.$0,2):e.$==11?($1=e.$0,2):e.$==7?3:e.$==8?4:0)
  {
   case 0:
    return e.$0;
    break;
   case 1:
    return"\n";
    break;
   case 2:
    return Strings.concat("",List$2.map(Matching$1.PP_NoMarkup,$1));
    break;
   case 3:
    return e.$1;
    break;
   case 4:
    return"";
    break;
  }
 };
 Matching$1.MatchExpressions=function(acc,text)
 {
  var $1,a,a$1,a$2,a$3,a$4,a$5,a$6,a$7,a$8,a$9,a$10,a$11,a$12,a$13,a$14,a$15,a$16,a$17,a$18,a$19,a$20,a$21,a$22;
  return(a=Matching$1.CODE(text),a!=null&&a.$==1?($1=[a.$0[0],a.$0[1]],true):(a$1=Matching$1.LINK(text),a$1!=null&&a$1.$==1?($1=[a$1.$0[0],a$1.$0[1]],true):(a$2=Matching$1.IMAGE(text),a$2!=null&&a$2.$==1?($1=[a$2.$0[0],a$2.$0[1]],true):(a$3=Matching$1.UNORDERED_LIST(text),a$3!=null&&a$3.$==1?($1=[a$3.$0[0],a$3.$0[1]],true):(a$4=Matching$1.ORDERED_LIST(text),a$4!=null&&a$4.$==1?($1=[a$4.$0[0],a$4.$0[1]],true):(a$5=Matching$1.LIST_ITEM(text),a$5!=null&&a$5.$==1?($1=[a$5.$0[0],a$5.$0[1]],true):(a$6=Matching$1.INLINE_CODE(text),a$6!=null&&a$6.$==1?($1=[a$6.$0[0],a$6.$0[1]],true):(a$7=Matching$1.H1(text),a$7!=null&&a$7.$==1?($1=[a$7.$0[0],a$7.$0[1]],true):(a$8=Matching$1.H2(text),a$8!=null&&a$8.$==1?($1=[a$8.$0[0],a$8.$0[1]],true):(a$9=Matching$1.H3(text),a$9!=null&&a$9.$==1?($1=[a$9.$0[0],a$9.$0[1]],true):(a$10=Matching$1.H4(text),a$10!=null&&a$10.$==1?($1=[a$10.$0[0],a$10.$0[1]],true):(a$11=Matching$1.QUOTE(text),a$11!=null&&a$11.$==1?($1=[a$11.$0[0],a$11.$0[1]],true):(a$12=Matching$1.TABLE(text),a$12!=null&&a$12.$==1?($1=[a$12.$0[0],a$12.$0[1]],true):(a$13=Matching$1.TR(text),a$13!=null&&a$13.$==1?($1=[a$13.$0[0],a$13.$0[1]],true):(a$14=Matching$1.TD(text),a$14!=null&&a$14.$==1?($1=[a$14.$0[0],a$14.$0[1]],true):(a$15=Matching$1.BOLD(text),a$15!=null&&a$15.$==1?($1=[a$15.$0[0],a$15.$0[1]],true):(a$16=Matching$1.STRIKE(text),a$16!=null&&a$16.$==1?($1=[a$16.$0[0],a$16.$0[1]],true):(a$17=Matching$1.P(text),a$17!=null&&a$17.$==1?($1=[a$17.$0[0],a$17.$0[1]],true):(a$18=Matching$1.SPAN(text),a$18!=null&&a$18.$==1?($1=[a$18.$0[0],a$18.$0[1]],true):(a$19=Matching$1.STRONG(text),a$19!=null&&a$19.$==1?($1=[a$19.$0[0],a$19.$0[1]],true):(a$20=Matching$1.ITALIC(text),a$20!=null&&a$20.$==1&&($1=[a$20.$0[0],a$20.$0[1]],true))))))))))))))))))))))?Matching$1.MatchExpressions(new List$2.T({
   $:1,
   $0:$1[0],
   $1:acc
  }),$1[1]):(a$21=Matching$1.LINE_BREAK(text),a$21!=null&&a$21.$==1?Matching$1.MatchExpressions(new List$2.T({
   $:1,
   $0:{
    $:1
   },
   $1:acc
  }),a$21.$0):(a$22=Matching$1.NORMAL_TEXT(text),a$22[0]===""?[acc,a$22[1]]:Matching$1.MatchExpressions(List$2.append(Matching$1.replaceUrls(a$22[0]),acc),a$22[1])));
 };
 Matching$1.REV_EXPRESSIONS=function(text)
 {
  return Matching$1.MatchExpressions(List$2.T.Empty,text);
 };
 Matching$1.STRONG=function(a)
 {
  var a$1;
  a$1=Matching$1.BETWEEN_TAGS("strong",true,a);
  return a$1!=null&&a$1.$==1?{
   $:1,
   $0:[{
    $:3,
    $0:a$1.$0[0]
   },a$1.$0[2]]
  }:null;
 };
 Matching$1.P=function(a)
 {
  var a$1;
  a$1=Matching$1.BETWEEN_TAGS("p",true,a);
  return a$1!=null&&a$1.$==1?{
   $:1,
   $0:[{
    $:19,
    $0:a$1.$0[0]
   },a$1.$0[2]]
  }:null;
 };
 Matching$1.SPAN=function(a)
 {
  var a$1;
  a$1=Matching$1.BETWEEN_TAGS("span",true,a);
  return a$1!=null&&a$1.$==1?{
   $:1,
   $0:[{
    $:19,
    $0:a$1.$0[0]
   },a$1.$0[2]]
  }:null;
 };
 Matching$1.TD=function(a)
 {
  var a$1;
  a$1=Matching$1.BETWEEN_TAGS("td",false,a);
  return a$1!=null&&a$1.$==1?{
   $:1,
   $0:[{
    $:19,
    $0:a$1.$0[0]
   },a$1.$0[2]]
  }:null;
 };
 Matching$1.TR=function(a)
 {
  var a$1;
  a$1=Matching$1.BETWEEN_TAGS("tr",false,a);
  return a$1!=null&&a$1.$==1?{
   $:1,
   $0:[{
    $:18,
    $0:a$1.$0[0]
   },a$1.$0[2]]
  }:null;
 };
 Matching$1.TABLE=function(a)
 {
  var a$1;
  a$1=Matching$1.BETWEEN_TAGS("table",false,a);
  return a$1!=null&&a$1.$==1?{
   $:1,
   $0:[{
    $:17,
    $0:a$1.$0[0]
   },a$1.$0[2]]
  }:null;
 };
 Matching$1.QUOTE=function(a)
 {
  var a$1;
  a$1=Matching$1.BETWEEN_TAGS("quote",false,a);
  return a$1!=null&&a$1.$==1?{
   $:1,
   $0:[{
    $:16,
    $0:a$1.$0[0]
   },a$1.$0[2]]
  }:null;
 };
 Matching$1.H4=function(a)
 {
  var a$1;
  a$1=Matching$1.BETWEEN_TAGS("h4",true,a);
  return a$1!=null&&a$1.$==1?{
   $:1,
   $0:[{
    $:15,
    $0:a$1.$0[0]
   },a$1.$0[2]]
  }:null;
 };
 Matching$1.H3=function(a)
 {
  var a$1;
  a$1=Matching$1.BETWEEN_TAGS("h3",true,a);
  return a$1!=null&&a$1.$==1?{
   $:1,
   $0:[{
    $:14,
    $0:a$1.$0[0]
   },a$1.$0[2]]
  }:null;
 };
 Matching$1.H2=function(a)
 {
  var a$1;
  a$1=Matching$1.BETWEEN_TAGS("h2",true,a);
  return a$1!=null&&a$1.$==1?{
   $:1,
   $0:[{
    $:13,
    $0:a$1.$0[0]
   },a$1.$0[2]]
  }:null;
 };
 Matching$1.H1=function(a)
 {
  var a$1;
  a$1=Matching$1.BETWEEN_TAGS("h1",true,a);
  return a$1!=null&&a$1.$==1?{
   $:1,
   $0:[{
    $:12,
    $0:a$1.$0[0]
   },a$1.$0[2]]
  }:null;
 };
 Matching$1.IMAGE=function(a)
 {
  var a$1,o;
  a$1=Matching$1.SINGLE_TAG("img",a);
  return a$1!=null&&a$1.$==1?(o=Matching$1.Assoc("src",a$1.$0[0]),o==null?null:{
   $:1,
   $0:[{
    $:8,
    $0:o.$0
   },a$1.$0[1]]
  }):null;
 };
 Matching$1.LINK=function(a)
 {
  var a$1,exprs,rest,m;
  a$1=Matching$1.BETWEEN_TAGS("a",true,a);
  return a$1!=null&&a$1.$==1?(exprs=a$1.$0[0],(rest=a$1.$0[2],(m=Matching$1.Assoc("href",a$1.$0[1]),m!=null&&m.$==1?{
   $:1,
   $0:[{
    $:2,
    $0:m.$0,
    $1:exprs
   },rest]
  }:{
   $:1,
   $0:[{
    $:2,
    $0:"",
    $1:exprs
   },rest]
  }))):null;
 };
 Matching$1.LIST_ITEM=function(a)
 {
  var a$1;
  a$1=Matching$1.BETWEEN_TAGS("li",false,a);
  return a$1!=null&&a$1.$==1?{
   $:1,
   $0:[{
    $:11,
    $0:a$1.$0[0]
   },a$1.$0[2]]
  }:null;
 };
 Matching$1.ORDERED_LIST=function(a)
 {
  var a$1;
  a$1=Matching$1.BETWEEN_TAGS("ol",false,a);
  return a$1!=null&&a$1.$==1?{
   $:1,
   $0:[{
    $:10,
    $0:a$1.$0[0]
   },a$1.$0[2]]
  }:null;
 };
 Matching$1.UNORDERED_LIST=function(a)
 {
  var a$1;
  a$1=Matching$1.BETWEEN_TAGS("ul",false,a);
  return a$1!=null&&a$1.$==1?{
   $:1,
   $0:[{
    $:9,
    $0:a$1.$0[0]
   },a$1.$0[2]]
  }:null;
 };
 Matching$1.INLINE_CODE=function(a)
 {
  var a$1;
  a$1=Matching$1.BETWEEN_TAGS("c",true,a);
  return a$1!=null&&a$1.$==1?{
   $:1,
   $0:[{
    $:4,
    $0:a$1.$0[0]
   },a$1.$0[2]]
  }:null;
 };
 Matching$1.STRIKE=function(a)
 {
  var a$1;
  a$1=Matching$1.BETWEEN_TAGS("s",true,a);
  return a$1!=null&&a$1.$==1?{
   $:1,
   $0:[{
    $:6,
    $0:a$1.$0[0]
   },a$1.$0[2]]
  }:null;
 };
 Matching$1.ITALIC=function(a)
 {
  var a$1;
  a$1=Matching$1.BETWEEN_TAGS("i",true,a);
  return a$1!=null&&a$1.$==1?{
   $:1,
   $0:[{
    $:5,
    $0:a$1.$0[0]
   },a$1.$0[2]]
  }:null;
 };
 Matching$1.BOLD=function(a)
 {
  var a$1;
  a$1=Matching$1.BETWEEN_TAGS("b",true,a);
  return a$1!=null&&a$1.$==1?{
   $:1,
   $0:[{
    $:3,
    $0:a$1.$0[0]
   },a$1.$0[2]]
  }:null;
 };
 Matching$1.CODE=function(text)
 {
  var $1,a,a$1,code,m;
  return(a=Matching$1.OPEN_TAG("code",text),a!=null&&a.$==1&&(a$1=Matching$1.UNTIL_CLOSE_TAG("code",a.$0[1]),a$1!=null&&a$1.$==1&&($1=[a.$0[0],a$1.$0[0],a$1.$0[1]],true)))?(code=$1[1],{
   $:1,
   $0:[{
    $:7,
    $0:(m=Matching$1.Assoc("lang",$1[0]),m!=null&&m.$==1?m.$0:"text"),
    $1:Strings.EndsWith(code,"\n")?Strings.Substring(code,0,code.length-1):code
   },$1[2]]
  }):null;
 };
 Matching$1.BETWEEN_TAGS=function(tagName,rev,text)
 {
  var $1,a,a$1,a$2;
  return(a=Matching$1.OPEN_TAG(tagName,text),a!=null&&a.$==1&&(a$1=Matching$1.REV_EXPRESSIONS(a.$0[1]),(a$2=Matching$1.CLOSE_TAG(tagName,a$1[1]),a$2!=null&&a$2.$==1&&($1=[a.$0[0],a$1[0],a$2.$0],true))))?{
   $:1,
   $0:[rev?List$2.rev($1[1]):$1[1],$1[0],$1[2]]
  }:null;
 };
 Matching$1.replaceUrls=function(t)
 {
  return List$2.rev(function(acc,t$1)
  {
   var regexp,_match,before,link,domain,after;
   while(true)
    {
     regexp=new window.RegExp("(.*)(https?://([^\\s/]+)(?:/[\\S]*)?)(.*)","i");
     _match=regexp.exec(t$1);
     if(Unchecked.Equals(_match,null)||Arrays.length(_match)===0)
      return new List$2.T({
       $:1,
       $0:{
        $:0,
        $0:t$1
       },
       $1:acc
      });
     else
      {
       before=Arrays.get(_match,1);
       link=Arrays.get(_match,2);
       domain=Arrays.get(_match,3);
       after=Arrays.get(_match,4);
       acc=new List$2.T({
        $:1,
        $0:{
         $:2,
         $0:link,
         $1:List$2.ofArray([{
          $:0,
          $0:"[link:"+domain+"]"
         }])
        },
        $1:new List$2.T({
         $:1,
         $0:{
          $:0,
          $0:after
         },
         $1:acc
        })
       });
       t$1=before;
      }
    }
  }(List$2.T.Empty,t));
 };
 Matching$1.skipWhile=function(f,l)
 {
  var $1;
  while(true)
   {
    if(l.$==1&&(f(l.$0)&&($1=[l.$0,l.$1],true)))
     l=$1[1];
    else
     return l;
   }
 };
 Matching$1.Assoc=function(x,l)
 {
  var o,p;
  o=(p=function(t)
  {
   return Unchecked.Equals(t,x);
  },Seq.tryFind(function($1)
  {
   return p($1[0],$1[1]);
  },l));
  return o==null?null:{
   $:1,
   $0:o.$0[1]
  };
 };
 Matching$1.LINE_BREAK=function(text)
 {
  var o;
  o=Matching$1.matchToken("\n|(?:<br */?>\n?)",1,text);
  return o==null?null:{
   $:1,
   $0:o.$0[1]
  };
 };
 Matching$1.UNTIL_CLOSE_TAG=function(tagName,text)
 {
  return Matching$1.matchToken("\n?(((?!</"+tagName+">)[\\s\\S])*)</"+tagName+">",2,text);
 };
 Matching$1.NORMAL_TEXT=function(text)
 {
  return Matching$1.matchToken("(((?!</?("+Matching$1.validTagsRegex()+").*>|\n|<br */?>\n?)[\\s\\S])*)",1,text).$0;
 };
 Matching$1.validTagsRegex=function()
 {
  SC$5.$cctor();
  return SC$5.validTagsRegex;
 };
 Matching$1.CLOSE_TAG=function(tagName,text)
 {
  var o;
  o=Matching$1.matchToken("</"+tagName+">",1,text);
  return o==null?null:{
   $:1,
   $0:o.$0[1]
  };
 };
 Matching$1.SINGLE_TAG=function(tagName,text)
 {
  var $1,a,a$1,a$2;
  return(a=Matching$1.START_TAG_AND_NAME(tagName,text),a!=null&&a.$==1&&(a$1=Matching$1.STAR(Matching$1.TagArg,a.$0),a$1!=null&&a$1.$==1&&(a$2=Matching$1.Regex("/?>",a$1.$0[1]),a$2!=null&&a$2.$==1&&($1=[a$1.$0[0],a$2.$0],true))))?{
   $:1,
   $0:[$1[0],$1[1]]
  }:null;
 };
 Matching$1.OPEN_TAG=function(tagName,text)
 {
  var $1,a,a$1,a$2;
  return(a=Matching$1.START_TAG_AND_NAME(tagName,text),a!=null&&a.$==1&&(a$1=Matching$1.STAR(Matching$1.TagArg,a.$0),a$1!=null&&a$1.$==1&&(a$2=Matching$1.Regex(">\n*",a$1.$0[1]),a$2!=null&&a$2.$==1&&($1=[a$1.$0[0],a$2.$0],true))))?{
   $:1,
   $0:[$1[0],$1[1]]
  }:null;
 };
 Matching$1.STAR=function(f,s)
 {
  return Matching$1.Star(f,List$2.T.Empty,s);
 };
 Matching$1.Star=function(f,acc,s)
 {
  var m;
  while(true)
   {
    m=f(s);
    if(m==null)
     return{
      $:1,
      $0:[List$2.rev(acc),s]
     };
    else
     {
      acc=new List$2.T({
       $:1,
       $0:m.$0[0],
       $1:acc
      });
      s=m.$0[1];
     }
   }
 };
 Matching$1.TagArg=function(text)
 {
  var m;
  m=Matching$1.match2Tokens(" *([^<> =]+)=\"([^\"]*)\"",2,3,text);
  return m==null?Matching$1.match2Tokens(" *([^<> =]+)=([^<> =]+)",2,3,text):{
   $:1,
   $0:m.$0
  };
 };
 Matching$1.START_TAG_AND_NAME=function(tagName,text)
 {
  return Matching$1.Regexp("<"+tagName,text);
 };
 Matching$1.Regex=function(pattern,text)
 {
  return Matching$1.Regexp(pattern,text);
 };
 Matching$1.Regexp=function(pattern,text)
 {
  var o;
  o=Matching$1.matchToken(pattern,1,text);
  return o==null?null:{
   $:1,
   $0:o.$0[1]
  };
 };
 Matching$1.ValidTags=function()
 {
  SC$5.$cctor();
  return SC$5.ValidTags;
 };
 Matching$1.match2Tokens=function(pattern,i1,i2,s)
 {
  var results,o,x;
  results=(new window.RegExp("^("+pattern+")([\\s\\S]*)","i")).exec(s);
  return results==void 0?null:(o={
   $:1,
   $0:results
  },o==null?null:{
   $:1,
   $0:(x=o.$0,[[Arrays.get(x,i1),Arrays.get(x,i2)],Arrays.get(x,Arrays.length(x)-1)])
  });
 };
 Matching$1.matchToken=function(pattern,index,s)
 {
  var results,o,x;
  results=(new window.RegExp("^("+pattern+")([\\s\\S]*)","i")).exec(s);
  return results==void 0?null:(o={
   $:1,
   $0:results
  },o==null?null:{
   $:1,
   $0:(x=o.$0,[Arrays.get(x,index),Arrays.get(x,Arrays.length(x)-1)])
  });
 };
 Common$2.TranslateToString=function(text)
 {
  return Strings.concat("",List$2.map(Common$2.Pretty,Common$2.Parse(Strings.Replace(text,"\r\n","\n"))));
 };
 Common$2.Pretty=function(a)
 {
  return a.$==1?"<br/>":a.$==2?"<a href=\""+a.$0+"\">"+Strings.concat("",List$2.map(Common$2.Pretty,a.$1))+"</a>":a.$==3?"<b>"+Strings.concat("",List$2.map(Common$2.Pretty,a.$0))+"</b>":a.$==4?"<code>"+Strings.concat("",List$2.map(Common$2.Pretty,a.$0))+"</code>":a.$==5?"<i>"+Strings.concat("",List$2.map(Common$2.Pretty,a.$0))+"</i>":a.$==6?"<del>"+Strings.concat("",List$2.map(Common$2.Pretty,a.$0))+"</del>":a.$==7?"<pre class=\"brush: "+a.$0+"; toolbar: false;\">"+a.$1+"</pre>":a.$==8?"<img src=\""+a.$0+"\" />":a.$==9?"<ul>"+Strings.concat("",List$2.map(Common$2.Pretty,a.$0))+"</ul>":a.$==10?"<ol>"+Strings.concat("",List$2.map(Common$2.Pretty,a.$0))+"</ol>":a.$==11?"<li>"+Strings.concat("",List$2.map(Common$2.Pretty,a.$0))+"</li>":a.$==12?"<h1 style=\"font-size: 130%\">"+Strings.concat("",List$2.map(Common$2.Pretty,a.$0))+"</h1>":a.$==13?"<h2 style=\"font-size: 120%\">"+Strings.concat("",List$2.map(Common$2.Pretty,a.$0))+"</h2>":a.$==14?"<h3 style=\"font-size: 110%\">"+Strings.concat("",List$2.map(Common$2.Pretty,a.$0))+"</h3>":a.$==15?"<h4 style=\"font-size: 100%;font-weight:bold\">"+Strings.concat("",List$2.map(Common$2.Pretty,a.$0))+"</h4>":a.$==16?"<blockquote style=\"border-left:3px solid rgb(135, 176, 213);padding-left:5px;margin-left:0\">"+Strings.concat("",List$2.map(Common$2.Pretty,a.$0))+"</blockquote>":a.$==17?"<table style=\"border-collapse:collapse\"><tbody>"+Strings.concat("",List$2.map(Common$2.Pretty,a.$0))+"</tbody></table>":a.$==18?"<tr>"+Strings.concat("",List$2.map(Common$2.Pretty,a.$0))+"</tr>":a.$==19?"<td style=\"border:1px solid rgb(221, 221, 221);padding:2px 5px\">"+Strings.concat("",List$2.map(Common$2.Pretty,a.$0))+"</td>":a.$==21?"<p>"+Strings.concat("",List$2.map(Common$2.Pretty,a.$0))+"</p>":a.$==22?"<strong>"+Strings.concat("",List$2.map(Common$2.Pretty,a.$0))+"</strong>":a.$==20?"<span>"+Strings.concat("",List$2.map(Common$2.Pretty,a.$0))+"</span>":a.$0;
 };
 Common$2.RemoveMarkup=function(t)
 {
  return Strings.concat("",List$2.map(Matching$1.PP_NoMarkup,Common$2.Parse(t)));
 };
 Common$2.Parse=function(t)
 {
  var a;
  return Common$2.MergeParagraphs(List$2.T.Empty,List$2.T.Empty,(a=Matching$1.REV_EXPRESSIONS(t),a[1]===""?a[0]:new List$2.T({
   $:1,
   $0:{
    $:0,
    $0:a[1]
   },
   $1:a[0]
  })));
 };
 Common$2.MergeParagraphs=function(allBlocks,currentBlock,es)
 {
  var $1,a,e,m,$2,rest,x,e$1,rest$1;
  switch(es.$==1?(a=Matching$1.NonBlockTag(es.$0),a.$==1?es.$1.$==1?Matching$1.NonBlockTag(es.$1.$0).$==1?($1=es.$1.$1,2):($1=[es.$0,es.$1],3):($1=[es.$0,es.$1],3):a.$==0?($1=[es.$0,es.$1],3):($1=[es.$0,es.$1],1)):0)
  {
   case 0:
    return Common$2.addBlock(currentBlock,allBlocks);
    break;
   case 1:
    e=$1[0];
    return Common$2.MergeParagraphs(new List$2.T({
     $:1,
     $0:e.$==16?{
      $:16,
      $0:Common$2.MergeParagraphs(List$2.T.Empty,List$2.T.Empty,e.$0)
     }:e.$==9?{
      $:9,
      $0:Common$2.MergeParagraphs(List$2.T.Empty,List$2.T.Empty,e.$0)
     }:e.$==10?{
      $:10,
      $0:Common$2.MergeParagraphs(List$2.T.Empty,List$2.T.Empty,e.$0)
     }:e.$==17?{
      $:17,
      $0:Common$2.MergeParagraphs(List$2.T.Empty,List$2.T.Empty,e.$0)
     }:e.$==19?{
      $:19,
      $0:Common$2.MergeParagraphs(List$2.T.Empty,List$2.T.Empty,e.$0)
     }:e.$==18?{
      $:18,
      $0:Common$2.MergeParagraphs(List$2.T.Empty,List$2.T.Empty,e.$0)
     }:e.$==11?(m=Common$2.MergeParagraphs(List$2.T.Empty,List$2.T.Empty,e.$0),m.$==1?m.$0.$==21?m.$1.$==0?$2=m.$0.$0:$2=m:$2=m:$2=m,{
      $:11,
      $0:$2
     }):e,
     $1:Common$2.addBlock(currentBlock,allBlocks)
    }),List$2.T.Empty,$1[1]);
    break;
   case 2:
    rest=Matching$1.skipWhile((x={
     $:1
    },function(y)
    {
     return Unchecked.Equals(x,y);
    }),$1);
    return Common$2.MergeParagraphs(Common$2.addBlock(currentBlock,allBlocks),List$2.T.Empty,rest);
    break;
   case 3:
    e$1=$1[0];
    rest$1=$1[1];
    return Common$2.MergeParagraphs(allBlocks,Common$2.isLinebreakOrWhitespace(e$1)&&(currentBlock.$==0||Common$2.startsWithBlockTag(rest$1))?currentBlock:new List$2.T({
     $:1,
     $0:e$1,
     $1:currentBlock
    }),rest$1);
    break;
  }
 };
 Common$2.startsWithBlockTag=function(a)
 {
  return a.$==1?Matching$1.NonBlockTag(a.$0).$==2&&true:true;
 };
 Common$2.addBlock=function(currentBlock,allBlocks)
 {
  var $1;
  switch(currentBlock.$==1?currentBlock.$0.$==0?currentBlock.$1.$==0?(new window.RegExp("^\\s*$")).test(currentBlock.$0.$0)?($1=currentBlock.$0.$0,1):2:2:2:0)
  {
   case 0:
    return allBlocks;
    break;
   case 1:
    return allBlocks;
    break;
   case 2:
    return new List$2.T({
     $:1,
     $0:{
      $:21,
      $0:currentBlock
     },
     $1:allBlocks
    });
    break;
  }
 };
 Common$2.isLinebreakOrWhitespace=function(a)
 {
  return a.$==1||a.$==0&&((new window.RegExp("^\\s*$")).test(a.$0)&&true);
 };
 SC$5.$cctor=Runtime.Cctor(function()
 {
  SC$5.ValidTags=List$2.ofArray(["a","b","c","i","s","code","img","ul","ol","li","h1","h2","h3","h4","quote","table","tr","td","p","span","strong"]);
  SC$5.validTagsRegex=Strings.concat("(?!\\w)|",Matching$1.ValidTags())+"(?!\\w)";
  SC$5.$cctor=window.ignore;
 });
 Client$3.Translate=function(text)
 {
  var x;
  x=List$2.map(Client$3.PP,Common$2.Parse(Strings.Replace(text,"\r\n","\n")));
  return Tags.Tags().NewTag("div",x);
 };
 Client$3.PP=function(a)
 {
  var a$1,a$2,a$3,a$4,a$5,a$6,a$7,a$8,a$9,a$10,a$11,a$12,a$13,a$14,a$15,a$16,a$17,a$18,a$19,a$20;
  return a.$==1?Tags.Tags().NewTag("br",[]):a.$==2?Operators$1.add((a$1=[Attr.Attr().NewAttr("href",a.$0)],Tags.Tags().NewTag("a",a$1)),List$2.map(Client$3.PP,a.$1)):a.$==3?(a$2=List$2.map(Client$3.PP,a.$0),Tags.Tags().NewTag("b",a$2)):a.$==4?Tags.Tags().NewTag("code",List$2.map(Client$3.PP,a.$0)):a.$==5?(a$3=List$2.map(Client$3.PP,a.$0),Tags.Tags().NewTag("i",a$3)):a.$==6?(a$4=List$2.map(Client$3.PP,a.$0),Tags.Tags().NewTag("del",a$4)):a.$==7?Client$1.CodeBlock(a.$0,a.$1,1):a.$==8?(a$5=[Attr.Attr().NewAttr("src",a.$0)],Tags.Tags().NewTag("img",a$5)):a.$==9?(a$6=List$2.map(Client$3.PP,a.$0),Tags.Tags().NewTag("ul",a$6)):a.$==10?(a$7=List$2.map(Client$3.PP,a.$0),Tags.Tags().NewTag("ol",a$7)):a.$==11?(a$8=List$2.map(Client$3.PP,a.$0),Tags.Tags().NewTag("li",a$8)):a.$==12?(a$9=List$2.map(Client$3.PP,a.$0),Tags.Tags().NewTag("h1",a$9)):a.$==13?(a$10=List$2.map(Client$3.PP,a.$0),Tags.Tags().NewTag("h2",a$10)):a.$==14?(a$11=List$2.map(Client$3.PP,a.$0),Tags.Tags().NewTag("h3",a$11)):a.$==15?(a$12=List$2.map(Client$3.PP,a.$0),Tags.Tags().NewTag("h4",a$12)):a.$==16?(a$13=List$2.map(Client$3.PP,a.$0),Tags.Tags().NewTag("blockquote",a$13)):a.$==17?(a$14=[(a$15=List$2.map(Client$3.PP,a.$0),Tags.Tags().NewTag("tbody",a$15))],Tags.Tags().NewTag("table",a$14)):a.$==18?(a$16=List$2.map(Client$3.PP,a.$0),Tags.Tags().NewTag("tr",a$16)):a.$==19?(a$17=List$2.map(Client$3.PP,a.$0),Tags.Tags().NewTag("td",a$17)):a.$==21?(a$18=List$2.map(Client$3.PP,a.$0),Tags.Tags().NewTag("p",a$18)):a.$==22?(a$19=List$2.map(Client$3.PP,a.$0),Tags.Tags().NewTag("strong",a$19)):a.$==20?(a$20=List$2.map(Client$3.PP,a.$0),Tags.Tags().NewTag("span",a$20)):Tags.Tags().text(a.$0);
 };
 Next$3.Translate=function(text)
 {
  return Doc.Concat(List$2.map(Next$3.PP,Common$2.Parse(Strings.Replace(text,"\r\n","\n"))));
 };
 Next$3.PP=function(a)
 {
  return a.$==1?Doc.Element("br",[],[]):a.$==2?Doc.Element("a",[AttrProxy.Create("href",a.$0)],List$2.map(Next$3.PP,a.$1)):a.$==3?Doc.Element("b",[],List$2.map(Next$3.PP,a.$0)):a.$==4?Doc.Element("code",[],List$2.map(Next$3.PP,a.$0)):a.$==5?Doc.Element("em",[],List$2.map(Next$3.PP,a.$0)):a.$==6?Doc.Element("del",[],List$2.map(Next$3.PP,a.$0)):a.$==7?Next$1.CodeBlock(a.$0,a.$1,1):a.$==8?Doc.Element("img",[AttrProxy.Create("src",a.$0)],[]):a.$==9?Doc.Element("ul",[],List$2.map(Next$3.PP,a.$0)):a.$==10?Doc.Element("ol",[],List$2.map(Next$3.PP,a.$0)):a.$==11?Doc.Element("li",[],List$2.map(Next$3.PP,a.$0)):a.$==12?Doc.Element("h1",[],List$2.map(Next$3.PP,a.$0)):a.$==13?Doc.Element("h2",[],List$2.map(Next$3.PP,a.$0)):a.$==14?Doc.Element("h3",[],List$2.map(Next$3.PP,a.$0)):a.$==15?Doc.Element("h4",[],List$2.map(Next$3.PP,a.$0)):a.$==16?Doc.Element("blockquote",[],List$2.map(Next$3.PP,a.$0)):a.$==17?Doc.Element("table",[],[Doc.Element("tbody",[],List$2.map(Next$3.PP,a.$0))]):a.$==18?Doc.Element("tr",[],List$2.map(Next$3.PP,a.$0)):a.$==19?Doc.Element("td",[],List$2.map(Next$3.PP,a.$0)):a.$==21?Doc.Element("p",[],List$2.map(Next$3.PP,a.$0)):a.$==22?Doc.Element("strong",[],List$2.map(Next$3.PP,a.$0)):a.$==20?Doc.Element("span",[],List$2.map(Next$3.PP,a.$0)):Doc.TextNode(a.$0);
 };
}());
